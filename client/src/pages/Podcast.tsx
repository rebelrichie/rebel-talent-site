import { ArrowRight, ExternalLink } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import GlowCard from "@/components/GlowCard";

const podcasts = [
  {
    show: "The Friday Live with Lauren Show",
    network: "Hosted by Lauren Surman",
    episode: "Networking and job seeking, with Richie Lampani",
    desc: "Live conversation with Lauren Surman on how networking actually drives job outcomes, what job seekers get wrong, and how recruiters cut through the noise. \"If I can't, my network can.\"",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/events/thefridaylivewithlaurenshow-sea7447423436546568192/theater/" },
      { label: "YouTube", url: "https://www.youtube.com/watch?v=HDU7gcgP1AU" },
    ],
  },
  {
    show: "The Resume Is Dead",
    network: "",
    episode: "So Are Job Boards. Here's What Federal Hiring Looks Like Now.",
    desc: "Why traditional applications and job boards don't move the needle in cleared and federal hiring, what hiring managers actually filter on now, and what candidates have to do differently to get seen.",
    links: [
      { label: "YouTube", url: "https://youtu.be/sit2_XuX4v4" },
    ],
  },
  {
    show: "Guidance Counselor 2.0",
    network: "",
    episode: "Episode 508: Finding Your Next Job w/ Recruiter Richie Lampani",
    desc: "Best practices for finding a job in this market. What recruiters actually look for, how to stand out, and what most candidates get wrong.",
    links: [
      { label: "Spotify", url: "https://open.spotify.com/episode/1dhrouxEGZjljlQUzXwgLx" },
    ],
  },
  {
    show: "Is This Still A Good Time?",
    network: "Purple Acorn Network",
    episode: "Episode #11: Why Agency Recruiting Feels Like a Knife Fight",
    desc: "Why agency recruiting burns people out, what clients actually want, and how to build systems that don't depend on heroics.",
    links: [
      { label: "Purple Acorn", url: "https://www.purpleacornnetwork.com/podcasts/is-this-still-a-good-time" },
      { label: "YouTube", url: "https://www.youtube.com/watch?v=XEwzniH_bXs" },
      { label: "Audible", url: "https://www.audible.co.uk/podcast/Is-This-Still-A-Good-Time/B0FRZ72T1F" },
    ],
  },
  {
    show: "Decline Invite Podcast",
    network: "",
    episode: "with Richie Lampani",
    desc: "Unfiltered conversations about recruiting, talent systems, and what actually works in hiring.",
    links: [
      { label: "YouTube", url: "https://lnkd.in/g4MZRyWK" },
      { label: "Spotify", url: "https://lnkd.in/g5_jdWtt" },
    ],
  },
  {
    show: "Risk and Reels",
    network: "A Cybersecurity Podcast",
    episode: "This Isn't the Wolf of Wall Street: Recruitment, Rewired",
    desc: "Hiring for cybersecurity and defense contractors. Cleared roles, compliance, and why most recruiters get it wrong.",
    links: [
      { label: "Spotify", url: "https://open.spotify.com/episode/46Kswxd0IwbXhH8IAIemUc" },
      { label: "Apple Podcasts", url: "https://podcasts.apple.com/us/podcast/risk-and-reels-a-cybersecurity-podcast/id1672128521" },
    ],
  },
  {
    show: "Empire Launch Podcast",
    network: "",
    episode: "ELP 0004 - Attract Top Talent",
    desc: "How to stop losing good people to bad processes. Recruiting strategy for startups and scale-ups.",
    links: [
      { label: "YouTube", url: "https://www.youtube.com/playlist?list=PLXpu8mSbTQX9h3xPqikc1WAL_MMwiwwwo" },
    ],
  },
  {
    show: "Rectec Reels",
    network: "",
    episode: "Rectec Reels with Richie Lampani",
    desc: "Real talk on recruiting tech, AI tools, and what actually moves the needle.",
    links: [
      { label: "YouTube", url: "https://www.youtube.com/watch?v=jOqHp6SwNmU" },
    ],
  },
  {
    show: "Friday Career Lunch Break",
    network: "",
    episode: "Job search advice from a recruiter",
    desc: "What candidates get wrong, what actually works, and how to stop wasting time on applications that go nowhere.",
    links: [
      { label: "YouTube", url: "https://www.youtube.com/watch?v=EMsWKG_CUPE" },
    ],
  },
  {
    show: "Exclusive Interview",
    network: "",
    episode: "Take Me Or Leave Me",
    desc: "The unfiltered version. No corporate scripts, no recruiting fluff.",
    links: [
      { label: "Spotify", url: "https://open.spotify.com/episode/1igCYRVZqk2mpIjsfZi9FF" },
    ],
  },
  {
    show: "How AI is Shaping the Future of Consulting",
    network: "",
    episode: "with Richie Lampani",
    desc: "AI's impact on fractional work, consulting models, and what happens when everyone has access to the same tools.",
    links: [
      { label: "YouTube", url: "https://www.youtube.com/watch?v=OZNHGYM9p6s" },
    ],
  },
];

export default function Podcast() {
  return (
    <PageLayout>
      <PageSEO
        title="Podcast Appearances | Fractional Recruiting with Richie Lampani"
        description="Richie Lampani featured on recruiting, cybersecurity, and startup podcasts discussing fractional leadership, AI in hiring, talent infrastructure, and cleared hiring."
        path="/podcast"
        ogTitle="Podcast Appearances | Richie Lampani on Fractional Recruiting"
        ogDescription="Straight talk on recruiting systems, AI in hiring, and why most talent acquisition is broken. Featured on Purple Acorn, Risk and Reels, Empire Launch, and more."
        breadcrumbs={[
          { name: "Home", item: "https://rebeltalentsystems.com/" },
          { name: "Podcast", item: "https://rebeltalentsystems.com/podcast" },
        ]}
      />
      {/* HERO, Hunt Club / Riviera register */}
      <section data-testid="section-hero" className="relative overflow-hidden bg-rebel-space">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 50% at 0% 0%, rgba(220,38,38,0.08) 0%, transparent 55%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-16 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 z-10">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-zinc-500 mb-6 sm:mb-10">
            Media &amp; Press
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.035em] text-white leading-[1.02] max-w-5xl" data-testid="heading-podcast">
            Straight talk on recruiting,<br />
            <span className="text-rebel-red">AI, and broken hiring.</span>
          </h1>
          <p className="mt-6 sm:mt-8 text-base sm:text-xl text-zinc-400 max-w-2xl leading-[1.55]">
            Featured on recruiting, cybersecurity, and startup podcasts on fractional recruiting, talent infrastructure, AI in hiring, and cleared hiring for defense. No corporate scripts. No fluff. Just real answers.
          </p>
        </div>
      </section>

      <section className="bg-rebel-space pt-4 pb-16 sm:pb-24 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">

          <div className="space-y-4 mb-16">
            {podcasts.map((pod, i) => (
              <ScrollReveal key={i} variant="fade-up" delay={i * 100}>
              <GlowCard className="border border-zinc-800 bg-zinc-900/30 p-6">
                <div data-testid={`card-podcast-${i}`} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-1">
                      {pod.network || pod.show}
                    </div>
                    <h3 className="font-display text-base font-bold text-white uppercase mb-1">
                      {pod.network ? pod.show : pod.episode}
                    </h3>
                    {pod.network && (
                      <p className="text-zinc-500 text-sm mb-2">{pod.episode}</p>
                    )}
                    <p className="text-zinc-400 text-sm leading-relaxed">{pod.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 shrink-0">
                    {pod.links.map((link) => (
                      <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="font-mono text-xs tracking-wider border-zinc-700 text-zinc-300 gap-1">
                          {link.label} <ExternalLink className="w-3 h-3" />
                        </Button>
                      </a>
                    ))}
                  </div>
                </div>
              </GlowCard>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal variant="scale">
          <a
            href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7412825035092045824"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-newsletter-podcast"
            className="group block border border-zinc-800 bg-zinc-900/30 p-8 text-center no-underline hover:border-rebel-red/50 transition-colors mb-6"
          >
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">NEWSLETTER</div>
            <h3 className="font-display text-xl font-bold text-white uppercase tracking-tight mb-3">
              Subscribe to Rebel Built
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4 max-w-lg mx-auto">
              More of this: recruiting strategies, hiring frameworks, and unfiltered takes. Delivered to your LinkedIn feed.
            </p>
            <span className="inline-flex items-center font-display text-sm tracking-wider uppercase text-rebel-red group-hover:text-white transition-colors">
              Subscribe on LinkedIn <ArrowRight className="ml-2 w-4 h-4" />
            </span>
          </a>
          </ScrollReveal>

          <ScrollReveal variant="scale">
          <div className="border border-zinc-800 bg-gradient-to-r from-rebel-red/10 to-transparent p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-white uppercase tracking-tight mb-4">
              Want Me on Your Podcast?
            </h2>
            <p className="text-zinc-400 text-sm mb-6 max-w-lg mx-auto">
              I talk about recruiting infrastructure, AI in hiring, fractional leadership, cleared hiring, and why most talent acquisition is fundamentally broken. No scripts. No fluff.
            </p>
            <a href="mailto:richie@rebeltalentsystems.com" data-testid="button-podcast-cta">
              <Button className="font-display tracking-wider uppercase text-sm">
                Book Me for Your Show <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
