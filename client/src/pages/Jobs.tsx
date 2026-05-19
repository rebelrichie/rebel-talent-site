// Safe addition — public job board on rebeltalentsystems.com (Phase 1 SEO consolidation).
// Fetches from the Next.js public API and deep-links each role to rebelapply.com/jobs/[id]
// for the apply flow. Pre-rendered at build time via scripts/prerender.mjs so Googlebot
// gets HTML with the data baked in.

import { useEffect, useState, useMemo } from "react";
import { ArrowRight, MapPin, DollarSign, Briefcase, Search } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import ScrollReveal from "@/components/ScrollReveal";

const JOBS_API = "https://rebelapply.com/api/public/jobs";
const APPLY_BASE = "https://rebelapply.com/jobs";

interface Job {
  id: string;
  title: string;
  department: string | null;
  level: string | null;
  location: string | null;
  remotePolicy: string | null;
  compensationRange: string | null;
  requirements: string | null;
  idealProfile: string | null;
  openedAt: string | null;
  createdAt: string;
  companyName: string;
  companyIndustry: string | null;
}

function locationLabel(j: Job): string {
  const parts: string[] = [];
  if (j.location) parts.push(j.location);
  if (j.remotePolicy && j.remotePolicy.toLowerCase().includes("remote")) parts.push("Remote OK");
  return parts.join(" · ") || "Remote";
}

function jobJsonLd(jobs: Job[]) {
  const itemList = jobs.slice(0, 50).map((j, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    url: `${APPLY_BASE}/${j.id}`,
    name: `${j.title} at ${j.companyName}`,
  }));
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Open roles at Rebel Talent",
    numberOfItems: itemList.length,
    itemListElement: itemList,
  };
}

export default function Jobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    let cancelled = false;
    fetch(JOBS_API, { cache: "no-store" })
      .then((r) => r.json())
      .then((data: { jobs: Job[] }) => {
        if (cancelled) return;
        setJobs(data.jobs || []);
        setLoading(false);
      })
      .catch((e) => {
        if (cancelled) return;
        setError(e?.message || "Failed to load roles");
        setLoading(false);
      });
    return () => { cancelled = true; };
  }, []);

  const filtered = query.trim()
    ? jobs.filter((j) => {
        const q = query.toLowerCase();
        return (
          j.title.toLowerCase().includes(q) ||
          (j.department ?? "").toLowerCase().includes(q) ||
          (j.location ?? "").toLowerCase().includes(q) ||
          j.companyName.toLowerCase().includes(q)
        );
      })
    : jobs;

  const schemas = useMemo(() => (jobs.length > 0 ? [jobJsonLd(jobs)] : []), [jobs]);

  return (
    <PageLayout>
      <PageSEO
        title="Open Roles | Rebel Talent"
        description="Browse open full-time, fractional, and contract roles placed by Rebel Talent. Forward Deployed Engineers, AI/ML, GTM, cleared (TS/SCI) and executive search."
        path="/jobs"
        schemas={schemas}
        breadcrumbs={[
          { name: "Home", item: "https://rebeltalentsystems.com/" },
          { name: "Open Roles", item: "https://rebeltalentsystems.com/jobs" },
        ]}
      />


      {/* ===== HERO ===== */}
      <section data-testid="section-hero" className="relative pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-rebel-red text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Now Hiring
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
            Open <span className="text-rebel-red">Roles</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Hand-vetted roles from startups, defense primes, and high-growth teams.
            Cleared work, AI/ML, Forward Deployed, GTM, executive.
            One profile, one apply, no spam.
          </p>
        </div>
      </section>

      {/* ===== SEARCH ===== */}
      <section className="px-4 sm:px-6 lg:px-8 pb-6">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by role, company, location..."
              className="w-full pl-11 pr-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:border-rebel-red transition-colors"
              data-testid="input-job-search"
            />
          </div>
        </div>
      </section>

      {/* ===== LIST ===== */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto">
          {loading && (
            <div className="text-center py-16 text-zinc-500">
              Loading open roles…
            </div>
          )}

          {error && !loading && (
            <div className="text-center py-16 text-zinc-400">
              <p className="mb-4">Couldn&apos;t load roles right now.</p>
              <a
                href={APPLY_BASE}
                className="inline-flex items-center gap-2 text-rebel-red hover:text-white transition-colors"
              >
                View on Rebel Talent <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          )}

          {!loading && !error && filtered.length === 0 && (
            <div className="text-center py-16 text-zinc-400">
              {query.trim()
                ? <p>No roles match &ldquo;{query}&rdquo;. Try a broader search.</p>
                : <p>No open roles right now — but new ones drop weekly.</p>}
            </div>
          )}

          {!loading && !error && filtered.length > 0 && (
            <>
              <p className="text-xs text-zinc-500 uppercase tracking-wider mb-4">
                {filtered.length} open {filtered.length === 1 ? "role" : "roles"}
              </p>
              <div className="space-y-3" data-testid="job-list">
                {filtered.map((j) => (
                  <ScrollReveal key={j.id} immediate>
                    <a
                      href={`${APPLY_BASE}/${j.id}`}
                      data-testid={`link-job-${j.id}`}
                      className="block bg-zinc-950 border border-zinc-800 rounded-lg p-5 sm:p-6 hover:border-rebel-red/60 hover:bg-zinc-900/50 transition-all group no-underline"
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="min-w-0 flex-1">
                          <h2 className="text-lg sm:text-xl font-semibold text-white group-hover:text-rebel-red transition-colors">
                            {j.title}
                          </h2>
                          <p className="text-sm text-zinc-400 mt-1">{j.companyName}</p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-zinc-600 group-hover:text-rebel-red group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-zinc-500">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5" />
                          {locationLabel(j)}
                        </span>
                        {j.department && (
                          <span className="inline-flex items-center gap-1.5">
                            <Briefcase className="h-3.5 w-3.5" />
                            {j.department}
                          </span>
                        )}
                        {j.compensationRange && (
                          <span className="inline-flex items-center gap-1.5 text-emerald-400/90">
                            <DollarSign className="h-3.5 w-3.5" />
                            {j.compensationRange}
                          </span>
                        )}
                      </div>
                    </a>
                  </ScrollReveal>
                ))}
              </div>
            </>
          )}

          {/* CTA — passive talent capture */}
          {!loading && !error && (
            <div className="mt-16 border-t border-zinc-800 pt-12 text-center">
              <p className="text-xs text-rebel-red font-semibold tracking-[0.2em] uppercase mb-3">
                Not seeing your role?
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Build your profile anyway.
              </h3>
              <p className="text-zinc-400 max-w-xl mx-auto mb-6">
                We surface candidates to companies before roles go public.
                Build your profile once, get matched when something fits.
              </p>
              <a
                href={`${APPLY_BASE.replace('/jobs', '')}/login-talent`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-rebel-red hover:bg-red-700 text-white font-semibold rounded-md transition-colors no-underline"
                data-testid="button-build-profile"
              >
                Build Your Profile <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
