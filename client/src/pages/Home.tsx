import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import ContingentChrisSection from "@/components/ContingentChrisSection";
import ReachPeople from "@/components/ReachPeople";
import BannerHero from "@/components/BannerHero";
import { LogoStrip, PullQuotes } from "@/components/Proof";

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
const textLink = "text-[15px] font-medium text-[#0C1220] underline underline-offset-4";

const LIGHT_STATS = [
  { client: "EarthDaily Federal", value: "<30", caption: "Average time to hire" },
  { client: "Kalibri Labs", value: "34", caption: "Days to a signed ML hire" },
];

const NAVY_STATS = [
  { client: "Fee return", value: "3.4x", caption: "About $394K in fees avoided" },
  { client: "Legal Managed Services", value: "90%", caption: "Retention. 20 hires, 24 months" },
];

const SERVICES = [
  {
    index: "01",
    kicker: "Contingent",
    sentence: "One role, one flat fee, billed when the hire starts.",
    href: "/contingent",
    label: "Contingent search",
    id: "contingent",
    testId: "path-contingent",
    linkTestId: "link-contingent-details",
  },
  {
    index: "02",
    kicker: "Embedded",
    sentence: "We run the desk on a monthly retainer, then leave the system with you.",
    href: "/fractional",
    label: "Embedded recruiting",
    id: "embedded",
    testId: "path-embedded",
    linkTestId: "link-fractional-details",
  },
  {
    index: "03",
    kicker: "Retained",
    sentence: "A defined role with a deadline. Half up front, half at placement.",
    href: "/strategy-call?engagement=retained",
    label: "Book a strategy call",
    id: "retained",
    testId: "path-retained",
    linkTestId: "button-strategy-retained",
  },
  {
    index: "04",
    kicker: "Advisory",
    sentence: "The hiring plan, priced before you spend on a search.",
    href: "/advisory",
    label: "Advisory",
    id: "advisory",
    testId: "path-advisory",
    linkTestId: "link-advisory-details",
  },
];

function Stat({ client, value, caption, light }: { client: string; value: string; caption: string; light: boolean }) {
  return (
    <div className="px-0 py-8 pr-4 sm:pr-6">
      <p className={`stat-kicker text-[11px] font-semibold uppercase tracking-[0.12em] ${light ? "text-[#8B919A]" : "muted"}`}>{client}</p>
      <p className={`mt-3 text-[52px] font-extrabold leading-none tracking-[-0.045em] sm:text-[64px] ${light ? "text-[#0C1220]" : "text-white"}`}>{value}</p>
      <span className="stat-rule" aria-hidden="true" />
      <p className={`stat-caption text-[14px] leading-snug ${light ? "text-[#5C6570]" : "muted"}`}>{caption}</p>
    </div>
  );
}

export default function Home() {
  return (
    <PageLayout>
      <PageSEO
        title="Recruiting that scales with the company you're becoming. | Rebel Talent Systems"
        description="We fill the open role and leave the hiring system. Contingent search or an embedded desk, for Series A through C and defense teams. Book a strategy call."
        path="/"
        ogTitle="Recruiting that scales with the company you're becoming. | Rebel Talent Systems"
        ogDescription="We fill the open role and leave the hiring system. Contingent search or an embedded desk, for Series A through C and defense teams. Book a strategy call."
        ogImage="og-home-v2.png"
        schemas={[homepageSchema]}
      />

      <section data-testid="section-hero" className="band-hero">
        <BannerHero tall mark priority>
          <h1 className="hero-display">
            Recruiting that scales with the company you&rsquo;re becoming.
          </h1>
          <p className="hero-for">For defense and commercial buyers.</p>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Link href="/strategy-call" data-testid="button-hero-strategy" className={`${btn} hero-cta`}>
              Book a strategy call
            </Link>
            <Link href="/jobs" className="tap-link text-[15px] font-medium underline underline-offset-4">
              See open jobs
            </Link>
          </div>
        </BannerHero>
      </section>

      <section data-testid="section-proof-strip" className="band-steel proof-strip">
        <div className="band-wrap">
          <ul className="logo-chips">
            <li>
              <img src="/logo-kalibri.png" alt="Kalibri Labs" width={600} height={264} />
            </li>
            <li>
              <img src="/logo-earthdaily.png" alt="EarthDaily Federal" width={200} height={64} />
            </li>
          </ul>
          <div className="stat-row">
            {[...LIGHT_STATS, ...NAVY_STATS].map((stat) => (
              <Stat key={stat.value + stat.caption} {...stat} light />
            ))}
          </div>
          <ul className="reg-badges" data-testid="section-government-buyers">
            <li>SAM.gov</li>
            <li>CAGE 202V6</li>
            <li>UEI JQ4MZ69FNAK4</li>
            <li>
              <a
                href={CAPABILITY_STATEMENT_HREF}
                download={CAPABILITY_STATEMENT_FILENAME}
                data-testid="link-download-capability-statement"
              >
                Capability statement
              </a>
            </li>
          </ul>
        </div>
      </section>

      {SERVICES.map((item) => (
        <section key={item.id} className="offer-band">
          <div className="band-wrap offer-band-inner">
            <p className="offer-index" aria-hidden="true">{item.index}</p>
            <article id={item.id} data-testid={item.testId}>
              <h2>{item.kicker}</h2>
              <p className="measure">{item.sentence}</p>
              <Link href={item.href} data-testid={item.linkTestId} className="tap-link">
                {item.label}
              </Link>
            </article>
          </div>
        </section>
      ))}

      <ContingentChrisSection />

      <section data-testid="section-who" className="border-t border-[#E7E9EE] bg-white">
        <div className="max-w-[1140px] mx-auto px-5 py-16 sm:py-20">
          <h2 className="text-[40px] leading-[1.05] text-[#0C1220] max-w-xl mb-4 sm:text-[48px]">
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

      <section data-testid="section-proof">
        <div className="max-w-[1140px] mx-auto px-5 py-16 sm:py-20">
          <h2 className="text-[40px] leading-[1.05] text-[#0C1220] mb-3 sm:text-[48px]">
            From recent work.
          </h2>
          <p className="text-[#272c30] text-[18px] leading-[1.6] font-light max-w-2xl mb-8">
            Three engagements, with the figures we can stand behind. The case studies page has the fuller account.
          </p>
          <div className="border-t border-[#e4e7ee]">
            {PROOF.map((item) => (
              <article key={item.client} className="grid sm:grid-cols-[11rem_1fr] gap-4 sm:gap-10 py-8 border-b border-[#e4e7ee] items-center">
                {item.logo ? (
                  <span className="logo-chip">
                    <img src={item.logo} alt={item.client} width={item.logo.includes("kalibri") ? 600 : 200} height={item.logo.includes("kalibri") ? 264 : 64} loading="lazy" />
                  </span>
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
          <Link href="/case-studies" data-testid="link-case-studies" className="inline-flex mt-8 text-[16px] font-medium text-[#0C1220] underline underline-offset-4">
            See the work
          </Link>
        </div>
      </section>

      <section data-testid="section-veterans" className="mi-band bg-[#001028]">
        <div className="band-wrap py-16 sm:py-20">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <p className="text-[16px] mb-3">
                Cleared Defense · Startups · Veteran-Supported
              </p>
              <h2 className="text-[40px] leading-[1.05] mb-5 sm:text-[48px]">
                For the ones who stood up when it mattered.
              </h2>
              <p className="text-[18px] leading-[1.6] font-light">
                Intelligence community members, people active in politics, and current and former service members trust Rebel to build their teams. The firm speaks their language. Transitioning veterans get free resume and LinkedIn reviews. No corporate fluff, just real talent leadership for cleared defense and startups.
              </p>
            </div>
            <div className="lg:pt-16">
              <p className="text-[18px]">Ask for references.</p>
              <p className="text-[16px] mt-1 mb-8 font-light">
                Intelligence community. People active in politics. Current and former servicemembers. Shared privately, on request.
              </p>
              <div className="flex flex-col items-start gap-4">
                <Link href="/strategy-call" data-testid="button-veterans-strategy" className={btn}>
                  Book a strategy call
                </Link>
                <Link href="/cleared" data-testid="link-veterans-cleared" className="text-sm font-semibold underline underline-offset-4">
                  Cleared recruiting
                </Link>
                <div>
                  <a
                    href="https://calendly.com/richielam/vets?back=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="button-vet-review"
                    className="text-sm font-semibold underline underline-offset-4"
                  >
                    Free veteran resume and LinkedIn review
                  </a>
                  <p className="text-[14px] mt-2">Transitioning out? No strings.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogoStrip />
      <PullQuotes />
      <ReachPeople id="reach" />

      <section data-testid="section-cta" className="band-red">
        <div className="max-w-[1140px] mx-auto px-5 py-16 sm:py-24">
          <h2 className="text-[40px] leading-[1.05] text-[#0C1220] mb-4 sm:text-[48px]">
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
            <Link href="/jobs" className="text-[#0C1220] underline underline-offset-4">
              See open jobs
            </Link>
            .
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
