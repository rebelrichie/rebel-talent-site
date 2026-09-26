// Public job board transforms. Rebel Command stays the system of record.
// This module only changes what the marketing site shows and what it
// puts in JobPosting JSON-LD.

const TPM_ID = "5ab49383";
const FULL_STACK_ID = "b2b4ef85";
const RECRUITER_ID = "eda03068";
const AE_ID = "816ab33d";
const BD_ID = "96482cb4";

const DASHES = /[\u2010\u2011\u2012\u2013\u2014\u2015\u2212]/g;
const POSTING_WINDOW_DAYS = 90;

const STATE_RE =
  /\b(AL|AK|AZ|AR|CA|CO|CT|DC|DE|FL|GA|HI|IA|ID|IL|IN|KS|KY|LA|MA|MD|ME|MI|MN|MO|MS|MT|NC|ND|NE|NH|NJ|NM|NV|NY|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VA|VT|WA|WI|WV|WY)\b/;

const TPM_REQUIREMENTS = `Technically grounded technical product manager for a confidential client's connected hardware and software products. You sit between Sales, Engineering, and the customer. On-site in West Michigan.

Musts:
- 5+ years as a product manager, technical product manager, or applications engineer
- Hardware and software together (IoT). Closest backgrounds are industrial equipment, safety products, or cloud-connected devices
- SaaS or cloud (AWS or Azure) and edge-to-cloud systems
- Bachelor's degree in a technical or business field. Engineering preferred

Benefits: PTO, health, dental, vision, holidays, and 401(k). EOE.`;

const TPM_IDEAL = `A product manager who can sit with Sales, Engineering, and the customer on a connected hardware and software product. The role is on-site in West Michigan. Local candidates are preferred.`;

const FULL_STACK_IDEAL = `A confidential search. Client name is shared with qualified candidates on the first conversation.

The client's geospatial platform helps teams decide where complex infrastructure should go, and what those plans cost.

The product (Java backend, React front end, PostgreSQL and PostGIS) is being rebuilt around applied intelligence. The work is hands-on, full stack, and close to the algorithms. The team is small, senior, and remote-first. Your work shows up in the product within weeks.

The start is a 3-month contract with a path to full-time. One technical conversation with the tech lead, then a fast decision.`;

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function cleanRecruiterText(value) {
  if (!hasText(value)) return value ?? null;
  return value
    .replace(/\s*\([^)]*obviously we don.?t have these[^)]*\)/gi, "")
    .replace(/contingent with a deposit/gi, "contingent with no deposit")
    .replace(
      /US citizens only,\s*no visa sponsorship\.?/gi,
      "You must already be authorized to work in the United States. This role does not include visa sponsorship.",
    )
    .replace(
      /First APPLY here\.\s*After that\s*[-\u2013\u2014]\s*Email /g,
      "First APPLY here. After that, email ",
    )
    .replace(
      /We.?ll be hiring for this again in the near future(?![.!?])/g,
      "We'll be hiring for this again in the near future.",
    );
}

function isOldTpmBand(comp) {
  const parsed = parseSalary(comp);
  const value = parsed && parsed.value;
  return !!value
    && value.unitText === "YEAR"
    && value.minValue === 85000
    && value.maxValue === 115000;
}

function softenTpm(job) {
  job.location = "West Michigan";
  job.requirements = TPM_REQUIREMENTS;
  job.idealProfile = TPM_IDEAL;
  // Command still stores the previous band. The public page and feed
  // show the approved range until Command itself is updated.
  if (isOldTpmBand(job.compensationRange)) {
    job.compensationRange = "$100,000 - $140,000";
  }
}

function softenFullStack(job) {
  if (hasText(job.requirements)) {
    job.requirements = job.requirements.replace(
      /fiber or telecom network planning\s*\([^)]*\)\s*,?\s*/gi,
      "infrastructure planning, ",
    );
  }
  job.idealProfile = FULL_STACK_IDEAL;
}

function softenRecruiter(job) {
  job.requirements = cleanRecruiterText(job.requirements);
  job.idealProfile = cleanRecruiterText(job.idealProfile);
  job.notes = cleanRecruiterText(job.notes);
}


// Site voice: no em/en dashes as clause breaks in public location/salary copy.
// Numeric ranges keep an ASCII hyphen. Clause breaks become a comma.
function displayCopyDashes(value, mode) {
  if (!hasText(value)) return value ?? null;
  let next = value;
  if (mode === "salary") {
    // $85,000–$115,000 or 85k—110k → ASCII hyphen
    next = next.replace(DASHES, "-");
  } else {
    // Remote — DC preferred → Remote, DC preferred
    // Keep digit–digit ranges as ASCII hyphen if any appear in location.
    next = next
      .replace(/(\d)\s*[\u2010\u2011\u2012\u2013\u2014\u2015\u2212]\s*(\d)/g, "$1-$2")
      .replace(/\s*[\u2010\u2011\u2012\u2013\u2014\u2015\u2212]\s*/g, ", ");
  }
  return next.replace(/,\s*,/g, ",").replace(/\s+/g, " ").trim();
}

function fillRemoteUs(job) {
  if (hasText(job.location)) return;
  job.location = "Remote, US";
  if (!hasText(job.remotePolicy)) job.remotePolicy = "Remote";
}

export function toPublicJob(job) {
  if (!job || typeof job !== "object") return job;
  const next = { ...job };
  if (typeof next.companyName === "string" && /^confidential$/i.test(next.companyName.trim())) {
    next.companyName = "Confidential Client";
  }
  const id = String(next.id || "");
  if (id.startsWith(TPM_ID)) softenTpm(next);
  if (id.startsWith(FULL_STACK_ID)) softenFullStack(next);
  if (id.startsWith(RECRUITER_ID)) softenRecruiter(next);
  if (id.startsWith(AE_ID) || id.startsWith(BD_ID)) fillRemoteUs(next);
  if (hasText(next.location)) next.location = displayCopyDashes(next.location, "location");
  if (hasText(next.compensationRange)) {
    next.compensationRange = displayCopyDashes(next.compensationRange, "salary");
  }
  return next;
}

function monetary(value, unitText) {
  return {
    "@type": "MonetaryAmount",
    currency: "USD",
    value: { "@type": "QuantitativeValue", ...value, unitText },
  };
}

function numberFrom(raw) {
  const n = Number(String(raw).replace(/,/g, ""));
  return Number.isFinite(n) ? n : NaN;
}

// Annual ranges. Accepts $, optional thousands separators, K/k, hyphen,
// en dash, em dash, and the word "to". Does not treat a bare 1099 as pay.
export function parseSalary(comp) {
  if (!hasText(comp)) return null;
  const text = comp.replace(DASHES, "-").replace(/\s+/g, " ").trim();

  if (/\b(?:hr|hour|hourly)\b/i.test(text) || /\/\s*hr\b/i.test(text)) {
    const hourly = text.match(/\$?\s*([\d,]+(?:\.\d+)?)\s*(?:\/|\s*per\s*)?\s*(?:hr|hour)\b/i);
    if (!hourly) return null;
    const value = numberFrom(hourly[1]);
    if (!Number.isFinite(value) || value <= 0 || value > 1000) return null;
    return monetary({ value }, "HOUR");
  }

  const range = text.match(
    /\$?\s*(\d{1,3}(?:,\d{3})+|\d+(?:\.\d+)?)\s*([kK])?\s*(?:-+|\bto\b)\s*\$?\s*(\d{1,3}(?:,\d{3})+|\d+(?:\.\d+)?)\s*([kK])?(?!\w)/,
  );
  if (!range) return null;

  let min = numberFrom(range[1]);
  let max = numberFrom(range[3]);
  const minK = Boolean(range[2]);
  const maxK = Boolean(range[4]);
  if (minK) min *= 1000;
  if (maxK) max *= 1000;
  if (minK && !maxK && max < 1000) max *= 1000;
  if (maxK && !minK && min < 1000) min *= 1000;
  if (!Number.isFinite(min) || !Number.isFinite(max)) return null;
  if (min <= 0 || max <= 0 || max < min) return null;
  // Both sides still under 1,000 means we did not see a real annual range.
  // Do not invent a thousands multiplier.
  if (min < 1000 && max < 1000) return null;
  return monetary({ minValue: min, maxValue: max }, "YEAR");
}

export function employmentTypeFor(job) {
  const id = String(job?.id || "");
  const title = job?.title || "";
  const comp = job?.compensationRange || "";
  if (id.startsWith(RECRUITER_ID)) return "CONTRACTOR";
  if (/\b1099\b/.test(title) || /\b1099\b/.test(comp)) return "CONTRACTOR";
  return "FULL_TIME";
}

// datePosted stays the day Command opened the role. If that window has
// already closed and Command still returns the role, push validThrough
// forward so Google does not expire a live listing.
export function postingDates(openedAt, createdAt, now = new Date()) {
  const posted = new Date(openedAt || createdAt || now.toISOString());
  if (Number.isNaN(posted.getTime())) {
    const fallback = new Date(now.getTime());
    fallback.setUTCDate(fallback.getUTCDate() + POSTING_WINDOW_DAYS);
    return {
      datePosted: now.toISOString().slice(0, 10),
      validThrough: fallback.toISOString().slice(0, 10),
    };
  }
  const valid = new Date(posted.getTime());
  valid.setUTCDate(valid.getUTCDate() + POSTING_WINDOW_DAYS);
  const datePosted = posted.toISOString().slice(0, 10);
  if (valid.getTime() >= now.getTime()) {
    return { datePosted, validThrough: valid.toISOString().slice(0, 10) };
  }
  const extended = new Date(now.getTime());
  extended.setUTCDate(extended.getUTCDate() + POSTING_WINDOW_DAYS);
  return { datePosted, validThrough: extended.toISOString().slice(0, 10) };
}

function countriesOf(blob) {
  const names = [];
  if (/\bcanada\b/i.test(blob)) names.push("Canada");
  if (/\b(?:united states|u\.s\.a\.|usa|u\.s\.|\bus\b)\b/i.test(blob) || names.length === 0) {
    names.unshift("United States");
  }
  return names;
}

function looksRemote(location, remotePolicy) {
  return /remote/i.test(`${location || ""} ${remotePolicy || ""}`);
}

export function structuredPlace(job) {
  const id = String(job?.id || "");
  const location = job?.location || "";
  const remotePolicy = job?.remotePolicy || "";
  if (id.startsWith(TPM_ID) || /^west michigan$/i.test(location.trim())) {
    return { city: "West Michigan", state: "MI", remote: false, countries: ["United States"] };
  }

  const remote = looksRemote(location, remotePolicy);
  const withoutParen = location.replace(/\s*\([^)]*\)/g, " ").replace(/\s+/g, " ").trim();
  const head = withoutParen.split(/\s+[—–-]\s+/)[0].trim();
  const countries = countriesOf(`${location} ${remotePolicy}`);

  if (/remote/i.test(head)) {
    return { city: "", state: "", remote: true, countries };
  }

  const parts = head.split(",").map((part) => part.trim()).filter(Boolean);
  const city = parts[0] || "";
  const rest = parts.slice(1).join(" ");
  const state = rest.match(STATE_RE)?.[1] || "";
  if (/^remote\b/i.test(city)) {
    return { city: "", state: "", remote: true, countries };
  }
  return { city, state, remote, countries };
}

export function buildJobJsonLd(job, url) {
  const place = structuredPlace(job);
  const { datePosted, validThrough } = postingDates(job?.openedAt, job?.createdAt);
  const descriptionHtml = [
    job?.requirements && `<h3>Requirements</h3><p>${String(job.requirements).replace(/\n/g, "<br/>")}</p>`,
    job?.idealProfile && `<h3>Ideal Candidate</h3><p>${String(job.idealProfile).replace(/\n/g, "<br/>")}</p>`,
    job?.notes && `<h3>Additional Details</h3><p>${String(job.notes).replace(/\n/g, "<br/>")}</p>`,
  ].filter(Boolean).join("\n") || "See full listing for details.";

  const ld = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    title: job?.title,
    description: descriptionHtml,
    datePosted,
    validThrough,
    employmentType: employmentTypeFor(job),
    hiringOrganization: {
      "@type": "Organization",
      name: job?.companyName,
      sameAs: job?.companyWebsite || "https://rebeltalentsystems.com",
    },
    directApply: false,
    url,
  };

  if (place.city || place.state) {
    const address = { "@type": "PostalAddress", addressCountry: "US" };
    if (place.city) address.addressLocality = place.city;
    if (place.state) address.addressRegion = place.state;
    ld.jobLocation = { "@type": "Place", address };
  }

  if (place.remote) {
    ld.jobLocationType = "TELECOMMUTE";
    const countries = place.countries.length ? place.countries : ["United States"];
    ld.applicantLocationRequirements = countries.length === 1
      ? { "@type": "Country", name: countries[0] }
      : countries.map((name) => ({ "@type": "Country", name }));
  } else if (!ld.jobLocation) {
    ld.jobLocation = {
      "@type": "Place",
      address: { "@type": "PostalAddress", addressCountry: "US" },
    };
  }

  const salary = parseSalary(job?.compensationRange);
  if (salary) ld.baseSalary = salary;
  return ld;
}

export function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// Swap the SPA shell's homepage title and index,follow robots tag.
// Used for /apply URLs, which nginx serves as static HTML.
export function applyDocumentShell(html, title) {
  const safe = escapeHtml(title);
  let next = String(html).replace(/<title>[^<]*<\/title>/i, `<title>${safe}</title>`);
  if (/<meta\s+name="robots"/i.test(next)) {
    next = next.replace(
      /<meta\s+name="robots"\s+content="[^"]*"\s*\/?>/i,
      '<meta name="robots" content="noindex, follow">',
    );
  } else {
    next = next.replace(/<head>/i, '<head>\n    <meta name="robots" content="noindex, follow">');
  }
  return next;
}
