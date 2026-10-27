import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import ReachPeople from "@/components/ReachPeople";

const serviceProvider = {
  "@type": "Organization",
  "name": "Rebel Talent Systems",
  "url": "https://rebeltalentsystems.com",
};

const serviceSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Contingent Recruiting",
    "serviceType": "Contingent recruiting, flat fee by salary band, billed when the hire starts",
    "description": "One role. Flat fee by salary band, billed when the hire starts. No percentage of salary and no deposit.",
    "provider": serviceProvider,
    "areaServed": "US",
    "url": "https://rebeltalentsystems.com/contingent",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Retained Search",
    "serviceType": "Retained search, 50% up front and 50% at placement",
    "description": "A defined role with a deadline. 50% up front and 50% at placement. Executive and specialized technical searches, cleared and uncleared.",
    "provider": serviceProvider,
    "areaServed": "US",
    "url": "https://rebeltalentsystems.com/services",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Embedded / Fractional Recruiting",
    "serviceType": "Embedded and fractional recruiting on a monthly retainer",
    "description": "A monthly retainer. We run recruiting from inside the company, then leave the ATS, the scorecards, and the playbooks.",
    "provider": serviceProvider,
    "areaServed": "US",
    "url": "https://rebeltalentsystems.com/fractional",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Talent Advisory",
    "serviceType": "Talent advisory before a search",
    "description": "Fixed-scope work on the hiring plan, compensation, or the tools, priced before a search starts.",
    "provider": serviceProvider,
    "areaServed": "US",
    "url": "https://rebeltalentsystems.com/advisory",
  },
];

const OFFERINGS = [
  {
    id: "contingent",
    index: "01",
    kicker: "Contingent",
    title: "One role, one fee.",
    body: "You set the salary range. We lock a flat fee to that band before the search starts, and you are billed when the hire starts. There is no deposit and no percentage of salary. The contingent page has the long version.",
    detailsHref: "/contingent",
    detailsLabel: "Contingent search",
    ctaHref: "/strategy-call?engagement=contingent",
  },
  {
    id: "embedded",
    index: "02",
    kicker: "Embedded / Fractional",
    title: "The desk, then the handoff.",
    body: "A monthly retainer, with three months to start. We run recruiting from inside the company, on your tools, with your hiring managers. When the engagement ends, you keep the ATS setup, the scorecards, and the playbooks.",
    detailsHref: "/fractional",
    detailsLabel: "Embedded recruiting",
    ctaHref: "/strategy-call?engagement=fractional",
  },
  {
    id: "retained",
    index: "03",
    kicker: "Retained",
    title: "A defined role, with a deadline.",
    body: "The fee is 50% up front and 50% at placement. It fits executive and specialized technical searches, cleared or uncleared. The search stays with us from the day it opens through the accepted offer.",
    ctaHref: "/strategy-call?engagement=retained",
  },
  {
    id: "advisory",
    index: "04",
    kicker: "Advisory",
    title: "The plan, before the search.",
    body: "This is the work before a search: a hiring plan, compensation, interview design, or a hard look at the tools. The scope is fixed and priced up front. It is for teams that need a judgment, not a slate of candidates.",
    detailsHref: "/advisory",
    detailsLabel: "Advisory",
    ctaHref: "/strategy-call?engagement=advisory",
  },
];

export default function Services() {
  return (
    <PageLayout>
      <PageSEO
        title="How we engage | Rebel Talent Systems"
        description="Four ways to engage Rebel Talent: contingent, retained, embedded, and advisory. Contingent is a flat fee by salary band, billed when the hire starts."
        path="/services"
        ogTitle="How we engage | Rebel Talent Systems"
        ogDescription="Four ways to engage Rebel Talent: contingent, retained, embedded, and advisory. Contingent is a flat fee by salary band, billed when the hire starts."
        ogImage="og-services.png"
        schemas={serviceSchemas}
        breadcrumbs={[
          { name: "Home", item: "https://rebeltalentsystems.com/" },
          { name: "How we engage", item: "https://rebeltalentsystems.com/services" },
        ]}
      />

      <section data-testid="section-hero" className="mi-band bg-[#003E53]">
        <div className="max-w-[1140px] mx-auto px-5 py-16 sm:py-20">
          <h1
            className="text-white max-w-4xl"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 400, lineHeight: 1.15 }}
            data-testid="heading-services"
          >
            Four ways to take the work.
          </h1>
          <p className="mt-5 text-white/90 text-[18px] leading-[1.6] font-light max-w-3xl">
            Contingent covers one role. Retained covers a defined role with a deadline. Embedded covers the desk. Advisory covers the plan before you spend on a search. You keep the scorecards, the process, and the record.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-[1140px] mx-auto px-5">
          {OFFERINGS.map((offer) => (
            <article
              key={offer.id}
              id={offer.id}
              data-testid={`card-service-${offer.id}`}
              className="grid md:grid-cols-[88px_1fr] gap-3 md:gap-8 py-10 border-b border-[#e4e7ee]"
            >
              <p className="text-2xl font-bold tracking-[-0.04em] text-[#C8102E]">{offer.index}</p>
              <div>
                <p className="text-[16px] text-[#272c30] mb-2">{offer.kicker}</p>
                <h2 className="text-[25px] leading-tight text-[#137287] mb-3">
                  {offer.title}
                </h2>
                <p className="text-[#272c30] text-[18px] leading-[1.6] font-light max-w-2xl mb-5">
                  {offer.body}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <Link
                    href={offer.ctaHref}
                    data-testid={`button-service-${offer.id}`}
                    className="mi-btn"
                  >
                    Book a strategy call
                  </Link>
                  {offer.detailsHref && (
                    <Link
                      href={offer.detailsHref}
                      data-testid={`link-service-${offer.id}`}
                      className="text-[16px] text-[#137287] underline underline-offset-4"
                    >
                      {offer.detailsLabel}
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
          <p className="py-10 text-sm sm:text-base text-[#5c6573] leading-relaxed max-w-3xl">
            Roles run from individual contributor through executive, across technical, go-to-market, and operations work. Series A through C, and defense teams. Cleared hiring, including Secret, TS, and TS/SCI, stays on its{" "}
            <Link href="/cleared" className="text-[#12161c] underline underline-offset-4">
              own page
            </Link>
            .
          </p>
        </div>
      </section>

      <section data-testid="section-proof" className="bg-white border-t border-[#e4e7ee]">
        <div className="max-w-[1140px] mx-auto px-5 py-14 sm:py-16">
          <h2 className="text-[34px] leading-none text-[#137287] mb-4">
            From recent work.
          </h2>
          <p className="text-[#272c30] text-[18px] leading-[1.6] font-light max-w-3xl">
            EarthDaily Federal made eleven placements. About $394K in agency fees were avoided, a 3.4x return, with an average time to hire under 30 days. Kalibri Labs signed a machine learning hire in 34 days, about $20K under the agency quote. Legal Managed Services made 20 go-to-market hires in 24 months, with 90% retention.
          </p>
          <Link href="/case-studies" className="inline-flex mt-6 text-[16px] font-medium text-[#137287] underline underline-offset-4">
            See the work
          </Link>
        </div>
      </section>

      <section data-testid="section-cta" className="bg-white border-t border-[#e4e7ee]">
        <div className="max-w-[1140px] mx-auto px-5 py-14 sm:py-16">
          <h2 className="text-[34px] leading-none text-[#137287] mb-4">
            Bring the role, or the question.
          </h2>
          <p className="text-[#272c30] text-[18px] leading-[1.6] font-light mb-8 max-w-xl">
            Thirty minutes is enough to tell you which of the four fits. Bring the open role, or the question you need answered before you hire. If none of them fit, we will say so.
          </p>
          <Link
            href="/strategy-call"
            data-testid="button-services-cta"
            className="mi-btn"
          >
            Book a strategy call
          </Link>
        </div>
      </section>

      <ReachPeople />
    </PageLayout>
  );
}
