import { ArrowRight, ExternalLink } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import GlowCard from "@/components/GlowCard";

const podcasts = [
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
      <section className="space-hero py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <ScrollReveal variant="fade-up">
          <div className="mb-16">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">
              MEDIA
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-bold text-white uppercase tracking-tight mb-4" data-testid="heading-podcast">
              Fractional Recruiting Podcast Appearances | Richie Lampani
            </h1>
            <p className="text-rebel-red font-display text-lg uppercase tracking-wider mb-4">
              Straight talk on recruiting, AI, talent systems, and why most hiring is broken.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
              I've been featured on recruiting, cybersecurity, and startup podcasts to discuss fractional recruiting, startup recruiting strategy, talent infrastructure, AI in hiring, cleared hiring for defense contractors, and why most companies fail at building effective talent systems. No corporate scripts. No fluff. Just real answers.
            </p>
          </div>
          </ScrollReveal>

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
