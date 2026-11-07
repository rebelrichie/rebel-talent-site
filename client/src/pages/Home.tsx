import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import GlobeTwinkle from "@/components/GlobeTwinkle";

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

export default function Home() {
  return (
    <PageLayout>
      <PageSEO
        title="Recruiting that scales with the company you're becoming. | Rebel Talent Systems"
        description="We fill the open role and leave the hiring system. Contingent search or an embedded desk, for Series A through C and defense teams. Book a strategy call."
        path="/"
        ogTitle="Recruiting that scales with the company you're becoming. | Rebel Talent Systems"
        ogDescription="We fill the open role and leave the hiring system. Contingent search or an embedded desk, for Series A through C and defense teams. Book a strategy call."
        ogImage="og-home-v3.png"
        schemas={[homepageSchema]}
      />

      <div className="v4-home">
        <section className="hero" id="hero" data-testid="section-hero">
          <div className="hero-motion">
          <img
            className="hero-photo"
            src="/earth-night-2560.webp"
            alt="Night Earth in the foreground, with illuminated continental cities"
            width={2560}
            height={1440}
          />
          <svg className="hero-orbits" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <defs>
              <linearGradient id="orbit-fade" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#fff" stopOpacity="0" />
                <stop offset="0.38" stopColor="#fff" stopOpacity="0.05" />
                <stop offset="0.58" stopColor="#fff" stopOpacity="0.85" />
                <stop offset="1" stopColor="#fff" stopOpacity="1" />
              </linearGradient>
              <mask id="orbit-mask">
                <rect width="1440" height="900" fill="url(#orbit-fade)" />
              </mask>
              <clipPath id="orbit-limb">
                <ellipse cx="1040" cy="430" rx="760" ry="640" />
              </clipPath>
            </defs>
            <g clipPath="url(#orbit-limb)" mask="url(#orbit-mask)" fill="none" strokeLinecap="round">
              <path d="M520 250 C 760 80, 1120 120, 1360 340" stroke="#E2C57A" strokeWidth="1.35" strokeDasharray="8 12" opacity="0.9" />
              <path d="M640 180 C 900 40, 1240 160, 1410 420" stroke="#b9d7ee" strokeWidth="1.05" strokeDasharray="2 8" opacity="0.8" />
              <path d="M1080 520 C 1180 470, 1280 430, 1388 390" stroke="#E2C57A" strokeWidth="1" strokeDasharray="1.5 6" opacity="0.75" />
            </g>
          </svg>
          <GlobeTwinkle />
          </div>
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow">Defense · Space · Series A to C</p>
            <h1>
              <span>Recruiting that scales </span>
              <span>with the company </span>
              <span>you’re becoming.</span>
            </h1>
            <p className="hero-subline">For defense and commercial buyers.</p>
            <div className="actions">
              <Link href="/strategy-call" className="button" data-testid="button-hero-strategy">
                Book a strategy call <span aria-hidden="true">↗</span>
              </Link>
              <Link href="/jobs" className="text-link">
                See open jobs <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="mineral" id="statement">
          <div className="statement">
            <h2 className="v4-display">Fractional Head of Talent for teams that can name the missing seat, and need the process to remain after it is filled.</h2>
          </div>
          <div className="logos" aria-label="Clients">
            <span>
              <img className="logo-earthdaily" src="/logo-earthdaily.png" alt="EarthDaily Federal" width={200} height={64} />
            </span>
            <span className="logo-name">Waveguide</span>
            <span>
              <img className="logo-kalibri" src="/logo-kalibri.png" alt="Kalibri Labs" width={600} height={264} />
            </span>
            <span className="logo-name legal">Legal Managed<br />Services</span>
          </div>
        </section>

        <section className="approach" id="approach">
          <figure className="approach-media">
            <img
              src="/map.jpg"
              alt="A broad view of an operations floor, with people working before a wall of technical displays"
              width={1152}
              height={864}
            />
          </figure>
          <div className="approach-copy">
            <p className="eyebrow">How we engage</p>
            <h2 className="v4-display">Strategic work,<br />with a desk that<br />still ships the hire.</h2>
            <p>We run the search and build the process around it. The artifacts and the system stay with you.</p>
            <p>Clearance expertise sits inside the same work, not off to the side.</p>
            <div className="models">
              <Link href="/fractional">Embedded / fractional <span aria-hidden="true">↗</span></Link>
              <Link href="/advisory">Advisory <span aria-hidden="true">↗</span></Link>
              <Link href="/contingent">Contingent <span aria-hidden="true">↗</span></Link>
              <Link href="/services#retained">Retained <span aria-hidden="true">↗</span></Link>
            </div>
            <Link href="/case-studies" className="text-link rule-link" data-testid="link-case-studies">
              See the work <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="proof" id="proof" data-testid="section-proof">
          <div className="proof-header">
            <p className="eyebrow">Recent work</p>
            <Link href="/case-studies" className="text-link">
              Explore the case studies <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="proof-columns">
            <article className="edf">
              <p className="proof-client">EarthDaily Federal</p>
              <h3>
                <span className="metric metric-tab">9</span>
                <span className="metric-label">placements.</span>
              </h3>
              <p className="time">Under 30 days <span>average time to hire.</span></p>
              <p>About $294K in agency fees avoided, and about 335% confirmed ROI on dollars spent to date.</p>
            </article>
            <article>
              <p className="proof-client">Kalibri Labs</p>
              <h3>
                <span className="metric">34</span>
                <span className="metric-label">days to offer.</span>
              </h3>
              <p>ML Engineer. 360+ applications in 24 hours, zero inbound in the finals, about $20K under the agency quote.</p>
            </article>
            <article>
              <p className="proof-client">Legal Managed Services</p>
              <h3>
                <span className="metric">20</span>
                <span className="metric-label">hires, 90% retained.</span>
              </h3>
              <p>GTM seats over 24 months, built as a system the team could keep.</p>
            </article>
          </div>
        </section>

        <section className="moments" id="moments">
          <div className="earth-editorial" id="earth-editorial">
            <img
              src="/earth-night-2560.webp"
              alt="A broad night view of Earth, its illuminated cities and curved horizon"
              width={2560}
              height={1440}
            />
            <div className="earth-shade" />
            <h2 className="v4-display">When the seat<br />cannot be wrong.</h2>
          </div>
          <div className="moments-body" id="moments-body">
            <div className="moment-list">
              <article className="moment">
                <span className="moment-number">01</span>
                <div>
                  <h3>A live program is waiting on the hire.</h3>
                  <p>The work is already in motion. The search has to catch it.</p>
                </div>
              </article>
              <article className="moment">
                <span className="moment-number">02</span>
                <div>
                  <h3>Volume arrived. Signal did not.</h3>
                  <p>The pipeline is busy, and still empty.</p>
                </div>
              </article>
              <article className="moment">
                <span className="moment-number">03</span>
                <div>
                  <h3>You need a function, not another vendor.</h3>
                  <p>The seat is the start. The system has to stay.</p>
                </div>
              </article>
              <article className="moment">
                <span className="moment-number">04</span>
                <div>
                  <h3>The work is cleared.</h3>
                  <p>Most recruiters have never seen a DD-254. This desk has.</p>
                </div>
              </article>
            </div>
            <figure className="founder">
              <img
                src="/richie-portrait.webp"
                alt="Richie Lampani, founder of Rebel Talent Systems"
                width={960}
                height={1200}
              />
            </figure>
          </div>
        </section>

        <div className="gold-band" aria-hidden="true" />
        <section className="closer" id="closer" data-testid="section-cta">
          <h2 className="v4-display">Tell me about<br />the seat.</h2>
          <div>
            <p>A short call. If I can help, I will say how.</p>
            <Link href="/strategy-call" className="button" data-testid="button-book-strategy">
              Book a strategy call <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
