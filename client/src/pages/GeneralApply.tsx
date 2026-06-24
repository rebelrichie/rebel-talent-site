// Safe addition (2026-06-05): general application form for future-role
// consideration. POSTs to /api/public/general-apply which creates a
// candidate (no submission) tagged source=general_apply.

import { useState, useRef } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, FileText, CheckCircle2, AlertCircle, Upload, X } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";

const API = "https://rebelapply.com/api/public/general-apply";

type SubmitState =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

const WORKING_STYLES = [
  { value: "remote", label: "Remote" },
  { value: "hybrid", label: "Hybrid" },
  { value: "onsite", label: "Onsite" },
  { value: "flexible", label: "Flexible / Open to either" },
];

const CLEARANCES = [
  { value: "none", label: "None" },
  { value: "public-trust", label: "Public Trust" },
  { value: "secret", label: "Secret" },
  { value: "ts", label: "Top Secret" },
  { value: "ts-sci", label: "TS/SCI" },
  { value: "ts-sci-ci-poly", label: "TS/SCI with CI Polygraph" },
  { value: "ts-sci-fsp", label: "TS/SCI with Full Scope Polygraph" },
];

const AVAILABILITY = [
  { value: "immediate", label: "Immediately" },
  { value: "2-weeks", label: "2 weeks" },
  { value: "1-month", label: "About 1 month" },
  { value: "2-plus-months", label: "2+ months" },
  { value: "not-actively", label: "Not actively looking, but open" },
];

const INTERESTS = [
  { value: "software-engineering", label: "Software Engineering" },
  { value: "systems-networking", label: "Systems / Networking" },
  { value: "data-ai-ml", label: "Data / AI / ML" },
  { value: "cybersecurity", label: "Cybersecurity" },
  { value: "devops-sre", label: "DevOps / SRE" },
  { value: "cleared-work", label: "Cleared work (any discipline)" },
  { value: "sales-bd", label: "Sales / BD / Account Exec" },
  { value: "sales-engineering", label: "Sales Engineering" },
  { value: "recruiting-talent", label: "Recruiting / Talent" },
  { value: "product-management", label: "Product Management" },
  { value: "project-management", label: "Project Management" },
  { value: "finance-analytics", label: "Finance / Analytics" },
  { value: "executive", label: "Executive (VP+)" },
  { value: "other", label: "Other" },
];

export default function GeneralApply() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [location, setLocation] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentCompany, setCurrentCompany] = useState("");
  const [yearsExp, setYearsExp] = useState("");
  const [workingStyle, setWorkingStyle] = useState("");
  const [clearance, setClearance] = useState("");
  const [availability, setAvailability] = useState("");
  const [targetComp, setTargetComp] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [note, setNote] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [submit, setSubmit] = useState<SubmitState>({ kind: "idle" });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const toggleInterest = (v: string) => {
    setInterests((prev) => (prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]));
  };

  const canSubmit =
    firstName.trim().length >= 1 &&
    lastName.trim().length >= 1 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) &&
    !!file &&
    !!workingStyle &&
    !!clearance &&
    !!availability &&
    submit.kind !== "submitting";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit || !file) return;
    setSubmit({ kind: "submitting" });
    try {
      const fd = new FormData();
      fd.append("firstName", firstName.trim());
      fd.append("lastName", lastName.trim());
      fd.append("email", email.trim().toLowerCase());
      fd.append("phone", phone.trim());
      fd.append("linkedin", linkedin.trim());
      fd.append("location", location.trim());
      fd.append("currentTitle", currentTitle.trim());
      fd.append("currentCompany", currentCompany.trim());
      fd.append("yearsExp", yearsExp.trim());
      fd.append("workingStyle", workingStyle);
      fd.append("clearance", clearance);
      fd.append("availability", availability);
      fd.append("targetComp", targetComp.trim());
      fd.append("note", note.trim());
      fd.append("interests", JSON.stringify(interests));
      fd.append("file", file);

      const res = await fetch(API, { method: "POST", body: fd });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setSubmit({ kind: "error", message: data?.error || "Submission failed. Please try again." });
        return;
      }
      setSubmit({ kind: "success" });
    } catch {
      setSubmit({ kind: "error", message: "Network error. Please check your connection and try again." });
    }
  }

  return (
    <PageLayout>
      <PageSEO
        title="General Application | Rebel Talent"
        description="Submit a general application for future openings at Rebel Talent. Cleared, technical, GTM, and exec roles."
        path="/jobs/general"
      />
      <section className="px-4 sm:px-6 lg:px-8 pt-8 pb-16 max-w-2xl mx-auto">
        <Link
          href="/jobs"
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-zinc-500 hover:text-rebel-red transition-colors no-underline mb-8"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to Open Roles
        </Link>

        <p className="text-xs text-rebel-red font-semibold tracking-[0.2em] uppercase mb-3">
          General Application
        </p>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
          For roles that haven&rsquo;t opened yet.
        </h1>
        <p className="text-sm text-zinc-400 leading-relaxed mb-8">
          New cleared, technical, sales, and exec searches open all the time. Tell us what you&rsquo;re looking for and we&rsquo;ll reach out when something matches.
        </p>

        {submit.kind === "success" ? (
          <div className="rounded-md border border-emerald-900 bg-emerald-950/40 p-5 flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-emerald-200 font-semibold mb-1">You&rsquo;re in.</p>
              <p className="text-sm text-emerald-100/80">
                We&rsquo;ll be in touch when something opens up that fits. In the meantime, check the {" "}
                <Link href="/jobs" className="underline">open roles</Link>.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Identity */}
            <div className="grid grid-cols-2 gap-3">
              <Field label="First Name" required>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full bg-black/40 border border-zinc-800 rounded-md px-3 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-rebel-red/50 focus:outline-none"
                />
              </Field>
              <Field label="Last Name" required>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full bg-black/40 border border-zinc-800 rounded-md px-3 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-rebel-red/50 focus:outline-none"
                />
              </Field>
            </div>
            <Field label="Email" required>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black/40 border border-zinc-800 rounded-md px-3 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-rebel-red/50 focus:outline-none"
              />
            </Field>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Phone">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-black/40 border border-zinc-800 rounded-md px-3 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-rebel-red/50 focus:outline-none"
                />
              </Field>
              <Field label="LinkedIn URL">
                <input
                  type="url"
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                  placeholder="https://linkedin.com/in/..."
                  className="w-full bg-black/40 border border-zinc-800 rounded-md px-3 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-rebel-red/50 focus:outline-none"
                />
              </Field>
            </div>
            <Field label="Location" hint="City, State (or Remote-friendly)">
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Tysons, VA"
                className="w-full bg-black/40 border border-zinc-800 rounded-md px-3 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-rebel-red/50 focus:outline-none"
              />
            </Field>

            {/* Current role */}
            <div className="grid grid-cols-2 gap-3">
              <Field label="Current Title">
                <input
                  type="text"
                  value={currentTitle}
                  onChange={(e) => setCurrentTitle(e.target.value)}
                  className="w-full bg-black/40 border border-zinc-800 rounded-md px-3 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-rebel-red/50 focus:outline-none"
                />
              </Field>
              <Field label="Current Company">
                <input
                  type="text"
                  value={currentCompany}
                  onChange={(e) => setCurrentCompany(e.target.value)}
                  className="w-full bg-black/40 border border-zinc-800 rounded-md px-3 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-rebel-red/50 focus:outline-none"
                />
              </Field>
            </div>
            <Field label="Years of Experience" hint="Approximate is fine">
              <input
                type="text"
                value={yearsExp}
                onChange={(e) => setYearsExp(e.target.value)}
                placeholder="e.g. 8"
                className="w-full bg-black/40 border border-zinc-800 rounded-md px-3 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-rebel-red/50 focus:outline-none"
              />
            </Field>

            {/* Working style */}
            <Field label="Preferred Working Style" required>
              <div className="grid grid-cols-2 gap-2">
                {WORKING_STYLES.map((o) => (
                  <RadioCard
                    key={o.value}
                    name="workingStyle"
                    value={o.value}
                    label={o.label}
                    checked={workingStyle === o.value}
                    onChange={() => setWorkingStyle(o.value)}
                  />
                ))}
              </div>
            </Field>

            {/* Clearance */}
            <Field label="Current Clearance" required>
              <select
                value={clearance}
                onChange={(e) => setClearance(e.target.value)}
                className="w-full bg-black/40 border border-zinc-800 rounded-md px-3 py-2.5 text-sm text-white focus:border-rebel-red/50 focus:outline-none"
              >
                <option value="">Select...</option>
                {CLEARANCES.map((c) => (
                  <option key={c.value} value={c.value}>{c.label}</option>
                ))}
              </select>
            </Field>

            {/* Interests */}
            <Field label="What kinds of roles interest you?" hint="Pick as many as apply">
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => toggleInterest(opt.value)}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                      interests.includes(opt.value)
                        ? "bg-rebel-red/15 border-rebel-red/60 text-white"
                        : "bg-black/40 border-zinc-800 text-zinc-300 hover:border-zinc-700"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </Field>

            {/* Comp + availability */}
            <Field label="Target Compensation" hint="Optional. Total cash, range is fine.">
              <input
                type="text"
                value={targetComp}
                onChange={(e) => setTargetComp(e.target.value)}
                placeholder="e.g. $150-180K base + bonus"
                className="w-full bg-black/40 border border-zinc-800 rounded-md px-3 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-rebel-red/50 focus:outline-none"
              />
            </Field>
            <Field label="Availability" required>
              <select
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
                className="w-full bg-black/40 border border-zinc-800 rounded-md px-3 py-2.5 text-sm text-white focus:border-rebel-red/50 focus:outline-none"
              >
                <option value="">Select...</option>
                {AVAILABILITY.map((a) => (
                  <option key={a.value} value={a.value}>{a.label}</option>
                ))}
              </select>
            </Field>

            {/* Resume */}
            <Field label="Resume" required hint="PDF, DOCX, DOC, or TXT. Up to 10MB.">
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.docx,.doc,.txt"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="hidden"
              />
              {file ? (
                <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2.5">
                  <FileText className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span className="text-sm text-zinc-200 flex-1 truncate">{file.name}</span>
                  <button
                    type="button"
                    onClick={() => { setFile(null); if (fileInputRef.current) fileInputRef.current.value = ""; }}
                    className="text-zinc-500 hover:text-red-400"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full flex items-center justify-center gap-2 bg-black/40 border border-dashed border-zinc-700 hover:border-zinc-500 rounded-md px-3 py-4 text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                  <Upload className="h-4 w-4" /> Upload resume
                </button>
              )}
            </Field>

            {/* Note */}
            <Field label="Anything else?" hint="Optional. Short note about what you're looking for.">
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value.slice(0, 1500))}
                rows={4}
                placeholder="Tell us about the kind of work you'd want to be doing."
                className="w-full bg-black/40 border border-zinc-800 rounded-md px-3 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-rebel-red/50 focus:outline-none resize-y"
              />
              <p className="text-xs text-zinc-600 mt-1 text-right">{note.length}/1500</p>
            </Field>

            {submit.kind === "error" && (
              <div className="rounded-md border border-red-900 bg-red-950/40 p-3 flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                <p className="text-sm text-red-300">{submit.message}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={!canSubmit}
              className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 font-semibold rounded-md transition-colors ${
                canSubmit
                  ? "bg-rebel-red hover:bg-red-700 text-white"
                  : "bg-zinc-900 text-zinc-600 cursor-not-allowed border border-zinc-800"
              }`}
            >
              {submit.kind === "submitting" ? (
                <>
                  <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Submitting…
                </>
              ) : (
                <>
                  Submit Application <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        )}
      </section>
    </PageLayout>
  );
}

function Field({
  label, required, hint, children,
}: { label: string; required?: boolean; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-semibold tracking-wider uppercase text-zinc-400 mb-2">
        {label}{required && <span className="text-rebel-red ml-1">*</span>}
        {hint && <span className="text-zinc-600 normal-case font-normal tracking-normal ml-2">- {hint}</span>}
      </label>
      {children}
    </div>
  );
}

function RadioCard({
  name, value, label, checked, onChange,
}: { name: string; value: string; label: string; checked: boolean; onChange: () => void }) {
  return (
    <label
      className={`flex items-center gap-2 rounded-md border px-3 py-2.5 cursor-pointer transition-colors ${
        checked ? "border-rebel-red/60 bg-red-950/30 text-white" : "border-zinc-800 hover:border-zinc-700 text-zinc-300"
      }`}
    >
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange} className="accent-rebel-red" />
      <span className="text-sm">{label}</span>
    </label>
  );
}
