import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";

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
    "serviceType": "Contingent recruiting, flat fee by salary band, paid on accept",
    "description": "One role. Flat fee by salary band, paid when the candidate accepts. No percentage of salary and no deposit.",
    "provider": serviceProvider,
    "areaServed": "US",
    "url": "https://rebeltalentsystems.com/contingent",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Retained Search",
    "serviceType": "Retained search, $10K up front and $20K on start",
    "description": "A defined role with a deadline. $10K up front and $20K on start. Executive and specialized technical searches, cleared and uncleared.",
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
    kicker: "Contingent",
    title: "One role, one fee.",
    body: "You set the salary range. We lock a flat fee to that band before the search starts, and you pay when the candidate accepts. There is no deposit and no percentage of salary. The contingent page has the long version.",
    detailsHref: "/contingent",
    detailsLabel: "Contingent search",
    ctaHref: "/strategy-call?engagement=contingent",
  },
  {
    id: "retained",
    kicker: "Retained",
    title: "A defined role, with a deadline.",
    body: "The fee is $10K up front and $20K on start. It fits executive and specialized technical searches, cleared or uncleared. The search stays with us from the day it opens through the accepted offer.",
    ctaHref: "/strategy-call?engagement=retained",
  },
  {
    id: "embedded",
    kicker: "Embedded / Fractional",
    title: "The desk, then the handoff.",
    body: "A monthly retainer, with three months to start. We run recruiting from inside the company, on your tools, with your hiring managers. When the engagement ends, you keep the ATS setup, the scorecards, and the playbooks.",
    detailsHref: "/fractional",
    detailsLabel: "Embedded recruiting",
    ctaHref: "/strategy-call?engagement=fractional",
  },
  {
    id: "advisory",
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
        description="Four ways to engage Rebel Talent: contingent, retained, embedded, and advisory. Contingent is a flat fee by salary band, paid when the candidate accepts."
        path="/services"
        ogTitle="How we engage | Rebel Talent Systems"
        ogDescription="Four ways to engage Rebel Talent: contingent, retained, embedded, and advisory. Contingent is a flat fee by salary band, paid when the candidate accepts."
        ogImage="og-services.png"
        schemas={serviceSchemas}
        breadcrumbs={[
          { name: "Home", item: "https://rebeltalentsystems.com/" },
          { name: "How we engage", item: "https://rebeltalentsystems.com/services" },
        ]}
      />

      <section data-testid="section-hero" className="relative overflow-hidden bg-rebel-space">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 45% at 0% 0%, rgba(220,38,38,0.08) 0%, transparent 55%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 pt-16 sm:pt-24 lg:pt-28 pb-12 sm:pb-16">
          <p className="font-mono text-[11px] sm:text-xs tracking-[0.28em] uppercase text-zinc-400 mb-6 sm:mb-8">
            How we engage
          </p>
          <h1
            className="font-display font-black text-white leading-[1.05] tracking-tight max-w-3xl"
            style={{ fontSize: "clamp(2.2rem, 4.6vw, 4rem)" }}
            data-testid="heading-services"
          >
            Four ways to take the work.
          </h1>
          <p className="mt-6 sm:mt-8 text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
            Contingent covers one role. Retained covers a defined role with a deadline. Embedded covers the desk. Advisory covers the plan before you spend on a search. You keep the scorecards, the process, and the record.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 border-t border-zinc-900" style={{ background: "#0E0D11" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
            {OFFERINGS.map((offer) => (
              <article
                key={offer.id}
                id={offer.id}
                data-testid={`card-service-${offer.id}`}
                className="flex flex-col h-full border border-zinc-800 border-t-2 border-t-rebel-red bg-zinc-900/40 p-6 sm:p-8"
              >
                <p className="font-mono text-rebel-red text-[11px] tracking-[0.22em] uppercase mb-3">
                  {offer.kicker}
                </p>
                <h2 className="font-display text-2xl font-bold text-white tracking-tight mb-4">
                  {offer.title}
                </h2>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
                  {offer.body}
                </p>
                <div className="mt-auto flex flex-col sm:flex-row sm:items-center gap-4">
                  <Link
                    href={offer.ctaHref}
                    data-testid={`button-service-${offer.id}`}
                    className="inline-flex items-center justify-center gap-2 bg-rebel-red hover:bg-red-700 text-white font-semibold text-sm px-5 py-3 rounded-full transition-colors no-underline"
                  >
                    Book a strategy call <ArrowRight className="w-4 h-4 shrink-0" />
                  </Link>
                  {offer.detailsHref && (
                    <Link
                      href={offer.detailsHref}
                      data-testid={`link-service-${offer.id}`}
                      className="text-sm text-zinc-300 hover:text-white underline underline-offset-4 decoration-zinc-700 hover:decoration-rebel-red"
                    >
                      {offer.detailsLabel}
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 text-sm sm:text-base text-zinc-400 leading-relaxed max-w-3xl">
            Roles run from individual contributor through executive, across technical, go-to-market, and operations work. Series A through C, and defense teams. Cleared hiring, including Secret, TS, and TS/SCI, stays on its{" "}
            <Link
              href="/cleared"
              className="text-zinc-200 hover:text-white underline underline-offset-4 decoration-zinc-700 hover:decoration-rebel-red"
            >
              own page
            </Link>
            .
          </p>
        </div>
      </section>

      <section data-testid="section-proof" className="py-14 sm:py-20 border-t border-zinc-900 bg-rebel-space">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-12">
          <p className="font-mono text-rebel-red text-[11px] tracking-[0.22em] uppercase mb-3">
            Proof
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            From recent work.
          </h2>
          <p className="text-zinc-300 text-base leading-relaxed">
            EarthDaily Federal made nine placements. About $294K in agency fees were avoided, at about 335% confirmed ROI, with an average time to hire under 30 days. Kalibri Labs signed a machine learning hire in 34 days, about $20K under the agency quote. Legal Managed Services made 20 go-to-market hires in 24 months, with 90% retention.
          </p>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-zinc-200 hover:text-white no-underline"
          >
            See the work <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section data-testid="section-cta" className="py-16 sm:py-24 border-t border-zinc-900" style={{ background: "#0E0D11" }}>
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-12">
          <p className="font-mono text-rebel-red text-[11px] tracking-[0.22em] uppercase mb-3">
            How to start
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Bring the role, or the question.
          </h2>
          <p className="text-zinc-300 text-base leading-relaxed mb-8">
            Thirty minutes is enough to tell you which of the four fits. Bring the open role, or the question you need answered before you hire. If none of them fit, we will say so.
          </p>
          <Link
            href="/strategy-call"
            data-testid="button-services-cta"
            className="inline-flex items-center justify-center gap-2 bg-rebel-red hover:bg-red-700 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full transition-colors no-underline"
          >
            Book a strategy call <ArrowRight className="w-4 h-4 shrink-0" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
