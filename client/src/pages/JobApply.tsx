// Safe addition — public quick-apply page on rebeltalentsystems.com.
// Candidates submit name, email, resume, and optional "why this role"
// without leaving the dark marketing theme. POSTs to the public
// /api/public/apply endpoint, which parses the resume and creates a
// candidate + submission. Recruiter gets a Slack notification.

import { useEffect, useState, useRef } from "react";
import { useRoute, Link } from "wouter";
import { ArrowLeft, ArrowRight, FileText, CheckCircle2, AlertCircle, Upload } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";

const JOB_API = "https://rebelapply.com/api/public/jobs";
const APPLY_API = "https://rebelapply.com/api/public/apply";

interface Job {
  id: string;
  title: string;
  location: string | null;
  remotePolicy: string | null;
  compensationRange: string | null;
  companyName: string;
}

type SubmitState =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success"; message: string; duplicate?: boolean }
  | { kind: "error"; message: string };

export default function JobApply() {
  const [, params] = useRoute<{ id: string }>("/jobs/:id/apply");
  const id = params?.id;

  const [job, setJob] = useState<Job | null>(null);
  const [jobLoading, setJobLoading] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [whyThisRole, setWhyThisRole] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [submit, setSubmit] = useState<SubmitState>({ kind: "idle" });
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!id) return;
    let cancelled = false;
    fetch(`${JOB_API}/${id}`, { cache: "no-store" })
      .then(async (r) => {
        if (!r.ok) throw new Error(r.status === 404 ? "Role not found" : `HTTP ${r.status}`);
        const data = await r.json();
        if (cancelled) return;
        setJob(data.job);
        setJobLoading(false);
      })
      .catch(() => {
        if (cancelled) return;
        setJobLoading(false);
      });
    return () => { cancelled = true; };
  }, [id]);

  const canSubmit =
    !!id &&
    firstName.trim().length >= 1 &&
    lastName.trim().length >= 1 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) &&
    !!file &&
    submit.kind !== "submitting";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit || !id || !file) return;
    setSubmit({ kind: "submitting" });
    try {
      const fd = new FormData();
      fd.append("roleId", id);
      fd.append("firstName", firstName.trim());
      fd.append("lastName", lastName.trim());
      fd.append("email", email.trim().toLowerCase());
      fd.append("whyThisRole", whyThisRole.trim());
      fd.append("file", file);

      const res = await fetch(APPLY_API, { method: "POST", body: fd });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setSubmit({ kind: "error", message: data?.error || "Submission failed. Please try again." });
        return;
      }
      setSubmit({
        kind: "success",
        message: data?.message || "Application received. We'll be in touch within 48 hours.",
        duplicate: !!data?.duplicate,
      });
    } catch {
      setSubmit({ kind: "error", message: "Network error. Please check your connection and try again." });
    }
  }

  return (
    <PageLayout>
      <PageSEO
        title={job ? `Apply: ${job.title} | Rebel Talent` : "Apply | Rebel Talent"}
        description={
          job
            ? `Apply for ${job.title} at ${job.companyName} through Rebel Talent. Quick application — no profile build required.`
            : "Apply for open roles through Rebel Talent."
        }
        path={id ? `/jobs/${id}/apply` : "/jobs"}
      />

      <section data-testid="section-hero" className="px-4 sm:px-6 lg:px-8 pt-8 pb-16 max-w-2xl mx-auto">
        <Link
          href={id ? `/jobs/${id}` : "/jobs"}
          data-testid="link-back-to-role"
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-zinc-500 hover:text-rebel-red transition-colors no-underline mb-8"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to Role
        </Link>

        <p className="text-xs text-rebel-red font-semibold tracking-[0.2em] uppercase mb-3">
          Apply for This Role
        </p>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-2">
          {jobLoading ? "Loading…" : job ? job.title : "Role"}
        </h1>
        {job && (
          <p className="text-sm text-zinc-400 mb-8">
            {job.companyName}
            {job.location ? ` · ${job.location}` : ""}
            {job.compensationRange ? ` · ${job.compensationRange}` : ""}
          </p>
        )}

        {/* Success state replaces the form */}
        {submit.kind === "success" ? (
          <div
            data-testid="apply-success"
            className="rounded-lg border border-emerald-800/60 bg-emerald-950/30 p-6"
          >
            <div className="flex items-start gap-3 mb-4">
              <CheckCircle2 className="h-6 w-6 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h2 className="text-lg font-semibold text-white mb-2">
                  {submit.duplicate ? "Already applied" : "Application received"}
                </h2>
                <p className="text-sm text-zinc-300 leading-relaxed">{submit.message}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-6">
              <Link
                href="/jobs"
                className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium rounded-md transition-colors no-underline border border-zinc-700"
              >
                <ArrowLeft className="h-3.5 w-3.5" /> Browse more roles
              </Link>
              <a
                href="https://rebelapply.com/login-talent"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors no-underline"
              >
                Build full profile (optional) <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5" data-testid="apply-form">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-xs font-semibold tracking-wider uppercase text-zinc-400 mb-2">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-3 py-2.5 bg-zinc-950 border border-zinc-800 rounded-md text-white placeholder:text-zinc-600 focus:outline-none focus:border-rebel-red transition-colors"
                  autoComplete="given-name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-xs font-semibold tracking-wider uppercase text-zinc-400 mb-2">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-3 py-2.5 bg-zinc-950 border border-zinc-800 rounded-md text-white placeholder:text-zinc-600 focus:outline-none focus:border-rebel-red transition-colors"
                  autoComplete="family-name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold tracking-wider uppercase text-zinc-400 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-3 py-2.5 bg-zinc-950 border border-zinc-800 rounded-md text-white placeholder:text-zinc-600 focus:outline-none focus:border-rebel-red transition-colors"
                autoComplete="email"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold tracking-wider uppercase text-zinc-400 mb-2">
                Resume
              </label>
              <input
                ref={fileInputRef}
                type="file"
                required
                accept=".pdf,.docx,.doc,.txt,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/msword,text/plain"
                onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                className="sr-only"
                data-testid="input-resume"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className={`w-full px-4 py-3.5 border-2 border-dashed rounded-md transition-colors text-left flex items-center gap-3 ${
                  file
                    ? "border-emerald-700 bg-emerald-950/20 text-emerald-300"
                    : "border-zinc-800 hover:border-rebel-red text-zinc-400 hover:text-white"
                }`}
              >
                {file ? <FileText className="h-5 w-5 shrink-0" /> : <Upload className="h-5 w-5 shrink-0" />}
                <div className="flex-1 min-w-0">
                  {file ? (
                    <>
                      <div className="font-medium truncate">{file.name}</div>
                      <div className="text-xs text-emerald-400/70">
                        {(file.size / 1024).toFixed(0)} KB · click to change
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="font-medium">Upload resume</div>
                      <div className="text-xs text-zinc-500">PDF, DOCX, DOC, or TXT · max 10MB</div>
                    </>
                  )}
                </div>
              </button>
            </div>

            <div>
              <label htmlFor="whyThisRole" className="block text-xs font-semibold tracking-wider uppercase text-zinc-400 mb-2">
                Why this role? <span className="font-normal normal-case tracking-normal text-zinc-600">— optional</span>
              </label>
              <textarea
                id="whyThisRole"
                value={whyThisRole}
                onChange={(e) => setWhyThisRole(e.target.value.slice(0, 1000))}
                rows={3}
                placeholder="One paragraph: why are you a fit, what's the most interesting thing about the role to you, etc. Skippable."
                className="w-full px-3 py-2.5 bg-zinc-950 border border-zinc-800 rounded-md text-white placeholder:text-zinc-600 focus:outline-none focus:border-rebel-red transition-colors resize-none"
              />
              <p className="text-[10px] text-zinc-600 mt-1">
                {whyThisRole.length}/1000
              </p>
            </div>

            {submit.kind === "error" && (
              <div className="rounded-md border border-red-900 bg-red-950/40 p-3 flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                <p className="text-sm text-red-300">{submit.message}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={!canSubmit}
              data-testid="button-submit-application"
              className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 font-semibold rounded-md transition-colors ${
                canSubmit
                  ? "bg-rebel-red hover:bg-red-700 text-white"
                  : "bg-zinc-900 text-zinc-600 cursor-not-allowed border border-zinc-800"
              }`}
            >
              {submit.kind === "submitting" ? (
                <>
                  <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Submitting your application…
                </>
              ) : (
                <>
                  Submit Application <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>

            <p className="text-[11px] text-zinc-500 leading-relaxed pt-2">
              Submitting takes a few seconds while we parse your resume.
              We'll review and reach out within 48 hours. By submitting,
              you agree to be contacted about this and similar roles.
              Free for candidates, always.
            </p>
          </form>
        )}
      </section>
    </PageLayout>
  );
}
