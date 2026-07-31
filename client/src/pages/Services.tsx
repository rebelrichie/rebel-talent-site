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
        title="Recruiting Services | Rebel Talent Systems"
        description="Three offerings under Richie's direction: Embedded/Fractional, Retained Search, and Contingent. Coverage across tech, business process, and GTM/sales, cleared and noncleared, entry level through executive, Series A through C and defense teams."
        path="/services"
        ogTitle="Recruiting Services | Rebel Talent Systems"
        ogDescription="Three ways to work with Rebel Talent Systems: Embedded/Fractional, Retained Search, and Contingent. Tech, business process, and GTM/sales, cleared and noncleared, entry level through executive, with Richie on every engagement."
        ogImage="og-services.png"
        breadcrumbs={[
          { name: "Home", item: "https://rebeltalentsystems.com/" },
          { name: "Services", item: "https://rebeltalentsystems.com/services" },
        ]}
      />
      {/* HERO, Hunt Club / Riviera register */}
      <section data-testid="section-hero" className="relative overflow-hidden bg-rebel-space">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 0% 0%, rgba(220,38,38,0.08) 0%, transparent 55%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-16 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 z-10">
          <p className="font-mono text-[11px] sm:text-xs tracking-[0.3em] uppercase text-zinc-400 mb-6 sm:mb-10">
            Services
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.035em] text-white leading-[1.02] max-w-4xl" data-testid="heading-services">
            You don't have a recruiting problem.<br />
            <span className="text-rebel-red">You have a hiring infrastructure problem.</span>
          </h1>
          <p className="mt-6 sm:mt-8 text-base sm:text-xl text-zinc-400 max-w-2xl leading-[1.55]">
            No SaaS tiers. Three offerings built around how you actually buy, run your recruiting function embedded, retain us for a defined role with a deadline, or engage us contingent. Every offering runs under Richie's direction, and Richie is on every engagement and every hire.
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
                The Rebel Standard
              </h2>
              <p className="text-zinc-400 text-sm mt-2 max-w-lg mx-auto">
                <TypedText text="Three offerings, one standard. We build the machine, fill the roles, and leave you owning it. The systems compound long after we're gone, and Richie is on every engagement and every hire." speed={20} />
              </p>
            </div>

            <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-x-visible">
              <ScrollReveal variant="fade-up" delay={0}>
              <GlowCard className="border border-rebel-red/50 bg-rebel-red/5 p-8 snap-start shrink-0 w-[82vw] md:w-auto h-full" data-testid="card-service-fractional">
                <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-3">EMBEDDED / FRACTIONAL</div>
                <h3 className="font-display text-xl font-bold text-white uppercase mb-2">Embedded / Fractional</h3>
                <p className="text-rebel-red font-mono text-sm mb-1">Monthly retainer · 3-month minimum</p>
                <p className="text-zinc-400 font-mono text-xs mb-4">Our flagship engagement</p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  We run your recruiting function and hand it back better than we found it. We audit and rebuild your ATS and job posts, and leave you owning a clean candidate database and the playbooks to run it, all under Richie's direction.
                </p>
                <ul className="space-y-2 mb-6">
                  {["Strategic hiring roadmap & prioritization", "End-to-end recruiting execution", "ATS audit, rebuild & job-post overhaul", "Interview process design & training", "You keep the database, systems & playbooks"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                      <ArrowRight className="w-3 h-3 text-rebel-red mt-1 shrink-0" />{item}
                    </li>
                  ))}
                </ul>
                <a href="/strategy-call" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full font-display tracking-wider uppercase text-sm">
                    Book Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </GlowCard>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={150}>
              <GlowCard className="border border-zinc-800 bg-zinc-900/50 p-8 snap-start shrink-0 w-[82vw] md:w-auto h-full" data-testid="card-service-critical">
                <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-3">RETAINED SEARCH</div>
                <h3 className="font-display text-xl font-bold text-white uppercase mb-2">Retained Search</h3>
                <p className="text-rebel-red font-mono text-sm mb-1">Half down, half on placement</p>
                <p className="text-zinc-400 font-mono text-xs mb-4">A defined role with a deadline</p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  A defined role with a deadline. We commit our full team to the search from day one, executive and specialized technical roles included, cleared and noncleared, under Richie's direction.
                </p>
                <ul className="space-y-2 mb-6">
                  {["Defined role with a committed timeline", "Cleared and noncleared roles (Secret, TS, TS/SCI)", "Executive & specialized technical searches", "Our vetted team, filling under Richie's direction", "Documented, repeatable process left with you"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                      <ArrowRight className="w-3 h-3 text-rebel-red mt-1 shrink-0" />{item}
                    </li>
                  ))}
                </ul>
                <a href="/strategy-call" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full font-display tracking-wider uppercase text-sm">
                    Book Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </GlowCard>
              </ScrollReveal>

              {/* Safe addition, Contingent offering, third of three */}
              <ScrollReveal variant="fade-up" delay={300}>
              <GlowCard className="border border-zinc-800 bg-zinc-900/50 p-8 snap-start shrink-0 w-[82vw] md:w-auto h-full" data-testid="card-service-contingent">
                <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-3">CONTINGENT</div>
                <h3 className="font-display text-xl font-bold text-white uppercase mb-2">Contingent</h3>
                <p className="text-rebel-red font-mono text-sm mb-1">Deposit up front, balance on placement</p>
                <p className="text-zinc-400 font-mono text-xs mb-4">One of three legitimate offerings</p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  We are happy to go on the journey with you and your team, just not for free. A deposit up front gets our team working your roles, with the balance due on placement, all under Richie's direction.
                </p>
                <ul className="space-y-2 mb-6">
                  {["Deposit up front, balance on placement", "Cleared and noncleared roles", "Entry level through executive", "Our vetted team, filling under Richie's direction", "Richie on every engagement and every hire"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                      <ArrowRight className="w-3 h-3 text-rebel-red mt-1 shrink-0" />{item}
                    </li>
                  ))}
                </ul>
                <a href="/strategy-call" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full font-display tracking-wider uppercase text-sm">
                    Book Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </GlowCard>
              </ScrollReveal>
            </div>

            {/* Team capacity band, applies to any offering */}
            <ScrollReveal variant="fade-up" delay={450}>
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
                  Any offering can scale with a vetted recruiter team deployed under Richie's direction, same standards, same playbooks, monthly or hourly as the pipeline demands. Richie is on every call and every hire. The team extends our reach, it doesn't replace Richie.
                </p>
              </div>
            </div>
            </ScrollReveal>

            {/* Safe addition, coverage breadth band */}
            <ScrollReveal variant="fade-up" delay={550}>
            <div className="mt-6 border border-zinc-800/70 bg-zinc-900/30 p-6 sm:p-8" data-testid="band-coverage">
              <div className="flex flex-col md:flex-row md:items-start md:gap-8">
                <div className="md:shrink-0 mb-4 md:mb-0 md:w-56">
                  <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-2">
                    COVERAGE
                  </div>
                  <h3 className="font-display text-lg font-bold text-white uppercase tracking-tight leading-tight">
                    Who we recruit
                  </h3>
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Our recruiters specialize in tech, business process, and GTM/sales. Cleared and noncleared. Entry level through executive. We work with Series A through C companies and defense teams, and Richie is on every engagement and every hire.
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
              <p className="text-zinc-400 text-sm mt-2 max-w-xl mx-auto">
                Every hire is hard. These are the ones that make or break a technical team. This is where we go deepest.
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
                  <p className="text-zinc-400 text-xs leading-relaxed mb-4">{group.desc}</p>
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
              <p className="text-zinc-400 text-sm mt-2 max-w-lg mx-auto">
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
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-left">
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
              <footer className="text-zinc-400 text-sm">
                <span className="text-zinc-300 font-semibold">Arin, VP of Operations</span>, EarthDaily Federal
              </footer>
            </blockquote>
          </div>
          </ScrollReveal>

          <ScrollReveal variant="scale">
          <div className="border border-zinc-800 bg-gradient-to-r from-rebel-red/10 to-transparent p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-white uppercase tracking-tight mb-4">
              Build the Machine You Own
            </h2>
            <p className="text-zinc-400 text-sm mb-6 max-w-lg mx-auto">
              Every engagement starts with a 30-minute strategy call. Walk me through your hardest open req, we'll map out the fix together.
            </p>
            <a href="/strategy-call" target="_blank" rel="noopener noreferrer" data-testid="button-services-cta" className="block sm:inline-block">
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
