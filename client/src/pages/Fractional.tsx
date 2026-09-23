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
    q: "What is fractional recruiting here?",
    a: "A monthly retainer. We sit inside the company and run the talent function: hiring plan, sourcing, process, ATS, and hiring-manager coaching. Richie is on the engagement. When we leave, you keep the system.",
  },
  {
    q: "How is this different from contingent search?",
    a: "Contingent is one seat. Flat fee by salary band, due on placement. Chris Moscato runs those conversations. Fractional is the function, not a single req. If you have one role and do not want a retainer, start on the contingent page.",
  },
  {
    q: "How long does an engagement last?",
    a: "The initial commitment is 90 days. After that it is month to month, with two weeks notice to pause or end. No 12-month lock-in.",
  },
  {
    q: "Do you publish the retainer?",
    a: "No. Scope, role volume, and whether you need execution or leadership change the number. We scope it on a strategy call. We do not put a rate card on this page.",
  },
  {
    q: "Do you cover cleared roles?",
    a: "Yes. Startups and defense teams. Cleared and noncleared, entry level through executive. A cleared pipeline that has to hold is often a fractional engagement, not a one-off search. The cleared page is the defense desk.",
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
    body: "Workforce plan, role order, and what good looks like. We write it with you, then we hire against it.",
  },
  {
    icon: RefreshCw,
    title: "Run the desk",
    body: "Sourcing, screens, interviews, and offers. In your Slack, your ATS, and your hiring-manager meetings.",
  },
  {
    icon: Undo2,
    title: "Hand it back",
    body: "ATS, scorecards, playbooks, and the pipeline stay with you. The point is a function you can run.",
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
    body: "Flat fee by salary band. Due on placement. Chris runs the conversation.",
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
            Fractional recruiting that runs the function, then hands it back.
          </h1>
          <p className="mt-6 sm:mt-8 text-base sm:text-xl text-zinc-400 max-w-2xl leading-[1.55]">
            A monthly retainer. We sit inside the company, fill the roles, and leave the ATS, the process, and the playbooks with you. Richie is on the engagement. One seat, no retainer: that is contingent, and Chris Moscato runs it.
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
              Talk to Chris
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
                Inside the company. Not beside it.
              </h2>
              <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
                This is not a staffing firm with a new name. We own the hiring plan and the execution, then we hand the machine back.
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
                Several open roles. No function yet.
              </h2>
              <p className="text-zinc-400 text-sm mt-3 max-w-2xl leading-relaxed">
                Series A through C teams scaling past founder-led hiring, and defense teams that need a cleared pipeline instead of another agency invoice.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "You have more than one req and no one who owns the process.",
              "Agency fees are stacking and the hires still slip.",
              "You want the ATS, scorecards, and playbooks when the engagement ends.",
              "Cleared and commercial roles are both on the plan.",
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
            Longer reads:{" "}
            <Link href="/blog/what-is-fractional-recruiting" className="text-zinc-300 hover:text-white underline underline-offset-4 decoration-zinc-700 hover:decoration-rebel-red">
              what fractional recruiting is
            </Link>
            {" "}and{" "}
            <Link href="/blog/how-much-does-fractional-recruiting-cost" className="text-zinc-300 hover:text-white underline underline-offset-4 decoration-zinc-700 hover:decoration-rebel-red">
              how fractional recruiting cost compares
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
                Strategy call, or Chris for one seat
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
