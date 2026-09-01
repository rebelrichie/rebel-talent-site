import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import GlowCard from "@/components/GlowCard";
import CapacityBadge from "@/components/CapacityBadge";

import headAndHeartCover from "@assets/Head_And_Heart_1773068092478.PNG";
import unfinishedRoomsCover from "@assets/UR-BookCover_1773068071585.png";

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
  "description": "Founder of Rebel Talent Systems. 14+ years in recruiting. From booking bands at music venues in Grand Rapids to fractional Head of Talent/Lead Talent Consultant for defense contractors and AI startups. Author of Head and Heart and Unfinished Rooms.",
  "knowsAbout": [
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
    "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7412825035092045824"
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

export default function About() {
  return (
    <PageLayout>
      <PageSEO
        title="Richie Lampani | Founder, Rebel Talent Systems"
        description="Richie Lampani: 14 years in recruiting, from booking bands in Grand Rapids to building cleared/AI hiring funnels for defense and startups. Founder, Rebel Talent."
        path="/about"
        ogTitle="Richie Lampani | Founder, Rebel Talent Systems"
        ogDescription="Operator. Builder. Embedded Head of Talent/Lead Talent Consultant. Five cities. Two books. One thesis: build the machine and leave the client owning it."
        ogImage="og-about.png"
        schemas={[personSchema]}
        breadcrumbs={BREADCRUMBS}
      />

      {/* ───────────── HERO ───────────── */}
      <section data-testid="section-hero" className="relative overflow-hidden bg-rebel-space">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 0% 0%, rgba(220,38,38,0.08) 0%, transparent 55%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 z-10">
          <p className="font-mono text-[11px] sm:text-xs tracking-[0.3em] uppercase text-zinc-400 mb-6 sm:mb-10">
            About
          </p>
          <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-end">
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.035em] text-white leading-[1.02] mb-4 sm:mb-6" data-testid="text-name">
                Richie Lampani.<br />
                <span className="text-rebel-red">Five cities. One thesis.</span>
              </h1>
              <p className="text-base sm:text-xl text-zinc-300 max-w-2xl leading-[1.55] mb-4" data-testid="text-intro">
                I started in music venues in Grand Rapids, reading rooms and booking bands nobody had heard of yet. Then more than a decade in the staffing trenches, watching the old model up close and clocking exactly what was broken about it. I didn&rsquo;t leave to start another agency. I left to build the thing that replaces it.
              </p>
              <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-[1.55] mb-6">
                <span className="text-zinc-200 font-semibold">Rebel Talent Systems</span> is the firm I wished existed when I was on the other side of the desk. I become your Head of Talent/Lead Talent Consultant for a quarter, two, a year, backed by the team below, and I leave you owning the system. Embedded work runs on a flat retainer with no placement fee. Search work is priced up front, so you know the number before we start.
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-3 mb-6">
                <CapacityBadge />
                {/* Safe addition — link to the Vision manifesto */}
                <Link href="/about/vision" data-testid="link-about-vision" className="text-rebel-red hover:text-white text-sm font-semibold transition-colors no-underline">
                  Read the vision &rarr;
                </Link>
                <a href="https://linkedin.com/in/richielampani" target="_blank" rel="noopener noreferrer" data-testid="link-linkedin" className="text-zinc-400 hover:text-white text-sm transition-colors no-underline">
                  LinkedIn ↗
                </a>
                <a href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7412825035092045824" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white text-sm transition-colors no-underline">
                  Rebel Built (newsletter) ↗
                </a>
                <a href="mailto:richie@rebeltalentsystems.com" data-testid="link-email" className="text-zinc-400 hover:text-white text-sm transition-colors no-underline">
                  Email ↗
                </a>
              </div>
            </div>
            <div className="shrink-0">
              <div className="w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 overflow-hidden border border-zinc-800 rounded-sm">
                <img src="/richie-portrait.jpg" alt="Richie Lampani, Founder of Rebel Talent Systems" className="w-full h-full object-cover object-top" data-testid="img-profile" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── STATS GRID ───────────── */}
      <section className="bg-rebel-space pt-4 pb-12 sm:pb-16 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
          <ScrollReveal variant="fade-up" delay={200}>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {[
              { value: "14+", label: "Years In Recruiting", numeric: true },
              { value: "PMP", label: "Certified 2024", numeric: false },
              { value: "53K+", label: "LinkedIn Followers", numeric: true },
              { value: "8K+", label: "Newsletter Subs", numeric: true },
              { value: "TS/SCI", label: "Cleared Hiring", numeric: false },
            ].map((stat) => (
              <div key={stat.label} className="border border-zinc-800 bg-zinc-900/30 p-4 sm:p-5 text-center" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}>
                {stat.numeric ? (
                  <AnimatedCounter value={stat.value} className="font-display text-xl sm:text-2xl font-bold text-rebel-red mb-1" />
                ) : (
                  <div className="font-display text-xl sm:text-2xl font-bold text-rebel-red mb-1">{stat.value}</div>
                )}
                <div className="text-zinc-400 text-xs tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ───────────── HOW I GOT HERE (Narrative timeline) ───────────── */}
      <section className="bg-rebel-space py-16 sm:py-20 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fade-up">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-2 pb-3 border-b border-rebel-red/30">
              How I got here
            </h2>
            <p className="text-zinc-400 text-sm mb-8 italic">
              Hudsonville &rarr; Grand Rapids &rarr; New York &rarr; Chicago &rarr; Atlanta.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up">
            <div className="mb-14">
              <p className="text-zinc-300 text-base sm:text-lg leading-[1.7] max-w-3xl mb-8">
                Grew up on a farm. Went to school in the city. Bartended for years. Moved to New York the first chance I got, then Chicago. Atlanta&rsquo;s home now.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <figure>
                  <img
                    src="/richie-hudsonville-1990.jpg"
                    alt="Hudsonville Rocket Football team photo, 1990"
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover border border-zinc-800"
                  />
                  <figcaption className="text-zinc-400 text-xs italic mt-2 leading-snug">
                    Hudsonville, 1990. Find me in the lineup.
                  </figcaption>
                </figure>
                <figure>
                  <img
                    src="/richie-bartending.jpg"
                    alt="Richie Lampani behind the bar, Patagonia trucker hat"
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover border border-zinc-800"
                  />
                  <figcaption className="text-zinc-400 text-xs italic mt-2 leading-snug">
                    Behind the bar. Years of it.
                  </figcaption>
                </figure>
                <figure>
                  <img
                    src="/richie-longboard.jpg"
                    alt="Richie Lampani on a longboard at golden hour in Atlanta"
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover object-top border border-zinc-800"
                  />
                  <figcaption className="text-zinc-400 text-xs italic mt-2 leading-snug">
                    Atlanta now. Golden hour, longboard, headphones.
                  </figcaption>
                </figure>
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-12">

            <ScrollReveal variant="fade-up">
              <div className="grid sm:grid-cols-[160px_1fr] gap-6 sm:gap-10">
                <div>
                  <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase">2005 to 2013</div>
                  <div className="text-zinc-300 font-semibold mt-1">Music venues</div>
                </div>
                {/* Safe addition (2026-09 trim): era condensed to one paragraph, photos dropped */}
                <div className="text-zinc-300 text-base leading-[1.7]">
                  <p>
                    Started in 2005 booking shows at a small Grand Rapids venue, renting the big room at <span className="text-white">The Intersection</span> whenever I had a name big enough to fill it. Co-founded <span className="text-white">Rocket Entertainment Group</span> and wrote a column for <span className="text-white">Recoil Magazine</span> on the side. A guy named Dave taught me audiences prefer authenticity over polish. Two decades later, that&rsquo;s still the line I build on.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up">
              <div className="grid sm:grid-cols-[160px_1fr] gap-6 sm:gap-10">
                <div>
                  <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase">2012 to 2023</div>
                  <div className="text-zinc-300 font-semibold mt-1">Staffing trenches</div>
                </div>
                {/* Safe addition (2026-09 trim): era condensed to one paragraph, photo dropped */}
                <div className="text-zinc-300 text-base leading-[1.7]">
                  <p>
                    Robert Half. Addison Group. A dozen names in between. Eleven years of sales rankings, quarterly contests, and resumes by the hundred taught me how to read a JD between the lines, pull a cleared candidate out of nowhere on a Friday afternoon, and talk to engineers who hate being talked to by recruiters. It also taught me where the old model breaks: contingency pay rewards speed, not fit. Quality of hire, retention, your CFO&rsquo;s blood pressure. None of that pays the recruiter. I wanted to build the opposite.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up">
              <div className="grid sm:grid-cols-[160px_1fr] gap-6 sm:gap-10">
                <div>
                  <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase">Feb 2023</div>
                  <div className="text-zinc-300 font-semibold mt-1">Underground Admins</div>
                </div>
                {/* Safe addition (2026-09 trim): era condensed to one paragraph */}
                <div className="text-zinc-300 text-base leading-[1.7]">
                  <p>
                    My partner Amy and I got laid off from the same company in the same week. Five days later we started <span className="text-white">Underground Admins</span>. I&rsquo;m still a minority owner, but it runs independently of Rebel Talent. If you need <span className="text-zinc-300">contingent or contract search</span>, that&rsquo;s its lane. Amy runs it: <a href="mailto:amy@undergroundadmins.com" className="text-rebel-red no-underline hover:text-white transition-colors">amy@undergroundadmins.com</a>.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up">
              <div className="grid sm:grid-cols-[160px_1fr] gap-6 sm:gap-10">
                <div>
                  <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase">Oct 2025 to now</div>
                  <div className="text-zinc-300 font-semibold mt-1">Rebel Talent Systems</div>
                </div>
                {/* Safe addition (2026-09 trim): era condensed, photo dropped; team details
                    moved to the new team section below */}
                <div className="text-zinc-300 text-base leading-[1.7]">
                  <p>
                    Rebel Talent is scaling. I embed as your Head of Talent/Lead Talent Consultant for a quarter, six months, a year. I build the funnel, write the JDs, run interview loops, close hires, and I&rsquo;m on every engagement, backed by the team below. Wrote two books in the first six months (Head and Heart, December 2025; Unfinished Rooms, March 2026) and built the operator stack my clients run inside: 27 AI agents and a custom ATS/CRM, from scratch.
                  </p>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Pull quote */}
          <ScrollReveal variant="fade-up">
          <blockquote className="mt-14 border-l-2 border-rebel-red pl-6 max-w-3xl">
            <p className="text-zinc-200 text-lg sm:text-xl leading-relaxed italic">
              &ldquo;I&rsquo;ve been doing this for 14+ years and I still love it, which either means I&rsquo;m dedicated or slightly unhinged. Probably both.&rdquo;
            </p>
          </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Section removed 2026-08: "Why I won't run an agency" contradicted the
          contingent and retained offerings now sold on /services and /startups. */}

      {/* ───────────── THE TEAM ───────────── */}
      {/* Safe addition (2026-09): the team section. Everyone who touches an
          engagement, what they do, first names only. */}
      <section className="bg-rebel-space py-16 sm:py-20 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fade-up">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-3 pb-3 border-b border-rebel-red/30" data-testid="heading-team">
              The team
            </h2>
            <p className="text-zinc-400 text-sm mb-10 italic max-w-2xl">
              Everyone works under my direction, and I&rsquo;m on every engagement. Here&rsquo;s who does what.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                name: "Chris Moscato",
                title: "Head of Client Acquisition",
                blurb:
                  "Opens and runs retained and contingent accounts. If you're a startup or a scaling team, Chris is your first call, and he stays on the account after the ink dries.",
                linkedin: "https://www.linkedin.com/in/chrismoscato/",
                email: "christopher@rebeltalentsystems.com",
              },
              {
                name: "Hannah Kerrigan",
                title: "Full Desk Recruiter",
                blurb:
                  "Signs accounts and fills them, client side and candidate side in one seat. Specialty: sales hiring. SDRs, AEs, and the leaders who run them.",
                linkedin: "https://www.linkedin.com/in/-hannah-kerrigan/",
                email: "hannah@rebeltalentsystems.com",
              },
              {
                name: "Veronica S.",
                title: "Recruiter",
                blurb:
                  "Sourcing, screening, and pipeline. Runs searches end to end and keeps candidates moving from first touch to signed offer.",
                linkedin: "https://www.linkedin.com/in/veronica-s-26750a110/",
                email: "veronica@rebeltalentsystems.com",
              },
              {
                name: "Mike Wrona",
                title: "Recruitment Consultant",
                blurb:
                  "Full desk: brings in the role, then goes out and fills it. Business development and delivery across tech and go-to-market.",
                linkedin: "https://www.linkedin.com/in/wrona/",
                email: "mike@rebeltalentsystems.com",
              },
            ].map((person) => (
              <ScrollReveal key={person.name} variant="fade-up">
                <GlowCard>
                  <div className="border border-zinc-800 bg-zinc-900/40 p-6 h-full flex flex-col" data-testid={`team-${person.name.split(" ")[0].toLowerCase()}`}>
                    <h3 className="font-display text-lg font-bold text-white uppercase mb-1">{person.name}</h3>
                    <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-3">{person.title}</div>
                    <p className="text-zinc-300 text-sm leading-relaxed mb-4">{person.blurb}</p>
                    <div className="mt-auto flex items-center gap-4 text-sm">
                      <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors no-underline">
                        LinkedIn ↗
                      </a>
                      <a href={`mailto:${person.email}`} className="text-zinc-400 hover:text-white transition-colors no-underline">
                        Email ↗
                      </a>
                    </div>
                  </div>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── THE AGENTS ───────────── */}
      {/* Safe addition (2026-09): the named AI agents inside Rebel Command.
          Clearly labeled as AI so nobody mistakes them for people. */}
      <section className="bg-zinc-950 py-16 sm:py-20 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fade-up">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-3 pb-3 border-b border-rebel-red/30" data-testid="heading-agents">
              The agents
            </h2>
            <p className="text-zinc-400 text-sm mb-10 italic max-w-2xl">
              Rebel Command runs 27 AI agents under the hood. These five do the front-line work. Every one of them works under human direction, and nothing goes out the door without a person signing off.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                name: "Architect",
                role: "The Leader",
                blurb:
                  "Runs point on the whole system. Directs the other agents, scores the pipeline, and flags what needs a human.",
              },
              {
                name: "Miles",
                role: "The SDR",
                blurb:
                  "Outbound that never sleeps. Researches prospects, drafts outreach, and tees up conversations for the team to take.",
              },
              {
                name: "Vicky",
                role: "Admin",
                blurb:
                  "Schedules, screens, coordinates. Keeps every search organized so nothing slips through the cracks.",
              },
              {
                name: "Rachael",
                role: "The Cleared Sourcer",
                blurb:
                  "Maps cleared talent: Secret, TS, TS/SCI. Builds candidate profiles for the roles most tools can't touch.",
              },
              {
                name: "Larry",
                role: "Commercial Sourcing",
                blurb:
                  "Sources commercial tech and GTM talent, engineers to account executives, enriched before a recruiter ever opens a tab.",
              },
            ].map((agent) => (
              <ScrollReveal key={agent.name} variant="fade-up">
                <GlowCard>
                  <div className="border border-zinc-800 bg-zinc-900/30 p-6 h-full" data-testid={`agent-${agent.name.toLowerCase()}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-display text-lg font-bold text-white uppercase">{agent.name}</h3>
                      <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-zinc-400 border border-zinc-700 rounded-full px-2 py-0.5">AI</span>
                    </div>
                    <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-3">{agent.role}</div>
                    <p className="text-zinc-300 text-sm leading-relaxed">{agent.blurb}</p>
                  </div>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── PROOF: WHAT 14 YEARS BUILT ───────────── */}
      <section className="bg-rebel-space py-16 sm:py-20 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fade-up">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-3 pb-3 border-b border-rebel-red/30">
              What 14 years actually built
            </h2>
            <p className="text-zinc-400 text-sm mb-10 italic max-w-2xl">
              Real engagements. Real numbers. Pulled straight from the case studies. Go read them if you want the full receipts.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-4">
            <ScrollReveal variant="fade-up">
            <GlowCard>
              <div className="border border-zinc-800 bg-zinc-900/40 p-6 h-full">
                <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-3">EarthDaily Federal</div>
                <div className="font-display text-3xl font-bold text-white mb-1">9 hires</div>
                <div className="text-zinc-400 text-sm mb-4">ongoing engagement</div>
                <ul className="text-zinc-300 text-sm space-y-1.5 leading-relaxed">
                  <li>&bull; 6 FTE + 3 contractors (geospatial / cleared)</li>
                  <li>&bull; ~$294K in agency fees avoided</li>
                  <li>&bull; ~335% confirmed ROI on the engagement</li>
                  <li>&bull; &lt; 30 days average time-to-hire</li>
                </ul>
              </div>
            </GlowCard>
            </ScrollReveal>

            <ScrollReveal variant="fade-up">
            <GlowCard>
              <div className="border border-zinc-800 bg-zinc-900/40 p-6 h-full">
                <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-3">Kalibri Labs</div>
                <div className="font-display text-3xl font-bold text-white mb-1">360+ apps</div>
                <div className="text-zinc-400 text-sm mb-4">in 24 hours from launch</div>
                <ul className="text-zinc-300 text-sm space-y-1.5 leading-relaxed">
                  <li>&bull; ML Engineer search, signed in 34 days</li>
                  <li>&bull; ~$20K saved vs. an agency placement</li>
                  <li>&bull; Both finalists came from outbound sourcing</li>
                  <li>&bull; Zero of the 360 inbound made finals (by design)</li>
                </ul>
              </div>
            </GlowCard>
            </ScrollReveal>

            <ScrollReveal variant="fade-up">
            <GlowCard>
              <div className="border border-zinc-800 bg-zinc-900/40 p-6 h-full">
                <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-3">Legal Managed Services</div>
                <div className="font-display text-3xl font-bold text-white mb-1">20 hires</div>
                <div className="text-zinc-400 text-sm mb-4">24 months &middot; 90% retention</div>
                <ul className="text-zinc-300 text-sm space-y-1.5 leading-relaxed">
                  <li>&bull; ~$5K&ndash;$8K cost per hire</li>
                  <li>&bull; vs. industry norm $30K+ per hire</li>
                  <li>&bull; Embedded retainer, predictable cost, no surprises</li>
                </ul>
              </div>
            </GlowCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ───────────── SPECIALIZATIONS ───────────── */}
      <section className="bg-rebel-space py-16 sm:py-20 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fade-up">
            <h2 className="font-display text-xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-3 pb-3 border-b border-rebel-red/30" data-testid="heading-specializations">
              Specializations
            </h2>
            <p className="text-zinc-400 text-sm mb-8 italic max-w-2xl">
              The seats I&rsquo;ve actually filled, not the keywords on my LinkedIn.
            </p>
          </ScrollReveal>
          <ScrollReveal variant="fade-up">
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {[
              { area: "Forward Deployed Engineers (FDEs)", note: "Technical enough to build. Commercial enough to close. Rare." },
              { area: "AI/ML Engineers & Research Scientists", note: "From applied ML to research scientist with publications." },
              { area: "Cleared positions: Secret, TS, TS/SCI", note: "FSP, CI-poly, lifestyle. I know what each gates." },
              { area: "Geospatial scientists & intelligence analysts", note: "Defense and federal geo-intel programs." },
              { area: "GTM: AEs, SEs, RevOps, CSMs", note: "Series A to C startups. Founder-led to first VP." },
              { area: "Defense contractor workforce buildouts", note: "Standing up entire functions from scratch." },
              { area: "Backend & infrastructure engineers", note: "Distributed systems, platform, SRE." },
              { area: "ATS implementation & optimization", note: "Greenhouse, Ashby, Lever, Workable, custom." },
            ].map((item) => (
              <div key={item.area} className="border-l border-zinc-800 pl-4 py-1">
                <div className="text-zinc-200 text-sm font-semibold leading-snug">{item.area}</div>
                <div className="text-zinc-400 text-xs mt-1 leading-relaxed">{item.note}</div>
              </div>
            ))}
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ───────────── BUILT BY ME (books + newsletter + system) ───────────── */}
      <section className="bg-zinc-950 py-16 sm:py-20 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <ScrollReveal variant="fade-up">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-3 pb-3 border-b border-rebel-red/30" data-testid="heading-books">
              Built by me
            </h2>
            <p className="text-zinc-400 text-sm mb-10 italic max-w-2xl">
              The books, the newsletter, and the operator stack I run my business on.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <ScrollReveal variant="fade-up">
            <GlowCard>
              <div className="border border-zinc-800 bg-zinc-900/30 p-6 flex flex-col sm:flex-row gap-5 items-start h-full">
                <img src={headAndHeartCover} alt="Head and Heart book cover" className="w-28 shrink-0 border border-zinc-700" loading="lazy" />
                <div>
                  <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-2">Book &middot; Dec 2025</div>
                  <h3 className="font-display text-lg font-bold text-white uppercase mb-2">Head and Heart</h3>
                  <p className="text-zinc-400 text-sm mb-3 italic">Winning the AI Recruiting War</p>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                    A war manual for the recruiters, jobseekers, and leaders who refuse to play the game safe. Raw stories from the front lines. The Code, Creed, and Oath every recruiter needs to survive the AI purge. Plus a Candidate Playbook appendix for the other side of the table.
                  </p>
                  <a href="https://a.co/d/0hQXqHMm" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-rebel-red text-sm font-semibold no-underline hover:text-white transition-colors">
                    Buy on Amazon <span className="text-xs">&#8594;</span>
                  </a>
                </div>
              </div>
            </GlowCard>
            </ScrollReveal>

            <ScrollReveal variant="fade-up">
            <GlowCard>
              <div className="border border-zinc-800 bg-zinc-900/30 p-6 flex flex-col sm:flex-row gap-5 items-start h-full">
                <img src={unfinishedRoomsCover} alt="Unfinished Rooms book cover" className="w-28 shrink-0 border border-zinc-700" loading="lazy" />
                <div>
                  <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-2">Book &middot; Mar 2026</div>
                  <h3 className="font-display text-lg font-bold text-white uppercase mb-2">Unfinished Rooms</h3>
                  <p className="text-zinc-400 text-sm mb-3 italic">Why Great Employees Keep One Foot Out the Door</p>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                    Started as a single chapter in Head and Heart. I couldn&rsquo;t let go of the idea. Retention isn&rsquo;t satisfaction, it&rsquo;s cognitive closure. Every unresolved conversation, every unclear expectation, every abandoned project leaves an &ldquo;unfinished room&rdquo; in someone&rsquo;s mind. Smart companies close those rooms. Great ones never open them.
                  </p>
                  <a href="https://a.co/d/00XELail" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-rebel-red text-sm font-semibold no-underline hover:text-white transition-colors">
                    Buy on Amazon <span className="text-xs">&#8594;</span>
                  </a>
                </div>
              </div>
            </GlowCard>
            </ScrollReveal>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <ScrollReveal variant="fade-up">
            <GlowCard>
              <div className="border border-zinc-800 bg-zinc-900/30 p-6 h-full">
                <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-2">Newsletter</div>
                <h3 className="font-display text-lg font-bold text-white uppercase mb-2">Rebel Built</h3>
                <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                  Weekly playbook for operators, founders, and recruiters who want the inside game. 8,000+ subs. No fluff, no sponsored takes, no &ldquo;5 hacks to&rdquo; bait.
                </p>
                <a href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7412825035092045824" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-rebel-red text-sm font-semibold no-underline hover:text-white transition-colors">
                  Subscribe <span className="text-xs">&#8594;</span>
                </a>
              </div>
            </GlowCard>
            </ScrollReveal>

            <ScrollReveal variant="fade-up">
            <GlowCard>
              <div className="border border-zinc-800 bg-zinc-900/30 p-6 h-full">
                <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-2">Operator Stack</div>
                <h3 className="font-display text-lg font-bold text-white uppercase mb-2">Rebel Command</h3>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  The system I run my business on, built from scratch. Custom ATS/CRM, 27 AI agents for sourcing &middot; outreach &middot; contract intelligence &middot; pipeline scoring, embedded into how I work, not bolted on top. My clients run inside it.
                </p>
              </div>
            </GlowCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ───────────── TESTIMONIALS (two) ───────────── */}
      <section className="bg-rebel-space py-16 sm:py-20 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 space-y-12">
          <ScrollReveal variant="fade-up">
          <blockquote className="relative">
            <span className="absolute -top-4 -left-2 text-rebel-red/20 text-6xl font-serif leading-none select-none">&ldquo;</span>
            <p className="text-zinc-200 text-lg sm:text-xl leading-relaxed italic mb-4 pl-4">
              In a review, I was told I had an amazing team, cohesive and indistinguishable from full time employees.
            </p>
            <footer className="text-zinc-400 text-sm pl-4">
              <span className="text-zinc-300 font-semibold">Arin</span>, VP of Operations &middot; EarthDaily Federal
            </footer>
          </blockquote>
          </ScrollReveal>

          <ScrollReveal variant="fade-up">
          <blockquote className="relative">
            <span className="absolute -top-4 -left-2 text-rebel-red/20 text-6xl font-serif leading-none select-none">&ldquo;</span>
            <p className="text-zinc-200 text-lg leading-relaxed italic mb-4 pl-4">
              I&rsquo;m used to recruiters sending half-vetted resumes that I still need to comb through. With Richie? Not the case. He does the heavy lifting, and the quality speaks for itself. One standout IT candidate has already proven to be a rockstar. Within just over 13 months, they&rsquo;ve grown into a more valuable role and are thriving.
            </p>
            <footer className="text-zinc-400 text-sm pl-4">
              <span className="text-zinc-300 font-semibold">Keisha Ah Loo-Yates</span>, Strategic IT Leader &middot; U.S. Army (Airborne) Combat Veteran
            </footer>
          </blockquote>
          </ScrollReveal>

          <ScrollReveal variant="fade-up">
          <blockquote className="relative">
            <span className="absolute -top-4 -left-2 text-rebel-red/20 text-6xl font-serif leading-none select-none">&ldquo;</span>
            <p className="text-zinc-200 text-lg leading-relaxed italic mb-4 pl-4">
              I just want to thank you for all your assistance moving this pipeline to completion. It means a lot to me, and the tech org.
            </p>
            <footer className="text-zinc-400 text-sm pl-4">
              <span className="text-zinc-300 font-semibold">Michael Tracey</span>, Director of Engineering &middot; Kalibri Labs
            </footer>
          </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* ───────────── CTA ───────────── */}
      <section className="bg-rebel-space pb-20 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 pt-12">
          <ScrollReveal variant="scale">
          <div className="border border-zinc-800 bg-gradient-to-r from-rebel-red/10 to-transparent p-8 sm:p-10 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-3">
              Talk to me directly
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mb-6 max-w-lg mx-auto">
              30 minutes of straight answers for operators ready to stop the bleed and build something that lasts. You get Richie on the call, backed by a vetted team under his direction. Not a coordinator, not a discovery deck.
            </p>
            <a href="/strategy-call" data-testid="button-about-cta" className="block sm:inline-block">
              <Button className="font-display tracking-wider uppercase text-sm w-full sm:w-auto">
                Book Your Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
