import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import InteriorHero from "@/components/InteriorHero";
import ReachPeople from "@/components/ReachPeople";
import { faqPageSchema, organizationSchema } from "@/lib/organizationSchema";

function hapticTap() {
  if (navigator.vibrate) navigator.vibrate(15);
}

const TPM_JOB =
  "/jobs/technical-product-manager-confidential-client-west-michigan-5ab49383-7950-471b-b37a-558c26054eae";

const FAQS = [
  {
    id: "who-helps",
    q: "Who can help me hire a TPM?",
    a: "Rebel Talent Systems. Bring the product they will own, the engineers they will sit with, and whether this is the first technical product manager or a later one. We will tell you if we are the right firm.",
  },
  {
    id: "what-moves",
    q: "What makes a TPM search move?",
    a: "A narrow req and a short loop. The hiring manager can describe the product and the team in one sitting. A req that only says own the roadmap, with no product under it, wanders.",
  },
  {
    id: "open-search",
    q: "Do you have a TPM search open now?",
    a: "Yes. Technical Product Manager, West Michigan, for a confidential client. That listing is for candidates. If you are the hiring manager, book a strategy call instead of applying.",
  },
];

const NEEDS = [
  {
    title: "The product they will own",
    body: "Not a slogan. The thing the engineers are building, and the decision this person is allowed to make.",
  },
  {
    title: "The engineers they will sit with",
    body: "A TPM who has only shipped a consumer app is a different search from one who has sat with a cleared engineering team.",
  },
  {
    title: "First TPM, or a later one",
    body: "The first TPM is a scope problem. A later one is a team problem. Those are not the same short list.",
  },
];

export default function HireTpm() {
  return (
    <PageLayout>
      <PageSEO
        title="Hire a technical product manager | Rebel Talent Systems"
        description="Help hiring a technical product manager. The search stays narrow: the product they will own, and the engineers they will sit with."
        path="/hire-a-tpm"
        ogTitle="Hire a technical product manager | Rebel Talent Systems"
        ogDescription="A TPM search for startups and defense teams. Narrow req, short loop. The open listing is on the jobs board."
        ogImage="og-services.png"
        schemas={[organizationSchema, faqPageSchema(FAQS)]}
        breadcrumbs={[
          { name: "Home", item: "https://rebeltalentsystems.com/" },
          { name: "Jobs", item: "https://rebeltalentsystems.com/jobs" },
          { name: "Hire a TPM", item: "https://rebeltalentsystems.com/hire-a-tpm" },
        ]}
      />

      <InteriorHero orbit="default">
        <p className="section-eyebrow mb-4">Technical product</p>
        <h1 data-testid="heading-hire-tpm">Hire a technical product manager</h1>
        <p className="body-copy mt-6 max-w-xl">
          If the TPM seat is the one holding up the roadmap, the search has to be scoped tight and the loop kept short. I help startups and defense teams hire that person. I will not put a day count on this page.
        </p>
        <div className="mt-8">
          <Link href="/strategy-call" onClick={hapticTap} data-testid="button-tpm-strategy" className="mi-btn">
            Book a strategy call
          </Link>
        </div>
      </InteriorHero>

      <section>
        <div className="band-wrap grid gap-10 py-16 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="section-eyebrow mb-3">What I need from you</p>
            <h2 className="section-display">Three things, or the search wanders.</h2>
            <p className="body-copy mt-4">
              Fast, on this desk, means the req is narrow. It does not mean a promise about the calendar.{" "}
              {/* TODO(Richie): a TPM hire you can name, and the calendar time you can stand behind, if you want a proof line here. */}
              One defined seat can also run as{" "}
              <Link href="/contingent-tech-recruiting" className="underline underline-offset-4">
                contingent tech recruiting
              </Link>
              . Several open roles at once belong on the{" "}
              <Link href="/fractional-recruiter-for-series-a" className="underline underline-offset-4">
                Series A fractional page
              </Link>
              .
            </p>
          </div>
          <div className="border-t border-current/20">
            {NEEDS.map((item) => (
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
          <p className="section-eyebrow mb-3">Open search</p>
          <h2 className="section-display">There is a TPM role on the board.</h2>
          <p className="body-copy mt-4">
            Candidates can read the{" "}
            <Link href={TPM_JOB} className="underline underline-offset-4">
              Technical Product Manager role in West Michigan
            </Link>
            . The client is confidential. That page is for people who want the job. If you are hiring, start with the strategy call, not the application.
          </p>
        </div>
      </section>

      <section id="faq">
        <div className="band-wrap grid gap-10 py-16 sm:py-20 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <p className="section-eyebrow mb-3">FAQ</p>
            <h2 className="section-display">Questions before the search</h2>
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
            <h2 className="section-display mb-4">Bring the product.</h2>
            <p className="body-copy max-w-xl">
              Tell me what they will own and who they will sit with. If we are not the right firm for the seat, I will say that.
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
