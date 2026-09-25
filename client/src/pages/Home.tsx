import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
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
  "telephone": "+1-770-233-7548",
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
          "description": "One role. Flat fee by salary band, paid when the candidate accepts. No percentage of salary.",
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
          "description": "A defined role with a deadline. $10K up front and $20K on start.",
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
    body: "One role. The fee is flat, set by the salary band, and due when the candidate accepts. There is no percentage of salary. The long version is on the contingent page.",
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
    body: "Nine placements. About $294K in agency fees avoided, at about 335% confirmed ROI, with an average time to hire under 30 days.",
  },
  {
    client: "Kalibri Labs",
    body: "A machine learning engineer signed in 34 days, about $20K under the agency quote.",
  },
  {
    client: "Legal Managed Services",
    body: "Twenty go-to-market hires in 24 months, with 90% retention.",
  },
];

export default function Home() {
  return (
    <PageLayout>
      <PageSEO
        title="Fill the seat. Keep the system. | Rebel Talent Systems"
        description="We fill the open role and leave the hiring system. Contingent search or an embedded desk, for Series A through C and defense teams. Book a strategy call."
        path="/"
        ogTitle="Fill the seat. Keep the system. | Rebel Talent Systems"
        ogDescription="We fill the open role and leave the hiring system. Contingent search or an embedded desk, for Series A through C and defense teams. Book a strategy call."
        ogImage="og-home.png"
        schemas={[homepageSchema]}
      />

      <section data-testid="section-hero" className="relative overflow-hidden bg-rebel-space">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 0% 0%, rgba(247,26,41,0.08) 0%, transparent 55%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 pt-16 sm:pt-24 lg:pt-28 pb-14 sm:pb-20">
          <p className="font-mono text-[11px] sm:text-xs tracking-[0.28em] uppercase text-zinc-400 mb-6 sm:mb-8">
            Rebel Talent Systems
          </p>
          <h1
            className="font-display font-black text-white leading-[1.02] tracking-tight max-w-4xl"
            style={{ fontSize: "clamp(2.4rem, 5.4vw, 4.75rem)" }}
          >
            Fill the seat.
            <span className="block text-rebel-red">Keep the system.</span>
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
