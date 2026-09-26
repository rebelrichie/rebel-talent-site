// Talent.com XML feed for the public jobs board.
// Inventory is the Rebel Command public jobs API. Public copy, salary,
// and location come from publicJob.mjs, the same module the pages use.

import {
  employmentTypeFor,
  parseSalary,
  postingDates,
  structuredPlace,
  toPublicJob,
} from "./publicJob.mjs";

export const PUBLIC_JOBS_API = "https://rebelcommand.dev/api/public/jobs";
export const SITE_ORIGIN = "https://rebeltalentsystems.com";
export const JOBS_FEED_PATH = "/feeds/jobs.xml";

function slugify(text) {
  return String(text)
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

// Keep in sync with client/src/lib/jobSlug.ts and scripts/prerender.mjs.
export function jobPath(job) {
  const pub = toPublicJob(job);
  const parts = [pub?.title, pub?.companyName, pub?.location]
    .filter((p) => p && String(p).trim().length > 0)
    .map(slugify)
    .filter((p) => p.length > 0);
  const slug = parts.join("-");
  const id = pub?.id || job?.id;
  return slug && id ? `/jobs/${slug}-${id}` : id ? `/jobs/${id}` : "/jobs";
}

function isFeedJob(job) {
  if (!job || typeof job.id !== "string" || !job.id.trim()) return false;
  const id = job.id.trim().toLowerCase();
  if (id === "general") return false;
  const path = jobPath(job);
  if (path === "/jobs/general" || path === "/jobs/general/") return false;
  if (job.status && String(job.status).toLowerCase() !== "open") return false;
  return true;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function markdownToHtml(text) {
  const lines = String(text).split("\n");
  const out = [];
  let list = null;
  const close = () => {
    if (list) {
      out.push(`</${list}>`);
      list = null;
    }
  };
  const inline = (t) => escapeHtml(t).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  for (const raw of lines) {
    const line = raw.trim();
    if (!line || line === "---") {
      close();
      continue;
    }
    const heading = line.match(/^#{1,3}\s+(.*)$/);
    if (heading) {
      close();
      out.push(`<h3>${inline(heading[1])}</h3>`);
      continue;
    }
    if (line.startsWith("- ") || line.startsWith("* ")) {
      if (list !== "ul") {
        close();
        out.push("<ul>");
        list = "ul";
      }
      out.push(`<li>${inline(line.slice(2))}</li>`);
      continue;
    }
    const ordered = line.match(/^\d+\.\s+(.*)$/);
    if (ordered) {
      if (list !== "ol") {
        close();
        out.push("<ol>");
        list = "ol";
      }
      out.push(`<li>${inline(ordered[1])}</li>`);
      continue;
    }
    close();
    out.push(`<p>${inline(line)}</p>`);
  }
  close();
  return out.join("");
}

function descriptionHtml(job) {
  const parts = [];
  if (job.requirements) parts.push(`<h3>Requirements</h3>${markdownToHtml(job.requirements)}`);
  if (job.idealProfile) parts.push(`<h3>Ideal Candidate</h3>${markdownToHtml(job.idealProfile)}`);
  if (job.notes) parts.push(`<h3>Additional Details</h3>${markdownToHtml(job.notes)}`);
  let html = parts.join("");
  const plain = html.replace(/<[^>]+>/g, "").trim();
  if (plain.length < 50) {
    const company = job.companyName || "The hiring team";
    const title = job.title || "this role";
    const where = job.location ? ` in ${job.location}` : "";
    html += `<p>${escapeHtml(`${company} is hiring a ${title}${where}.`)} The role is open and Rebel Talent Systems is speaking with candidates now.</p>`;
  }
  return html;
}

function cdata(value) {
  return `<![CDATA[${String(value ?? "").replaceAll("]]>", "]]]]><![CDATA[>")}]]>`;
}

function isoStamp(value) {
  const d = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(d.getTime())) return "";
  return d.toISOString().replace(/\.\d{3}Z$/, "Z");
}

function salaryParts(comp) {
  const parsed = parseSalary(comp);
  const value = parsed && parsed.value;
  if (!value) return null;
  if (value.unitText === "HOUR" && Number.isFinite(value.value)) {
    return { min: value.value, max: value.value, period: "hour" };
  }
  if (!Number.isFinite(value.minValue) || !Number.isFinite(value.maxValue)) return null;
  return { min: value.minValue, max: value.maxValue, period: "year" };
}

function salaryXml(comp) {
  const salary = salaryParts(comp);
  if (!salary) return "";
  return [
    "    <salary>",
    `      <salary_min>${cdata(salary.min)}</salary_min>`,
    `      <salary_max>${cdata(salary.max)}</salary_max>`,
    `      <salary_currency>${cdata("USD")}</salary_currency>`,
    `      <period>${cdata(salary.period)}</period>`,
    `      <type>${cdata("BASE_SALARY")}</type>`,
    "    </salary>",
  ].join("\n");
}

function jobTypeLabel(job) {
  return employmentTypeFor(job) === "CONTRACTOR" ? "Contract" : "Full time";
}

function postalOf(job) {
  const postal = String(job?.address?.postalCode || "").trim();
  return /^\d{5}(?:-\d{4})?$/.test(postal) ? postal.slice(0, 5) : "";
}

function jobXml(job, generatedAt) {
  const place = structuredPlace(job);
  const dates = postingDates(job.openedAt, job.createdAt, generatedAt);
  const postedSource = job.openedAt || job.createdAt;
  const dateposted = postedSource ? isoStamp(postedSource) : `${dates.datePosted}T00:00:00Z`;
  const [yyyy, mm, dd] = dates.validThrough.split("-");
  const expiration = yyyy && mm && dd ? `${mm}-${dd}-${yyyy}T00:00:00Z` : "";
  const country = place.countries[0] || "United States";
  const lines = [
    "  <job>",
    `    <referencenumber>${cdata(job.id)}</referencenumber>`,
    `    <title>${cdata(job.title || "")}</title>`,
    `    <company>${cdata(job.companyName || "")}</company>`,
    `    <city>${cdata(place.city)}</city>`,
    `    <state>${cdata(place.state)}</state>`,
    `    <country>${cdata(country)}</country>`,
    `    <dateposted>${cdata(dateposted)}</dateposted>`,
    `    <url>${cdata(SITE_ORIGIN + jobPath(job))}</url>`,
    `    <description>${cdata(descriptionHtml(job))}</description>`,
  ];
  const street = String(job?.address?.streetAddress || "").trim();
  if (street) lines.push(`    <streetaddress>${cdata(street)}</streetaddress>`);
  const postal = postalOf(job);
  if (postal) lines.push(`    <postalcode>${cdata(postal)}</postalcode>`);
  if (expiration) lines.push(`    <expirationdate>${cdata(expiration)}</expirationdate>`);
  const salary = salaryXml(job.compensationRange);
  if (salary) lines.push(salary);
  lines.push(`    <isremote>${cdata(place.remote ? "yes" : "no")}</isremote>`);
  lines.push(`    <jobtype>${cdata(jobTypeLabel(job))}</jobtype>`);
  lines.push("  </job>");
  return lines.join("\n");
}

export function buildJobsFeedXml(jobs, generatedAt = new Date()) {
  const list = (Array.isArray(jobs) ? jobs : [])
    .map((job) => toPublicJob(job))
    .filter((job) => isFeedJob(job));
  const body = list.map((job) => jobXml(job, generatedAt)).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<source>
  <publisher>Rebel Talent Systems</publisher>
  <publisherurl>${SITE_ORIGIN}</publisherurl>
  <lastbuilddate>${isoStamp(generatedAt)}</lastbuilddate>
${body}
</source>
`;
}

export async function fetchPublicJobs(fetchImpl = globalThis.fetch) {
  const res = await fetchImpl(PUBLIC_JOBS_API, {
    headers: { accept: "application/json" },
  });
  if (!res.ok) {
    throw new Error(`Jobs API returned ${res.status}`);
  }
  const data = await res.json();
  return Array.isArray(data?.jobs) ? data.jobs : [];
}

export async function buildJobsFeedXmlFromApi(fetchImpl = globalThis.fetch, generatedAt = new Date()) {
  const jobs = await fetchPublicJobs(fetchImpl);
  return buildJobsFeedXml(jobs, generatedAt);
}
