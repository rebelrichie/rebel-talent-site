import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

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
  return `px-3 py-2 text-sm no-underline whitespace-nowrap transition-colors ${
    active ? "text-stone-900 font-semibold" : "text-stone-500 hover:text-stone-900 font-medium"
  }`;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const contactActive = location === "/strategy-call" || location.startsWith("/strategy-call?");

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      data-testid="navbar"
      className="fixed top-0 left-0 w-full z-50 bg-[#F6F3ED] border-b border-stone-200"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" data-testid="link-home" className="flex items-center gap-2.5 no-underline shrink-0">
            <img src="/logo.png" alt="Rebel Talent" className="w-8 h-8" />
            <span className="font-display text-[1.15rem] font-medium tracking-tight text-stone-900 whitespace-nowrap">
              Rebel Talent
            </span>
          </Link>

          <button
            data-testid="button-mobile-menu"
            className="lg:hidden text-stone-900 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <div className="hidden lg:flex items-center gap-1">
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
            <Link
              href="/strategy-call"
              data-testid="link-nav-contact"
              aria-current={contactActive ? "page" : undefined}
              className="ml-3 inline-flex items-center px-3.5 py-2 text-sm font-semibold bg-rebel-red text-white no-underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-[#F6F3ED]">
          {NAV.map((item) => {
            const active = item.active(location);
            return (
              <Link
                key={item.href}
                href={item.href}
                data-testid={`link-mobile-${item.testId}`}
                aria-current={active ? "page" : undefined}
                className={`block px-5 py-3.5 text-base border-b border-stone-200 no-underline ${
                  active ? "text-stone-900 font-semibold" : "text-stone-600"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/strategy-call"
            data-testid="link-mobile-contact"
            className="block px-5 py-3.5 text-base font-semibold border-b border-stone-200 no-underline text-white bg-rebel-red"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
