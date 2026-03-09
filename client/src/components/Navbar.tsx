import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/about", label: "ABOUT" },
  { href: "/how-it-works", label: "HOW IT WORKS" },
  { href: "/testimonials", label: "TESTIMONIALS" },
  { href: "/case-studies", label: "CASE STUDIES" },
  { href: "/podcast", label: "PODCAST" },
  { href: "/free-tools", label: "FREE TOOLS" },
  { href: "/services", label: "SERVICES" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <nav
      data-testid="navbar"
      className="fixed top-0 left-0 w-full z-50 border-b-2 border-rebel-red"
      style={{ background: "linear-gradient(135deg, #050505 0%, #0a0a0a 50%, #050505 100%)" }}
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={`px-3 py-2 text-xs font-semibold tracking-widest transition-colors duration-200 no-underline ${
                  location === link.href
                    ? "text-rebel-red"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-zinc-800" style={{ background: "#050505" }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={`block px-6 py-3 text-xs font-semibold tracking-widest border-b border-zinc-900 no-underline ${
                location === link.href
                  ? "text-rebel-red"
                  : "text-zinc-400"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
