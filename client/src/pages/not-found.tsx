import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import InteriorHero from "@/components/InteriorHero";

const quickLinks = [
  { href: "/services", label: "How we engage" },
  { href: "/cleared", label: "Cleared" },
  { href: "/case-studies", label: "Work" },
  { href: "/advisors", label: "Advisors" },
  { href: "/about", label: "About" },
  { href: "/jobs", label: "Jobs" },
  { href: "/blog", label: "Insights" },
  { href: "/strategy-call", label: "Contact" },
];

export default function NotFound() {
  return (
    <PageLayout>
      <PageSEO
        title="Page Not Found | Rebel Talent Systems"
        description="This page does not exist. Head back to the main site or reach out and we will point you the right way."
        path="/404"
        noindex
      />

      <InteriorHero>
        <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#C8102E]">404</p>
        <h1 className="mt-4 text-[#0C1220]" data-testid="text-not-found">
          Target Not Found
        </h1>
        <p className="mt-5 max-w-md text-[17px] leading-[1.6] text-[#3D4450]">
          The page you're looking for has gone dark.
        </p>
        <Link href="/" data-testid="link-go-home" className="mi-btn mt-8">
          Return to Base
        </Link>
      </InteriorHero>

      <section className="border-t border-[#E7E9EE]">
        <div className="max-w-[1140px] mx-auto px-6 py-14">
          <h2 className="text-[28px] text-[#0C1220] mb-6">Keep going</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border border-[#E7E9EE] bg-white px-4 py-4 text-[15px] text-[#0C1220] no-underline hover:border-[#C8102E]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
