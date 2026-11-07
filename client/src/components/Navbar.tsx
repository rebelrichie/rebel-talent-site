import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import ScrollProgress from "./ScrollProgress";

const NAV = [
  { href: "/about", label: "About", testId: "about", active: (path: string) => path === "/about" || path.startsWith("/about/") },
  { href: "/case-studies", label: "Work", testId: "work", active: (path: string) => path === "/case-studies" || path === "/results" },
  { href: "/jobs", label: "Jobs", testId: "jobs", active: (path: string) => path === "/jobs" || path.startsWith("/jobs/") },
  { href: "/strategy-call", label: "Connect", testId: "connect", active: (path: string) => path === "/strategy-call" || path.startsWith("/strategy-call?") },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`v4-header${isOpen ? " open" : ""}`} data-testid="navbar">
      <Link href="/" data-testid="link-home" className="v4-brand" aria-label="Rebel Talent home">
        <img src="/logo.png" alt="Rebel Talent star and orbit logo" width={64} height={64} />
      </Link>
      <button
        type="button"
        className="v4-menu"
        data-testid="button-mobile-menu"
        aria-expanded={isOpen}
        aria-controls="main-nav"
        onClick={() => setIsOpen((open) => !open)}
      >
        Menu <span aria-hidden="true">+</span>
      </button>
      <nav id="main-nav" aria-label="Main navigation">
        {NAV.map((item) => {
          const active = item.active(location);
          return (
            <Link
              key={item.href}
              href={item.href}
              data-testid={`link-nav-${item.testId}`}
              aria-current={active ? "page" : undefined}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          );
        })}
        <Link
          href="/strategy-call"
          className="v4-nav-cta"
          data-testid="link-nav-contact"
          onClick={() => setIsOpen(false)}
        >
          Book a strategy call <span aria-hidden="true">↗</span>
        </Link>
      </nav>
      <ScrollProgress />
    </header>
  );
}
