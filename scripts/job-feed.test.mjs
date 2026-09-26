import assert from "node:assert/strict";
import test from "node:test";
import { toPublicJob } from "../shared/publicJob.mjs";
import {
  buildJobsFeedXml,
  fetchPublicJobs,
  jobPath,
} from "../shared/jobFeed.mjs";

const TPM_ID = "5ab49383-7950-471b-b37a-558c26054eae";
const EN = "\u2013";

function blocks(xml) {
  return [...xml.matchAll(/<job>[\s\S]*?<\/job>/g)].map((m) => m[0]);
}

test("feed uses the public TPM salary, skips general, and keeps other companies", () => {
  const xml = buildJobsFeedXml([
    {
      id: TPM_ID,
      title: "Technical Product Manager",
      companyName: "Confidential Client",
      location: "Byron Center, MI 49315",
      remotePolicy: "On-site (full-time)",
      compensationRange: `$85,000${EN}$115,000`,
      requirements: "Byron Center radar",
      openedAt: "2026-09-15T18:23:32.044Z",
      address: { addressCountry: "US" },
    },
    {
      id: "general",
      title: "General application",
      companyName: "Rebel Talent Systems",
      requirements: "Not a role. This must not appear in the feed at all.",
    },
    {
      id: "8844a230-7cbb-4ef4-9bf6-c931aa31db04",
      title: "Sr. Accountant",
      companyName: "EarthDaily Federal",
      location: "Remote USA (Seattle / West Coast preferred)",
      remotePolicy: "Remote",
      compensationRange: `$80,000${EN}$110,000`,
      requirements: "Government accounting experience for a federal client team.",
      openedAt: "2026-09-22T11:58:04.296Z",
      address: { addressCountry: "US" },
    },
    {
      id: "b2b4ef85-1116-4d7a-a199-0de9d194b8a8",
      title: "Full Stack Software Engineer",
      companyName: "Confidential Client",
      location: "Remote, US or Canada",
      remotePolicy: "Remote",
      compensationRange: null,
      requirements: "Build product software for a confidential client. Remote in the US or Canada.",
      openedAt: "2026-08-21T14:43:20.097Z",
      address: { addressCountry: "US", addressLocality: "Remote" },
    },
  ], new Date("2026-09-26T12:00:00Z"));

  assert.match(xml, /^<\?xml version="1\.0" encoding="UTF-8"\?>/);
  const jobs = blocks(xml);
  assert.equal(jobs.length, 3);
  assert.doesNotMatch(xml, /General application/);

  const tpm = jobs.find((block) => block.includes(TPM_ID));
  assert.ok(tpm);
  assert.match(tpm, /<salary_min><!\[CDATA\[100000\]\]><\/salary_min>/);
  assert.match(tpm, /<salary_max><!\[CDATA\[140000\]\]><\/salary_max>/);
  assert.match(tpm, /<salary_currency><!\[CDATA\[USD\]\]><\/salary_currency>/);
  assert.match(tpm, /<isremote><!\[CDATA\[no\]\]><\/isremote>/);
  assert.match(tpm, /<city><!\[CDATA\[West Michigan\]\]><\/city>/);
  assert.match(tpm, /<state><!\[CDATA\[MI\]\]><\/state>/);
  assert.match(tpm, /<country><!\[CDATA\[United States\]\]><\/country>/);
  assert.match(tpm, /technical-product-manager-confidential-client-west-michigan-5ab49383-7950-471b-b37a-558c26054eae/);
  assert.doesNotMatch(tpm, /85000/);
  assert.doesNotMatch(tpm, /115000/);
  assert.doesNotMatch(tpm, /Byron Center/);

  const accountant = jobs.find((block) => block.includes("8844a230"));
  assert.match(accountant, /<company><!\[CDATA\[EarthDaily Federal\]\]><\/company>/);
  assert.match(accountant, /<salary_min><!\[CDATA\[80000\]\]><\/salary_min>/);
  assert.match(accountant, /<salary_max><!\[CDATA\[110000\]\]><\/salary_max>/);
  assert.match(accountant, /<isremote><!\[CDATA\[yes\]\]><\/isremote>/);
  assert.doesNotMatch(accountant, /100000/);

  const engineer = jobs.find((block) => block.includes("b2b4ef85"));
  assert.doesNotMatch(engineer, /<salary>/);
  assert.match(engineer, /<isremote><!\[CDATA\[yes\]\]><\/isremote>/);
  assert.match(engineer, /<city><!\[CDATA\[\]\]><\/city>/);
});

test("job path follows the public location", () => {
  const path = jobPath({
    id: TPM_ID,
    title: "Technical Product Manager",
    companyName: "Confidential Client",
    location: "Byron Center, MI 49315",
  });
  assert.equal(
    path,
    `/jobs/technical-product-manager-confidential-client-west-michigan-${TPM_ID}`,
  );
});

test("live board inventory becomes the feed", async () => {
  const jobs = await fetchPublicJobs();
  assert.ok(jobs.length >= 1, "public jobs API returned no roles");
  const xml = buildJobsFeedXml(jobs, new Date("2026-09-26T12:00:00Z"));
  const feedJobs = blocks(xml);
  const boardIds = jobs
    .filter((job) => job && job.id && String(job.id).toLowerCase() !== "general")
    .map((job) => job.id);
  assert.equal(feedJobs.length, boardIds.length);
  assert.doesNotMatch(xml, /<title><!\[CDATA\[General application\]\]>/);

  const tpm = feedJobs.find((block) => block.includes(`<referencenumber><![CDATA[${TPM_ID}]]>`));
  assert.ok(tpm, "TPM role missing from feed");
  assert.match(tpm, /<salary_min><!\[CDATA\[100000\]\]><\/salary_min>/);
  assert.match(tpm, /<salary_max><!\[CDATA\[140000\]\]><\/salary_max>/);
  assert.match(tpm, /<salary_currency><!\[CDATA\[USD\]\]><\/salary_currency>/);
  assert.match(tpm, /<company><!\[CDATA\[Confidential Client\]\]><\/company>/);
  assert.match(tpm, /west-michigan-5ab49383-7950-471b-b37a-558c26054eae/);

  for (const job of jobs) {
    if (!job?.id || String(job.id).toLowerCase() === "general") continue;
    const block = feedJobs.find((item) => item.includes(`<referencenumber><![CDATA[${job.id}]]>`));
    assert.ok(block, job.id);
    const pub = toPublicJob(job);
    const title = String(pub.title || "");
    assert.match(block, new RegExp(`<title><!\\[CDATA\\[${title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\]\\]>`));
    const company = String(pub.companyName || "");
    assert.match(block, new RegExp(`<company><!\\[CDATA\\[${company.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\]\\]>`));
    if (String(job.id).toLowerCase() === TPM_ID) {
      assert.equal(pub.compensationRange, "$100,000 - $140,000");
      continue;
    }
    // Other roles keep the API amount. Public copy only swaps unicode dashes
    // for an ASCII hyphen, matching the jobs board.
    const raw = job.compensationRange ?? null;
    const expected = raw == null
      ? null
      : String(raw).replace(/[\u2010\u2011\u2012\u2013\u2014\u2015\u2212]/g, "-").replace(/\s+/g, " ").trim();
    assert.equal(pub.compensationRange ?? null, expected);
  }
});
