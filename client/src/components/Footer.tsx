import { Link } from "wouter";
import { BOOK_CHRIS_HREF, EMAIL_CHRIS_HREF } from "@/components/ContingentChrisSection";

const PRIMARY = [
  { href: "/", label: "Home", testId: "link-footer-home" },
  { href: "/about", label: "About", testId: "link-footer-about" },
  { href: "/case-studies", label: "Work", testId: "link-footer-case-studies" },
  { href: "/jobs", label: "Jobs", testId: "link-footer-apply" },
  { href: "/strategy-call", label: "Connect", testId: "link-footer-connect" },
];

const PRACTICE = [
  { href: "/services", label: "How we engage", testId: "link-footer-services" },
  { href: "/contingent", label: "Contingent", testId: "link-footer-contingent" },
  { href: "/contingent-tech-recruiting", label: "Contingent tech recruiting", testId: "link-footer-contingent-tech" },
  { href: "/fractional", label: "Embedded recruiting", testId: "link-footer-fractional" },
  { href: "/fractional-recruiter-for-series-a", label: "Fractional recruiter for Series A", testId: "link-footer-series-a" },
  { href: "/hire-a-tpm", label: "Hire a TPM", testId: "link-footer-tpm" },
  { href: "/cleared", label: "Cleared and defense", testId: "link-footer-cleared" },
  { href: "/advisory", label: "Advisory", testId: "link-footer-advisory" },
  { href: "/advisors", label: "Advisors", testId: "link-footer-advisors" },
  { href: "/about#team", label: "The team", testId: "link-footer-team" },
  { href: "/about/vision", label: "Vision", testId: "link-footer-vision" },
  { href: "/testimonials", label: "Testimonials", testId: "link-footer-testimonials" },
];

export default function Footer() {
  return (
    <footer data-testid="footer" className="v4-footer">
      <div className="v4-footer-main">
        <div className="v4-footer-intro">
          <p className="v4-footer-name">REBEL TALENT</p>
          <p className="v4-footer-thesis">The system stays</p>
          <p>Recruiting systems and execution for defense, space, and Series A to C teams that cannot afford to hire wrong.</p>
          <div className="v4-footer-direct">
            <a href="tel:+12025240255" data-testid="link-footer-phone">(202) 524-0255</a>
            <a href="mailto:richie@rebeltalentsystems.com" data-testid="link-footer-email">richie@rebeltalentsystems.com</a>
            <a href="https://linkedin.com/in/richielampani" target="_blank" rel="noopener noreferrer" data-testid="link-footer-linkedin">LinkedIn</a>
            <a
              href="/Rebel-Talent-Systems-Capability-Statement.pdf"
              download="Rebel-Talent-Systems-Capability-Statement.pdf"
              data-testid="link-footer-capability-statement"
            >
              Capability statement (PDF)
            </a>
          </div>
        </div>
        <nav className="v4-footer-nav" aria-label="Footer">
          {PRIMARY.map((item) => (
            <Link key={item.href} href={item.href} data-testid={item.testId}>{item.label}</Link>
          ))}
        </nav>
        <nav className="v4-footer-nav" aria-label="Practice">
          {PRACTICE.map((item) => (
            <Link key={item.href} href={item.href} data-testid={item.testId}>{item.label}</Link>
          ))}
          <Link href="/blog" data-testid="link-footer-blog">Blog</Link>
          <Link href="/podcast" data-testid="link-footer-podcast">Podcast</Link>
          <a href="https://www.linkedin.com/newsletters/rebel-built-7412825035092045824/" target="_blank" rel="noopener noreferrer" data-testid="link-footer-newsletter">Rebel Built newsletter</a>
          <Link href="/free-tools" data-testid="link-footer-free-tools">Free tools</Link>
          <Link href="/certification" data-testid="link-footer-certification">ABCR certification</Link>
          <a href="https://rebel-talent-shop.fourthwall.com/" target="_blank" rel="noopener noreferrer" data-testid="link-footer-shop">Shop</a>
        </nav>
        <div className="v4-footer-identifiers">
          <p>SAM.gov<br />CAGE 202V6<br />UEI JQ4MZ69FNAK4</p>
          <p className="v4-footer-people">
            <a href={EMAIL_CHRIS_HREF}>christopher@rebeltalentsystems.com</a>
            <a href={BOOK_CHRIS_HREF} target="_blank" rel="noopener noreferrer">Book time with Chris</a>
          </p>
        </div>
      </div>
      <div className="v4-footer-bottom">
        <p>© 2026 Rebel Talent Co LLC. Rebel Talent Systems is a brand of Rebel Talent Co LLC.</p>
        <a href="mailto:richie@rebeltalentsystems.com">richie@rebeltalentsystems.com</a>
        <Link href="/privacy-policy" data-testid="link-footer-privacy">Privacy</Link>
      </div>
    </footer>
  );
}
