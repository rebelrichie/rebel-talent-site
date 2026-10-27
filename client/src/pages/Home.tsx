import { Link } from "wouter";
import { ArrowRight, Compass, Layers, Search, Target } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import ContingentChrisSection from "@/components/ContingentChrisSection";
import ReachPeople from "@/components/ReachPeople";
import OrbitPanel from "@/components/OrbitPanel";

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
  { client: "EarthDaily Federal", value: "<30", caption: "Days, average time to hire" },
  { client: "EarthDaily Federal", value: "11", caption: "Placements" },
];

const NAVY_STATS = [
  { client: "EarthDaily Federal", value: "3.4x", caption: "Return. About $394K in fees avoided" },
  { client: "Legal Managed Services", value: "90%", caption: "Retention. 20 hires in 24 months" },
];

const SERVICES = [
  {
    icon: Target,
    kicker: "Contingent",
    title: "Fill one seat.",
    body: "One role. The fee is flat, set by the salary band, and invoiced when the hire starts. There is no percentage of salary. The long version is on the contingent page.",
    detailsHref: "/contingent",
    detailsLabel: "View contingent details",
    ctaHref: "/strategy-call?engagement=contingent",
    id: "contingent",
    testId: "path-contingent",
    ctaTestId: "button-strategy-contingent",
    detailsTestId: "link-contingent-details",
  },
  {
    icon: Layers,
    kicker: "Embedded / Fractional",
    title: "Keep the system.",
    body: "We sit inside the company and run the recruiting desk on a monthly retainer. The work covers the open roles, the process, and the handoff. You keep the ATS, the scorecards, and the playbooks.",
    detailsHref: "/fractional",
    detailsLabel: "View embedded recruiting",
    ctaHref: "/strategy-call?engagement=fractional",
    id: "embedded",
    testId: "path-embedded",
    ctaTestId: "button-strategy-embedded",
    detailsTestId: "link-fractional-details",
  },
  {
    icon: Search,
    kicker: "Retained",
    title: "A defined role, with a deadline.",
    body: "The fee is 50% up front and 50% at placement. It fits executive and specialized technical searches, cleared or uncleared. The search stays with us from the day it opens through the accepted offer.",
    ctaHref: "/strategy-call?engagement=retained",
  },
  {
    icon: Compass,
    kicker: "Advisory",
    title: "The plan, before the search.",
    body: "This is the work before a search: a hiring plan, compensation, interview design, or a hard look at the tools. The scope is fixed and priced up front. It is for teams that need a judgment, not a slate of candidates.",
    detailsHref: "/advisory",
    detailsLabel: "Advisory",
    ctaHref: "/strategy-call?engagement=advisory",
  },
];

function Stat({ client, value, caption, light }: { client: string; value: string; caption: string; light: boolean }) {
  return (
    <div className="px-8 py-10 sm:px-10 sm:py-12">
      <p className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${light ? "text-[#8B919A]" : "muted"}`}>{client}</p>
      <p className={`mt-4 text-[56px] font-extrabold leading-none tracking-[-0.045em] sm:text-[68px] ${light ? "text-[#0C1220]" : "text-white"}`}>{value}</p>
      <p className={`mt-4 flex items-center gap-2.5 text-[14px] leading-snug ${light ? "text-[#5C6570]" : "muted"}`}>
        <span className="inline-block h-px w-5 shrink-0 bg-[#C8102E]" />
        {caption}
      </p>
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
        ogImage="og-home.png"
        schemas={[homepageSchema]}
      />

      <section data-testid="section-hero" className="bg-white">
        <div className="grid lg:min-h-[560px] lg:grid-cols-2">
          <div className="flex flex-col justify-center bg-white px-6 py-14 sm:px-12 lg:px-16 lg:py-16 xl:px-20">
            <h1 className="max-w-[11ch] text-[#0C1220]" style={{ fontSize: "clamp(2.75rem, 4.7vw, 4.5rem)" }}>
              Recruiting that scales with the company you&rsquo;re becoming.
            </h1>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link href="/strategy-call" data-testid="button-hero-strategy" className={btn}>
                Book a strategy call <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/jobs" className="text-[15px] font-medium text-[#0C1220] underline underline-offset-4">
                See open jobs
              </Link>
            </div>
          </div>
          <OrbitPanel className="min-h-[460px] lg:min-h-full" />
        </div>
        <div className="grid lg:grid-cols-2">
          <div className="grid border-t border-[#E7E9EE] bg-white sm:grid-cols-2 sm:divide-x divide-[#E7E9EE]">
            {LIGHT_STATS.map((stat) => (
              <Stat key={stat.value + stat.caption} {...stat} light />
            ))}
          </div>
          <div className="mi-band grid bg-[#001028] sm:grid-cols-2 sm:divide-x divide-white/15">
            {NAVY_STATS.map((stat) => (
              <Stat key={stat.value + stat.caption} {...stat} light={false} />
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-[1200px] px-6 py-12 sm:px-10">
          <p className="max-w-3xl text-[18px] leading-[1.6] text-[#3D4450]">
            We fill open roles for technical, go-to-market, and operations teams. Contingent search is for one seat. Embedded recruiting is for the function you still need after we leave. We work with Series A through C companies and with defense teams, cleared and uncleared.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:px-10 sm:py-24">
          <div className="mb-16 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#C8102E]" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#C8102E]">How we engage</p>
            <span className="h-px w-10 bg-[#C8102E]" />
          </div>
          <h2 className="mx-auto mb-16 max-w-3xl text-center text-[40px] leading-[1.05] text-[#0C1220] sm:text-[48px]">
            Four ways to take the work.
          </h2>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {SERVICES.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} id={item.id} data-testid={item.testId} className="text-center lg:text-left">
                  <Icon className="mx-auto mb-5 h-7 w-7 text-[#C8102E] lg:mx-0" strokeWidth={1.25} aria-hidden="true" />
                  <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#8B919A]">{item.kicker}</p>
                  <h3 className="mb-3 text-[18px] leading-snug text-[#0C1220]">{item.title}</h3>
                  <p className="text-[15px] leading-[1.55] text-[#3D4450]">{item.body}</p>
                  <div className="mt-4 flex flex-col items-center gap-2 lg:items-start">
                    <Link href={item.ctaHref} data-testid={item.ctaTestId} className={textLink}>
                      Book a strategy call
                    </Link>
                    {item.detailsHref && item.detailsTestId && (
                      <Link href={item.detailsHref} data-testid={item.detailsTestId} className={textLink}>
                        {item.detailsLabel}
                      </Link>
                    )}
                    {item.detailsHref && !item.detailsTestId && (
                      <Link href={item.detailsHref} className={textLink}>
                        {item.detailsLabel}
                      </Link>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
          <p className="mx-auto mt-14 max-w-2xl text-center text-[16px] leading-relaxed text-[#3D4450]">
            Retained search and advisory are on{" "}
            <Link href="/services" data-testid="link-view-services" className="font-medium text-[#0C1220] underline underline-offset-4">
              How we engage
            </Link>
            . Cleared hiring stays on its{" "}
            <Link href="/cleared" className="font-medium text-[#0C1220] underline underline-offset-4">
              own page
            </Link>
            .
          </p>
        </div>
      </section>

      <section data-testid="section-government-buyers" className="border-t border-[#E7E9EE] bg-white">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 px-6 py-12 sm:px-10 lg:flex-row lg:items-center">
          <p className="max-w-3xl text-[18px] leading-snug text-[#0C1220]">
            <span className="font-semibold">Registered on SAM.gov.</span>{" "}
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

      <section data-testid="section-proof" className="border-t border-[#E7E9EE] bg-white">
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
          <Link href="/case-studies" data-testid="link-case-studies" className="inline-flex mt-8 text-[16px] font-medium text-[#0C1220] underline underline-offset-4">
            See the work
          </Link>
        </div>
      </section>

      <section data-testid="section-veterans" className="mi-band bg-[#001028]">
        <div className="max-w-[1140px] mx-auto px-5 py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-[16px] text-white/80 mb-3">
              Cleared Defense · Startups · Veteran-Supported
            </p>
            <h2 className="text-[40px] leading-[1.05] text-white mb-5 sm:text-[48px]">
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

      <section data-testid="section-cta" className="border-t border-[#E7E9EE] bg-white">
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
