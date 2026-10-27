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

const btn =
  "inline-flex items-center justify-center gap-2 bg-rebel-red text-white font-semibold text-sm px-5 py-3 rounded-full no-underline";
const textLink = "text-sm font-semibold text-[#12161c] underline underline-offset-4";

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

      <section data-testid="section-hero" className="bg-white">
        <div className="grid lg:grid-cols-2 lg:min-h-[calc(100vh-72px)]">
          <div className="order-2 lg:order-1 flex flex-col justify-center py-12 sm:py-16 lg:py-20 px-5 sm:px-8 lg:pl-[max(2rem,calc((100vw-1200px)/2+2rem))] lg:pr-16">
            <h1
              className="text-[#12161c] tracking-[-0.04em] leading-[0.98]"
              style={{ fontSize: "clamp(2.7rem, 4.6vw, 4.6rem)", fontWeight: 800 }}
            >
              Recruiting that scales with the company you&rsquo;re becoming.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#3a4250] max-w-xl leading-relaxed">
              We fill open roles for technical, go-to-market, and operations teams. Contingent search is for one seat. Embedded recruiting is for the function you still need after we leave. We work with Series A through C companies and with defense teams, cleared and uncleared.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <Link href="/strategy-call" data-testid="button-hero-strategy" className={btn}>
                Book a strategy call <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
              <Link href="/jobs" className={textLink}>
                See open jobs
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative min-h-[78vw] sm:min-h-[560px] lg:min-h-0">
            <img
              src="/richie-portrait.jpg"
              alt="Richie Lampani, founder of Rebel Talent Systems"
              className="absolute inset-0 w-full h-full object-cover object-[center_18%]"
            />
          </div>
        </div>
      </section>

      <section data-testid="section-government-buyers" className="border-y border-[#e4e7ee] bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-sm text-[#3a4250]">
            <span className="text-[#12161c] font-semibold">Registered on SAM.gov.</span>{" "}
            CAGE 202V6. UEI JQ4MZ69FNAK4. The capability statement is a one-page PDF.
          </p>
          <a
            href={CAPABILITY_STATEMENT_HREF}
            download={CAPABILITY_STATEMENT_FILENAME}
            data-testid="link-download-capability-statement"
            className="text-sm font-semibold text-[#12161c] underline underline-offset-4 shrink-0"
          >
            Download capability statement (PDF)
          </a>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-16 sm:py-24 grid md:grid-cols-2">
          {PATHS.map((path, i) => (
            <article
              key={path.id}
              id={path.id}
              data-testid={path.testId}
              className={`py-2 md:py-0 ${i === 0 ? "md:pr-14 md:border-r md:border-[#e4e7ee]" : "md:pl-14 mt-12 md:mt-0"}`}
            >
              <p className="text-[15px] font-semibold text-[#12161c] mb-2">{path.kicker}</p>
              <h2 className="text-3xl sm:text-4xl text-[#12161c] tracking-[-0.035em] mb-4">
                {path.title}
              </h2>
              <p className="text-[#3a4250] text-base leading-relaxed mb-6 max-w-md">
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
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 pb-16">
          <p className="text-sm text-[#5c6573] leading-relaxed max-w-2xl">
            Retained search and advisory are on{" "}
            <Link href="/services" data-testid="link-view-services" className="text-[#12161c] underline underline-offset-4">
              How we engage
            </Link>
            . Cleared hiring stays on its{" "}
            <Link href="/cleared" className="text-[#12161c] underline underline-offset-4">
              own page
            </Link>
            .
          </p>
        </div>
      </section>

      <ContingentChrisSection />

      <section data-testid="section-who" className="bg-white border-t border-[#e4e7ee]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl text-[#12161c] tracking-[-0.035em] max-w-xl mb-4">
            Teams that can name the missing seat.
          </h2>
          <p className="text-[#3a4250] text-base leading-relaxed max-w-2xl mb-12">
            We are a fit when hiring is already the constraint. The company is usually Series A through C, or a defense team with a real req, not a wish list.
          </p>
          <div className="border-t border-[#e4e7ee]">
            {AUDIENCES.map((item) => (
              <article key={item.title} className="grid md:grid-cols-[16rem_1fr] gap-2 md:gap-16 py-7 border-b border-[#e4e7ee]">
                <h3 className="text-2xl text-[#12161c]">{item.title}</h3>
                <div>
                  <p className="text-[#3a4250] text-base leading-relaxed max-w-xl">{item.body}</p>
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
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl text-[#12161c] tracking-[-0.035em] mb-3">
            From recent work.
          </h2>
          <p className="text-[#3a4250] text-base leading-relaxed max-w-2xl mb-12">
            Three engagements, with the figures we can stand behind. The case studies page has the fuller account.
          </p>
          <div className="border-t border-[#e4e7ee]">
            {PROOF.map((item) => (
              <article key={item.client} className="grid sm:grid-cols-[11rem_1fr] gap-4 sm:gap-10 py-8 border-b border-[#e4e7ee] items-center">
                {item.logo ? (
                  <img src={item.logo} alt="" className="h-9 w-auto max-w-[10rem] object-contain object-left" />
                ) : (
                  <h3 className="text-lg text-[#12161c]">{item.client}</h3>
                )}
                <div>
                  {item.logo && <h3 className="text-lg text-[#12161c] mb-1">{item.client}</h3>}
                  <p className="text-[#3a4250] text-base leading-relaxed max-w-2xl">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
          <Link href="/case-studies" data-testid="link-case-studies" className="inline-flex items-center gap-2 mt-10 text-sm font-semibold text-[#12161c] no-underline">
            See the work <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section data-testid="section-veterans" className="on-photo bg-[#12161c]">
        <div className="grid lg:grid-cols-2 lg:min-h-[620px]">
          <div className="order-2 lg:order-1 flex flex-col justify-center py-16 sm:py-20 px-5 sm:px-8 lg:pl-[max(2rem,calc((100vw-1200px)/2+2rem))] lg:pr-16">
            <p className="text-sm font-semibold text-white/70 mb-4">
              Cleared Defense · Startups · Veteran-Supported
            </p>
            <h2 className="text-3xl sm:text-5xl text-white tracking-[-0.035em] leading-[1.05] mb-6">
              For the ones who stood up when it mattered.
            </h2>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              Intelligence community members, people active in politics, and current and former service members trust Rebel to build their teams. The firm speaks their language. Transitioning veterans get free resume and LinkedIn reviews. No corporate fluff, just real talent leadership for cleared defense and startups.
            </p>
            <p className="text-white font-semibold text-lg">Ask for references.</p>
            <p className="text-white/65 text-sm mt-1 mb-8 max-w-lg">
              Intelligence community. People active in politics. Current and former servicemembers. Shared privately, on request.
            </p>
            <div className="flex flex-col items-start gap-4">
              <Link href="/strategy-call" data-testid="button-veterans-strategy" className={btn}>
                Book a strategy call <ArrowRight className="w-4 h-4" />
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
                <p className="text-white/60 text-xs mt-2">Transitioning out? No strings.</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative min-h-[72vw] sm:min-h-[480px] lg:min-h-0">
            <img
              src="/team-richie.jpg"
              alt="Richie Lampani"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      <section data-testid="section-cta" className="bg-white border-t border-[#e4e7ee]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-20 sm:py-28">
          <h2 className="text-3xl sm:text-5xl text-[#12161c] tracking-[-0.035em] mb-4">
            Bring the open role.
          </h2>
          <p className="text-[#3a4250] text-base leading-relaxed mb-8 max-w-xl">
            A strategy call is thirty minutes. Bring the open role, or the desk you want run. We will tell you which path fits. If we are not the right firm, we will say that too.
          </p>
          <Link href="/strategy-call" data-testid="button-book-strategy" className={btn}>
            Book a strategy call <ArrowRight className="w-4 h-4 shrink-0" />
          </Link>
          <p className="mt-6 text-sm text-[#5c6573]">
            Looking for a role?{" "}
            <Link href="/jobs" className="text-[#12161c] underline underline-offset-4">
              See open jobs
            </Link>
            .
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
