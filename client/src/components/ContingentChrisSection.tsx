import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
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
  "One flat fee per salary band",
  "No percentage of salary, ever",
  "A named human, not a form",
];

export default function ContingentChrisSection() {
  return (
    <section
      id="contingent-search"
      data-testid="section-contingent-search"
      className="bg-white border-t border-[#e4e7ee]"
    >
      <div className="grid lg:grid-cols-2 lg:min-h-[680px]">
        <div className="relative min-h-[78vw] sm:min-h-[520px] lg:min-h-0">
          <img
            src={CHRIS_HEADSHOT}
            alt="Chris Moscato, Head of Client Acquisition at Rebel Talent Systems"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </div>
        <ScrollReveal variant="fade-up" delay={80}>
          <div
            data-testid="card-chris-moscato"
            className="flex flex-col justify-center py-16 sm:py-20 px-5 sm:px-8 lg:px-16 lg:pr-[max(2rem,calc((100vw-1200px)/2+2rem))] h-full"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] text-[#12161c] tracking-[-0.035em] leading-[1.05] mb-5">
              Contingent search, priced by salary band.
            </h2>
            <p className="text-[#3a4250] text-base sm:text-lg leading-[1.65] max-w-xl">
              Most firms take a percentage of the offer, so they make more when you pay more. We do not. You pick the salary range for the role. We lock a flat fee to that band before the search starts. You are billed when the hire starts. If you hire at the top of the range, the fee does not move.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
              <Link
                href="/contingent"
                data-testid="link-view-contingent-details"
                className="text-[#12161c] text-sm font-semibold underline underline-offset-4"
              >
                View contingent details
              </Link>
              <Link
                href="/startups"
                data-testid="link-contingent-startups"
                className="text-[#3a4250] text-sm underline underline-offset-4"
              >
                Hiring for a startup
              </Link>
            </div>
            <ul className="mt-8 flex flex-col gap-2">
              {STRIP.map((text) => (
                <li key={text} className="text-[#1a1f27] text-[15px] leading-snug">
                  {text}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-2xl text-[#12161c] tracking-[-0.03em]">Chris Moscato</p>
            <p className="text-sm text-[#5c6573] mb-6">Head of Client Acquisition</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={BOOK_CHRIS_HREF}
                target="_blank"
                rel="noopener noreferrer"
                onClick={hapticTap}
                data-testid="button-book-chris"
                className="inline-flex items-center justify-center gap-2 bg-rebel-red text-white font-semibold text-sm px-5 py-3 rounded-full no-underline"
              >
                Book time with Chris <ArrowRight className="w-4 h-4 shrink-0" />
              </a>
              <a
                href={EMAIL_CHRIS_HREF}
                onClick={hapticTap}
                data-testid="button-email-chris"
                className="inline-flex items-center justify-center gap-2 border border-[#cfd4dc] text-[#12161c] font-semibold text-sm px-5 py-3 rounded-full no-underline"
              >
                Email Chris
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
