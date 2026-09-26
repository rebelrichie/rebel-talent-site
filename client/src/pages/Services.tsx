import { Link } from "wouter";
import { ArrowRight, CalendarClock, Compass, Crosshair, Waypoints } from "lucide-react";
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
    primary: true,
    icon: Crosshair,
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
    primary: true,
    icon: Waypoints,
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
    primary: false,
    icon: CalendarClock,
    kicker: "Retained",
    title: "A defined role, with a deadline.",
    body: "The fee is 50% up front and 50% at placement. It fits executive and specialized technical searches, cleared or uncleared. The search stays with us from the day it opens through the accepted offer.",
    ctaHref: "/strategy-call?engagement=retained",
  },
  {
    id: "advisory",
    index: "04",
    primary: false,
    icon: Compass,
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

      <section data-testid="section-hero" className="space-hero space-hero--services relative overflow-hidden min-h-[32rem] sm:min-h-[36rem]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 3,
            background: "radial-gradient(ellipse 70% 50% at 0% 0%, rgba(247,26,41,0.07) 0%, transparent 55%)",
          }}
        />
        <div className="space-hero__command" aria-hidden="true" />
        <div className="space-hero__grid" aria-hidden="true" />
        <svg
          className="space-hero__nodes"
          viewBox="0 0 1200 700"
          preserveAspectRatio="xMaxYMid slice"
          aria-hidden="true"
        >
          <g fill="none" stroke="rgba(150, 198, 255, 0.62)" strokeWidth="1.05">
            <line x1="860" y1="150" x2="990" y2="110" />
            <line x1="990" y1="110" x2="1105" y2="190" />
            <line x1="860" y1="150" x2="980" y2="250" />
            <line x1="980" y1="250" x2="1105" y2="190" />
            <line x1="1105" y1="190" x2="1148" y2="310" />
            <line x1="980" y1="250" x2="1040" y2="390" />
            <line x1="1040" y1="390" x2="1148" y2="310" />
          </g>
          <g>
            <circle cx="860" cy="150" r="1.6" fill="rgba(198, 220, 255, 0.8)" />
            <circle cx="990" cy="110" r="1.4" fill="rgba(186, 164, 255, 0.75)" />
            <circle cx="1105" cy="190" r="2.2" fill="rgba(210, 230, 255, 0.9)" />
            <circle cx="980" cy="250" r="1.7" fill="rgba(198, 220, 255, 0.8)" />
            <circle cx="1148" cy="310" r="1.5" fill="rgba(186, 164, 255, 0.72)" />
            <circle cx="1040" cy="390" r="2" fill="rgba(210, 230, 255, 0.88)" />
          </g>
        </svg>
        <div className="space-hero__scan" aria-hidden="true" />
        <div className="space-hero__scrim" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 pt-16 sm:pt-24 lg:pt-28 pb-16 sm:pb-20">
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

      <section className="engage-band py-16 sm:py-24" style={{ background: "#0E0D11" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {OFFERINGS.map((offer) => {
              const Icon = offer.icon;
              return (
              <article
                key={offer.id}
                id={offer.id}
                data-testid={`card-service-${offer.id}`}
                className={`engage-card flex flex-col h-full p-6 sm:p-8 ${offer.primary ? "engage-card--primary" : ""}`}
              >
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="engage-card__mark" aria-hidden="true">
                      <Icon className="w-4 h-4" strokeWidth={1.75} />
                    </span>
                    <p className="font-mono text-rebel-red text-[11px] tracking-[0.22em] uppercase">
                      {offer.kicker}
                    </p>
                  </div>
                  <span className="engage-card__index font-mono text-[11px] tracking-[0.2em] shrink-0">{offer.index}</span>
                </div>
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
              );
            })}
          </div>

          <p className="mt-12 sm:mt-14 pt-8 border-t border-white/10 text-sm sm:text-base text-zinc-400 leading-relaxed max-w-3xl">
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

      <section data-testid="section-proof" className="engage-band engage-surface py-16 sm:py-24">
        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="engage-panel engage-panel--proof px-6 py-8 sm:px-10 sm:py-10">
          <p className="font-mono text-rebel-red text-[11px] tracking-[0.22em] uppercase mb-3">
            Proof
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            From recent work.
          </h2>
          <p className="text-zinc-300 text-base leading-relaxed">
            EarthDaily Federal made eleven placements. About $550K in agency fees were avoided, a 4.8x return, with an average time to hire under 30 days. Kalibri Labs signed a machine learning hire in 34 days, about $20K under the agency quote. Legal Managed Services made 20 go-to-market hires in 24 months, with 90% retention.
          </p>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-zinc-200 hover:text-white no-underline"
          >
            See the work <ArrowRight className="w-4 h-4" />
          </Link>
          </div>
        </div>
      </section>

      <section data-testid="section-cta" className="engage-band engage-surface py-16 sm:py-24">
        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="engage-panel engage-panel--cta px-6 py-8 sm:px-10 sm:py-12">
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
        </div>
      </section>
    </PageLayout>
  );
}
