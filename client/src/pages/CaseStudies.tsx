import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";

export default function CaseStudies() {
  return (
    <PageLayout>
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
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
              CASE STUDY 01
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-3">
              EarthDaily Federal: Defense Tech & Geospatial Intelligence
            </h2>
            <p className="text-zinc-400 text-base mb-8">
              Built a complete recruiting infrastructure from scratch, closed critical hires in under 30 days, and achieved over 200% ROI in 90 days.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {[
                { value: "200%+", label: "ROI in 90 Days" },
                { value: "<30", label: "Days to Hire" },
                { value: "100%", label: "Owned Infrastructure" },
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
                    "Zero recruiting infrastructure -- no ATS, no process, no playbooks",
                    "Critical cleared roles sitting open for months",
                    "Agency dependency bleeding budget with poor-fit candidates",
                    "Hiring managers doing their own sourcing with no strategy",
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
                    "Built complete ATS from scratch (Greenhouse implementation)",
                    "Created structured interview frameworks and scorecards",
                    "Developed cleared-talent sourcing playbooks",
                    "Trained hiring managers on structured interviewing",
                    "Built pipeline dashboards and reporting",
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
                Within 90 days, the company had a fully operational recruiting function. Critical cleared roles that had been open for months were filled in under 30 days. The infrastructure continued generating results long after the engagement ended. Agency dependency dropped to zero, saving tens of thousands per quarter.
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
