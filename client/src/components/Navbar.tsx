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
  return `px-2.5 py-2 text-[11px] font-semibold tracking-[0.14em] uppercase transition-colors duration-200 no-underline whitespace-nowrap ${
    active ? "text-rebel-red" : "text-zinc-400 hover:text-white"
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
      className="fixed top-0 left-0 w-full z-50"
      style={{ background: "linear-gradient(135deg, #08070A 0%, #0E0D11 60%, #0A0812 100%)" }}
    >
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent 0%, #F71A29 30%, #F5841E 60%, transparent 100%)", zIndex: 0 }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" data-testid="link-home" className="flex items-center gap-2.5 no-underline shrink-0">
            <img src="/logo.png" alt="Rebel Talent" className="w-8 h-8" />
            <span className="font-display text-base font-bold tracking-wider text-white uppercase whitespace-nowrap">
              REBEL TALENT
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

          <div className="hidden lg:flex items-center gap-0.5">
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
              className={`ml-2 px-3.5 py-2 text-[11px] font-semibold tracking-[0.14em] uppercase border rounded-md transition-colors no-underline whitespace-nowrap ${
                contactActive
                  ? "bg-rebel-red text-white border-rebel-red"
                  : "border-rebel-red text-rebel-red hover:bg-rebel-red hover:text-white"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-zinc-800" style={{ background: "#050505" }}>
          {NAV.map((item) => {
            const active = item.active(location);
            return (
              <Link
                key={item.href}
                href={item.href}
                data-testid={`link-mobile-${item.testId}`}
                aria-current={active ? "page" : undefined}
                className={`block px-6 py-3 text-xs font-semibold tracking-[0.16em] uppercase border-b border-zinc-900 no-underline ${
                  active ? "text-rebel-red" : "text-zinc-400"
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
            className="block px-6 py-3 text-xs font-semibold tracking-[0.16em] uppercase border-b border-zinc-900 no-underline text-white bg-rebel-red/10"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
