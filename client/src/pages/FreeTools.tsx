import { ArrowRight, FileText, Linkedin, BookOpen, Video } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";

export default function FreeTools() {
  return (
    <PageLayout>
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">
              RESOURCES
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-bold text-white uppercase tracking-tight mb-4" data-testid="heading-free-tools">
              Free Tools
            </h1>
            <p className="text-zinc-400 text-base max-w-xl mx-auto">
              Built by someone who actually understands recruiting. Optimize your resume and LinkedIn to land more interviews.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="font-display text-xl font-bold text-white uppercase tracking-tight text-center mb-8" data-testid="heading-jobseeker">
              For Jobseekers
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="border border-zinc-800 bg-zinc-900/30 p-6 text-center" data-testid="card-resume-tool">
                <div className="w-12 h-12 border border-rebel-red/30 bg-rebel-red/10 flex items-center justify-center text-rebel-red mx-auto mb-4">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-2">FREE TOOL</div>
                <h3 className="font-display text-lg font-bold text-white uppercase mb-3">
                  The Richie Lampani Resume Breakthrough
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  The resume framework that actually gets callbacks. Built from 14+ years of knowing what recruiters look for.
                </p>
                <a href="https://www.rebeltalentsystems.com/resume-tool" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full font-display tracking-wider uppercase text-sm">
                    Get It Free <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>

              <div className="border border-zinc-800 bg-zinc-900/30 p-6 text-center" data-testid="card-linkedin-tool">
                <div className="w-12 h-12 border border-rebel-red/30 bg-rebel-red/10 flex items-center justify-center text-rebel-red mx-auto mb-4">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-2">FREE TOOL</div>
                <h3 className="font-display text-lg font-bold text-white uppercase mb-3">
                  Fix My LinkedIn Cheat Sheet
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  Quick-hit guide to making your LinkedIn profile work for you. What to fix, what to cut, and what actually matters.
                </p>
                <a href="https://www.rebeltalentsystems.com/linkedin-tool" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full font-display tracking-wider uppercase text-sm">
                    Get It Free <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="font-display text-xl font-bold text-white uppercase tracking-tight text-center mb-8" data-testid="heading-books">
              Books
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="border border-zinc-800 bg-zinc-900/30 p-6 text-center" data-testid="card-book-head-heart">
                <div className="w-12 h-12 border border-rebel-red/30 bg-rebel-red/10 flex items-center justify-center text-rebel-red mx-auto mb-4">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-2">BOOK</div>
                <h3 className="font-display text-lg font-bold text-white uppercase mb-1">Head and Heart</h3>
                <p className="text-zinc-500 text-sm mb-3">Winning the AI Recruiting War</p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  My framework for combining strategic thinking with authentic human connection in recruiting. Available on Amazon.
                </p>
                <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full font-display tracking-wider uppercase text-sm">
                    Buy on Amazon <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>

              <div className="border border-zinc-800 bg-zinc-900/30 p-6 text-center" data-testid="card-book-unfinished">
                <div className="w-12 h-12 border border-rebel-red/30 bg-rebel-red/10 flex items-center justify-center text-rebel-red mx-auto mb-4">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-2">BOOK</div>
                <h3 className="font-display text-lg font-bold text-white uppercase mb-1">Unfinished Rooms</h3>
                <p className="text-zinc-500 text-sm mb-3">Why Great Employees Keep One Foot Out the Door</p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  A psychological framework for understanding employee turnover and disengagement. Coming March 31, 2026.
                </p>
                <Button variant="outline" className="w-full font-display tracking-wider uppercase text-sm border-zinc-700 text-zinc-400" disabled>
                  Coming Soon
                </Button>
              </div>
            </div>
          </div>

          <div className="mb-16" data-testid="section-coaching">
            <div className="border border-rebel-red/30 bg-gradient-to-b from-rebel-red/10 to-zinc-900/30 p-8 text-center">
              <div className="w-12 h-12 border border-rebel-red/30 bg-rebel-red/10 flex items-center justify-center text-rebel-red mx-auto mb-4">
                <Video className="w-5 h-5" />
              </div>
              <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-2">COACHING</div>
              <h3 className="font-display text-2xl font-bold text-white uppercase mb-2">
                Resume Review & Strategy Session
              </h3>
              <p className="text-rebel-red font-mono text-lg mb-4">$149</p>
              <ul className="space-y-2 max-w-md mx-auto mb-6 text-left">
                {[
                  "30-minute video call with Richie",
                  "Line-by-line resume feedback",
                  "LinkedIn profile optimization tips",
                  "Job search strategy tailored to your goals",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                    <ArrowRight className="w-3 h-3 text-rebel-red mt-1 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="https://calendar.app.google/TqhGeNMKZPcRmb4o8" target="_blank" rel="noopener noreferrer">
                <Button className="font-display tracking-wider uppercase text-sm px-8">
                  Book Your Session <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>

          <div className="border border-zinc-800 bg-gradient-to-r from-rebel-red/10 to-transparent p-8 text-center">
            <img src="/logo.png" alt="Rebel Talent" className="w-12 h-12 mx-auto mb-4 rounded-sm" />
            <h2 className="font-display text-xl font-bold text-white uppercase tracking-tight mb-3">
              Get Free Recruiting Tools
            </h2>
            <p className="text-zinc-400 text-sm mb-6 max-w-md mx-auto">
              Optimize your resume, fix your LinkedIn, and stop wasting time on applications that go nowhere.
            </p>
            <a href="mailto:richie@rebeltalentsystems.com" data-testid="button-tools-cta">
              <Button className="font-display tracking-wider uppercase text-sm">
                Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
