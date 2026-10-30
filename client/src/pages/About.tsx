import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import ReachPeople from "@/components/ReachPeople";
import InteriorHero from "@/components/InteriorHero";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Richie Lampani",
  "jobTitle": "Fractional Head of Talent/Lead Talent Consultant",
  "url": "https://rebeltalentsystems.com/about",
  "worksFor": {
    "@type": "Organization",
    "name": "Rebel Talent",
    "url": "https://rebeltalentsystems.com"
  },
  "description": "Founder of Rebel Talent Systems. 14+ years in recruiting. Contingent, retained, and embedded hiring for defense contractors and AI startups. Author of Head and Heart and Unfinished Rooms.",
  "knowsAbout": [
    "Contingent Recruiting",
    "Fractional Recruiting",
    "Embedded Recruiting",
    "Startup Recruiting",
    "Defense Recruiting",
    "Cleared Hiring",
    "Forward Deployed Engineers",
    "AI/ML Recruiting",
    "GTM Hiring",
    "Talent Infrastructure",
    "ATS Implementation"
  ],
  "sameAs": [
    "https://linkedin.com/in/richielampani",
    "https://www.linkedin.com/newsletters/rebel-built-7412825035092045824/"
  ],
  "alumniOf": [
    {
      "@type": "EducationalOrganization",
      "name": "Davenport University"
    }
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Project Management Professional (PMP)",
      "credentialCategory": "Certification",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Project Management Institute"
      }
    }
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Fractional Head of Talent/Lead Talent Consultant",
    "occupationLocation": {
      "@type": "Country",
      "name": "United States"
    }
  }
};

const BREADCRUMBS = [
  { name: "Home", item: "https://rebeltalentsystems.com/" },
  { name: "About", item: "https://rebeltalentsystems.com/about" },
];

const TEAM: { name: string; title: string; email: string; linkedin: string; photo?: string }[] = [
  { name: "Richie Lampani", title: "Founder", email: "richie@rebeltalentsystems.com", linkedin: "https://linkedin.com/in/richielampani" },
  { name: "Chris Moscato", photo: "/chris-moscato.jpg", title: "Head of Client Acquisition", email: "christopher@rebeltalentsystems.com", linkedin: "https://www.linkedin.com/in/chrismoscato/" },
  { name: "Hannah Kerrigan", photo: "/team-hannah.webp", title: "Full Desk Recruiter", email: "hannah@rebeltalentsystems.com", linkedin: "https://www.linkedin.com/in/-hannah-kerrigan/" },
  { name: "Veronica S.", photo: "/team-veronica.webp", title: "Recruiter / Chief of Staff", email: "veronica@rebeltalentsystems.com", linkedin: "https://www.linkedin.com/in/veronica-s-26750a110/" },
  { name: "Mike Wrona", photo: "/team-mike.webp", title: "Recruitment Consultant", email: "mike@rebeltalentsystems.com", linkedin: "https://www.linkedin.com/in/wrona/" },
  { name: "Anthony Lynch", photo: "/team-anthony.webp", title: "Commercial Contingent Recruiter", email: "anthony@rebeltalentsystems.com", linkedin: "https://www.linkedin.com/in/anthonylynch/" },
  { name: "Kelli Hrivnak", photo: "/team-kelli.webp", title: "Commercial Contingent Recruiter", email: "kelli@knakdigital.com", linkedin: "https://www.linkedin.com/in/kellihrivnak/" },
  { name: "Bonnie Elton", photo: "/team-bonnie.webp", title: "Full Desk Recruiter", email: "bonnie@rebeltalentsystems.com", linkedin: "https://www.linkedin.com/in/bonniemontgomery/" },
];

const AGENTS = [
  { name: "Archie Bunker", role: "The Architect", blurb: "Builds and runs Rebel Command. He ships fixes and flags anything that needs a person." },
  { name: "Miles Jensen", role: "Client Acquisition", blurb: "Finds Series A through C teams that are hiring hard, then books the strategy call." },
  { name: "Jonah Stark", role: "Embedded Partnerships", blurb: "Opens conversations with teams that need a Head of Talent inside the building." },
  { name: "Rachael Tyrell", role: "Cleared Sourcing", blurb: "Maps Secret, TS, and TS/SCI talent so the recruiter's first call starts warm." },
  { name: "Larry Anders", role: "Commercial Sourcing", blurb: "Sources commercial engineering, product, and go-to-market talent before a recruiter opens a tab." },
];

export default function About() {
  return (
    <PageLayout>
      <PageSEO
        title="Richie Lampani | Founder, Rebel Talent Systems"
        description="Richie Lampani: 14 years in recruiting, from booking bands in Grand Rapids to building cleared and commercial hiring systems. Founder, Rebel Talent."
        path="/about"
        ogTitle="Richie Lampani | Founder, Rebel Talent Systems"
        ogDescription="Founder of Rebel Talent Systems. Contingent search, retained, and embedded recruiting for startups and defense."
        ogImage="og-about.png"
        schemas={[personSchema]}
        breadcrumbs={BREADCRUMBS}
      />

      <InteriorHero orbit="about">
        <div className="mb-6 flex items-center gap-4">
          <img src="/team-richie.webp" alt="Richie Lampani, Founder of Rebel Talent Systems" width={600} height={600} className="h-16 w-16 shrink-0 rounded-full object-cover object-top" data-testid="img-profile" />
          <p className="eyebrow-gold">Founder</p>
        </div>
        <h1 className="max-w-[14ch]" data-testid="text-name">
          We fill the seat. The system stays.
        </h1>
        <p className="measure mt-6 text-[18px] leading-[1.6]">
          Rebel Talent Systems is my firm. Fourteen years of recruiting, from Grand Rapids rooms to defense and commercial desks. I stay on the engagement. The team below runs the work with me.
        </p>
        <div className="hero-actions">
          <Link href="/strategy-call" className="mi-btn">Book a strategy call</Link>
          <Link href="/about/vision" data-testid="link-about-vision" className="hero-action">Read the vision</Link>
          <a href="https://linkedin.com/in/richielampani" target="_blank" rel="noopener noreferrer" data-testid="link-linkedin" className="hero-action">LinkedIn</a>
          <a href="mailto:richie@rebeltalentsystems.com" data-testid="link-email" className="hero-action">Email</a>
        </div>
        <p className="capacity-note">Capacity is open for contingent, retained, embedded, and advisory.</p>
      </InteriorHero>

      <section className="band-steel">
        <div className="band-wrap py-16 sm:py-20">
          <h2 className="mb-6 max-w-[16ch]">Five cities. One thesis.</h2>
          <p className="measure text-[18px] leading-[1.6]">
            Hudsonville, Grand Rapids, New York, Chicago, Atlanta. I booked shows, then spent eleven years in staffing at Robert Half, Addison Group, and a few startups. The old model pays for speed. It does not pay for the hire that stays.
          </p>
          <p className="measure mt-5 text-[18px] leading-[1.6]">
            In 2023 Amy and I started Underground Admins after the same layoff week. It still runs on its own. Rebel is the desk I wanted on the other side of the table: the search, the scorecards, and a handoff you can run. PMP, 2024. Two books in the first six months. Rebel Command is the operator stack under the desk.
          </p>
        </div>
      </section>

      <section>
        <div className="band-wrap py-16 sm:py-20">
          <h2 className="mb-3" data-testid="heading-team">The team</h2>
          <p className="measure mb-8 text-[18px] leading-[1.6]">
            Everyone works under my direction, and I stay on the engagement.
          </p>
          <div className="roster">
            {TEAM.map((person) => (
              <article key={person.name} className="roster-row" data-testid={`team-${person.name.split(" ")[0].toLowerCase()}`}>
                {person.photo ? (
                  <div className="flex items-center gap-4">
                    <picture>
                      <source
                        srcSet={person.photo.includes("chris-moscato") ? "/chris-moscato-v2.webp" : person.photo.replace(/\.(jpe?g|png)$/i, ".webp")}
                        type="image/webp"
                      />
                      <img
                        src={person.photo.replace(/\.webp$/i, ".jpg")}
                        alt={`${person.name}, ${person.title} at Rebel Talent Systems`}
                        width={320}
                        height={320}
                        loading="lazy"
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border border-zinc-700 shrink-0"
                      />
                    </picture>
                    <h3>{person.name}</h3>
                  </div>
                ) : (
                  <h3>{person.name}</h3>
                )}
                <p>{person.title}</p>
                <div className="roster-links">
                  <a href={`mailto:${person.email}`}>{person.email}</a>
                  <a href={person.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="band-wrap py-16 sm:py-20">
          <h2 className="mb-4">From the work</h2>
          <ul className="measure space-y-4 text-[18px] leading-[1.6]">
            <li>EarthDaily Federal: 11 hires, about $394K in agency fees avoided, a 3.4x return, average time to hire under 30 days.</li>
            <li>Kalibri Labs: an ML engineer signed in 34 days, about $20K under the agency quote.</li>
            <li>Legal Managed Services: 20 go-to-market hires in 24 months, with 90% retention. This work was done before Rebel Talent, at a prior firm.</li>
          </ul>
          <Link href="/case-studies" className="tap-link mt-6 inline-flex font-medium underline underline-offset-4">See the work</Link>
        </div>
      </section>

      <section>
        <div className="band-wrap py-16 sm:py-20">
          <h2 className="mb-6" data-testid="heading-books">Built by me</h2>
          <div className="roster">
            <article className="roster-row">
              <h3>Head and Heart</h3>
              <p>Book, December 2025. Winning the AI Recruiting War.</p>
              <div className="roster-links">
                <a href="https://a.co/d/0hQXqHMm" target="_blank" rel="noopener noreferrer">Buy on Amazon</a>
              </div>
            </article>
            <article className="roster-row">
              <h3>Unfinished Rooms</h3>
              <p>Book, March 2026. Why great employees keep one foot out the door.</p>
              <div className="roster-links">
                <a href="https://a.co/d/00XELail" target="_blank" rel="noopener noreferrer">Buy on Amazon</a>
              </div>
            </article>
            <article className="roster-row">
              <h3>Rebel Built</h3>
              <p>Weekly notes for operators, founders, and recruiters.</p>
              <div className="roster-links">
                <a href="https://www.linkedin.com/newsletters/rebel-built-7412825035092045824/" target="_blank" rel="noopener noreferrer">Subscribe</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section>
        <div className="band-wrap py-16 sm:py-20">
          <h2 className="mb-3" data-testid="heading-agents">The agents</h2>
          <p className="measure mb-8 text-[18px] leading-[1.6]">
            Five AI agents do front-line work inside Rebel Command. Every one of them answers to a person on the desk.
          </p>
          <div className="roster">
            {AGENTS.map((agent) => (
              <article key={agent.name} className="roster-row" data-testid={`agent-${agent.name.split(" ")[0].toLowerCase()}`}>
                <h3>{agent.name} <span className="ai-tag">AI</span></h3>
                <p>{agent.role}</p>
                <p className="measure">{agent.blurb}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="band-wrap py-16 sm:py-20">
          <blockquote className="measure">
            <p className="text-[22px] leading-snug">
              In a review, I was told I had an amazing team, cohesive and indistinguishable from full time employees.
            </p>
            <footer className="mt-4 text-[15px]">Arin, VP of Operations, EarthDaily Federal</footer>
          </blockquote>
        </div>
      </section>

      <section data-testid="section-cta" className="band-red">
        <div className="band-wrap py-16 sm:py-24">
          <h2 className="mb-4 max-w-[16ch]">Bring the role that is stuck.</h2>
          <p className="measure mb-8 text-[18px] leading-[1.6]">
            Thirty minutes. We will tell you which path fits. If we are not the right firm, we will say that too.
          </p>
          <a href="/strategy-call" data-testid="button-about-cta" className="mi-btn">
            Book a strategy call <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>
      <ReachPeople />
    </PageLayout>
  );
}
