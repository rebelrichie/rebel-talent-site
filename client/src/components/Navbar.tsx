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
  return `px-3 py-2 text-[16px] font-medium no-underline whitespace-nowrap ${
    active ? "text-white" : "text-white/90 hover:text-white"
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
    <div className="sticky top-0 z-50">
      <div className="bg-[#081422] text-[#C9D6E5] border-b border-[#8FD4EA]/30">
        <div className="max-w-[1140px] mx-auto px-5 h-9 flex items-center justify-between gap-4 text-[12px]">
          <div className="flex items-center gap-4 min-w-0">
            <a href="tel:+12025240255" className="no-underline text-[#C9D6E5] hover:text-white whitespace-nowrap">(202) 524-0255</a>
            <a href="mailto:richie@rebeltalentsystems.com" className="no-underline text-[#C9D6E5] hover:text-white truncate">richie@rebeltalentsystems.com</a>
          </div>
          <a href="https://linkedin.com/in/richielampani" target="_blank" rel="noopener noreferrer" className="no-underline text-[#C9D6E5] hover:text-white shrink-0">LinkedIn</a>
        </div>
      </div>
      <nav data-testid="navbar" className="site-nav bg-[#0E1A33]">
        <div className="max-w-[1140px] mx-auto px-5">
          <div className="flex items-center justify-between h-[72px]">
            <Link href="/" data-testid="link-home" className="flex items-center gap-2.5 no-underline shrink-0">
              <img src="/logo.png" alt="Rebel Talent" className="w-9 h-9 bg-white p-0.5" />
              <span className="text-[17px] font-medium text-white whitespace-nowrap">
                Rebel Talent
              </span>
            </Link>

            <button
              data-testid="button-mobile-menu"
              className="lg:hidden text-white p-2"
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
              <a
                href={contactHref}
                data-testid="link-nav-contact"
                aria-current={contactActive ? "page" : undefined}
                className="mi-btn ml-3 text-[15px] px-4 py-2"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden border-t border-white/15 bg-[#0E1A33]">
            {NAV.map((item) => {
              const active = item.active(location);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  data-testid={`link-mobile-${item.testId}`}
                  aria-current={active ? "page" : undefined}
                  className={`block px-5 py-3.5 text-base border-b border-white/10 no-underline ${
                    active ? "text-white font-medium" : "text-white/90"
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
              className="mi-btn block mx-5 my-3 text-center"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}
