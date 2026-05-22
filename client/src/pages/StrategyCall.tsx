// Safe addition — async qualifier before the Calendly handoff.
// Form posts to rebelapply.com/api/public/discovery. On success we show
// the Calendly link so Richie's calendar is protected from random bookings.

import { useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle, Calendar } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";

const DISCOVERY_API = "https://rebelapply.com/api/public/discovery";
const FALLBACK_CALENDLY = "https://calendly.com/richielam";

type SubmitState =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success"; calendlyUrl: string; message: string }
  | { kind: "error"; message: string };

const TIMELINES = [
  { value: "urgent", label: "Urgent — hiring this week" },
  { value: "30-days", label: "Next 30 days" },
  { value: "90-days", label: "Next 90 days" },
  { value: "exploring", label: "Exploring / no fixed timeline" },
];

const ENGAGEMENT_TYPES = [
  { value: "project", label: "Project / critical-hire search" },
  { value: "advisory", label: "Advisory / consulting" },
  { value: "fractional", label: "Fractional Head of Talent (waitlist)" },
  { value: "unsure", label: "Not sure yet" },
];

export default function StrategyCall() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [roleToFill, setRoleToFill] = useState("");
  const [timeline, setTimeline] = useState("");
  const [engagementType, setEngagementType] = useState("");
  const [blocker, setBlocker] = useState("");
  // honeypot — bots fill it, humans never see it
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [submit, setSubmit] = useState<SubmitState>({ kind: "idle" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submit.kind === "submitting") return;

    if (!name.trim() || !email.trim() || !company.trim() || !timeline) {
      setSubmit({ kind: "error", message: "Name, email, company, and timeline are required." });
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
          timeline,
          engagementType,
          blocker: blocker.trim(),
          source: typeof document !== "undefined" ? document.referrer : "",
          website_url: websiteUrl, // honeypot
        }),
      });

      const data = await res.json().catch(() => null);
      if (!res.ok) {
        setSubmit({
          kind: "error",
          message: data?.error || `Request failed (${res.status}). Try again or email richie@rebeltalentsystems.com directly.`,
        });
        return;
      }

      setSubmit({
        kind: "success",
        calendlyUrl: data?.calendlyUrl || FALLBACK_CALENDLY,
        message: data?.message || "Got it. Use the link to book your call.",
      });
    } catch {
      setSubmit({
        kind: "error",
        message: "Network error. Try again or email richie@rebeltalentsystems.com directly.",
      });
    }
  }

  return (
    <PageLayout>
      <PageSEO
        title="Book a Strategy Call | Rebel Talent"
        description="30-minute strategy call with Richie Lampani. Share what you're hiring for first so the call is productive — not a sales pitch."
        path="/strategy-call"
        ogTitle="Book a Strategy Call | Rebel Talent"
        ogDescription="30 minutes. Tell me what you're hiring for, and I'll come prepared with a real diagnosis."
        ogImage="og-home.png"
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
                  STRATEGY CALL
                </div>
                <h1 className="font-display text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight leading-tight mb-4">
                  Tell me what you're dealing with first.
                </h1>
                <p className="text-zinc-400 text-base leading-relaxed">
                  30 minutes, no pitch deck, no upsell. Five questions below so I show up with your context already loaded — and so I can tell you fast if I'm not the right fit.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot — visually hidden, off-screen, no autofocus */}
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

                <Field label="Role you're hiring for" hint="Title or short description — e.g. 'Forward Deployed Engineer with TS/SCI'">
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

                <Field label="Timeline" required>
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

                <Field label="What's the biggest blocker right now?" hint="Be specific — broken process, wrong agency, no pipeline, can't close, etc.">
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

                <p className="text-zinc-600 text-xs text-center pt-2">
                  Your info goes straight to me — no marketing automation, no list-building.
                  All inquiries handled with discretion. FOCI-sensitive engagements supported.
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
      {hint && <p className="text-zinc-600 text-xs mt-1.5">{hint}</p>}
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
      <p className="text-zinc-500 text-sm leading-relaxed mb-10 max-w-md mx-auto">
        I'll have your context loaded before we talk. If we're not a fit, I'll tell you on the call and point you somewhere better.
      </p>
      <a
        href={calendlyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-rebel-red hover:bg-red-600 text-white font-display text-sm font-semibold uppercase tracking-wider rounded-md transition-colors"
      >
        <Calendar className="w-4 h-4" /> Open the Calendar <ArrowRight className="w-4 h-4" />
      </a>
      <p className="text-zinc-600 text-xs mt-6">
        Confirmation will arrive in your inbox after you pick a time.
      </p>
    </div>
  );
}
