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
          "description": "One role. Flat fee by salary band, invoiced when the hire starts. No percentage of salary.",
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

const CAPABILITY_STATEMENT_HREF = "/Rebel-Talent-Systems-Capability-Statement.pdf";
const CAPABILITY_STATEMENT_FILENAME = "Rebel-Talent-Systems-Capability-Statement.pdf";

const PATHS = [
  {
    id: "contingent",
    kicker: "Contingent",
    title: "Fill one seat.",
    body: "One role. The fee is flat, set by the salary band, and invoiced when the hire starts. There is no percentage of salary. The long version is on the contingent page.",
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
    body: "Eleven placements. About $394K in agency fees avoided, a 3.4x return, with an average time to hire under 30 days.",
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

const linkQuiet =
  "text-sm font-medium text-stone-800 underline underline-offset-4 decoration-stone-300 hover:decoration-[#9E2330]";

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

      <section data-testid="section-hero">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-12 pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-24">
          <p className="text-[11px] tracking-[0.18em] uppercase text-stone-500 mb-6">
            Rebel Talent Systems
          </p>
          <h1
            className="font-display text-stone-900 leading-[1.05]"
            style={{ fontSize: "clamp(2.6rem, 5vw, 4.25rem)" }}
          >
            Recruiting that scales with the company you&rsquo;re becoming.
          </h1>
          <p className="mt-6 sm:mt-8 text-base sm:text-lg text-stone-600 max-w-xl leading-relaxed">
            We fill open roles for technical, go-to-market, and operations teams. Contingent search is for one seat. Embedded recruiting is for the function you still need after we leave. We work with Series A through C companies and with defense teams, cleared and uncleared.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <Link
              href="/strategy-call"
              data-testid="button-hero-strategy"
              className="inline-flex items-center justify-center gap-2 bg-rebel-red text-white font-semibold text-sm px-5 py-3 no-underline"
            >
              Book a strategy call <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
            <Link href="/jobs" className={linkQuiet}>
              See open jobs
            </Link>
          </div>
        </div>
      </section>

      <section data-testid="section-government-buyers" className="border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-12 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-sm text-stone-600 leading-relaxed">
            <span className="text-stone-900 font-medium">Registered on SAM.gov.</span>{" "}
            CAGE 202V6. UEI JQ4MZ69FNAK4. The capability statement is a one-page PDF.
          </p>
          <a
            href={CAPABILITY_STATEMENT_HREF}
            download={CAPABILITY_STATEMENT_FILENAME}
            data-testid="link-download-capability-statement"
            className="text-sm font-medium text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-[#9E2330] shrink-0"
          >
            Download capability statement (PDF)
          </a>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            {PATHS.map((path) => (
              <article
                key={path.id}
                id={path.id}
                data-testid={path.testId}
                className="flex flex-col border-t border-stone-300 pt-8"
              >
                <p className="text-[11px] tracking-[0.18em] uppercase text-stone-500 mb-3">
                  {path.kicker}
                </p>
                <h2 className="font-display text-3xl sm:text-4xl text-stone-900 mb-4">
                  {path.title}
                </h2>
                <p className="text-stone-600 text-base leading-relaxed mb-8">
                  {path.body}
                </p>
                <div className="mt-auto flex flex-col sm:flex-row sm:items-center gap-4">
                  <Link
                    href={path.ctaHref}
                    data-testid={path.ctaTestId}
                    className={linkQuiet}
                  >
                    Book a strategy call
                  </Link>
                  <Link
                    href={path.detailsHref}
                    data-testid={path.detailsTestId}
                    className={linkQuiet}
                  >
                    {path.detailsLabel}
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-12 text-sm text-stone-500 leading-relaxed max-w-2xl">
            Retained search and advisory are on{" "}
            <Link
              href="/services"
              data-testid="link-view-services"
              className="text-stone-800 underline underline-offset-4 decoration-stone-300 hover:decoration-[#9E2330]"
            >
              How we engage
            </Link>
            . Cleared hiring stays on its{" "}
            <Link
              href="/cleared"
              className="text-stone-800 underline underline-offset-4 decoration-stone-300 hover:decoration-[#9E2330]"
            >
              own page
            </Link>
            .
          </p>
        </div>
      </section>

      <ContingentChrisSection />

      <section data-testid="section-who" className="py-16 sm:py-24 border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-12">
          <p className="text-[11px] tracking-[0.18em] uppercase text-stone-500 mb-3">
            Who this is for
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-stone-900 max-w-xl mb-4">
            Teams that can name the missing seat.
          </h2>
          <p className="text-stone-600 text-base leading-relaxed max-w-2xl mb-12">
            We are a fit when hiring is already the constraint. The company is usually Series A through C, or a defense team with a real req, not a wish list.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            {AUDIENCES.map((item) => (
              <article key={item.title} className="border-t border-stone-300 pt-6">
                <h3 className="font-display text-2xl text-stone-900 mb-3">{item.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{item.body}</p>
                {item.href && (
                  <Link href={item.href} className={`${linkQuiet} inline-block mt-4`}>
                    {item.linkLabel}
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="section-proof" className="py-16 sm:py-24 border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-12">
          <p className="text-[11px] tracking-[0.18em] uppercase text-stone-500 mb-3">
            Proof
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-stone-900 max-w-xl mb-4">
            From recent work.
          </h2>
          <p className="text-stone-600 text-base leading-relaxed max-w-2xl mb-12">
            Three engagements, with the figures we can stand behind. The case studies page has the fuller account.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            {PROOF.map((item) => (
              <article key={item.client} className="border-t border-stone-300 pt-6">
                <h3 className="font-display text-2xl text-stone-900 mb-3">{item.client}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{item.body}</p>
              </article>
            ))}
          </div>
          <Link
            href="/case-studies"
            data-testid="link-case-studies"
            className="inline-flex items-center gap-2 mt-10 text-sm font-semibold text-stone-900 no-underline"
          >
            See the work <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section data-testid="section-veterans" className="border-t border-stone-200 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-12">
          <p className="text-[11px] tracking-[0.18em] uppercase text-stone-500 mb-5">
            Cleared Defense · Startups · Veteran-Supported
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-stone-900 leading-[1.08] mb-6">
            For the ones who stood up when it mattered.
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed mb-8">
            Intelligence community members, people active in politics, and current and former service members trust Rebel to build their teams. The firm speaks their language. Transitioning veterans get free resume and LinkedIn reviews. No corporate fluff, just real talent leadership for cleared defense and startups.
          </p>
          <div className="border-l-2 border-[#9E2330] pl-4 mb-8">
            <p className="text-stone-900 font-semibold text-lg">Ask for references.</p>
            <p className="text-stone-500 text-sm mt-1">
              Intelligence community. People active in politics. Current and former servicemembers. Shared privately, on request.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <Link
              href="/strategy-call"
              data-testid="button-veterans-strategy"
              className={linkQuiet}
            >
              Book a strategy call
            </Link>
            <Link
              href="/cleared"
              data-testid="link-veterans-cleared"
              className={linkQuiet}
            >
              Cleared recruiting
            </Link>
            <div>
              <a
                href="https://calendly.com/richielam/vets?back=1"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-vet-review"
                className={linkQuiet}
              >
                Free veteran resume and LinkedIn review
              </a>
              <p className="text-stone-500 text-xs mt-2">Transitioning out? No strings.</p>
            </div>
          </div>
        </div>
      </section>

      <section data-testid="section-cta" className="py-20 sm:py-28 border-t border-stone-200">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-12">
          <p className="text-[11px] tracking-[0.18em] uppercase text-stone-500 mb-3">
            How to start
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-stone-900 mb-4">
            Bring the open role.
          </h2>
          <p className="text-stone-600 text-base leading-relaxed mb-8 max-w-xl">
            A strategy call is thirty minutes. Bring the open role, or the desk you want run. We will tell you which path fits. If we are not the right firm, we will say that too.
          </p>
          <Link
            href="/strategy-call"
            data-testid="button-book-strategy"
            className="inline-flex items-center justify-center gap-2 bg-rebel-red text-white font-semibold text-sm sm:text-base px-5 py-3 no-underline"
          >
            Book a strategy call <ArrowRight className="w-4 h-4 shrink-0" />
          </Link>
          <p className="mt-6 text-sm text-stone-500">
            Looking for a role?{" "}
            <Link href="/jobs" className="text-stone-800 underline underline-offset-4 decoration-stone-300 hover:decoration-[#9E2330]">
              See open jobs
            </Link>
            .
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
