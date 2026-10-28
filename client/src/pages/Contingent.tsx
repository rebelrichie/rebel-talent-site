import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { BOOK_CHRIS_HREF, EMAIL_CHRIS_HREF } from "@/components/ContingentChrisSection";
import InteriorHero from "@/components/InteriorHero";
import ReachPeople from "@/components/ReachPeople";

function hapticTap() {
  if (navigator.vibrate) navigator.vibrate(15);
}

const FAQS = [
  {
    q: "How is contingent different from an agency?",
    a: "You are billed when the hire starts. You do not pay a percentage of salary. The fee is locked to the band you approved. Rebel stays on the search. We also leave you the process notes from the search, which most agencies do not.",
  },
  {
    q: "How does the salary band lock work?",
    a: "You choose the salary band for the role. Each band has one flat fee, agreed before we start. Paying at the top of the range does not raise it. We do not publish the band sheet here.",
  },
  {
    q: "When is the contingent fee due?",
    a: "When the hire starts. Not when they accept the offer, not when we submit, and not on day 30. There is no deposit. A replacement guarantee applies only if we agree to one in writing.",
  },
  {
    q: "Do you take a percentage of salary?",
    a: "No. Not on contingent. Not as a kicker if they negotiate up.",
  },
  {
    q: "How is this different from retained search?",
    a: "Retained is for a date that cannot slip. 50% up front and 50% at placement. Contingent is one flat fee by salary band, invoiced when the hire starts, with no deposit and no second invoice when the offer is accepted. If the date cannot slip, start on retained.",
  },
  {
    q: "How is this different from embedded or fractional recruiting?",
    a: "Embedded is the whole function on a monthly retainer. You keep the ATS, scorecards, and playbooks. Rebel Command stays with us. Contingent is one role, or a few. If you need the function, start on the fractional page.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Contingent Recruiting",
  "serviceType": "Contingent recruiting, flat fee by salary band, billed when the hire starts",
  "description": "Contingent recruiting with a flat fee by salary band, billed when the hire starts. No percentage of salary. No deposit. Startups and defense teams. Cleared and noncleared, entry level through executive.",
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
    title: "Pick the band",
    body: "You choose the salary band for the role before we start. We do not set it after the offer.",
  },
  {
    title: "Lock the fee",
    body: "Each band has one flat fee. We lock it before the search starts. Top of range does not raise the fee.",
  },
  {
    title: "Billed when they start",
    body: "The invoice is due when the hire starts. There is no retainer and no deposit on this model.",
  },
];

const COMPARE = [
  {
    title: "Contingent",
    tag: "THIS PAGE",
    body: "One role, or a few. Flat fee by salary band, billed when the hire starts.",
    href: "/contingent",
  },
  {
    title: "Retained",
    tag: "DEFINED ROLE",
    body: "The date cannot slip. 50% up front and 50% at placement.",
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
        description="Contingent recruiting with a flat fee by salary band, billed when the hire starts. No percentage of salary. No deposit. Startups and defense teams."
        path="/contingent"
        ogTitle="Contingent Recruiting | Flat Fee by Salary Band | Rebel Talent"
        ogDescription="Flat fee by salary band. Billed when the hire starts. No deposit. Contingent search for startups and defense teams."
        ogImage="og-services.png"
        schemas={[serviceSchema, faqSchema]}
        breadcrumbs={[
          { name: "Home", item: "https://rebeltalentsystems.com/" },
          { name: "Services", item: "https://rebeltalentsystems.com/services" },
          { name: "Contingent", item: "https://rebeltalentsystems.com/contingent" },
        ]}
      />

      <InteriorHero>
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] mb-4">
          Contingent Search
        </p>
        <h1 data-testid="heading-contingent">
          Contingent search with a flat fee by salary band.
        </h1>
        <p className="mt-6 max-w-xl text-[17px] leading-[1.6]">
          You set the range. We lock the fee. You are billed when the hire starts. No percentage of salary. No deposit.
        </p>
        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <a href={BOOK_CHRIS_HREF} target="_blank" rel="noopener noreferrer" onClick={hapticTap} data-testid="button-talk-chris" className="mi-btn">
            Start a search
          </a>
          <a
            href={EMAIL_CHRIS_HREF}
            onClick={hapticTap}
            data-testid="button-email-chris"
            className="text-[15px] font-medium underline underline-offset-4"
          >
            Email us
          </a>
        </div>
        <p className="mt-5 text-[15px]">
          Hiring a founding AE or engineer?{" "}
          <Link href="/startups" className="underline underline-offset-4">
            See the startup desk
          </Link>
          .
        </p>
      </InteriorHero>

      <section data-testid="section-band-lock">
        <div className="band-wrap grid gap-10 py-16 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] mb-3">The fee</p>
            <h2 className="text-[36px] leading-[1.05] sm:text-[44px]">
              How the fee works
            </h2>
            <p className="mt-4 text-[18px] leading-[1.6] font-light">
              You choose the salary band for the role. Each band has one flat fee, agreed before we start. Paying at the top of the range does not raise it. The invoice is due when the hire starts. There is no retainer and no deposit on this model.
            </p>
            <p className="mt-6 text-[16px] leading-relaxed">
              We do not publish the band sheet here. The numbers get walked on the call.
            </p>
          </div>
          <div className="border-t border-current/20">
            {BAND_STEPS.map((step) => (
              <article key={step.title} data-testid={`card-band-${step.title.toLowerCase().replace(/\s+/g, "-")}`} className="border-b border-current/20 py-6">
                <h3 className="text-[22px] leading-tight mb-2">{step.title}</h3>
                <p className="text-[17px] leading-[1.6] font-light">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="band-wrap grid gap-10 py-16 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] mb-3">Who this is for</p>
            <h2 className="text-[36px] leading-[1.05] sm:text-[44px]">
              This is for you if
            </h2>
            <p className="mt-4 text-[18px] leading-[1.6] font-light">
              One role, or a few. Cleared and noncleared. Entry level through executive.
            </p>
          </div>
          <ul className="space-y-4 lg:pt-16">
            {[
              "You have one role, or a few, and you want to start this week.",
              "You do not want a monthly retainer for a single search.",
              "You want the cost tied to the range you already approved, not to the final offer.",
              "You want a named person on the account.",
            ].map((line) => (
              <li key={line} className="border-l-2 border-current/30 pl-5 text-[18px] leading-snug">{line}</li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="band-wrap py-16 sm:py-20">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] mb-3">Not this page if</p>
          <h2 className="text-[36px] leading-[1.05] sm:text-[44px] max-w-3xl">
            Contingent, retained, or embedded
          </h2>
          <p className="mt-4 max-w-3xl text-[18px] leading-[1.6] font-light">
            The date cannot slip. That is retained. You need the whole function stood up. That is embedded. Hiring a founding AE or engineer for a venture-backed team? Start on the startup desk, then come back here for the fee structure.
          </p>
          <div className="mt-10 grid gap-8 border-t border-current/20 sm:grid-cols-3">
            {COMPARE.map((item) => (
              <Link key={item.title} href={item.href} className="block border-t border-current/20 pt-6 no-underline sm:border-t-0 sm:pt-0">
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] mb-2">{item.tag}</p>
                <h3 className="text-[22px] mb-2">{item.title}</h3>
                <p className="text-[17px] leading-[1.6] font-light">{item.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="band-wrap grid gap-10 py-16 sm:py-20 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] mb-3">FAQ</p>
            <h2 className="text-[36px] leading-[1.05] sm:text-[44px]">
              The questions that decide the search
            </h2>
          </div>
          <Accordion type="multiple" className="border-t border-current/20">
            {FAQS.map((faq, i) => (
              <AccordionItem key={faq.q} value={`faq-${i}`} className="border-b border-current/20">
                <AccordionTrigger className="py-5 text-left text-[18px] font-semibold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[17px] leading-[1.6] font-light">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section data-testid="section-cta" className="band-red">
        <div className="band-wrap grid gap-8 py-16 sm:py-20 lg:grid-cols-2 lg:items-end">
          <div>
            <h2 className="text-[40px] leading-[1.05] mb-4 sm:text-[44px]">
              Start a search
            </h2>
            <p className="text-[18px] leading-[1.6] font-light max-w-xl">
              Flat fee by salary band, billed when the hire starts. Email us or book the call from here.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <a href={BOOK_CHRIS_HREF} target="_blank" rel="noopener noreferrer" onClick={hapticTap} data-testid="button-contingent-footer-chris" className="mi-btn">
              Start a search
            </a>
            <a href={EMAIL_CHRIS_HREF} onClick={hapticTap} className="text-[16px] font-medium underline underline-offset-4">
              Email us
            </a>
          </div>
        </div>
      </section>

      <ReachPeople />
    </PageLayout>
  );
}
