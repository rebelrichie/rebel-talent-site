// Safe addition, Hiring Readiness Scorecard, the middle-funnel buyer tool.
// 10 yes/no questions across Strategy / Process / Metrics / Sourcing / etc.
// Email-captured BEFORE submit so we don't lose anyone after they see the score.
// POSTs to rebelapply.com/api/public/scorecard. Stores the lead in companies +
// JSONB metadata, Slack-pings, emails Richie, and returns a per-question report.

import { useMemo, useState } from "react";
import {
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  Calendar,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";

const SCORECARD_API = "https://rebelapply.com/api/public/scorecard";

interface Question {
  id: string;
  category: string;
  prompt: string;
}

// Keep in sync with src/app/api/public/scorecard/route.ts QUESTIONS.
const QUESTIONS: Question[] = [
  { id: "roadmap", category: "Strategy", prompt: "Do you have a documented hiring roadmap for the next 6 months?" },
  { id: "scorecards", category: "Process", prompt: "Do all of your hiring managers use the same interview scorecard?" },
  { id: "cost-per-hire", category: "Metrics", prompt: "Do you know your current cost per hire across all sourcing channels?" },
  { id: "sourcing-playbooks", category: "Sourcing", prompt: "Do you have a sourcing playbook for each role type you regularly hire?" },
  { id: "candidate-response", category: "Candidate Experience", prompt: "Do candidates get a substantive response within 48 hours of applying?" },
  { id: "comp-framework", category: "Compensation", prompt: "Do you have a defensible compensation framework by level and function?" },
  { id: "pipeline-metrics", category: "Data", prompt: "Can your ATS tell you the conversion rate at each pipeline stage?" },
  { id: "interview-calibration", category: "Process", prompt: "Are interview questions calibrated against the actual job requirements?" },
  { id: "onboarding-plan", category: "Onboarding", prompt: "Do new hires get a documented 30/60/90-day plan in their first week?" },
  { id: "exit-feedback", category: "Retention", prompt: "Do you ask departing employees what would have kept them?" },
];

interface BreakdownItem {
  id: string;
  category: string;
  prompt: string;
  answered: boolean;
  fixIfNo: string | null;
}

interface WeakestCategory {
  category: string;
  gaps: string[];
}

type ResultPayload = {
  score: number;
  band: string;
  verdict: string;
  weakestCategories: WeakestCategory[];
  breakdown: BreakdownItem[];
};

type Step = "intro" | "questions" | "contact" | "result";

export default function HiringReadiness() {
  const [step, setStep] = useState<Step>("intro");
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState(""); // honeypot
  const [submitting, setSubmitting] = useState(false);
  const [errMsg, setErrMsg] = useState<string | null>(null);
  const [result, setResult] = useState<ResultPayload | null>(null);

  const yesCount = useMemo(
    () => QUESTIONS.reduce((acc, q) => acc + (answers[q.id] ? 1 : 0), 0),
    [answers],
  );
  const answeredCount = useMemo(
    () => QUESTIONS.reduce((acc, q) => acc + (q.id in answers ? 1 : 0), 0),
    [answers],
  );
  const allAnswered = answeredCount === QUESTIONS.length;

  function setAnswer(id: string, value: boolean) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;

    if (!name.trim() || !email.trim() || !company.trim()) {
      setErrMsg("Name, email, and company are required.");
      return;
    }

    setErrMsg(null);
    setSubmitting(true);
    try {
      const res = await fetch(SCORECARD_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          company: company.trim(),
          role: role.trim(),
          answers,
          website_url: websiteUrl,
        }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok) {
        setErrMsg(data?.error || `Submission failed (${res.status}). Try again.`);
        setSubmitting(false);
        return;
      }
      setResult({
        score: data.score,
        band: data.band,
        verdict: data.verdict,
        weakestCategories: data.weakestCategories || [],
        breakdown: data.breakdown || [],
      });
      setStep("result");
    } catch {
      setErrMsg("Network error. Try again or email richie@rebeltalentsystems.com.");
    }
    setSubmitting(false);
  }

  return (
    <PageLayout>
      <PageSEO
        title="Hiring Readiness Scorecard | Rebel Talent"
        description="10-question assessment of your recruiting operation. Score your hiring readiness across strategy, process, metrics, sourcing, and retention. Free, no sales pitch."
        path="/hiring-readiness"
        ogTitle="Hiring Readiness Scorecard | Rebel Talent"
        ogDescription="Score your recruiting operation in 5 minutes. 10 questions, real diagnosis, no upsell."
        ogImage="og-home.png"
        breadcrumbs={[
          { name: "Home", item: "https://rebeltalentsystems.com/" },
          { name: "Hiring Readiness Scorecard", item: "https://rebeltalentsystems.com/hiring-readiness" },
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

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          {step === "intro" && (
            <IntroPanel onStart={() => setStep("questions")} />
          )}

          {step === "questions" && (
            <QuestionsPanel
              answers={answers}
              setAnswer={setAnswer}
              answeredCount={answeredCount}
              total={QUESTIONS.length}
              onBack={() => setStep("intro")}
              onContinue={() => setStep("contact")}
              allAnswered={allAnswered}
            />
          )}

          {step === "contact" && (
            <ContactPanel
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              company={company}
              setCompany={setCompany}
              role={role}
              setRole={setRole}
              websiteUrl={websiteUrl}
              setWebsiteUrl={setWebsiteUrl}
              yesCount={yesCount}
              onBack={() => setStep("questions")}
              onSubmit={submit}
              submitting={submitting}
              errMsg={errMsg}
            />
          )}

          {step === "result" && result && <ResultPanel result={result} />}
        </div>
      </section>
    </PageLayout>
  );
}

// ── Panels ───────────────────────────────────────────────────────────────────

function IntroPanel({ onStart }: { onStart: () => void }) {
  return (
    <div className="text-center">
      <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">
        HIRING READINESS SCORECARD
      </div>
      <h1 className="font-display text-3xl sm:text-5xl font-bold text-white uppercase tracking-tight leading-tight mb-6">
        Where does your<br className="hidden sm:block" /> recruiting actually stand?
      </h1>
      <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
        Ten yes/no questions across the same dimensions I assess on every engagement -
        strategy, process, sourcing, metrics, candidate experience, retention.
        You get a score out of 100, the weakest areas, and a specific fix for each gap.
        No sales pitch, no follow-up sequence, no LinkedIn pop-up.
      </p>

      <div className="grid sm:grid-cols-3 gap-3 max-w-2xl mx-auto mb-10">
        {[
          { label: "Questions", value: "10" },
          { label: "Time", value: "~5 min" },
          { label: "Cost", value: "Free" },
        ].map((s) => (
          <div key={s.label} className="border border-zinc-800 bg-zinc-900/30 p-4">
            <div className="font-display text-2xl font-bold text-white">{s.value}</div>
            <div className="text-zinc-400 text-xs uppercase tracking-wider">{s.label}</div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={onStart}
        className="inline-flex items-center gap-2 px-8 py-4 bg-rebel-red hover:bg-red-600 text-white font-display text-sm font-semibold uppercase tracking-wider rounded-md transition-colors"
      >
        Start the Scorecard <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}

function QuestionsPanel({
  answers,
  setAnswer,
  answeredCount,
  total,
  onBack,
  onContinue,
  allAnswered,
}: {
  answers: Record<string, boolean>;
  setAnswer: (id: string, v: boolean) => void;
  answeredCount: number;
  total: number;
  onBack: () => void;
  onContinue: () => void;
  allAnswered: boolean;
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-zinc-200 text-xs uppercase tracking-wider mb-6"
      >
        <ArrowLeft className="w-3.5 h-3.5" /> Back
      </button>

      <div className="flex items-end justify-between mb-6">
        <div>
          <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-2">
            SCORECARD · 10 QUESTIONS
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
            Be honest.
          </h2>
        </div>
        <div className="text-zinc-400 font-mono text-xs">
          {answeredCount} / {total}
        </div>
      </div>

      <div className="h-1 bg-zinc-900 rounded-full overflow-hidden mb-8">
        <div
          className="h-full bg-rebel-red transition-all duration-300"
          style={{ width: `${(answeredCount / total) * 100}%` }}
        />
      </div>

      <ol className="space-y-4">
        {QUESTIONS.map((q, idx) => {
          const v = answers[q.id];
          return (
            <li
              key={q.id}
              className="border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm p-5"
            >
              <div className="flex items-start gap-4">
                <div className="font-mono text-rebel-red text-sm font-bold shrink-0 mt-0.5">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-zinc-400 text-[10px] uppercase tracking-[0.18em] font-mono mb-1.5">
                    {q.category}
                  </div>
                  <p className="text-zinc-100 text-base leading-snug mb-4">{q.prompt}</p>
                  <div className="flex gap-2">
                    <YesNoButton selected={v === true} onClick={() => setAnswer(q.id, true)} label="Yes" />
                    <YesNoButton selected={v === false} onClick={() => setAnswer(q.id, false)} label="No" variant="negative" />
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-10 flex justify-end">
        <button
          type="button"
          disabled={!allAnswered}
          onClick={onContinue}
          className="inline-flex items-center gap-2 px-8 py-4 bg-rebel-red hover:bg-red-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-display text-sm font-semibold uppercase tracking-wider rounded-md transition-colors"
        >
          {allAnswered ? "Continue to Your Score" : `Answer all ${total} questions`}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function YesNoButton({
  selected,
  onClick,
  label,
  variant = "positive",
}: {
  selected: boolean;
  onClick: () => void;
  label: string;
  variant?: "positive" | "negative";
}) {
  const base = "px-5 py-2 text-sm font-display uppercase tracking-wider rounded-md border transition-colors";
  if (selected) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${base} ${variant === "positive" ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-300" : "bg-rebel-red/15 border-rebel-red/40 text-white"}`}
      >
        {label}
      </button>
    );
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${base} bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-600`}
    >
      {label}
    </button>
  );
}

function ContactPanel({
  name, setName, email, setEmail, company, setCompany, role, setRole,
  websiteUrl, setWebsiteUrl, yesCount, onBack, onSubmit, submitting, errMsg,
}: {
  name: string; setName: (v: string) => void;
  email: string; setEmail: (v: string) => void;
  company: string; setCompany: (v: string) => void;
  role: string; setRole: (v: string) => void;
  websiteUrl: string; setWebsiteUrl: (v: string) => void;
  yesCount: number;
  onBack: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  submitting: boolean;
  errMsg: string | null;
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-zinc-200 text-xs uppercase tracking-wider mb-6"
      >
        <ArrowLeft className="w-3.5 h-3.5" /> Back to questions
      </button>

      <div className="text-center mb-8">
        <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">
          ONE LAST STEP
        </div>
        <h2 className="font-display text-2xl sm:text-4xl font-bold text-white uppercase tracking-tight leading-tight mb-4">
          Where should I send your report?
        </h2>
        <p className="text-zinc-400 text-base leading-relaxed max-w-xl mx-auto">
          You answered <span className="text-white font-semibold">{yesCount} of 10 yes</span>.
          Drop your details and the per-question breakdown, including the specific fix for every gap, comes up immediately.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-5">
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
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required autoComplete="name" className={inputClass} />
          </Field>
          <Field label="Work email" required>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" className={inputClass} />
          </Field>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Company" required>
            <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} required autoComplete="organization" className={inputClass} />
          </Field>
          <Field label="Your role" hint="Optional, helps me contextualize the report">
            <input type="text" value={role} onChange={(e) => setRole(e.target.value)} placeholder="e.g. CTO, VP People, Founder" className={inputClass} />
          </Field>
        </div>

        {errMsg && (
          <div className="flex gap-3 items-start border border-rebel-red/40 bg-rebel-red/5 p-4 rounded-md">
            <AlertCircle className="w-5 h-5 text-rebel-red shrink-0 mt-0.5" />
            <p className="text-sm text-zinc-200">{errMsg}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-rebel-red hover:bg-red-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-display text-sm font-semibold uppercase tracking-wider rounded-md transition-colors"
        >
          {submitting ? "Calculating..." : (<>See My Score <ArrowRight className="w-4 h-4" /></>)}
        </button>

        <p className="text-zinc-400 text-xs text-center pt-2">
          One-time use. No follow-up sequence. Reply to my email if you want to talk.
        </p>
      </form>
    </div>
  );
}

function ResultPanel({ result }: { result: ResultPayload }) {
  const { score, band, verdict, weakestCategories, breakdown } = result;
  return (
    <div>
      <div className="text-center mb-10">
        <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">
          YOUR SCORE
        </div>
        <div className="inline-flex items-end justify-center gap-2 mb-3">
          <span className="font-display text-7xl sm:text-8xl font-bold text-rebel-red leading-none">{score}</span>
          <span className="text-zinc-400 text-2xl font-mono pb-2">/100</span>
        </div>
        <div className="font-display text-xl sm:text-2xl font-bold text-white uppercase tracking-wider mb-4">{band}</div>
        <p className="text-zinc-300 text-base leading-relaxed max-w-2xl mx-auto">{verdict}</p>
      </div>

      {weakestCategories.length > 0 && (
        <div className="mb-10">
          <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-4 text-center">
            FIX THESE FIRST
          </div>
          <div className="grid gap-3">
            {weakestCategories.map((c) => (
              <div key={c.category} className="border border-rebel-red/30 bg-rebel-red/5 p-5">
                <div className="font-display text-sm font-bold text-white uppercase tracking-wider mb-3">{c.category}</div>
                <ul className="space-y-2">
                  {c.gaps.map((g, i) => (
                    <li key={i} className="text-zinc-300 text-sm leading-relaxed">• {g}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mb-10">
        <div className="font-mono text-zinc-400 text-xs tracking-[0.3em] uppercase mb-4">
          FULL BREAKDOWN
        </div>
        <ol className="space-y-2">
          {breakdown.map((b, idx) => (
            <li
              key={b.id}
              className={`border p-4 ${b.answered ? "border-emerald-500/20 bg-emerald-500/[0.03]" : "border-zinc-800 bg-zinc-900/30"}`}
            >
              <div className="flex items-start gap-3">
                <div className="shrink-0 mt-0.5">
                  {b.answered ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <span className="w-4 h-4 rounded-full border border-zinc-600 inline-block" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="text-zinc-400 text-[10px] uppercase tracking-[0.18em] font-mono mb-1">
                    Q{String(idx + 1).padStart(2, "0")} · {b.category}
                  </div>
                  <p className={`text-sm leading-relaxed ${b.answered ? "text-zinc-400" : "text-zinc-200"}`}>{b.prompt}</p>
                  {b.fixIfNo && (
                    <p className="text-sm text-zinc-400 leading-relaxed mt-2 pl-3 border-l-2 border-rebel-red/40">
                      {b.fixIfNo}
                    </p>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8 text-center">
        <h3 className="font-display text-xl sm:text-2xl font-bold text-white uppercase tracking-tight mb-3">
          Want a deeper diagnosis?
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed max-w-xl mx-auto mb-6">
          30-minute strategy call. I'll go through your specific gaps and tell you what I'd fix first, what it would take, and whether you need outside help at all.
        </p>
        <a
          href="/strategy-call"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-rebel-red hover:bg-red-600 text-white font-display text-sm font-semibold uppercase tracking-wider rounded-md transition-colors no-underline"
        >
          <Calendar className="w-4 h-4" /> Book a Strategy Call <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

// ── Shared atoms ────────────────────────────────────────────────────────────

const inputClass =
  "w-full px-4 py-3 bg-zinc-900/60 border border-zinc-800 rounded-md text-white text-sm placeholder-zinc-600 focus:border-rebel-red focus:outline-none focus:ring-1 focus:ring-rebel-red/30 transition-colors";

function Field({ label, required, hint, children }: { label: string; required?: boolean; hint?: string; children: React.ReactNode }) {
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
