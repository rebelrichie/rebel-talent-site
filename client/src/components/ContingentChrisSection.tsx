import { Link } from "wouter";
import Rise from "@/components/Rise";

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
      className="star-field"
    >
      <div className="band-wrap section-split chris-layout">
        <Rise>
          <div data-testid="card-chris-moscato">
            <p className="section-eyebrow">Contingent search</p>
            <h2 className="section-display">
              Contingent search, priced by salary band.
            </h2>
            <p className="body-copy measure">
              Most firms take a percentage of the offer, so they make more when you pay more. We do not. You pick the salary range for the role. We lock a flat fee to that band before the search starts. You are billed when the hire starts. If you hire at the top of the range, the fee does not move.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
              <Link
                href="/contingent"
                data-testid="link-view-contingent-details"
                className="tap-link text-[16px] font-medium underline underline-offset-4"
              >
                See contingent pricing
              </Link>
              <Link
                href="/startups"
                data-testid="link-contingent-startups"
                className="tap-link text-[16px] underline underline-offset-4"
              >
                Hiring for a startup
              </Link>
            </div>
          </div>
        </Rise>
        <Rise delay={60}>
          <aside className="depth-card contact-card chris-card">
            <figure className="portrait">
              <img
                src="/chris-moscato-v2.webp"
                alt="Chris Moscato"
                width={960}
                height={1200}
                loading="lazy"
              />
            </figure>
            <p className="portrait-name">Chris Moscato</p>
            <p className="portrait-role">Head of Client Acquisition</p>
            <ul className="flex flex-col gap-2 mb-5">
              {STRIP.map((text) => (
                <li key={text} className="body-copy text-[16px] leading-snug">{text}</li>
              ))}
            </ul>
            <a
              href={EMAIL_CHRIS_HREF}
              onClick={hapticTap}
              data-testid="button-email-chris"
              className="tap-link text-[16px] font-medium underline underline-offset-4"
            >
              Email Chris
            </a>
          </aside>
        </Rise>
      </div>
    </section>
  );
}
