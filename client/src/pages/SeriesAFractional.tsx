import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import InteriorHero from "@/components/InteriorHero";
import ReachPeople from "@/components/ReachPeople";
import { faqPageSchema, organizationSchema } from "@/lib/organizationSchema";

function hapticTap() {
  if (navigator.vibrate) navigator.vibrate(15);
}

const FAQS = [
  {
    id: "what-fractional-means",
    q: "What does a fractional recruiter do here?",
    a: "A senior recruiting lead inside the company for a stretch of months. I own the open roles you hand me, from the first candidate conversation through the offer. I am not a vendor dropped in for a single seat.",
  },
  {
    id: "not-a-full-time-hire",
    q: "How is this different from hiring a recruiter onto the team?",
    a: "You are not adding a full time employee. I do the work while you decide whether the function should live in house. The scorecards and the way you run a loop stay with the company when I step back.",
  },
  {
    id: "when-contingent",
    q: "When should a Series A startup use a contingent search instead?",
    a: "When there is one role and it is already defined. That is a contingent tech search. If the plan also has cleared seats, those belong on the cleared page, not in a commercial loop.",
  },
];

const FITS = [
  {
    title: "The plan is already bigger than the founders",
    body: "Several seats are open, and the people who should be building are still running the hiring process.",
  },
  {
    title: "There is no internal recruiter yet",
    body: "Series A, sometimes into the next round. The company can name the missing seats. It cannot yet staff a desk.",
  },
  {
    title: "You want the function, not one placement",
    body: "Sourcing, screens, the loop with your hiring managers, and the offer. Technical, go to market, or both.",
  },
];

export default function SeriesAFractional() {
  return (
    <PageLayout>
      <PageSEO
        title="Fractional recruiter for Series A startups | Rebel Talent Systems"
        description="A fractional recruiter for a Series A startup. Richie runs the open roles for that stretch, and the hiring process stays with the company."
        path="/fractional-recruiter-for-series-a"
        ogTitle="Fractional recruiter for Series A startups | Rebel Talent Systems"
        ogDescription="Fractional recruiting for a Series A startup. The open roles get an owner. The process stays when the engagement ends."
        ogImage="og-services.png"
        schemas={[organizationSchema, faqPageSchema(FAQS)]}
        breadcrumbs={[
          { name: "Home", item: "https://rebeltalentsystems.com/" },
          { name: "Fractional", item: "https://rebeltalentsystems.com/fractional" },
          { name: "Series A", item: "https://rebeltalentsystems.com/fractional-recruiter-for-series-a" },
        ]}
      />

      <InteriorHero orbit="default">
        <p className="section-eyebrow mb-4">Series A</p>
        <h1 data-testid="heading-series-a-fractional">
          Fractional recruiter for Series A startups
        </h1>
        <p className="body-copy mt-6 max-w-xl">
          Series A is usually the moment the hiring plan gets bigger than the founders. I embed as the recruiter for that stretch. I run the roles you name. The process stays with the company when I step back.
        </p>
        <div className="mt-8">
          <Link href="/strategy-call" onClick={hapticTap} data-testid="button-series-a-strategy" className="mi-btn">
            Book a strategy call
          </Link>
        </div>
      </InteriorHero>

      <section>
        <div className="band-wrap grid gap-10 py-16 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="section-eyebrow mb-3">The work</p>
            <h2 className="section-display">Someone has to own the open roles.</h2>
            <p className="body-copy mt-4">
              Founders close the early hires themselves. Then the plan has more seats than a founder can run between the product and the customers. That is the stretch this is for. The longer description of the embedded desk is on the{" "}
              <Link href="/fractional" className="underline underline-offset-4">
                fractional page
              </Link>
              .
            </p>
            {/* TODO(Richie): a Series A company you can name on this page. Do not add a count or a timeline that is not already public. */}
          </div>
          <div className="border-t border-current/20">
            {FITS.map((item) => (
              <article key={item.title} className="border-b border-current/20 py-6">
                <h3 className="mb-2">{item.title}</h3>
                <p className="body-copy">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="band-wrap py-16 sm:py-20 max-w-3xl">
          <p className="section-eyebrow mb-3">Not this page if</p>
          <h2 className="section-display">One role is a different conversation.</h2>
          <p className="body-copy mt-4">
            If the company needs one technical hire and the seat is already defined, that is{" "}
            <Link href="/contingent-tech-recruiting" className="underline underline-offset-4">
              contingent tech recruiting for startups
            </Link>
            . If a seat needs a clearance, read{" "}
            <Link href="/cleared" className="underline underline-offset-4">
              how a TS/SCI full scope poly search runs
            </Link>
            . Candidates should use{" "}
            <Link href="/jobs" className="underline underline-offset-4">
              open roles
            </Link>
            .
          </p>
        </div>
      </section>

      <section id="faq">
        <div className="band-wrap grid gap-10 py-16 sm:py-20 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <p className="section-eyebrow mb-3">FAQ</p>
            <h2 className="section-display">Questions founders ask</h2>
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
            <h2 className="section-display mb-4">Bring the hiring plan.</h2>
            <p className="body-copy max-w-xl">
              A strategy call is thirty minutes. Bring the open roles. We will say if an embedded recruiter is the right shape, or if one search is enough.
            </p>
          </div>
          <Link href="/strategy-call" onClick={hapticTap} className="mi-btn">
            Book a strategy call
          </Link>
        </div>
      </section>

      <ReachPeople />
    </PageLayout>
  );
}
