import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";
import GlowCard from "@/components/GlowCard";
import CapacityBadge from "@/components/CapacityBadge";
import TypedText from "@/components/TypedText";

export default function Services() {
  return (
    <PageLayout>
      <PageSEO
        title="Fractional Recruiting Services | Rebel Talent Systems"
        description="Two engagement shapes for startups and defense firms: Fractional Head of Talent (embedded) or Critical Hire Execution (scoped per search). Scale either with a vetted recruiter team."
        path="/services"
        ogTitle="Fractional Recruiting Services | Rebel Talent Systems"
        ogDescription="Fractional Head of Talent from $12K/mo or Critical Hire Execution scoped per search — with vetted recruiter team capacity when you need more horsepower."
        ogImage="og-services.png"
        breadcrumbs={[
          { name: "Home", item: "https://rebeltalentsystems.com/" },
          { name: "Services", item: "https://rebeltalentsystems.com/services" },
        ]}
      />
      {/* HERO — Hunt Club / Riviera register */}
      <section data-testid="section-hero" className="relative overflow-hidden bg-rebel-space">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 0% 0%, rgba(220,38,38,0.08) 0%, transparent 55%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-16 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 z-10">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-zinc-500 mb-6 sm:mb-10">
            Services
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.035em] text-white leading-[1.02] max-w-4xl" data-testid="heading-services">
            Two engagements.<br />
            <span className="text-rebel-red">One operator.</span>
          </h1>
          <p className="mt-6 sm:mt-8 text-base sm:text-xl text-zinc-400 max-w-2xl leading-[1.55]">
            No SaaS tiers. Two engagement shapes built around how you actually buy — embed me as your Head of Talent, or scope a specific search. Either one scales with a vetted recruiter team when the pipeline calls for it.
          </p>
          <div className="mt-8 sm:mt-10">
            <CapacityBadge />
          </div>
        </div>
      </section>

      <section className="bg-rebel-space pt-2 pb-16 sm:pb-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">

          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl font-bold text-white uppercase tracking-tight" data-testid="heading-fractional">
                The Anti-Agency Standard
              </h2>
              <p className="text-zinc-500 text-sm mt-2 max-w-lg mx-auto">
                <TypedText text="I don't profit from repeat failures. Every engagement delivers infrastructure and results, not just recruiter hours. Systems you keep. Agencies you ditch." speed={20} />
              </p>
            </div>

            <div className="flex md:grid md:grid-cols-2 gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-x-visible">
              <ScrollReveal variant="fade-up" delay={0}>
              <GlowCard className="border border-rebel-red/50 bg-rebel-red/5 p-8 snap-start shrink-0 w-[82vw] md:w-auto h-full" data-testid="card-service-fractional">
                <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-3">EMBEDDED</div>
                <h3 className="font-display text-xl font-bold text-white uppercase mb-2">Fractional Head of Talent</h3>
                <p className="text-rebel-red font-mono text-sm mb-1">$12K – $30K / month · 3-month minimum</p>
                <p className="text-zinc-500 font-mono text-xs mb-4">50%+ less than contingent agency fees</p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  I run your entire recruiting function as an embedded executive. Strategy, execution, systems, and hiring manager coaching — scoped to your stage.
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
              </GlowCard>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={150}>
              <GlowCard className="border border-zinc-800 bg-zinc-900/50 p-8 snap-start shrink-0 w-[82vw] md:w-auto h-full" data-testid="card-service-critical">
                <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-3">PROJECT</div>
                <h3 className="font-display text-xl font-bold text-white uppercase mb-2">Critical Hire Execution</h3>
                <p className="text-rebel-red font-mono text-sm mb-1">Scoped per search · fixed fee</p>
                <p className="text-zinc-500 font-mono text-xs mb-4">50%+ less than contingent search fees</p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Surgical execution for must-fill roles. Executive, cleared, or specialized technical talent — closed in weeks, with the process documented and left with you.
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
              </GlowCard>
              </ScrollReveal>
            </div>

            {/* Team capacity band — applies to either engagement */}
            <ScrollReveal variant="fade-up" delay={300}>
            <div className="mt-6 border border-zinc-800/70 bg-zinc-900/30 p-6 sm:p-8" data-testid="band-team-capacity">
              <div className="flex flex-col md:flex-row md:items-start md:gap-8">
                <div className="md:shrink-0 mb-4 md:mb-0 md:w-56">
                  <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-2">
                    + TEAM CAPACITY
                  </div>
                  <h3 className="font-display text-lg font-bold text-white uppercase tracking-tight leading-tight">
                    Need more horsepower?
                  </h3>
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Either engagement can scale with a vetted recruiter team deployed under my direction — same standards, same playbooks, monthly or hourly as the pipeline demands. You still get me on every call. The team extends my reach; it doesn't replace me.
                </p>
              </div>
            </div>
            </ScrollReveal>
          </div>

          <div className="mb-16">
            <ScrollReveal variant="fade-up">
            <div className="text-center mb-8">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">ROLE SPECIALIZATIONS</div>
              <h2 className="font-display text-2xl font-bold text-white uppercase tracking-tight" data-testid="heading-roles">
                Roles We Source
              </h2>
              <p className="text-zinc-500 text-sm mt-2 max-w-xl mx-auto">
                Every hire is hard. These are the ones most recruiters get wrong. We don't.
              </p>
            </div>
            </ScrollReveal>
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
              ].map((group, i) => (
                <ScrollReveal key={group.title} variant="fade-up" delay={i * 120}>
                <div className="border border-zinc-800 bg-zinc-900/30 p-6" data-testid={`card-roles-${group.category.toLowerCase()}`}>
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
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <ScrollReveal variant="fade-up">
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl font-bold text-white uppercase tracking-tight" data-testid="heading-training">
                Training & Workshops
              </h2>
              <p className="text-zinc-500 text-sm mt-2 max-w-lg mx-auto">
                Corporate training and education programs built on real recruiting experience.
              </p>
            </div>
            </ScrollReveal>

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

          {/* Safe addition, Client testimonial */}
          <ScrollReveal variant="fade-up">
          <div className="mb-16 max-w-3xl mx-auto text-center">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-6">WHAT CLIENTS SAY</div>
            <blockquote className="relative mb-8">
              <span className="absolute -top-4 -left-2 text-rebel-red/20 text-6xl font-serif leading-none select-none">&ldquo;</span>
              <p className="text-zinc-200 text-lg leading-relaxed italic mb-4">
                In a review, I was told I had an amazing team, cohesive and indistinguishable from full time employees.
              </p>
              <footer className="text-zinc-500 text-sm">
                <span className="text-zinc-300 font-semibold">Arin, VP of Operations</span>, EarthDaily Federal
              </footer>
            </blockquote>
          </div>
          </ScrollReveal>

          <ScrollReveal variant="scale">
          <div className="border border-zinc-800 bg-gradient-to-r from-rebel-red/10 to-transparent p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-white uppercase tracking-tight mb-4">
              Build the Machine Agencies Can't
            </h2>
            <p className="text-zinc-400 text-sm mb-6 max-w-lg mx-auto">
              Every engagement starts with a 30-minute strategy call. Walk me through your hardest open req — we'll map out the fix together.
            </p>
            <a href="https://calendly.com/richielam" target="_blank" rel="noopener noreferrer" data-testid="button-services-cta">
              <Button className="font-display tracking-wider uppercase text-sm">
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
