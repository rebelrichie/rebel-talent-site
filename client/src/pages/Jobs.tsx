// Safe addition, public job board on rebeltalentsystems.com.
// Fetches from rebelapply.com/api/public/jobs and renders with multi-filter UI
// (clearance, function, remote, company), sort, and a "what to expect" footer
// so the candidate experience signals the recruiter brand.
// Pre-rendered at build time via scripts/prerender.mjs so Googlebot sees HTML.

import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  MapPin,
  DollarSign,
  Briefcase,
  Search,
  Shield,
  Filter as FilterIcon,
  CheckCircle2,
  Eye,
  MessageSquare,
  X,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import ScrollReveal from "@/components/ScrollReveal";

const JOBS_API = "https://rebelapply.com/api/public/jobs";

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

// ── Tag derivation (client-side; data doesn't expose these directly) ──────
// Order matters: most-specific clearance first so a "TS/SCI w/ poly" doesn't
// also tag as "Secret".
const CLEARANCE_PATTERNS: Array<{ tag: string; rx: RegExp }> = [
  { tag: "TS/SCI Poly", rx: /\bTS\s*[\/]\s*SCI[^.]*\b(poly(graph)?)\b/i },
  { tag: "TS/SCI",       rx: /\bTS\s*[\/]\s*SCI\b/i },
  { tag: "Top Secret",   rx: /\b(top\s*secret|\bTS\b)(?!\s*\/\s*SCI)/i },
  { tag: "Secret",       rx: /(^|[^a-z/])secret\b/i },
  { tag: "Public Trust", rx: /\bpublic\s*trust\b/i },
];

function deriveClearance(j: Job): string | null {
  const hay = `${j.title} ${j.requirements ?? ""} ${j.idealProfile ?? ""}`;
  for (const { tag, rx } of CLEARANCE_PATTERNS) {
    if (rx.test(hay)) return tag;
  }
  return null;
}

// Map department text to a smaller set of buyer-side categories.
function deriveFunction(j: Job): string | null {
  const raw = (j.department ?? j.title ?? "").toLowerCase();
  if (!raw) return null;
  if (/engineer|software|developer|sre|devops|infra|platform|ml|ai|data/.test(raw)) return "Engineering";
  if (/sales|account exec|ae\b|gtm|business dev|bd\b|partnership|growth|sales engineer|solutions/.test(raw)) return "GTM";
  if (/product|pm\b|design|ux|ui/.test(raw)) return "Product / Design";
  if (/financ|account|controller|treasur|fp&a/.test(raw)) return "Finance & Ops";
  if (/recruit|talent|hr\b|people/.test(raw)) return "Talent / HR";
  if (/security|cleared|analyst|intel\b|geospatial/.test(raw)) return "Defense / Intel";
  if (/legal|compliance|paralegal/.test(raw)) return "Legal";
  return null;
}

function isRemote(j: Job): boolean {
  const v = `${j.remotePolicy ?? ""} ${j.location ?? ""}`.toLowerCase();
  return /remote/.test(v);
}

// Best-effort compensation parsing, returns midpoint when a range is found,
// or top of a single number. Used only for sort, not display.
function parseCompMidpoint(comp: string | null): number {
  if (!comp) return -1;
  const nums = comp.match(/\$?\s*([\d.]+)\s*([kKmM])?/g);
  if (!nums || nums.length === 0) return -1;
  const parsed = nums.map((s) => {
    const m = s.match(/([\d.]+)\s*([kKmM])?/);
    if (!m) return 0;
    const n = parseFloat(m[1]);
    const unit = m[2]?.toLowerCase();
    return unit === "m" ? n * 1_000_000 : unit === "k" ? n * 1_000 : n;
  }).filter((n) => n > 0);
  if (parsed.length === 0) return -1;
  // Pick the highest "salary-looking" number (filters out OTE multipliers that
  // are smaller, but is a heuristic, fine for sort).
  return Math.max(...parsed);
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
    url: `https://rebeltalentsystems.com/jobs/${j.id}`,
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

type SortKey = "newest" | "comp-desc";

export default function Jobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [clearanceFilter, setClearanceFilter] = useState<Set<string>>(new Set());
  const [functionFilter, setFunctionFilter] = useState<Set<string>>(new Set());
  const [companyFilter, setCompanyFilter] = useState<Set<string>>(new Set());
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [sort, setSort] = useState<SortKey>("newest");

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

  // Per-job derived tags computed once.
  const enriched = useMemo(
    () => jobs.map((j) => ({
      ...j,
      _clearance: deriveClearance(j),
      _function: deriveFunction(j),
      _remote: isRemote(j),
      _comp: parseCompMidpoint(j.compensationRange),
    })),
    [jobs],
  );

  // Build filter facet lists (only show options that actually exist in the data).
  const clearanceOptions = useMemo(() => {
    const set = new Set<string>();
    enriched.forEach((j) => { if (j._clearance) set.add(j._clearance); });
    return Array.from(set).sort();
  }, [enriched]);

  const functionOptions = useMemo(() => {
    const set = new Set<string>();
    enriched.forEach((j) => { if (j._function) set.add(j._function); });
    return Array.from(set).sort();
  }, [enriched]);

  const companyOptions = useMemo(() => {
    const set = new Set<string>();
    enriched.forEach((j) => set.add(j.companyName));
    return Array.from(set).sort();
  }, [enriched]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let out = enriched.filter((j) => {
      if (q) {
        const hay = `${j.title} ${j.department ?? ""} ${j.location ?? ""} ${j.companyName}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      if (clearanceFilter.size > 0 && (!j._clearance || !clearanceFilter.has(j._clearance))) return false;
      if (functionFilter.size > 0 && (!j._function || !functionFilter.has(j._function))) return false;
      if (companyFilter.size > 0 && !companyFilter.has(j.companyName)) return false;
      if (remoteOnly && !j._remote) return false;
      return true;
    });
    if (sort === "comp-desc") {
      out = [...out].sort((a, b) => b._comp - a._comp);
    }
    // newest first is the default order from the API; no resort needed
    return out;
  }, [enriched, query, clearanceFilter, functionFilter, companyFilter, remoteOnly, sort]);

  const schemas = useMemo(() => (jobs.length > 0 ? [jobJsonLd(jobs)] : []), [jobs]);

  const activeFilterCount =
    clearanceFilter.size + functionFilter.size + companyFilter.size + (remoteOnly ? 1 : 0);

  function toggle(set: Set<string>, setter: (s: Set<string>) => void, value: string) {
    const next = new Set(set);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    setter(next);
  }

  function clearAll() {
    setClearanceFilter(new Set());
    setFunctionFilter(new Set());
    setCompanyFilter(new Set());
    setRemoteOnly(false);
    setQuery("");
  }

  return (
    <PageLayout>
      <PageSEO
        title="Open Roles | Rebel Talent"
        description="Browse open full-time, fractional, and contract roles placed by Rebel Talent. Forward Deployed Engineers, AI/ML, GTM, cleared (TS/SCI) and executive search. Hand-vetted, no spam, response within 48 hours."
        path="/jobs"
        schemas={schemas}
        breadcrumbs={[
          { name: "Home", item: "https://rebeltalentsystems.com/" },
          { name: "Open Roles", item: "https://rebeltalentsystems.com/jobs" },
        ]}
      />

      {/* ===== HERO ===== */}
      <section data-testid="section-hero" className="relative pt-16 pb-10 px-4 sm:px-6 lg:px-8">
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

      {/* ===== SEARCH + FILTER ===== */}
      <section className="px-4 sm:px-6 lg:px-8 pb-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative mb-5">
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

          {/* Filter chips */}
          {!loading && !error && jobs.length > 0 && (
            <div className="space-y-3">
              {clearanceOptions.length > 0 && (
                <FilterRow
                  label="Clearance"
                  options={clearanceOptions}
                  selected={clearanceFilter}
                  onToggle={(v) => toggle(clearanceFilter, setClearanceFilter, v)}
                />
              )}
              {functionOptions.length > 0 && (
                <FilterRow
                  label="Function"
                  options={functionOptions}
                  selected={functionFilter}
                  onToggle={(v) => toggle(functionFilter, setFunctionFilter, v)}
                />
              )}
              {companyOptions.length > 1 && (
                <FilterRow
                  label="Company"
                  options={companyOptions}
                  selected={companyFilter}
                  onToggle={(v) => toggle(companyFilter, setCompanyFilter, v)}
                />
              )}

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setRemoteOnly((v) => !v)}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium transition-colors ${
                    remoteOnly
                      ? "border-rebel-red bg-rebel-red/10 text-white"
                      : "border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500"
                  }`}
                >
                  <MapPin className="h-3.5 w-3.5" /> Remote OK only
                </button>

                <div className="ml-auto flex items-center gap-2">
                  <label className="text-xs text-zinc-500 uppercase tracking-wider">Sort</label>
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value as SortKey)}
                    className="bg-zinc-950 border border-zinc-800 rounded-md text-zinc-300 text-xs px-3 py-1.5 focus:outline-none focus:border-zinc-600"
                  >
                    <option value="newest">Newest first</option>
                    <option value="comp-desc">Comp: high to low</option>
                  </select>

                  {activeFilterCount > 0 && (
                    <button
                      type="button"
                      onClick={clearAll}
                      className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-rebel-red transition-colors px-2 py-1"
                    >
                      <X className="h-3.5 w-3.5" /> Clear {activeFilterCount}
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ===== LIST ===== */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-5xl mx-auto">
          {loading && (
            <div className="text-center py-16 text-zinc-500">
              Loading open roles…
            </div>
          )}

          {error && !loading && (
            <div className="text-center py-16 text-zinc-400">
              <p className="mb-2">Couldn&apos;t load roles right now.</p>
              <p className="text-sm text-zinc-500">Try refreshing the page in a moment.</p>
            </div>
          )}

          {!loading && !error && filtered.length === 0 && (
            <div className="text-center py-16 text-zinc-400 space-y-5">
              {(query.trim() || activeFilterCount > 0)
                ? (
                  <>
                    <p className="mb-3">No roles match your filters.</p>
                    <button
                      type="button"
                      onClick={clearAll}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-zinc-700 text-sm text-zinc-300 hover:border-rebel-red hover:text-white transition-colors"
                    >
                      <X className="h-3.5 w-3.5" /> Clear all filters
                    </button>
                  </>
                )
                : <p>No open roles right now, but new ones drop weekly.</p>}
              {/* Safe addition (2026-06-05): general application CTA */}
              <p className="text-sm text-zinc-500 pt-4">
                Don&rsquo;t see what you&rsquo;re looking for? Submit a {" "}
                <Link href="/jobs/general" className="text-rebel-red hover:underline">general application</Link>
                {" "}for future openings.
              </p>
            </div>
          )}

          {!loading && !error && filtered.length > 0 && (
            <>
              <p className="text-xs text-zinc-500 uppercase tracking-wider mb-4">
                {filtered.length} of {jobs.length} {jobs.length === 1 ? "role" : "roles"}
              </p>
              <div className="space-y-3" data-testid="job-list">
                {filtered.map((j) => (
                  <ScrollReveal key={j.id} immediate>
                    <Link
                      href={`/jobs/${j.id}`}
                      data-testid={`link-job-${j.id}`}
                      className="block bg-zinc-950 border border-zinc-800 rounded-lg p-5 sm:p-6 hover:border-rebel-red/60 hover:bg-zinc-900/50 transition-all group no-underline"
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h2 className="text-lg sm:text-xl font-semibold text-white group-hover:text-rebel-red transition-colors">
                              {j.title}
                            </h2>
                            {j._clearance && (
                              <span
                                className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/30"
                                title="Clearance required"
                              >
                                <Shield className="h-3 w-3" /> {j._clearance}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-zinc-400">{j.companyName}</p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-zinc-600 group-hover:text-rebel-red group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-zinc-500">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5" />
                          {locationLabel(j)}
                        </span>
                        {j._function && (
                          <span className="inline-flex items-center gap-1.5">
                            <Briefcase className="h-3.5 w-3.5" />
                            {j._function}
                          </span>
                        )}
                        <span className={`inline-flex items-center gap-1.5 ${j.compensationRange ? "text-emerald-400/90" : "text-zinc-600"}`}>
                          <DollarSign className="h-3.5 w-3.5" />
                          {j.compensationRange || "Comp DOE, discussed on intro call"}
                        </span>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>

              {/* Safe addition (2026-06-05): general application discovery card */}
              <Link
                href="/jobs/general"
                className="mt-6 block bg-zinc-950/50 border border-dashed border-zinc-700 rounded-lg p-5 sm:p-6 hover:border-rebel-red/60 hover:bg-zinc-900/40 transition-all group no-underline text-center"
              >
                <p className="text-sm text-zinc-300 group-hover:text-white transition-colors">
                  Don&rsquo;t see your role? Submit a {" "}
                  <span className="text-rebel-red font-semibold">general application</span>
                  {" "}for future openings.
                </p>
                <p className="text-xs text-zinc-500 mt-1.5">
                  Cleared, technical, sales, and exec searches open every week.
                </p>
              </Link>
            </>
          )}
        </div>
      </section>

      {/* ===== WHAT TO EXPECT (candidate experience promise) ===== */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24 border-t border-zinc-800/50 pt-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-rebel-red text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              When You Apply
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 uppercase">
              What to expect from us
            </h2>
            <p className="text-zinc-400 text-base max-w-2xl mx-auto leading-relaxed">
              Every application is reviewed by me, not a coordinator and not a black hole.
              Here's the deal on the other side of the apply button.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: <Eye className="w-5 h-5 text-rebel-red" />,
                title: "Every resume read",
                body: "Not auto-filtered to oblivion. I read every application personally, even the 360+ that came in for the last ML search.",
              },
              {
                icon: <CheckCircle2 className="w-5 h-5 text-rebel-red" />,
                title: "Proof-first vetting",
                body: "Resume polish isn't a pipeline. Expect structured screens, portfolio review, and AI-scored match signals, not LinkedIn drive-bys.",
              },
              {
                icon: <MessageSquare className="w-5 h-5 text-rebel-red" />,
                title: "Reply within 48 hours",
                body: "Yes or no, you'll hear back. If you're a fit, we move to a 30-min intro that same week. If not, I'll tell you why.",
              },
              {
                icon: <Shield className="w-5 h-5 text-rebel-red" />,
                title: "Cleared work supported",
                body: "TS, TS/SCI, public trust, pipelines built on community knowledge, not guesswork. FOCI-sensitive engagements supported.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm p-5 hover:border-zinc-700 transition-colors"
              >
                <div className="mb-3">{item.icon}</div>
                <div className="font-display text-sm font-bold text-white uppercase mb-2">{item.title}</div>
                <div className="text-zinc-400 text-sm leading-relaxed">{item.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function FilterRow({
  label,
  options,
  selected,
  onToggle,
}: {
  label: string;
  options: string[];
  selected: Set<string>;
  onToggle: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-zinc-500 text-[10px] uppercase tracking-[0.18em] font-mono pr-1 inline-flex items-center gap-1.5">
        <FilterIcon className="h-3 w-3" /> {label}
      </span>
      {options.map((opt) => {
        const active = selected.has(opt);
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onToggle(opt)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors border ${
              active
                ? "border-rebel-red bg-rebel-red/10 text-white"
                : "border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:text-zinc-200 hover:border-zinc-600"
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}
