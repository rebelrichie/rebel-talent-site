import { Link } from "wouter";
import { ArrowRight, Layers, RefreshCw, Undo2 } from "lucide-react";
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
    q: "What is a Fractional Head of Talent here?",
    a: "A senior recruiting lead on a monthly retainer. I work inside your team, build the process, fill the hard roles, then step down or out. You are not buying hours from a bench. You are renting leadership until you can staff it yourself.",
  },
  {
    q: "How is this different from contingent search?",
    a: "If you only need one seat filled, that is contingent. Chris Moscato owns that conversation. The fee structure lives on the contingent page. Fractional is the function, not a single req.",
  },
  {
    q: "How long is an embedded engagement?",
    a: "Three months minimum. Most teams need three to six to stand the function up and fill the first wave. After that it is month to month. You can walk.",
  },
  {
    q: "Do you publish the retainer?",
    a: "No. The fractional retainer is not on this page. Scope changes the number, and a strategy call is how it gets set. Advisory is a different offer: a hiring plan, an AI read, a recruiting infrastructure build, or an advisory retainer. Those prices are on the advisory page. They are not the price of this desk, and they are not a cleared search fee.",
  },
  {
    q: "What happens when you leave?",
    a: "You keep the ATS configuration, the pipelines, the scorecards, the playbooks, and the documentation. That is the same handoff EarthDaily Federal kept when the engagement scaled down. Rebel Command stays with us. You get the outcomes and the reporting. You do not run the agent stack.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Embedded Fractional Recruiting",
  "serviceType": "Embedded fractional recruiting on a monthly retainer",
  "description": "Embedded fractional recruiting on a monthly retainer. Rebel Talent Systems runs the talent function for startups and defense teams, then hands back the ATS, process, and playbooks.",
  "provider": {
    "@type": "Organization",
    "name": "Rebel Talent Systems",
    "url": "https://rebeltalentsystems.com",
  },
  "areaServed": "US",
  "url": "https://rebeltalentsystems.com/fractional",
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

const STEPS = [
  {
    icon: Layers,
    title: "Own the plan",
    body: "We write the hiring plan with you: order of roles, what good looks like, and what the budget can actually support.",
  },
  {
    icon: RefreshCw,
    title: "Run the desk",
    body: "Then we source, screen, interview, and close inside your tools. Slack, ATS, and the hiring-manager meetings.",
  },
  {
    icon: Undo2,
    title: "Hand it back",
    body: "When the retainer winds down, the ATS, scorecards, playbooks, and pipeline stay with you. Rebel Command stays with us.",
  },
];

const COMPARE = [
  {
    title: "Fractional",
    tag: "THIS PAGE",
    body: "Monthly retainer. We run the function and leave the system behind.",
    href: "/fractional",
  },
  {
    title: "Contingent",
    tag: "ONE SEAT",
    body: "Flat fee by salary band. Invoiced when the search starts. No deposit.",
    href: "/contingent",
  },
  {
    title: "Cleared",
    tag: "DEFENSE",
    body: "Secret, TS, and TS/SCI searches for startups and contractors.",
    href: "/cleared",
  },
];

export default function Fractional() {
  return (
    <PageLayout>
      <PageSEO
        title="Fractional Recruiting | Embedded Talent Leadership | Rebel Talent"
        description="Embedded fractional recruiting on a monthly retainer. We run your talent function and hand the systems back. Startups and cleared defense teams."
        path="/fractional"
        ogTitle="Fractional Recruiting | Embedded Talent Leadership | Rebel Talent"
        ogDescription="Embedded fractional recruiting on a monthly retainer. We run the talent function and hand the systems back. Startups and cleared defense teams."
        ogImage="og-services.png"
        schemas={[serviceSchema, faqSchema]}
        breadcrumbs={[
          { name: "Home", item: "https://rebeltalentsystems.com/" },
          { name: "Services", item: "https://rebeltalentsystems.com/services" },
          { name: "Fractional", item: "https://rebeltalentsystems.com/fractional" },
        ]}
      />

      <section data-testid="section-hero" className="relative overflow-hidden bg-rebel-space">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 50% at 0% 0%, rgba(220,38,38,0.08) 0%, transparent 55%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-16 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 z-10">
          <p className="font-mono text-[11px] sm:text-xs tracking-[0.3em] uppercase text-zinc-400 mb-6 sm:mb-10">
            Embedded / Fractional
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.035em] text-white leading-[1.02] max-w-4xl" data-testid="heading-fractional">
            We run recruiting for a while. Then you run it.
          </h1>
          <p className="mt-6 sm:mt-8 text-base sm:text-xl text-zinc-400 max-w-2xl leading-[1.55]">
            A flat monthly retainer. We sit in your Slack and your ATS, fill the open roles, and leave you the process. If you only need one seat filled, that is contingent.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-3">
            <Link href="/strategy-call" onClick={hapticTap} data-testid="button-fractional-strategy" className="block sm:inline-block">
              <Button className="font-display tracking-wider uppercase text-sm w-full sm:w-auto">
                Book a Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <a
              href={BOOK_CHRIS_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={hapticTap}
              data-testid="button-fractional-chris"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap border border-zinc-700 hover:border-rebel-red/60 text-zinc-200 hover:text-white font-medium text-sm px-6 py-3.5 rounded-md transition-colors no-underline"
            >
              Start a search
            </a>
          </div>
          <p className="mt-5 text-zinc-500 text-sm">
            One role and a flat fee?{" "}
            <Link href="/contingent" className="text-zinc-300 hover:text-white underline underline-offset-4 decoration-zinc-700 hover:decoration-rebel-red">
              See contingent search
            </Link>
            . All four models live on{" "}
            <Link href="/services" className="text-zinc-300 hover:text-white underline underline-offset-4 decoration-zinc-700 hover:decoration-rebel-red">
              services
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-zinc-950 py-16 sm:py-24 border-t border-zinc-900" data-testid="section-fractional-how">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fade-up">
            <div className="mb-12 max-w-2xl">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">HOW IT RUNS</div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                How it runs
              </h2>
              <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
                Three-month minimum. We do not post the retainer on this page because scope changes the number. A strategy call is the right first step.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-4">
            {STEPS.map((step, i) => (
              <ScrollReveal key={step.title} variant="fade-up" delay={i * 80}>
                <GlowCard className="border border-zinc-800 bg-zinc-900/50 p-8 h-full" data-testid={`card-fractional-${step.title.toLowerCase().replace(/\s+/g, "-")}`}>
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
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">WHO THIS IS FOR</div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                This is for you if
              </h2>
              <p className="text-zinc-400 text-sm mt-3 max-w-2xl leading-relaxed">
                Several open reqs, and nobody who owns the process yet. Commercial, cleared, or both.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "You have several open reqs and nobody who owns the process.",
              "Agency fees are stacking and the seats are still empty.",
              "You want to keep the system when we leave.",
              "The plan includes both commercial and cleared roles.",
            ].map((line, i) => (
              <ScrollReveal key={line} variant="fade-up" delay={i * 60}>
                <p className="text-zinc-200 text-base leading-snug border-l-2 border-rebel-red/40 pl-5">{line}</p>
              </ScrollReveal>
            ))}
          </div>
          <p className="mt-8 text-zinc-500 text-sm">
            Defense and clearance work sits on{" "}
            <Link href="/cleared" className="text-zinc-300 hover:text-white underline underline-offset-4 decoration-zinc-700 hover:decoration-rebel-red">
              cleared recruiting for defense teams
            </Link>
            . Candidates can browse{" "}
            <Link href="/jobs" className="text-zinc-300 hover:text-white underline underline-offset-4 decoration-zinc-700 hover:decoration-rebel-red">
              open roles
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-zinc-950 py-16 sm:py-24 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-12">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">NOT SURE</div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                Fractional, contingent, or cleared
              </h2>
              <p className="text-zinc-400 text-sm mt-3">Pick the page that matches the job.</p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-4">
            {COMPARE.map((item, i) => (
              <ScrollReveal key={item.title} variant="fade-up" delay={i * 80}>
                <Link href={item.href} className="block h-full no-underline">
                  <GlowCard className={`p-8 h-full ${item.title === "Fractional" ? "border border-rebel-red/50 bg-rebel-red/5" : "border border-zinc-800 bg-zinc-900/50"}`}>
                    <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-3">{item.tag}</div>
                    <h3 className="font-display text-xl font-bold text-white uppercase mb-3">{item.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.body}</p>
                  </GlowCard>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-rebel-space py-16 sm:py-24 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-12">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">FAQ</div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                Before you sign a retainer
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
          <p className="mt-8 text-zinc-500 text-sm leading-relaxed">
            Longer read:{" "}
            <Link href="/blog/when-contingent-beats-retained-and-embedded" className="text-zinc-300 hover:text-white underline underline-offset-4 decoration-zinc-700 hover:decoration-rebel-red">
              when contingent beats retained and embedded
            </Link>
            . One seat is{" "}
            <Link href="/contingent" className="text-zinc-300 hover:text-white underline underline-offset-4 decoration-zinc-700 hover:decoration-rebel-red">
              contingent search
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-zinc-950 py-16 sm:py-24 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="scale">
            <div className="border border-zinc-800 bg-gradient-to-r from-rebel-red/10 to-transparent p-8 sm:p-10 text-center">
              <p className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">SCOPE IT</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-4">
                Strategy call, or a search for one seat
              </h2>
              <p className="text-zinc-400 text-sm mb-6 max-w-lg mx-auto">
                A fractional engagement starts with a strategy call. A single contingent search starts with Chris Moscato.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/strategy-call" onClick={hapticTap} data-testid="button-fractional-footer-strategy" className="block w-full sm:w-auto">
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
                  Start a search
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
