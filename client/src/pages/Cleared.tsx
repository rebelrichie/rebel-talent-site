import { Link } from "wouter";
import { ArrowRight, Shield, Radar, Building2 } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";
import GlowCard from "@/components/GlowCard";
import { BOOK_CHRIS_HREF } from "@/components/ContingentChrisSection";

function hapticTap() {
  if (navigator.vibrate) navigator.vibrate(15);
}

const FAQS = [
  {
    q: "Which clearances do you recruit?",
    a: "Secret, Top Secret, and TS/SCI, including roles that need a polygraph. We also run crossover searches where the person can be sponsored. The req decides the bar. We do not guess it.",
  },
  {
    q: "Is this for startups or for contractors?",
    a: "Both. Defense tech startups that cannot hire like a prime, and contractors who need a pipeline that is not a job board. Govtech and combatant-command work sit here too.",
  },
  {
    q: "Contingent, retained, or fractional?",
    a: "One seat with a flat fee by salary band is contingent. Chris Moscato runs that conversation. A defined role with a deadline is retained. A standing cleared pipeline is embedded fractional. All four models are on the services page.",
  },
  {
    q: "Why do cleared searches stall?",
    a: "The pool is small, the primes pay to keep people, and a slow loop loses the candidate. We source from people who already hold the clearance or can cross over, and we keep the process short enough to compete.",
  },
  {
    q: "Who do I talk to first?",
    a: "A strategy call if you are scoping a cleared pipeline or a retained search. Chris Moscato if you already know the seat and want contingent. Candidates should use the open roles page, not this one.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Cleared Recruiting for Defense Teams",
  "serviceType": "Cleared and defense recruiting: Secret, Top Secret, and TS/SCI",
  "description": "Cleared recruiting for defense startups and contractors. Secret, TS, and TS/SCI searches run as contingent, retained, or embedded fractional.",
  "provider": {
    "@type": "Organization",
    "name": "Rebel Talent Systems",
    "url": "https://rebeltalentsystems.com",
  },
  "areaServed": "US",
  "url": "https://rebeltalentsystems.com/cleared",
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

const PILLARS = [
  {
    icon: Shield,
    title: "The clearance is the constraint",
    body: "Secret, TS, TS/SCI. We read the req for the actual eligibility, the poly, and whether sponsorship is on the table.",
  },
  {
    icon: Radar,
    title: "Startup speed, prime reality",
    body: "Defense startups lose cleared candidates to slow loops. We run the search like the seat has a clock, because it does.",
  },
  {
    icon: Building2,
    title: "Pick the paper",
    body: "Contingent for one seat. Retained when the date cannot slip. Fractional when the pipeline has to keep running.",
  },
];

const ROLES = [
  "Forward deployed engineers",
  "Cleared software, data, and platform",
  "BD into combatant commands",
  "Systems, network, and mission IT",
];

export default function Cleared() {
  return (
    <PageLayout>
      <PageSEO
        title="Cleared Recruiting for Defense Teams | Rebel Talent"
        description="Cleared recruiting for defense and govtech teams. Secret, TS, and TS/SCI searches for startups and contractors, contingent or embedded fractional."
        path="/cleared"
        ogTitle="Cleared Recruiting for Defense Teams | Rebel Talent"
        ogDescription="Cleared recruiting for defense and govtech. Secret, TS, and TS/SCI searches for startups and contractors. Contingent flat fee or embedded fractional."
        ogImage="og-services.png"
        schemas={[serviceSchema, faqSchema]}
        breadcrumbs={[
          { name: "Home", item: "https://rebeltalentsystems.com/" },
          { name: "Services", item: "https://rebeltalentsystems.com/services" },
          { name: "Cleared", item: "https://rebeltalentsystems.com/cleared" },
        ]}
      />

      <section data-testid="section-hero" className="relative overflow-hidden bg-rebel-space">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 50% at 0% 0%, rgba(220,38,38,0.08) 0%, transparent 55%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-16 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 z-10">
          <p className="font-mono text-[11px] sm:text-xs tracking-[0.3em] uppercase text-zinc-400 mb-6 sm:mb-10">
            Cleared &amp; Defense
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.035em] text-white leading-[1.02] max-w-4xl" data-testid="heading-cleared">
            Cleared recruiting for defense teams.
          </h1>
          <p className="mt-6 sm:mt-8 text-base sm:text-xl text-zinc-400 max-w-2xl leading-[1.55]">
            Defense startups and contractors do not lose cleared seats because nobody exists. They lose them to slow loops and prime money. We hunt Secret through TS/SCI like the seat has a clock. One role is contingent with a flat fee locked to the salary band. A standing cleared pipeline is embedded fractional. Richie is on the work. Chris Moscato opens new contingent conversations.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-3">
            <Link href="/strategy-call" onClick={hapticTap} data-testid="button-cleared-strategy" className="block sm:inline-block">
              <Button className="font-display tracking-wider uppercase text-sm w-full sm:w-auto">
                Book a Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <a
              href={BOOK_CHRIS_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={hapticTap}
              data-testid="button-cleared-chris"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap border border-zinc-700 hover:border-rebel-red/60 text-zinc-200 hover:text-white font-medium text-sm px-6 py-3.5 rounded-md transition-colors no-underline"
            >
              Talk to Chris
            </a>
          </div>
          <p className="mt-5 text-zinc-500 text-sm">
            <Link href="/contingent" className="text-zinc-300 hover:text-white underline underline-offset-4 decoration-zinc-700 hover:decoration-rebel-red">
              Contingent flat-fee search
            </Link>
            {" "}for one role.{" "}
            <Link href="/fractional" className="text-zinc-300 hover:text-white underline underline-offset-4 decoration-zinc-700 hover:decoration-rebel-red">
              Fractional recruiting
            </Link>
            {" "}when you need the function.{" "}
            <Link href="/services" className="text-zinc-300 hover:text-white underline underline-offset-4 decoration-zinc-700 hover:decoration-rebel-red">
              All four models
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-zinc-950 py-16 sm:py-24 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fade-up">
            <div className="mb-12 max-w-2xl">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">THE WORK</div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                A cleared req is not a normal req.
              </h2>
              <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
                Most recruiters have never seen a DD-254. The search has to respect the clearance, the facility, and the fact that the candidate can stay at a prime.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-4">
            {PILLARS.map((step, i) => (
              <ScrollReveal key={step.title} variant="fade-up" delay={i * 80}>
                <GlowCard className="border border-zinc-800 bg-zinc-900/50 p-8 h-full">
                  <span className="w-8 h-8 border border-zinc-800 bg-zinc-900/60 flex items-center justify-center text-rebel-red mb-5">
                    <step.icon className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-white uppercase tracking-tight mb-2">{step.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{step.body}</p>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-rebel-space py-16 sm:py-24 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fade-up">
            <div className="mb-12">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">ROLES</div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                Where the desk goes deep.
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {ROLES.map((line, i) => (
              <ScrollReveal key={line} variant="fade-up" delay={i * 60}>
                <p className="text-zinc-200 text-base leading-snug border-l-2 border-rebel-red/40 pl-5">{line}</p>
              </ScrollReveal>
            ))}
          </div>
          <p className="mt-8 text-zinc-500 text-sm leading-relaxed">
            Read{" "}
            <Link href="/blog/hiring-cleared-engineers-defense-tech-guide" className="text-zinc-300 hover:text-white underline underline-offset-4 decoration-zinc-700 hover:decoration-rebel-red">
              the guide to hiring cleared engineers
            </Link>
            {" "}and{" "}
            <Link href="/blog/defense-tech-forward-deployed-engineering-culture" className="text-zinc-300 hover:text-white underline underline-offset-4 decoration-zinc-700 hover:decoration-rebel-red">
              how defense teams hire forward deployed engineers
            </Link>
            . Open seats are on{" "}
            <Link href="/jobs" className="text-zinc-300 hover:text-white underline underline-offset-4 decoration-zinc-700 hover:decoration-rebel-red">
              the jobs board
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-zinc-950 py-16 sm:py-24 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-12">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">FAQ</div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                Before you open a cleared req
              </h2>
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

      <section className="bg-rebel-space py-16 sm:py-24 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="scale">
            <div className="border border-zinc-800 bg-gradient-to-r from-rebel-red/10 to-transparent p-8 sm:p-10 text-center">
              <p className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">NEXT STEP</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-4">
                Scope the search, or talk to Chris
              </h2>
              <p className="text-zinc-400 text-sm mb-6 max-w-lg mx-auto">
                Strategy call for a cleared pipeline or a retained role. Chris Moscato for a contingent seat with the fee locked to the band.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/strategy-call" onClick={hapticTap} data-testid="button-cleared-footer-strategy" className="block w-full sm:w-auto">
                  <Button className="font-display tracking-wider uppercase text-sm w-full">
                    Book a Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <a
                  href={BOOK_CHRIS_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={hapticTap}
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto border border-zinc-700 hover:border-rebel-red/60 text-zinc-200 hover:text-white font-medium text-sm px-6 py-3.5 rounded-md transition-colors no-underline"
                >
                  Talk to Chris
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
