import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer data-testid="footer" className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #07060f 0%, #05050a 100%)" }}>
      {/* Red top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-rebel-red/60 to-transparent" />

      {/* Micro-CTA bar */}
      <div className="border-b border-zinc-800/50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-400 text-sm">
            Ready to build your team the right way?
          </p>
          <a href="https://calendly.com/richielam" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-rebel-red hover:text-white transition-colors no-underline"
          >
            Book a Strategy Call <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Rebel Talent" className="w-8 h-8" loading="lazy" />
              <span className="font-display text-base font-bold tracking-wider text-white uppercase">
                REBEL TALENT
              </span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Fractional recruiting leadership for companies that refuse to settle.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold tracking-widest text-rebel-red uppercase mb-4">
              NAVIGATE
            </h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/fractional-head-of-talent" data-testid="link-footer-fractional" className="text-zinc-500 text-sm no-underline hover:text-white transition-colors">Fractional Head of Talent</Link>
              <Link href="/services" data-testid="link-footer-services" className="text-zinc-500 text-sm no-underline hover:text-white transition-colors">Services</Link>
              <Link href="/how-it-works" data-testid="link-footer-how-it-works" className="text-zinc-500 text-sm no-underline hover:text-white transition-colors">How It Works</Link>
              <Link href="/testimonials" data-testid="link-footer-testimonials" className="text-zinc-500 text-sm no-underline hover:text-white transition-colors">Testimonials</Link>
              <Link href="/case-studies" data-testid="link-footer-case-studies" className="text-zinc-500 text-sm no-underline hover:text-white transition-colors">Case Studies</Link>
              <Link href="/about" data-testid="link-footer-about" className="text-zinc-500 text-sm no-underline hover:text-white transition-colors">About</Link>
              <Link href="/platform" data-testid="link-footer-platform" className="text-zinc-500 text-sm no-underline hover:text-white transition-colors">Platform</Link>
              <Link href="/command" data-testid="link-footer-command" className="text-zinc-500 text-sm no-underline hover:text-white transition-colors">Command Demo</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold tracking-widest text-rebel-red uppercase mb-4">
              RESOURCES
            </h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/blog" data-testid="link-footer-blog" className="text-zinc-500 text-sm no-underline hover:text-white transition-colors">Blog</Link>
              <Link href="/podcast" data-testid="link-footer-podcast" className="text-zinc-500 text-sm no-underline hover:text-white transition-colors">Podcast</Link>
              <Link href="/free-tools" data-testid="link-footer-free-tools" className="text-zinc-500 text-sm no-underline hover:text-white transition-colors">Free Tools</Link>
              <Link href="/certification" data-testid="link-footer-certification" className="text-zinc-500 text-sm no-underline hover:text-white transition-colors">ABCR Certification</Link>
              <a href="https://rebel-talent-shop.fourthwall.com/" target="_blank" rel="noopener noreferrer" data-testid="link-footer-shop" className="text-zinc-500 text-sm no-underline hover:text-white transition-colors">Shop</a>
              <a href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7412825035092045824" target="_blank" rel="noopener noreferrer" data-testid="link-footer-newsletter" className="text-zinc-500 text-sm no-underline hover:text-white transition-colors">Rebel Built Newsletter</a>
              <a href="https://rebelapply.com" target="_blank" rel="noopener noreferrer" data-testid="link-footer-apply" className="text-rebel-red text-sm no-underline hover:text-white transition-colors font-semibold">Apply to Open Jobs</a>
              {/* Safe addition — Client Portal link */}
              <a href="https://clients.rebeltalentsystems.com" target="_blank" rel="noopener noreferrer" data-testid="link-footer-client-portal" className="text-rebel-red text-sm no-underline hover:text-white transition-colors font-semibold">Client Portal</a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold tracking-widest text-rebel-red uppercase mb-4">
              CONTACT
            </h4>
            <div className="flex flex-col gap-2.5">
              <a href="mailto:richie@rebeltalentsystems.com" data-testid="link-footer-email" className="text-zinc-500 text-sm no-underline hover:text-white transition-colors">
                richie@rebeltalentsystems.com
              </a>
              <a href="tel:+17702337548" data-testid="link-footer-phone" className="text-zinc-500 text-sm no-underline hover:text-white transition-colors">
                (770) 233-7548
              </a>
              <a href="https://linkedin.com/in/richielampani" target="_blank" rel="noopener noreferrer" data-testid="link-footer-linkedin" className="text-zinc-500 text-sm no-underline hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-xs tracking-wider uppercase">
            &copy; {new Date().getFullYear()} Rebel Talent Systems. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" data-testid="link-footer-privacy" className="text-zinc-600 text-xs hover:text-zinc-400 no-underline transition-colors">Privacy Policy</Link>
            <p className="text-zinc-700 text-xs tracking-wider uppercase font-mono">
              BUILD RIGHT. HIRE RIGHT. REBEL FOREVER.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
