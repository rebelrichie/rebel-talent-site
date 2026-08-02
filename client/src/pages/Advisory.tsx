import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import GlowCard from "@/components/GlowCard";
import CurrentEngagements from "@/components/CurrentEngagements";

// Safe addition, haptic feedback for PWA CTA taps
function hapticTap() {
  if (navigator.vibrate) navigator.vibrate(15);
}

// Safe addition, Service JSON-LD for talent advisory
const advisorySchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Talent Advisory",
  "serviceType": "Talent and hiring advisory: hiring plans, comp bands, interview design, offer strategy",
  "description": "Advisory for founders and heads of talent who need judgment rather than delivery. Comp benchmarking, job description rewrites, interview design, and offer strategy from an operator who fills these roles every week. Available as a one-time audit, a monthly retainer, or an advisory seat.",
  "provider": {
    "@type": "Organization",
    "name": "Rebel Talent Systems",
    "url": "https://rebeltalentsystems.com",
  },
  "areaServed": "US",
  "url": "https://rebeltalentsystems.com/advisory",
};

const PRICING = [
  {
    title: "Hiring Audit",
    price: "$5,000",
    cadence: "one-time",
    featured: false,
    bullets: [
      "Comp benchmarking on your open roles against real market data",
      "Job description teardown and rewrite, up to five roles",
      "Interview process review and where you are losing candidates",
      "Written findings and a 90 minute readout",
    ],
    note: "Credited toward your first month if you move to a retainer within 30 days.",
  },
  {
    title: "Advisory Retainer",
    price: "$5,000",
    cadence: "per month, three month minimum",
    priceSub: "$7,500 per month for defense and cleared hiring",
    featured: true,
    bullets: [
      "Roughly six hours a month",
      "Hiring plan and role sequencing",
      "Comp bands and offer strategy",
      "Interview design and scorecards",
      "Direct access between calls",
    ],
  },
  {
    title: "Advisory or Board Seat",
    price: "Equity",
    cadence: "or cash plus equity",
    featured: false,
    bullets: [
      "Ongoing counsel on talent strategy",
      "Standard advisor terms, two year vest",
      "By conversation",
    ],
  },
];

export default function Advisory() {
  return (
    <PageLayout>
      <PageSEO
        title="Talent Advisory | Comp, Process & Offer Strategy | Rebel Talent Systems"
        description="Advisory for founders and heads of talent who need judgment, not delivery. Comp benchmarking, interview design, and offer strategy from an operator who fills these roles every week. One-time audit, monthly retainer, or advisory seat."
        path="/advisory"
        ogTitle="Talent Advisory | Rebel Talent Systems"
        ogDescription="Most hiring problems are not search problems. They are comp problems, process problems, and scope problems. I fix those."
        ogImage="og-services.png"
        schemas={[advisorySchema]}
        breadcrumbs={[
          { name: "Home", item: "https://rebeltalentsystems.com/" },
          { name: "Advisory", item: "https://rebeltalentsystems.com/advisory" },
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
            Talent Advisory
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.035em] text-white leading-[1.02] max-w-4xl" data-testid="heading-advisory">
            Advisory
          </h1>
          <p className="mt-6 sm:mt-8 text-base sm:text-xl text-zinc-400 max-w-2xl leading-[1.55]">
            Most hiring problems are not search problems. They are comp problems, process problems, and scope problems. I fix those.
          </p>
          <div className="mt-8 sm:mt-10">
            <a href="/strategy-call" target="_blank" rel="noopener noreferrer" onClick={hapticTap} data-testid="button-advisory-hero-cta" className="block sm:inline-block">
              <Button className="font-display tracking-wider uppercase text-sm w-full sm:w-auto">
                Book a call <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-zinc-950 py-16 sm:py-24 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fade-up">
          <div className="text-center mb-12">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">HOW TO ENGAGE</div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight" data-testid="heading-pricing">
              Three Ways In
            </h2>
            <p className="text-zinc-400 text-sm mt-3 max-w-lg mx-auto">
              Start with an audit, run a retainer, or bring me on as an advisor. Every one is priced up front.
            </p>
          </div>
          </ScrollReveal>

          <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 md:overflow-x-visible items-stretch">
            {PRICING.map((p, i) => (
              <ScrollReveal key={p.title} variant="fade-up" delay={i * 120}>
              <GlowCard
                className={`relative p-8 snap-start shrink-0 w-[82vw] md:w-auto h-full flex flex-col ${p.featured ? "border border-rebel-red/50 bg-rebel-red/5" : "border border-zinc-800 bg-zinc-900/50"}`}
                data-testid={`card-pricing-${p.title.toLowerCase().split(" ")[0]}`}
              >
                {p.featured && (
                  <div className="absolute -top-3 left-8 bg-rebel-red px-3 py-1 font-mono text-white text-[10px] font-bold tracking-[0.2em] uppercase">
                    Most Popular
                  </div>
                )}
                <h3 className="font-display text-xl font-bold text-white uppercase mb-4">{p.title}</h3>
                <div className="mb-1">
                  <span className="font-display text-3xl font-extrabold text-white tracking-tight">{p.price}</span>
                  <span className="text-zinc-400 font-mono text-sm ml-2">{p.cadence}</span>
                </div>
                {p.priceSub && (
                  <p className="text-rebel-red font-mono text-xs mb-5">{p.priceSub}</p>
                )}
                <ul className={`space-y-3 mb-6 ${p.priceSub ? "" : "mt-4"}`}>
                  {p.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                      <Check className="w-4 h-4 text-rebel-red mt-0.5 shrink-0" />{item}
                    </li>
                  ))}
                </ul>
                {p.note && (
                  <p className="text-zinc-500 text-xs leading-relaxed mt-auto pt-4 border-t border-zinc-800">
                    {p.note}
                  </p>
                )}
              </GlowCard>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal variant="fade-up" delay={200}>
          <div className="text-center mt-10">
            <a href="/strategy-call" target="_blank" rel="noopener noreferrer" onClick={hapticTap} data-testid="button-advisory-pricing-cta" className="block sm:inline-block">
              <Button className="font-display tracking-wider uppercase text-sm w-full sm:w-auto">
                Book a call <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WHAT THIS IS NOT */}
      <section className="bg-rebel-space py-16 sm:py-24 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fade-up">
          <div className="border border-zinc-800 bg-zinc-900/30 p-8 sm:p-10">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">WHAT THIS IS NOT</div>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              This is not a search engagement and there are no placement fees attached. If you need roles filled, that is a different conversation.{" "}
              <Link href="/services" className="text-rebel-red hover:underline">See the services.</Link>
            </p>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="bg-zinc-950 py-16 sm:py-24 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fade-up">
          <div className="text-center mb-12">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">WHO THIS IS FOR</div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
              Two Kinds Of Teams
            </h2>
          </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal variant="fade-up">
            <GlowCard className="border border-zinc-800 bg-zinc-900/50 p-8 h-full">
              <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-3">VENTURE-BACKED</div>
              <p className="text-zinc-300 text-base leading-relaxed">
                Venture-backed, Series A through C. First ten hires, first sales team, first VP.
              </p>
            </GlowCard>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={120}>
            <GlowCard className="border border-zinc-800 bg-zinc-900/50 p-8 h-full">
              <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-3">DEFENSE & GOVTECH</div>
              <p className="text-zinc-300 text-base leading-relaxed">
                Defense, government, and govtech. Cleared hiring, comp bands nobody publishes, clearance timelines that break plans.
              </p>
            </GlowCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CREDIBILITY */}
      <section className="bg-rebel-space py-16 sm:py-24 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal variant="fade-up">
          <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">WHO YOU ARE WORKING WITH</div>
          <p className="text-zinc-200 text-lg sm:text-xl leading-relaxed">
            Fourteen years recruiting. PMP. Cleared and commercial. Author of Head and Heart and Unfinished Rooms. Rebel Built newsletter, 53,000 followers.
          </p>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={120}>
          <div className="mt-10 flex justify-center">
            <CurrentEngagements />
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-zinc-950 py-16 sm:py-24 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="scale">
          <div className="border border-zinc-800 bg-gradient-to-r from-rebel-red/10 to-transparent p-8 sm:p-10 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-4">
              Fix The Problem Before It Costs A Hire
            </h2>
            <p className="text-zinc-400 text-sm mb-6 max-w-lg mx-auto">
              Bring me the role you cannot close or the plan you cannot staff. We map the fix on the call.
            </p>
            <a href="/strategy-call" target="_blank" rel="noopener noreferrer" onClick={hapticTap} data-testid="button-advisory-closing-cta" className="block sm:inline-block">
              <Button className="font-display tracking-wider uppercase text-sm w-full sm:w-auto">
                Book a call <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
