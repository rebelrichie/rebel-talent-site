import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import InteriorHero from "@/components/InteriorHero";
import ReachPeople from "@/components/ReachPeople";
import { BOOK_CHRIS_HREF } from "@/components/ContingentChrisSection";
import { faqPageSchema, organizationSchema } from "@/lib/organizationSchema";

function hapticTap() {
  if (navigator.vibrate) navigator.vibrate(15);
}

const FAQS = [
  {
    id: "one-role-or-a-desk",
    q: "Is this one role or a standing desk?",
    a: "This page is the search. One technical role, or a few that are already defined. If you need someone owning the whole hiring plan, that is a fractional recruiter for a Series A startup.",
  },
  {
    id: "which-roles",
    q: "What startup tech roles do you run?",
    a: "Founding and senior engineers, platform, security, and the first technical leaders a startup actually needs. A technical product manager has its own page. Cleared seats are a different search and start on the cleared page.",
  },
  {
    id: "who-to-call",
    q: "Who do I talk to?",
    a: "Chris Moscato, when the role is already defined. A strategy call with me when you are still deciding whether this is one search or an embedded desk.",
  },
];

const ROLES = [
  "Founding and senior engineers",
  "Platform and security",
  "The first technical leader the team will actually follow",
  "Cleared technical seats, scoped on the cleared page",
];

export default function ContingentTech() {
  return (
    <PageLayout>
      <PageSEO
        title="Contingent tech recruiting for startups | Rebel Talent Systems"
        description="Contingent tech recruiting for startups. One technical role, or a few. Chris Moscato takes the first conversation when the seat is already defined."
        path="/contingent-tech-recruiting"
        ogTitle="Contingent tech recruiting for startups | Rebel Talent Systems"
        ogDescription="One technical role, or a few, for a startup. A person screens. You meet a short list."
        ogImage="og-services.png"
        schemas={[organizationSchema, faqPageSchema(FAQS)]}
        breadcrumbs={[
          { name: "Home", item: "https://rebeltalentsystems.com/" },
          { name: "Contingent", item: "https://rebeltalentsystems.com/contingent" },
          { name: "Tech recruiting", item: "https://rebeltalentsystems.com/contingent-tech-recruiting" },
        ]}
      />

      <InteriorHero orbit="default">
        <p className="section-eyebrow mb-4">Contingent</p>
        <h1 data-testid="heading-contingent-tech">
          Contingent tech recruiting for startups
        </h1>
        <p className="body-copy mt-6 max-w-xl">
          One technical role, or a few. I run the search. You bring the hiring manager and the decision. Chris Moscato takes the first conversation when the seat is already named.
        </p>
        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <a href={BOOK_CHRIS_HREF} target="_blank" rel="noopener noreferrer" onClick={hapticTap} data-testid="button-contingent-tech-chris" className="mi-btn">
            Talk to Chris Moscato
          </a>
          <Link href="/strategy-call" onClick={hapticTap} className="text-[15px] font-medium underline underline-offset-4">
            Book a strategy call
          </Link>
        </div>
      </InteriorHero>

      <section>
        <div className="band-wrap grid gap-10 py-16 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="section-eyebrow mb-3">The roles</p>
            <h2 className="section-display">The seats a startup actually stalls on.</h2>
            <p className="body-copy mt-4">
              We write the search from the work, not from a keyword list. A person screens. You meet a short list, not a pile of profiles. The fee is on the{" "}
              <Link href="/contingent" className="underline underline-offset-4">
                contingent page
              </Link>
              .
            </p>
            {/* TODO(Richie): a startup technical hire you can name here. Do not add a count or a timeline that is not already public. */}
          </div>
          <ul className="space-y-4 lg:pt-16">
            {ROLES.map((line) => (
              <li key={line} className="border-l-2 border-current/30 pl-5 text-[18px] leading-snug">
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="band-wrap py-16 sm:py-20 max-w-3xl">
          <p className="section-eyebrow mb-3">If it is more than one search</p>
          <h2 className="section-display">A standing desk is a different offer.</h2>
          <p className="body-copy mt-4">
            Several open roles and no recruiter yet is{" "}
            <Link href="/fractional-recruiter-for-series-a" className="underline underline-offset-4">
              a fractional recruiter for a Series A startup
            </Link>
            . A technical product manager has its own page if that is the seat blocking the roadmap:{" "}
            <Link href="/hire-a-tpm" className="underline underline-offset-4">
              hire a TPM
            </Link>
            . Open seats we are already running are on{" "}
            <Link href="/jobs" className="underline underline-offset-4">
              the jobs board
            </Link>
            .
          </p>
        </div>
      </section>

      <section id="faq">
        <div className="band-wrap grid gap-10 py-16 sm:py-20 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <p className="section-eyebrow mb-3">FAQ</p>
            <h2 className="section-display">Before you start a search</h2>
          </div>
          <div className="border-t border-current/20">
            {FAQS.map((faq) => (
              <article key={faq.id} id={faq.id} className="border-b border-current/20 py-6">
                <h3 className="mb-3">{faq.q}</h3>
                <p className="body-copy">{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="section-cta" className="band-red">
        <div className="band-wrap grid gap-8 py-16 sm:py-20 lg:grid-cols-2 lg:items-end">
          <div>
            <h2 className="section-display mb-4">Name the seat.</h2>
            <p className="body-copy max-w-xl">
              If you can describe the work, Chris can start. If you are still sorting the plan, book the strategy call and we will tell you which path fits.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <a href={BOOK_CHRIS_HREF} target="_blank" rel="noopener noreferrer" onClick={hapticTap} className="mi-btn">
              Talk to Chris Moscato
            </a>
            <Link href="/strategy-call" className="text-[16px] font-medium underline underline-offset-4">
              Book a strategy call
            </Link>
          </div>
        </div>
      </section>

      <ReachPeople />
    </PageLayout>
  );
}
