import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";

export default function CaseStudies() {
  return (
    <PageLayout>
      <section className="space-hero py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16 pb-10 border-b border-rebel-red/30">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">
              RESULTS
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-bold text-white uppercase tracking-tight mb-4" data-testid="heading-case-studies">
              Case Studies
            </h1>
            <p className="text-zinc-400 text-base max-w-2xl mx-auto">
              Real engagements. Measurable outcomes. Infrastructure that lasts beyond any single hire.
            </p>
          </div>

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
                { value: "~$178K", label: "FEES AVOIDED", sub: "6 roles, no agency" },
                { value: "~350%", label: "ROI", sub: "growing as roles close" },
                { value: "6", label: "ROLES PLACED", sub: "3 more in pipeline" },
              ].map((stat) => (
                <div key={stat.label} className="border border-zinc-800 bg-zinc-900/30 p-5 text-center">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-rebel-red mb-1">{stat.value}</div>
                  <div className="text-zinc-500 text-xs tracking-widest uppercase">{stat.label}</div>
                  <div className="text-zinc-600 text-xs mt-1">{stat.sub}</div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-zinc-800 bg-zinc-900/30 p-6">
                <h3 className="font-display text-base font-bold text-rebel-red uppercase mb-4">The Situation</h3>
                <ul className="space-y-2">
                  {[
                    "Zero recruiting infrastructure — no ATS, no process, no playbooks",
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
                      { role: "AI Engineer", type: "FTE", fee: "~$30,800" },
                      { role: "Backend Engineer", type: "FTE", fee: "~$28,600" },
                      { role: "IT Manager", type: "FTE", fee: "~$26,400" },
                      { role: "Controller", type: "FTE", fee: "~$30,800" },
                      { role: "Backend Contractor 1", type: "Contract", fee: "~$13,500" },
                      { role: "Backend Contractor 2", type: "Contract", fee: "~$13,500" },
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
                      <td colSpan={2} className="py-2 pr-4 text-zinc-300 font-bold">TOTAL AVOIDED (6 roles closed)</td>
                      <td className="py-2 text-right font-mono text-rebel-red font-bold">~$143,600</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-zinc-600 text-xs mt-3">+ $72-135K projected on 3 sales roles in active evaluation</p>
              </div>
            </div>

            <div className="border border-zinc-800 bg-zinc-900/30 p-6 mb-8">
              <h3 className="font-display text-base font-bold text-rebel-red uppercase mb-4">Agency vs. Fractional</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-700">
                      <th className="text-left text-zinc-500 font-mono text-xs tracking-wider uppercase py-2 pr-4"></th>
                      <th className="text-left text-zinc-500 font-mono text-xs tracking-wider uppercase py-2 pr-4">Agency / Contingent</th>
                      <th className="text-left text-zinc-500 font-mono text-xs tracking-wider uppercase py-2">Fractional (Rebel Talent)</th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-400">
                    {[
                      { label: "Cost per hire", agency: "20-25% of salary", fractional: "Flat monthly retainer" },
                      { label: "Institutional knowledge", agency: "Leaves with the recruiter", fractional: "Stays with your company" },
                      { label: "Process ownership", agency: "Theirs", fractional: "Yours" },
                      { label: "Candidate experience", agency: "Inconsistent", fractional: "Standardized across roles" },
                      { label: "Infrastructure built", agency: "None", fractional: "ATS, SOPs, pipelines" },
                      { label: "What you own at the end", agency: "A hire", fractional: "A recruiting function" },
                    ].map((row) => (
                      <tr key={row.label} className="border-b border-zinc-800/50">
                        <td className="py-2 pr-4 text-zinc-300 font-medium text-xs">{row.label}</td>
                        <td className="py-2 pr-4 text-zinc-500 text-xs">{row.agency}</td>
                        <td className="py-2 text-zinc-300 text-xs">{row.fractional}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="border border-rebel-red/20 bg-rebel-red/5 p-6">
              <h4 className="font-display text-base font-bold text-rebel-red uppercase mb-3">The Math</h4>
              <p className="text-zinc-300 text-sm leading-relaxed mb-3">
                Total investment: $62,400 across 4.5 months. Agency fees avoided on six closed roles: ~$143,600. That's a ~350% return before the three sales roles close.
              </p>
              <p className="text-zinc-300 text-sm leading-relaxed mb-3">
                When sales roles close at standard 20-25% on OTEs in the $120-180K range, total avoided fees reach $215-278K. Infrastructure value (ATS, SOPs, pipelines) adds another $15-25K that compounds over every future hire.
              </p>
              <p className="text-zinc-300 text-sm leading-relaxed">
                <span className="text-rebel-red font-mono font-bold">Projected full-engagement ROI: 400-500%+</span>
              </p>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-16 mb-16" data-testid="case-study-legal">
            <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-3">
              CASE STUDY 02
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-3">
              Legal Managed Services: Building a Sales Hiring Machine
            </h2>
            <p className="text-zinc-400 text-base mb-8">
              Built a complete GTM talent infrastructure from zero, delivering 18 hires over 14 months with 90% retention.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {[
                { value: "18", label: "Hires in 14 Months" },
                { value: "90%", label: "Retention Rate" },
                { value: "100%", label: "Automated Pipeline" },
              ].map((stat) => (
                <div key={stat.label} className="border border-zinc-800 bg-zinc-900/30 p-5 text-center">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-rebel-red mb-1">{stat.value}</div>
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

          <div className="border border-zinc-800 bg-gradient-to-r from-rebel-red/10 to-transparent p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-white uppercase tracking-tight mb-4">
              Your Company Could Be Next
            </h2>
            <p className="text-zinc-400 text-sm mb-6 max-w-lg mx-auto">
              Same approach. Custom execution. Measurable results. Let's talk about what your recruiting function needs.
            </p>
            <a href="https://calendly.com/richielam" target="_blank" rel="noopener noreferrer" data-testid="button-casestudies-cta">
              <Button className="font-display tracking-wider uppercase text-sm">
                Book Your Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
