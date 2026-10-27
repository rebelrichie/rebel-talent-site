import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer data-testid="footer" className="border-t border-stone-300 bg-[#EFEBE3]">
      <div className="border-b border-stone-300">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-stone-600 text-sm">
            Ready to build your team the right way?
          </p>
          <a href="/strategy-call"
            className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 hover:text-[#9E2330] transition-colors no-underline"
          >
            Book a Strategy Call <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Rebel Talent" className="w-8 h-8" loading="lazy" />
              <span className="font-display text-lg font-medium tracking-tight text-stone-900">
                Rebel Talent
              </span>
            </div>
            <p className="text-stone-600 text-sm leading-relaxed">
              We install the hiring infrastructure your team runs on, across cleared and noncleared, entry to executive.
            </p>
          </div>

          <div>
            <h2 className="mb-4">
              Navigate
            </h2>
            <div className="flex flex-col gap-2.5">
              <Link href="/services" data-testid="link-footer-services" className="text-stone-600 text-sm no-underline hover:text-stone-900 transition-colors">Services &amp; Pricing</Link>
              <Link href="/contingent" data-testid="link-footer-contingent" className="text-stone-600 text-sm no-underline hover:text-stone-900 transition-colors">Contingent</Link>
              <Link href="/fractional" data-testid="link-footer-fractional" className="text-stone-600 text-sm no-underline hover:text-stone-900 transition-colors">Fractional Recruiting</Link>
              <Link href="/cleared" data-testid="link-footer-cleared" className="text-stone-600 text-sm no-underline hover:text-stone-900 transition-colors">Cleared &amp; Defense</Link>
              <Link href="/advisory" data-testid="link-footer-advisory" className="text-stone-600 text-sm no-underline hover:text-stone-900 transition-colors">Advisory</Link>
              <Link href="/testimonials" data-testid="link-footer-testimonials" className="text-stone-600 text-sm no-underline hover:text-stone-900 transition-colors">Testimonials</Link>
              <Link href="/case-studies" data-testid="link-footer-case-studies" className="text-stone-600 text-sm no-underline hover:text-stone-900 transition-colors">Case Studies</Link>
              <Link href="/advisors" data-testid="link-footer-advisors" className="text-stone-600 text-sm no-underline hover:text-stone-900 transition-colors">Advisors</Link>
              <Link href="/about" data-testid="link-footer-about" className="text-stone-600 text-sm no-underline hover:text-stone-900 transition-colors">About</Link>
              <Link href="/about/vision" data-testid="link-footer-vision" className="text-stone-600 text-sm no-underline hover:text-stone-900 transition-colors">Vision</Link>
            </div>
          </div>

          <div>
            <h2 className="mb-4">
              Resources
            </h2>
            <div className="flex flex-col gap-2.5">
              <Link href="/blog" data-testid="link-footer-blog" className="text-stone-600 text-sm no-underline hover:text-stone-900 transition-colors">Blog</Link>
              <Link href="/podcast" data-testid="link-footer-podcast" className="text-stone-600 text-sm no-underline hover:text-stone-900 transition-colors">Podcast</Link>
              <Link href="/free-tools" data-testid="link-footer-free-tools" className="text-stone-600 text-sm no-underline hover:text-stone-900 transition-colors">Free Tools</Link>
              <Link href="/certification" data-testid="link-footer-certification" className="text-stone-600 text-sm no-underline hover:text-stone-900 transition-colors">ABCR Certification</Link>
              <a href="https://rebel-talent-shop.fourthwall.com/" target="_blank" rel="noopener noreferrer" data-testid="link-footer-shop" className="text-stone-600 text-sm no-underline hover:text-stone-900 transition-colors">Shop</a>
              <a href="https://www.linkedin.com/newsletters/rebel-built-7412825035092045824/" target="_blank" rel="noopener noreferrer" data-testid="link-footer-newsletter" className="text-stone-600 text-sm no-underline hover:text-stone-900 transition-colors">Rebel Built Newsletter</a>
              <Link href="/jobs" data-testid="link-footer-apply" className="text-[#9E2330] text-sm no-underline hover:text-stone-900 transition-colors font-semibold">Apply to Open Jobs</Link>
            </div>
          </div>

          <div>
            <h2 className="mb-4">
              Contact
            </h2>
            <div className="flex flex-col gap-2.5">
              <a href="mailto:richie@rebeltalentsystems.com" data-testid="link-footer-email" className="text-stone-600 text-sm no-underline hover:text-stone-900 transition-colors">
                richie@rebeltalentsystems.com
              </a>
              <a href="tel:+12025240255" data-testid="link-footer-phone" className="text-stone-600 text-sm no-underline hover:text-stone-900 transition-colors">
                (202) 524-0255
              </a>
              <a href="https://linkedin.com/in/richielampani" target="_blank" rel="noopener noreferrer" data-testid="link-footer-linkedin" className="text-stone-600 text-sm no-underline hover:text-stone-900 transition-colors">
                LinkedIn
              </a>
              <span className="sr-only">
                Rebel Talent Systems, United States
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-300 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-stone-500 text-xs">
            &copy; {new Date().getFullYear()} Rebel Talent Systems. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" data-testid="link-footer-privacy" className="text-stone-500 text-xs hover:text-stone-900 no-underline transition-colors">Privacy Policy</Link>
          </div>
        </div>
        <div className="mt-4 pt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
          <span className="text-stone-500 text-xs">SAM.gov Registered</span>
          <span className="text-stone-500 text-xs">CAGE: 202V6</span>
          <span className="text-stone-500 text-xs">UEI: JQ4MZ69FNAK4</span>
          <a
            href="/Rebel-Talent-Systems-Capability-Statement.pdf"
            download="Rebel-Talent-Systems-Capability-Statement.pdf"
            data-testid="link-footer-capability-statement"
            className="text-stone-700 hover:text-stone-900 text-xs underline underline-offset-2"
          >
            Capability statement (PDF)
          </a>
        </div>
      </div>
    </footer>
  );
}
