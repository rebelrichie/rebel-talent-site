import { ArrowRight, Quote } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    initials: "KA",
    name: "Keisha Ah Loo-Yates",
    title: "Strategic IT Leader | Support Engineering Manager | U.S. Army (Airborne) Combat Veteran",
    text: "I've had the pleasure of working with Richie Lampani and let me tell you, he's not your average talent finder. Richie consistently delivers high-caliber candidates who aren't just a fit on paper, but a true match for the team and the culture. One standout IT candidate he brought to us has already proven to be a rockstar -- within just over 13 months, they've grown into a more valuable role within the organization and are thriving. That's the kind of long-term impact Richie brings to the table. What sets Richie apart is his attention to detail and the extra layer of diligence he puts into screening candidates. I'm used to recruiters sending half-vetted resumes that I still need to comb through. With Richie? Not the case. He does the heavy lifting, and the quality speaks for itself.",
  },
  {
    initials: "CG",
    name: "Colleen Garrett",
    title: "Fractional HR Leader, Leadership Coach, MBA",
    text: "I have worked with Richie since he started Underground Admins. He successfully performed searches for my company's open roles in Sales, Sales Enablement, and technical roles. Richie is the most collaborative and positive person I get the privilege to work with and I deeply trust his judgment. He has an impressive expertise in finding the right candidates for jobs and for understanding and resonating with a company's culture. My company isn't easy to please and it is exceptionally picky at a maddening level. Richie kept giving us amazing candidates and moving forward, reflecting on our feedback and adjusting on the go. I plan to work with Underground Admins wherever I go with whatever vacancy I need to fill -- he guarantees my success in hiring. Highly recommend!",
  },
  {
    initials: "NP",
    name: "Natalie Pochomis",
    title: "Data-Driven Solutions",
    text: "Richie is amazing. I've been creeping on his LinkedIn for ages -- partly for the insights, partly for the entertainment -- even though the roles he posts have nothing to do with the ones I'm pursuing. So when he offered resume reviews, I signed up immediately like a total fangirl. My existing resume was solid -- actually, it was pretty great -- but it was built for a career I'm no longer pursuing. I reached out to Richie to help me make the leap from corporate nerd to laboratory nerd. When I first opened my shiny new resume, I was totally baffled. It was unexpected. Short. And not typical chronological style. I was a little skeptical. Fast-forward two weeks and about 10 applications later: I heard back from a technical staffing agency -- for multiple roles I applied to. I had a phone screen for a direct-hire position. I even got a cold outreach from a recruiter. All of this for jobs that represent a complete career pivot. I'm a believer.",
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
      <section className="space-hero py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">
              PROOF
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-bold text-white uppercase tracking-tight mb-4" data-testid="heading-testimonials">
              What Clients Say
            </h1>
            <p className="text-zinc-400 text-base max-w-xl mx-auto">
              Real results from real people. No fluff, no embellishment -- just honest feedback from clients who've worked with me.
            </p>
          </div>

          <div className="space-y-6">
            {testimonials.map((t, i) => (
              <div key={i} className="border border-zinc-800 bg-zinc-900/30 p-6 sm:p-8" data-testid={`card-testimonial-${i}`}>
                <div className="flex items-center gap-4 mb-5 pb-5 border-b border-zinc-800">
                  <div className="w-12 h-12 border border-rebel-red/30 bg-rebel-red/10 flex items-center justify-center text-rebel-red font-display font-bold text-sm shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-white uppercase">{t.name}</h3>
                    <p className="text-zinc-500 text-xs">{t.title}</p>
                  </div>
                </div>
                <div className="relative">
                  <Quote className="w-6 h-6 text-rebel-red/20 absolute -top-1 -left-1" />
                  <p className="text-zinc-300 text-sm leading-relaxed pl-4">
                    {t.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

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
              <a href="https://calendly.com/richielam" target="_blank" rel="noopener noreferrer" data-testid="button-testimonials-cta">
                <Button className="font-display tracking-wider uppercase text-sm">
                  Book Your Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
