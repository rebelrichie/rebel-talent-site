import { ArrowRight, Award, ShieldCheck, Users, Building2, BookOpen, Scale, CheckCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";

const examDomains = [
  { icon: Users, title: "Sourcing & Pipeline Development", desc: "Identifying and engaging qualified candidates across channels." },
  { icon: BookOpen, title: "Screening & Assessment", desc: "Evaluating candidates through structured, competency-based methods." },
  { icon: Building2, title: "Client & Hiring Manager Partnership", desc: "Intake, expectation-setting, and stakeholder management." },
  { icon: Scale, title: "Legal & Compliance", desc: "Employment law, EEOC, OFCCP, and ethical recruiting practices." },
  { icon: ShieldCheck, title: "Offer Management & Closing", desc: "Negotiation, compensation analysis, and candidate experience." },
  { icon: Award, title: "Recruiting Operations & Technology", desc: "ATS management, data integrity, and process optimization." },
  { icon: CheckCircle, title: "Professional Ethics & Standards", desc: "Code of conduct, confidentiality, and professional accountability." },
];

export default function Certification() {
  return (
    <PageLayout>
      <PageSEO
        title="ABCR Recruiter Certification | Rebel Talent"
        description="The American Board of Certified Recruiters (ABCR) is establishing the first exam-based professional credential for recruiting. Founded by Richie Lampani."
        path="/certification"
        ogTitle="ABCR — The Standard for Recruiting Professionals"
        ogDescription="The first exam-based professional credential for the recruiting profession. The CR designation signals verified competency, ethical conduct, and commitment to excellence."
        breadcrumbs={[
          { name: "Home", item: "https://rebeltalentsystems.com/" },
          { name: "Certification", item: "https://rebeltalentsystems.com/certification" },
        ]}
      />

      {/* Hero */}
      <section className="space-hero py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">
              A REBEL TALENT INITIATIVE
            </div>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight mb-4">
              THE STANDARD FOR{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                RECRUITING PROFESSIONALS
              </span>
            </h1>
            <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              The American Board of Certified Recruiters is establishing the first exam-based professional credential for the recruiting profession. The CR designation signals verified competency, ethical conduct, and commitment to excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://certifiedrecruiters.org/" target="_blank" rel="noopener noreferrer">
                <Button className="font-display tracking-wider uppercase text-sm px-8 py-3 bg-amber-500 hover:bg-amber-600 text-black">
                  Join the Founding Class <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <a href="https://certifiedrecruiters.org/#certification" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="font-display tracking-wider uppercase text-sm px-8 py-3 border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500">
                  Learn About Certification
                </Button>
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { value: "7", label: "CORE EXAM DOMAINS" },
              { value: "2", label: "CERTIFICATION LEVELS" },
              { value: "501(c)(6)", label: "NONPROFIT STATUS" },
              { value: "Founding", label: "CLASS NOW FORMING" },
            ].map((stat) => (
              <div key={stat.label} className="text-center border border-zinc-800 bg-zinc-900/30 rounded-lg p-4">
                <div className="font-display text-xl sm:text-2xl font-bold text-amber-400 mb-1">{stat.value}</div>
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-20 sm:py-28 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">THE MISSION</div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white uppercase tracking-tight mb-4">
              ELEVATING RECRUITING INTO A CREDENTIALED PROFESSION
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Millions of professionals work in recruiting, yet the field has long lacked the formal credentialing infrastructure found in law, accounting, finance, and human resources. ABCR was founded to change that.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { title: "FOR RECRUITERS", items: ["Distinguish yourself with an objective, exam-based credential", "Demonstrate mastery across all critical recruiting domains", "Advance your career with recognized professional standing"] },
              { title: "FOR EMPLOYERS", items: ["Identify recruiters with verified competency", "Set a clear professional standard for your TA team", "Reduce risk through ethical, compliance-aware practices"] },
              { title: "FOR THE PROFESSION", items: ["Elevate recruiting to a recognized, credentialed profession", "Establish shared standards for knowledge and ethical conduct", "Build public trust in the recruiting profession"] },
            ].map((card) => (
              <div key={card.title} className="border border-zinc-800 bg-zinc-900/30 p-6 rounded-lg">
                <h3 className="font-display text-sm font-bold text-amber-400 uppercase tracking-widest mb-4">{card.title}</h3>
                <ul className="space-y-3">
                  {card.items.map((item) => (
                    <li key={item} className="flex gap-2 text-zinc-400 text-sm leading-relaxed">
                      <span className="text-amber-500 mt-1 shrink-0">&#8227;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Designation */}
      <section className="py-20 sm:py-28 border-t border-zinc-900 bg-zinc-950/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">THE DESIGNATION</div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white uppercase tracking-tight mb-4">
              WHAT DOES CR MEAN?
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              CR — Certified Recruiter — is an exam-based professional designation awarded by ABCR to individuals who demonstrate mastery of the knowledge, skills, and ethical standards required for professional recruiting practice.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
            <div className="border border-amber-500/30 bg-amber-500/5 p-6 rounded-lg text-center">
              <div className="font-display text-3xl font-bold text-amber-400 mb-1">CR</div>
              <div className="font-mono text-xs text-zinc-400 tracking-widest uppercase mb-2">Certified Recruiter</div>
              <p className="text-zinc-500 text-sm">Advanced designation for experienced professionals</p>
            </div>
            <div className="border border-zinc-700 bg-zinc-900/30 p-6 rounded-lg text-center">
              <div className="font-display text-3xl font-bold text-zinc-300 mb-1">CRA</div>
              <div className="font-mono text-xs text-zinc-400 tracking-widest uppercase mb-2">Certified Recruiter Associate</div>
              <p className="text-zinc-500 text-sm">Entry-level pathway for emerging recruiters</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 justify-center text-sm text-zinc-400">
            {["Exam-based, not attendance-based", "Grounded in a formal Job Task Analysis", "Subject to continuing education", "Governed by an independent board"].map((item) => (
              <span key={item} className="flex items-center gap-1.5 bg-zinc-900/60 border border-zinc-800 px-3 py-1.5 rounded-full">
                <CheckCircle className="w-3.5 h-3.5 text-amber-500" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 7 Exam Domains */}
      <section className="py-20 sm:py-28 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">THE EXAM</div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white uppercase tracking-tight mb-4">
              7 CORE COMPETENCY DOMAINS
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {examDomains.map((domain) => (
              <div key={domain.title} className="border border-zinc-800 bg-zinc-900/30 p-5 rounded-lg flex gap-4 items-start">
                <domain.icon className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-white text-sm font-semibold mb-1">{domain.title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">{domain.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 border-t border-zinc-900 bg-gradient-to-b from-zinc-950 to-rebel-space">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">LIMITED ENROLLMENT</div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white uppercase tracking-tight mb-4">
            BE AMONG THE FIRST CERTIFIED RECRUITERS
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8">
            The Founding Class represents the inaugural cohort of credentialed recruiting professionals. Register your interest to receive updates on exam dates, eligibility requirements, and application details.
          </p>
          <a href="https://certifiedrecruiters.org/" target="_blank" rel="noopener noreferrer">
            <Button className="font-display tracking-wider uppercase text-sm px-10 py-3 bg-amber-500 hover:bg-amber-600 text-black">
              Join the Founding Class <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
