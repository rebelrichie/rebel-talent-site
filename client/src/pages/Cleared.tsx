import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import { BOOK_CHRIS_HREF } from "@/components/ContingentChrisSection";
import InteriorHero from "@/components/InteriorHero";
import ReachPeople from "@/components/ReachPeople";

function hapticTap() {
  if (navigator.vibrate) navigator.vibrate(15);
}

const FAQS = [
  {
    id: "how-we-source",
    q: "How do you source full scope poly candidates?",
    a: "I start with people who already hold TS/SCI and a current full scope poly. That is referrals from the cleared community, people coming off a contract who kept the access, and current or former service members. A public posting is a side door. The people who can sit in the seat on day one are usually not reading a commercial job board.",
  },
  {
    id: "cleared-vs-commercial",
    q: "How is a cleared search different from a commercial one?",
    a: "A commercial search starts with the skill list and a wide net. A cleared search starts with eligibility. The level, the poly, and whether the person must already hold it decide who is even in the pool. CI poly and full scope poly are not the same people. Skills are the second screen. The loop also has to stay short, because a prime can keep someone who is already cleared.",
  },
  {
    id: "unstick-a-stalled-req",
    q: "How do you unstick a stalled cleared req?",
    a: "First I check that the req names the clearance and the poly you can actually hire. A lot of stalls are a commercial process pointed at a cleared seat: too many interviews, nobody confirming the poly is current, and a posting the right people will never see. We restart from people who already hold it, and we cut the loop down to what you need to make a decision.",
  },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://rebeltalentsystems.com/#organization",
  name: "Rebel Talent Systems",
  url: "https://rebeltalentsystems.com",
  logo: "https://rebeltalentsystems.com/logo.png",
  description:
    "Rebel Talent Systems recruits for defense contractors and startups, including TS/SCI searches that require a full scope polygraph.",
  founder: { "@type": "Person", name: "Richie Lampani" },
  telephone: "+1-202-524-0255",
  email: "richie@rebeltalentsystems.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Roswell",
    addressRegion: "GA",
    addressCountry: "US",
  },
  sameAs: ["https://linkedin.com/in/richielampani"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const STEPS = [
  {
    title: "Read the real bar",
    body: "Secret, Top Secret, or TS/SCI. CI poly or full scope. Already held, or still to be sponsored. If the req is fuzzy on those, the search is fuzzy.",
  },
  {
    title: "Source people who can sit in the seat",
    body: "The bench is the intelligence community and current or former service members, plus referrals from people who hold the same access.",
  },
  {
    title: "Keep the loop short",
    body: "A slow process loses a cleared candidate to the employer they already have. You meet people who clear the eligibility screen, and you decide.",
  },
];

export default function Cleared() {
  return (
    <PageLayout>
      <PageSEO
        title="TS/SCI full scope poly recruiter for defense contractors | Rebel Talent Systems"
        description="Rebel Talent Systems recruits TS/SCI full scope poly candidates for defense contractors. The search starts with who already holds the clearance, then the skill."
        path="/cleared"
        ogTitle="TS/SCI full scope poly recruiter for defense contractors | Rebel Talent Systems"
        ogDescription="We recruit TS/SCI full scope poly candidates for defense contractors. Eligibility first, then the skill, with a short hiring loop."
        ogImage="og-services.png"
        schemas={[organizationSchema, faqSchema]}
        breadcrumbs={[
          { name: "Home", item: "https://rebeltalentsystems.com/" },
          { name: "Services", item: "https://rebeltalentsystems.com/services" },
          { name: "Cleared", item: "https://rebeltalentsystems.com/cleared" },
        ]}
      />

      <InteriorHero orbit="cleared">
        <p className="section-eyebrow mb-4">Cleared and defense</p>
        <h1 data-testid="heading-cleared">
          TS/SCI full scope poly recruiter for defense contractors
        </h1>
        <p className="body-copy mt-6 max-w-xl">
          If the seat needs a current TS/SCI and a full scope poly, it is not a normal search. I run that search for defense contractors. The person has to be able to do the work, and they have to be allowed in the room.
        </p>
        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Link href="/strategy-call" onClick={hapticTap} data-testid="button-cleared-strategy" className="mi-btn">
            Book a strategy call
          </Link>
          <a
            href={BOOK_CHRIS_HREF}
            target="_blank"
            rel="noopener noreferrer"
            onClick={hapticTap}
            data-testid="button-cleared-chris"
            className="text-[15px] font-medium underline underline-offset-4"
          >
            Talk to Chris Moscato
          </a>
        </div>
      </InteriorHero>

      <section>
        <div className="band-wrap grid gap-10 py-16 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="section-eyebrow mb-3">The search</p>
            <h2 className="section-display">The clearance comes first.</h2>
            <p className="body-copy mt-4">
              A defense contractor sends a req that says TS/SCI. Sometimes it also says full scope poly, sometimes CI poly, and sometimes it is quiet about which one. Those are different pools. I read the req for the clearance, the poly, the facility, and whether the person must already hold it.
            </p>
          </div>
          <div className="border-t border-current/20">
            {STEPS.map((step) => (
              <article key={step.title} className="border-b border-current/20 py-6">
                <h3 className="mb-2">{step.title}</h3>
                <p className="body-copy">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="band-wrap grid gap-10 py-16 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="section-eyebrow mb-3">Sourcing</p>
            <h2 className="section-display">Where full scope poly candidates come from.</h2>
            <p className="body-copy mt-4">
              They do not come from a cold commercial posting. I look for people who already hold TS/SCI with a current full scope poly: referrals inside that community, people moving between programs, and service members who kept the clearance.
            </p>
            {/* TODO(Richie): a cleared outcome you can name, with the result you can stand behind. Do not add a count or a timeline that is not already public. */}
          </div>
          <div>
            <p className="body-copy">
              That desk includes TS/SCI full scope poly technical and engineering recruiting for{" "}
              <a href="https://waveguideincorporated.com" className="underline underline-offset-4">
                Waveguide
              </a>
              . When a cleared seat is open on our side, it is listed on{" "}
              <Link href="/jobs" className="underline underline-offset-4">
                the jobs board
              </Link>
              . The longer writeup of the work is{" "}
              <Link href="/blog/hiring-cleared-engineers-defense-tech-guide" className="underline underline-offset-4">
                the guide to hiring cleared engineers
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="band-wrap py-16 sm:py-20 max-w-3xl">
          <p className="section-eyebrow mb-3">Compared with a commercial search</p>
          <h2 className="section-display">A cleared req is a different job.</h2>
          <p className="body-copy mt-4">
            On a commercial search I can start wide and narrow on skill. On a cleared search the first cut is whether the person can be read in. The pool is smaller. The employer they already have is usually a prime that wants to keep them. Running the req like a startup role, with the same posting and the same long calendar, is how it stalls.
          </p>
          <p className="body-copy mt-4">
            One defined seat can be a contingent search. A standing cleared pipeline is the embedded desk. Both are on{" "}
            <Link href="/services" className="underline underline-offset-4">
              the services page
            </Link>
            . Candidates should use{" "}
            <Link href="/jobs" className="underline underline-offset-4">
              open roles
            </Link>
            , not this page.
          </p>
        </div>
      </section>

      <section id="faq">
        <div className="band-wrap grid gap-10 py-16 sm:py-20 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <p className="section-eyebrow mb-3">FAQ</p>
            <h2 className="section-display">Questions hiring managers ask</h2>
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
            <h2 className="section-display mb-4">Bring the req.</h2>
            <p className="body-copy max-w-xl">
              A strategy call is the right first step if you are scoping a cleared pipeline. If the seat is already defined, talk to Chris Moscato.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <Link href="/strategy-call" onClick={hapticTap} data-testid="button-cleared-footer-strategy" className="mi-btn">
              Book a strategy call
            </Link>
            <a
              href={BOOK_CHRIS_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={hapticTap}
              className="text-[16px] font-medium underline underline-offset-4"
            >
              Talk to Chris Moscato
            </a>
          </div>
        </div>
      </section>

      <ReachPeople />
    </PageLayout>
  );
}
