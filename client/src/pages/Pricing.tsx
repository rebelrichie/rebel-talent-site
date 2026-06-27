// Safe addition, Transparent Pricing page
import { ArrowRight, Shield, Eye, Clock, FileText, Bot, Database } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";
import GlowCard from "@/components/GlowCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import CapacityBadge from "@/components/CapacityBadge";

// Safe addition, haptic feedback for PWA CTA taps
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
        "text": "Sourcing starts within 24 hours of kickoff. Day one: meet the team, get the roles, start recruiting. The infrastructure, ATS, interview plans, scorecards, process docs, gets built in parallel while candidates are already flowing. By day 30, you have a full pipeline, interviews happening, and a recruiting machine that didn't exist a month ago."
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
        "text": "Yes, a straightforward SOW with scope, deliverables, timeline, and rates. No 12-month lock-ins. Fractional engagements are typically month-to-month after an initial 90-day commitment. Project engagements have defined milestones. Contract recruiters can scale with 2 weeks notice."
      }
    },
    {
      "@type": "Question",
      "name": "Why no contingency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Because contingency breaks incentives. A contingency recruiter gets paid $30K+ only when someone gets hired, so they're incentivized to push candidates through fast, oversell fits, and move on. I'm incentivized to build systems that make your hiring permanently better. The math works out in your favor: $294K+ in agency fees avoided for one client across 9 placements."
      }
    },
    {
      "@type": "Question",
      "name": "What if it's not working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At day 30, you should have a working pipeline. If you don't, we restructure, adjusted scope, adjusted approach, or an honest call that we're not the right fit. No additional charge. This is written into the SOW. After the initial 90-day minimum, the engagement is month-to-month with 2 weeks notice to pause or end. You keep all infrastructure built regardless of how or when the engagement ends."
      }
    }
  ]
};

export default function Pricing() {
  return (
    <PageLayout>
      <PageSEO
        title="Transparent Pricing & Engagement Models | Rebel Talent Systems"
        description="No contingency. No success fees. Two engagement shapes: Fractional Head of Talent ($12K–$30K/mo) or Critical Hire Execution ($8K–$25K+ per search). Scale either with a vetted recruiter team from $90/hr."
        path="/pricing"
        ogTitle="Transparent Pricing | Rebel Talent Systems"
        ogDescription="No contingency fees. Two engagements plus team capacity when you need more horsepower. See exact pricing."
        ogImage="og-services.png"
        schemas={[pricingFaqSchema]}
        breadcrumbs={[
          { name: "Home", item: "https://rebeltalentsystems.com/" },
          { name: "Pricing", item: "https://rebeltalentsystems.com/pricing" },
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
            Pricing &amp; Engagement Models
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.035em] text-white leading-[1.02] max-w-4xl">
            No contingency.<br />
            <span className="text-rebel-red">No success fees.</span><br />
            No games.
          </h1>
          <p className="mt-6 sm:mt-8 text-base sm:text-xl text-zinc-400 max-w-2xl leading-[1.55]">
            You pay for the actual time, expertise, and infrastructure I deliver. Every hour is logged. Every deliverable is documented. Every dollar is accounted for in your dashboard, in real time.
          </p>
          <p className="mt-4 text-sm sm:text-base text-zinc-500 max-w-2xl leading-[1.6]">
            Contingency recruiting is broken by design, when a recruiter only gets paid on placement, their incentive is to fill the seat fast, not build the systems that make your next 50 hires easier.
          </p>
          <div className="mt-8 sm:mt-10">
            <CapacityBadge />
          </div>
        </div>

        {/* Proof strip, at bottom of hero */}
        <div className="relative z-10 border-t border-zinc-900 bg-black/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 sm:py-10">
            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl">
              {[
                { value: "$294K+", label: "Agency Fees Avoided" },
                { value: "335%", label: "ROI Delivered" },
                { value: "~30", label: "Days Median Time to Hire" },
              ].map((s) => (
                <div key={s.label}>
                  <AnimatedCounter value={s.value} className="block text-3xl sm:text-5xl font-extrabold text-rebel-red tracking-[-0.03em]" />
                  <div className="text-zinc-500 text-[10px] sm:text-xs uppercase tracking-[0.18em] mt-2 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
            <p className="text-zinc-600 text-[11px] font-medium tracking-wider uppercase mt-5">
              EarthDaily Federal, 6 FTE + 3 contractors across 9 placements
            </p>
          </div>
        </div>
      </section>

      {/* Two engagement models + team capacity */}
      <section className="py-16 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-10">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">
                TWO ENGAGEMENTS. ONE OPERATOR.
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                Two Ways to Work Together
              </h2>
              <p className="text-zinc-500 text-sm mt-3 max-w-xl mx-auto">
                No SaaS tiers. Two engagement shapes built around how you actually buy, embed me as your Head of Talent, or scope a specific search. Either one scales with a vetted recruiter team when the pipeline demands it.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex md:grid md:grid-cols-2 gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-x-visible">
            {/* Embedded */}
            <ScrollReveal variant="fade-up" delay={0}>
              <GlowCard className="border border-rebel-red/50 bg-rebel-red/5 p-8 snap-start shrink-0 w-[82vw] md:w-auto h-full">
                <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-3">EMBEDDED</div>
                <h3 className="font-display text-xl font-bold text-white uppercase mb-2">Fractional Head of Talent</h3>
                <p className="text-rebel-red font-mono text-sm mb-1">$12K – $30K / month · 3-month minimum</p>
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

            {/* Project */}
            <ScrollReveal variant="fade-up" delay={150}>
              <GlowCard className="border border-zinc-800 bg-zinc-900/50 p-8 snap-start shrink-0 w-[82vw] md:w-auto h-full">
                <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-3">PROJECT</div>
                <h3 className="font-display text-xl font-bold text-white uppercase mb-2">Critical Hire Execution</h3>
                <p className="text-rebel-red font-mono text-sm mb-1">$8K – $25K+ per search · fixed fee</p>
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
          </div>

          {/* Team Capacity Extension, applies to either engagement */}
          <ScrollReveal variant="fade-up" delay={300}>
            <GlowCard className="mt-6 border border-zinc-800/70 bg-zinc-900/30 p-6 sm:p-8" data-testid="band-team-capacity">
              <div className="flex flex-col md:flex-row md:items-start md:gap-8 mb-6">
                <div className="md:shrink-0 mb-4 md:mb-0 md:w-56">
                  <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-2">
                    + TEAM CAPACITY
                  </div>
                  <h3 className="font-display text-lg font-bold text-white uppercase tracking-tight leading-tight">
                    Need more horsepower?
                  </h3>
                  <p className="text-rebel-red font-mono text-sm mt-2">$90 – $300+ / hour</p>
                  <p className="text-zinc-500 font-mono text-xs">monthly or hourly · no long-term lock-in</p>
                </div>
                <div className="flex-1">
                  <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                    Either engagement above scales with a vetted recruiter team deployed under my direction. Same standards, same playbooks. You still get me on every call, the team extends my reach; it doesn't replace me.
                  </p>
                  <ul className="space-y-2 mb-3">
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
                    Best for: Surge hiring, backfilling while you hire full-time, any engagement that needs execution capacity beyond what I alone can deliver.
                  </p>
                  <p className="text-zinc-600 text-xs mt-2 leading-relaxed">
                    Rate factors: Recruiter seniority, clearance level, technical complexity, weekly commitment.
                  </p>
                </div>
              </div>
            </GlowCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Safe addition, differentiators (replaces agency/retained/rebel comparison per Richie's no-comparison framing) */}
      <section className="py-16 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-8">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">HOW THIS WORKS</div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                The Rebel Talent Standard
              </h2>
              <p className="text-zinc-500 text-sm mt-3 max-w-2xl mx-auto">
                Nine commitments built into every engagement. Concrete, measurable, and visible in your dashboard from day one.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={200}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: "Pricing Model", value: "Hourly or project. Every dollar in your dashboard." },
                { label: "What You Pay For", value: "Time, systems, infrastructure & outcomes, not just a placement." },
                { label: "Cost per Hire", value: "~$5K–$8K on average across embedded engagements." },
                { label: "Incentive Alignment", value: "Paid to build infrastructure that lasts, not to fill seats fast." },
                { label: "Time to Fill", value: "~30 days median across embedded engagements." },
                { label: "Process Ownership", value: "Yours. Everything we build, you keep." },
                { label: "Infrastructure You Keep", value: "ATS, playbooks, pipeline, trained hiring managers." },
                { label: "Transparency", value: "Real-time dashboard, time logs, ROI, visible every day." },
                { label: "When It's Over", value: "You keep everything: data, systems, process, relationships." },
              ].map((row) => (
                <div
                  key={row.label}
                  className="border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm p-5 hover:border-zinc-700 transition-colors"
                >
                  <div className="font-mono text-rebel-red text-[10px] tracking-[0.18em] uppercase mb-2">{row.label}</div>
                  <div className="text-zinc-200 text-sm leading-relaxed">{row.value}</div>
                </div>
              ))}
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
                Rebel Command: Your Recruiting War Room
              </h2>
              <p className="text-zinc-500 text-sm max-w-2xl mx-auto">
                Every engagement comes with access to the proprietary platform I built from scratch. This isn't a vendor dashboard, it's full visibility into every dollar and every action.
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
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">MY COMMITMENT</div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                How I make it safe to start
              </h2>
              <p className="text-zinc-500 text-sm mt-3 max-w-2xl mx-auto">
                A 3-month minimum is a real commitment. Here's what I commit to in return, specific, measurable, written into the SOW.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={150}>
            <div className="grid sm:grid-cols-3 gap-4 mb-16">
              {[
                {
                  headline: "Qualified pipeline by day 30",
                  body: "If you don't have a working pipeline 30 days after kickoff, I restructure the engagement at no additional charge, adjusted scope, adjusted approach, or an honest call that we're not the right fit. You don't burn a quarter to find out something isn't working.",
                },
                {
                  headline: "Month-to-month after 90 days",
                  body: "Three-month minimum to give the systems time to compound. After that, pause, scale down, or end the engagement with 2 weeks notice. No annual lock-ins. The engagement flexes with what your team actually needs.",
                },
                {
                  headline: "You keep everything, always",
                  body: "ATS, scorecards, sourcing playbooks, candidate pipeline, process docs, yours from day one, exportable any time, no claw-back if the engagement ends. Even work-in-progress goes with you.",
                },
              ].map((c) => (
                <div key={c.headline} className="border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm p-6 hover:border-rebel-red/30 transition-colors">
                  <div className="font-display text-base font-bold text-white uppercase mb-3 leading-tight">{c.headline}</div>
                  <div className="text-zinc-400 text-sm leading-relaxed">{c.body}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>

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
                  I'm sourcing candidates within 24 hours of kickoff. Not after a "discovery phase." Not after a deck. Day one I meet the team, get the roles, and start recruiting that same week. The infrastructure, ATS, interview plans, scorecards, process docs, gets built in parallel while candidates are already flowing. By day 30, you have a full pipeline, interviews happening, and a recruiting machine that didn't exist a month ago.
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
                  Yes, a straightforward SOW with scope, deliverables, timeline, and rates. No 12-month lock-ins. Fractional engagements are typically month-to-month after an initial 90-day commitment. Project engagements have defined milestones. Contract recruiters can scale up or down with 2 weeks notice.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="why-no-contingency" className="border border-zinc-800 bg-zinc-900/30 px-6">
                <AccordionTrigger className="font-display text-sm font-bold text-white uppercase tracking-wide py-5">
                  Why no contingency?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 text-sm leading-relaxed pb-5">
                  Because contingency breaks incentives. A contingency recruiter gets paid $30K+ only when someone gets hired. That means they're incentivized to push candidates through fast, oversell fits, and move on to the next fee. I'm incentivized to build systems that make your hiring permanently better, because that's what you're paying me to do. The math works out in your favor: $294K+ in agency fees avoided for one client across 9 placements.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="what-if-not-working" className="border border-zinc-800 bg-zinc-900/30 px-6">
                <AccordionTrigger className="font-display text-sm font-bold text-white uppercase tracking-wide py-5">
                  What if it's not working?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 text-sm leading-relaxed pb-5">
                  At day 30, you should have a working pipeline. If you don't, we restructure, adjusted scope, adjusted approach, or an honest call that we're not the right fit. No additional charge. This is written into the SOW, not a verbal promise. After the initial 90-day minimum, the engagement is month-to-month with 2 weeks notice to pause or end. You should never have to argue your way out of a recruiting engagement that isn't producing.
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
            <a href="/strategy-call" target="_blank" rel="noopener noreferrer" className="block sm:inline-block">
              <Button onClick={hapticTap} size="lg" className="font-display tracking-wider uppercase text-sm px-10 w-full sm:w-auto">
                Book Your Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </ScrollReveal>
      </section>
    </PageLayout>
  );
}
