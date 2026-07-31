import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, Shield, Target, Zap, Users, Clock, TrendingUp } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollReveal from "@/components/ScrollReveal";
import GlowCard from "@/components/GlowCard";
import ParallaxSection from "@/components/ParallaxSection";
import CapacityBadge from "@/components/CapacityBadge";
import CurrentEngagements from "@/components/CurrentEngagements";
import EmailCapture from "@/components/EmailCapture";

// Safe addition, haptic feedback for PWA CTA taps
function hapticTap() {
  if (navigator.vibrate) navigator.vibrate(15);
}

const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Rebel Talent",
  "description": "Hiring infrastructure for venture-backed and defense teams. Embedded, retained, and contingent recruiting across tech, business process, and GTM and sales roles, cleared and noncleared, entry level through executive.",
  "url": "https://rebeltalentsystems.com",
  "logo": "https://rebeltalentsystems.com/logo.png",
  "telephone": "+1-770-233-7548",
  "email": "richie@rebeltalentsystems.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Alpharetta",
    "addressRegion": "GA",
    "addressCountry": "US"
  },
  "founder": {
    "@type": "Person",
    "name": "Richie Lampani",
    "jobTitle": "Fractional Head of Talent/Lead Talent Consultant",
    "url": "https://rebeltalentsystems.com/about",
    "sameAs": ["https://linkedin.com/in/richielampani"]
  },
  "sameAs": [
    "https://linkedin.com/in/richielampani",
    "https://rebeltalentsystems.com"
  ],
  "areaServed": ["United States", "Remote"],
  "serviceType": [
    "Fractional Recruiting",
    "Fractional Head of Talent/Lead Talent Consultant",
    "Embedded Recruiting",
    "Startup Recruiting",
    "Defense Recruiting",
    "Cleared Hiring (Secret, TS, TS/SCI)",
    "Forward Deployed Engineer Recruiting",
    "AI/ML Engineer Recruiting",
    "GTM Hiring",
    "Retained Search",
    "Contingent Recruiting",
    "Contract Recruiting",
    "ATS Implementation"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Rebel Talent Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fractional Head of Talent/Lead Talent Consultant",
          "description": "Embedded fractional recruiting leadership that owns your entire talent function. Strategy, execution, ATS, process design, and hiring manager coaching.",
          "url": "https://rebeltalentsystems.com/services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Critical Hire Execution",
          "description": "Surgical execution for must-fill roles. Executive searches, cleared roles (TS/SCI), and specialized technical talent closed in weeks.",
          "url": "https://rebeltalentsystems.com/services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Team Capacity Extension",
          "description": "Vetted recruiter teams deployed under Richie's direction to extend either the Fractional Head of Talent/Lead Talent Consultant or Critical Hire Execution engagements. Same standards, same playbooks, monthly or hourly as pipeline demands shift.",
          "url": "https://rebeltalentsystems.com/services"
        }
      }
    ]
  }
};

// ── Starfield: canvas-based, twinkling subset, throttled to ~24fps ──
function StarfieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Deterministic-looking star positions via sine-based pseudo-random
    const rng = (seed: number) => { const x = Math.sin(seed + 1) * 73856; return x - Math.floor(x); };
    const stars = Array.from({ length: 170 }, (_, i) => ({
      x: rng(i * 7 + 1),
      y: rng(i * 7 + 2),
      r: rng(i * 7 + 3) * 1.3 + 0.2,          // 0.2 – 1.5px radius
      baseOpacity: rng(i * 7 + 4) * 0.52 + 0.08, // 0.08 – 0.6
      twinkle: rng(i * 7 + 5) > 0.65,           // ~35% twinkle
      phase: rng(i * 7 + 6) * Math.PI * 2,
      speed: rng(i * 7 + 7) * 0.009 + 0.003,
    }));

    let tick = 0;
    let raf = 0;
    let last = 0;
    let running = false;
    let onScreen = true;

    const draw = (ts: number) => {
      raf = requestAnimationFrame(draw);
      if (ts - last < 42) return; // ~24 fps
      last = ts;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const s of stars) {
        const alpha = s.twinkle
          ? s.baseOpacity * (0.45 + 0.55 * Math.sin(tick * s.speed + s.phase))
          : s.baseOpacity;
        ctx.beginPath();
        ctx.arc(s.x * canvas.width, s.y * canvas.height, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha.toFixed(3)})`;
        ctx.fill();
      }
      tick++;
    };

    const start = () => { if (!running && onScreen && !document.hidden) { running = true; raf = requestAnimationFrame(draw); } };
    const stop = () => { running = false; cancelAnimationFrame(raf); };

    // Pause the loop while the hero is scrolled out of view — saves main-thread work.
    const io = new IntersectionObserver(([e]) => { onScreen = e.isIntersecting; if (onScreen) start(); else stop(); }, { threshold: 0 });
    io.observe(canvas);

    // Pause when the tab is backgrounded.
    const onVis = () => { if (document.hidden) stop(); else start(); };
    document.addEventListener("visibilitychange", onVis);

    // Defer the first frame until the browser is idle so it doesn't compete
    // with initial hydration during the critical load window.
    const ric = window.requestIdleCallback || ((cb: () => void) => window.setTimeout(cb, 200));
    const idleId = ric(() => start());

    return () => {
      stop();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      if (window.cancelIdleCallback) window.cancelIdleCallback(idleId as number);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <PageLayout>
      <PageSEO
        title="Fractional Recruiting for Startups & Defense | Rebel Talent"
        description="Fractional recruiting and embedded talent leadership for Series A-C startups and defense contractors. ~335% ROI delivered, 470%+ projected. 14+ years experience."
        path="/"
        ogTitle="Fractional Recruiting for Startups & Defense | Rebel Talent"
        ogDescription="You don't have a recruiting problem, you have a hiring infrastructure problem. Rebel Talent Systems installs the system and runs it, then hands it back. Embedded, retained, or contingent with a deposit. Recruiters who specialize in tech, business process, and GTM and sales, cleared and noncleared, entry level through executive, for venture-backed and defense teams."
        ogImage="og-home.png"
        schemas={[homepageSchema]}
      />
      {/* ========== HERO, Hunt Club / Riviera Partners register ========== */}
      <section
        ref={heroRef}
        data-testid="section-hero"
        className="relative overflow-hidden bg-rebel-space"
        style={{ minHeight: "82vh" }}
      >
        {/* Subtle ambient glow — left red, right orange */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 0% 0%, rgba(247,26,41,0.10) 0%, transparent 55%), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(245,132,30,0.06) 0%, transparent 55%)",
          }}
        />

        {/* ── Starfield canvas — full hero, z:1 ── */}
        <StarfieldCanvas />

        {/* ── Satellite — drifts slowly across upper-right, z:2 ── */}
        <div
          className="absolute pointer-events-none hidden lg:block"
          style={{
            zIndex: 2,
            top: "14%",
            right: "9%",
            opacity: 0.42,
            animation: "satelliteDrift 84s ease-in-out infinite",
          }}
        >
          <svg width="176" height="78" viewBox="0 0 176 78" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Left solar panel array */}
            <rect x="4" y="23" width="54" height="32" rx="1.5" stroke="rgba(190,215,255,0.85)" strokeWidth="0.85"/>
            <line x1="4"   y1="39" x2="58"  y2="39" stroke="rgba(190,215,255,0.5)" strokeWidth="0.6"/>
            <line x1="22"  y1="23" x2="22"  y2="55" stroke="rgba(190,215,255,0.5)" strokeWidth="0.6"/>
            <line x1="40"  y1="23" x2="40"  y2="55" stroke="rgba(190,215,255,0.5)" strokeWidth="0.6"/>
            {/* Left strut */}
            <line x1="58"  y1="39" x2="74"  y2="39" stroke="rgba(255,255,255,0.65)" strokeWidth="0.9"/>
            {/* Satellite body */}
            <rect x="74" y="21" width="28" height="36" rx="2.5" stroke="rgba(255,255,255,0.92)" strokeWidth="1.1"/>
            <line x1="74"  y1="33" x2="102" y2="33" stroke="rgba(255,255,255,0.22)" strokeWidth="0.5"/>
            <line x1="74"  y1="45" x2="102" y2="45" stroke="rgba(255,255,255,0.22)" strokeWidth="0.5"/>
            {/* Right strut */}
            <line x1="102" y1="39" x2="118" y2="39" stroke="rgba(255,255,255,0.65)" strokeWidth="0.9"/>
            {/* Right solar panel array */}
            <rect x="118" y="23" width="54" height="32" rx="1.5" stroke="rgba(190,215,255,0.85)" strokeWidth="0.85"/>
            <line x1="118" y1="39" x2="172" y2="39" stroke="rgba(190,215,255,0.5)" strokeWidth="0.6"/>
            <line x1="136" y1="23" x2="136" y2="55" stroke="rgba(190,215,255,0.5)" strokeWidth="0.6"/>
            <line x1="154" y1="23" x2="154" y2="55" stroke="rgba(190,215,255,0.5)" strokeWidth="0.6"/>
            {/* Dish antenna (top) */}
            <line x1="88"  y1="21" x2="88"  y2="9"  stroke="rgba(255,255,255,0.62)" strokeWidth="0.8"/>
            <path d="M 82 9 Q 88 4.5 94 9"    stroke="rgba(255,255,255,0.62)" strokeWidth="0.8" fill="none"/>
            {/* Secondary downward antenna */}
            <line x1="88"  y1="57" x2="88"  y2="69" stroke="rgba(255,255,255,0.42)" strokeWidth="0.7"/>
            <line x1="84"  y1="67" x2="92"  y2="74" stroke="rgba(255,255,255,0.32)" strokeWidth="0.6"/>
          </svg>
        </div>

        <h1 className="sr-only">Rebel Talent Systems, hiring infrastructure for venture-backed and defense teams. Cleared and noncleared roles, entry level through executive.</h1>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 pt-6 sm:pt-24 lg:pt-36 pb-12 sm:pb-20 z-10">
          {/* Eyebrow */}
          <p className="font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase text-zinc-400 mb-8 sm:mb-12">
            Hiring Infrastructure · Venture-Backed &amp; Defense
          </p>

          {/* Hero headline — Archivo Expanded (wdth=125) is ~25% wider; 6vw keeps
              all three lines on one line each at 1204px+ viewports */}
          <h2
            className="font-display font-black text-white leading-[1.05] sm:leading-[0.97]"
            style={{ fontSize: "clamp(2rem, 6vw, 5rem)", letterSpacing: "-0.01em" }}
          >
            <span className="block" style={{ animation: "heroRise 0.5s ease-out 0.1s both" }}>
              You don&rsquo;t have a
            </span>
            <span
              className="block"
              style={{
                background: "linear-gradient(95deg, #F71A29 0%, #F5841E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "heroRise 0.5s ease-out 0.35s both",
              }}
            >
              recruiting problem.
            </span>
            <span className="block" style={{ animation: "heroRise 0.5s ease-out 0.6s both" }}>
              You have an infrastructure gap.
            </span>
          </h2>

          {/* BREAK ORBIT. — display-size brand moment */}
          <div className="mt-5 sm:mt-7" style={{ animation: "heroLineIn 0.6s ease-out 1.0s both" }}>
            <span
              className="font-display font-black uppercase"
              style={{
                fontSize: "clamp(1.25rem, 2.8vw, 2.25rem)",
                letterSpacing: "0.09em",
                fontVariationSettings: "'wdth' 125",
                fontStretch: "expanded",
                background: "linear-gradient(95deg, #F71A29 0%, #F5841E 50%, #FDBD41 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline-block",
                lineHeight: 1.1,
              }}
            >
              BREAK ORBIT.
            </span>
          </div>

          {/* Subhead */}
          <p className="mt-7 sm:mt-10 text-base sm:text-xl text-zinc-400 max-w-2xl leading-[1.55]" style={{ animation: "heroLineIn 0.5s ease-out 1.2s both" }}>
            Rebel Talent Systems installs your hiring infrastructure and runs it, then hands it back. Embedded, retained, or contingent with a deposit. Our recruiters cover tech, business process, and GTM and sales, cleared and noncleared, entry level through executive, for Series A through C and defense teams.
          </p>

          {/* Single primary CTA + understated secondary link */}
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-y-3 sm:gap-y-4 gap-x-8">
            <a
              href="/strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-book-call"
              onClick={hapticTap}
              className="inline-flex items-center justify-center gap-2 bg-rebel-red hover:bg-red-700 text-white font-semibold text-base px-7 py-3.5 rounded-full transition-colors no-underline w-full sm:w-auto"
            >
              Book a strategy call <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/services"
              data-testid="link-view-services"
              className="text-zinc-300 hover:text-white text-base font-medium underline underline-offset-4 decoration-zinc-700 hover:decoration-rebel-red transition-colors no-underline text-center sm:text-left"
            >
              See how we work →
            </Link>
          </div>
        </div>

        {/* Trust strip, bottom of hero, restrained */}
        <div className="relative z-10 border-t border-zinc-900 bg-black/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-7 space-y-4">
            <div className="flex items-center gap-x-6 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
              <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-zinc-400 shrink-0">
                Trusted by teams at
              </p>
              {["EarthDaily Federal", "Waveguide", "Kalibri Labs", "Platinum Filings", "CSE", "Simformation", "DW1", "Roadrunner", "Enveil"].map((name) => (
                <span key={name} className="text-zinc-400 text-sm tracking-wide font-medium whitespace-nowrap">{name}</span>
              ))}
            </div>
            <div className="flex items-center gap-x-6 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
              <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-zinc-400 shrink-0">
                Placed talent at
              </p>
              {["Wells Fargo", "Tiffany & Co", "Travelers", "WK Kellogg Foundation", "Ball Aerospace", "TRANSCOM & SATCOM (multiple AFBs)", "Walgreens", "CompuCom", "Jackson County, MI", "Byron Center School District", "Muskegon ISD"].map((name) => (
                <span key={name} className="text-zinc-400 text-sm tracking-wide font-medium whitespace-nowrap">{name}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HIRING READINESS SCORECARD HOOK (slim lead-capture, links to full tool) ── */}
      {/* Safe addition, one-line hook under the intro, routes to /hiring-readiness */}
      <section
        data-testid="section-scorecard-hook"
        className="border-b border-zinc-800/50"
        style={{ background: "#0E0D11" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          <Link href="/hiring-readiness" className="no-underline group block">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 border border-zinc-800 bg-zinc-900/30 px-5 sm:px-7 py-5 transition-colors group-hover:border-rebel-red/40">
              <div className="flex-1">
                <div className="font-mono text-rebel-red text-[11px] tracking-[0.22em] uppercase mb-1.5">
                  Free · 2 minutes · No pitch
                </div>
                <div className="font-display text-lg sm:text-xl font-bold text-white tracking-tight">
                  Not sure where your hiring stands?
                </div>
                <p className="text-zinc-400 text-sm mt-1">
                  Score your recruiting operation across 10 questions and get a fix for every gap.
                </p>
              </div>
              <span
                onClick={hapticTap}
                className="inline-flex items-center justify-center gap-2 shrink-0 bg-rebel-red group-hover:bg-red-600 text-white font-display text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-md transition-colors"
              >
                Score My Hiring <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Safe addition, Pain points moved up to hook visitors */}
      <section data-testid="section-pain" className="py-10 border-b border-zinc-800/50" style={{ background: "#0E0D11" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal variant="fade-up">
          <div className="text-center mb-6">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-2">STOP ME IF THIS IS YOU</div>
            <h2 className="font-display text-2xl font-bold text-white uppercase">If These Hit, You&rsquo;re Already Bleeding</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {[
              "Agencies charge 25% and disappear after the hire. You get a placement, not a system.",
              "Your ATS is a graveyard of unreviewed resumes",
              "Hiring managers winging interviews with zero structure",
              "A full-time VP of TA costs $175K+ before you fill a single role.",
              "Your 'recruiting process' is LinkedIn InMails and prayers",
              "Cleared hiring takes time nobody warned you about. What you can control is the pipeline, if you've built one.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 border border-zinc-800/50 bg-zinc-900/20 px-4 py-3" data-testid={`item-pain-${item.slice(0, 20).toLowerCase().replace(/\s+/g, "-")}`}>
                <span className="text-rebel-red font-mono font-bold text-xs mt-0.5 shrink-0">X</span>
                <span className="text-zinc-400 text-sm">{item}</span>
              </div>
            ))}
          </div>
          </ScrollReveal>
        </div>
      </section>

      <section data-testid="section-who" className="py-12 border-t border-zinc-800/50" style={{ background: "#0E0D11" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal variant="fade-up">
          <div className="text-center mb-8">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">
              IDEAL CLIENTS
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight">
              Who This Is For
            </h2>
          </div>
          </ScrollReveal>

          <ParallaxSection speed={0.08}>
          <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-x-visible" style={{ scrollbarWidth: "none" }}>
            {[
              {
                icon: <Zap className="w-5 h-5" />,
                title: "Series A-C Startups",
                intro: "Every week without the right hire is a week your roadmap slips.",
                items: [
                  "Scaling fast but can't hire fast enough",
                  "No internal recruiting function yet",
                  "Bleeding money on agency fees",
                ],
              },
              {
                icon: <Shield className="w-5 h-5" />,
                title: "Defense Contractors",
                intro: "Most recruiters have never seen a DD-254.",
                items: [
                  "Need cleared talent (Secret, TS, TS/SCI)",
                  "CMMC compliance requirements",
                  "Pipeline built on community knowledge, not guesswork",
                ],
              },
              {
                icon: <TrendingUp className="w-5 h-5" />,
                title: "Growth Companies",
                intro: "You don't get an agency. You get me, every engagement, every call, every hire.",
                items: [
                  "Hiring has become a bottleneck",
                  "Tired of agency fees and bad fits",
                  "Need ownership and accountability",
                ],
              },
            ].map((cat, i) => (
              <ScrollReveal key={cat.title} variant="fade-up" delay={i * 150}>
              <div className="border border-zinc-800 bg-zinc-900/30 p-6 snap-start shrink-0 w-[82vw] md:w-auto" data-testid={`card-who-${cat.title.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="w-10 h-10 border border-rebel-red/30 bg-rebel-red/10 flex items-center justify-center text-rebel-red mb-4">
                  {cat.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-white uppercase mb-2">
                  {cat.title}
                </h3>
                <p className="text-zinc-400 text-sm italic mb-4 leading-snug">{cat.intro}</p>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-zinc-400">
                      <span className="text-rebel-red font-mono text-xs mt-0.5">&gt;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              </ScrollReveal>
            ))}
          </div>
          </ParallaxSection>

          {/* Mobile swipe hint — hidden on md+ */}
          <div className="flex md:hidden items-center justify-center gap-2 mt-3 text-zinc-400">
            <ArrowRight className="w-3 h-3 rotate-180 opacity-60" />
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase">swipe to explore</span>
            <ArrowRight className="w-3 h-3 opacity-60" />
          </div>

          <div className="text-center mt-10">
            <p className="text-zinc-400 text-sm mb-4">Scale without the bleed. Build the machine you own.</p>
            <a href="/strategy-call" target="_blank" rel="noopener noreferrer" data-testid="button-book-call-3" className="block sm:inline-block">
              <Button onClick={hapticTap} className="font-display tracking-wider uppercase text-sm w-full sm:w-auto whitespace-normal leading-tight py-3 sm:py-2">
                Start a Confidential Conversation <ArrowRight className="ml-2 w-4 h-4 shrink-0" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section data-testid="section-services" className="py-12" style={{ background: "#0E0D11" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal variant="fade-up">
          <div className="text-center mb-8">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">
              THREE WAYS TO ENGAGE.
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight">
              Pick your fight.
            </h2>
            <p className="text-zinc-400 text-sm mt-3 max-w-xl mx-auto">
              No tiers, no packages. Embedded builds the machine and leaves you owning it. Retained runs a defined search against a deadline. Contingent fills straightforward roles once a deposit is in. Recruiters who specialize in your function, cleared or not.
            </p>
          </div>
          </ScrollReveal>

          <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-x-visible">
            <GlowCard className="border border-rebel-red/50 bg-rebel-red/5 p-5 sm:p-8 group transition-colors hover:border-rebel-red snap-start shrink-0 w-[82vw] md:w-auto" data-testid="card-fractional">
              <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-3">
                EMBEDDED
              </div>
              <h3 className="font-display text-xl font-bold text-white uppercase mb-2">
                Fractional Head of Talent/Lead Talent Consultant
              </h3>
              <p className="text-rebel-red font-mono text-sm mb-1">Monthly Retainer · 3-month minimum</p>
              <p className="text-zinc-400 font-mono text-xs mb-4">50%+ less than contingent agency fees</p>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                We run your recruiting function from inside the company, then hand it back better than we found it. We build the process, rebuild your ATS and job posts, and leave you owning a clean candidate database and the playbooks to run it.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Strategic hiring roadmap & prioritization",
                  "ATS audit, rebuild & job-post overhaul",
                  "End-to-end recruiting execution",
                  "Interview process design & training",
                  "You keep the database, systems & playbooks",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                    <ArrowRight className="w-3 h-3 text-rebel-red mt-1 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlowCard>

            <GlowCard className="border border-zinc-800 bg-zinc-900/50 p-5 sm:p-8 group transition-colors hover:border-rebel-red/30 snap-start shrink-0 w-[82vw] md:w-auto" data-testid="card-critical-hire">
              <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-3">
                RETAINED
              </div>
              <h3 className="font-display text-xl font-bold text-white uppercase mb-2">
                Retained Search
              </h3>
              <p className="text-rebel-red font-mono text-sm mb-1">Half down · half on placement</p>
              <p className="text-zinc-400 font-mono text-xs mb-4">50%+ less than contingent agency fees</p>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                A defined role with a deadline behind it. We run the full search from inside your stack, cleared or noncleared, entry level through executive, and close it against the clock.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Defined role, fixed scope, hard deadline",
                  "Cleared (Secret, TS, TS/SCI) or commercial",
                  "Executive, technical, and GTM searches",
                  "Specialist recruiter matched to the function",
                  "Documented, repeatable process left with you",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                    <ArrowRight className="w-3 h-3 text-rebel-red mt-1 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlowCard>

            <GlowCard className="border border-zinc-800 bg-zinc-900/50 p-5 sm:p-8 group transition-colors hover:border-rebel-red/30 snap-start shrink-0 w-[82vw] md:w-auto" data-testid="card-contingent">
              <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-3">
                DEPOSIT
              </div>
              <h3 className="font-display text-xl font-bold text-white uppercase mb-2">
                Contingent
              </h3>
              <p className="text-rebel-red font-mono text-sm mb-1">Deposit up front · balance on placement</p>
              <p className="text-zinc-400 font-mono text-xs mb-4">For straightforward, well-defined roles</p>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Placement work for clear, fillable roles. A deposit gets the search moving, the balance is due when the seat is filled. We are happy to go on the journey with you and your team, just not for free.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Deposit secures the search",
                  "Balance on an accepted offer",
                  "Best for single, well-scoped roles",
                  "Same vetting standard as every desk",
                  "Cleared or noncleared, any level",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                    <ArrowRight className="w-3 h-3 text-rebel-red mt-1 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlowCard>
          </div>

          {/* Mobile swipe hint — hidden on md+ */}
          <div className="flex md:hidden items-center justify-center gap-2 mt-3 text-zinc-400">
            <ArrowRight className="w-3 h-3 rotate-180 opacity-60" />
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase">swipe to explore</span>
            <ArrowRight className="w-3 h-3 opacity-60" />
          </div>

          {/* Team capacity band, applies to any engagement */}
          <ScrollReveal variant="fade-up" delay={150}>
          <div className="mt-6 border border-zinc-800/70 bg-zinc-900/30 p-6 sm:p-8" data-testid="band-team-capacity">
            <div className="flex flex-col md:flex-row md:items-start md:gap-8">
              <div className="md:shrink-0 mb-4 md:mb-0 md:w-56">
                <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-2">
                  + TEAM CAPACITY
                </div>
                <h3 className="font-display text-lg font-bold text-white uppercase tracking-tight leading-tight">
                  Need more horsepower?
                </h3>
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Any engagement can scale with a vetted recruiter team, same standards, same playbooks, monthly or hourly as the pipeline demands. Specialists in tech, business process, and GTM and sales, matched to the roles you are filling.
              </p>
            </div>
          </div>
          </ScrollReveal>

          <div className="text-center mt-10">
            <p className="text-zinc-400 text-sm mb-4">Not sure which fits? Most engagements start with a scoping conversation, not a quote.</p>
            <a href="/strategy-call" target="_blank" rel="noopener noreferrer" data-testid="button-book-call-2" className="block sm:inline-block">
              <Button onClick={hapticTap} className="font-display tracking-wider uppercase text-sm w-full sm:w-auto">
                Book Your Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Safe addition, differentiators folded under the two engagement cards */}
      <section data-testid="section-difference" className="py-12 border-b border-zinc-800/50" style={{ background: "#0E0D11" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal variant="fade-up">
          <div className="text-center mb-8">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">THE DIFFERENCE</div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
              Nobody else ships all of this.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              { icon: <Users className="w-5 h-5 text-rebel-red" />, title: "Embedded execution", desc: "In your Slack, your ATS, your hiring manager 1:1s, your candidate calls. Not consulting from the sidelines. You get me on every call." },
              { icon: <TrendingUp className="w-5 h-5 text-rebel-red" />, title: "~$5K–$8K cost per hire", desc: "Hourly or fixed-fee billing, logged in your dashboard. No success fees. No invoice surprises when the hire closes." },
              { icon: <Clock className="w-5 h-5 text-rebel-red" />, title: "~30 days median time to hire", desc: "Across embedded engagements. Under 30 on EDF's 9 placements. 34 days on Kalibri against a 360-application flooded funnel." },
              { icon: <Shield className="w-5 h-5 text-rebel-red" />, title: "You own everything we build", desc: "ATS, candidate pipeline, interview scorecards, sourcing playbooks, hiring manager training. Exportable, transferable, yours forever." },
              { icon: <Target className="w-5 h-5 text-rebel-red" />, title: "Proof-first vetting", desc: "Every candidate ships with portfolio evidence, structured technical screens, and AI-scored match signals. Resume polish isn't a pipeline." },
              { icon: <Zap className="w-5 h-5 text-rebel-red" />, title: "Infrastructure that compounds", desc: "470%+ projected ROI on the EDF flagship, $294K+ in fees avoided across 9 placements on ~$88K invested. Every system built carries to your next 50 hires." },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm p-5 flex gap-4 items-start hover:border-zinc-700 transition-colors"
              >
                <div className="shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <div className="font-display text-sm font-bold text-white uppercase mb-1">{item.title}</div>
                  <div className="text-zinc-400 text-sm leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Safe addition, Proof/Case Study moved after pricing */}
      <section data-testid="section-proof" className="py-10 border-b border-zinc-800/50" style={{ background: "#0E0D11" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-5">
          {/* EARTHDAILY FEDERAL */}
          <ScrollReveal variant="fade-left">
          <div className="border border-zinc-800 bg-gradient-to-r from-rebel-red/5 to-transparent p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
            <div className="flex-1">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-2">CASE STUDY 01 · FRACTIONAL</div>
              <h2 className="font-display text-xl font-bold text-white uppercase mb-2">EarthDaily Federal</h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                Defense-sector geospatial intelligence firm. 6 FTE + 3 contractors placed over 8 months: VP of Growth, Director of Strategic Partnerships, Backend Engineer, AI Engineer, Controller, IT Manager, and 3 contractors. 4 more in active pipeline. 20 hrs/week at $120/hr.
              </p>
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-5">
                {[
                  { value: "$294K+", label: "Agency Fees Avoided" },
                  { value: "470%+", label: "Projected ROI" },
                  { value: "<30 days", label: "Avg. Time to Hire" },
                ].map((s) => (
                  <div key={s.label}>
                    <AnimatedCounter value={s.value} className="font-display text-[clamp(0.78rem,4.1vw,1.3rem)] sm:text-2xl font-bold text-rebel-red" />
                    <div className="text-zinc-400 text-xs uppercase tracking-wide leading-tight mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
              <Link href="/case-studies" data-testid="link-case-study-edf">
                <Button variant="outline" size="sm" className="font-display tracking-wider uppercase text-xs border-zinc-700 text-zinc-300">
                  See Full Case Study <ArrowRight className="ml-2 w-3 h-3" />
                </Button>
              </Link>
            </div>
            <div className="hidden sm:flex flex-col justify-center items-center border-l border-zinc-800 pl-8 shrink-0">
              <div className="font-mono text-zinc-400 text-xs tracking-widest uppercase mb-1">Sector</div>
              <div className="font-display text-sm font-bold text-zinc-300 uppercase text-center">Defense / Geo-Intel</div>
              <div className="font-mono text-zinc-400 text-xs tracking-widest uppercase mt-4 mb-1">Clearances</div>
              <div className="font-display text-sm font-bold text-zinc-300 uppercase text-center">TS / TS-SCI</div>
            </div>
          </div>
          </ScrollReveal>

          {/* KALIBRI LABS */}
          <ScrollReveal variant="fade-left" delay={100}>
          <div className="border border-zinc-800 bg-gradient-to-r from-rebel-red/5 to-transparent p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-10 items-start" data-testid="proof-card-kalibri">
            <div className="flex-1">
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-2">CASE STUDY 02 · RETAINED SEARCH</div>
              <h2 className="font-display text-xl font-bold text-white uppercase mb-2">Kalibri Labs</h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                ML Engineer search run as an embedded 50/50 retained project, half down, half on placement, operating inside their email, Slack, and ATS. Signed offer in 34 days against a flooded inbound funnel of 360+ AI-polished applications. Saved ~$20K against the agency quote.
              </p>
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-5">
                {[
                  { value: "34 days", label: "To Signed Offer" },
                  { value: "$20K", label: "Saved vs. Agency" },
                  { value: "1 hire", label: "ML Engineer Placed" },
                ].map((s) => (
                  <div key={s.label}>
                    <AnimatedCounter value={s.value} className="font-display text-[clamp(0.78rem,4.1vw,1.3rem)] sm:text-2xl font-bold text-rebel-red" />
                    <div className="text-zinc-400 text-xs uppercase tracking-wide leading-tight mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Inline pull quote from the engineering director */}
              <blockquote className="border-l-2 border-rebel-red/60 pl-4 mb-5">
                <p className="text-zinc-200 text-sm leading-relaxed italic mb-2">
                  &ldquo;I just want to thank you for all your assistance moving this pipeline to completion. It means a lot to me, and the tech org.&rdquo;
                </p>
                <footer className="text-zinc-400 text-xs">
                  <span className="text-zinc-300 font-semibold">Michael Tracey</span>, Director of Engineering, Kalibri Labs
                </footer>
              </blockquote>

              <Link href="/case-studies" data-testid="link-case-study-kalibri">
                <Button variant="outline" size="sm" className="font-display tracking-wider uppercase text-xs border-zinc-700 text-zinc-300">
                  See Full Case Study <ArrowRight className="ml-2 w-3 h-3" />
                </Button>
              </Link>
            </div>
            <div className="hidden sm:flex flex-col justify-center items-center border-l border-zinc-800 pl-8 shrink-0">
              <div className="font-mono text-zinc-400 text-xs tracking-widest uppercase mb-1">Sector</div>
              <div className="font-display text-sm font-bold text-zinc-300 uppercase text-center">Hospitality / AI</div>
              <div className="font-mono text-zinc-400 text-xs tracking-widest uppercase mt-4 mb-1">Engagement</div>
              <div className="font-display text-sm font-bold text-zinc-300 uppercase text-center">50 / 50 Retained</div>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Safe addition, Client testimonial */}
      <section data-testid="section-testimonial" className="relative py-20 border-b border-zinc-800/50 overflow-hidden" style={{ background: "#0E0D11" }}>
        {/* Giant decorative quote — atmospheric background element */}
        <div className="absolute -top-8 right-0 select-none pointer-events-none font-serif leading-none text-rebel-red/[0.04]" style={{ fontSize: "clamp(18rem, 30vw, 28rem)" }} aria-hidden="true">&ldquo;</div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center" style={{ zIndex: 1 }}>
          <ScrollReveal variant="fade-up">
          <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-6">WHAT CLIENTS SAY</div>
          <blockquote className="relative mb-10">
            <span className="absolute -top-4 -left-2 text-rebel-red/20 text-6xl font-serif leading-none select-none">&ldquo;</span>
            <p className="text-zinc-200 text-lg sm:text-xl leading-relaxed italic mb-6">
              In a review, I was told I had an amazing team, cohesive and indistinguishable from full time employees.
            </p>
            <footer className="text-zinc-400 text-sm">
              <span className="text-zinc-300 font-semibold">Arin, VP of Operations</span>, EarthDaily Federal
            </footer>
          </blockquote>
          {/* Safe addition, replaced with higher-credibility testimonial */}
          <blockquote className="relative">
            <span className="absolute -top-4 -left-2 text-rebel-red/20 text-6xl font-serif leading-none select-none">&ldquo;</span>
            <p className="text-zinc-200 text-base sm:text-lg leading-relaxed italic mb-6">
              My company isn't easy to please and it is exceptionally picky at a maddening level. Richie kept giving us amazing candidates and moving forward, reflecting on our feedback and adjusting on the go. I plan to work with him wherever I go with whatever vacancy I need to fill, he guarantees my success in hiring.
            </p>
            <footer className="text-zinc-400 text-sm">
              <span className="text-zinc-300 font-semibold">Colleen Garrett</span>, Fractional HR Leader, Leadership Coach, MBA
            </footer>
          </blockquote>
          </ScrollReveal>
        </div>
      </section>

      <section data-testid="section-stats" className="py-10 border-y border-zinc-800/50" style={{ background: "#0E0D11" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">THE FOOTPRINT</div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
              Reach nobody in this space has.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "53K+", label: "LinkedIn Followers" },
              { value: "8K", label: "Newsletter Subs" },
              { value: "14+", label: "Years Experience" },
              { value: "<30", label: "Days to Hire" },
            ].map((stat) => (
              <div key={stat.label} className="text-center" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}>
                <AnimatedCounter value={stat.value} className="font-display text-3xl sm:text-4xl font-bold text-rebel-red mb-1" />
                <div className="text-zinc-400 text-xs tracking-widest uppercase font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CINEMATIC COMMAND-CENTER BAND ========== */}
      <section
        data-testid="section-cinematic"
        className="relative overflow-hidden border-b border-zinc-900"
      >
        {/* Command-center plate */}
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: "url('/hero-command.jpg')",
            backgroundPosition: "center top",
          }}
          aria-hidden="true"
        />
        {/* Legibility scrims */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(5,7,14,0.94) 0%, rgba(5,7,14,0.78) 42%, rgba(5,7,14,0.34) 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, rgba(5,7,14,0.9) 0%, rgba(5,7,14,0.2) 45%, rgba(5,7,14,0.55) 100%)",
          }}
          aria-hidden="true"
        />
        {/* Brand glows */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 55% at 18% 88%, rgba(247,26,41,0.22) 0%, transparent 60%), radial-gradient(50% 45% at 55% 8%, rgba(34,211,238,0.14) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 sm:py-28">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.22em] uppercase text-rebel-red mb-5">
              <Shield className="w-4 h-4" />
              Cleared Defense &middot; Startups &middot; Veteran-Supported
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05] mb-6">
              For the ones who{" "}
              <span className="bg-gradient-to-r from-rebel-red via-[#F5841E] to-[#FDBD41] bg-clip-text text-transparent">
                stood up
              </span>{" "}
              when it mattered.
            </h2>
            <p className="text-zinc-300 text-lg sm:text-xl leading-[1.55] max-w-xl mb-8">
              Intelligence community members, people active in politics, and current and former service members trust me to build their teams. I speak their language. And I back transitioning veterans with free resume and LinkedIn reviews. No corporate fluff, just real talent leadership for cleared defense and startups.
            </p>

            <div className="border-l-2 border-rebel-red pl-4 mb-9">
              <p className="text-white font-semibold text-lg">Ask me for my references.</p>
              <p className="text-zinc-400 text-sm mt-1">
                Intelligence community. People active in politics. Current and former servicemembers. Shared privately, on request.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/strategy-call"
                data-testid="button-book-call-cleared"
                className="inline-flex items-center justify-center gap-2 bg-rebel-red hover:bg-rebel-red/90 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors no-underline"
              >
                Book a strategy call <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                data-testid="link-view-services-cleared"
                className="inline-flex items-center justify-center gap-2 border border-zinc-700 hover:border-rebel-red/60 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors no-underline"
              >
                See how I work <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="mt-6">
              <a
                href="https://calendly.com/richielam/vets?back=1"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-vet-review"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white border border-zinc-700 hover:border-rebel-red/60 px-5 py-2.5 rounded-lg transition-colors no-underline"
              >
                Free veteran resume &amp; LinkedIn review <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-zinc-400 text-xs mt-2">Transitioning out? No strings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── AI FOR RECRUITING TEAMS ── */}
      <section data-testid="section-advisory" className="py-0 border-t border-zinc-800/50" style={{ background: "#07080F" }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <div className="grid md:grid-cols-[1fr_280px] gap-12 md:gap-16 items-start">
              <div>
                <div className="font-mono text-rebel-red text-[11px] tracking-[0.18em] uppercase mb-5 flex items-center gap-2">
                  <span className="block w-5 h-[2px] bg-rebel-red flex-shrink-0" />
                  AI for Recruiting Teams
                </div>
                <h2 className="font-display text-white text-2xl sm:text-3xl font-bold tracking-tight leading-snug mb-6">
                  The tools exist.<br />
                  <span className="text-rebel-red">The strategy doesn't.</span>
                </h2>
                <div className="space-y-4 mb-8">
                  <p className="text-zinc-400 text-[15px] leading-relaxed">
                    The people pitching AI to your team don't run searches. I do. Twenty-seven autonomous agents handling sourcing, screening, communication, and pipeline management, on my own client work, every week, with real candidates and real consequences when something breaks.
                  </p>
                  <p className="text-zinc-400 text-[15px] leading-relaxed">
                    Three ways to put that to work for your team. Pick the one that matches where you are.
                  </p>
                </div>

                {/* Three engagement teasers */}
                <div className="grid sm:grid-cols-3 gap-[1px] bg-zinc-800/60 mb-8">
                  {[
                    { tag: "Start Here", title: "The Audit", sub: "2–4 wk roadmap" },
                    { tag: "Embedded", title: "The Build", sub: "Monthly retainer" },
                    { tag: "Ride-Along", title: "The Lab", sub: "6–8 wks on live reqs" },
                  ].map((e) => (
                    <div key={e.title} className="bg-zinc-900/80 px-4 py-4">
                      <div className="font-mono text-rebel-red text-[11px] tracking-[0.15em] uppercase mb-1">{e.tag}</div>
                      <div className="font-display text-white text-[15px] font-bold leading-tight">{e.title}</div>
                      <div className="text-zinc-400 text-[12px] mt-0.5">{e.sub}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 py-4 border-t border-b border-zinc-800/60 mb-8">
                  <span className="w-2 h-2 rounded-full bg-rebel-red flex-shrink-0" />
                  <span className="text-zinc-300 text-[13px] font-medium">All three are private. One team, one operation, one stack. Cleared / FOCI engagements supported.</span>
                </div>
                <Link href="/advisory" className="no-underline">
                  <button
                    className="inline-flex items-center gap-3 bg-rebel-red text-white font-bold text-[16px] tracking-wider uppercase px-10 py-5 transition-colors hover:bg-red-700"
                    onClick={hapticTap}
                  >
                    See the AI Advisory Engagements
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
              <div className="hidden md:grid grid-cols-1 gap-[1px] bg-zinc-800/60">
                {[
                  { value: "27", label: "AI Agents in Production" },
                  { value: "14+", label: "Years Recruiting" },
                  { value: "Live", label: "Real Client Work Daily" },
                ].map((s) => (
                  <div key={s.label} className="bg-zinc-900/80 px-6 py-5">
                    <div className="font-display text-2xl font-bold text-rebel-red mb-1">{s.value}</div>
                    <div className="text-zinc-400 text-[11px] font-medium tracking-widest uppercase">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </section>

      {/* ── COMMAND DEMO PREVIEW ── */}
      <section className="py-0 border-t border-zinc-800/50 bg-[#0E0E0E]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
          <div className="text-center mb-10">
            <div className="font-mono text-[#FF5A47] text-[11px] tracking-[0.18em] uppercase mb-3">The System, Live</div>
            <h2 className="font-display text-white text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              This is what 27 agents look like in production.
            </h2>
            <p className="text-zinc-400 text-sm">Interactive demo. All candidate data is fictional.</p>
          </div>

          {/* Browser chrome mockup */}
          <div className="border border-zinc-700 rounded-sm" style={{ overflow: "clip" }}>
            {/* Browser bar */}
            <div className="bg-zinc-800 px-4 py-3 flex items-center gap-3 border-b border-zinc-700">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 min-w-0 truncate bg-zinc-700/60 rounded px-3 py-1 text-zinc-400 text-[11px] font-mono">
                rebeltalentsystems.com/command
              </div>
              <div className="text-zinc-400 text-[11px] font-mono">LIVE</div>
            </div>

            {/* Dashboard preview */}
            <div className="bg-[#0a0a0a] p-0">
              {/* Tab bar */}
              <div className="flex gap-0 border-b border-zinc-800 bg-zinc-900/50 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
                {["Dashboard", "Pipeline", "Outreach", "Agents"].map((tab, i) => (
                  <div key={tab} className={`px-3 sm:px-5 py-3 text-[11px] sm:text-[12px] font-mono tracking-normal sm:tracking-wider whitespace-nowrap ${i === 1 ? "text-[#FF5A47] border-b-2 border-[#FF5A47] bg-zinc-900" : "text-zinc-400 hover:text-zinc-300"}`}>
                    {tab.toUpperCase()}
                  </div>
                ))}
              </div>

              {/* Pipeline board */}
              <div className="p-4 overflow-x-auto">
                <div className="flex gap-3 min-w-[700px]">
                  {[
                    { stage: "Identified", color: "#9ca3af", candidates: [
                      { name: "Jordan Rivera", title: "Sr. Platform Engineer", co: "Palantir", score: 87 },
                      { name: "Priya Sharma", title: "ML Infrastructure Lead", co: "Scale AI", score: 92 },
                    ]},
                    { stage: "Screening", color: "#3b82f6", candidates: [
                      { name: "Marcus Chen", title: "Director of Engineering", co: "Anduril", score: 94 },
                      { name: "Elena Vasquez", title: "VP of Product", co: "Figma", score: 88 },
                    ]},
                    { stage: "Submitted", color: "#eab308", candidates: [
                      { name: "Sarah Kim", title: "Staff Backend Engineer", co: "Stripe", score: 91 },
                    ]},
                    { stage: "Interviewing", color: "#a78bfa", candidates: [
                      { name: "Daria Okonkwo", title: "Head of Growth", co: "Notion", score: 96 },
                      { name: "James Park", title: "Forward Deployed Eng", co: "Palantir", score: 89 },
                    ]},
                    { stage: "Placed", color: "#22c55e", candidates: [
                      { name: "Nina Patel", title: "Staff Engineer", co: "Cloudflare", score: 97 },
                    ]},
                  ].map(({ stage, color, candidates }) => (
                    <div key={stage} className="flex-1 min-w-[130px]">
                      <div className="flex items-center gap-2 mb-2 px-1">
                        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: color }} />
                        <span className="text-[11px] font-mono tracking-wider text-zinc-400 uppercase">{stage}</span>
                        <span className="ml-auto text-[11px] text-zinc-400">{candidates.length}</span>
                      </div>
                      <div className="space-y-2">
                        {candidates.map((c) => (
                          <div key={c.name} className="bg-zinc-900 border border-zinc-800 p-2.5 rounded-sm">
                            <div className="flex items-center justify-between mb-1">
                              <div className="w-6 h-6 rounded-full bg-zinc-700 flex items-center justify-center text-[9px] font-bold text-zinc-300">
                                {c.name.split(" ").map((n: string) => n[0]).join("")}
                              </div>
                              <div className="text-[11px] font-mono font-bold" style={{ color }}>{c.score}</div>
                            </div>
                            <div className="text-[11px] font-semibold text-white leading-tight">{c.name}</div>
                            <div className="text-[11px] text-zinc-400 leading-tight">{c.title}</div>
                            <div className="text-[11px] text-zinc-400 mt-1">{c.co}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Agent activity bar */}
              <div className="border-t border-zinc-800 px-4 py-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 bg-zinc-900/30">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[11px] font-mono text-green-400">27 AGENTS ACTIVE</span>
                </div>
                <span className="text-[11px] font-mono text-zinc-400">Sourcing agent ran 14 min ago</span>
                <span className="hidden sm:inline text-[11px] font-mono text-zinc-400">3 outreach sequences active</span>
                <div className="ml-auto text-[11px] font-mono text-zinc-400 hidden sm:block">AI Daily Brief: ready</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/command" className="no-underline">
              <button
                className="inline-flex items-center gap-2 border border-zinc-600 text-zinc-300 font-semibold text-[13px] tracking-wider uppercase px-7 py-3 hover:border-zinc-400 hover:text-white transition-colors"
                onClick={hapticTap}
              >
                Launch Interactive Demo
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== CURRENT ENGAGEMENTS BAND ========== */}
      <section data-testid="section-engagements-band" className="border-b border-zinc-900 bg-rebel-space">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 sm:py-20">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-rebel-red mb-3">
            Current engagements
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-8 max-w-2xl">
            Real teams, currently hiring.
          </h3>
          <CurrentEngagements />
        </div>
      </section>

      <section data-testid="section-newsletter-shop" className="py-10 border-t border-zinc-800/50" style={{ background: "#0E0D11" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal variant="fade-up">
          <div className="border border-zinc-800 bg-zinc-900/30 p-6 sm:p-8 text-center max-w-2xl mx-auto" data-testid="newsletter-capture">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">NEWSLETTER</div>
            <h3 className="font-display text-xl font-bold text-white uppercase tracking-tight mb-3">
              Rebel Built
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5">
              Recruiting strategies, hiring frameworks, and unfiltered takes on talent. Delivered to your inbox.
            </p>
            {/* Safe addition, owned email capture */}
            <EmailCapture source="homepage_newsletter" placeholder="your@email.com" buttonText="Get It" />
            <p className="text-zinc-400 text-xs mt-4">
              Or subscribe on{" "}
              <a
                href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7412825035092045824"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white underline transition-colors"
              >
                LinkedIn
              </a>
            </p>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== WHO RUNS THIS ========== moved below the fold; brand leads the page */}
      <section data-testid="section-richie-intro" className="border-b border-zinc-900" style={{ background: "#0E0D11" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center">
            <Link href="/about" className="block w-fit mx-auto md:mx-0 group shrink-0 relative">
              <img
                src="/richie-portrait.jpg"
                alt="Richie Lampani, founder of Rebel Talent Systems"
                className="w-40 h-40 sm:w-52 sm:h-52 rounded-2xl object-cover border border-zinc-800 group-hover:border-rebel-red/60 transition-colors"
              />
              {/* Soft play-button hint, will become a real video control later */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <div className="w-0 h-0 border-y-[8px] border-y-transparent border-l-[12px] border-l-white ml-1" />
                </div>
              </div>
            </Link>
            <div>
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-rebel-red mb-3">
                Who runs this
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                Founder-led.<br />
                <span className="text-rebel-red">Built to hand off.</span>
              </h3>
              <p className="text-zinc-400 text-base sm:text-lg max-w-2xl leading-[1.55] mb-5">
                Rebel Talent Systems was built by Richie Lampani, 14 years closing the hires everyone else called impossible. The agency sends you paper you still have to vet, close, and bring to life, then disappears. The software vendor sells you a login and disappears. Rebel embeds, runs AI on your reqs where it makes sense, keeps the human where it counts, and hands you the machine when it&rsquo;s built.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-rebel-red hover:text-white text-sm font-semibold tracking-wide transition-colors no-underline group"
              >
                More about the team
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section data-testid="section-cta" className="relative py-12 border-t border-zinc-800/50 bg-gradient-to-b from-rebel-red/5 to-transparent overflow-hidden">
        {/* Orbit ring decoration — centered on the logo mark */}
        <div className="absolute pointer-events-none" style={{ zIndex: 0, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
          {/* Soft glow */}
          <div style={{ width: "320px", height: "320px", borderRadius: "50%", background: "radial-gradient(circle, rgba(247,26,41,0.14) 0%, transparent 65%)", transform: "translate(-50%, -50%)", position: "absolute", top: "50%", left: "50%" }} />
          {/* Outer static ring */}
          <div style={{ width: "420px", height: "420px", borderRadius: "50%", border: "1px solid rgba(247,26,41,0.20)", transform: "translate(-50%, -50%)", position: "absolute", top: "50%", left: "50%" }} />
          {/* Mid ring — slow spin */}
          <div style={{ width: "300px", height: "300px", borderRadius: "50%", border: "1px solid rgba(245,132,30,0.28)", transform: "translate(-50%, -50%)", position: "absolute", top: "50%", left: "50%", animation: "orbitSpin 50s linear infinite" }}>
            <div style={{ position: "absolute", width: "9px", height: "9px", top: "-4.5px", left: "calc(50% - 4.5px)", borderRadius: "50%", background: "#F71A29", boxShadow: "0 0 8px #F71A29, 0 0 20px rgba(247,26,41,0.5)" }} />
          </div>
          {/* Inner ring — reverse spin */}
          <div style={{ width: "185px", height: "185px", borderRadius: "50%", border: "1px solid rgba(247,26,41,0.38)", transform: "translate(-50%, -50%)", position: "absolute", top: "50%", left: "50%", animation: "orbitSpinReverse 22s linear infinite" }}>
            <div style={{ position: "absolute", width: "7px", height: "7px", top: "-3.5px", left: "calc(50% - 3.5px)", borderRadius: "50%", background: "#F5841E", boxShadow: "0 0 7px #F5841E, 0 0 14px rgba(245,132,30,0.4)" }} />
          </div>
        </div>
        <ScrollReveal variant="scale">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center" style={{ zIndex: 10 }}>
          <img src="/logo.png" alt="Rebel Talent" className="w-16 h-16 mx-auto mb-6" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight mb-4">
            Bring Me Your Hardest Req.
          </h2>
          <p className="text-zinc-400 text-base mb-8 max-w-xl mx-auto">
            30 minutes. Walk me through the role nobody else can fill. I'll tell you straight whether I can, and if I can't, I'll point you to who can.
          </p>
          <a href="/strategy-call" target="_blank" rel="noopener noreferrer" data-testid="button-book-call-4" className="block sm:inline-block">
            <Button onClick={hapticTap} size="lg" className="font-display tracking-wider uppercase text-sm px-10 w-full sm:w-auto">
              Book Your Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
          <p className="text-zinc-400 text-xs mt-5 tracking-wide">
            All inquiries handled with discretion. FOCI-sensitive engagements supported.
          </p>
        </div>
        </ScrollReveal>
      </section>
    </PageLayout>
  );
}
