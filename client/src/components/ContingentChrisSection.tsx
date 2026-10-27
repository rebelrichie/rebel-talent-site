import { Link } from "wouter";
import ScrollReveal from "@/components/ScrollReveal";
import { BlueprintField, BlueprintRule } from "@/components/Blueprint";

function hapticTap() {
  if (navigator.vibrate) navigator.vibrate(15);
}

// Chris's public 30-min Calendly. Email Chris stays mailto.
export const BOOK_CHRIS_HREF =
  "https://calendly.com/christopher-rebeltalentsystems/30min";
export const EMAIL_CHRIS_HREF = "mailto:christopher@rebeltalentsystems.com";

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
      className="bg-[#F4F7FB]"
    >
      <BlueprintRule />
      <div className="max-w-[1140px] mx-auto px-5 py-14 sm:py-16 grid lg:grid-cols-2 gap-10 items-start">
        <ScrollReveal variant="fade-up">
          <div data-testid="card-chris-moscato">
            <h2 className="text-[34px] leading-none text-[#16315C] mb-5">
              Contingent search, priced by salary band.
            </h2>
            <p className="text-[#272c30] text-[18px] leading-[1.6] max-w-xl font-light">
              Most firms take a percentage of the offer, so they make more when you pay more. We do not. You pick the salary range for the role. We lock a flat fee to that band before the search starts. You are billed when the hire starts. If you hire at the top of the range, the fee does not move.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
              <Link
                href="/contingent"
                data-testid="link-view-contingent-details"
                className="text-[#16315C] text-[16px] font-medium underline underline-offset-4"
              >
                View contingent details
              </Link>
              <Link
                href="/startups"
                data-testid="link-contingent-startups"
                className="text-[#272c30] text-[16px] underline underline-offset-4"
              >
                Hiring for a startup
              </Link>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal variant="fade-up" delay={80}>
          <div className="mi-band bp-wrap bg-[#0E1A33] p-8 sm:p-10">
            <BlueprintField />
            <p className="text-[25px] text-white leading-tight mb-1">Chris Moscato</p>
            <p className="text-white/80 text-[16px] mb-6">Head of Client Acquisition</p>
            <ul className="flex flex-col gap-2 mb-8">
              {STRIP.map((text) => (
                <li key={text} className="text-white text-[16px] leading-snug">{text}</li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={BOOK_CHRIS_HREF}
                target="_blank"
                rel="noopener noreferrer"
                onClick={hapticTap}
                data-testid="button-book-chris"
                className="mi-btn"
              >
                Book time with Chris
              </a>
              <a
                href={EMAIL_CHRIS_HREF}
                onClick={hapticTap}
                data-testid="button-email-chris"
                className="inline-flex items-center justify-center border border-white text-white font-medium text-[16px] px-5 py-3 no-underline"
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
