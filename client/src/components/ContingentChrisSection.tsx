import { Link } from "wouter";
import { ArrowRight, Ban, CircleDollarSign, User } from "lucide-react";
import GlowCard from "@/components/GlowCard";
import ScrollReveal from "@/components/ScrollReveal";

function hapticTap() {
  if (navigator.vibrate) navigator.vibrate(15);
}

// TODO(calendly): Swap BOOK_CHRIS_HREF to Chris's Calendly URL when it is live.
// Keep Email Chris as the mailto fallback. Both CTAs are mailto until then.
export const BOOK_CHRIS_HREF =
  "mailto:christopher@rebeltalentsystems.com?subject=Contingent%20search";
export const EMAIL_CHRIS_HREF = "mailto:christopher@rebeltalentsystems.com";

const CHRIS_HEADSHOT = "/chris-moscato.jpg";

const STRIP = [
  { icon: CircleDollarSign, text: "One flat fee per salary band" },
  { icon: Ban, text: "No percentage of salary, ever" },
  { icon: User, text: "A named human, not a form" },
];

export default function ContingentChrisSection() {
  return (
    <section
      id="contingent-search"
      data-testid="section-contingent-search"
      className="bg-zinc-950 py-16 sm:py-24 border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 xl:gap-20 items-center">
          <ScrollReveal variant="fade-up">
            <div>
              <p className="font-mono text-rebel-red text-sm sm:text-base lg:text-lg tracking-[0.25em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-5 font-semibold">
                NOW OFFERING - CONTINGENT SEARCH
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight leading-[1.08] mb-6">
                Flat fee by band.<br />
                Zero games.
              </h2>
              <p className="text-zinc-300 text-base sm:text-lg leading-[1.7] max-w-xl">
                Most agencies take a cut of salary, so they earn more when your hire costs more. We don't. Each salary range has its own flat fee. You pick the band for the role, we lock that fee, and it does not move if you pay top of range.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
                <Link
                  href="/contingent"
                  data-testid="link-view-contingent-details"
                  className="text-zinc-200 hover:text-white text-sm font-medium underline underline-offset-4 decoration-zinc-700 hover:decoration-rebel-red transition-colors no-underline"
                >
                  View contingent details
                </Link>
                <Link
                  href="/startups"
                  data-testid="link-contingent-startups"
                  className="text-zinc-400 hover:text-white text-sm underline underline-offset-4 decoration-zinc-700 hover:decoration-rebel-red transition-colors no-underline"
                >
                  Hiring for a startup
                </Link>
              </div>

              <ul className="mt-10 sm:mt-12 grid sm:grid-cols-3 gap-5 sm:gap-6">
                {STRIP.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex sm:flex-col items-start gap-3">
                    <span className="w-8 h-8 border border-zinc-800 bg-zinc-900/60 flex items-center justify-center text-rebel-red shrink-0">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </span>
                    <span className="text-zinc-200 text-sm leading-snug">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={120}>
            <div
              className="relative"
              style={{
                boxShadow: "0 32px 80px -20px rgba(0,0,0,0.9), 0 0 40px -12px rgba(245,132,30,0.12)",
              }}
            >
              <GlowCard
                className="border border-zinc-700/80 bg-rebel-carbon p-8 sm:p-10"
                glowColor="rgba(245,132,30,0.14)"
              >
                <div className="flex flex-col items-center text-center" data-testid="card-chris-moscato">
                  <img
                    src={CHRIS_HEADSHOT}
                    alt="Chris Moscato, Head of Client Acquisition at Rebel Talent Systems"
                    className="w-44 h-44 sm:w-56 sm:h-56 rounded-full object-cover mb-6"
                  />
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                    Chris Moscato
                  </h3>
                  <p className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mt-2 mb-4">
                    Head of Client Acquisition
                  </p>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-8 max-w-sm">
                    Chris runs every new search conversation at Rebel. Talk to him first.
                  </p>
                  <div className="flex flex-col gap-3 w-full">
                    <a
                      href={BOOK_CHRIS_HREF}
                      onClick={hapticTap}
                      data-testid="button-book-chris"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-rebel-red hover:bg-red-700 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full transition-colors no-underline"
                    >
                      Book time with Chris <ArrowRight className="w-4 h-4 shrink-0" />
                    </a>
                    <a
                      href={EMAIL_CHRIS_HREF}
                      onClick={hapticTap}
                      data-testid="button-email-chris"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap border border-zinc-700 hover:border-rebel-red/60 text-zinc-200 hover:text-white font-medium text-sm sm:text-base px-6 py-3.5 rounded-full transition-colors no-underline"
                    >
                      Email Chris
                    </a>
                  </div>
                </div>
              </GlowCard>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
