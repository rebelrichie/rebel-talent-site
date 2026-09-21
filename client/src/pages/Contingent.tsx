import { Link } from "wouter";
import { ArrowRight, Ban, CircleDollarSign, Lock, Scale } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";
import GlowCard from "@/components/GlowCard";
import { BOOK_CHRIS_HREF, EMAIL_CHRIS_HREF } from "@/components/ContingentChrisSection";

function hapticTap() {
  if (navigator.vibrate) navigator.vibrate(15);
}

const FAQS = [
  {
    q: "What is contingent recruiting here?",
    a: "A named search for a defined role. We source, screen, and present candidates. You pay a flat fee set by the salary band when the hire accepts. Chris Moscato runs every new contingent conversation. The work sits under Richie's direction.",
  },
  {
    q: "How does the salary band lock work?",
    a: "You pick the salary range for the role at the start. That range maps to one flat fee. We lock the fee before work begins. If you hire at the top of the range, the fee does not move.",
  },
  {
    q: "When is the fee due?",
    a: "On placement. The invoice follows an accepted offer. No retainer. No monthly minimum. If we do not place, you do not pay a search fee.",
  },
  {
    q: "Do you take a percentage of salary?",
    a: "No. Most agencies bill a cut of first-year pay, so they earn more when the hire costs more. We do not. The fee is flat for the band you locked.",
  },
  {
    q: "How is this different from retained search?",
    a: "Retained is a defined role with a deadline. You pay half down and half on placement so the desk commits from day one. Contingent starts faster and you pay only if we place. Use retained when the hire cannot slip. Use contingent when you want a search without a retainer.",
  },
  {
    q: "How is this different from embedded or fractional recruiting?",
    a: "Embedded or fractional is a monthly retainer. We run the recruiting function from inside your company and hand the system back. Contingent is a search for a seat, not ownership of the function. If you need process, ATS, and coaching as well as hires, start at Services and look at Embedded.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Contingent Recruiting",
  "serviceType": "Contingent recruiting, flat fee by salary band, due on placement",
  "description": "Contingent recruiting with a flat fee by salary band, due on placement. No percentage of salary. Chris Moscato runs new search conversations under Richie's direction. Startups and defense teams. Cleared and noncleared, entry level through executive.",
  "provider": {
    "@type": "Organization",
    "name": "Rebel Talent Systems",
    "url": "https://rebeltalentsystems.com",
  },
  "areaServed": "US",
  "url": "https://rebeltalentsystems.com/contingent",
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

const BAND_STEPS = [
  {
    icon: Scale,
    title: "Pick the band",
    body: "You set the salary range for the role. That range is the band. We do not guess it after the fact.",
  },
  {
    icon: Lock,
    title: "Lock the fee",
    body: "Each band has one flat fee. We lock it before the search starts. Top of range does not raise the fee.",
  },
  {
    icon: CircleDollarSign,
    title: "Pay on placement",
    body: "The fee is due when the candidate accepts. No retainer. No percentage of salary.",
  },
];

const COMPARE = [
  {
    title: "Contingent",
    tag: "THIS PAGE",
    body: "Flat fee by salary band. Due on an accepted offer. Fast start. No long commitment.",
    href: "/contingent",
  },
  {
    title: "Retained",
    tag: "DEFINED ROLE",
    body: "Half down, half on placement. A deadline and a committed desk from day one.",
    href: "/services",
  },
  {
    title: "Embedded",
    tag: "MONTHLY RETAINER",
    body: "We run the function, build the system, and leave you owning it.",
    href: "/services",
  },
];

export default function Contingent() {
  return (
    <PageLayout>
      <PageSEO
        title="Contingent Recruiting | Flat Fee by Salary Band | Rebel Talent"
        description="Contingent recruiting with a flat fee by salary band, due on placement. No percentage of salary. Chris Moscato runs new search conversations. Startups and defense teams."
        path="/contingent"
        ogTitle="Contingent Recruiting | Flat Fee by Salary Band | Rebel Talent"
        ogDescription="Flat fee by salary band. Pay on placement. Chris Moscato runs new contingent search conversations for startups and defense teams."
        ogImage="og-services.png"
        schemas={[serviceSchema, faqSchema]}
        breadcrumbs={[
          { name: "Home", item: "https://rebeltalentsystems.com/" },
          { name: "Services", item: "https://rebeltalentsystems.com/services" },
          { name: "Contingent", item: "https://rebeltalentsystems.com/contingent" },
        ]}
      />

      <section data-testid="section-hero" className="relative overflow-hidden bg-rebel-space">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 50% at 0% 0%, rgba(220,38,38,0.08) 0%, transparent 55%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-16 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 z-10">
          <p className="font-mono text-[11px] sm:text-xs tracking-[0.3em] uppercase text-zinc-400 mb-6 sm:mb-10">
            Contingent Search
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.035em] text-white leading-[1.02] max-w-4xl" data-testid="heading-contingent">
            Contingent recruiting with a flat fee by salary band.
          </h1>
          <p className="mt-6 sm:mt-8 text-base sm:text-xl text-zinc-400 max-w-2xl leading-[1.55]">
            You pick the band. We lock the fee. You pay when the hire accepts. No percentage of salary. Chris Moscato owns every new contingent conversation.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-3">
            <a href={BOOK_CHRIS_HREF} target="_blank" rel="noopener noreferrer" onClick={hapticTap} data-testid="button-talk-chris" className="block sm:inline-block">
              <Button className="font-display tracking-wider uppercase text-sm w-full sm:w-auto">
                Talk to Chris <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <a
              href={EMAIL_CHRIS_HREF}
              onClick={hapticTap}
              data-testid="button-email-chris"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap border border-zinc-700 hover:border-rebel-red/60 text-zinc-200 hover:text-white font-medium text-sm px-6 py-3.5 rounded-md transition-colors no-underline"
            >
              Email Chris
            </a>
          </div>
          <p className="mt-5 text-zinc-500 text-sm">
            Hiring a founding AE or engineer?{" "}
            <Link href="/startups" className="text-zinc-300 hover:text-white underline underline-offset-4 decoration-zinc-700 hover:decoration-rebel-red">
              See the startup desk
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-zinc-950 py-16 sm:py-24 border-t border-zinc-900" data-testid="section-band-lock">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fade-up">
            <div className="mb-12 max-w-2xl">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">THE FEE</div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                Band lock. Then stop talking about money.
              </h2>
              <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
                Most agencies take a cut of salary, so they earn more when your hire costs more. We do not. Each salary range has its own flat fee. The fee stays put if you pay top of range.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-4">
            {BAND_STEPS.map((step, i) => (
              <ScrollReveal key={step.title} variant="fade-up" delay={i * 80}>
                <GlowCard className="border border-zinc-800 bg-zinc-900/50 p-8 h-full" data-testid={`card-band-${step.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  <span className="w-8 h-8 border border-zinc-800 bg-zinc-900/60 flex items-center justify-center text-rebel-red mb-5">
                    <step.icon className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-white uppercase tracking-tight mb-2">{step.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{step.body}</p>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
          <p className="mt-8 text-zinc-500 text-sm flex items-start gap-2">
            <Ban className="w-4 h-4 text-rebel-red shrink-0 mt-0.5" aria-hidden="true" />
            We do not publish fee amounts on this site. Chris will walk the bands on the call.
          </p>
        </div>
      </section>

      <section className="bg-rebel-space py-16 sm:py-24 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fade-up">
            <div className="mb-12">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">WHO THIS IS FOR</div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                A search. Not a retainer.
              </h2>
              <p className="text-zinc-400 text-sm mt-3 max-w-2xl leading-relaxed">
                Startups and defense teams that need a seat filled without buying the whole function. Cleared and noncleared. Entry level through executive. Tech, business process, and GTM.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "You have one or a few open roles and want to start this week.",
              "You will not sign a monthly retainer for a single search.",
              "You want the fee locked to the band, not a cut of the offer.",
              "You want a named human, Chris, not a form that dumps into a pool.",
            ].map((line, i) => (
              <ScrollReveal key={line} variant="fade-up" delay={i * 60}>
                <p className="text-zinc-200 text-base leading-snug border-l-2 border-rebel-red/40 pl-5">{line}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-16 sm:py-24 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-12">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">NOT SURE</div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                Contingent, retained, or embedded
              </h2>
              <p className="text-zinc-400 text-sm mt-3">Short version. Pick the paper that matches the job.</p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-4">
            {COMPARE.map((item, i) => (
              <ScrollReveal key={item.title} variant="fade-up" delay={i * 80}>
                <Link href={item.href} className="block h-full no-underline">
                  <GlowCard className={`p-8 h-full ${item.title === "Contingent" ? "border border-rebel-red/50 bg-rebel-red/5" : "border border-zinc-800 bg-zinc-900/50"}`}>
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
                The questions that decide the search
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

      <section className="bg-zinc-950 py-16 sm:py-24 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="scale">
            <div className="border border-zinc-800 bg-gradient-to-r from-rebel-red/10 to-transparent p-8 sm:p-10 text-center">
              <p className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">CHRIS MOSCATO</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-4">
                Talk to Chris first
              </h2>
              <p className="text-zinc-400 text-sm mb-6 max-w-lg mx-auto">
                Head of Client Acquisition. He runs every new contingent search conversation. Email him or start the thread from here.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href={BOOK_CHRIS_HREF} target="_blank" rel="noopener noreferrer" onClick={hapticTap} data-testid="button-contingent-footer-chris" className="block w-full sm:w-auto">
                  <Button className="font-display tracking-wider uppercase text-sm w-full">
                    Talk to Chris <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
                <a
                  href={EMAIL_CHRIS_HREF}
                  onClick={hapticTap}
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto border border-zinc-700 hover:border-rebel-red/60 text-zinc-200 hover:text-white font-medium text-sm px-6 py-3.5 rounded-md transition-colors no-underline"
                >
                  Email Chris
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
