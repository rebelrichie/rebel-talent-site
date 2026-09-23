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
    q: "How is contingent different from an agency?",
    a: "You still pay on placement. You do not pay a percentage of salary. The fee is locked to the band you approved. Rebel stays on the search. We also leave you the process notes from the search, which most agencies do not.",
  },
  {
    q: "How does the salary band lock work?",
    a: "You choose the salary band for the role. Each band has one flat fee, agreed before we start. Paying at the top of the range does not raise it. We do not publish the band sheet here.",
  },
  {
    q: "When is the contingent fee due?",
    a: "When the candidate accepts. Not when we start, not when we submit, and not on day 30. There is no deposit. A replacement guarantee applies only if we agree to one in writing.",
  },
  {
    q: "Do you take a percentage of salary?",
    a: "No. Not on contingent. Not as a kicker if they negotiate up.",
  },
  {
    q: "How is this different from retained search?",
    a: "Retained is for a date that cannot slip. $10K up front and $20K on start, and retained placements include a guarantee. Contingent is the search without a retainer and without a deposit. A contingent guarantee applies only if we agree to one in writing. If the date cannot slip, start on retained.",
  },
  {
    q: "How is this different from embedded or fractional recruiting?",
    a: "Embedded is when you need the whole function stood up. A monthly retainer, then you keep the system. Contingent is one role, or a few. If that is the job, this is the wrong page.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Contingent Recruiting",
  "serviceType": "Contingent recruiting, flat fee by salary band, due on placement",
  "description": "Contingent recruiting with a flat fee by salary band, due on placement. No percentage of salary. No deposit. Startups and defense teams. Cleared and noncleared, entry level through executive.",
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
    body: "You choose the salary band for the role before we start. We do not set it after the offer.",
  },
  {
    icon: Lock,
    title: "Lock the fee",
    body: "Each band has one flat fee. We lock it before the search starts. Top of range does not raise the fee.",
  },
  {
    icon: CircleDollarSign,
    title: "Pay on placement",
    body: "The invoice is due when the candidate accepts the offer. There is no retainer and no deposit on this model.",
  },
];

const COMPARE = [
  {
    title: "Contingent",
    tag: "THIS PAGE",
    body: "One role, or a few. Flat fee by salary band, due when the hire accepts.",
    href: "/contingent",
  },
  {
    title: "Retained",
    tag: "DEFINED ROLE",
    body: "The date cannot slip. $10K up front and $20K on start.",
    href: "/services",
  },
  {
    title: "Embedded",
    tag: "MONTHLY RETAINER",
    body: "You need the whole function stood up. We run it, then you keep the system.",
    href: "/services",
  },
];

export default function Contingent() {
  return (
    <PageLayout>
      <PageSEO
        title="Contingent Recruiting | Flat Fee by Salary Band | Rebel Talent"
        description="Contingent recruiting with a flat fee by salary band, due on placement. No percentage of salary. No deposit. Startups and defense teams."
        path="/contingent"
        ogTitle="Contingent Recruiting | Flat Fee by Salary Band | Rebel Talent"
        ogDescription="Flat fee by salary band. Pay on placement. No deposit. Contingent search for startups and defense teams."
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
            Contingent search with a flat fee by salary band.
          </h1>
          <p className="mt-6 sm:mt-8 text-base sm:text-xl text-zinc-400 max-w-2xl leading-[1.55]">
            You set the range. We lock the fee. You pay when the hire accepts. No percentage of salary. No deposit.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-3">
            <a href={BOOK_CHRIS_HREF} target="_blank" rel="noopener noreferrer" onClick={hapticTap} data-testid="button-talk-chris" className="block sm:inline-block">
              <Button className="font-display tracking-wider uppercase text-sm w-full sm:w-auto">
                Start a search <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <a
              href={EMAIL_CHRIS_HREF}
              onClick={hapticTap}
              data-testid="button-email-chris"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap border border-zinc-700 hover:border-rebel-red/60 text-zinc-200 hover:text-white font-medium text-sm px-6 py-3.5 rounded-md transition-colors no-underline"
            >
              Email us
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
                How the fee works
              </h2>
              <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
                You choose the salary band for the role. Each band has one flat fee, agreed before we start. Paying at the top of the range does not raise it. The invoice is due when the candidate accepts the offer. There is no retainer and no deposit on this model.
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
            We do not publish the band sheet here. The numbers get walked on the call.
          </p>
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
                One role, or a few. Cleared and noncleared. Entry level through executive.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "You have one role, or a few, and you want to start this week.",
              "You do not want a monthly retainer for a single search.",
              "You want the cost tied to the range you already approved, not to the final offer.",
              "You want a named person on the account.",
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
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">NOT THIS PAGE IF</div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                Contingent, retained, or embedded
              </h2>
              <p className="text-zinc-400 text-sm mt-3 max-w-2xl mx-auto">
                The date cannot slip. That is retained. You need the whole function stood up. That is embedded. Hiring a founding AE or engineer for a venture-backed team? Start on the startup desk, then come back here for the fee structure.
              </p>
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
              <p className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">CONTINGENT SEARCH</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-4">
                Start a search
              </h2>
              <p className="text-zinc-400 text-sm mb-6 max-w-lg mx-auto">
                Flat fee by salary band, due when the hire accepts. Email us or book the call from here.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href={BOOK_CHRIS_HREF} target="_blank" rel="noopener noreferrer" onClick={hapticTap} data-testid="button-contingent-footer-chris" className="block w-full sm:w-auto">
                  <Button className="font-display tracking-wider uppercase text-sm w-full">
                    Start a search <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
                <a
                  href={EMAIL_CHRIS_HREF}
                  onClick={hapticTap}
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto border border-zinc-700 hover:border-rebel-red/60 text-zinc-200 hover:text-white font-medium text-sm px-6 py-3.5 rounded-md transition-colors no-underline"
                >
                  Email us
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
