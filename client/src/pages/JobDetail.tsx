// Safe addition, public role detail page on rebeltalentsystems.com.
// Keeps candidates in the dark marketing theme while browsing. APPLY CTA
// is the only thing that hops them to rebelapply.com (light apply portal),
// signaling "you've decided, now the formal application step."

import { useEffect, useState, useMemo } from "react";
import { useRoute, Link } from "wouter";
import { ArrowLeft, ArrowRight, MapPin, DollarSign, Briefcase, ShieldCheck } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
// Safe addition — human-readable job URLs (slug + UUID)
import { extractJobId, jobPath } from "@/lib/jobSlug";

const API_BASE = "https://rebelcommand.dev/api/public/jobs";

interface Job {
  id: string;
  title: string;
  department: string | null;
  level: string | null;
  location: string | null;
  remotePolicy: string | null;
  compensationRange: string | null;
  status: string;
  requirements: string | null;
  idealProfile: string | null;
  notes: string | null;
  tags: string[] | null;
  openedAt: string | null;
  createdAt: string;
  updatedAt: string;
  companyName: string;
  companyIndustry: string | null;
  companyWebsite: string | null;
}

// Markdown-lite renderer. Supports ## / ### headings, - * bullets, **bold**, paragraphs.
function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

function renderRich(text: string): string {
  const lines = escapeHtml(text).split("\n");
  const out: string[] = [];
  let inUl = false;
  let inOl = false;

  const fmtInline = (t: string) =>
    t.replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
     .replace(/\*(.+?)\*/g, "<em>$1</em>");

  for (const raw of lines) {
    const line = raw.trim();
    const olMatch = line.match(/^(\d+)\.\s+(.*)/);

    if (line.startsWith("### ")) {
      if (inUl) { out.push("</ul>"); inUl = false; }
      if (inOl) { out.push("</ol>"); inOl = false; }
      out.push(`<h4 class="text-base font-semibold text-white mt-7 mb-2">${line.slice(4)}</h4>`);
    } else if (line.startsWith("## ")) {
      if (inUl) { out.push("</ul>"); inUl = false; }
      if (inOl) { out.push("</ol>"); inOl = false; }
      out.push(`<h3 class="text-lg font-semibold text-white mt-8 mb-3">${line.slice(3)}</h3>`);
    } else if (line.startsWith("# ")) {
      if (inUl) { out.push("</ul>"); inUl = false; }
      if (inOl) { out.push("</ol>"); inOl = false; }
      out.push(`<h3 class="text-lg font-semibold text-white mt-8 mb-3">${line.slice(2)}</h3>`);
    } else if (line.startsWith("- ") || line.startsWith("* ")) {
      if (inOl) { out.push("</ol>"); inOl = false; }
      if (!inUl) { out.push('<ul class="list-disc pl-5 my-3 marker:text-rebel-red space-y-1.5">'); inUl = true; }
      out.push(`<li class="text-zinc-300 leading-relaxed">${fmtInline(line.slice(2))}</li>`);
    } else if (olMatch) {
      if (inUl) { out.push("</ul>"); inUl = false; }
      if (!inOl) { out.push('<ol class="list-decimal pl-5 my-3 marker:text-rebel-red space-y-1.5">'); inOl = true; }
      out.push(`<li class="text-zinc-300 leading-relaxed">${fmtInline(olMatch[2])}</li>`);
    } else if (line === "" || line === "---") {
      if (inUl) { out.push("</ul>"); inUl = false; }
      if (inOl) { out.push("</ol>"); inOl = false; }
    } else {
      if (inUl) { out.push("</ul>"); inUl = false; }
      if (inOl) { out.push("</ol>"); inOl = false; }
      out.push(`<p class="text-zinc-300 leading-relaxed mb-3">${fmtInline(line)}</p>`);
    }
  }
  if (inUl) out.push("</ul>");
  if (inOl) out.push("</ol>");
  return out.join("\n");
}

function parseLocation(location: string | null): { city: string; state: string } {
  if (!location) return { city: "", state: "" };
  const parts = location.split(",").map((p) => p.trim());
  return { city: parts[0] || "", state: parts[1] || "" };
}

function parseSalary(comp: string | null): Record<string, unknown> | null {
  if (!comp) return null;
  const hourly = comp.match(/\$\s*([\d,.]+)\s*\/?\s*hr/i);
  if (hourly) {
    const value = parseFloat(hourly[1].replace(/,/g, ""));
    return { "@type": "MonetaryAmount", currency: "USD", value: { "@type": "QuantitativeValue", value, unitText: "HOUR" } };
  }
  const range = comp.match(/\$\s*([\d,.]+)\s*k?\s*[--to]+\s*\$?\s*([\d,.]+)\s*k?/i);
  if (range) {
    let mn = parseFloat(range[1].replace(/,/g, ""));
    let mx = parseFloat(range[2].replace(/,/g, ""));
    if (mn < 1000 && comp.toLowerCase().includes("k")) mn *= 1000;
    if (mx < 1000 && comp.toLowerCase().includes("k")) mx *= 1000;
    if (mn < 1000 && mx < 1000) { mn *= 1000; mx *= 1000; }
    return { "@type": "MonetaryAmount", currency: "USD", value: { "@type": "QuantitativeValue", minValue: mn, maxValue: mx, unitText: "YEAR" } };
  }
  return null;
}

function buildJobJsonLd(job: Job): Record<string, unknown> {
  const { city, state } = parseLocation(job.location);
  const created = new Date(job.openedAt || job.createdAt);
  const validThrough = new Date(created);
  validThrough.setDate(validThrough.getDate() + 90);
  const isRemote = (job.remotePolicy || "").toLowerCase().includes("remote");

  const descriptionHtml = [
    job.requirements && `<h3>Requirements</h3><p>${job.requirements.replace(/\n/g, "<br/>")}</p>`,
    job.idealProfile && `<h3>Ideal Candidate</h3><p>${job.idealProfile.replace(/\n/g, "<br/>")}</p>`,
    job.notes && `<h3>Additional Details</h3><p>${job.notes.replace(/\n/g, "<br/>")}</p>`,
  ].filter(Boolean).join("\n") || "See full listing for details.";

  const ld: Record<string, unknown> = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    title: job.title,
    description: descriptionHtml,
    datePosted: created.toISOString().split("T")[0],
    validThrough: validThrough.toISOString().split("T")[0],
    employmentType: "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: job.companyName,
      sameAs: job.companyWebsite || "https://rebeltalentsystems.com",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: city,
        addressRegion: state,
        addressCountry: "US",
      },
    },
    directApply: false,
    // Safe addition — canonical job URL is the slug form; old UUID URLs
    // still resolve to the same page.
    url: `https://rebeltalentsystems.com${jobPath(job)}`,
  };

  if (isRemote) {
    ld.jobLocationType = "TELECOMMUTE";
    ld.applicantLocationRequirements = { "@type": "Country", name: "US" };
  }

  const salary = parseSalary(job.compensationRange);
  if (salary) ld.baseSalary = salary;

  return ld;
}

export default function JobDetail() {
  const [, params] = useRoute<{ id: string }>("/jobs/:id");
  // Safe addition — the route param may be a plain UUID (old links) or
  // slug-plus-UUID (new links). The API always gets just the UUID.
  const id = extractJobId(params?.id);

  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Safe addition — a /jobs/... URL with no UUID in it is a dead link,
    // show the not-found state instead of loading forever.
    if (!id) {
      setLoading(false);
      setError("Role not found");
      return;
    }
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetch(`${API_BASE}/${id}`, { cache: "no-store" })
      .then(async (r) => {
        if (!r.ok) throw new Error(r.status === 404 ? "Role not found" : `HTTP ${r.status}`);
        const data = await r.json();
        if (cancelled) return;
        setJob(data.job);
        setLoading(false);
      })
      .catch((e) => {
        if (cancelled) return;
        setError(e?.message || "Failed to load role");
        setLoading(false);
      });
    return () => { cancelled = true; };
  }, [id]);

  const schemas = useMemo(() => (job ? [buildJobJsonLd(job)] : []), [job]);
  const pageTitle = job ? `${job.title} at ${job.companyName} | Rebel Talent` : "Role | Rebel Talent";
  const pageDesc = job
    ? `${job.title} at ${job.companyName}${job.location ? `, ${job.location}` : ""}${job.compensationRange ? ` · ${job.compensationRange}` : ""}. Apply through Rebel Talent.`
    : "Apply for open roles through Rebel Talent.";

  const remoteLabel = (() => {
    if (!job) return "";
    const rp = job.remotePolicy?.trim();
    const loc = job.location?.trim();
    if (rp && loc && rp.toLowerCase() === loc.toLowerCase()) return loc;
    if (rp && loc) return `${loc} · ${rp}`;
    return loc || rp || "Remote";
  })();

  return (
    <PageLayout>
      {/* Safe addition — only swap the head once we know what this page is.
          While loading, the pre-rendered baked-in title/meta stays put, so
          the tab never flashes a generic "Role | Rebel Talent". Canonical
          points at the slug URL even when someone arrives via the old
          plain-UUID link. */}
      {!loading && (
        <PageSEO
          title={pageTitle}
          description={pageDesc}
          path={job ? jobPath(job) : "/jobs"}
          schemas={schemas}
          breadcrumbs={[
            { name: "Home", item: "https://rebeltalentsystems.com/" },
            { name: "Open Roles", item: "https://rebeltalentsystems.com/jobs" },
            ...(job ? [{ name: job.title, item: `https://rebeltalentsystems.com${jobPath(job)}` }] : []),
          ]}
        />
      )}

      <section data-testid="section-hero" className="px-4 sm:px-6 lg:px-8 pt-8 pb-6 max-w-4xl mx-auto">
        <Link
          href="/jobs"
          data-testid="link-back-to-jobs"
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-zinc-400 hover:text-rebel-red transition-colors no-underline mb-8"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All Open Roles
        </Link>

        {loading && (
          <div className="py-16 text-center text-zinc-400">Loading role…</div>
        )}

        {error && !loading && (
          <div className="py-16 text-center">
            <p className="text-zinc-400 mb-4">{error}</p>
            <Link href="/jobs" className="text-rebel-red hover:text-white transition-colors">
              Back to open roles
            </Link>
          </div>
        )}

        {!loading && !error && job && (
          <>
            {/* Title block */}
            <p className="text-xs text-rebel-red font-semibold tracking-[0.2em] uppercase mb-3">
              {job.companyName}
              {job.companyIndustry ? ` · ${job.companyIndustry}` : ""}
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {job.title}
            </h1>

            {/* Meta pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {remoteLabel && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-950 border border-zinc-800 rounded-md text-xs text-zinc-400">
                  <MapPin className="h-3.5 w-3.5" /> {remoteLabel}
                </span>
              )}
              {job.department && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-950 border border-zinc-800 rounded-md text-xs text-zinc-400">
                  <Briefcase className="h-3.5 w-3.5" /> {job.department}
                </span>
              )}
              {job.level && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-950 border border-zinc-800 rounded-md text-xs text-zinc-400">
                  <ShieldCheck className="h-3.5 w-3.5" /> {job.level}
                </span>
              )}
              {job.compensationRange && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-950/40 border border-emerald-800/60 rounded-md text-xs text-emerald-300">
                  <DollarSign className="h-3.5 w-3.5" /> {job.compensationRange}
                </span>
              )}
            </div>

            {/* Primary apply CTA */}
            <div className="flex flex-wrap items-center gap-3 mb-10 pb-10 border-b border-zinc-800">
              <Link
                href={`/jobs/${job.id}/apply`}
                data-testid="button-apply"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-rebel-red hover:bg-red-700 text-white font-semibold rounded-md transition-colors no-underline group"
              >
                Apply for This Role
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <span className="text-xs text-zinc-400">
                Quick application. Free for candidates. We reply within 48h.
              </span>
            </div>

            {/* Sections */}
            {job.requirements && (
              <div className="mb-8">
                <h2 className="text-xs text-rebel-red font-semibold tracking-[0.2em] uppercase mb-4">
                  Requirements
                </h2>
                <div
                  className="prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: renderRich(job.requirements) }}
                />
              </div>
            )}

            {job.idealProfile && (
              <div className="mb-8">
                <h2 className="text-xs text-rebel-red font-semibold tracking-[0.2em] uppercase mb-4">
                  Ideal Candidate
                </h2>
                <div
                  className="prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: renderRich(job.idealProfile) }}
                />
              </div>
            )}

            {job.notes && (
              <div className="mb-8">
                <h2 className="text-xs text-rebel-red font-semibold tracking-[0.2em] uppercase mb-4">
                  Additional Details
                </h2>
                <div
                  className="prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: renderRich(job.notes) }}
                />
              </div>
            )}

            {/* Safe addition — never show a blank page when a role has no
                written description yet. Candidates still get context and a
                working apply path. */}
            {!job.requirements && !job.idealProfile && !job.notes && (
              <div className="mb-8">
                <h2 className="text-xs text-rebel-red font-semibold tracking-[0.2em] uppercase mb-4">
                  About This Role
                </h2>
                <p className="text-zinc-300 leading-relaxed mb-3">
                  {job.companyName} is hiring a {job.title}
                  {job.location ? ` in ${job.location}` : ""}. The full written
                  description is being finalized, but the role is open and we
                  are actively speaking with candidates now.
                </p>
                <p className="text-zinc-300 leading-relaxed">
                  Apply below and a recruiter will walk you through the details,
                  the team, and what the hiring manager is looking for on a
                  short intro call.
                </p>
              </div>
            )}

            {/* Footer CTA */}
            <div className="mt-12 pt-10 border-t border-zinc-800 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                Ready to apply?
              </h3>
              <Link
                href={`/jobs/${job.id}/apply`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-rebel-red hover:bg-red-700 text-white font-semibold rounded-md transition-colors no-underline group"
              >
                Apply Now
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </>
        )}
      </section>
    </PageLayout>
  );
}
