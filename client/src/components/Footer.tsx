import { Link } from "wouter";

const SERVICES = [
  { href: "/services", label: "How we engage", testId: "link-footer-services" },
  { href: "/contingent", label: "Contingent", testId: "link-footer-contingent" },
  { href: "/fractional", label: "Embedded recruiting", testId: "link-footer-fractional" },
  { href: "/cleared", label: "Cleared and defense", testId: "link-footer-cleared" },
  { href: "/advisory", label: "Advisory", testId: "link-footer-advisory" },
];

const COMPANY = [
  { href: "/about", label: "About", testId: "link-footer-about" },
  { href: "/about/vision", label: "Vision", testId: "link-footer-vision" },
  { href: "/advisors", label: "Advisors", testId: "link-footer-advisors" },
  { href: "/case-studies", label: "Case studies", testId: "link-footer-case-studies" },
  { href: "/testimonials", label: "Testimonials", testId: "link-footer-testimonials" },
  { href: "/jobs", label: "Open jobs", testId: "link-footer-apply" },
];

const RESOURCES = [
  { href: "/blog", label: "Blog", testId: "link-footer-blog" },
  { href: "/podcast", label: "Podcast", testId: "link-footer-podcast" },
  {
    href: "https://www.linkedin.com/newsletters/rebel-built-7412825035092045824/",
    label: "Rebel Built newsletter",
    testId: "link-footer-newsletter",
    external: true,
  },
  { href: "/free-tools", label: "Free tools", testId: "link-footer-free-tools" },
  { href: "/certification", label: "ABCR certification", testId: "link-footer-certification" },
  {
    href: "https://rebel-talent-shop.fourthwall.com/",
    label: "Shop",
    testId: "link-footer-shop",
    external: true,
  },
];

type FooterLink = { href: string; label: string; testId: string; external?: boolean };

function Column({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <h2 className="mb-2">{title}</h2>
      <div className="flex flex-col">
        {links.map((item) =>
          item.external ? (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={item.testId}
              className="tap-link text-[15px] no-underline"
            >
              {item.label}
            </a>
          ) : (
            <Link
              key={item.label}
              href={item.href}
              data-testid={item.testId}
              className={`tap-link text-[15px] no-underline${item.href === "/jobs" ? " font-semibold" : ""}`}
            >
              {item.label}
            </Link>
          ),
        )}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer data-testid="footer" className="site-footer">
      <div className="max-w-[1200px] mx-auto px-5 py-14">
        <div className="footer-grid mb-10">
          <div className="footer-brand">
            <div className="logo-screen-frame logo-screen-footer">
              <img
                src="/images/rebel-logo-original-v2.jpg"
                alt="Rebel Talent"
                width={1856}
                height={1056}
                loading="lazy"
              />
            </div>
            <p className="text-[15px] leading-relaxed text-[#d5dbe3]">
              We install the hiring infrastructure your team runs on, across cleared and noncleared, entry to executive.
            </p>
            <div className="footer-direct">
              <a href="tel:+12025240255" data-testid="link-footer-phone" className="tap-link no-underline">
                (202) 524-0255
              </a>
              <a href="mailto:richie@rebeltalentsystems.com" data-testid="link-footer-email" className="tap-link no-underline">
                richie@rebeltalentsystems.com
              </a>
              <a href="https://linkedin.com/in/richielampani" target="_blank" rel="noopener noreferrer" data-testid="link-footer-linkedin" className="tap-link no-underline">
                LinkedIn
              </a>
              <a
                href="/Rebel-Talent-Systems-Capability-Statement.pdf"
                download="Rebel-Talent-Systems-Capability-Statement.pdf"
                data-testid="link-footer-capability-statement"
                className="tap-link no-underline"
              >
                Capability statement (PDF)
              </a>
            </div>
          </div>

          <Column title="Services" links={SERVICES} />
          <Column title="Company" links={COMPANY} />
          <Column title="Resources" links={RESOURCES} />
        </div>

        <div className="footer-people" id="footer-reach">
          <article className="depth-card contact-card">
            <h3>Richie Lampani</h3>
            <p>Founder, Rebel Talent Systems</p>
            <a href="mailto:richie@rebeltalentsystems.com" className="tap-link no-underline">
              richie@rebeltalentsystems.com
            </a>
            <a href="/strategy-call" className="tap-link no-underline font-medium">
              Book with Richie
            </a>
          </article>
          <article className="depth-card contact-card">
            <h3>Chris Moscato</h3>
            <p>Head of Client Acquisition</p>
            <a href="mailto:christopher@rebeltalentsystems.com" className="tap-link no-underline">
              christopher@rebeltalentsystems.com
            </a>
            <a
              href="https://calendly.com/christopher-rebeltalentsystems/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="tap-link no-underline font-medium"
            >
              Book time with Chris
            </a>
          </article>
        </div>

        <div className="border-t border-white/15 pt-6 mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-[#d5dbe3]">
          <span>SAM.gov registered</span>
          <span>CAGE 202V6</span>
          <span>UEI JQ4MZ69FNAK4</span>
          <span className="sr-only">Rebel Talent Systems, United States</span>
        </div>
      </div>
      <div className="mi-legal">
        <div className="max-w-[1200px] mx-auto px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[13px]">
          <p>&copy; 2026 Rebel Talent Co LLC. Rebel Talent Systems is a brand of Rebel Talent Co LLC.</p>
          <Link href="/privacy-policy" data-testid="link-footer-privacy" className="tap-link no-underline">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
