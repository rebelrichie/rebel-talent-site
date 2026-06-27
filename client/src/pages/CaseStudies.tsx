import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import GlowCard from "@/components/GlowCard";
import TypedText from "@/components/TypedText";

const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Rebel Talent Case Studies",
  "description": "Real results from fractional recruiting engagements with startups and defense contractors.",
  "url": "https://rebeltalentsystems.com/case-studies",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Article",
        "headline": "EarthDaily Federal: $294K+ Agency Fees Avoided, 9 Placements",
        "description": "Defense-sector geospatial intelligence firm. Zero recruiting infrastructure. Built ATS, SOPs, sourcing playbooks, and placed 9 roles (6 FTE + 3 contracts) with ~335% ROI on a fractional recruiting retainer. 470%+ projected at full pipeline close.",
        "url": "https://rebeltalentsystems.com/case-studies",
        "author": { "@type": "Person", "name": "Richie Lampani" },
        "publisher": { "@type": "Organization", "name": "Rebel Talent" }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Article",
        "headline": "Kalibri Labs: 360 Applications. 2 Finalists. Zero Were Applicants.",
        "description": "Single ML Engineer search. 360 applications in 24 hours, 25 headhunted, 2 referrals. Every finalist came from sourcing and referrals. Zero applicants made the final round. The AI resume problem, quantified.",
        "url": "https://rebeltalentsystems.com/case-studies",
        "author": { "@type": "Person", "name": "Richie Lampani" },
        "publisher": { "@type": "Organization", "name": "Rebel Talent" }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Article",
        "headline": "Legal Managed Services: 18 Hires in 14 Months with 90% Retention",
        "description": "Built complete GTM talent infrastructure from zero, delivering 18 hires over 14 months with 90% retention rate. Fully automated pipeline continues generating qualified candidates.",
        "url": "https://rebeltalentsystems.com/case-studies",
        "author": { "@type": "Person", "name": "Richie Lampani" },
        "publisher": { "@type": "Organization", "name": "Rebel Talent" }
      }
    }
  ]
};

export default function CaseStudies() {
  return (
    <PageLayout>
      <PageSEO
        title="Startup & Defense Recruiting Case Studies | Rebel Talent"
        description="Real results from real engagements. EarthDaily Federal: $294K+ saved, ~335% ROI delivered (470%+ projected). Kalibri Labs: 34 days to signed offer against 360+ AI-polished apps. Legal: 18 hires, 90% retention."
        path="/case-studies"
        ogTitle="Startup & Defense Recruiting Case Studies | Rebel Talent"
        ogDescription="Proof over promises. EarthDaily: $294K+ saved across 9 placements. Kalibri Labs: 34 days to signed offer, zero applicants from 360+ inbound made finals. Legal: 18 hires, 90% retention."
        ogImage="og-case-studies.png"
        schemas={[caseStudySchema]}
        breadcrumbs={[
          { name: "Home", item: "https://rebeltalentsystems.com/" },
          { name: "Case Studies", item: "https://rebeltalentsystems.com/case-studies" },
        ]}
      />
      {/* HERO, Hunt Club / Riviera register */}
      <section data-testid="section-hero" className="relative overflow-hidden bg-rebel-space">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 0% 0%, rgba(220,38,38,0.08) 0%, transparent 55%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-16 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 z-10">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-zinc-500 mb-6 sm:mb-10">
            Proof in the metrics
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.035em] text-white leading-[1.02] max-w-4xl" data-testid="heading-case-studies">
            Real engagements.<br />
            <span className="text-rebel-red">Quantifiable impact.</span>
          </h1>
          <p className="mt-6 sm:mt-8 text-base sm:text-xl text-zinc-400 max-w-2xl leading-[1.55]">
            $294K saved. 470%+ projected ROI. Zero agency fees. No vague claims, only metrics that map to dollars.
          </p>
        </div>
      </section>

      <section className="bg-rebel-space pt-4 pb-16 sm:pb-24 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">

          <div className="mb-20" data-testid="case-study-earthdaily">
            <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-3">
              CASE STUDY 01 &nbsp;|&nbsp; FRACTIONAL RECRUITING
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-3">
              EarthDaily Federal
            </h2>
            <p className="text-zinc-400 text-base mb-2">
              Geospatial intelligence company operating in the federal/defense space. Zero recruiting infrastructure. No ATS. No documented process. Every hire was founder-led or agency-dependent.
            </p>
            <p className="text-zinc-500 text-sm mb-8">
              What a monthly retainer engagement actually produces.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { value: "$294K+", label: "FEES AVOIDED", sub: "9 placements, no agency" },
                { value: "~335%", label: "ROI", sub: "~$88K invested to date" },
                { value: "8", label: "ROLES PLACED", sub: "5 more in pipeline" },
              ].map((stat) => (
                <div key={stat.label} className="border border-zinc-800 bg-zinc-900/30 p-2 sm:p-5 text-center">
                  <AnimatedCounter value={stat.value} className="font-display text-lg sm:text-2xl md:text-3xl font-bold text-rebel-red mb-1" />
                  <div className="text-zinc-500 text-xs tracking-widest uppercase">{stat.label}</div>
                  <div className="text-zinc-600 text-xs mt-1">{stat.sub}</div>
                </div>
              ))}
            </div>

            <ScrollReveal variant="fade-up">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-zinc-800 bg-zinc-900/30 p-6">
                <h3 className="font-display text-base font-bold text-rebel-red uppercase mb-4">The Situation</h3>
                <ul className="space-y-2">
                  {[
                    "Zero recruiting infrastructure: no ATS, no process, no playbooks",
                    "Leadership running hiring on instinct and available time",
                    "Slow cycles, inconsistent candidate experiences",
                    "Full dependence on expensive agency relationships",
                    "No institutional knowledge retained from agency placements",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-zinc-400">
                      <span className="text-rebel-red font-mono text-xs mt-0.5">&gt;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-zinc-800 bg-zinc-900/30 p-6">
                <h3 className="font-display text-base font-bold text-rebel-red uppercase mb-4">What Was Built</h3>
                <ul className="space-y-2">
                  {[
                    "Custom ATS with clearance tracking, AI-powered scoring, and fraud detection",
                    "Full Recruiting OS with SOPs covering every hiring stage",
                    "Sourcing playbooks built by role type and function",
                    "Interview frameworks and scorecards for hiring managers",
                    "Active candidate pipelines maintained across all open roles",
                    "Hiring process documentation aligned with leadership",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-zinc-400">
                      <span className="text-rebel-red font-mono text-xs mt-0.5">&gt;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={100}>
            <div className="border border-zinc-800 bg-zinc-900/30 p-6 mb-8">
              <h3 className="font-display text-base font-bold text-rebel-red uppercase mb-4">Roles Placed</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-700">
                      <th className="text-left text-zinc-500 font-mono text-xs tracking-wider uppercase py-2 pr-4">Role</th>
                      <th className="text-left text-zinc-500 font-mono text-xs tracking-wider uppercase py-2 pr-4">Type</th>
                      <th className="text-right text-zinc-500 font-mono text-xs tracking-wider uppercase py-2">Agency Fee Avoided</th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-400">
                    {[
                      { role: "VP of Growth", type: "FTE", fee: "~$55,000" },
                      { role: "Director of Strategic Partnerships", type: "FTE", fee: "~$50,000" },
                      { role: "AI Engineer", type: "FTE", fee: "~$43,000" },
                      { role: "Backend Engineer", type: "FTE", fee: "~$41,000" },
                      { role: "Controller", type: "FTE", fee: "~$31,000" },
                      { role: "IT Manager", type: "FTE", fee: "~$26,000" },
                      { role: "Contract 1", type: "Contract", fee: "~$16,000" },
                      { role: "Contract 2", type: "Contract", fee: "~$16,000" },
                      { role: "Contract 3", type: "Contract", fee: "~$16,000" },
                    ].map((r) => (
                      <tr key={r.role} className="border-b border-zinc-800/50">
                        <td className="py-2 pr-4 text-zinc-300">{r.role}</td>
                        <td className="py-2 pr-4">
                          <span className="font-mono text-xs tracking-wider text-zinc-500">{r.type}</span>
                        </td>
                        <td className="py-2 text-right font-mono text-rebel-red">{r.fee}</td>
                      </tr>
                    ))}
                    <tr className="border-t border-zinc-700">
                      <td colSpan={2} className="py-2 pr-4 text-zinc-300 font-bold">TOTAL AVOIDED (9 placements)</td>
                      <td className="py-2 text-right font-mono text-rebel-red font-bold">$294,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={200}>
            <div className="border border-zinc-800 bg-zinc-900/30 p-6 mb-8">
              <h3 className="font-display text-base font-bold text-rebel-red uppercase mb-4">What this engagement actually delivered</h3>
              <ul className="space-y-2.5 text-sm">
                {[
                  { label: "Cost structure", value: "Flat monthly retainer, no success fees, no surprise invoices when each hire closed." },
                  { label: "Institutional knowledge", value: "Process documentation, sourcing playbooks, and pipeline history stayed inside EDF when the engagement scaled down." },
                  { label: "Process ownership", value: "Custom ATS, scorecards, and SOPs handed off to the internal team, owned, exportable, and auditable." },
                  { label: "Candidate experience", value: "Standardized across all 9 placements: same screening rigor, same interview frameworks, same communication cadence." },
                  { label: "Infrastructure built", value: "Custom ATS with clearance tracking, sourcing playbooks by role type, interview scorecards, and reporting dashboards." },
                  { label: "What EDF owns at the end", value: "A working recruiting function, not just a stack of hires." },
                ].map((row) => (
                  <li key={row.label} className="flex gap-3 border-b border-zinc-800/50 pb-2.5">
                    <div className="shrink-0 w-44 sm:w-52 text-zinc-300 font-medium text-xs uppercase tracking-wider">{row.label}</div>
                    <div className="flex-1 text-zinc-400 text-xs leading-relaxed">{row.value}</div>
                  </li>
                ))}
              </ul>
            </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-left">
            <div className="border border-rebel-red/20 bg-rebel-red/5 p-6">
              <h4 className="font-display text-base font-bold text-rebel-red uppercase mb-4">The Math</h4>

              {/* Confirmed vs Projected table */}
              <div className="grid grid-cols-2 gap-px bg-zinc-700/40 mb-5">
                <div className="bg-[#0d0d14] px-4 py-3">
                  <div className="text-zinc-500 text-[10px] font-mono tracking-widest uppercase mb-2">Confirmed Fees Avoided</div>
                  <div className="text-white font-display text-xl font-bold mb-0.5">$294K+</div>
                  <div className="text-zinc-500 text-xs">9 placements closed, no agency</div>
                </div>
                <div className="bg-[#0d0d14] px-4 py-3">
                  <div className="text-zinc-500 text-[10px] font-mono tracking-widest uppercase mb-2">Projected at Full Pipeline Close</div>
                  <div className="text-rebel-red font-display text-xl font-bold mb-0.5">$415K+</div>
                  <div className="text-zinc-500 text-xs">5 additional roles at standard agency rates</div>
                </div>
                <div className="bg-[#0d0d14] px-4 py-3">
                  <div className="text-zinc-500 text-[10px] font-mono tracking-widest uppercase mb-2">Current ROI</div>
                  <div className="text-white font-display text-xl font-bold mb-0.5">~335%</div>
                  <div className="text-zinc-500 text-xs">~$88K invested over 8 months</div>
                </div>
                <div className="bg-[#0d0d14] px-4 py-3">
                  <div className="text-zinc-500 text-[10px] font-mono tracking-widest uppercase mb-2">Projected ROI</div>
                  <div className="text-rebel-red font-display text-xl font-bold mb-0.5">470%+</div>
                  <div className="text-zinc-500 text-xs">Before infrastructure value is counted</div>
                </div>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                $294K+ in fees avoided across 9 placements. A custom ATS with clearance tracking, sourcing playbooks by role type, structured interview scorecards, and a documented hiring process, all handed off and owned by EDF when the engagement scaled down.
              </p>
              <p className="text-zinc-300 text-sm leading-relaxed">
                <span className="text-rebel-red font-mono font-bold">Every future hire EDF makes runs on infrastructure I built. That compounds.</span>
              </p>
            </div>
            </ScrollReveal>
          </div>

          {/* ── KALIBRI LABS ── */}
          <div className="border-t border-zinc-800 pt-16 mb-16" data-testid="case-study-kalibri">
            <ScrollReveal variant="fade-up">
            <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-3">
              CASE STUDY 02 &nbsp;|&nbsp; RETAINED SEARCH
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-3">
              Kalibri Labs
            </h2>
            <p className="text-zinc-400 text-base mb-2">
              360 applications in 24 hours. Every company thinks that's good news. It isn't. It means your job post attracted a flood of AI-optimized applications, polished, technically fluent, confident on paper. It means your hiring team just got a second job. And it means the person you actually need probably isn't in that pile.
            </p>
            <p className="text-zinc-500 text-sm mb-8">
              Retained search, 50% down / 50% on placement. What this engagement proved about why posting and waiting doesn't work anymore.
            </p>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { value: "360+", label: "Applications", sub: "First 24 hours" },
                { value: "0", label: "Applicants in Finals", sub: "Zero made the cut" },
                { value: "~50%", label: "Cost vs. Agency", sub: "Saved on this search" },
                { value: "<30", label: "Days Start to Finals", sub: "Zero ramp time" },
              ].map((stat) => (
                <div key={stat.label} className="border border-zinc-800 bg-zinc-900/30 p-2 sm:p-5 text-center">
                  <AnimatedCounter value={stat.value} className="font-display text-lg sm:text-2xl md:text-3xl font-bold text-rebel-red mb-1" />
                  <div className="text-zinc-500 text-xs tracking-widest uppercase">{stat.label}</div>
                  <div className="text-zinc-600 text-xs mt-1">{stat.sub}</div>
                </div>
              ))}
            </div>

            <ScrollReveal variant="fade-up">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-zinc-800 bg-zinc-900/30 p-6">
                <h3 className="font-display text-base font-bold text-rebel-red uppercase mb-4">The Situation</h3>
                <ul className="space-y-2">
                  {[
                    "Must-fill ML Engineer role, no margin for a slow search",
                    "Posted to ATS day one, 360+ applications within 24 hours",
                    "No existing sourcing infrastructure for technical roles",
                    "First engagement with this client: one intro call, then execution",
                    "Operated as embedded agent: company email, Slack, their ATS",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-zinc-400">
                      <span className="text-rebel-red font-mono text-xs mt-0.5">&gt;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-zinc-800 bg-zinc-900/30 p-6">
                <h3 className="font-display text-base font-bold text-rebel-red uppercase mb-4">What Was Done</h3>
                <ul className="space-y-2">
                  {[
                    "Reviewed all 360+ applications manually, one by one",
                    "Pulled 25 qualified applicants for initial screening",
                    "Headhunted 25 additional candidates independently",
                    "Surfaced 2 internal referrals and ran them through the same process",
                    "AI-assisted screening at volume, human judgment on every decision",
                    "Ran structured technical screens to separate signal from resume polish",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-zinc-400">
                      <span className="text-rebel-red font-mono text-xs mt-0.5">&gt;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={100}>
            <div className="border border-zinc-800 bg-zinc-900/30 p-6 mb-8">
              <h3 className="font-display text-base font-bold text-rebel-red uppercase mb-5">How the Pipeline Actually Broke Down</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-zinc-500 text-[10px] font-mono tracking-widest uppercase mb-3">Inbound (360 Applications)</div>
                  <div className="space-y-2 text-sm">
                    {[
                      { label: "Reviewed", value: "360", note: "Every single one" },
                      { label: "Pulled for screening", value: "25", note: "~7% pass rate" },
                      { label: "Moved to consideration", value: "5", note: "" },
                      { label: "Flagged as suspicious", value: "12", note: "Of remaining 20" },
                      { label: "Made 1st round", value: "0", note: "" },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center justify-between gap-4 py-1.5 border-b border-zinc-800/50">
                        <span className="text-zinc-400">{row.label}</span>
                        <div className="flex items-center gap-2">
                          {row.note && <span className="text-zinc-600 text-xs">{row.note}</span>}
                          <span className="font-mono text-rebel-red font-bold text-sm w-6 text-right">{row.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-zinc-500 text-[10px] font-mono tracking-widest uppercase mb-3">Headhunted (25 Candidates)</div>
                  <div className="space-y-2 text-sm">
                    {[
                      { label: "Sourced & contacted", value: "25", note: "" },
                      { label: "Moved to consideration", value: "4", note: "16% rate" },
                      { label: "Made 1st round", value: "2", note: "" },
                      { label: "Made panel", value: "1", note: "" },
                      { label: "Still in process", value: "1", note: "Decision pending" },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center justify-between gap-4 py-1.5 border-b border-zinc-800/50">
                        <span className="text-zinc-400">{row.label}</span>
                        <div className="flex items-center gap-2">
                          {row.note && <span className="text-zinc-600 text-xs">{row.note}</span>}
                          <span className="font-mono text-rebel-red font-bold text-sm w-6 text-right">{row.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-zinc-500 text-[10px] font-mono tracking-widest uppercase mb-3">Referrals (2 Candidates)</div>
                  <div className="space-y-2 text-sm">
                    {[
                      { label: "Internal referrals", value: "2", note: "100% rate" },
                      { label: "Moved to consideration", value: "2", note: "" },
                      { label: "Made 1st round", value: "2", note: "" },
                      { label: "Made panel", value: "1", note: "" },
                      { label: "Still in process", value: "1", note: "Decision pending" },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center justify-between gap-4 py-1.5 border-b border-zinc-800/50">
                        <span className="text-zinc-400">{row.label}</span>
                        <div className="flex items-center gap-2">
                          {row.note && <span className="text-zinc-600 text-xs">{row.note}</span>}
                          <span className="font-mono text-rebel-red font-bold text-sm w-6 text-right">{row.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-left">
            <div className="border border-rebel-red/20 bg-rebel-red/5 p-6 mb-8">
              <h4 className="font-display text-base font-bold text-rebel-red uppercase mb-4">The Market Is Broken. Here's What That Looks Like.</h4>
              <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                Sixty percent of the applicants we screened showed signs of misrepresentation. Near-perfect resumes. Matching LinkedIn profiles. Skills listed with complete confidence. When asked a technical question about something they claimed to know, they couldn't answer it. Not one made the first round.
              </p>
              <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                The two people in finals weren't in the original 360. They came from me picking up the phone and going to find them, and from inside the organization itself. Both crushed every round. The decision is genuinely close. That doesn't happen if you're waiting on inbound.
              </p>
              <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                This isn't a data point. This is the market. AI didn't just change how people write resumes, it changed what "qualified" looks like on paper. And now you need someone who knows the difference between a real signal and a very good imitation of one.
              </p>
              <p className="text-rebel-red text-sm font-semibold leading-relaxed">
                The inbound funnel isn't dead. I still read every single one of those 360 applications. But you need someone who knows what they're looking at, built the infrastructure to process volume at speed, and can go source the real candidates in parallel. That's the job now.
              </p>
            </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={100}>
            <div className="border border-zinc-800 bg-zinc-900/30 p-6">
              <h3 className="font-display text-base font-bold text-rebel-red uppercase mb-4">What Embedded Actually Means</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                First engagement with this client. One meeting. Notes taken, job posted same day. Company email, Slack access, full run of their ATS. No handholding, no ramp period, no account manager in between. Just execution from inside their operation, the same day we shook hands.
              </p>
              <div className="grid sm:grid-cols-4 gap-4">
                {[
                  { label: "Meetings before execution", value: "1" },
                  { label: "Days to first pipeline", value: "1" },
                  { label: "Cost vs. contingency agency", value: "~50% less" },
                  { label: "Structure", value: "50/50 Retained" },
                ].map((s) => (
                  <div key={s.label} className="bg-zinc-900 border border-zinc-800 p-4 text-center">
                    <div className="font-display text-xl font-bold text-rebel-red mb-1">{s.value}</div>
                    <div className="text-zinc-500 text-xs uppercase tracking-wider">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            </ScrollReveal>
          </div>

          <div className="border-t border-zinc-800 pt-16 mb-16" data-testid="case-study-legal">
            <ScrollReveal variant="fade-up">
            <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-3">
              CASE STUDY 03
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-3">
              Legal Managed Services: Building a Sales Hiring Machine
            </h2>
            <p className="text-zinc-400 text-base mb-8">
              Built a complete GTM talent infrastructure from zero, delivering 18 hires over 14 months with 90% retention.
            </p>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {[
                { value: "18", label: "Hires in 14 Months" },
                { value: "90%", label: "Retention Rate" },
                { value: "100%", label: "Automated Pipeline" },
              ].map((stat) => (
                <div key={stat.label} className="border border-zinc-800 bg-zinc-900/30 p-2 sm:p-5 text-center">
                  <AnimatedCounter value={stat.value} className="font-display text-lg sm:text-2xl md:text-3xl font-bold text-rebel-red mb-1" />
                  <div className="text-zinc-500 text-xs tracking-widest uppercase">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-zinc-800 bg-zinc-900/30 p-6">
                <h3 className="font-display text-base font-bold text-rebel-red uppercase mb-4">The Problem</h3>
                <ul className="space-y-2">
                  {[
                    "No structured hiring process for GTM roles",
                    "High turnover from cultural misalignment",
                    "Inconsistent candidate evaluation across hiring managers",
                    "Zero pipeline visibility or hiring metrics",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-zinc-400">
                      <span className="text-rebel-red font-mono text-xs mt-0.5">&gt;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-zinc-800 bg-zinc-900/30 p-6">
                <h3 className="font-display text-base font-bold text-rebel-red uppercase mb-4">The Solution</h3>
                <ul className="space-y-2">
                  {[
                    "Built ATS infrastructure and automated workflows",
                    "Created structured interview frameworks for sales roles",
                    "Designed cultural-fit assessment criteria",
                    "Implemented pipeline analytics and reporting dashboards",
                    "Trained internal team on sustained execution",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-zinc-400">
                      <span className="text-rebel-red font-mono text-xs mt-0.5">&gt;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border border-rebel-red/20 bg-rebel-red/5 p-6">
              <h4 className="font-display text-base font-bold text-rebel-red uppercase mb-3">The Impact</h4>
              <p className="text-zinc-300 text-sm leading-relaxed">
                18 successful hires over 14 months with a 90% retention rate. The fully automated pipeline continued generating qualified candidates after the engagement ended. Internal team was trained and equipped to maintain the system independently.
              </p>
            </div>
          </div>

          <ScrollReveal variant="scale">
          <div className="border border-zinc-800 bg-gradient-to-r from-rebel-red/10 to-transparent p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-white uppercase tracking-tight mb-4">
              See If We Fit
            </h2>
            <p className="text-zinc-400 text-sm mb-6 max-w-lg mx-auto">
              ROI that agencies envy. Same approach, custom execution. Let's talk about what your recruiting function needs.
            </p>
            <a href="/strategy-call" target="_blank" rel="noopener noreferrer" data-testid="button-casestudies-cta" className="block sm:inline-block">
              <Button className="font-display tracking-wider uppercase text-sm w-full sm:w-auto">
                Book Your Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
