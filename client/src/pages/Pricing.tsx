// Safe addition — Transparent Pricing page
import { ArrowRight, Shield, Eye, Clock, FileText, Bot, Database } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";
import GlowCard from "@/components/GlowCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import CapacityBadge from "@/components/CapacityBadge";

// Safe addition — haptic feedback for PWA CTA taps
function hapticTap() {
  if (navigator.vibrate) navigator.vibrate(15);
}


const pricingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does the first 30 days look like?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sourcing starts within 24 hours of kickoff. Day one: meet the team, get the roles, start recruiting. The infrastructure — ATS, interview plans, scorecards, process docs — gets built in parallel while candidates are already flowing. By day 30, you have a full pipeline, interviews happening, and a recruiting machine that didn't exist a month ago."
      }
    },
    {
      "@type": "Question",
      "name": "How do you track hours?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every hour is logged in Rebel Command with a description of what was done. No rounding up, no admin time padding. If I work 22.5 hours, you see 22.5 hours. Weekly reports break it down by activity category."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a contract?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — a straightforward SOW with scope, deliverables, timeline, and rates. No 12-month lock-ins. Fractional engagements are typically month-to-month after an initial 90-day commitment. Project engagements have defined milestones. Contract recruiters can scale with 2 weeks notice."
      }
    },
    {
      "@type": "Question",
      "name": "Why no contingency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Because contingency breaks incentives. A contingency recruiter gets paid $30K+ only when someone gets hired — so they're incentivized to push candidates through fast, oversell fits, and move on. I'm incentivized to build systems that make your hiring permanently better."
      }
    }
  ]
};

export default function Pricing() {
  return (
    <PageLayout>
      <PageSEO
        title="Transparent Pricing & Engagement Models | Rebel Talent Systems"
        description="No contingency. No success fees. Rebel Talent works on hourly and project-based models only. Fractional Head of Talent from $12K/mo, Critical Hire Execution from $8K, Contract Recruiters from $90/hr."
        path="/pricing"
        ogTitle="Transparent Pricing | Rebel Talent Systems"
        ogDescription="No contingency fees. No hidden costs. Hourly and project-based recruiting that leaves you with systems you own forever. See exact pricing."
        ogImage="og-services.png"
        schemas={[pricingFaqSchema]}
        breadcrumbs={[
          { name: "Home", item: "https://rebeltalentsystems.com/" },
          { name: "Pricing", item: "https://rebeltalentsystems.com/pricing" },
        ]}
      />

      {/* Hero */}
      <section className="space-hero py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <ScrollReveal variant="fade-up" immediate>
            <div className="text-center mb-12">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">
                FULL TRANSPARENCY
              </div>
              <h1 className="font-display text-3xl sm:text-5xl font-bold text-white uppercase tracking-tight mb-5">
                No Contingency. No Success Fees.<br />No Games.
              </h1>
              <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-4">
                You pay for the actual time, expertise, and infrastructure I deliver. Every hour is logged. Every deliverable is documented. Every dollar is accounted for in your dashboard — in real time.
              </p>
              <p className="text-zinc-500 text-sm max-w-xl mx-auto leading-relaxed mb-6">
                Contingency recruiting is broken by design. When a recruiter only gets paid on placement, their incentive is to fill the seat fast — not to build the systems that make your next 50 hires easier. I'm building a machine that survives after I leave. That requires alignment, not a bounty.
              </p>
              <div className="flex justify-center">
                <CapacityBadge />
              </div>
            </div>
          </ScrollReveal>

          {/* Proof strip */}
          <ScrollReveal variant="fade-up" delay={200}>
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
              {[
                { value: "$229K", label: "Agency Fees Avoided" },
                { value: "285%", label: "ROI Delivered" },
                { value: "<21", label: "Days Avg. Time to Hire" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <AnimatedCounter value={s.value} className="font-display text-2xl sm:text-3xl font-bold text-rebel-red" />
                  <div className="text-zinc-500 text-xs uppercase tracking-wide mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-zinc-600 text-xs font-mono tracking-wider uppercase">
              EarthDaily Federal — 5 FTE + 2 contractors in 5 months
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Three engagement models */}
      <section className="py-16 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-10">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">
                CHOOSE YOUR MODEL
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                Three Ways to Work Together
              </h2>
            </div>
          </ScrollReveal>

          <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-x-visible">
            {/* Fractional — MOST POPULAR */}
            <ScrollReveal variant="fade-up" delay={0}>
              <GlowCard className="border border-rebel-red/50 bg-rebel-red/5 p-8 snap-start shrink-0 w-[82vw] md:w-auto h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-rebel-red px-3 py-1 font-mono text-white text-[10px] tracking-widest uppercase">
                  MOST POPULAR
                </div>
                <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-3">OPTION 01</div>
                <h3 className="font-display text-xl font-bold text-white uppercase mb-2">Fractional Head of Talent</h3>
                <p className="text-rebel-red font-mono text-sm mb-1">$12K – $30K/month</p>
                <p className="text-zinc-500 font-mono text-xs mb-4">10–40 hours/month depending on scope</p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  I embed into your company as your Head of Talent. I'm in your Slack, your ATS, your hiring manager 1:1s, your candidate calls. Not consulting from the sidelines.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Strategic hiring roadmap & prioritization",
                    "End-to-end recruiting execution",
                    "ATS setup, optimization & migration",
                    "Interview process design & training",
                    "Hiring manager coaching",
                    "Full access to Rebel Command platform",
                    "Weekly reports with hours, pipeline & ROI",
                    "Documented playbooks you own forever",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                      <ArrowRight className="w-3 h-3 text-rebel-red mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-zinc-600 text-xs leading-relaxed">
                  Best for: Series A–C startups scaling 5–20+ hires, defense contractors building cleared talent pipelines, companies replacing agency dependency.
                </p>
              </GlowCard>
            </ScrollReveal>

            {/* Critical Hire */}
            <ScrollReveal variant="fade-up" delay={150}>
              <GlowCard className="border border-zinc-800 bg-zinc-900/50 p-8 snap-start shrink-0 w-[82vw] md:w-auto h-full">
                <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-3">OPTION 02</div>
                <h3 className="font-display text-xl font-bold text-white uppercase mb-2">Critical Hire Execution</h3>
                <p className="text-rebel-red font-mono text-sm mb-1">$8K – $25K+ per search</p>
                <p className="text-zinc-500 font-mono text-xs mb-4">Scoped project with defined milestones</p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Surgical execution for must-fill roles. I scope the search, define milestones, execute, and hand off a documented process when it's done. You know the cost before we start.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Defined scope, timeline & milestones upfront",
                    "Full sourcing, screening & presentation",
                    "Interview coordination & offer support",
                    "Documented process handoff",
                    "Pipeline visibility via Rebel Command",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                      <ArrowRight className="w-3 h-3 text-rebel-red mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-zinc-600 text-xs leading-relaxed">
                  Best for: Executive searches, cleared roles (Secret, TS, TS/SCI), specialized technical talent, Forward Deployed Engineers, AI/ML.
                </p>
                <p className="text-zinc-600 text-xs mt-2 leading-relaxed">
                  Pricing factors: Role complexity, clearance requirements, seniority level, timeline urgency.
                </p>
              </GlowCard>
            </ScrollReveal>

            {/* Contract Recruiters */}
            <ScrollReveal variant="fade-up" delay={300}>
              <GlowCard className="border border-zinc-800 bg-zinc-900/50 p-8 snap-start shrink-0 w-[82vw] md:w-auto h-full">
                <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-3">OPTION 03</div>
                <h3 className="font-display text-xl font-bold text-white uppercase mb-2">Rebel Contract Recruiters</h3>
                <p className="text-rebel-red font-mono text-sm mb-1">$90 – $300+/hour</p>
                <p className="text-zinc-500 font-mono text-xs mb-4">Scale up or down — no long-term lock-in</p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Vetted recruiters deployed under Rebel Talent standards. Every hour tracked and visible in your dashboard. No mystery invoices.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Recruiters sourced & vetted by me personally",
                    "Execute to documented Rebel playbooks",
                    "Fully briefed on your roles & culture",
                    "Time logs visible in Rebel Command",
                    "Scale from 10 to 40+ hours/week",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                      <ArrowRight className="w-3 h-3 text-rebel-red mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-zinc-600 text-xs leading-relaxed">
                  Best for: Surge hiring, backfilling while you hire full-time, companies that need execution capacity without full engagement overhead.
                </p>
                <p className="text-zinc-600 text-xs mt-2 leading-relaxed">
                  Rate factors: Recruiter seniority, clearance level, technical complexity, weekly commitment.
                </p>
              </GlowCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-8">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">THE REAL MATH</div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                Agency vs. Retained vs. Rebel
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={200}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="text-left py-3 px-4 text-zinc-500 font-mono text-xs tracking-wider uppercase border-b border-zinc-800" />
                    <th className="text-center py-3 px-4 text-zinc-500 font-mono text-xs tracking-wider uppercase border-b border-zinc-800">Contingent Agency</th>
                    <th className="text-center py-3 px-4 text-zinc-500 font-mono text-xs tracking-wider uppercase border-b border-zinc-800">Retained Search</th>
                    <th className="text-center py-3 px-4 text-rebel-red font-mono text-xs tracking-wider uppercase border-b border-rebel-red/30 bg-rebel-red/5">Rebel Talent</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { metric: "Pricing Model", agency: "20–25% of salary", retained: "$30K–$80K+ upfront", rebel: "Hourly or project — you see every dollar" },
                    { metric: "What You Pay For", agency: "A placement", retained: "Access to a search", rebel: "Time, systems, infrastructure & outcomes" },
                    { metric: "Cost per Hire", agency: "$25K–$40K+", retained: "$30K–$80K+", rebel: "~$5K–$8K" },
                    { metric: "Incentive Alignment", agency: "Fill fast, collect fee", retained: "Fee already paid", rebel: "Build infrastructure that lasts" },
                    { metric: "Time to Fill", agency: "60–90 days", retained: "90–120 days", rebel: "<21 days avg" },
                    { metric: "You Own the Process", agency: "No", retained: "No", rebel: "Yes — everything" },
                    { metric: "Infrastructure Left Behind", agency: "Nothing", retained: "A report", rebel: "ATS, playbooks, pipeline, trained managers" },
                    { metric: "Transparency", agency: "Invoice after placement", retained: "Monthly status calls", rebel: "Real-time dashboard, time logs, ROI" },
                    { metric: "When It's Over", agency: "They disappear", retained: "They disappear", rebel: "You keep everything" },
                  ].map((row, i) => (
                    <tr key={row.metric} className={i % 2 === 0 ? "bg-zinc-900/20" : ""}>
                      <td className="py-3 px-4 text-zinc-300 font-semibold border-b border-zinc-800/50 whitespace-nowrap">{row.metric}</td>
                      <td className="py-3 px-4 text-center text-zinc-500 border-b border-zinc-800/50">{row.agency}</td>
                      <td className="py-3 px-4 text-center text-zinc-500 border-b border-zinc-800/50">{row.retained}</td>
                      <td className="py-3 px-4 text-center text-white font-semibold border-b border-zinc-800/50 bg-rebel-red/5">{row.rebel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Transparency Engine */}
      <section className="py-16 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-8">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">THE TRANSPARENCY ENGINE</div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-3">
                Rebel Command — Your Recruiting War Room
              </h2>
              <p className="text-zinc-500 text-sm max-w-2xl mx-auto">
                Every engagement comes with access to the proprietary platform I built from scratch. This isn't a vendor dashboard — it's full visibility into every dollar and every action.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { icon: <Clock className="w-5 h-5 text-rebel-red" />, title: "Time Tracking", desc: "Every hour logged with task descriptions. No rounding, no mystery." },
              { icon: <Eye className="w-5 h-5 text-rebel-red" />, title: "Pipeline Kanban", desc: "Every candidate, every stage, every status change. Nothing hidden." },
              { icon: <FileText className="w-5 h-5 text-rebel-red" />, title: "Activity Audit Trail", desc: "Who was contacted, when, what happened, what's next." },
              { icon: <Shield className="w-5 h-5 text-rebel-red" />, title: "Revenue & ROI Dashboard", desc: "Agency fees avoided, cost-per-hire, time-to-fill, pipeline velocity." },
              { icon: <Bot className="w-5 h-5 text-rebel-red" />, title: "23 AI Agents", desc: "Automated sourcing, candidate briefs, interview prep, submission packages." },
              { icon: <Database className="w-5 h-5 text-rebel-red" />, title: "Full Data Ownership", desc: "When the engagement ends, your data stays yours. Export everything. No lock-in." },
            ].map((item) => (
              <ScrollReveal key={item.title} variant="fade-up" delay={100}>
                <div className="border border-zinc-800 bg-zinc-900/30 p-5 flex gap-4 items-start hover:border-zinc-700 transition-colors h-full">
                  <div className="shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <div className="font-display text-sm font-bold text-white uppercase mb-1">{item.title}</div>
                    <div className="text-zinc-400 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 border-t border-zinc-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-8">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">FAQ</div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                The Questions Everyone Asks
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={200}>
            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem value="first-30" className="border border-zinc-800 bg-zinc-900/30 px-6">
                <AccordionTrigger className="font-display text-sm font-bold text-white uppercase tracking-wide py-5">
                  What does the first 30 days look like?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 text-sm leading-relaxed pb-5">
                  I'm sourcing candidates within 24 hours of kickoff. Not after a "discovery phase." Not after a deck. Day one I meet the team, get the roles, and start recruiting that same week. The infrastructure — ATS, interview plans, scorecards, process docs — gets built in parallel while candidates are already flowing. By day 30, you have a full pipeline, interviews happening, and a recruiting machine that didn't exist a month ago.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="hours" className="border border-zinc-800 bg-zinc-900/30 px-6">
                <AccordionTrigger className="font-display text-sm font-bold text-white uppercase tracking-wide py-5">
                  How do you track hours?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 text-sm leading-relaxed pb-5">
                  Every hour is logged in Rebel Command with a description of what was done. You can see it anytime. No rounding up, no "admin time" padding. If I work 22.5 hours, you see 22.5 hours. Weekly reports break it down by activity category.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="contract" className="border border-zinc-800 bg-zinc-900/30 px-6">
                <AccordionTrigger className="font-display text-sm font-bold text-white uppercase tracking-wide py-5">
                  Is there a contract?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 text-sm leading-relaxed pb-5">
                  Yes — a straightforward SOW with scope, deliverables, timeline, and rates. No 12-month lock-ins. Fractional engagements are typically month-to-month after an initial 90-day commitment. Project engagements have defined milestones. Contract recruiters can scale up or down with 2 weeks notice.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="why-no-contingency" className="border border-zinc-800 bg-zinc-900/30 px-6">
                <AccordionTrigger className="font-display text-sm font-bold text-white uppercase tracking-wide py-5">
                  Why no contingency?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 text-sm leading-relaxed pb-5">
                  Because contingency breaks incentives. A contingency recruiter gets paid $30K+ only when someone gets hired. That means they're incentivized to push candidates through fast, oversell fits, and move on to the next fee. I'm incentivized to build systems that make your hiring permanently better — because that's what you're paying me to do. The math works out in your favor: $229K in agency fees avoided for one client in 5 months.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-zinc-800/50 bg-gradient-to-b from-rebel-red/5 to-transparent">
        <ScrollReveal variant="scale">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <img src="/logo.png" alt="Rebel Talent" className="w-16 h-16 mx-auto mb-6" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight mb-4">
              Ready for a Transparent Conversation?
            </h2>
            <p className="text-zinc-400 text-base mb-8 max-w-xl mx-auto">
              30 minutes. I'll diagnose your hiring systems, tell you what's broken, and give you a straight answer on what it would cost to fix it. If we're not a fit, I'll tell you that too.
            </p>
            <a href="https://calendly.com/richielam" target="_blank" rel="noopener noreferrer">
              <Button onClick={hapticTap} size="lg" className="font-display tracking-wider uppercase text-sm px-10">
                Book Your Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </ScrollReveal>
      </section>
    </PageLayout>
  );
}
