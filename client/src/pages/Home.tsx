import { Link } from "wouter";
import { ArrowRight, Shield } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import ContingentChrisSection from "@/components/ContingentChrisSection";

const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Rebel Talent Systems",
  "description": "Rebel Talent Systems fills open roles and leaves the hiring system in place. Contingent search or an embedded desk, for Series A through C companies and defense teams. Technical, go-to-market, and operations. Cleared and uncleared.",
  "url": "https://rebeltalentsystems.com",
  "logo": "https://rebeltalentsystems.com/logo.png",
  "telephone": "+1-202-524-0255",
  "email": "richie@rebeltalentsystems.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Roswell",
    "addressRegion": "GA",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://linkedin.com/in/richielampani",
    "https://rebeltalentsystems.com"
  ],
  "areaServed": ["United States", "Remote"],
  "serviceType": [
    "Contingent Recruiting",
    "Retained Search",
    "Embedded Recruiting",
    "Fractional Recruiting",
    "Startup Recruiting",
    "Defense Recruiting",
    "Cleared Hiring (Secret, TS, TS/SCI)",
    "Go-to-market Hiring",
    "Talent Advisory"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "How we engage",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Contingent Recruiting",
          "description": "One role. Flat fee by salary band, invoiced when the hire starts. No percentage of salary. No deposit.",
          "url": "https://rebeltalentsystems.com/contingent"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Embedded / Fractional Recruiting",
          "description": "A monthly retainer. We run the recruiting desk from inside the company and leave the system behind.",
          "url": "https://rebeltalentsystems.com/fractional"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Retained Search",
          "description": "A defined role with a deadline. 50% up front and 50% at placement.",
          "url": "https://rebeltalentsystems.com/services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Talent Advisory",
          "description": "Fixed-scope work on the hiring plan before you spend on a search.",
          "url": "https://rebeltalentsystems.com/advisory"
        }
      }
    ]
  }
};

const PATHS = [
  {
    id: "contingent",
    kicker: "Contingent",
    title: "Fill one seat.",
    body: "One role. The fee is flat, set by the salary band, and invoiced when the hire starts. There is no percentage of salary and no deposit. The long version is on the contingent page.",
    detailsHref: "/contingent",
    detailsLabel: "View contingent details",
    ctaHref: "/strategy-call?engagement=contingent",
    testId: "path-contingent",
    ctaTestId: "button-strategy-contingent",
    detailsTestId: "link-contingent-details",
  },
  {
    id: "embedded",
    kicker: "Embedded / Fractional",
    title: "Keep the system.",
    body: "We sit inside the company and run the recruiting desk on a monthly retainer. The work covers the open roles, the process, and the handoff. You keep the ATS, the scorecards, and the playbooks.",
    detailsHref: "/fractional",
    detailsLabel: "View embedded recruiting",
    ctaHref: "/strategy-call?engagement=fractional",
    testId: "path-embedded",
    ctaTestId: "button-strategy-embedded",
    detailsTestId: "link-fractional-details",
  },
];

const AUDIENCES = [
  {
    title: "Series A through C",
    body: "The seat has been open long enough to slip the plan, and there is no internal recruiter yet.",
  },
  {
    title: "Defense and govtech",
    body: "The roles need a clearance, and the search has to be run by people who know that process.",
    href: "/cleared",
    linkLabel: "Cleared recruiting",
  },
  {
    title: "Growth companies",
    body: "Hiring is the constraint, and you want the process to remain after the engagement ends.",
  },
];

const PROOF = [
  {
    client: "EarthDaily Federal",
    body: "Nine placements. About $294K in agency fees avoided on about $88K, a 3.3x return, with an average time to hire under 30 days.",
  },
  {
    client: "Kalibri Labs",
    body: "A machine learning engineer signed in 34 days, about $20K under the agency quote.",
  },
  {
    client: "Legal Managed Services",
    body: "Twenty go-to-market hires in 24 months, with 90% retention. This work was done before Rebel Talent, at a prior firm.",
  },
];

export default function Home() {
  return (
    <PageLayout>
      <PageSEO
        title="Recruiting that scales with the company you're becoming. | Rebel Talent Systems"
        description="We fill the open role and leave the hiring system. Contingent search or an embedded desk, for Series A through C and defense teams. Book a strategy call."
        path="/"
        ogTitle="Recruiting that scales with the company you're becoming. | Rebel Talent Systems"
        ogDescription="We fill the open role and leave the hiring system. Contingent search or an embedded desk, for Series A through C and defense teams. Book a strategy call."
        ogImage="og-home.png"
        schemas={[homepageSchema]}
      />

      <section data-testid="section-hero" className="space-hero space-hero--home relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 3,
            background:
              "radial-gradient(ellipse 70% 50% at 0% 0%, rgba(247,26,41,0.08) 0%, transparent 55%)",
          }}
        />
        <div className="space-hero__command" aria-hidden="true" />
        <div className="space-hero__grid" aria-hidden="true" />
        <svg
          className="space-hero__nodes"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMaxYMid slice"
          aria-hidden="true"
        >
          <g fill="none" stroke="rgba(150, 198, 255, 0.72)" strokeWidth="1.15">
            <line x1="790" y1="118" x2="918" y2="84" />
            <line x1="918" y1="84" x2="1034" y2="156" />
            <line x1="790" y1="118" x2="1034" y2="156" />
            <line x1="1034" y1="156" x2="948" y2="236" />
            <line x1="1034" y1="156" x2="1132" y2="204" />
            <line x1="948" y1="236" x2="868" y2="318" />
            <line x1="1034" y1="156" x2="1052" y2="348" />
            <line x1="1132" y1="204" x2="1168" y2="308" />
            <line x1="1052" y1="348" x2="1168" y2="308" />
            <line x1="868" y1="318" x2="768" y2="428" />
            <line x1="868" y1="318" x2="992" y2="478" />
            <line x1="1052" y1="348" x2="992" y2="478" />
            <line x1="992" y1="478" x2="1136" y2="436" />
            <line x1="1168" y1="308" x2="1136" y2="436" />
          </g>
          <g fill="none" stroke="rgba(186, 160, 255, 0.62)" strokeWidth="1.05">
            <line x1="908" y1="186" x2="948" y2="236" />
            <line x1="908" y1="186" x2="1034" y2="156" />
          </g>
          <g>
            <circle cx="1034" cy="156" r="10" fill="rgba(140, 190, 255, 0.10)" />
            <circle cx="992" cy="478" r="9" fill="rgba(176, 150, 255, 0.10)" />
            <circle cx="790" cy="118" r="2.1" fill="rgba(198, 220, 255, 0.85)" />
            <circle cx="918" cy="84" r="1.5" fill="rgba(186, 164, 255, 0.75)" />
            <circle cx="1034" cy="156" r="2.5" fill="rgba(210, 230, 255, 0.95)" />
            <circle cx="948" cy="236" r="1.7" fill="rgba(186, 164, 255, 0.8)" />
            <circle cx="1132" cy="204" r="1.5" fill="rgba(198, 220, 255, 0.75)" />
            <circle cx="868" cy="318" r="2" fill="rgba(198, 220, 255, 0.85)" />
            <circle cx="1052" cy="348" r="1.6" fill="rgba(186, 164, 255, 0.78)" />
            <circle cx="1168" cy="308" r="2.2" fill="rgba(210, 230, 255, 0.9)" />
            <circle cx="768" cy="428" r="1.5" fill="rgba(186, 164, 255, 0.7)" />
            <circle cx="992" cy="478" r="2.4" fill="rgba(210, 230, 255, 0.92)" />
            <circle cx="1136" cy="436" r="1.6" fill="rgba(198, 220, 255, 0.78)" />
            <circle cx="908" cy="186" r="1.4" fill="rgba(186, 164, 255, 0.72)" />
          </g>
        </svg>
        <div className="space-hero__scan" aria-hidden="true" />
        <div className="space-hero__scrim" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 pt-16 sm:pt-24 lg:pt-28 pb-14 sm:pb-20">
          <p className="font-mono text-[11px] sm:text-xs tracking-[0.28em] uppercase text-zinc-400 mb-6 sm:mb-8">
            Rebel Talent Systems
          </p>
          <h1
            className="font-display font-black text-white leading-[1.02] tracking-tight max-w-4xl"
            style={{ fontSize: "clamp(2.4rem, 5.4vw, 4.75rem)" }}
          >
            <span className="block">Recruiting that scales</span>
            <span className="block">with the company</span>
            <span className="block text-rebel-red">you&rsquo;re becoming.</span>
          </h1>
          <p className="mt-6 sm:mt-8 text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
            We fill open roles for technical, go-to-market, and operations teams. Contingent search is for one seat. Embedded recruiting is for the function you still need after we leave. We work with Series A through C companies and with defense teams, cleared and uncleared.
          </p>

          <div className="mt-10 sm:mt-12 grid md:grid-cols-2 gap-4 sm:gap-5">
            {PATHS.map((path) => (
              <article
                key={path.id}
                id={path.id}
                data-testid={path.testId}
                className="flex flex-col h-full border border-zinc-800 border-t-2 border-t-rebel-red bg-zinc-900/40 p-6 sm:p-8"
              >
                <p className="font-mono text-rebel-red text-[11px] tracking-[0.22em] uppercase mb-3">
                  {path.kicker}
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
                  {path.title}
                </h2>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
                  {path.body}
                </p>
                <div className="mt-auto flex flex-col sm:flex-row sm:items-center gap-4">
                  <Link
                    href={path.ctaHref}
                    data-testid={path.ctaTestId}
                    className="inline-flex items-center justify-center gap-2 bg-rebel-red hover:bg-red-700 text-white font-semibold text-sm px-5 py-3 rounded-full transition-colors no-underline"
                  >
                    Book a strategy call <ArrowRight className="w-4 h-4 shrink-0" />
                  </Link>
                  <Link
                    href={path.detailsHref}
                    data-testid={path.detailsTestId}
                    className="text-sm text-zinc-300 hover:text-white underline underline-offset-4 decoration-zinc-700 hover:decoration-rebel-red no-underline"
                  >
                    {path.detailsLabel}
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-sm text-zinc-400 leading-relaxed max-w-2xl">
            Retained search and advisory are on{" "}
            <Link
              href="/services"
              data-testid="link-view-services"
              className="text-zinc-200 hover:text-white underline underline-offset-4 decoration-zinc-700 hover:decoration-rebel-red"
            >
              How we engage
            </Link>
            . Cleared hiring stays on its{" "}
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

      <ContingentChrisSection />

      <section data-testid="section-who" className="py-16 sm:py-20 border-t border-zinc-900 bg-rebel-space">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
          <p className="font-mono text-rebel-red text-[11px] tracking-[0.22em] uppercase mb-3">
            Who this is for
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight max-w-xl mb-4">
            Teams that can name the missing seat.
          </h2>
          <p className="text-zinc-300 text-base leading-relaxed max-w-2xl mb-10">
            We are a fit when hiring is already the constraint. The company is usually Series A through C, or a defense team with a real req, not a wish list.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {AUDIENCES.map((item) => (
              <article key={item.title} className="border border-zinc-800 bg-zinc-900/30 p-6">
                <h3 className="font-display text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.body}</p>
                {item.href && (
                  <Link
                    href={item.href}
                    className="inline-block mt-4 text-sm text-zinc-300 hover:text-white underline underline-offset-4 decoration-zinc-700 hover:decoration-rebel-red"
                  >
                    {item.linkLabel}
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="section-proof" className="py-16 sm:py-20 border-t border-zinc-900" style={{ background: "#0E0D11" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
          <p className="font-mono text-rebel-red text-[11px] tracking-[0.22em] uppercase mb-3">
            Proof
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight max-w-xl mb-4">
            From recent work.
          </h2>
          <p className="text-zinc-300 text-base leading-relaxed max-w-2xl mb-10">
            Three engagements, with the figures we can stand behind. The case studies page has the fuller account.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {PROOF.map((item) => (
              <article key={item.client} className="border border-zinc-800 bg-zinc-900/30 p-6">
                <h3 className="font-display text-lg font-bold text-white mb-3">{item.client}</h3>
                <p className="text-zinc-300 text-sm leading-relaxed">{item.body}</p>
              </article>
            ))}
          </div>
          <Link
            href="/case-studies"
            data-testid="link-case-studies"
            className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-zinc-200 hover:text-white no-underline"
          >
            See the work <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>


      <section
        data-testid="section-veterans"
        className="relative overflow-hidden border-t border-zinc-900"
      >
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: "url('/hero-command.jpg')",
            backgroundPosition: "center top",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(5,7,14,0.94) 0%, rgba(5,7,14,0.78) 42%, rgba(5,7,14,0.34) 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, rgba(5,7,14,0.9) 0%, rgba(5,7,14,0.2) 45%, rgba(5,7,14,0.55) 100%)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 py-16 sm:py-24">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 font-mono text-rebel-red text-[11px] tracking-[0.22em] uppercase mb-5">
              <Shield className="w-4 h-4" />
              Cleared Defense · Startups · Veteran-Supported
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.05] mb-6">
              For the ones who{" "}
              <span className="text-rebel-red">stood up</span> when it mattered.
            </h2>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              Intelligence community members, people active in politics, and current and former service members trust Rebel to build their teams. The firm speaks their language. Transitioning veterans get free resume and LinkedIn reviews. No corporate fluff, just real talent leadership for cleared defense and startups.
            </p>

            <div className="border-l-2 border-rebel-red pl-4 mb-9">
              <p className="text-white font-semibold text-lg">Ask for references.</p>
              <p className="text-zinc-400 text-sm mt-1">
                Intelligence community. People active in politics. Current and former servicemembers. Shared privately, on request.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/strategy-call"
                data-testid="button-veterans-strategy"
                className="inline-flex items-center justify-center gap-2 bg-rebel-red hover:bg-red-700 text-white font-semibold text-sm px-6 py-3.5 rounded-full transition-colors no-underline"
              >
                Book a strategy call <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/cleared"
                data-testid="link-veterans-cleared"
                className="inline-flex items-center justify-center gap-2 border border-zinc-700 hover:border-rebel-red/60 text-white font-semibold text-sm px-6 py-3.5 rounded-full transition-colors no-underline"
              >
                Cleared recruiting
              </Link>
            </div>

            <div className="mt-6">
              <a
                href="https://calendly.com/richielam/vets?back=1"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-vet-review"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white border border-zinc-700 hover:border-rebel-red/60 px-5 py-2.5 rounded-full transition-colors no-underline"
              >
                Free veteran resume and LinkedIn review <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-zinc-400 text-xs mt-2">Transitioning out? No strings.</p>
            </div>
          </div>
        </div>
      </section>

      <section data-testid="section-cta" className="py-16 sm:py-24 border-t border-zinc-900 bg-rebel-space">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-12">
          <p className="font-mono text-rebel-red text-[11px] tracking-[0.22em] uppercase mb-3">
            How to start
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Bring the open role.
          </h2>
          <p className="text-zinc-300 text-base leading-relaxed mb-8">
            A strategy call is thirty minutes. Bring the open role, or the desk you want run. We will tell you which path fits. If we are not the right firm, we will say that too.
          </p>
          <Link
            href="/strategy-call"
            data-testid="button-book-strategy"
            className="inline-flex items-center justify-center gap-2 bg-rebel-red hover:bg-red-700 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full transition-colors no-underline"
          >
            Book a strategy call <ArrowRight className="w-4 h-4 shrink-0" />
          </Link>
          <p className="mt-6 text-sm text-zinc-400">
            Looking for a role?{" "}
            <Link href="/jobs" className="text-zinc-200 hover:text-white underline underline-offset-4 decoration-zinc-700 hover:decoration-rebel-red">
              See open jobs
            </Link>
            .
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
