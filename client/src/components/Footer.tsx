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
          <a href="/strategy-call" className="inline-flex items-center gap-2 text-[15px] font-semibold no-underline">
            Book a Strategy Call <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

        <div className="max-w-[1140px] mx-auto px-5 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Rebel Talent" className="w-8 h-8 bg-white rounded-sm" loading="lazy" />
              <span className="text-lg font-bold tracking-[-0.03em] text-white">
                Rebel Talent
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[#c5ccd4]">
              We install the hiring infrastructure your team runs on, across cleared and noncleared, entry to executive.
            </p>
          </div>

          <div>
            <h2 className="mb-4">Navigate</h2>
            <div className="flex flex-col gap-2.5">
              <Link href="/services" data-testid="link-footer-services" className="text-sm no-underline">Services &amp; Pricing</Link>
              <Link href="/contingent" data-testid="link-footer-contingent" className="text-sm no-underline">Contingent</Link>
              <Link href="/fractional" data-testid="link-footer-fractional" className="text-sm no-underline">Fractional Recruiting</Link>
              <Link href="/cleared" data-testid="link-footer-cleared" className="text-sm no-underline">Cleared &amp; Defense</Link>
              <Link href="/advisory" data-testid="link-footer-advisory" className="text-sm no-underline">Advisory</Link>
              <Link href="/testimonials" data-testid="link-footer-testimonials" className="text-sm no-underline">Testimonials</Link>
              <Link href="/case-studies" data-testid="link-footer-case-studies" className="text-sm no-underline">Case Studies</Link>
              <Link href="/advisors" data-testid="link-footer-advisors" className="text-sm no-underline">Advisors</Link>
              <Link href="/about" data-testid="link-footer-about" className="text-sm no-underline">About</Link>
              <Link href="/about/vision" data-testid="link-footer-vision" className="text-sm no-underline">Vision</Link>
            </div>
          </div>

          <div>
            <h2 className="mb-4">Resources</h2>
            <div className="flex flex-col gap-2.5">
              <Link href="/blog" data-testid="link-footer-blog" className="text-sm no-underline">Blog</Link>
              <Link href="/podcast" data-testid="link-footer-podcast" className="text-sm no-underline">Podcast</Link>
              <Link href="/free-tools" data-testid="link-footer-free-tools" className="text-sm no-underline">Free Tools</Link>
              <Link href="/certification" data-testid="link-footer-certification" className="text-sm no-underline">ABCR Certification</Link>
              <a href="https://rebel-talent-shop.fourthwall.com/" target="_blank" rel="noopener noreferrer" data-testid="link-footer-shop" className="text-sm no-underline">Shop</a>
              <a href="https://www.linkedin.com/newsletters/rebel-built-7412825035092045824/" target="_blank" rel="noopener noreferrer" data-testid="link-footer-newsletter" className="text-sm no-underline">Rebel Built Newsletter</a>
              <Link href="/jobs" data-testid="link-footer-apply" className="text-sm no-underline font-semibold !text-white">Apply to Open Jobs</Link>
            </div>
          </div>

          <div id="footer-reach">
            <h2 className="mb-4">Contact</h2>
            <div className="flex flex-col gap-4 text-sm">
              <div>
                <p className="text-white">Richie Lampani</p>
                <p className="text-[#d5dbe3]">Founder, Rebel Talent Systems</p>
                <a href="mailto:richie@rebeltalentsystems.com" data-testid="link-footer-email" className="no-underline">
                  richie@rebeltalentsystems.com
                </a>
                <a href="/strategy-call" className="block no-underline font-medium text-white">Book a call</a>
              </div>
              <div>
                <p className="text-white">Chris Moscato</p>
                <p className="text-[#d5dbe3]">Head of Client Acquisition</p>
                <a href="mailto:christopher@rebeltalentsystems.com" className="no-underline">
                  christopher@rebeltalentsystems.com
                </a>
                <a href="https://calendly.com/christopher-rebeltalentsystems/30min" target="_blank" rel="noopener noreferrer" className="block no-underline font-medium text-white">Book a call</a>
              </div>
              <a href="tel:+12025240255" data-testid="link-footer-phone" className="no-underline">
                (202) 524-0255
              </a>
              <a href="https://linkedin.com/in/richielampani" target="_blank" rel="noopener noreferrer" data-testid="link-footer-linkedin" className="no-underline">
                LinkedIn
              </a>
              <span className="sr-only">Rebel Talent Systems, United States</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 pt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#d5dbe3]">
          <span>SAM.gov Registered</span>
          <span>CAGE: 202V6</span>
          <span>UEI: JQ4MZ69FNAK4</span>
          <a
            href="/Rebel-Talent-Systems-Capability-Statement.pdf"
            download="Rebel-Talent-Systems-Capability-Statement.pdf"
            data-testid="link-footer-capability-statement"
            className="underline underline-offset-2"
          >
            Capability statement (PDF)
          </a>
        </div>
      </div>
      <div className="mi-legal">
        <div className="max-w-[1140px] mx-auto px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[12px]">
          <p>&copy; {new Date().getFullYear()} Rebel Talent Systems. All rights reserved.</p>
          <Link href="/privacy-policy" data-testid="link-footer-privacy" className="no-underline">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
