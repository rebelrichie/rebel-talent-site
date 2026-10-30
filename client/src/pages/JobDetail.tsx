// Safe addition, public role detail page on rebeltalentsystems.com.
// Keeps candidates in the dark marketing theme while browsing. APPLY CTA
// is the only thing that hops them to rebelapply.com (light apply portal),
// signaling "you've decided, now the formal application step."

import { useEffect, useState, useMemo } from "react";
import { useRoute, useLocation, Link } from "wouter";
import { ArrowLeft, ArrowRight, MapPin, DollarSign, Briefcase, ShieldCheck } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
// Safe addition — human-readable job URLs (slug + UUID)
import InteriorHero from "@/components/InteriorHero";
import NotFound from "@/pages/not-found";
import { extractJobId, isBareJobUuid, jobPath } from "@/lib/jobSlug";
import { buildJobMetaDescription } from "@/lib/jobMeta";
import { publicPayLine } from "@/lib/payLabel";
import { publicJobTitle } from "@/lib/jobTitle";
import { buildJobJsonLd as jobPostingJsonLd, toPublicJob } from "@shared/publicJob.mjs";

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

function buildJobJsonLd(job: Job): Record<string, unknown> {
  return jobPostingJsonLd(job, `https://rebeltalentsystems.com${jobPath(job)}`);
}

export default function JobDetail() {
  const [, params] = useRoute<{ id: string }>("/jobs/:id");
  const [, setLocation] = useLocation();
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
        setJob(toPublicJob(data.job));
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
    ? buildJobMetaDescription(job)
    : "Open roles across cleared, startup, and commercial teams.";

  // Bare /jobs/<uuid> URLs stay working, then move to the slug URL.
  // Slug URLs already contain the UUID and are left alone.
  useEffect(() => {
    if (!job || !isBareJobUuid(params?.id)) return;
    const next = jobPath(job);
    if (next !== `/jobs/${params?.id}`) {
      setLocation(next, { replace: true });
    }
  }, [job, params?.id, setLocation]);

  const remoteLabel = (() => {
    if (!job) return "";
    const rp = job.remotePolicy?.trim();
    const loc = job.location?.trim();
    if (rp && loc && rp.toLowerCase() === loc.toLowerCase()) return loc;
    if (rp && loc) return `${loc} · ${rp}`;
    return loc || rp || "Remote";
  })();

  if (!loading && error === "Role not found") {
    return <NotFound />;
  }

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

      {loading && (
        <section className="px-6 py-16 max-w-3xl mx-auto text-[#5C6570]">Loading role…</section>
      )}

      {error && error !== "Role not found" && !loading && (
        <InteriorHero>
          <Link
            href="/jobs"
            data-testid="link-back-to-jobs"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#5C6570] no-underline mb-6"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All Open Roles
          </Link>
          <p className="text-[#3D4450] mb-4">{error}</p>
          <Link href="/jobs" className="text-[#C8102E] no-underline">
            Back to open roles
          </Link>
        </InteriorHero>
      )}

      {!loading && !error && job && (
        <>
          <InteriorHero>
            <Link
              href="/jobs"
              data-testid="link-back-to-jobs"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#5C6570] no-underline mb-6"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> All Open Roles
            </Link>
            <p className="text-xs text-[#C8102E] font-semibold tracking-[0.16em] uppercase mb-3">
              {job.companyName}
              {job.companyIndustry ? ` · ${job.companyIndustry}` : ""}
            </p>
            <h1 className="text-[#0C1220] mb-6">{publicJobTitle(job.title)}</h1>
            <div className="flex flex-wrap gap-2 mb-8">
              {remoteLabel && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#E7E9EE] text-xs text-[#5C6570]">
                  <MapPin className="h-3.5 w-3.5" /> {remoteLabel}
                </span>
              )}
              {job.department && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#E7E9EE] text-xs text-[#5C6570]">
                  <Briefcase className="h-3.5 w-3.5" /> {job.department}
                </span>
              )}
              {job.level && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#E7E9EE] text-xs text-[#5C6570]">
                  <ShieldCheck className="h-3.5 w-3.5" /> {job.level}
                </span>
              )}
              {publicPayLine(job.compensationRange) && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs">
                  <DollarSign className="h-3.5 w-3.5" /> Pay: {publicPayLine(job.compensationRange)}
                </span>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={`/jobs/${job.id}/apply`}
                data-testid="button-apply"
                className="bg-rebel-red no-underline"
              >
                Apply for This Role
                <ArrowRight className="h-4 w-4" />
              </Link>
              <span className="text-xs text-[#5C6570]">
                Quick application. Free for candidates. We reply within two business days.
              </span>
            </div>
          </InteriorHero>
          <section>
            <div className="band-wrap grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_16rem]">
            <div>

            {/* Sections */}
            {job.requirements && (
              <div className="mb-8">
                <h2 className="text-xs text-rebel-red font-semibold tracking-[0.2em] uppercase mb-4">
                  Requirements
                </h2>
                <div
                  className="prose prose-stone max-w-none"
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
                  className="prose prose-stone max-w-none"
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
                  className="prose prose-stone max-w-none"
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
                  {job.companyName} is hiring a {publicJobTitle(job.title)}
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
            <div className="mt-12 pt-10 border-t border-current/20">
              <h3 className="text-xl sm:text-2xl font-bold mb-6">
                Ready to apply?
              </h3>
              <Link
                href={`/jobs/${job.id}/apply`}
                className="mi-btn no-underline"
              >
                Apply Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            </div>
            <aside className="lg:pt-2">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] mb-3">The role</p>
              <p className="text-[18px] mb-2">{job.companyName}</p>
              {job.location && <p className="text-[16px] mb-2">{job.location}</p>}
              {job.department && <p className="text-[16px] mb-2">{job.department}</p>}
              {publicPayLine(job.compensationRange) && (
                <p className="text-[16px] mb-6">Pay: {publicPayLine(job.compensationRange)}</p>
              )}
              <Link href={`/jobs/${job.id}/apply`} className="mi-btn">
                Apply for this role
              </Link>
            </aside>
            </div>
          </section>
        </>
      )}
    </PageLayout>
  );
}
