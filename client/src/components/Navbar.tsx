import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";

const mainLinks = [
  { href: "/about", label: "ABOUT" },
  { href: "/how-it-works", label: "HOW IT WORKS" },
  { href: "/testimonials", label: "TESTIMONIALS" },
  { href: "/case-studies", label: "CASE STUDIES" },
  { href: "/services", label: "SERVICES" },
];

const resourceLinks = [
  { href: "/podcast", label: "Podcast", external: false },
  { href: "https://app.rebeltalent.dev/blog", label: "Blog", external: true },
  { href: "/free-tools", label: "Free Tools", external: false },
  { href: "https://rebel-talent-shop.fourthwall.com/", label: "Shop", external: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      data-testid="navbar"
      className="fixed top-0 left-0 w-full z-50 border-b-2 border-rebel-red"
      style={{ background: "linear-gradient(135deg, #05050a 0%, #08080f 60%, #0a050d 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" data-testid="link-home" className="flex items-center gap-3 no-underline">
            <img src="/logo.png" alt="Rebel Talent" className="w-9 h-9" />
            <span className="font-display text-lg font-bold tracking-wider text-white uppercase">
              REBEL TALENT
            </span>
          </Link>

          <button
            data-testid="button-mobile-menu"
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <div className="hidden md:flex items-center gap-1">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={`px-3 py-2 text-xs font-semibold tracking-widest transition-colors duration-200 no-underline ${
                  location === link.href ? "text-rebel-red" : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div ref={dropdownRef} className="relative">
              <button
                data-testid="button-resources-dropdown"
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="flex items-center gap-1 px-3 py-2 text-xs font-semibold tracking-widest transition-colors duration-200 text-zinc-400 hover:text-white"
              >
                RESOURCES
                <ChevronDown size={12} className={`transition-transform duration-200 ${resourcesOpen ? "rotate-180" : ""}`} />
              </button>
              {resourcesOpen && (
                <div className="absolute top-full right-0 mt-1 w-40 border border-zinc-800 bg-zinc-950 shadow-2xl" style={{ zIndex: 100 }}>
                  {resourceLinks.map((r) =>
                    r.external ? (
                      <a
                        key={r.href}
                        href={r.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`link-nav-${r.label.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-4 py-2.5 text-xs text-zinc-400 hover:text-white hover:bg-zinc-900 no-underline transition-colors"
                        onClick={() => setResourcesOpen(false)}
                      >
                        {r.label}
                      </a>
                    ) : (
                      <Link
                        key={r.href}
                        href={r.href}
                        data-testid={`link-nav-${r.label.toLowerCase().replace(/\s+/g, "-")}`}
                        className={`block px-4 py-2.5 text-xs no-underline transition-colors hover:bg-zinc-900 ${
                          location === r.href ? "text-rebel-red" : "text-zinc-400 hover:text-white"
                        }`}
                        onClick={() => setResourcesOpen(false)}
                      >
                        {r.label}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>

            <a
              href="https://rebelapply.com"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-nav-apply"
              className="ml-2 px-3 py-2 text-xs font-semibold tracking-widest border border-rebel-red text-rebel-red hover:bg-rebel-red hover:text-white transition-colors no-underline"
            >
              APPLY
            </a>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-zinc-800" style={{ background: "#050505" }}>
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={`block px-6 py-3 text-xs font-semibold tracking-widest border-b border-zinc-900 no-underline ${
                location === link.href ? "text-rebel-red" : "text-zinc-400"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <button
            data-testid="button-mobile-resources"
            className="w-full text-left flex items-center justify-between px-6 py-3 text-xs font-semibold tracking-widest border-b border-zinc-900 text-zinc-400"
            onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
          >
            RESOURCES
            <ChevronDown size={12} className={`transition-transform duration-200 ${mobileResourcesOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileResourcesOpen && resourceLinks.map((r) =>
            r.external ? (
              <a
                key={r.href}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`link-mobile-${r.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="block pl-10 pr-6 py-2.5 text-xs font-semibold tracking-widest border-b border-zinc-900/60 no-underline text-zinc-500 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {r.label}
              </a>
            ) : (
              <Link
                key={r.href}
                href={r.href}
                data-testid={`link-mobile-${r.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={`block pl-10 pr-6 py-2.5 text-xs font-semibold tracking-widest border-b border-zinc-900/60 no-underline ${
                  location === r.href ? "text-rebel-red" : "text-zinc-500"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {r.label}
              </Link>
            )
          )}

          <a
            href="https://rebelapply.com"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-mobile-apply"
            className="block px-6 py-3 text-xs font-semibold tracking-widest border-b border-zinc-900 no-underline text-white bg-rebel-red/10"
            onClick={() => setIsOpen(false)}
          >
            APPLY / START JOB PROFILE
          </a>
        </div>
      )}
    </nav>
  );
}
