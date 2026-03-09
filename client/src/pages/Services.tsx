import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";

export default function Services() {
  return (
    <PageLayout>
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">
              SERVICES
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-bold text-white uppercase tracking-tight mb-4" data-testid="heading-services">
              Services
            </h1>
            <p className="text-zinc-400 text-base max-w-2xl mx-auto leading-relaxed">
              Fractional recruiting leadership for startups and defense contractors who need results. From embedded leadership to project-based execution, I bring 14+ years of recruiting experience to solve your hardest hiring challenges.
            </p>
          </div>

          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl font-bold text-white uppercase tracking-tight" data-testid="heading-fractional">
                Fractional Recruiting Leadership
              </h2>
              <p className="text-zinc-500 text-sm mt-2 max-w-lg mx-auto">
                Choose the engagement model that fits your needs. Both options deliver infrastructure and results -- not just recruiter hours.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-zinc-800 bg-zinc-900/50 p-8" data-testid="card-service-fractional">
                <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-3">CORE SERVICE</div>
                <h3 className="font-display text-xl font-bold text-white uppercase mb-2">Fractional Head of Talent</h3>
                <p className="text-rebel-red font-mono text-sm mb-4">$12K - $30K/month</p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Embedded leadership that owns your entire recruiting function. Strategy, execution, and systems -- all in one.
                </p>
                <ul className="space-y-2 mb-6">
                  {["Strategic hiring roadmap & prioritization", "End-to-end recruiting execution", "ATS setup, optimization & migration", "Interview process design & training", "Hiring manager coaching"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                      <ArrowRight className="w-3 h-3 text-rebel-red mt-1 shrink-0" />{item}
                    </li>
                  ))}
                </ul>
                <a href="https://calendar.app.google/TqhGeNMKZPcRmb4o8" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full font-display tracking-wider uppercase text-sm">
                    Book Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>

              <div className="border border-zinc-800 bg-zinc-900/50 p-8" data-testid="card-service-critical">
                <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-3">PROJECT-BASED</div>
                <h3 className="font-display text-xl font-bold text-white uppercase mb-2">Critical Hire Execution</h3>
                <p className="text-rebel-red font-mono text-sm mb-4">Project-Based Pricing</p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Surgical execution for must-fill roles. I close hard-to-find talent in weeks, not months.
                </p>
                <ul className="space-y-2 mb-6">
                  {["Executive & leadership searches", "Cleared roles (Secret, TS, TS/SCI)", "Specialized technical talent", "Embedded into your workflows", "Documented repeatable process left with you"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                      <ArrowRight className="w-3 h-3 text-rebel-red mt-1 shrink-0" />{item}
                    </li>
                  ))}
                </ul>
                <a href="https://calendar.app.google/TqhGeNMKZPcRmb4o8" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full font-display tracking-wider uppercase text-sm">
                    Book Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl font-bold text-white uppercase tracking-tight" data-testid="heading-training">
                Training & Workshops
              </h2>
              <p className="text-zinc-500 text-sm mt-2 max-w-lg mx-auto">
                Corporate training and education programs built on real recruiting experience.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  label: "CORPORATE",
                  title: "Half-Day Training",
                  desc: "4-hour intensive session. Custom curriculum based on your needs. Interactive exercises and real-world examples. 30-day email support.",
                },
                {
                  label: "CORPORATE",
                  title: "Full-Day Workshop",
                  desc: "8-hour comprehensive workshop. Hands-on practice with real scenarios. Team building and role-play exercises. 60-day email support.",
                },
                {
                  label: "CORPORATE",
                  title: "2-Week Intensive",
                  desc: "10 full days of embedded training. Build ATS infrastructure from scratch. Custom interview frameworks. AI-powered screening implementation. 90-day follow-up support.",
                },
                {
                  label: "EDUCATION",
                  title: "College Resume Workshop",
                  desc: "2-3 hour interactive workshop. Resume optimization frameworks. LinkedIn profile best practices. AI tools for job search. Real recruiter insights and Q&A.",
                },
                {
                  label: "EDUCATION",
                  title: "High School Career Prep",
                  desc: "First resumes, LinkedIn basics, and understanding career paths. Age-appropriate career exploration and practical guidance.",
                },
                {
                  label: "ADVISORY",
                  title: "Team Assessment",
                  desc: "Complete talent function audit. Strategic recommendations and roadmap. Identify gaps, redundancies, and opportunities in your current recruiting setup.",
                },
              ].map((service) => (
                <div key={service.title} className="border border-zinc-800 bg-zinc-900/30 p-6" data-testid={`card-training-${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-2">{service.label}</div>
                  <h3 className="font-display text-base font-bold text-white uppercase mb-3">{service.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-zinc-800 bg-gradient-to-r from-rebel-red/10 to-transparent p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-white uppercase tracking-tight mb-4">
              Let's Build Your Recruiting Machine
            </h2>
            <p className="text-zinc-400 text-sm mb-6 max-w-lg mx-auto">
              Every engagement starts with a conversation. Book a strategy call and we'll map out the right approach for your hiring challenges.
            </p>
            <a href="https://calendar.app.google/TqhGeNMKZPcRmb4o8" target="_blank" rel="noopener noreferrer" data-testid="button-services-cta">
              <Button className="font-display tracking-wider uppercase text-sm">
                Book Your Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
