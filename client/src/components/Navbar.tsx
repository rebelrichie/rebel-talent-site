import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";

// Nav order: money first — fractional recruiting is the core business
const mainLinks = [
  { href: "/fractional-head-of-talent", label: "FRACTIONAL" },
  { href: "/services", label: "SERVICES" },
  { href: "/how-it-works", label: "HOW IT WORKS" },
  { href: "/about", label: "ABOUT" },
  { href: "/platform", label: "PLATFORM" },
];

const proofLinks = [
  { href: "/testimonials", label: "Testimonials", external: false },
  { href: "/case-studies", label: "Case Studies", external: false },
];

const resourceLinks = [
  { href: "/blog", label: "Blog", external: false },
  { href: "/podcast", label: "Podcast", external: false },
  { href: "/free-tools", label: "Free Tools", external: false },
  { href: "/certification", label: "ABCR Certification", external: false },
  { href: "https://rebel-talent-shop.fourthwall.com/", label: "Shop", external: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [proofOpen, setProofOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileProofOpen, setMobileProofOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [location] = useLocation();
  const proofRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (proofRef.current && !proofRef.current.contains(e.target as Node)) {
        setProofOpen(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Reusable dropdown renderer
  const renderDropdown = (links: typeof proofLinks, isOpen: boolean) =>
    isOpen ? (
      <div className="absolute top-full right-0 mt-1 w-44 border border-zinc-800 bg-zinc-950 shadow-2xl rounded-md overflow-hidden" style={{ zIndex: 100 }}>
        {links.map((r) =>
          r.external ? (
            <a key={r.href} href={r.href} target="_blank" rel="noopener noreferrer"
              data-testid={`link-nav-${r.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="block px-4 py-2.5 text-xs text-zinc-400 hover:text-white hover:bg-zinc-900 no-underline transition-colors"
              onClick={() => { setProofOpen(false); setResourcesOpen(false); }}
            >{r.label}</a>
          ) : (
            <Link key={r.href} href={r.href}
              data-testid={`link-nav-${r.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={`block px-4 py-2.5 text-xs no-underline transition-colors hover:bg-zinc-900 ${location === r.href ? "text-rebel-red" : "text-zinc-400 hover:text-white"}`}
              onClick={() => { setProofOpen(false); setResourcesOpen(false); }}
            >{r.label}</Link>
          )
        )}
      </div>
    ) : null;

  return (
    <nav
      data-testid="navbar"
      className="fixed top-0 left-0 w-full z-50 border-b-2 border-rebel-red"
      style={{ background: "linear-gradient(135deg, #05050a 0%, #08080f 60%, #0a050d 100%)" }}
    >
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
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <div className="hidden md:flex items-center gap-0.5">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={`px-2.5 py-2 text-[11px] font-semibold tracking-widest transition-colors duration-200 no-underline whitespace-nowrap ${
                  location === link.href ? "text-rebel-red" : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Proof dropdown (Testimonials + Case Studies) */}
            <div ref={proofRef} className="relative">
              <button
                data-testid="button-proof-dropdown"
                aria-expanded={proofOpen}
                aria-haspopup="true"
                onClick={() => { setProofOpen(!proofOpen); setResourcesOpen(false); }}
                className={`flex items-center gap-1 px-2.5 py-2 text-[11px] font-semibold tracking-widest transition-colors duration-200 whitespace-nowrap ${
                  ["/testimonials", "/case-studies"].includes(location) ? "text-rebel-red" : "text-zinc-400 hover:text-white"
                }`}
              >
                RESULTS
                <ChevronDown size={11} className={`transition-transform duration-200 ${proofOpen ? "rotate-180" : ""}`} />
              </button>
              {renderDropdown(proofLinks, proofOpen)}
            </div>

            {/* Resources dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                data-testid="button-resources-dropdown"
                aria-expanded={resourcesOpen}
                aria-haspopup="true"
                onClick={() => { setResourcesOpen(!resourcesOpen); setProofOpen(false); }}
                className="flex items-center gap-1 px-2.5 py-2 text-[11px] font-semibold tracking-widest transition-colors duration-200 text-zinc-400 hover:text-white whitespace-nowrap"
              >
                RESOURCES
                <ChevronDown size={11} className={`transition-transform duration-200 ${resourcesOpen ? "rotate-180" : ""}`} />
              </button>
              {renderDropdown(resourceLinks, resourcesOpen)}
            </div>

            <a
              href="https://rebelapply.com"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-nav-apply"
              className="ml-2 px-3.5 py-2 text-[11px] font-semibold tracking-widest border border-rebel-red text-rebel-red hover:bg-rebel-red hover:text-white transition-colors no-underline whitespace-nowrap rounded-md"
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

          {/* Mobile: Results */}
          <button
            data-testid="button-mobile-results"
            aria-expanded={mobileProofOpen}
            className="w-full text-left flex items-center justify-between px-6 py-3 text-xs font-semibold tracking-widest border-b border-zinc-900 text-zinc-400"
            onClick={() => setMobileProofOpen(!mobileProofOpen)}
          >
            RESULTS
            <ChevronDown size={12} className={`transition-transform duration-200 ${mobileProofOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileProofOpen && proofLinks.map((r) => (
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
          ))}

          {/* Mobile: Resources */}
          <button
            data-testid="button-mobile-resources"
            aria-expanded={mobileResourcesOpen}
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
