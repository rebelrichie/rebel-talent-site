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
  "serviceType": "Talent and hiring advisory: feasibility, AI strategy, recruiting infrastructure, retained advisory",
  "description": "Advisory for founders and heads of talent who need judgment rather than delivery. Talent feasibility and hiring plans, AI strategy and implementation, recruiting infrastructure builds, and a monthly advisory retainer, from an operator who fills these roles every week.",
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
  "You budgeted for a cleared engineer at a number that does not exist.",
  "Your timeline assumed a clearance transfer that is not going to happen.",
  "You have three open roles and no idea which one to fill first.",
  "You are hiring against a headcount plan nobody pressure tested.",
  "Your ATS is a spreadsheet and your pipeline lives in someone's inbox.",
  "Your first recruiter starts in three weeks and there is nothing for them to run.",
  "You won the contract and now you have ninety days to staff it.",
  "You are paying for four AI recruiting tools and cannot say what any of them changed.",
  "A vendor told you their model finds candidates nobody else can and you have no way to check.",
  "Somebody put a cleared candidate's resume into a public chatbot and nobody noticed.",
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
    title: "Talent Feasibility & Hiring Plan",
    price: "$7,500",
    cadence: "one-time",
    featured: false,
    bullets: [
      "Market sizing on your open roles. How many people actually exist, where they are, and who employs them now",
      "Real compensation to win them, not the number you wish worked",
      "Honest timeline per role, including clearance and relocation reality",
      "Role sequencing. Which one you fill first and why the order matters",
      "What breaks the plan, before it breaks",
      "Written findings and a 90 minute readout",
    ],
    note: "Credited toward the first month if you move to a retainer within 30 days.",
  },
  {
    title: "AI Strategy & Implementation",
    price: "$10,000",
    cadence: "one-time",
    featured: false,
    bullets: [
      "Audit of every AI tool you are paying for, what it actually does, and what overlaps with something you already own",
      "What AI is genuinely good at in hiring, and what the vendor demo was hiding",
      "Where it belongs in your workflow and where a human has to stay",
      "Data handling. What can go into a model, what cannot, and what that means when the candidate holds a clearance",
      "Compliance exposure. Bias audit and candidate notice obligations depend on where the candidate lives, and the rules are moving",
      "A build versus buy call on each piece, with what it costs either way",
      "Implementation plan your team can execute, not a slide deck",
    ],
    note: "Most clients cut spend in the first month.",
  },
  {
    title: "Recruiting Infrastructure Build",
    pricePrefix: "Starts at",
    price: "$25,000",
    featured: true,
    bullets: [
      "ATS selection and configuration, or a rebuild of the one you have",
      "Workflows, stages, and pipeline reporting your leadership will read",
      "Sourcing frameworks and trackers your team can run without me",
      "Intake templates, interview guides, and scorecards",
      "A runbook your first recruiter can follow on day one",
      "You own all of it. Nothing here is rented and nothing depends on me",
    ],
    note: "Typically six to ten weeks. Scoped after a short call.",
  },
  {
    title: "Advisory Retainer",
    price: "$5,000",
    cadence: "per month, three month minimum",
    priceSub: "$7,500 per month for defense and cleared hiring",
    featured: false,
    bullets: [
      "Market reads on new roles before you post them",
      "Compensation checks against live search data",
      "Plan adjustments as headcount and funding move",
      "Process fixes when a search stalls",
      "Direct access between calls",
    ],
  },
];

// Safe addition, AI stance statements
const AI_POINTS = [
  {
    lead: "What works:",
    body: "drafting and research, synthesizing screen notes, interview briefs, pipeline reporting, everything that shortens the time between a decision and the work.",
  },
  {
    lead: "What does not:",
    body: "ranking humans, scoring interviews, and any tool that promises to tell you who to hire. Those create legal exposure and they are not good at it.",
  },
  {
    lead: "What nobody tells you:",
    body: "if your candidates hold clearances, most of what the market is selling you is not safe to use on them.",
  },
];

export default function Advisory() {
  return (
    <PageLayout>
      <PageSEO
        title="Talent Advisory | Feasibility, AI Strategy & Recruiting Infrastructure | Rebel Talent Systems"
        description="Advisory for founders and heads of talent who need judgment, not delivery. Talent feasibility and hiring plans, AI strategy, recruiting infrastructure builds, and a monthly retainer, from an operator who fills these roles every week."
        path="/advisory"
        ogTitle="Talent Advisory | Rebel Talent Systems"
        ogDescription="Before you spend six months failing to hire someone, find out whether they exist, what they cost, and how long it actually takes."
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
            Before you spend six months failing to hire someone, find out whether they exist, what they cost, and how long it actually takes.
          </p>
          <div className="mt-8 sm:mt-10">
            <a href="/strategy-call" onClick={hapticTap} data-testid="button-advisory-hero-cta" className="block sm:inline-block">
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
              <ScrollReveal key={i} variant="fade-up" delay={i * 40}>
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

      {/* FOUR WAYS IN, PRICING */}
      <section className="bg-zinc-950 py-16 sm:py-24 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fade-up">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">HOW TO ENGAGE</div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight" data-testid="heading-pricing">
              Four Ways In
            </h2>
            <p className="text-zinc-400 text-sm mt-3">
              Find out if the plan is real, sort out your AI stack, build the system that runs it, or keep me on call. Every one is priced up front.
            </p>
          </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-4 items-stretch">
            {PRICING.map((p, i) => (
              <ScrollReveal key={p.title} variant="fade-up" delay={i * 100}>
              <GlowCard
                className={`relative p-8 h-full flex flex-col ${p.featured ? "border border-rebel-red/50 bg-rebel-red/5" : "border border-zinc-800 bg-zinc-900/50"}`}
                data-testid={`card-pricing-${p.title.toLowerCase().split(" ")[0]}`}
              >
                {p.featured && (
                  <div className="absolute -top-3 left-8 bg-rebel-red px-3 py-1 font-mono text-white text-[10px] font-bold tracking-[0.2em] uppercase">
                    Most Popular
                  </div>
                )}
                <h3 className={`font-display text-xl font-bold text-white uppercase mb-4 ${p.featured ? "mt-3" : ""}`}>{p.title}</h3>
                <div className="mb-1">
                  {p.pricePrefix && (
                    <span className="text-zinc-400 font-mono text-sm mr-2">{p.pricePrefix}</span>
                  )}
                  <span className="font-display text-3xl font-extrabold text-white tracking-tight">{p.price}</span>
                  {p.cadence && (
                    <span className="text-zinc-400 font-mono text-sm ml-2">{p.cadence}</span>
                  )}
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
          <p className="text-zinc-400 text-sm text-center mt-8 max-w-2xl mx-auto">
            Board and advisory seats are available on standard terms, cash or equity. Ask on the call.
          </p>
          <div className="text-center mt-8">
            <a href="/strategy-call" onClick={hapticTap} data-testid="button-advisory-pricing-cta" className="block sm:inline-block">
              <Button className="font-display tracking-wider uppercase text-sm w-full sm:w-auto">
                Book a call <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WHY ME ON AI */}
      <section className="bg-rebel-space py-16 sm:py-24 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fade-up">
          <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">ON AI SPECIFICALLY</div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight max-w-3xl">
            I built the thing, so I know what it can and cannot do
          </h2>
          <p className="mt-6 text-zinc-300 text-base sm:text-lg leading-relaxed max-w-3xl">
            I wrote Head and Heart: Winning the AI Recruiting War. I built my own applicant tracking system, CRM, and candidate portal from scratch rather than licensing someone else's. And I run AI inside live cleared searches every week, which means the advice comes from what works on Monday, not from a vendor roadmap.
          </p>
          <p className="mt-4 text-zinc-300 text-base sm:text-lg leading-relaxed max-w-3xl">
            Most AI in recruiting is a wrapper on a boolean search with a subscription attached. Some of it is genuinely useful. The difference is worth more than the tools cost.
          </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-4 mt-10">
            {AI_POINTS.map((pt, i) => (
              <ScrollReveal key={pt.lead} variant="fade-up" delay={i * 100}>
              <div className="border border-zinc-800 bg-zinc-900/40 p-6 h-full border-l-2 border-l-rebel-red">
                <p className="text-zinc-300 text-sm leading-relaxed">
                  <span className="text-white font-display uppercase text-xs tracking-wider block mb-2">{pt.lead}</span>
                  {pt.body}
                </p>
              </div>
              </ScrollReveal>
            ))}
          </div>
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
                Series A through C. First ten hires, first sales team, first recruiter. You are about to build a hiring function and only get one shot at doing it in the right order.
              </p>
            </GlowCard>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={120}>
            <GlowCard className="border border-zinc-800 bg-zinc-900/50 p-8 h-full">
              <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-3">DEFENSE & GOVTECH</div>
              <p className="text-zinc-300 text-base leading-relaxed">
                You won the work and now you have to staff it. Cleared timelines, comp bands nobody publishes, and a talent pool small enough to count.
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
            I am not a consultant who read about this. I fill these roles every week, so the market sizing, the comp, and the timelines come from live searches rather than a framework.
          </p>
          <p className="mt-6 text-zinc-400 text-base leading-relaxed max-w-2xl">
            Fourteen years recruiting. PMP. Cleared and commercial. Built my own ATS, CRM, and candidate portal from scratch. Author of Head and Heart and Unfinished Rooms. Rebel Built newsletter, 53,000 followers on LinkedIn.
          </p>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={120}>
          <div className="mt-12">
            <CurrentEngagements />
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* NOT READY TO TALK, email capture */}
      <section className="bg-rebel-space py-16 sm:py-24 border-t border-zinc-900">
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

      {/* CLOSER */}
      <section className="bg-zinc-950 py-16 sm:py-24 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="scale">
          <div className="border border-zinc-800 bg-gradient-to-r from-rebel-red/10 to-transparent p-8 sm:p-10 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-4">
              Tell me the role you cannot close
            </h2>
            <p className="text-zinc-400 text-base mb-6 max-w-lg mx-auto">
              I will tell you why on the call.
            </p>
            <a href="/strategy-call" onClick={hapticTap} data-testid="button-advisory-closing-cta" className="block sm:inline-block">
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
