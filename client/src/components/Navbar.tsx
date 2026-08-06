import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";

// Safe addition — Services is a dropdown so Advisory is reachable from top nav
const servicesLinks = [
  { href: "/services", label: "All Services", external: false },
  { href: "/advisory", label: "Advisory", external: false },
];

const proofLinks = [
  { href: "/testimonials", label: "Testimonials", external: false },
  { href: "/case-studies", label: "Case Studies", external: false },
];

// Safe addition — About becomes a dropdown so the Vision manifesto is reachable
const aboutLinks = [
  { href: "/about", label: "About", external: false },
  { href: "/about/vision", label: "Vision", external: false },
];

const resourceLinks = [
  { href: "/blog", label: "Blog", external: false },
  { href: "/podcast", label: "Podcast", external: false },
  { href: "/free-tools", label: "Free Tools", external: false },
  { href: "/hiring-readiness", label: "Hiring Readiness Scorecard", external: false },
  { href: "/certification", label: "ABCR Certification", external: false },
  { href: "https://rebel-talent-shop.fourthwall.com/", label: "Shop", external: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [proofOpen, setProofOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false); // Safe addition
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // Safe addition
  const [mobileProofOpen, setMobileProofOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false); // Safe addition
  const [location] = useLocation();
  const servicesRef = useRef<HTMLDivElement>(null);
  const proofRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null); // Safe addition
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (proofRef.current && !proofRef.current.contains(e.target as Node)) {
        setProofOpen(false);
      }
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) {
        setAboutOpen(false);
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
      <div className="absolute top-full right-0 mt-1 min-w-44 w-max border border-zinc-800 bg-[#09090b] shadow-2xl rounded-md overflow-hidden" style={{ zIndex: 100 }}>
        {links.map((r) =>
          r.external ? (
            <a key={r.href} href={r.href} target="_blank" rel="noopener noreferrer"
              data-testid={`link-nav-${r.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="block px-4 py-2.5 text-xs text-zinc-400 hover:text-white hover:bg-zinc-900 no-underline transition-colors"
              onClick={() => { setServicesOpen(false); setProofOpen(false); setResourcesOpen(false); setAboutOpen(false); }}
            >{r.label}</a>
          ) : (
            <Link key={r.href} href={r.href}
              data-testid={`link-nav-${r.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={`block px-4 py-2.5 text-xs no-underline transition-colors hover:bg-zinc-900 ${location === r.href ? "text-rebel-red" : "text-zinc-400 hover:text-white"}`}
              onClick={() => { setServicesOpen(false); setProofOpen(false); setResourcesOpen(false); setAboutOpen(false); }}
            >{r.label}</Link>
          )
        )}
      </div>
    ) : null;

  return (
    <nav
      data-testid="navbar"
      className="fixed top-0 left-0 w-full z-50"
      style={{ background: "linear-gradient(135deg, #08070A 0%, #0E0D11 60%, #0A0812 100%)" }}
    >
      {/* Signal gradient accent line — decorative only, no layout impact. z:0 keeps it beneath open dropdowns. */}
      <div className="absolute bottom-0 left-0 right-0 h-px pointer-events-none" style={{ background: "linear-gradient(90deg, transparent 0%, #F71A29 30%, #F5841E 60%, transparent 100%)", zIndex: 0 }} />
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
            {/* Safe addition — Services dropdown (All Services + Advisory) */}
            <div ref={servicesRef} className="relative z-[70]">
              <button
                data-testid="button-services-dropdown"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                onClick={() => { setServicesOpen(!servicesOpen); setAboutOpen(false); setProofOpen(false); setResourcesOpen(false); }}
                className={`flex items-center gap-1 px-2.5 py-2 text-[11px] font-semibold tracking-widest transition-colors duration-200 whitespace-nowrap ${
                  ["/services", "/advisory"].includes(location) ? "text-rebel-red" : "text-zinc-400 hover:text-white"
                }`}
              >
                SERVICES
                <ChevronDown size={11} className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {renderDropdown(servicesLinks, servicesOpen)}
            </div>

            {/* Safe addition — About dropdown (About + Vision) */}
            <div ref={aboutRef} className="relative z-[70]">
              <button
                data-testid="button-about-dropdown"
                aria-expanded={aboutOpen}
                aria-haspopup="true"
                onClick={() => { setAboutOpen(!aboutOpen); setServicesOpen(false); setProofOpen(false); setResourcesOpen(false); }}
                className={`flex items-center gap-1 px-2.5 py-2 text-[11px] font-semibold tracking-widest transition-colors duration-200 whitespace-nowrap ${
                  ["/about", "/about/vision"].includes(location) ? "text-rebel-red" : "text-zinc-400 hover:text-white"
                }`}
              >
                ABOUT
                <ChevronDown size={11} className={`transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`} />
              </button>
              {renderDropdown(aboutLinks, aboutOpen)}
            </div>

            {/* Safe addition, Jobs (replaces APPLY as the candidate front door) */}
            <Link
              href="/jobs"
              data-testid="link-nav-jobs"
              className={`px-2.5 py-2 text-[11px] font-semibold tracking-widest transition-colors duration-200 no-underline whitespace-nowrap ${
                location === "/jobs" ? "text-rebel-red" : "text-zinc-400 hover:text-white"
              }`}
            >
              JOBS
            </Link>

            {/* Proof dropdown (Testimonials + Case Studies) */}
            <div ref={proofRef} className="relative z-[70]">
              <button
                data-testid="button-proof-dropdown"
                aria-expanded={proofOpen}
                aria-haspopup="true"
                onClick={() => { setProofOpen(!proofOpen); setServicesOpen(false); setResourcesOpen(false); }}
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
            <div ref={dropdownRef} className="relative z-[70]">
              <button
                data-testid="button-resources-dropdown"
                aria-expanded={resourcesOpen}
                aria-haspopup="true"
                onClick={() => { setResourcesOpen(!resourcesOpen); setServicesOpen(false); setProofOpen(false); }}
                className="flex items-center gap-1 px-2.5 py-2 text-[11px] font-semibold tracking-widest transition-colors duration-200 text-zinc-400 hover:text-white whitespace-nowrap"
              >
                RESOURCES
                <ChevronDown size={11} className={`transition-transform duration-200 ${resourcesOpen ? "rotate-180" : ""}`} />
              </button>
              {renderDropdown(resourceLinks, resourcesOpen)}
            </div>

            <Link
              href="/jobs"
              data-testid="link-nav-apply"
              className="ml-1.5 px-3.5 py-2 text-[11px] font-semibold tracking-widest border border-rebel-red text-rebel-red hover:bg-rebel-red hover:text-white transition-colors no-underline whitespace-nowrap rounded-md"
            >
              APPLY
            </Link>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-zinc-800" style={{ background: "#050505" }}>
          {/* Safe addition — Mobile: Services dropdown (All Services + Advisory) */}
          <button
            data-testid="button-mobile-services"
            aria-expanded={mobileServicesOpen}
            className="w-full text-left flex items-center justify-between px-6 py-3 text-xs font-semibold tracking-widest border-b border-zinc-900 text-zinc-400"
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
          >
            SERVICES
            <ChevronDown size={12} className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileServicesOpen && servicesLinks.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              data-testid={`link-mobile-${r.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={`block pl-10 pr-6 py-2.5 text-xs font-semibold tracking-widest border-b border-zinc-900/60 no-underline ${
                location === r.href ? "text-rebel-red" : "text-zinc-400"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {r.label}
            </Link>
          ))}

          {/* Safe addition — Mobile: About dropdown (About + Vision) */}
          <button
            data-testid="button-mobile-about"
            aria-expanded={mobileAboutOpen}
            className="w-full text-left flex items-center justify-between px-6 py-3 text-xs font-semibold tracking-widest border-b border-zinc-900 text-zinc-400"
            onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
          >
            ABOUT
            <ChevronDown size={12} className={`transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileAboutOpen && aboutLinks.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              data-testid={`link-mobile-${r.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={`block pl-10 pr-6 py-2.5 text-xs font-semibold tracking-widest border-b border-zinc-900/60 no-underline ${
                location === r.href ? "text-rebel-red" : "text-zinc-400"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {r.label}
            </Link>
          ))}

          {/* Safe addition, Jobs */}
          <Link
            href="/jobs"
            data-testid="link-mobile-jobs"
            className={`block px-6 py-3 text-xs font-semibold tracking-widest border-b border-zinc-900 no-underline ${
              location === "/jobs" ? "text-rebel-red" : "text-zinc-400"
            }`}
            onClick={() => setIsOpen(false)}
          >
            JOBS
          </Link>

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
                location === r.href ? "text-rebel-red" : "text-zinc-400"
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
                className="block pl-10 pr-6 py-2.5 text-xs font-semibold tracking-widest border-b border-zinc-900/60 no-underline text-zinc-400 hover:text-white"
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
                  location === r.href ? "text-rebel-red" : "text-zinc-400"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {r.label}
              </Link>
            )
          )}

          <Link
            href="/jobs"
            data-testid="link-mobile-apply"
            className="block px-6 py-3 text-xs font-semibold tracking-widest border-b border-zinc-900 no-underline text-white bg-rebel-red/10"
            onClick={() => setIsOpen(false)}
          >
            APPLY / SEE OPEN ROLES
          </Link>
        </div>
      )}
    </nav>
  );
}
