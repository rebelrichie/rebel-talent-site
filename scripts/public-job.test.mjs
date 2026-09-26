import assert from "node:assert/strict";
import test from "node:test";
import {
  applyDocumentShell,
  buildJobJsonLd,
  employmentTypeFor,
  parseSalary,
  postingDates,
  structuredPlace,
  toPublicJob,
} from "../shared/publicJob.mjs";

// The old character class treated digits as separators, so an en dash
// never had to match. The engine split the first number and zeroed the max.
function parseSalaryLegacy(comp) {
  if (!comp) return null;
  const range = comp.match(/\$\s*([\d,.]+)\s*k?\s*[--to]+\s*\$?\s*([\d,.]+)\s*k?/i);
  if (!range) return null;
  let mn = parseFloat(range[1].replace(/,/g, ""));
  let mx = parseFloat(range[2].replace(/,/g, ""));
  if (mn < 1000 && comp.toLowerCase().includes("k")) mn *= 1000;
  if (mx < 1000 && comp.toLowerCase().includes("k")) mx *= 1000;
  if (mn < 1000 && mx < 1000) {
    mn *= 1000;
    mx *= 1000;
  }
  return { min: mn, max: mx };
}

function band(comp) {
  const parsed = parseSalary(comp);
  assert.ok(parsed, `expected a salary for ${comp}`);
  return parsed.value;
}

const BROKEN = [
  ["Technical Product Manager", "$85,000\u2013$115,000", 850000, 0, 85000, 115000],
  ["Sr. Accountant", "$80,000\u2013$110,000", 800000, 0, 80000, 110000],
  ["Systems Engineer or Systems Scientist", "$150,000\u2013$200,000", 1500, 0, 150000, 200000],
  ["Perception Engineer", "$160,000\u2013$220,000", 1600, 0, 160000, 220000],
  ["Network Engineer SME", "$190K\u2013$260K", 1000, 0, 190000, 260000],
];

test("en dash ranges no longer collapse to a zero max", () => {
  for (const [title, comp, beforeMin, beforeMax, afterMin, afterMax] of BROKEN) {
    const before = parseSalaryLegacy(comp);
    assert.equal(before.min, beforeMin, title);
    assert.equal(before.max, beforeMax, title);
    const after = band(comp);
    assert.equal(after.minValue, afterMin, title);
    assert.equal(after.maxValue, afterMax, title);
    assert.equal(after.unitText, "YEAR");
  }
});

test("parser accepts hyphen, em dash, to, and K without a dollar sign", () => {
  assert.deepEqual(
    [band("$150k - $250k").minValue, band("$150k - $250k").maxValue],
    [150000, 250000],
  );
  assert.deepEqual(
    [band("215k-255k").minValue, band("215k-255k").maxValue],
    [215000, 255000],
  );
  assert.deepEqual(
    [band("220k - 285k Paid Relo").minValue, band("220k - 285k Paid Relo").maxValue],
    [220000, 285000],
  );
  assert.deepEqual(
    [band("$80,000\u2014$110,000").minValue, band("$80,000\u2014$110,000").maxValue],
    [80000, 110000],
  );
  assert.deepEqual(
    [band("$85,000 to $115,000").minValue, band("$85,000 to $115,000").maxValue],
    [85000, 115000],
  );
  assert.equal(parseSalary("1099 | Commission with a draw"), null);
  assert.equal(parseSalary(null), null);
  assert.equal(band("$45/hr").value, 45);
  assert.equal(band("$45/hr").unitText, "HOUR");
});

test("company label, recruiter type, and confidential blurbs", () => {
  const confidential = toPublicJob({
    id: "2e53e132-f9ef-40b2-ba09-0a1d3db82d61",
    companyName: "Confidential",
    title: "Systems Engineer or Systems Scientist",
    location: "Tysons, VA",
  });
  assert.equal(confidential.companyName, "Confidential Client");

  const already = toPublicJob({
    id: "5ab49383-7950-471b-b37a-558c26054eae",
    companyName: "Confidential Client",
    title: "Technical Product Manager",
    location: "Byron Center, MI 49315",
    requirements: "Byron Center radar telematics J1939",
    idealProfile: "Grand Rapids / Byron Center MI corridor",
    compensationRange: "$85,000\u2013$115,000",
  });
  assert.equal(already.companyName, "Confidential Client");
  assert.equal(already.location, "West Michigan");
  assert.equal(already.compensationRange, "$100,000 - $140,000");
  const laterBand = toPublicJob({
    id: "5ab49383-7950-471b-b37a-558c26054eae",
    compensationRange: "$110k - $150k",
  });
  assert.equal(laterBand.compensationRange, "$110k - $150k");
  assert.equal(/byron|49315|grand rapids|telematics|j1939|radar/i.test(
    `${already.location} ${already.requirements} ${already.idealProfile}`,
  ), false);

  const stack = toPublicJob({
    id: "b2b4ef85-1116-4d7a-a199-0de9d194b8a8",
    companyName: "Confidential Client",
    title: "Full Stack Software Engineer",
    location: "Remote, US or Canada",
    requirements: "Bonus: fiber or telecom network planning (FTTX, route optimization, cost modeling), optimization solvers",
    idealProfile: "fiber and wireless networks",
  });
  assert.equal(/fiber|wireless|fttx|telecom/i.test(`${stack.requirements} ${stack.idealProfile}`), false);
  assert.match(stack.requirements, /infrastructure planning/);
  assert.match(stack.idealProfile, /geospatial platform/);

  const recruiter = toPublicJob({
    id: "eda03068-8c4b-4c58-9aa9-b48d50e02f1c",
    companyName: "Rebel Talent Systems",
    title: "Full Desk Recruiter | 1099 | Remote | Commission with a draw",
    compensationRange: "1099 | Commission with a draw",
    requirements: "Remote, US only. US citizens only, no visa sponsorship.\n\ncontingent with a deposit.",
    idealProfile: "We'll be hiring for this again in the near future",
  });
  assert.match(recruiter.requirements, /authorized to work in the United States/);
  assert.doesNotMatch(recruiter.requirements, /US citizens only/);
  assert.match(recruiter.requirements, /contingent with no deposit/);
  assert.match(recruiter.idealProfile, /near future\./);
  assert.equal(employmentTypeFor(recruiter), "CONTRACTOR");
  assert.equal(parseSalary(recruiter.compensationRange), null);
  assert.equal(employmentTypeFor({ id: "other", title: "Data Engineer", compensationRange: null }), "FULL_TIME");
});

test("missing locations and expired windows", () => {
  const ae = toPublicJob({
    id: "816ab33d-f091-4f2f-ad28-f32028611a1d",
    companyName: "Confidential",
    title: "Account Executive - B2B Corporate Services",
    location: null,
    remotePolicy: null,
  });
  assert.equal(ae.location, "Remote, US");
  assert.equal(ae.companyName, "Confidential Client");
  const aePlace = structuredPlace(ae);
  assert.equal(aePlace.remote, true);
  assert.deepEqual(aePlace.countries, ["United States"]);
  assert.equal(aePlace.city, "");

  const bd = toPublicJob({
    id: "96482cb4-6420-4282-9448-f613f2dbe8b5",
    companyName: "EarthDaily Federal",
    title: "Sr. BD Manager - Combatant Commands & DoW",
    location: null,
    remotePolicy: null,
  });
  assert.equal(bd.location, "Remote, US");
  assert.equal(structuredPlace(bd).remote, true);

  const dc = structuredPlace({
    id: "fde",
    location: "Washington, DC (must be in the DC area)",
    remotePolicy: "Onsite - DC area",
  });
  assert.equal(dc.city, "Washington");
  assert.equal(dc.state, "DC");
  assert.equal(dc.remote, false);

  const tpm = structuredPlace(toPublicJob({
    id: "5ab49383-7950-471b-b37a-558c26054eae",
    companyName: "Confidential Client",
    location: "Byron Center, MI 49315",
    remotePolicy: "On-site (full-time)",
  }));
  assert.equal(tpm.city, "West Michigan");
  assert.equal(tpm.state, "MI");
  assert.equal(tpm.remote, false);

  const canada = structuredPlace({
    id: "b2b4ef85-1116-4d7a-a199-0de9d194b8a8",
    location: "Remote, US or Canada",
    remotePolicy: "Remote",
  });
  assert.deepEqual(canada.countries, ["United States", "Canada"]);
  assert.equal(canada.city, "");

  const director = structuredPlace({
    id: "dir",
    location: "U.S. Remote \u2014 Washington Metropolitan Area preferred",
    remotePolicy: "Remote",
  });
  assert.equal(director.remote, true);
  assert.equal(director.city, "");

  const now = new Date("2026-09-26T12:00:00Z");
  const stale = postingDates("2026-04-28T19:00:45.667Z", "2026-04-28T19:00:45.667Z", now);
  assert.equal(stale.datePosted, "2026-04-28");
  assert.equal(stale.validThrough, "2026-12-25");
  const fresh = postingDates("2026-07-22T11:28:08.267Z", "2026-07-22T11:28:08.267Z", now);
  assert.equal(fresh.validThrough, "2026-10-20");
});

test("JobPosting JSON-LD matches the public salary and location", () => {
  const tpm = buildJobJsonLd(toPublicJob({
    id: "5ab49383-7950-471b-b37a-558c26054eae",
    title: "Technical Product Manager",
    companyName: "Confidential Client",
    location: "Byron Center, MI 49315",
    remotePolicy: "On-site (full-time)",
    compensationRange: "$85,000\u2013$115,000",
    requirements: "Byron Center",
    openedAt: "2026-09-15T18:23:32.044Z",
    createdAt: "2026-09-15T18:23:32.044Z",
  }), "https://rebeltalentsystems.com/jobs/example");
  assert.equal(tpm.baseSalary.value.minValue, 100000);
  assert.equal(tpm.baseSalary.value.maxValue, 140000);
  assert.equal(tpm.baseSalary.currency, "USD");
  assert.equal(tpm.jobLocation.address.addressLocality, "West Michigan");
  assert.equal(tpm.jobLocation.address.addressRegion, "MI");
  assert.equal(/byron/i.test(tpm.description), false);
  assert.equal(tpm.employmentType, "FULL_TIME");

  const senior = buildJobJsonLd({
    id: "71f902d6-4e42-48d2-9f79-96098087f095",
    title: "Network Engineer Senior",
    companyName: "Waveguide",
    location: "Chantilly, VA",
    compensationRange: "215k-255k",
    openedAt: "2026-07-22T11:28:08.267Z",
    createdAt: "2026-07-22T11:28:08.267Z",
  }, "https://rebeltalentsystems.com/jobs/example");
  assert.equal(senior.baseSalary.value.minValue, 215000);
  assert.equal(senior.baseSalary.value.maxValue, 255000);

  const recruiter = buildJobJsonLd(toPublicJob({
    id: "eda03068-8c4b-4c58-9aa9-b48d50e02f1c",
    title: "Full Desk Recruiter | 1099 | Remote | Commission with a draw",
    companyName: "Rebel Talent Systems",
    location: "Remote in USA",
    remotePolicy: "Remote",
    compensationRange: "1099 | Commission with a draw",
    requirements: "Remote, US only. US citizens only, no visa sponsorship.",
    openedAt: "2026-07-31T15:45:13.501Z",
    createdAt: "2026-07-31T15:45:13.501Z",
  }), "https://rebeltalentsystems.com/jobs/example");
  assert.equal(recruiter.employmentType, "CONTRACTOR");
  assert.equal(recruiter.baseSalary, undefined);
  assert.match(recruiter.description, /authorized to work in the United States/);

  const ae = buildJobJsonLd(toPublicJob({
    id: "816ab33d-f091-4f2f-ad28-f32028611a1d",
    title: "Account Executive - B2B Corporate Services",
    companyName: "Confidential",
    location: null,
    remotePolicy: null,
    openedAt: "2026-07-22T11:28:08.267Z",
    createdAt: "2026-07-22T11:28:08.267Z",
  }), "https://rebeltalentsystems.com/jobs/example");
  assert.equal(ae.hiringOrganization.name, "Confidential Client");
  assert.equal(ae.jobLocationType, "TELECOMMUTE");
  assert.equal(ae.applicantLocationRequirements.name, "United States");
  assert.equal(ae.jobLocation, undefined);

  const stale = buildJobJsonLd({
    id: "83059bd7-34e6-43ec-abd4-5e088e20d26d",
    title: "Windows System Administrator",
    companyName: "Waveguide",
    location: "McLean, VA",
    openedAt: "2026-04-28T19:00:45.667Z",
    createdAt: "2026-04-28T19:00:45.667Z",
  }, "https://rebeltalentsystems.com/jobs/example");
  assert.equal(stale.datePosted, "2026-04-28");
  assert.ok(stale.validThrough > "2026-09-26");
});

test("apply shell is noindex with the role title", () => {
  const shell = `<!DOCTYPE html><html><head><title>Contingent recruiting with a flat fee by salary band | Rebel Talent Systems</title><meta name="robots" content="index, follow"></head><body><div id="root"></div></body></html>`;
  const html = applyDocumentShell(shell, "Apply: Technical Product Manager | Rebel Talent");
  assert.match(html, /<title>Apply: Technical Product Manager \| Rebel Talent<\/title>/);
  assert.match(html, /content="noindex, follow"/);
  assert.doesNotMatch(html, /content="index, follow"/);
  assert.match(html, /id="root"/);
});
