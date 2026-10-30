import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import ContingentChrisSection from "@/components/ContingentChrisSection";
import BannerHero from "@/components/BannerHero";
import AnimatedCounter from "@/components/AnimatedCounter";
import Rise from "@/components/Rise";
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
    linkLabel: "Talk cleared recruiting",
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
    wordmark: true,
    body: "Twenty go-to-market hires in 24 months, with 90% retention.",
  },
];

const btn = "mi-btn";

const STATS = [
  { label: "Average time to hire", value: "<30", caption: "EarthDaily Federal" },
  { label: "Days to a signed ML hire", value: "34", caption: "Kalibri Labs" },
  { label: "Fee return", value: "3.4x", caption: "EarthDaily Federal fee return" },
  { label: "Retention across 20 hires", value: "90%", caption: "Legal Managed Services" },
];

const SERVICES = [
  {
    index: "01",
    kicker: "Contingent",
    sentence: "One role, one flat fee, billed when the hire starts.",
    href: "/contingent",
    label: "See contingent pricing",
    id: "contingent",
    testId: "path-contingent",
    linkTestId: "link-contingent-details",
  },
  {
    index: "02",
    kicker: "Embedded",
    sentence: "We run the desk on a monthly retainer, then leave the system with you.",
    href: "/fractional",
    label: "See embedded recruiting",
    id: "embedded",
    testId: "path-embedded",
    linkTestId: "link-fractional-details",
  },
  {
    index: "03",
    kicker: "Retained",
    sentence: "A defined role with a deadline. Half up front, half at placement.",
    href: "/services",
    label: "See retained terms",
    id: "retained",
    testId: "path-retained",
    linkTestId: "button-strategy-retained",
  },
  {
    index: "04",
    kicker: "Advisory",
    sentence: "The hiring plan, priced before you spend on a search.",
    href: "/advisory",
    label: "See advisory scope",
    id: "advisory",
    testId: "path-advisory",
    linkTestId: "link-advisory-details",
  },
];

function Stat({ label, value, caption }: { label: string; value: string; caption: string }) {
  return (
    <div className="stat">
      <p className="stat-kicker">{label}</p>
      <p className="stat-value">
        <AnimatedCounter value={value} />
      </p>
      <p className="stat-caption">{caption}</p>
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

      <section data-testid="section-hero" className="band-hero home-hero">
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

      <section data-testid="section-proof-strip" className="band-steel proof-strip star-field">
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
            {STATS.map((stat) => (
              <Stat key={stat.caption} {...stat} />
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

      <section id="engage" data-testid="section-engage" className="star-field">
        <div className="band-wrap">
          <Rise>
            <div className="section-split section-intro">
              <div>
                <p className="section-eyebrow">How we engage</p>
                <h2 className="section-display">Four ways to take the work.</h2>
              </div>
              <p className="body-copy measure">
                Contingent, embedded, retained, or advisory. The path follows the seat you already have open.
              </p>
            </div>
          </Rise>
          <div className="offer-list">
            {SERVICES.map((item, index) => (
              <Rise key={item.id} delay={index * 60}>
                <article id={item.id} data-testid={item.testId} className="depth-card offer-row">
                  <p className="offer-index" aria-hidden="true">{item.index}</p>
                  <div>
                    <h3 className="offer-title">{item.kicker}</h3>
                    <p className="body-copy measure">{item.sentence}</p>
                  </div>
                  <Link href={item.href} data-testid={item.linkTestId} className="tap-link">
                    {item.label}
                  </Link>
                </article>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      <ContingentChrisSection />

      <section data-testid="section-who" className="star-field">
        <div className="band-wrap section-split">
          <Rise>
            <div>
              <p className="section-eyebrow">Who it is for</p>
              <h2 className="section-display">Teams that can name the missing seat.</h2>
              <p className="body-copy measure">
                We are a fit when hiring is already the constraint. The company is usually Series A through C, or a defense team with a real req, not a wish list.
              </p>
            </div>
          </Rise>
          <div className="stack-cards">
            {AUDIENCES.map((item, index) => (
              <Rise key={item.title} delay={index * 60}>
                <article className="depth-card text-card">
                  <h3>{item.title}</h3>
                  <p className="body-copy">{item.body}</p>
                  {item.href && (
                    <Link href={item.href} className="tap-link text-[15px] font-medium underline underline-offset-4">
                      {item.linkLabel}
                    </Link>
                  )}
                </article>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="section-proof" className="star-field">
        <div className="band-wrap">
          <Rise>
            <div className="section-split section-intro">
              <div>
                <p className="section-eyebrow">Recent work</p>
                <h2 className="section-display">From recent work.</h2>
              </div>
              <div>
                <p className="body-copy measure">
                  Three engagements, with the figures we can stand behind. The case studies page has the fuller account.
                </p>
                <Link href="/case-studies" data-testid="link-case-studies" className="tap-link mt-4 text-[16px] font-medium underline underline-offset-4">
                  See the work
                </Link>
              </div>
            </div>
          </Rise>
          <div className="proof-grid">
            {PROOF.map((item, index) => (
              <Rise key={item.client} delay={index * 60}>
                <article className="depth-card proof-card">
                  {item.wordmark ? (
                    <span className="logo-chip logo-wordmark">
                      <span>Legal<br />Managed Services</span>
                    </span>
                  ) : (
                    <span className="logo-chip">
                      <img
                        src={item.logo}
                        alt={item.client}
                        width={item.logo?.includes("kalibri") ? 600 : 200}
                        height={item.logo?.includes("kalibri") ? 264 : 64}
                        loading="lazy"
                      />
                    </span>
                  )}
                  <div>
                    <h3>{item.client}</h3>
                    <p className="body-copy">{item.body}</p>
                  </div>
                </article>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="section-veterans" className="mi-band star-field">
        <div className="band-wrap section-split">
          <Rise>
            <div>
              <p className="section-eyebrow">Cleared and defense</p>
              <h2 className="section-display">For the ones who stood up when it mattered.</h2>
              <p className="body-copy">
                Intelligence community members, people active in politics, and current and former service members trust Rebel to build their teams. The firm speaks their language. Transitioning veterans get free resume and LinkedIn reviews. No corporate fluff, just real talent leadership for cleared defense and startups.
              </p>
            </div>
          </Rise>
          <Rise delay={60}>
            <div className="depth-card text-card">
              <p className="text-[18px]">Ask for references.</p>
              <p className="body-copy mt-2">
                Intelligence community. People active in politics. Current and former servicemembers. Shared privately, on request.
              </p>
              <div className="mt-6 flex flex-col items-start gap-3">
                <Link href="/cleared" data-testid="link-veterans-cleared" className="tap-link text-[16px] font-semibold underline underline-offset-4">
                  Talk cleared recruiting
                </Link>
                <div>
                  <a
                    href="https://calendly.com/richielam/vets?back=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="button-vet-review"
                    className="tap-link text-[16px] font-semibold underline underline-offset-4"
                  >
                    Free veteran resume and LinkedIn review
                  </a>
                  <p className="body-copy mt-2">Transitioning out? No strings.</p>
                </div>
              </div>
            </div>
          </Rise>
        </div>
      </section>

      <LogoStrip />
      <PullQuotes />

      <section data-testid="section-about-preview" className="star-field">
        <div className="band-wrap section-split about-preview">
          <Rise>
            <figure className="portrait">
              <img
                src="/richie-portrait.jpg"
                alt="Richie Lampani"
                width={1200}
                height={1500}
                loading="lazy"
              />
            </figure>
          </Rise>
          <Rise delay={60}>
            <div>
              <p className="section-eyebrow">The firm</p>
              <h2 className="section-display">Richie Lampani</h2>
              <p className="portrait-role">Founder, Rebel Talent Systems</p>
              <p className="body-copy measure">
                Fourteen years of recruiting, from commercial desks to cleared defense teams. The search ends. The hiring system stays with the company.
              </p>
              <Link href="/about" className="tap-link mt-4 text-[16px] font-medium underline underline-offset-4">
                About the firm
              </Link>
            </div>
          </Rise>
        </div>
      </section>

      <section data-testid="section-cta" className="band-red">
        <svg className="orbit-bleed" viewBox="0 0 800 480" aria-hidden="true">
          <ellipse cx="460" cy="240" rx="310" ry="168" fill="none" stroke="white" strokeWidth="1.75" />
        </svg>
        <div className="band-wrap">
          <Rise>
            <p className="section-eyebrow section-eyebrow-on-red">The open role</p>
            <h2 className="section-display red-display">Bring the open role.</h2>
            <p className="measure mb-8 max-w-xl">
              A strategy call is thirty minutes. Bring the open role, or the desk you want run. We will tell you which path fits. If we are not the right firm, we will say that too.
            </p>
            <Link href="/strategy-call" data-testid="button-book-strategy" className={`${btn} cta-invert`}>
              Book a strategy call
            </Link>
            <p className="mt-6 text-[16px]">
              Looking for a role?{" "}
              <Link href="/jobs" className="underline underline-offset-4">
                See open jobs
              </Link>
              .
            </p>
          </Rise>
        </div>
      </section>
    </PageLayout>
  );
}
