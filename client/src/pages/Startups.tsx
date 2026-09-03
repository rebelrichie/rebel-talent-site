// Safe addition, landing page for Series A-C startup search work.
// This is the inbound surface for the search desk (Chris): contingent,
// retained, and contract-to-hire via EOR. CTAs pre-set the engagement type
// on /strategy-call so these leads route to the right calendar.

import { ArrowRight, Check } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import GlowCard from "@/components/GlowCard";

// Safe addition, haptic feedback for PWA CTA taps
function hapticTap() {
  if (navigator.vibrate) navigator.vibrate(15);
}

// Safe addition, Service JSON-LD for startup search
const startupSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Startup Recruiting for Series A-C",
  "serviceType": "Contingent recruiting, retained search, and contract-to-hire for venture-backed startups",
  "description": "Sales and technical recruiting for Series A-C startups. Contingent and retained search plus contract and contract-to-hire through an employer of record, run by dedicated GTM and technical desks.",
  "provider": {
    "@type": "Organization",
    "name": "Rebel Talent Systems",
    "url": "https://rebeltalentsystems.com",
  },
  "areaServed": "US",
  "url": "https://rebeltalentsystems.com/startups",
};

const PAIN_POINTS = [
  "Your first AE hire missed quota and you are not sure if it was the person or the territory.",
  "The founding engineer who built v1 cannot hire the team to build v2.",
  "Your Series B closed with a hiring plan attached and the clock already running.",
  "Every agency you talk to sends the same recycled LinkedIn profiles.",
  "You need a contractor this month and a full-time hire this quarter, and nobody offers both.",
];

const OFFERINGS = [
  {
    title: "Contingent",
    tag: "PAY ON PLACEMENT",
    desc: "The fee is due when the hire starts. Built for single roles where you want speed without a big commitment.",
    bullets: [
      "GTM desk: AEs, SDR leaders, sales engineers, first marketing hires",
      "Technical desk: founding engineers, AI/ML, platform, security",
      "Same vetting standard as our retained work",
    ],
    engagement: "contingent",
    cta: "Start a contingent search",
  },
  {
    title: "Retained",
    tag: "COMMITTED SEARCH",
    desc: "Half down, half on placement. The full team commits from day one. Built for the hires you cannot afford to get wrong.",
    bullets: [
      "VP Sales, VP Engineering, and other leadership searches",
      "Defined role, defined deadline, weekly reporting",
      "Guarantee period on every placement",
    ],
    engagement: "retained",
    cta: "Scope a retained search",
  },
  {
    title: "Contract & Contract-to-Hire",
    tag: "VIA EOR",
    desc: "Need the work done before you are ready for the headcount? We place contractors and contract-to-hire through an employer of record, so payroll, compliance, and benefits are handled without touching your books.",
    bullets: [
      "Engineers and sellers on contract, converting when you are ready",
      "EOR handles payroll, benefits, and compliance",
      "Try the hire before the offer",
    ],
    engagement: "contract",
    cta: "Ask about contract roles",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "One call to scope it",
    body: "You talk to Chris, our Head of Client Acquisition. Role, comp, timeline, and an honest read on whether the person you want exists at the number you have.",
  },
  {
    step: "02",
    title: "A dedicated desk works it",
    body: "Sales roles go to our GTM desk, technical roles to our technical desk. Not a generalist juggling forty reqs. A recruiter who lives in your candidate pool.",
  },
  {
    step: "03",
    title: "You see candidates, not noise",
    body: "Short slates of people who match the brief and want the job. Every submittal comes with a reason it is there.",
  },
];

export default function Startups() {
  return (
    <PageLayout>
      <PageSEO
        title="Startup Recruiting for Series A-C | Sales & Technical Hiring | Rebel Talent Systems"
        description="Sales and technical recruiting for Series A-C startups. Contingent, retained, and contract-to-hire through an EOR, run by dedicated GTM and technical desks."
        path="/startups"
        ogTitle="Startup Recruiting for Series A-C | Rebel Talent Systems"
        ogDescription="Your next AE or founding engineer, from dedicated GTM and technical desks. Contingent, retained, or contract-to-hire."
        ogImage="og-services.png"
        schemas={[startupSchema]}
        breadcrumbs={[
          { name: "Home", item: "https://rebeltalentsystems.com/" },
          { name: "Startups", item: "https://rebeltalentsystems.com/startups" },
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
            Series A-C Startups
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.035em] text-white leading-[1.02] max-w-4xl" data-testid="heading-startups">
            The hires your next round depends on.
          </h1>
          <p className="mt-6 sm:mt-8 text-base sm:text-xl text-zinc-400 max-w-2xl leading-[1.55]">
            Sales and technical recruiting for venture-backed startups. Dedicated GTM and technical desks, three ways to engage, and an honest read before you spend a dollar.
          </p>
          <div className="mt-8 sm:mt-10">
            <a href="/strategy-call?engagement=contingent" onClick={hapticTap} data-testid="button-startups-hero-cta" className="block sm:inline-block">
              <Button className="font-display tracking-wider uppercase text-sm w-full sm:w-auto">
                Talk to our search team <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="bg-zinc-950 py-16 sm:py-24 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fade-up">
            <div className="mb-12">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">SOUND FAMILIAR</div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight" data-testid="heading-pain">
                Startup hiring breaks in predictable ways
              </h2>
            </div>
          </ScrollReveal>
          <div className="space-y-7 sm:space-y-9">
            {PAIN_POINTS.map((s, i) => (
              <ScrollReveal key={i} variant="fade-up" delay={i * 40}>
                <p className="text-zinc-200 text-lg sm:text-2xl leading-snug border-l-2 border-rebel-red/40 pl-5">
                  {s}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* OFFERINGS */}
      <section className="bg-rebel-space py-16 sm:py-24 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">THREE WAYS IN</div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight" data-testid="heading-offerings">
                Engage the way your stage demands
              </h2>
              <p className="text-zinc-400 text-sm mt-3">
                Single role, leadership search, or contract help before the headcount opens. Same desks, same standard, different paper.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
            {OFFERINGS.map((o, i) => (
              <ScrollReveal key={o.title} variant="fade-up" delay={i * 100}>
                <GlowCard className="relative p-8 h-full flex flex-col border border-zinc-800 bg-zinc-900/50" data-testid={`card-offering-${o.engagement}`}>
                  <div className="font-mono text-rebel-red text-[10px] tracking-[0.25em] uppercase mb-3">{o.tag}</div>
                  <h3 className="font-display text-xl font-bold text-white uppercase tracking-tight mb-3">{o.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-5">{o.desc}</p>
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {o.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5 text-sm text-zinc-300 leading-snug">
                        <Check className="w-4 h-4 text-rebel-red shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <a href={`/strategy-call?engagement=${o.engagement}`} onClick={hapticTap} className="block">
                    <Button variant="outline" className="w-full font-display tracking-wider uppercase text-xs">
                      {o.cta} <ArrowRight className="ml-2 w-3.5 h-3.5" />
                    </Button>
                  </a>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-zinc-950 py-16 sm:py-24 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fade-up">
            <div className="mb-12">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">HOW IT WORKS</div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight" data-testid="heading-how">
                A desk, not a database
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-8">
            {HOW_IT_WORKS.map((s, i) => (
              <ScrollReveal key={s.step} variant="fade-up" delay={i * 100}>
                <div>
                  <div className="font-display text-rebel-red text-3xl font-extrabold mb-3">{s.step}</div>
                  <h3 className="font-display text-lg font-bold text-white uppercase tracking-tight mb-2">{s.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{s.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rebel-space py-16 sm:py-24 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal variant="fade-up">
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white uppercase tracking-tight mb-4" data-testid="heading-cta">
              Tell us what you are hiring for
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed mb-8 max-w-xl mx-auto">
              Five questions, then a call with our search team. If the person you want does not exist at your number, we will tell you on that call, not after three months of invoices.
            </p>
            <a href="/strategy-call?engagement=contingent" onClick={hapticTap} data-testid="button-startups-footer-cta" className="inline-block">
              <Button className="font-display tracking-wider uppercase text-sm">
                Book the call <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
