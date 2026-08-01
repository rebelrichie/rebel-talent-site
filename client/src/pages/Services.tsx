import { Link } from "wouter";
import { ArrowRight, CheckCircle, Shield, Target, Zap, TrendingUp, Users, Clock, Eye, FileText, Bot, Database } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";
import GlowCard from "@/components/GlowCard";
import CapacityBadge from "@/components/CapacityBadge";
import TypedText from "@/components/TypedText";
import AnimatedCounter from "@/components/AnimatedCounter";
import CurrentEngagements from "@/components/CurrentEngagements";

// Safe addition, haptic feedback for PWA CTA taps
function hapticTap() {
  if (navigator.vibrate) navigator.vibrate(15);
}

// Safe addition, single source of truth for FAQ, renders visible accordion + FAQPage schema
const FAQS = [
  {
    q: "What is a Fractional Head of Talent/Lead Talent Consultant?",
    a: "An embedded recruiting leader who owns your entire talent function without the full-time executive cost. Rebel Talent Systems is a vetted team working under Richie's direction, and Richie is on every engagement and every hire. You get strategy, execution, ATS setup, process design, and hiring manager coaching in one.",
  },
  {
    q: "Agency vs. embedded, what's the difference?",
    a: "An agency is transactional, paid per hire and gone after placement. We embed, build systems you own, and transfer everything, ATS, SOPs, sourcing playbooks, when the engagement ends. You own the recruiting function, not just a hire.",
  },
  {
    q: "How can we engage?",
    a: "Three ways. Embedded/Fractional runs on a monthly retainer where we run your recruiting function and hand it back. Retained Search is a defined role with a deadline, half down and half on placement. Contingent takes a deposit up front with the balance on placement. Every offering runs under Richie's direction.",
  },
  {
    q: "What does the first 30 days look like?",
    a: "Sourcing starts within 24 hours of kickoff, not after a discovery phase. Day one we meet the team, get the roles, and start recruiting. The infrastructure, ATS, interview plans, scorecards, process docs, gets built in parallel while candidates are already flowing. By day 30 you have a full pipeline, interviews happening, and a recruiting machine that didn't exist a month ago.",
  },
  {
    q: "How do you track hours?",
    a: "Every hour is logged in Rebel Command with a description of what was done. No rounding up, no admin-time padding. If we work 22.5 hours, you see 22.5 hours. Weekly reports break it down by activity category.",
  },
  {
    q: "Is there a contract, and how long does an engagement last?",
    a: "A straightforward SOW with scope, deliverables, timeline, and rates. No 12-month lock-ins. Embedded/Fractional runs month-to-month after an initial 90-day commitment. Retained Search runs to a defined role and deadline. Contingent runs until the placement lands. Team capacity scales up or down with 2 weeks notice.",
  },
  {
    q: "What size companies do you work with?",
    a: "Series A through C startups and defense teams, roughly 15-400 people scaling fast. Cleared and noncleared, entry level through executive, wherever hiring has become a bottleneck.",
  },
  {
    q: "What roles do you fill?",
    a: "Our recruiters specialize across tech, business process, and GTM/sales, plus govtech and leadership. Cleared and noncleared, entry level through executive, from Forward Deployed Engineers and AI/ML to GTM, operations, backend, and executive searches.",
  },
  {
    q: "We already have a recruiter, can you still help?",
    a: "Yes. We build systems for them to execute within, or handle the overflow.",
  },
  {
    q: "How does Contingent work?",
    a: "Contingent is one of our three offerings. A deposit up front gets our team working your roles, with the balance due on placement. We're happy to work your roles alongside your team, just not for free. Every offering runs under Richie's direction.",
  },
  {
    q: "What if it's not working?",
    a: "At day 30 you should have a working pipeline. If you don't, we restructure, adjusted scope, adjusted approach, or an honest call that we're not the right fit, at no additional charge. This is written into the SOW. After the 90-day minimum, the engagement is month-to-month with 2 weeks notice to pause or end. You keep all infrastructure built, regardless of how or when the engagement ends.",
  },
  {
    q: "What happens after you leave?",
    a: "You own everything, full ATS configuration, sourcing playbooks, SOPs, interview scorecards, active pipelines, and documented workflows. No vendor lock-in. We also help you hire your internal TA person before exiting.",
  },
];

const serviceProvider = {
  "@type": "Organization",
  "name": "Rebel Talent Systems",
  "url": "https://rebeltalentsystems.com",
};

// Safe addition, Service JSON-LD for the three offerings
const serviceSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Embedded / Fractional Recruiting",
    "serviceType": "Embedded / Fractional recruiting on a monthly retainer",
    "description": "We run your recruiting function on a monthly retainer and hand it back better than we found it, all under Richie's direction. Coverage across tech, business process, and GTM/sales, cleared and noncleared, entry level through executive, Series A through C and defense teams.",
    "provider": serviceProvider,
    "areaServed": "US",
    "url": "https://rebeltalentsystems.com/services",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Retained Search",
    "serviceType": "Retained search, half down and half on placement",
    "description": "A defined role with a deadline, billed half down and half on placement. Our vetted team commits from day one under Richie's direction, covering executive and specialized technical searches, cleared and noncleared, entry level through executive.",
    "provider": serviceProvider,
    "areaServed": "US",
    "url": "https://rebeltalentsystems.com/services",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Contingent Recruiting",
    "serviceType": "Contingent recruiting with a deposit up front",
    "description": "A deposit up front gets our team working your roles, with the balance due on placement, all under Richie's direction. Cleared and noncleared, entry level through executive, across tech, business process, and GTM/sales for Series A through C and defense teams.",
    "provider": serviceProvider,
    "areaServed": "US",
    "url": "https://rebeltalentsystems.com/services",
  },
];

// Safe addition, Fractional Head of Talent schema preserved from the merged landing page for SEO continuity
const fractionalSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Fractional Head of Talent/Lead Talent Consultant",
  "provider": {
    "@type": "Person",
    "name": "Richie Lampani",
    "jobTitle": "Fractional Head of Talent/Lead Talent Consultant",
    "url": "https://rebeltalentsystems.com/about",
    "worksFor": {
      "@type": "Organization",
      "name": "Rebel Talent Systems",
      "url": "https://rebeltalentsystems.com",
    },
  },
  "description": "Fractional Head of Talent/Lead Talent Consultant services for startups and defense contractors. Embedded recruiting leadership that owns your entire talent function, strategy, execution, ATS, and systems that survive after the engagement ends.",
  "url": "https://rebeltalentsystems.com/services",
  "areaServed": ["United States", "Remote"],
  "serviceType": "Fractional Recruiting Leadership",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQS.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
};

export default function Services() {
  return (
    <PageLayout>
      <PageSEO
        title="Recruiting Services & Engagement Models | Rebel Talent Systems"
        description="One recruiting partner, three offerings: Embedded/Fractional, Retained Search, and Contingent. Fractional Head of Talent leadership, tech, business process, and GTM/sales, cleared and noncleared, entry level through executive, all under Richie's direction."
        path="/services"
        ogTitle="Recruiting Services & Engagement Models | Rebel Talent Systems"
        ogDescription="Three ways to work with Rebel Talent Systems: Embedded/Fractional, Retained Search, and Contingent. You own the infrastructure when we're done."
        ogImage="og-services.png"
        schemas={[...serviceSchemas, fractionalSchema, faqSchema]}
        breadcrumbs={[
          { name: "Home", item: "https://rebeltalentsystems.com/" },
          { name: "Services", item: "https://rebeltalentsystems.com/services" },
        ]}
      />

      {/* HERO */}
      <section data-testid="section-hero" className="relative overflow-hidden bg-rebel-space">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 0% 0%, rgba(220,38,38,0.08) 0%, transparent 55%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-16 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 z-10">
          <p className="font-mono text-[11px] sm:text-xs tracking-[0.3em] uppercase text-zinc-400 mb-6 sm:mb-10">
            Services &amp; Engagement Models
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.035em] text-white leading-[1.02] max-w-4xl" data-testid="heading-services">
            You don't have a recruiting problem.<br />
            <span className="text-rebel-red">You have a hiring infrastructure problem.</span>
          </h1>
          <p className="mt-6 sm:mt-8 text-base sm:text-xl text-zinc-400 max-w-2xl leading-[1.55]">
            No SaaS tiers. Three offerings built around how you actually buy: run your recruiting function embedded, retain us for a defined role with a deadline, or engage us contingent. Every offering runs under Richie's direction, and Richie is on every engagement and every hire.
          </p>
          <div className="mt-8 sm:mt-10">
            <CapacityBadge />
          </div>
        </div>

        {/* Proof strip */}
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
                  <div className="text-zinc-400 text-[10px] sm:text-xs uppercase tracking-[0.18em] mt-2 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
            <p className="text-zinc-400 text-[11px] font-medium tracking-wider uppercase mt-5">
              EarthDaily Federal, 6 FTE + 3 contractors across 9 placements
            </p>
          </div>
        </div>
      </section>

      {/* THREE OFFERINGS */}
      <section className="bg-rebel-space pt-2 pb-16 sm:pb-24 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="mb-16">
            <ScrollReveal variant="fade-up">
            <div className="text-center mb-8 pt-12">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">THREE OFFERINGS. ONE STANDARD.</div>
              <h2 className="font-display text-2xl font-bold text-white uppercase tracking-tight" data-testid="heading-offerings">
                Three Ways To Work Together
              </h2>
              <p className="text-zinc-400 text-sm mt-2 max-w-lg mx-auto">
                <TypedText text="We build the machine, fill the roles, and leave you owning it. The systems compound long after we're gone." speed={20} />
              </p>
            </div>
            </ScrollReveal>

            <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-x-visible">
              {/* Embedded / Fractional */}
              <ScrollReveal variant="fade-up" delay={0}>
              <GlowCard className="border border-rebel-red/50 bg-rebel-red/5 p-8 snap-start shrink-0 w-[82vw] md:w-auto h-full" data-testid="card-service-fractional">
                <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-3">EMBEDDED / FRACTIONAL</div>
                <h3 className="font-display text-xl font-bold text-white uppercase mb-2">Embedded / Fractional</h3>
                <p className="text-rebel-red font-mono text-sm mb-1">Monthly retainer · 3-month minimum</p>
                <p className="text-zinc-400 font-mono text-xs mb-4">Our flagship engagement</p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  We run your recruiting function and hand it back better than we found it. We're in your Slack, your ATS, your hiring-manager 1:1s, your candidate calls, all under Richie's direction. Not consulting from the sidelines.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Strategic hiring roadmap & prioritization",
                    "End-to-end recruiting execution",
                    "ATS audit, rebuild & job-post overhaul",
                    "Interview process design & training",
                    "Weekly reports with hours, pipeline & ROI",
                    "You keep the database, systems & playbooks",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                      <ArrowRight className="w-3 h-3 text-rebel-red mt-1 shrink-0" />{item}
                    </li>
                  ))}
                </ul>
                <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                  Best for: Series A–C startups scaling 5–20+ hires, defense contractors building cleared talent pipelines, companies replacing agency dependency.
                </p>
                <a href="/strategy-call" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full font-display tracking-wider uppercase text-sm">
                    Book Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </GlowCard>
              </ScrollReveal>

              {/* Retained Search */}
              <ScrollReveal variant="fade-up" delay={150}>
              <GlowCard className="border border-zinc-800 bg-zinc-900/50 p-8 snap-start shrink-0 w-[82vw] md:w-auto h-full" data-testid="card-service-critical">
                <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-3">RETAINED SEARCH</div>
                <h3 className="font-display text-xl font-bold text-white uppercase mb-2">Retained Search</h3>
                <p className="text-rebel-red font-mono text-sm mb-1">Half down, half on placement</p>
                <p className="text-zinc-400 font-mono text-xs mb-4">A defined role with a deadline</p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  A defined role with a deadline. Half down commits our full team to the search from day one, with the balance due on placement. Executive and specialized technical roles, cleared and noncleared, all under Richie's direction.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Half down, half on placement",
                    "Cleared and noncleared roles (Secret, TS, TS/SCI)",
                    "Executive & specialized technical searches",
                    "Our vetted team, filling under Richie's direction",
                    "Documented, repeatable process left with you",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                      <ArrowRight className="w-3 h-3 text-rebel-red mt-1 shrink-0" />{item}
                    </li>
                  ))}
                </ul>
                <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                  Best for: Executive searches, cleared roles (Secret, TS, TS/SCI), specialized technical talent, Forward Deployed Engineers, AI/ML.
                </p>
                <a href="/strategy-call" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full font-display tracking-wider uppercase text-sm">
                    Book Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </GlowCard>
              </ScrollReveal>

              {/* Contingent */}
              <ScrollReveal variant="fade-up" delay={300}>
              <GlowCard className="border border-zinc-800 bg-zinc-900/50 p-8 snap-start shrink-0 w-[82vw] md:w-auto h-full" data-testid="card-service-contingent">
                <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-3">CONTINGENT</div>
                <h3 className="font-display text-xl font-bold text-white uppercase mb-2">Contingent</h3>
                <p className="text-rebel-red font-mono text-sm mb-1">Deposit up front, balance on placement</p>
                <p className="text-zinc-400 font-mono text-xs mb-4">One of three legitimate offerings</p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  We're happy to work your roles alongside your team, just not for free. A deposit up front gets our team working your roles, with the balance due on placement, all under Richie's direction.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Deposit up front, balance on placement",
                    "Cleared and noncleared roles",
                    "Entry level through executive",
                    "Our vetted team, filling under Richie's direction",
                    "Start with a single role",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                      <ArrowRight className="w-3 h-3 text-rebel-red mt-1 shrink-0" />{item}
                    </li>
                  ))}
                </ul>
                <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                  Best for: Teams that want to start with a single role, tech, business process, and GTM/sales hires, entry level through executive.
                </p>
                <a href="/strategy-call" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full font-display tracking-wider uppercase text-sm">
                    Book Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </GlowCard>
              </ScrollReveal>
            </div>

            {/* Team capacity band */}
            <ScrollReveal variant="fade-up" delay={450}>
            <GlowCard className="mt-6 border border-zinc-800/70 bg-zinc-900/30 p-6 sm:p-8" data-testid="band-team-capacity">
              <div className="flex flex-col md:flex-row md:items-start md:gap-8">
                <div className="md:shrink-0 mb-4 md:mb-0 md:w-56">
                  <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-2">
                    + TEAM CAPACITY
                  </div>
                  <h3 className="font-display text-lg font-bold text-white uppercase tracking-tight leading-tight">
                    Need more horsepower?
                  </h3>
                  <p className="text-rebel-red font-mono text-sm mt-2">$90 – $300+ / hour</p>
                  <p className="text-zinc-400 font-mono text-xs">monthly or hourly · no long-term lock-in</p>
                </div>
                <div className="flex-1">
                  <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                    Any offering above scales with a vetted recruiter team deployed under Richie's direction. Same standards, same playbooks. The team extends our reach, it doesn't replace Richie.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Recruiters sourced & vetted under Richie's direction",
                      "Execute to documented Rebel playbooks",
                      "Fully briefed on your roles & culture",
                      "Time logs visible in Rebel Command",
                      "Scale from 10 to 40+ hours/week",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                        <ArrowRight className="w-3 h-3 text-rebel-red mt-1 shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GlowCard>
            </ScrollReveal>

            {/* Coverage band */}
            <ScrollReveal variant="fade-up" delay={550}>
            <div className="mt-6 border border-zinc-800/70 bg-zinc-900/30 p-6 sm:p-8" data-testid="band-coverage">
              <div className="flex flex-col md:flex-row md:items-start md:gap-8">
                <div className="md:shrink-0 mb-4 md:mb-0 md:w-56">
                  <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-2">
                    COVERAGE
                  </div>
                  <h3 className="font-display text-lg font-bold text-white uppercase tracking-tight leading-tight">
                    Who we recruit
                  </h3>
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Our recruiters specialize in tech, business process, and GTM/sales. Cleared and noncleared. Entry level through executive. We work with Series A through C companies and defense teams.
                </p>
              </div>
            </div>
            </ScrollReveal>
          </div>

          {/* WHAT EMBEDDED MEANS (Fractional Head of Talent keyword) */}
          <div className="mb-16">
            <ScrollReveal variant="fade-up">
            <div className="text-center mb-8">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">THE FRACTIONAL MODEL</div>
              <h2 className="font-display text-2xl font-bold text-white uppercase tracking-tight" data-testid="heading-fractional">
                What a Fractional Head of Talent Actually Does
              </h2>
              <p className="text-zinc-400 text-sm mt-3 max-w-3xl mx-auto leading-relaxed">
                A Fractional Head of Talent/Lead Talent Consultant is a senior recruiting leader who embeds into your company on a retainer. Instead of handing you a stack of resumes and moving on, we own the entire talent function, from strategy and process design to hands-on execution and hiring manager coaching.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {[
                { icon: <Target className="w-5 h-5 text-rebel-red" />, title: "Strategic Ownership", desc: "Hiring roadmap, prioritization, and workforce planning aligned to your business goals." },
                { icon: <Zap className="w-5 h-5 text-rebel-red" />, title: "Hands-On Execution", desc: "Sourcing, screening, interviewing, and closing, not just strategy decks." },
                { icon: <Shield className="w-5 h-5 text-rebel-red" />, title: "Systems You Keep", desc: "ATS setup, interview scorecards, offer frameworks, and playbooks that outlast the engagement." },
                { icon: <Users className="w-5 h-5 text-rebel-red" />, title: "Team Coaching", desc: "Hiring manager training, interview calibration, and recruiting culture that sticks." },
              ].map((item) => (
                <div key={item.title} className="border border-zinc-800 bg-zinc-900/30 p-5 flex gap-4 items-start hover:border-zinc-700 transition-colors">
                  <div className="shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <div className="font-display text-sm font-bold text-white uppercase mb-1">{item.title}</div>
                    <div className="text-zinc-400 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            </ScrollReveal>
          </div>

          {/* THE TIMELINE */}
          <div className="mb-16">
            <ScrollReveal variant="fade-up">
            <h2 className="font-display text-2xl font-bold text-white uppercase tracking-tight text-center mb-2" data-testid="heading-timeline">
              The Timeline
            </h2>
            <p className="text-zinc-400 text-sm text-center mb-10">Hiring as engineering, not art.</p>
            </ScrollReveal>
            <div className="space-y-4">
              {[
                {
                  phase: "WEEK 1",
                  title: "See What You're Actually Up Against",
                  intro: "We audit everything. Then we tell you the truth.",
                  items: [
                    "Fix your ATS (or set one up that doesn't suck)",
                    "Rewire your sourcing strategy",
                    "Train your hiring managers on what 'good' actually looks like",
                  ],
                },
                {
                  phase: "MONTH 1",
                  title: "The Machine Goes Live",
                  intro: "Infrastructure first. Candidates second.",
                  items: [
                    "Job architecture and leveling frameworks",
                    "Sourcing playbooks for every role type",
                    "Interview scorecards and structured processes",
                    "Pipeline dashboards and reporting",
                  ],
                },
                {
                  phase: "MONTHS 2-3",
                  title: "Results + Refinement",
                  intro: "This is where the hires start stacking up.",
                  items: [
                    "2-5 roles filled per month",
                    "Weekly pipeline reviews with leadership",
                    "Battle-tested systems that don't break under pressure",
                  ],
                },
                {
                  phase: "MONTH 4+",
                  title: "You Own It",
                  intro: "We build ourselves out of a job. That's the point.",
                  items: [
                    "Reduced scope as your team takes over",
                    "Help you find your internal TA person",
                    "Clean exit with full documentation",
                  ],
                },
              ].map((step, i) => (
                <ScrollReveal key={step.phase} variant="fade-up" delay={i * 150}>
                <GlowCard className="border border-zinc-800 bg-zinc-900/30 p-6 relative border-l-2 border-l-rebel-red" data-testid={`card-phase-${step.phase.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="inline-block bg-rebel-red px-3 py-1 mb-3">
                    <span className="font-mono text-white text-xs font-bold tracking-widest">{step.phase}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white uppercase mb-2">{step.title}</h3>
                  <p className="text-zinc-400 text-sm italic mb-4">{step.intro}</p>
                  <ul className="space-y-2">
                    {step.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                        <span className="text-rebel-red font-mono text-xs mt-0.5">&gt;</span>{item}
                      </li>
                    ))}
                  </ul>
                </GlowCard>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* WHAT YOU GET WHEN WE EMBED (proof cards) */}
          <div className="mb-16">
            <ScrollReveal variant="fade-up">
            <div className="text-center mb-8">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">THE DIFFERENCE</div>
              <h2 className="font-display text-2xl font-bold text-white uppercase tracking-tight">
                What You Get When We Embed
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {[
                { icon: <Users className="w-5 h-5 text-rebel-red" />, title: "Embedded execution", desc: "In your Slack, ATS, hiring-manager 1:1s, candidate calls. A vetted team of specialist recruiters under Richie's direction, tech, business process, and GTM/sales, cleared and noncleared, entry level through executive. Richie is on every hire, not a coordinator." },
                { icon: <TrendingUp className="w-5 h-5 text-rebel-red" />, title: "~$5K-$8K cost per hire", desc: "Hourly or fixed-fee billing. No success fees. Every hour logged in your dashboard with task descriptions." },
                { icon: <Clock className="w-5 h-5 text-rebel-red" />, title: "~30 days median time to hire", desc: "Across embedded engagements. Under 30 on EDF's 9 placements. 34 days on Kalibri against a 360-application funnel." },
                { icon: <Shield className="w-5 h-5 text-rebel-red" />, title: "You own the infrastructure", desc: "ATS, candidate pipeline, interview scorecards, sourcing playbooks, trained hiring managers. Exportable, transferable, yours forever." },
                { icon: <Target className="w-5 h-5 text-rebel-red" />, title: "Proof-first vetting", desc: "Portfolio evidence, structured technical screens, AI-scored match signals on every candidate. Resume polish isn't a pipeline." },
                { icon: <CheckCircle className="w-5 h-5 text-rebel-red" />, title: "Hiring manager coaching built in", desc: "Interview calibration, scorecard training, decision frameworks. Your team gets better at hiring even after the engagement ends." },
                { icon: <Zap className="w-5 h-5 text-rebel-red" />, title: "Long-term ROI that compounds", desc: "470%+ projected on the EDF flagship, $294K+ in fees avoided across 9 placements on ~$88K invested. Every system carries to the next 50 hires." },
              ].map((item) => (
                <div key={item.title} className="border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm p-5 flex gap-4 items-start hover:border-zinc-700 transition-colors">
                  <div className="shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <div className="font-display text-sm font-bold text-white uppercase mb-1">{item.title}</div>
                    <div className="text-zinc-400 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            </ScrollReveal>
          </div>

          {/* ROLES WE SOURCE */}
          <div className="mb-16">
            <ScrollReveal variant="fade-up">
            <div className="text-center mb-8">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">ROLE SPECIALIZATIONS</div>
              <h2 className="font-display text-2xl font-bold text-white uppercase tracking-tight" data-testid="heading-roles">
                Roles We Source
              </h2>
              <p className="text-zinc-400 text-sm mt-2 max-w-xl mx-auto">
                Every hire is hard. These are the ones that make or break a technical team. This is where we go deepest.
              </p>
            </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  category: "ENGINEERING",
                  title: "Forward Deployed Engineers",
                  desc: "FDEs are a rare hybrid: technical enough to build, commercial enough to close. We know how to find operators who can live in both worlds.",
                  roles: ["Forward Deployed Engineers", "Field Engineers", "Implementation Engineers", "Solutions Architects"],
                },
                {
                  category: "AI / ML",
                  title: "AI & Machine Learning",
                  desc: "From research scientists to applied ML engineers, we source candidates who can ship, not just theorize. Across defense, fintech, and growth-stage AI companies.",
                  roles: ["AI Engineers", "ML Engineers", "Research Scientists", "Data Scientists", "MLOps Engineers"],
                },
                {
                  category: "GTM",
                  title: "Go-To-Market Talent",
                  desc: "Full GTM buildouts for technical companies. We understand the nuance between a great SE and a great AE, and build pipelines accordingly.",
                  roles: ["Account Executives", "Solutions Engineers", "Sales Engineers", "Customer Success Managers", "RevOps"],
                },
              ].map((group, i) => (
                <ScrollReveal key={group.title} variant="fade-up" delay={i * 120}>
                <div className="border border-zinc-800 bg-zinc-900/30 p-6" data-testid={`card-roles-${group.category.toLowerCase()}`}>
                  <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-2">{group.category}</div>
                  <h3 className="font-display text-base font-bold text-white uppercase mb-3">{group.title}</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed mb-4">{group.desc}</p>
                  <ul className="space-y-1">
                    {group.roles.map((r) => (
                      <li key={r} className="flex items-center gap-2 text-xs text-zinc-400">
                        <span className="text-rebel-red font-mono">&gt;</span>{r}
                      </li>
                    ))}
                  </ul>
                </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* TRANSPARENCY ENGINE, Rebel Command */}
          <div className="mb-16">
            <ScrollReveal variant="fade-up">
            <div className="text-center mb-8">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">THE TRANSPARENCY ENGINE</div>
              <h2 className="font-display text-2xl font-bold text-white uppercase tracking-tight mb-3">
                Rebel Command: Your Recruiting War Room
              </h2>
              <p className="text-zinc-400 text-sm max-w-2xl mx-auto">
                Every engagement comes with access to the proprietary platform we built from scratch. This isn't a vendor dashboard, it's full visibility into every dollar and every action.
              </p>
            </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                { icon: <Clock className="w-5 h-5 text-rebel-red" />, title: "Time Tracking", desc: "Every hour logged with task descriptions. No rounding, no mystery." },
                { icon: <Eye className="w-5 h-5 text-rebel-red" />, title: "Pipeline Kanban", desc: "Every candidate, every stage, every status change. Nothing hidden." },
                { icon: <FileText className="w-5 h-5 text-rebel-red" />, title: "Activity Audit Trail", desc: "Who was contacted, when, what happened, what's next." },
                { icon: <Shield className="w-5 h-5 text-rebel-red" />, title: "Revenue & ROI Dashboard", desc: "Agency fees avoided, cost-per-hire, time-to-fill, pipeline velocity." },
                { icon: <Bot className="w-5 h-5 text-rebel-red" />, title: "27 AI Agents", desc: "Automated sourcing, candidate briefs, interview prep, submission packages." },
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

          {/* TRAINING & WORKSHOPS */}
          <div className="mb-16">
            <ScrollReveal variant="fade-up">
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl font-bold text-white uppercase tracking-tight" data-testid="heading-training">
                Training & Workshops
              </h2>
              <p className="text-zinc-400 text-sm mt-2 max-w-lg mx-auto">
                Corporate training and education programs built on real recruiting experience.
              </p>
            </div>
            </ScrollReveal>
            <Accordion type="multiple" className="border border-zinc-800 divide-y divide-zinc-800">
              {[
                { label: "CORPORATE", title: "Half-Day Training", desc: "4-hour intensive session. Custom curriculum based on your needs. Interactive exercises and real-world examples. 30-day email support." },
                { label: "CORPORATE", title: "Full-Day Workshop", desc: "8-hour comprehensive workshop. Hands-on practice with real scenarios. Team building and role-play exercises. 60-day email support." },
                { label: "CORPORATE", title: "2-Week Intensive", desc: "10 full days of embedded training. Build ATS infrastructure from scratch. Custom interview frameworks. AI-powered screening implementation. 90-day follow-up support." },
                { label: "EDUCATION", title: "College Resume Workshop", desc: "2-3 hour interactive workshop. Resume optimization frameworks. LinkedIn profile best practices. AI tools for job search. Real recruiter insights and Q&A." },
                { label: "EDUCATION", title: "High School Career Prep", desc: "First resumes, LinkedIn basics, and understanding career paths. Age-appropriate career exploration and practical guidance." },
                { label: "ADVISORY", title: "Team Assessment", desc: "Complete talent function audit. Strategic recommendations and roadmap. Identify gaps, redundancies, and opportunities in your current recruiting setup." },
              ].map((service, i) => (
                <AccordionItem key={service.title} value={`training-${i}`} className="border-b-0 bg-zinc-900/30 px-5" data-testid={`card-training-${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  <AccordionTrigger className="hover:no-underline hover:text-rebel-red py-5 [&[data-state=open]]:text-rebel-red gap-4">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-left">
                      <span className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase shrink-0">{service.label}</span>
                      <span className="font-display text-sm font-bold text-white uppercase tracking-wide">{service.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-400 text-sm leading-relaxed pb-5 pt-0 pl-1">
                    {service.desc}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* RESULTS + CASE STUDY */}
          <div className="mb-16">
            <ScrollReveal variant="fade-up">
            <div className="text-center mb-8">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">RESULTS</div>
              <h2 className="font-display text-2xl font-bold text-white uppercase tracking-tight">
                What Happens When You Bring Us In
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {[
                { value: "53K+", label: "LinkedIn Followers" },
                { value: "8K", label: "Newsletter Subs" },
                { value: "$294K+", label: "Agency Fees Avoided" },
                { value: "<30", label: "Days to Hire" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <AnimatedCounter value={stat.value} className="font-display text-2xl sm:text-4xl font-bold text-rebel-red mb-1" />
                  <div className="text-zinc-400 text-xs tracking-widest uppercase font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="border border-zinc-800 bg-gradient-to-r from-rebel-red/5 to-transparent p-6 sm:p-8">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-2">CASE STUDY</div>
              <h3 className="font-display text-xl font-bold text-white uppercase mb-2">EarthDaily Federal</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Defense-sector geospatial intelligence firm. Built their entire hiring infrastructure from scratch and eliminated agency dependency in under 90 days.
              </p>
              <Link href="/case-studies">
                <Button variant="outline" size="sm" className="font-display tracking-wider uppercase text-xs border-zinc-700 text-zinc-300">
                  See Full Case Study <ArrowRight className="ml-2 w-3 h-3" />
                </Button>
              </Link>
            </div>
            </ScrollReveal>
          </div>

          {/* HOW WE MAKE IT SAFE TO START */}
          <div className="mb-16">
            <ScrollReveal variant="fade-up">
            <div className="text-center mb-8">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">OUR COMMITMENT</div>
              <h2 className="font-display text-2xl font-bold text-white uppercase tracking-tight">
                How We Make It Safe To Start
              </h2>
              <p className="text-zinc-400 text-sm mt-3 max-w-2xl mx-auto">
                A 3-month minimum is a real commitment. Here's what we commit to in return, specific, measurable, written into the SOW.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  headline: "Qualified pipeline by day 30",
                  body: "If you don't have a working pipeline 30 days after kickoff, we restructure the engagement at no additional charge, adjusted scope, adjusted approach, or an honest call that we're not the right fit. You don't burn a quarter to find out something isn't working.",
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
          </div>

          {/* TESTIMONIALS */}
          <ScrollReveal variant="fade-up">
          <div className="mb-16 max-w-3xl mx-auto text-center">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-6">WHAT CLIENTS SAY</div>
            <blockquote className="relative mb-10">
              <span className="absolute -top-4 -left-2 text-rebel-red/20 text-6xl font-serif leading-none select-none">&ldquo;</span>
              <p className="text-zinc-200 text-lg leading-relaxed italic mb-4">
                In a review, I was told I had an amazing team, cohesive and indistinguishable from full time employees.
              </p>
              <footer className="text-zinc-400 text-sm">
                <span className="text-zinc-300 font-semibold">Arin, VP of Operations</span>, EarthDaily Federal
              </footer>
            </blockquote>
            <blockquote className="relative">
              <span className="absolute -top-4 -left-2 text-rebel-red/20 text-6xl font-serif leading-none select-none">&ldquo;</span>
              <p className="text-zinc-200 text-2xl sm:text-3xl leading-relaxed italic mb-4 font-display">
                You Da Bomb.
              </p>
              <footer className="text-zinc-400 text-sm">
                <span className="text-zinc-300 font-semibold">Arin, VP of Operations</span>, EarthDaily Federal
              </footer>
            </blockquote>
          </div>
          </ScrollReveal>

          {/* WHO THIS IS FOR */}
          <div className="mb-16">
            <ScrollReveal variant="fade-up">
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl font-bold text-white uppercase tracking-tight">
                Who This Is For
              </h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: <Zap className="w-5 h-5" />, title: "Series A-C Startups", desc: "Scaling fast, no recruiting function, bleeding agency fees." },
                { icon: <Shield className="w-5 h-5" />, title: "Defense Contractors", desc: "Need cleared talent (TS/SCI), CMMC compliance, federal deadlines." },
                { icon: <TrendingUp className="w-5 h-5" />, title: "Growth Companies", desc: "Hiring is a bottleneck, tired of bad fits, need accountability." },
              ].map((item) => (
                <div key={item.title} className="border border-zinc-800 bg-zinc-900/30 p-6 text-center">
                  <div className="w-10 h-10 mx-auto border border-rebel-red/30 bg-rebel-red/10 flex items-center justify-center text-rebel-red mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-sm font-bold text-white uppercase mb-2">{item.title}</h3>
                  <p className="text-zinc-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            </ScrollReveal>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <ScrollReveal variant="fade-up">
            <div className="text-center mb-8">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">FAQ</div>
              <h2 className="font-display text-2xl font-bold text-white uppercase tracking-tight">
                The Questions Everyone Asks
              </h2>
              <p className="text-zinc-400 text-sm mt-2">No fluff. Real answers.</p>
            </div>
            </ScrollReveal>
            <Accordion type="multiple" className="border border-zinc-800 divide-y divide-zinc-800">
              {FAQS.map((faq, i) => (
                <AccordionItem key={faq.q} value={`faq-${i}`} className="border-b-0 bg-zinc-900/30 px-5">
                  <AccordionTrigger className="font-display text-sm font-bold text-white uppercase tracking-wide hover:no-underline hover:text-rebel-red py-5 [&[data-state=open]]:text-rebel-red text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-400 text-sm leading-relaxed pb-5 pt-0">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* CURRENT ENGAGEMENTS */}
          <ScrollReveal variant="fade-up">
          <div className="mb-16">
            <CurrentEngagements />
          </div>
          </ScrollReveal>

          {/* FINAL CTA */}
          <ScrollReveal variant="scale">
          <div className="border border-zinc-800 bg-gradient-to-r from-rebel-red/10 to-transparent p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-white uppercase tracking-tight mb-4">
              Build the Machine You Own
            </h2>
            <p className="text-zinc-400 text-sm mb-6 max-w-lg mx-auto">
              Every engagement starts with a 30-minute strategy call. Walk us through your hardest open req, we'll map out the fix together. If we're not a fit, we'll tell you that too.
            </p>
            <div className="mb-6">
              <CapacityBadge />
            </div>
            <a href="/strategy-call" target="_blank" rel="noopener noreferrer" onClick={hapticTap} data-testid="button-services-cta" className="block sm:inline-block">
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
