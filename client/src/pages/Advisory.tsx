import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import GlowCard from "@/components/GlowCard";
import CurrentEngagements from "@/components/CurrentEngagements";
import EmailCapture from "@/components/EmailCapture";

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

// Safe addition, symptom list, each renders as its own block
const SYMPTOMS = [
  "Your req has been open 90 days and you have seen four candidates.",
  "Every finalist takes the counteroffer and stays.",
  "Your comp band was set eighteen months ago against a market that moved.",
  "You are running seven interview rounds for a role that needs three.",
  "Your first sales hire failed and nobody can tell you whether it was the person or the role.",
  "You budgeted for a cleared engineer at a number that does not exist.",
  "Your timeline assumed a clearance transfer that is not going to happen.",
  "You have three open roles and no idea which one to fill first.",
];

// Safe addition, proof band stats
const STATS = [
  { value: "30 days", label: "Average fill time in a cleared environment" },
  { value: "15", label: "TS/SCI full scope roles running concurrently" },
  { value: "#1", label: "Nationally in submission-to-start against 20+ agencies" },
  { value: "40%", label: "Reduction in time to fill" },
  { value: "90%+", label: "Offer acceptance rate" },
];

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

      {/* SYMPTOMS */}
      <section className="bg-zinc-950 py-16 sm:py-24 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fade-up">
          <div className="mb-12">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">SOUND FAMILIAR</div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight" data-testid="heading-symptoms">
              You probably have one of these
            </h2>
          </div>
          </ScrollReveal>
          <div className="space-y-7 sm:space-y-9">
            {SYMPTOMS.map((s, i) => (
              <ScrollReveal key={i} variant="fade-up" delay={i * 60}>
                <p className="text-zinc-200 text-lg sm:text-2xl leading-snug border-l-2 border-rebel-red/40 pl-5">
                  {s}
                </p>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal variant="fade-up" delay={120}>
            <p className="mt-14 font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
              None of those get fixed by looking at more resumes.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* PROOF BAND */}
      <section className="bg-rebel-space py-14 sm:py-20 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fade-up">
          <div className="text-center mb-10">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase">THE TRACK RECORD</div>
          </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6">
            {STATS.map((s, i) => (
              <ScrollReveal key={s.label} variant="fade-up" delay={i * 80}>
              <div className="text-center">
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-rebel-red tracking-[-0.03em]">{s.value}</div>
                <div className="text-zinc-400 text-[11px] sm:text-xs uppercase tracking-[0.14em] mt-2 leading-snug max-w-[14rem] mx-auto">{s.label}</div>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* THREE WAYS IN, PRICING */}
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
                <h3 className={`font-display text-xl font-bold text-white uppercase mb-4 ${p.featured ? "mt-3" : ""}`}>{p.title}</h3>
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

      {/* SHOW THE WORK */}
      <section className="bg-rebel-space py-16 sm:py-24 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fade-up">
          <div className="text-center mb-12">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">A SAMPLE</div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight" data-testid="heading-sample">
              What the audit actually finds
            </h2>
          </div>
          </ScrollReveal>

          {/* CONTENT SLOT, Richie to supply the real artifact.
              Either (a) a comp band with range and reasoning, or
              (b) a job description teardown, before and after, with 2-3 annotations. */}
          <ScrollReveal variant="fade-up">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-dashed border-zinc-700 bg-zinc-900/30 p-8 min-h-[16rem] flex flex-col">
              <div className="font-mono text-zinc-500 text-xs tracking-[0.2em] uppercase mb-4">BEFORE</div>
              <p className="text-zinc-600 text-sm italic">
                [ Sample slot. Drop the original job description or the comp number as budgeted. ]
              </p>
            </div>
            <div className="border border-dashed border-rebel-red/40 bg-rebel-red/5 p-8 min-h-[16rem] flex flex-col">
              <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-4">AFTER</div>
              <p className="text-zinc-500 text-sm italic">
                [ Sample slot. The rewrite or the real market band, with two or three annotations on what changed and why it matters. ]
              </p>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WHAT THIS IS NOT */}
      <section className="bg-zinc-950 py-16 sm:py-24 border-t border-zinc-900">
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
      <section className="bg-rebel-space py-16 sm:py-24 border-t border-zinc-900">
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

      {/* WHO YOU ARE WORKING WITH */}
      <section className="bg-zinc-950 py-16 sm:py-24 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fade-up">
          <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-4">WHO YOU ARE WORKING WITH</div>
          <p className="text-white font-display text-2xl sm:text-4xl font-bold tracking-tight leading-tight">
            I am not a consultant who read about this. I fill these roles every week, so the comp data, the timelines, and the process advice come from live searches rather than a framework.
          </p>
          <p className="mt-6 text-zinc-400 text-base leading-relaxed max-w-2xl">
            Fourteen years recruiting. PMP. Cleared and commercial. Author of Head and Heart and Unfinished Rooms. Rebel Built newsletter, 53,000 followers on LinkedIn.
          </p>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={120}>
          <div className="mt-12">
            <CurrentEngagements />
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CLOSER */}
      <section className="bg-rebel-space py-16 sm:py-24 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="scale">
          <div className="border border-zinc-800 bg-gradient-to-r from-rebel-red/10 to-transparent p-8 sm:p-10 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-4">
              Tell me the role you cannot close
            </h2>
            <p className="text-zinc-400 text-base mb-6 max-w-lg mx-auto">
              I will tell you why on the call.
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

      {/* NOT READY TO TALK, email capture */}
      <section className="bg-zinc-950 py-16 sm:py-24 border-t border-zinc-900">
        <div className="max-w-2xl mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal variant="fade-up">
          <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">NOT READY TO TALK</div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-4">
            Cleared Talent Market Report
          </h2>
          <p className="text-zinc-400 text-sm mb-8 max-w-lg mx-auto leading-relaxed">
            Real comp bands, time to fill on full scope poly, and clearance transfer rates. Sent when it publishes.
          </p>
          <EmailCapture
            source="advisory-cleared-report"
            placeholder="Enter your email"
            buttonText="Send it to me"
          />
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
