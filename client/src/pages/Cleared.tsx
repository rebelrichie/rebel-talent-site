import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { BOOK_CHRIS_HREF } from "@/components/ContingentChrisSection";
import InteriorHero from "@/components/InteriorHero";
import ReachPeople from "@/components/ReachPeople";

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
    a: "Both. Defense tech startups that cannot hire like a prime, and contractors who need a pipeline that is not a job board. The same desk hires sales, capture, and business development across the Department of War, the intelligence community, civil agencies, and global programs.",
  },
  {
    q: "Contingent, retained, or fractional?",
    a: "One seat with a flat fee by salary band is contingent, invoiced when the hire starts, with no deposit. Chris Moscato owns that conversation. A defined role with a deadline is retained, at 50% up front and 50% at placement. A standing cleared pipeline is embedded fractional, on a flat monthly retainer. All four models are on the services page.",
  },
  {
    q: "Why do cleared searches stall?",
    a: "The pool is small, the primes pay to keep people, and a slow loop loses the candidate. We source from people who already hold the clearance or can cross over, and we keep the process short enough to compete.",
  },
  {
    q: "Who do I talk to first?",
    a: "Book a strategy call if you are scoping a cleared pipeline or a retained search. Talk to Chris Moscato if the seat is already known and you want contingent. Candidates should use the open roles page, not this one.",
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
    title: "The clearance is the constraint",
    body: "Secret, TS, TS/SCI. We read the req for the actual eligibility, the poly, and whether sponsorship is on the table.",
  },
  {
    title: "Startup speed, prime reality",
    body: "Defense startups lose cleared candidates to slow loops. We run the search like the seat has a clock, because it does.",
  },
  {
    title: "Pick the paper",
    body: "Contingent for one seat. Retained when the date cannot slip. Fractional when the pipeline has to keep running.",
  },
];

const ROLES = [
  "Forward deployed engineers",
  "Cleared software, data, and platform",
  "Sales, Capture, and BD across DoW, IC, civil, and global",
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

      <InteriorHero orbit="cleared">
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] mb-4">
          Cleared &amp; Defense
        </p>
        <h1 data-testid="heading-cleared">
          Cleared recruiting for defense teams.
        </h1>
        <p className="mt-6 max-w-xl text-[17px] leading-[1.6]">
          Defense startups and contractors do not lose cleared seats because nobody exists. They lose them to slow loops and prime money. We hunt Secret through TS/SCI like the seat has a clock. One role is contingent with a flat fee locked to the salary band. A standing cleared pipeline is embedded fractional.
        </p>
        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Link href="/strategy-call" onClick={hapticTap} data-testid="button-cleared-strategy" className="mi-btn">
            Book a strategy call
          </Link>
          <a
            href={BOOK_CHRIS_HREF}
            target="_blank"
            rel="noopener noreferrer"
            onClick={hapticTap}
            data-testid="button-cleared-chris"
            className="text-[15px] font-medium underline underline-offset-4"
          >
            Start a search
          </a>
        </div>
        <p className="mt-5 text-[15px]">
          <Link href="/contingent" className="underline underline-offset-4">
            Contingent flat-fee search
          </Link>
          {" "}for one role.{" "}
          <Link href="/fractional" className="underline underline-offset-4">
            Fractional recruiting
          </Link>
          {" "}when you need the function.{" "}
          <Link href="/services" className="underline underline-offset-4">
            All four models
          </Link>
          .
        </p>
      </InteriorHero>

      <section>
        <div className="band-wrap grid gap-10 py-16 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] mb-3">The work</p>
            <h2 className="text-[36px] leading-[1.05] sm:text-[44px]">
              A cleared req is not a normal req.
            </h2>
            <p className="mt-4 text-[18px] leading-[1.6] font-light">
              Most recruiters have never seen a DD-254. The search has to respect the clearance, the facility, and the fact that the candidate can stay at a prime.
            </p>
          </div>
          <div className="border-t border-current/20">
            {PILLARS.map((step) => (
              <article key={step.title} className="border-b border-current/20 py-6">
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
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] mb-3">Roles</p>
            <h2 className="text-[36px] leading-[1.05] sm:text-[44px]">
              Where the desk goes deep.
            </h2>
            <ul className="mt-8 space-y-4">
              {ROLES.map((line) => (
                <li key={line} className="border-l-2 border-current/30 pl-5 text-[18px] leading-snug">{line}</li>
              ))}
            </ul>
          </div>
          <div className="lg:pt-16">
            <p className="text-[18px] leading-[1.6] font-light">
              Read{" "}
              <Link href="/blog/hiring-cleared-engineers-defense-tech-guide" className="underline underline-offset-4">
                the guide to hiring cleared engineers
              </Link>
              {" "}and{" "}
              <Link href="/blog/defense-tech-forward-deployed-engineering-culture" className="underline underline-offset-4">
                how defense teams hire forward deployed engineers
              </Link>
              . Open seats are on{" "}
              <Link href="/jobs" className="underline underline-offset-4">
                the jobs board
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="band-wrap grid gap-10 py-16 sm:py-20 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] mb-3">FAQ</p>
            <h2 className="text-[36px] leading-[1.05] sm:text-[44px]">
              Before you open a cleared req
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
              Scope the search
            </h2>
            <p className="text-[18px] leading-[1.6] font-light max-w-xl">
              Strategy call for a cleared pipeline or a retained role. Start a search for a contingent seat with the fee locked to the band.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <Link href="/strategy-call" onClick={hapticTap} data-testid="button-cleared-footer-strategy" className="mi-btn">
              Book a strategy call
            </Link>
            <a
              href={BOOK_CHRIS_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={hapticTap}
              className="text-[16px] font-medium underline underline-offset-4"
            >
              Start a search
            </a>
          </div>
        </div>
      </section>

      <ReachPeople />
    </PageLayout>
  );
}
