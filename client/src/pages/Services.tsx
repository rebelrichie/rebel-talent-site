import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function Services() {
  return (
    <PageLayout>
      <section className="space-hero py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">
              TALENT INFRASTRUCTURE
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-bold text-white uppercase tracking-tight mb-4" data-testid="heading-services">
              Three Paths to Infrastructure
            </h1>
            <p className="text-zinc-400 text-base max-w-2xl mx-auto leading-relaxed">
              Build the hiring machine that agencies can't. Choose embedded leadership, surgical execution, or on-demand recruiting muscle. Every path leaves you with systems you own forever.
            </p>
          </div>

          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl font-bold text-white uppercase tracking-tight" data-testid="heading-fractional">
                The Anti-Agency Standard
              </h2>
              <p className="text-zinc-500 text-sm mt-2 max-w-lg mx-auto">
                We don't profit from repeat failures. Every path delivers infrastructure and results, not just recruiter hours. Systems you keep. Agencies you ditch.
              </p>
            </div>

            <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-x-visible">
              <div className="border border-zinc-800 bg-zinc-900/50 p-8 snap-start shrink-0 w-[82vw] md:w-auto" data-testid="card-service-fractional">
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
                <a href="https://calendly.com/richielam" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full font-display tracking-wider uppercase text-sm">
                    Book Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>

              <div className="border border-zinc-800 bg-zinc-900/50 p-8 snap-start shrink-0 w-[82vw] md:w-auto" data-testid="card-service-critical">
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
                <a href="https://calendly.com/richielam" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full font-display tracking-wider uppercase text-sm">
                    Book Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>

              <div className="border border-zinc-800 bg-zinc-900/50 p-8 snap-start shrink-0 w-[82vw] md:w-auto" data-testid="card-service-contract">
                <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-3">ON-DEMAND</div>
                <h3 className="font-display text-xl font-bold text-white uppercase mb-2">Rebel Contract Recruiters</h3>
                <p className="text-rebel-red font-mono text-sm mb-4">Hourly Engagement</p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Vetted contract recruiters who execute under the Rebel Talent flag. Our standards, our playbooks, deployed directly into your workflow on demand.
                </p>
                <ul className="space-y-2 mb-6">
                  {["Sourced and vetted by Rebel Talent", "Execute to our documented standards", "Scale up or down as hiring demands shift", "Fully briefed on your roles and culture", "No long-term commitment required"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                      <ArrowRight className="w-3 h-3 text-rebel-red mt-1 shrink-0" />{item}
                    </li>
                  ))}
                </ul>
                <a href="https://calendly.com/richielam" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full font-display tracking-wider uppercase text-sm">
                    Book Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center mb-8">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">ROLE SPECIALIZATIONS</div>
              <h2 className="font-display text-2xl font-bold text-white uppercase tracking-tight" data-testid="heading-roles">
                Roles We Source
              </h2>
              <p className="text-zinc-500 text-sm mt-2 max-w-xl mx-auto">
                Every hire is hard. These are the ones most recruiters get wrong. We don't.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  category: "ENGINEERING",
                  title: "Forward Deployed Engineers",
                  desc: "FDEs are a rare hybrid: technical enough to build, commercial enough to close. We know how to find operators who can live in both worlds.",
                  roles: ["Forward Deployed Engineers", "Field Engineers", "Implementation Engineers", "Solutions Architects"],
                },
                {
                  category: "AI / ML",
                  title: "AI & Machine Learning",
                  desc: "From research scientists to applied ML engineers, we source candidates who can ship, not just theorize. Across defense, fintech, and growth-stage AI companies.",
                  roles: ["AI Engineers", "ML Engineers", "Research Scientists", "Data Scientists", "MLOps Engineers"],
                },
                {
                  category: "GTM",
                  title: "Go-To-Market Talent",
                  desc: "Full GTM buildouts for technical companies. We understand the nuance between a great SE and a great AE, and build pipelines accordingly.",
                  roles: ["Account Executives", "Solutions Engineers", "Sales Engineers", "Customer Success Managers", "RevOps"],
                },
              ].map((group) => (
                <div key={group.title} className="border border-zinc-800 bg-zinc-900/30 p-6" data-testid={`card-roles-${group.category.toLowerCase()}`}>
                  <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-2">{group.category}</div>
                  <h3 className="font-display text-base font-bold text-white uppercase mb-3">{group.title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed mb-4">{group.desc}</p>
                  <ul className="space-y-1">
                    {group.roles.map((r) => (
                      <li key={r} className="flex items-center gap-2 text-xs text-zinc-400">
                        <span className="text-rebel-red font-mono">&gt;</span>{r}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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

            <Accordion type="multiple" className="border border-zinc-800 divide-y divide-zinc-800">
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
              ].map((service, i) => (
                <AccordionItem key={service.title} value={`training-${i}`} className="border-b-0 bg-zinc-900/30 px-5" data-testid={`card-training-${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  <AccordionTrigger className="hover:no-underline hover:text-rebel-red py-5 [&[data-state=open]]:text-rebel-red gap-4">
                    <div className="flex items-center gap-3 text-left">
                      <span className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase shrink-0">{service.label}</span>
                      <span className="font-display text-sm font-bold text-white uppercase tracking-wide">{service.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-400 text-sm leading-relaxed pb-5 pt-0 pl-1">
                    {service.desc}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="border border-zinc-800 bg-gradient-to-r from-rebel-red/10 to-transparent p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-white uppercase tracking-tight mb-4">
              Build the Machine Agencies Can't
            </h2>
            <p className="text-zinc-400 text-sm mb-6 max-w-lg mx-auto">
              Every engagement starts with a 30-minute strategy call. Real value, no pitch. Let's map out the fix for your hiring.
            </p>
            <a href="https://calendly.com/richielam" target="_blank" rel="noopener noreferrer" data-testid="button-services-cta">
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
