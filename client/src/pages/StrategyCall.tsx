// Safe addition, async qualifier before the Calendly handoff.
// Form posts to rebelapply.com/api/public/discovery. On success we show
// the Calendly link so Richie's calendar is protected from random bookings.

import { useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle, Calendar } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import { BOOK_CHRIS_HREF, EMAIL_CHRIS_HREF } from "@/components/ContingentChrisSection";

const DISCOVERY_API = "https://rebelapply.com/api/public/discovery";
const FALLBACK_CALENDLY = "https://calendly.com/richielam";

type SubmitState =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success"; calendlyUrl: string; message: string }
  | { kind: "error"; message: string };

const TIMELINES = [
  { value: "urgent", label: "Urgent, hiring this week" },
  { value: "30-days", label: "Next 30 days" },
  { value: "90-days", label: "Next 90 days" },
  { value: "exploring", label: "Exploring / no fixed timeline" },
];

const ENGAGEMENT_TYPES = [
  { value: "contingent", label: "Contingent search" },
  { value: "retained", label: "Retained search" },
  { value: "fractional", label: "Embedded / Fractional" },
  { value: "contract", label: "Contract / contract-to-hire" },
  { value: "advisory", label: "Advisory / consulting" },
  { value: "unsure", label: "Not sure yet" },
];

const STRATEGY_COPY: Record<string, { eyebrow: string; title: string; description: string; headline: string; deck: string; footer: string }> = {
  contingent: {
    eyebrow: "CONTINGENT SEARCH",
    title: "Start a search | Rebel Talent",
    description: "Chris Moscato owns every new contingent conversation. Flat fee by salary band, invoiced when the search starts. No deposit. Name, email, and company get you through.",
    headline: "Start a search.",
    deck: "Chris Moscato owns every new contingent conversation. Flat fee by salary band, invoiced when the search starts. No deposit. Name, email, and company get you through. Email us if you would rather skip the form.",
    footer: "Contingent notes stay with the search. No list-building. FOCI-sensitive work is supported.",
  },
  retained: {
    eyebrow: "RETAINED SEARCH",
    title: "Start a retained search | Rebel Talent",
    description: "A defined role with a deadline. 50% up front and 50% at placement.",
    headline: "Start a retained search.",
    deck: "A defined role with a deadline. 50% up front and 50% at placement. Name, email, and company get you through.",
    footer: "Retained notes come to the team. No list-building. FOCI-sensitive work is supported.",
  },
  fractional: {
    eyebrow: "EMBEDDED / FRACTIONAL",
    title: "Start an embedded engagement | Rebel Talent",
    description: "A monthly retainer. We run recruiting for a while, then you run it. Scope sets the number.",
    headline: "Start an embedded engagement.",
    deck: "A monthly retainer. We run recruiting for a while, then you run it. Name, email, and company get you through.",
    footer: "Embedded notes come to the team. No list-building. FOCI-sensitive work is supported.",
  },
  contract: {
    eyebrow: "CONTRACT",
    title: "Ask about contract roles | Rebel Talent",
    description: "Contract and contract-to-hire. Name, email, and company get you through.",
    headline: "Ask about contract roles.",
    deck: "Contract and contract-to-hire. Name, email, and company get you through.",
    footer: "No list-building. FOCI-sensitive work is supported.",
  },
  advisory: {
    eyebrow: "ADVISORY",
    title: "Book an advisory call | Rebel Talent",
    description: "Feasibility, compensation, or infrastructure before you spend on a search. Priced up front.",
    headline: "Book an advisory call.",
    deck: "Feasibility, compensation, clearance timelines, or whether the AI stack is doing anything. Priced up front. Name, email, and company get you through.",
    footer: "Advisory notes come to Richie. No list-building. FOCI-sensitive work is supported.",
  },
  unsure: {
    eyebrow: "STRATEGY CALL",
    title: "Book a strategy call | Rebel Talent",
    description: "Thirty minutes. Name, email, and company get you through. We will say if we are a fit.",
    headline: "Book a strategy call.",
    deck: "Name, email, and company get you through. Tell us the role and what is stuck. We will say if we are a fit.",
    footer: "No list-building. FOCI-sensitive work is supported.",
  },
};

// Safe addition, company stage for lead qualification. Optional on purpose:
// it sharpens routing and call prep without adding a required hoop.
const COMPANY_STAGES = [
  { value: "pre-seed-seed", label: "Pre-seed / Seed" },
  { value: "series-a-c", label: "Series A-C" },
  { value: "growth-public", label: "Growth / Public" },
  { value: "gov-defense", label: "Government / Defense" },
];

// Safe addition, lets landing pages pre-select the engagement type via
// /strategy-call?engagement=contingent so search leads route cleanly.
function engagementFromQuery(): string {
  if (typeof window === "undefined") return "contingent";
  const value = new URLSearchParams(window.location.search).get("engagement") || "";
  return ENGAGEMENT_TYPES.some((opt) => opt.value === value) ? value : "contingent";
}

export default function StrategyCall() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [roleToFill, setRoleToFill] = useState("");
  const [timeline, setTimeline] = useState("");
  const [engagementType, setEngagementType] = useState(engagementFromQuery);
  const [companyStage, setCompanyStage] = useState("");
  const [blocker, setBlocker] = useState("");
  // honeypot, bots fill it, humans never see it
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [submit, setSubmit] = useState<SubmitState>({ kind: "idle" });
  const isContingent = engagementType === "contingent";
  const copy = STRATEGY_COPY[engagementType] ?? STRATEGY_COPY.contingent;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submit.kind === "submitting") return;

    // Safe addition — only name, email, and company gate the calendar now.
    // Everything else is optional context; timeline defaults to exploring.
    if (!name.trim() || !email.trim() || !company.trim()) {
      setSubmit({ kind: "error", message: "Name, email, and company are required." });
      return;
    }

    setSubmit({ kind: "submitting" });
    try {
      const res = await fetch(DISCOVERY_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          company: company.trim(),
          companyWebsite: companyWebsite.trim(),
          roleToFill: roleToFill.trim(),
          timeline: timeline || "exploring",
          engagementType,
          companyStage,
          blocker: blocker.trim(),
          source: typeof document !== "undefined" ? document.referrer : "",
          website_url: websiteUrl, // honeypot
        }),
      });

      const data = await res.json().catch(() => null);
      if (!res.ok) {
        setSubmit({
          kind: "error",
          message: data?.error || `Request failed (${res.status}). Try again or email us directly.`,
        });
        return;
      }

      setSubmit({
        kind: "success",
        calendlyUrl: data?.calendlyUrl || (isContingent ? BOOK_CHRIS_HREF : FALLBACK_CALENDLY),
        message: data?.message || "Got it. Use the link to book your call.",
      });
    } catch {
      setSubmit({
        kind: "error",
        message: `Network error. Try again or email us directly.`,
      });
    }
  }

  return (
    <PageLayout>
      <PageSEO
        title={copy.title}
        description={copy.description}
        path="/strategy-call"
        ogTitle={copy.title}
        ogDescription={copy.description}
        ogImage="og-home.png"
        breadcrumbs={[
          { name: "Home", item: "https://rebeltalentsystems.com/" },
          { name: "Book a Strategy Call", item: "https://rebeltalentsystems.com/strategy-call" },
        ]}
      />

      <section className="relative overflow-hidden bg-rebel-space min-h-[calc(100vh-80px)]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 0% 0%, rgba(220,38,38,0.08) 0%, transparent 55%), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(234,88,12,0.06) 0%, transparent 55%)",
          }}
        />

        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          {submit.kind === "success" ? (
            <SuccessPanel calendlyUrl={submit.calendlyUrl} message={submit.message} />
          ) : (
            <>
              <div className="text-center mb-10">
                <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">
                  {copy.eyebrow}
                </div>
                <h1 className="font-display text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight leading-tight mb-4">
                  {copy.headline}
                </h1>
                <p className="text-zinc-400 text-base leading-relaxed">
                  {copy.deck}
                </p>
                {isContingent && (
                  <p className="text-zinc-300 text-sm mt-4">
                    Prefer email?{" "}
                    <a
                      href={EMAIL_CHRIS_HREF}
                      data-testid="link-strategy-email-chris"
                      className="text-white hover:text-rebel-red underline underline-offset-4 decoration-zinc-600 hover:decoration-rebel-red transition-colors"
                    >
                      Email us
                    </a>
                  </p>
                )}
                {/* Safe addition — lower-commitment path for people not ready to book */}
                <p className="text-zinc-400 text-sm mt-3">
                  Not ready for a call?{" "}
                  <a href="/hiring-readiness" className="text-zinc-300 hover:text-white underline underline-offset-4 decoration-zinc-700 hover:decoration-rebel-red transition-colors">
                    Take the hiring scorecard
                  </a>
                  . Five minutes. No follow-up sequence.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot, visually hidden, off-screen, no autofocus */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website_url">Leave this empty</label>
                  <input
                    id="website_url"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Your name" required>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      autoComplete="name"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Work email" required>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoComplete="email"
                      className={inputClass}
                    />
                  </Field>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Company" required>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      required
                      autoComplete="organization"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Company website" hint="Optional, helps me research before the call">
                    <input
                      type="text"
                      value={companyWebsite}
                      onChange={(e) => setCompanyWebsite(e.target.value)}
                      placeholder="example.com"
                      className={inputClass}
                    />
                  </Field>
                </div>

                <Field label="Role you're hiring for" hint="Title or a short description, for example Forward Deployed Engineer with TS/SCI.">
                  <input
                    type="text"
                    value={roleToFill}
                    onChange={(e) => setRoleToFill(e.target.value)}
                    className={inputClass}
                  />
                </Field>

                <Field label="What kind of engagement are you considering?">
                  <div className="grid sm:grid-cols-2 gap-2">
                    {ENGAGEMENT_TYPES.map((opt) => (
                      <RadioPill
                        key={opt.value}
                        name="engagementType"
                        value={opt.value}
                        label={opt.label}
                        checked={engagementType === opt.value}
                        onChange={() => setEngagementType(opt.value)}
                      />
                    ))}
                  </div>
                </Field>

                <Field label="Company stage" hint="Optional, helps us route you to the right person">
                  <div className="grid sm:grid-cols-2 gap-2">
                    {COMPANY_STAGES.map((opt) => (
                      <RadioPill
                        key={opt.value}
                        name="companyStage"
                        value={opt.value}
                        label={opt.label}
                        checked={companyStage === opt.value}
                        onChange={() => setCompanyStage(opt.value)}
                      />
                    ))}
                  </div>
                </Field>

                <Field label="Timeline" hint="Optional, defaults to exploring if you skip it">
                  <div className="grid sm:grid-cols-2 gap-2">
                    {TIMELINES.map((opt) => (
                      <RadioPill
                        key={opt.value}
                        name="timeline"
                        value={opt.value}
                        label={opt.label}
                        checked={timeline === opt.value}
                        onChange={() => setTimeline(opt.value)}
                      />
                    ))}
                  </div>
                </Field>

                <Field label="What's the biggest blocker right now?" hint="What is stuck: no pipeline, the wrong agency, cannot close, something else.">
                  <textarea
                    value={blocker}
                    onChange={(e) => setBlocker(e.target.value)}
                    rows={4}
                    className={`${inputClass} resize-none`}
                  />
                </Field>

                {submit.kind === "error" && (
                  <div className="flex gap-3 items-start border border-rebel-red/40 bg-rebel-red/5 p-4 rounded-md">
                    <AlertCircle className="w-5 h-5 text-rebel-red shrink-0 mt-0.5" />
                    <p className="text-sm text-zinc-200">{submit.message}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submit.kind === "submitting"}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-rebel-red hover:bg-red-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-display text-sm font-semibold uppercase tracking-wider rounded-md transition-colors"
                >
                  {submit.kind === "submitting" ? "Submitting..." : (
                    <>
                      Send & See the Calendar <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-zinc-400 text-xs text-center pt-2">
                  {copy.footer}
                </p>
              </form>
            </>
          )}
        </div>
      </section>
    </PageLayout>
  );
}

const inputClass =
  "w-full px-4 py-3 bg-zinc-900/60 border border-zinc-800 rounded-md text-white text-sm placeholder-zinc-600 focus:border-rebel-red focus:outline-none focus:ring-1 focus:ring-rebel-red/30 transition-colors";

function Field({
  label,
  required,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-zinc-300 text-xs font-mono tracking-wider uppercase mb-2">
        {label}{required && <span className="text-rebel-red ml-1">*</span>}
      </label>
      {children}
      {hint && <p className="text-zinc-400 text-xs mt-1.5">{hint}</p>}
    </div>
  );
}

function RadioPill({
  name,
  value,
  label,
  checked,
  onChange,
}: {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label
      className={`flex items-center gap-2 px-4 py-3 border rounded-md cursor-pointer text-sm transition-colors ${
        checked
          ? "border-rebel-red bg-rebel-red/10 text-white"
          : "border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
      }`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span className={`w-3.5 h-3.5 rounded-full border ${checked ? "border-rebel-red bg-rebel-red" : "border-zinc-600"}`} />
      <span className="leading-snug">{label}</span>
    </label>
  );
}

function SuccessPanel({ calendlyUrl, message }: { calendlyUrl: string; message: string }) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rebel-red/10 border border-rebel-red/30 mb-6">
        <CheckCircle2 className="w-8 h-8 text-rebel-red" />
      </div>
      <h1 className="font-display text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight leading-tight mb-4">
        Got it.
      </h1>
      <p className="text-zinc-300 text-base leading-relaxed mb-2">{message}</p>
      <p className="text-zinc-400 text-sm leading-relaxed mb-10 max-w-md mx-auto">
        We will have the context loaded before the call. If it is not a fit, we will say so and point you somewhere that is.
      </p>
      <a
        href={calendlyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-rebel-red hover:bg-red-600 text-white font-display text-sm font-semibold uppercase tracking-wider rounded-md transition-colors"
      >
        <Calendar className="w-4 h-4" /> Open the Calendar <ArrowRight className="w-4 h-4" />
      </a>
      <p className="text-zinc-400 text-xs mt-6">
        Confirmation will arrive in your inbox after you pick a time.
      </p>
    </div>
  );
}
