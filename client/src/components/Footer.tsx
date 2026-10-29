import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer data-testid="footer" className="site-footer">
      <div className="border-b border-white/10">
        <div className="max-w-[1140px] mx-auto px-5 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[15px]">
            Ready to build your team the right way?
          </p>
          <a href="/strategy-call" className="tap-link inline-flex items-center gap-2 text-[15px] font-semibold no-underline">
            Book a strategy call <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-5 py-14">
        <div className="footer-grid mb-12">
          <div>
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
            <a href="tel:+12025240255" data-testid="link-footer-phone" className="tap-link no-underline">
              (202) 524-0255
            </a>
            <a href="mailto:richie@rebeltalentsystems.com" data-testid="link-footer-email" className="tap-link no-underline">
              richie@rebeltalentsystems.com
            </a>
          </div>

          <div>
            <h2 className="mb-2">Firm</h2>
            <div className="flex flex-col">
              <Link href="/services" data-testid="link-footer-services" className="tap-link text-[15px] no-underline">How we engage</Link>
              <Link href="/contingent" data-testid="link-footer-contingent" className="tap-link text-[15px] no-underline">Contingent</Link>
              <Link href="/fractional" data-testid="link-footer-fractional" className="tap-link text-[15px] no-underline">Embedded recruiting</Link>
              <Link href="/cleared" data-testid="link-footer-cleared" className="tap-link text-[15px] no-underline">Cleared and defense</Link>
              <Link href="/advisory" data-testid="link-footer-advisory" className="tap-link text-[15px] no-underline">Advisory</Link>
              <Link href="/case-studies" data-testid="link-footer-case-studies" className="tap-link text-[15px] no-underline">Case studies</Link>
              <Link href="/advisors" data-testid="link-footer-advisors" className="tap-link text-[15px] no-underline">Advisors</Link>
              <Link href="/about" data-testid="link-footer-about" className="tap-link text-[15px] no-underline">About</Link>
              <Link href="/about/vision" data-testid="link-footer-vision" className="tap-link text-[15px] no-underline">Vision</Link>
              <Link href="/jobs" data-testid="link-footer-apply" className="tap-link text-[15px] no-underline font-semibold">Open jobs</Link>
              <Link href="/blog" data-testid="link-footer-blog" className="tap-link text-[15px] no-underline">Blog</Link>
              <Link href="/podcast" data-testid="link-footer-podcast" className="tap-link text-[15px] no-underline">Podcast</Link>
              <Link href="/testimonials" data-testid="link-footer-testimonials" className="tap-link text-[15px] no-underline">Testimonials</Link>
              <Link href="/free-tools" data-testid="link-footer-free-tools" className="tap-link text-[15px] no-underline">Free tools</Link>
              <Link href="/certification" data-testid="link-footer-certification" className="tap-link text-[15px] no-underline">ABCR certification</Link>
              <a href="https://rebel-talent-shop.fourthwall.com/" target="_blank" rel="noopener noreferrer" data-testid="link-footer-shop" className="tap-link text-[15px] no-underline">Shop</a>
              <a href="https://www.linkedin.com/newsletters/rebel-built-7412825035092045824/" target="_blank" rel="noopener noreferrer" data-testid="link-footer-newsletter" className="tap-link text-[15px] no-underline">Rebel Built newsletter</a>
            </div>
          </div>

          <div id="footer-reach">
            <h2 className="mb-2">Contact</h2>
            <div className="flex flex-col text-[15px]">
              <p className="text-white">Richie Lampani</p>
              <p className="text-[#d5dbe3]">Founder, Rebel Talent Systems</p>
              <a href="/strategy-call" className="tap-link no-underline font-medium text-white">Book a strategy call</a>
              <p className="text-white mt-4">Chris Moscato</p>
              <p className="text-[#d5dbe3]">Head of Client Acquisition</p>
              <a href="mailto:christopher@rebeltalentsystems.com" className="tap-link no-underline">
                christopher@rebeltalentsystems.com
              </a>
              <a href="https://calendly.com/christopher-rebeltalentsystems/30min" target="_blank" rel="noopener noreferrer" className="tap-link no-underline font-medium text-white">Book a strategy call</a>
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
              <span className="sr-only">Rebel Talent Systems, United States</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 pt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-[#d5dbe3]">
          <span>SAM.gov registered</span>
          <span>CAGE 202V6</span>
          <span>UEI JQ4MZ69FNAK4</span>
        </div>
      </div>
      <div className="mi-legal">
        <div className="max-w-[1140px] mx-auto px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[13px]">
          <p>&copy; {new Date().getFullYear()} Rebel Talent Systems. All rights reserved.</p>
          <Link href="/privacy-policy" data-testid="link-footer-privacy" className="tap-link no-underline">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
