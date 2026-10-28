import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import InteriorHero from "@/components/InteriorHero";

const links = [
  { href: "/", label: "Home", testId: "link-go-home" },
  { href: "/jobs", label: "Jobs", testId: "link-404-jobs" },
  { href: "/strategy-call", label: "Contact", testId: "link-404-contact" },
];

export default function NotFound() {
  return (
    <PageLayout>
      <PageSEO
        title="Page not found | Rebel Talent Systems"
        description="This page is not on the site. Go home, see open roles, or contact the firm."
        path="/404"
        noindex
      />

      <InteriorHero>
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] mb-4">404</p>
        <h1 data-testid="text-not-found">This page is not on the site.</h1>
        <p className="mt-5 max-w-md text-[17px] leading-[1.6]">
          The address does not match a page. Head home, look at open roles, or reach the firm.
        </p>
      </InteriorHero>

      <section>
        <div className="band-wrap py-14">
          <h2 className="text-[32px] leading-tight mb-6">Keep going</h2>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-testid={link.testId}
                className="text-[18px] font-medium underline underline-offset-4"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="band-red">
        <div className="band-wrap py-14">
          <h2 className="text-[32px] leading-tight mb-4">Start from a page that exists.</h2>
          <Link href="/" className="mi-btn">Home</Link>
        </div>
      </section>
    </PageLayout>
  );
}
