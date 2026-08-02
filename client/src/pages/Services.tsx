import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";
import GlowCard from "@/components/GlowCard";
import CapacityBadge from "@/components/CapacityBadge";
import AnimatedCounter from "@/components/AnimatedCounter";

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
    q: "What size companies and roles do you work with?",
    a: "Series A through C startups and defense teams, roughly 15-400 people scaling fast. Our recruiters specialize across tech, business process, and GTM/sales, plus govtech and leadership. Cleared and noncleared, entry level through executive.",
  },
  {
    q: "What if it's not working?",
    a: "At day 30 you should have a working pipeline. If you don't, we restructure, adjusted scope, adjusted approach, or an honest call that we're not the right fit, at no additional charge. This is written into the SOW. After the 90-day minimum, the engagement is month-to-month with 2 weeks notice to pause or end.",
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
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Talent Advisory",
    "serviceType": "Talent and hiring advisory: hiring plans, comp bands, interview design, offer strategy",
    "description": "Advisory for founders and heads of talent who need judgment rather than delivery. Hiring plans, comp benchmarking, interview design, and offer strategy from an operator who fills these roles every week. Available as a one-time audit, a monthly retainer, or an advisory seat.",
    "provider": serviceProvider,
    "areaServed": "US",
    "url": "https://rebeltalentsystems.com/advisory",
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

const OFFERINGS = [
  {
    tag: "FLAGSHIP",
    title: "Embedded / Fractional",
    terms: "Monthly retainer · 3-month minimum",
    sub: "Our flagship engagement",
    desc: "We run your recruiting function and hand it back better than we found it. In your Slack, your ATS, your hiring-manager 1:1s, your candidate calls, all under Richie's direction. Not consulting from the sidelines.",
    bullets: [
      "Strategic hiring roadmap & prioritization",
      "End-to-end recruiting execution",
      "ATS audit, rebuild & job-post overhaul",
      "Interview process design & training",
      "You keep the database, systems & playbooks",
    ],
    best: "Series A–C startups scaling 5–20+ hires, defense contractors building cleared pipelines, companies replacing agency dependency.",
    featured: true,
  },
  {
    tag: "DEFINED ROLE",
    title: "Retained Search",
    terms: "Half down, half on placement",
    sub: "A defined role with a deadline",
    desc: "Half down commits our full team to the search from day one, with the balance due on placement. Executive and specialized technical roles, cleared and noncleared, under Richie's direction.",
    bullets: [
      "Cleared and noncleared roles (Secret, TS, TS/SCI)",
      "Executive & specialized technical searches",
      "Our vetted team, filling under Richie's direction",
      "Documented, repeatable process left with you",
    ],
    best: "Executive searches, cleared roles, Forward Deployed Engineers, AI/ML, specialized technical talent.",
    featured: false,
  },
  {
    tag: "SINGLE ROLE",
    title: "Contingent",
    terms: "Deposit up front, balance on placement",
    sub: "Paid up front, no spec work",
    desc: "We're happy to work your roles alongside your team, just not for free. A deposit up front gets our team working your roles, with the balance due on placement, all under Richie's direction.",
    bullets: [
      "Cleared and noncleared roles",
      "Entry level through executive",
      "Our vetted team, filling under Richie's direction",
      "Start with a single role",
    ],
    best: "Teams that want to start with one role across tech, business process, and GTM/sales.",
    featured: false,
  },
  // Safe addition, Advisory offering, routes to its own /advisory page
  {
    tag: "ADVISORY",
    title: "Advisory",
    terms: "Audit, retainer, or seat",
    sub: "For teams that need the thinking, not the search",
    desc: "Hiring plans, comp bands, interview design, and offer strategy from someone who fills these roles every week. Available as a one-time audit, a monthly retainer, or an advisory seat.",
    bullets: [
      "Comp benchmarking on your open roles",
      "Job description teardown and rewrite",
      "Interview design and offer strategy",
      "One-time audit, retainer, or advisory seat",
    ],
    best: "Founders and heads of talent who need judgment, not delivery.",
    featured: false,
    internal: true,
    ctaLabel: "View advisory offerings",
    ctaHref: "/advisory",
  },
];

const TIMELINE = [
  {
    phase: "WEEK 1",
    title: "See What You're Up Against",
    intro: "We audit everything. Then we tell you the truth.",
    items: ["Fix your ATS (or set one up that doesn't suck)", "Rewire your sourcing strategy", "Train hiring managers on what 'good' looks like"],
  },
  {
    phase: "MONTH 1",
    title: "The Machine Goes Live",
    intro: "Infrastructure first. Candidates second.",
    items: ["Job architecture and leveling frameworks", "Sourcing playbooks for every role type", "Interview scorecards and structured processes"],
  },
  {
    phase: "MONTHS 2-3",
    title: "Results + Refinement",
    intro: "This is where the hires start stacking up.",
    items: ["2-5 roles filled per month", "Weekly pipeline reviews with leadership", "Battle-tested systems that hold under pressure"],
  },
  {
    phase: "MONTH 4+",
    title: "You Own It",
    intro: "We build ourselves out of a job. That's the point.",
    items: ["Reduced scope as your team takes over", "Help you find your internal TA person", "Clean exit with full documentation"],
  },
];

const ROLES = [
  {
    category: "ENGINEERING",
    title: "Forward Deployed Engineers",
    desc: "FDEs are a rare hybrid: technical enough to build, commercial enough to close. We find operators who live in both worlds.",
    roles: ["Forward Deployed Engineers", "Field Engineers", "Implementation Engineers", "Solutions Architects"],
  },
  {
    category: "AI / ML",
    title: "AI & Machine Learning",
    desc: "From research scientists to applied ML engineers, we source candidates who ship, not just theorize. Defense, fintech, growth-stage AI.",
    roles: ["AI Engineers", "ML Engineers", "Research Scientists", "Data Scientists", "MLOps Engineers"],
  },
  {
    category: "GTM",
    title: "Go-To-Market Talent",
    desc: "Full GTM buildouts for technical companies. We know the nuance between a great SE and a great AE, and build pipelines accordingly.",
    roles: ["Account Executives", "Solutions Engineers", "Sales Engineers", "Customer Success", "RevOps"],
  },
];

const TRAINING = [
  { label: "CORPORATE", title: "Half-Day Training", desc: "4-hour intensive session. Custom curriculum based on your needs. Interactive exercises and real-world examples. 30-day email support." },
  { label: "CORPORATE", title: "Full-Day Workshop", desc: "8-hour comprehensive workshop. Hands-on practice with real scenarios. Team building and role-play exercises. 60-day email support." },
  { label: "CORPORATE", title: "2-Week Intensive", desc: "10 full days of embedded training. Build ATS infrastructure from scratch. Custom interview frameworks. AI-powered screening. 90-day follow-up support." },
  { label: "EDUCATION", title: "College Resume Workshop", desc: "2-3 hour interactive workshop. Resume optimization frameworks. LinkedIn best practices. AI tools for job search. Real recruiter Q&A." },
  { label: "EDUCATION", title: "High School Career Prep", desc: "First resumes, LinkedIn basics, and understanding career paths. Age-appropriate career exploration and practical guidance." },
  { label: "ADVISORY", title: "Team Assessment", desc: "Complete talent function audit. Strategic recommendations and roadmap. Identify gaps, redundancies, and opportunities in your current setup." },
];

export default function Services() {
  return (
    <PageLayout>
      <PageSEO
        title="Recruiting Services & Engagement Models | Rebel Talent Systems"
        description="One recruiting partner, four offerings: Embedded/Fractional, Retained Search, Contingent, and Advisory. Fractional Head of Talent leadership, tech, business process, and GTM/sales, cleared and noncleared, entry level through executive, all under Richie's direction."
        path="/services"
        ogTitle="Recruiting Services & Engagement Models | Rebel Talent Systems"
        ogDescription="Four ways to work with Rebel Talent Systems: Embedded/Fractional, Retained Search, Contingent, and Advisory. You own the infrastructure when we're done."
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
          style={{ background: "radial-gradient(ellipse 80% 50% at 0% 0%, rgba(220,38,38,0.08) 0%, transparent 55%)" }}
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
            No SaaS tiers. Four offerings built around how you actually buy: run your recruiting function embedded, retain us for a defined role, engage us contingent, or bring us in for advisory when you need the thinking, not the search. Richie is on every engagement and every hire, and you own the infrastructure when we're done.
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

      {/* OFFERINGS */}
      <section className="bg-zinc-950 py-16 sm:py-24 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fade-up">
          <div className="text-center mb-12">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">FOUR WAYS IN. ONE STANDARD.</div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight" data-testid="heading-offerings">
              Four Ways To Work Together
            </h2>
            <p className="text-zinc-400 text-sm mt-3 max-w-lg mx-auto">
              Advisory when you need the thinking. Delivery when you need the hire. You own what we build either way.
            </p>
          </div>
          </ScrollReveal>

          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 md:overflow-x-visible">
            {OFFERINGS.map((o, i) => (
              <ScrollReveal key={o.title} variant="fade-up" delay={i * 120}>
              <GlowCard
                className={`p-8 snap-start shrink-0 w-[82vw] md:w-auto h-full flex flex-col ${o.featured ? "border border-rebel-red/50 bg-rebel-red/5" : "border border-zinc-800 bg-zinc-900/50"}`}
                data-testid={`card-service-${o.title.toLowerCase().split(" ")[0]}`}
              >
                <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-3">{o.tag}</div>
                <h3 className="font-display text-xl font-bold text-white uppercase mb-2">{o.title}</h3>
                <p className="text-rebel-red font-mono text-sm mb-1">{o.terms}</p>
                <p className="text-zinc-400 font-mono text-xs mb-4">{o.sub}</p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">{o.desc}</p>
                <ul className="space-y-2 mb-6">
                  {o.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                      <ArrowRight className="w-3 h-3 text-rebel-red mt-1 shrink-0" />{item}
                    </li>
                  ))}
                </ul>
                <p className="text-zinc-500 text-xs leading-relaxed mb-6 mt-auto">
                  <span className="text-zinc-400 font-semibold">Best for:</span> {o.best}
                </p>
                {o.internal ? (
                  <Link href={o.ctaHref}>
                    <Button className="w-full font-display tracking-wider uppercase text-sm">
                      {o.ctaLabel} <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                ) : (
                  <a href="/strategy-call" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full font-display tracking-wider uppercase text-sm">
                      Book Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </a>
                )}
              </GlowCard>
              </ScrollReveal>
            ))}
          </div>

          {/* Team capacity + coverage, condensed to one row */}
          <ScrollReveal variant="fade-up" delay={200}>
          <div className="grid md:grid-cols-2 gap-4 mt-8 max-w-5xl mx-auto">
            <div className="border border-zinc-800/70 bg-zinc-900/30 p-6">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-2">+ TEAM CAPACITY</div>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Any offering scales with a vetted recruiter team under Richie's direction, monthly or hourly, $90–$300+/hr, no long-term lock-in. The team extends our reach, it doesn't replace Richie.
              </p>
            </div>
            <div className="border border-zinc-800/70 bg-zinc-900/30 p-6">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-2">COVERAGE</div>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Tech, business process, and GTM/sales. Cleared and noncleared. Entry level through executive. Series A through C companies and defense teams.
              </p>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-rebel-space py-16 sm:py-24 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fade-up">
          <div className="text-center mb-12">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">HOW IT WORKS</div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight" data-testid="heading-timeline">
              Hiring As Engineering, Not Art
            </h2>
            <p className="text-zinc-400 text-sm mt-3">Assess, embed, execute, hand it over. You own it all.</p>
          </div>
          </ScrollReveal>
          <div className="space-y-4">
            {TIMELINE.map((step, i) => (
              <ScrollReveal key={step.phase} variant="fade-up" delay={i * 120}>
              <GlowCard className="border border-zinc-800 bg-zinc-900/30 p-6 border-l-2 border-l-rebel-red" data-testid={`card-phase-${step.phase.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4 mb-3">
                  <span className="inline-block bg-rebel-red px-3 py-1 mb-2 sm:mb-0 self-start font-mono text-white text-xs font-bold tracking-widest">{step.phase}</span>
                  <h3 className="font-display text-lg font-bold text-white uppercase">{step.title}</h3>
                </div>
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
      </section>

      {/* ROLES WE SOURCE */}
      <section className="bg-zinc-950 py-16 sm:py-24 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fade-up">
          <div className="text-center mb-12">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">ROLE SPECIALIZATIONS</div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight" data-testid="heading-roles">
              Roles We Source
            </h2>
            <p className="text-zinc-400 text-sm mt-3 max-w-xl mx-auto">
              Every hire is hard. These are the ones that make or break a technical team. This is where we go deepest.
            </p>
          </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-6">
            {ROLES.map((group, i) => (
              <ScrollReveal key={group.title} variant="fade-up" delay={i * 120}>
              <div className="border border-zinc-800 bg-zinc-900/30 p-6 h-full" data-testid={`card-roles-${group.category.toLowerCase().replace(/[^a-z]/g, "")}`}>
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
      </section>

      {/* TRAINING & WORKSHOPS */}
      <section className="bg-rebel-space py-16 sm:py-24 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fade-up">
          <div className="text-center mb-12">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">TRAINING</div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight" data-testid="heading-training">
              Training & Workshops
            </h2>
            <p className="text-zinc-400 text-sm mt-3 max-w-lg mx-auto">
              Corporate training and education programs built on real recruiting experience.
            </p>
          </div>
          </ScrollReveal>
          <Accordion type="multiple" className="border border-zinc-800 divide-y divide-zinc-800">
            {TRAINING.map((service, i) => (
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
      </section>

      {/* PROOF, case study + testimonial */}
      <section className="bg-zinc-950 py-16 sm:py-24 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fade-up">
          <div className="border border-zinc-800 bg-gradient-to-r from-rebel-red/5 to-transparent p-6 sm:p-8 mb-10">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-2">CASE STUDY</div>
            <h3 className="font-display text-xl font-bold text-white uppercase mb-2">EarthDaily Federal</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Defense-sector geospatial intelligence firm. Built their entire hiring infrastructure from scratch and eliminated agency dependency in under 90 days. 9 placements, $294K+ in agency fees avoided.
            </p>
            <Link href="/case-studies">
              <Button variant="outline" size="sm" className="font-display tracking-wider uppercase text-xs border-zinc-700 text-zinc-300">
                See Full Case Study <ArrowRight className="ml-2 w-3 h-3" />
              </Button>
            </Link>
          </div>
          <blockquote className="relative max-w-2xl mx-auto text-center">
            <span className="absolute -top-4 -left-2 text-rebel-red/20 text-6xl font-serif leading-none select-none">&ldquo;</span>
            <p className="text-zinc-200 text-lg sm:text-xl leading-relaxed italic mb-4">
              In a review, I was told I had an amazing team, cohesive and indistinguishable from full time employees.
            </p>
            <footer className="text-zinc-400 text-sm">
              <span className="text-zinc-300 font-semibold">Arin, VP of Operations</span>, EarthDaily Federal
            </footer>
          </blockquote>
        </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-rebel-space py-16 sm:py-24 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fade-up">
          <div className="text-center mb-12">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">FAQ</div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
              The Questions Everyone Asks
            </h2>
            <p className="text-zinc-400 text-sm mt-3">No fluff. Real answers.</p>
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
      </section>

      {/* FINAL CTA */}
      <section className="bg-zinc-950 py-16 sm:py-24 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="scale">
          <div className="border border-zinc-800 bg-gradient-to-r from-rebel-red/10 to-transparent p-8 sm:p-10 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-4">
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
