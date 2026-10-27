import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowRight, Menu, X } from "lucide-react";

const NAV = [
  {
    href: "/services",
    label: "How we engage",
    testId: "engage",
    active: (path: string) =>
      ["/services", "/contingent", "/fractional", "/advisory", "/startups"].includes(path),
  },
  {
    href: "/cleared",
    label: "Cleared",
    testId: "cleared",
    active: (path: string) => path === "/cleared",
  },
  {
    href: "/case-studies",
    label: "Work",
    testId: "work",
    active: (path: string) => path === "/case-studies" || path === "/results",
  },
  {
    href: "/advisors",
    label: "Advisors",
    testId: "advisors",
    active: (path: string) => path === "/advisors",
  },
  {
    href: "/about",
    label: "About",
    testId: "about",
    active: (path: string) => path === "/about" || path.startsWith("/about/"),
  },
  {
    href: "/jobs",
    label: "Jobs",
    testId: "jobs",
    active: (path: string) => path === "/jobs" || path.startsWith("/jobs/"),
  },
];

function linkClass(active: boolean) {
  return `px-2.5 py-2 text-[15px] font-medium no-underline whitespace-nowrap ${
    active ? "text-[#0C1220]" : "text-[#3A4250] hover:text-[#0C1220]"
  }`;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const contactActive = location === "/strategy-call" || location.startsWith("/strategy-call?");
  const contactHref = location === "/" ? "#reach" : "/#reach";

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="border-b border-[#ECEEF2] text-[#5C6570]">
        <div className="mx-auto flex h-8 max-w-[1440px] items-center justify-between gap-4 px-5 text-[12px] sm:px-8">
          <div className="flex min-w-0 items-center gap-4">
            <a href="tel:+12025240255" className="whitespace-nowrap text-[#5C6570] no-underline hover:text-[#0C1220]">(202) 524-0255</a>
            <a href="mailto:richie@rebeltalentsystems.com" className="truncate text-[#5C6570] no-underline hover:text-[#0C1220]">richie@rebeltalentsystems.com</a>
          </div>
          <a href="https://linkedin.com/in/richielampani" target="_blank" rel="noopener noreferrer" className="shrink-0 text-[#5C6570] no-underline hover:text-[#0C1220]">LinkedIn</a>
        </div>
      </div>
      <nav data-testid="navbar" className="site-nav border-b border-[#ECEEF2] bg-white">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
          <div className="flex h-[68px] items-center justify-between gap-6">
            <Link href="/" data-testid="link-home" className="flex shrink-0 items-center gap-2.5 no-underline">
              <img src="/logo.png" alt="" className="h-9 w-9 object-contain" />
              <span className="text-[13px] font-semibold uppercase leading-none tracking-[0.12em] text-[#0C1220]">
                Rebel Talent
                <span className="mt-1 block tracking-[0.16em] text-[#5C6570]">Systems</span>
              </span>
            </Link>

            <button
              data-testid="button-mobile-menu"
              className="p-2 text-[#0C1220] lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            <div className="hidden items-center gap-0.5 lg:flex">
              {NAV.map((item) => {
                const active = item.active(location);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    data-testid={`link-nav-${item.testId}`}
                    aria-current={active ? "page" : undefined}
                    className={linkClass(active)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                href={contactHref}
                data-testid="link-nav-contact"
                aria-current={contactActive ? "page" : undefined}
                className="mi-btn mi-btn-sm ml-3"
              >
                Contact <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="border-t border-[#ECEEF2] bg-white lg:hidden">
            {NAV.map((item) => {
              const active = item.active(location);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  data-testid={`link-mobile-${item.testId}`}
                  aria-current={active ? "page" : undefined}
                  className={`block border-b border-[#ECEEF2] px-5 py-3.5 text-base no-underline ${
                    active ? "font-semibold text-[#0C1220]" : "text-[#3A4250]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={contactHref}
              data-testid="link-mobile-contact"
              className="mi-btn is-block"
              onClick={() => setIsOpen(false)}
            >
              Contact <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}
