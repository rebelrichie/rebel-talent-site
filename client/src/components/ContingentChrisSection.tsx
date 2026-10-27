import { Link } from "wouter";
import { ArrowRight, Ban, CircleDollarSign, User } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

function hapticTap() {
  if (navigator.vibrate) navigator.vibrate(15);
}

// Chris's public 30-min Calendly. Email Chris stays mailto.
export const BOOK_CHRIS_HREF =
  "https://calendly.com/christopher-rebeltalentsystems/30min";
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
      className="py-16 sm:py-24 border-t border-stone-200"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 xl:gap-20 items-center">
          <ScrollReveal variant="fade-up">
            <div>
              <p className="text-[11px] tracking-[0.18em] uppercase text-stone-500 mb-4">
                Contingent search
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-stone-900 leading-[1.08] mb-6">
                Contingent search, priced by salary band.
              </h2>
              <p className="text-stone-600 text-base sm:text-lg leading-[1.7] max-w-xl">
                Most firms take a percentage of the offer, so they make more when you pay more. We do not. You pick the salary range for the role. We lock a flat fee to that band before the search starts. You are billed when the hire starts. If you hire at the top of the range, the fee does not move.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
                <Link
                  href="/contingent"
                  data-testid="link-view-contingent-details"
                  className="text-stone-800 hover:text-stone-900 text-sm font-medium underline underline-offset-4 decoration-stone-300 hover:decoration-[#9E2330] transition-colors"
                >
                  View contingent details
                </Link>
                <Link
                  href="/startups"
                  data-testid="link-contingent-startups"
                  className="text-stone-500 hover:text-stone-900 text-sm underline underline-offset-4 decoration-stone-300 hover:decoration-[#9E2330] transition-colors"
                >
                  Hiring for a startup
                </Link>
              </div>

              <ul className="mt-10 sm:mt-12 grid sm:grid-cols-3 gap-5 sm:gap-6">
                {STRIP.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex sm:flex-col items-start gap-3">
                    <span className="w-8 h-8 border border-stone-200 flex items-center justify-center text-[#9E2330] shrink-0">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </span>
                    <span className="text-stone-700 text-sm leading-snug">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={120}>
            <div className="border border-stone-200 bg-white p-8 sm:p-10">
                <div className="flex flex-col items-center text-center" data-testid="card-chris-moscato">
                  <img
                    src={CHRIS_HEADSHOT}
                    alt="Chris Moscato, Head of Client Acquisition at Rebel Talent Systems"
                    className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover mb-6"
                  />
                  <h3 className="font-display text-3xl text-stone-900">
                    Chris Moscato
                  </h3>
                  <p className="text-[11px] tracking-[0.18em] uppercase text-stone-500 mt-2 mb-4">
                    Head of Client Acquisition
                  </p>
                  <p className="text-stone-600 text-sm leading-relaxed mb-8 max-w-sm">
                    Talk to Chris Moscato first. He runs every new contingent conversation.
                  </p>
                  <div className="flex flex-col gap-3 w-full">
                    <a
                      href={BOOK_CHRIS_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
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
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap border border-stone-300 hover:border-stone-500 text-stone-800 font-medium text-sm sm:text-base px-6 py-3.5 transition-colors no-underline"
                    >
                      Email Chris
                    </a>
                  </div>
                </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
