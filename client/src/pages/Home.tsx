import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import ContingentChrisSection from "@/components/ContingentChrisSection";
import ReachPeople from "@/components/ReachPeople";

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
    logo: "/logo-earthdaily.png",
    body: "Eleven placements. About $394K in agency fees avoided, a 3.4x return, with an average time to hire under 30 days.",
  },
  {
    client: "Kalibri Labs",
    logo: "/logo-kalibri.png",
    body: "A machine learning engineer signed in 34 days, about $20K under the agency quote.",
  },
  {
    client: "Legal Managed Services",
    body: "Twenty go-to-market hires in 24 months, with 90% retention.",
  },
];

const btn = "mi-btn";
const textLink = "text-[16px] font-medium text-[#137287] underline underline-offset-4";

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

      <section data-testid="section-hero" className="mi-band bg-[#003E53]">
        <div className="max-w-[1140px] mx-auto px-5 py-16 sm:py-24">
          <h1 className="text-white max-w-4xl" style={{ fontSize: "clamp(2rem, 4vw, 2.625rem)", fontWeight: 400, lineHeight: 1.15 }}>
            Recruiting that scales with the company you&rsquo;re becoming.
          </h1>
          <p className="mt-5 text-white/90 text-[18px] leading-[1.6] max-w-3xl font-light">
            We fill open roles for technical, go-to-market, and operations teams. Contingent search is for one seat. Embedded recruiting is for the function you still need after we leave. We work with Series A through C companies and with defense teams, cleared and uncleared.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <Link href="/strategy-call" data-testid="button-hero-strategy" className={btn}>
              Book a strategy call
            </Link>
            <Link href="/jobs" className="text-[16px] font-medium text-white underline underline-offset-4">
              See open jobs
            </Link>
          </div>
        </div>
      </section>

      <section data-testid="section-government-buyers" className="mi-band bg-[#002633]">
        <div className="max-w-[1140px] mx-auto px-5 py-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <p className="text-white text-[18px] leading-snug font-light max-w-3xl">
            <span className="font-normal">Registered on SAM.gov.</span>{" "}
            CAGE 202V6. UEI JQ4MZ69FNAK4. The capability statement is a one-page PDF.
          </p>
          <a
            href={CAPABILITY_STATEMENT_HREF}
            download={CAPABILITY_STATEMENT_FILENAME}
            data-testid="link-download-capability-statement"
            className="mi-btn shrink-0"
          >
            Download capability statement (PDF)
          </a>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-[1140px] mx-auto px-5 py-14 sm:py-16 grid md:grid-cols-2 gap-12">
          {PATHS.map((path, i) => (
            <article
              key={path.id}
              id={path.id}
              data-testid={path.testId}
              className="py-2"
            >
              <p className="text-[16px] text-[#272c30] mb-2">{path.kicker}</p>
              <h2 className="text-[25px] leading-tight text-[#137287] mb-4">
                {path.title}
              </h2>
              <p className="text-[#272c30] text-[18px] leading-[1.6] font-light mb-6 max-w-md">
                {path.body}
              </p>
              <div className="flex flex-col items-start gap-3">
                <Link href={path.ctaHref} data-testid={path.ctaTestId} className={textLink}>
                  Book a strategy call
                </Link>
                <Link href={path.detailsHref} data-testid={path.detailsTestId} className={textLink}>
                  {path.detailsLabel}
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="max-w-[1140px] mx-auto px-5 pb-14">
          <p className="text-[16px] text-[#272c30] leading-relaxed max-w-2xl font-light">
            Retained search and advisory are on{" "}
            <Link href="/services" data-testid="link-view-services" className="text-[#137287] underline underline-offset-4">
              How we engage
            </Link>
            . Cleared hiring stays on its{" "}
            <Link href="/cleared" className="text-[#137287] underline underline-offset-4">
              own page
            </Link>
            .
          </p>
        </div>
      </section>

      <ContingentChrisSection />

      <section data-testid="section-who" className="bg-white border-t border-[#e4e7ee]">
        <div className="max-w-[1140px] mx-auto px-5 py-14 sm:py-16">
          <h2 className="text-[34px] leading-none text-[#137287] max-w-xl mb-4">
            Teams that can name the missing seat.
          </h2>
          <p className="text-[#272c30] text-[18px] leading-[1.6] font-light max-w-2xl mb-10">
            We are a fit when hiring is already the constraint. The company is usually Series A through C, or a defense team with a real req, not a wish list.
          </p>
          <div className="border-t border-[#e4e7ee]">
            {AUDIENCES.map((item) => (
              <article key={item.title} className="grid md:grid-cols-[16rem_1fr] gap-2 md:gap-16 py-6 border-b border-[#e4e7ee]">
                <h3 className="text-[22px] text-[#272c30]">{item.title}</h3>
                <div>
                  <p className="text-[#272c30] text-[18px] leading-[1.6] font-light max-w-xl">{item.body}</p>
                  {item.href && (
                    <Link href={item.href} className={`${textLink} inline-block mt-3`}>
                      {item.linkLabel}
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="section-proof" className="bg-white border-t border-[#e4e7ee]">
        <div className="max-w-[1140px] mx-auto px-5 py-14 sm:py-16">
          <h2 className="text-[34px] leading-none text-[#137287] mb-3">
            From recent work.
          </h2>
          <p className="text-[#272c30] text-[18px] leading-[1.6] font-light max-w-2xl mb-8">
            Three engagements, with the figures we can stand behind. The case studies page has the fuller account.
          </p>
          <div className="border-t border-[#e4e7ee]">
            {PROOF.map((item) => (
              <article key={item.client} className="grid sm:grid-cols-[11rem_1fr] gap-4 sm:gap-10 py-8 border-b border-[#e4e7ee] items-center">
                {item.logo ? (
                  <img src={item.logo} alt="" className="h-9 w-auto max-w-[10rem] object-contain object-left" />
                ) : (
                  <h3 className="text-[18px] text-[#272c30]">{item.client}</h3>
                )}
                <div>
                  {item.logo && <h3 className="text-[18px] text-[#272c30] mb-1">{item.client}</h3>}
                  <p className="text-[#272c30] text-[18px] leading-[1.6] font-light max-w-2xl">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
          <Link href="/case-studies" data-testid="link-case-studies" className="inline-flex mt-8 text-[16px] font-medium text-[#137287] underline underline-offset-4">
            See the work
          </Link>
        </div>
      </section>

      <section data-testid="section-veterans" className="mi-band bg-[#003E53]">
        <div className="max-w-[1140px] mx-auto px-5 py-14 sm:py-16">
          <div className="max-w-3xl">
            <p className="text-[16px] text-white/80 mb-3">
              Cleared Defense · Startups · Veteran-Supported
            </p>
            <h2 className="text-[34px] leading-none text-white mb-5">
              For the ones who stood up when it mattered.
            </h2>
            <p className="text-white/90 text-[18px] leading-[1.6] font-light mb-6 max-w-xl">
              Intelligence community members, people active in politics, and current and former service members trust Rebel to build their teams. The firm speaks their language. Transitioning veterans get free resume and LinkedIn reviews. No corporate fluff, just real talent leadership for cleared defense and startups.
            </p>
            <p className="text-white text-[18px]">Ask for references.</p>
            <p className="text-white/80 text-[16px] mt-1 mb-8 max-w-lg font-light">
              Intelligence community. People active in politics. Current and former servicemembers. Shared privately, on request.
            </p>
            <div className="flex flex-col items-start gap-4">
              <Link href="/strategy-call" data-testid="button-veterans-strategy" className={btn}>
                Book a strategy call
              </Link>
              <Link href="/cleared" data-testid="link-veterans-cleared" className="text-sm font-semibold text-white underline underline-offset-4">
                Cleared recruiting
              </Link>
              <div>
                <a
                  href="https://calendly.com/richielam/vets?back=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="button-vet-review"
                  className="text-sm font-semibold text-white underline underline-offset-4"
                >
                  Free veteran resume and LinkedIn review
                </a>
                <p className="text-white/75 text-[14px] mt-2">Transitioning out? No strings.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReachPeople id="reach" />

      <section data-testid="section-cta" className="bg-white border-t border-[#e4e7ee]">
        <div className="max-w-[1140px] mx-auto px-5 py-14 sm:py-16">
          <h2 className="text-[34px] leading-none text-[#137287] mb-4">
            Bring the open role.
          </h2>
          <p className="text-[#272c30] text-[18px] leading-[1.6] font-light mb-8 max-w-xl">
            A strategy call is thirty minutes. Bring the open role, or the desk you want run. We will tell you which path fits. If we are not the right firm, we will say that too.
          </p>
          <Link href="/strategy-call" data-testid="button-book-strategy" className={btn}>
            Book a strategy call
          </Link>
          <p className="mt-6 text-[16px] text-[#272c30]">
            Looking for a role?{" "}
            <Link href="/jobs" className="text-[#137287] underline underline-offset-4">
              See open jobs
            </Link>
            .
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
