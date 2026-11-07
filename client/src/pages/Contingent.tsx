import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import { BOOK_CHRIS_HREF, EMAIL_CHRIS_HREF } from "@/components/ContingentChrisSection";
import InteriorHero from "@/components/InteriorHero";
import ReachPeople from "@/components/ReachPeople";

function hapticTap() {
  if (navigator.vibrate) navigator.vibrate(15);
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Contingent Recruiting",
  "serviceType": "Contingent recruiting, flat fee by salary band, billed when the hire starts",
  "description": "Contingent recruiting with a flat fee by salary band, billed when the hire starts. No percentage of salary. No deposit. Startups and defense teams. Cleared and noncleared, entry level through executive.",
  "provider": {
    "@type": "Organization",
    "name": "Rebel Talent Systems",
    "url": "https://rebeltalentsystems.com",
  },
  "areaServed": "US",
  "url": "https://rebeltalentsystems.com/contingent",
};

export default function Contingent() {
  return (
    <PageLayout>
      <PageSEO
        title="Contingent Recruiting | Flat Fee by Salary Band | Rebel Talent"
        description="Contingent recruiting with a flat fee by salary band, billed when the hire starts. No percentage of salary. No deposit. Startups and defense teams."
        path="/contingent"
        ogTitle="Contingent Recruiting | Flat Fee by Salary Band | Rebel Talent"
        ogDescription="Flat fee by salary band. Billed when the hire starts. No deposit. Contingent search for startups and defense teams."
        ogImage="og-services.png"
        schemas={[serviceSchema]}
        breadcrumbs={[
          { name: "Home", item: "https://rebeltalentsystems.com/" },
          { name: "Services", item: "https://rebeltalentsystems.com/services" },
          { name: "Contingent", item: "https://rebeltalentsystems.com/contingent" },
        ]}
      />

      <InteriorHero>
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] mb-4">
          Contingent Search
        </p>
        <h1 data-testid="heading-contingent">
          Contingent search with a flat fee by salary band.
        </h1>
        <p className="mt-6 max-w-xl text-[17px] leading-[1.6]">
          You set the range. We lock one fee to that band before the search starts. You are billed when the hire starts. No percentage of salary. No deposit.
        </p>
        <p className="mt-4 max-w-xl text-[17px] leading-[1.6]">
          This fits one role, or a few. If you need the whole function, that is embedded.
        </p>
        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <a href={BOOK_CHRIS_HREF} target="_blank" rel="noopener noreferrer" onClick={hapticTap} data-testid="button-talk-chris" className="mi-btn">
            Start a search
          </a>
          <a
            href={EMAIL_CHRIS_HREF}
            onClick={hapticTap}
            data-testid="button-email-chris"
            className="text-[15px] font-medium underline underline-offset-4"
          >
            Email us
          </a>
        </div>
        <p className="mt-5 text-[15px]">
          Hiring a founding AE or engineer?{" "}
          <Link href="/startups" className="underline underline-offset-4">
            See the startup desk
          </Link>
          .
        </p>
      </InteriorHero>

      <p className="band-wrap py-8 text-[17px] leading-[1.6]">
        <Link href="/contingent-tech-recruiting" className="underline underline-offset-4">
          Contingent tech recruiting for startups
        </Link>
      </p>

      <section data-testid="section-cta" className="band-red">
        <div className="band-wrap grid gap-8 py-16 sm:py-20 lg:grid-cols-2 lg:items-end">
          <div>
            <h2 className="section-display mb-4">
              Start a search
            </h2>
            <p className="text-[18px] leading-[1.6] font-light max-w-xl">
              Email us or book the call from here.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <a href={BOOK_CHRIS_HREF} target="_blank" rel="noopener noreferrer" onClick={hapticTap} data-testid="button-contingent-footer-chris" className="mi-btn">
              Start a search
            </a>
            <a href={EMAIL_CHRIS_HREF} onClick={hapticTap} className="text-[16px] font-medium underline underline-offset-4">
              Email us
            </a>
          </div>
        </div>
      </section>

      <ReachPeople />
    </PageLayout>
  );
}
