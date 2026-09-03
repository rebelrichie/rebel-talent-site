import { ArrowRight, Quote } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import GlowCard from "@/components/GlowCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";

const testimonials = [
  {
    initials: "A",
    name: "Arin",
    title: "VP of Operations | EarthDaily Federal",
    text: "In a review, I was told I had an amazing team, cohesive and indistinguishable from full time employees. You Da Bomb.",
  },
  {
    initials: "KA",
    name: "Keisha Ah Loo-Yates",
    title: "Strategic IT Leader | Support Engineering Manager | U.S. Army (Airborne) Combat Veteran",
    text: "I've had the pleasure of working with Richie Lampani and let me tell you, he's not your average talent finder. Richie consistently delivers high-caliber candidates who aren't just a fit on paper, but a true match for the team and the culture. One standout IT candidate he brought to us has already proven to be a rockstar. Within just over 13 months, they've grown into a more valuable role within the organization and are thriving. That's the kind of long-term impact Richie brings to the table. What sets Richie apart is his attention to detail and the extra layer of diligence he puts into screening candidates. I'm used to recruiters sending half-vetted resumes that I still need to comb through. With Richie? Not the case. He does the heavy lifting, and the quality speaks for itself.",
  },
  {
    initials: "CG",
    name: "Colleen Garrett",
    title: "Fractional HR Leader, Leadership Coach, MBA",
    text: "I have worked with Richie since he went out on his own. He successfully performed searches for my company's open roles in Sales, Sales Enablement, and technical roles. Richie is the most collaborative and positive person I get the privilege to work with and I deeply trust his judgment. He has an impressive expertise in finding the right candidates for jobs and for understanding and resonating with a company's culture. My company isn't easy to please and it is exceptionally picky at a maddening level. Richie kept giving us amazing candidates and moving forward, reflecting on our feedback and adjusting on the go. I plan to work with Richie wherever I go with whatever vacancy I need to fill. He guarantees my success in hiring. Highly recommend!",
  },
  {
    initials: "NP",
    name: "Natalie Pochomis",
    title: "Data-Driven Solutions",
    text: "Richie is amazing. I've been creeping on his LinkedIn for ages, partly for the insights, partly for the entertainment, even though the roles he posts have nothing to do with the ones I'm pursuing. So when he offered resume reviews, I signed up immediately like a total fangirl. My existing resume was solid. Actually, it was pretty great. But it was built for a career I'm no longer pursuing. I reached out to Richie to help me make the leap from corporate nerd to laboratory nerd. When I first opened my shiny new resume, I was totally baffled. It was unexpected. Short. And not typical chronological style. I was a little skeptical. Fast-forward two weeks and about 10 applications later: I heard back from a technical staffing agency, for multiple roles I applied to. I had a phone screen for a direct-hire position. I even got a cold outreach from a recruiter. All of this for jobs that represent a complete career pivot. I'm a believer.",
  },
  {
    initials: "MH",
    name: "Martyn J Hill",
    title: "Blue Collar Recruitment Specialist | Australia",
    text: "An exceptional human being with genuine care for others and a passion for recruitment. Through the magic of LinkedIn, we somehow connected at the perfect time for us both, despite being on opposite ends of the planet. Richie had just taken the plunge to start his own agency and was seeking clients for his Underground Administration business, while I was looking for a complete branding and resume overhaul. A true professional, he set up a video chat at a time that worked for us both, accommodating children's bedtimes and time zones. He's the type of person you feel like you've known since childhood, asking genuine, probing questions to understand your 'why' and effectively sell your niche. I haven't touched my LinkedIn profile since the overhaul, and it has been a lead funnel for me in the highly competitive Australian recruitment industry. One of the good guys, I highly recommend Richie.",
  },
];

export default function Testimonials() {
  return (
    <PageLayout>
      <PageSEO
        title="Client Testimonials | Rebel Talent Systems"
        description="Real feedback from startup founders, defense contractors, and hiring managers who have worked with Rebel Talent's fractional recruiting model."
        path="/testimonials"
        ogTitle="What Clients Say About Rebel Talent"
        ogDescription="No fluff, no embellishment, honest feedback from operators who've worked with Rebel Talent's embedded fractional recruiting model."
        ogImage="og-testimonials.png"
        breadcrumbs={[
          { name: "Home", item: "https://rebeltalentsystems.com/" },
          { name: "Testimonials", item: "https://rebeltalentsystems.com/testimonials" },
        ]}
      />
      {/* HERO, Hunt Club / Riviera register */}
      <section data-testid="section-hero" className="relative overflow-hidden bg-rebel-space">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 50% at 0% 0%, rgba(220,38,38,0.08) 0%, transparent 55%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-16 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 z-10">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-zinc-400 mb-6 sm:mb-10">
            Proof
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.035em] text-white leading-[1.02] max-w-4xl" data-testid="heading-testimonials">
            What clients<br />
            <span className="text-rebel-red">actually say.</span>
          </h1>
          <p className="mt-6 sm:mt-8 text-base sm:text-xl text-zinc-400 max-w-2xl leading-[1.55]">
            Real results from real people. No fluff, no embellishment, just honest feedback from clients who&rsquo;ve worked with me.
          </p>
        </div>
      </section>

      <section className="bg-rebel-space pt-4 pb-16 sm:pb-24 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="mb-12">
            <TestimonialCarousel testimonials={testimonials} />
          </div>

          <ScrollReveal variant="fade-up">
            <div className="text-center mb-6">
              <div className="font-mono text-zinc-400 text-xs tracking-[0.3em] uppercase">ALL TESTIMONIALS</div>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-4">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} variant="fade-up" delay={i * 150}>
                <GlowCard className="border border-zinc-800 bg-zinc-900/30 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-display font-bold text-xs shrink-0 ring-2 ring-rebel-red/40" style={{ background: "linear-gradient(135deg, #7f1d1d 0%, #dc2626 50%, #ea580c 100%)" }}>
                      {t.initials}
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-bold text-white uppercase">{t.name}</h3>
                      <p className="text-zinc-400 text-[11px]">{t.title}</p>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-xs leading-relaxed line-clamp-4">
                    {t.text}
                  </p>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal variant="scale">
            <div className="border border-zinc-800 bg-gradient-to-r from-rebel-red/10 to-transparent p-8 text-center mt-16">
              <h2 className="font-display text-2xl font-bold text-white uppercase tracking-tight mb-4">
                Operator-Led. Results-Driven.
              </h2>
              <p className="text-zinc-400 text-sm mb-6 max-w-lg mx-auto">
                These are just a few. Dozens more on LinkedIn from hiring managers, HR leaders, and candidates who've seen the system work.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="https://linkedin.com/in/richielampani" target="_blank" rel="noopener noreferrer" data-testid="link-linkedin-testimonials">
                  <Button variant="outline" className="font-display tracking-wider uppercase text-sm border-zinc-700 text-zinc-300">
                    View LinkedIn Profile
                  </Button>
                </a>
                <a href="/strategy-call" data-testid="button-testimonials-cta" className="block sm:inline-block">
                  <Button className="font-display tracking-wider uppercase text-sm w-full sm:w-auto">
                    Book Your Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
