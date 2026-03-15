import { useState, useEffect, useMemo, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, Shield, Target, Zap, Users, Clock, TrendingUp } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";

interface Sparkle {
  x: number; y: number;
  vx: number; vy: number;
  life: number; maxLife: number;
  size: number; color: string;
  rot: number; rotV: number;
  shape: "star4" | "dot";
}

interface MeteorState {
  x: number; y: number;
  dx: number; dy: number;
  active: boolean;
  done: boolean;
}

const SPARKLE_COLORS = ["#FFE87C","#FFD700","#FFFBE8","#FFB347","#FFFFFF","#FFF4C2","#FFE4A0"];

function draw4Star(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number, rot: number) {
  ctx.beginPath();
  for (let i = 0; i < 8; i++) {
    const a = (i * Math.PI) / 4 + rot;
    const len = i % 2 === 0 ? r : r * 0.38;
    i === 0 ? ctx.moveTo(cx + Math.cos(a) * len, cy + Math.sin(a) * len)
             : ctx.lineTo(cx + Math.cos(a) * len, cy + Math.sin(a) * len);
  }
  ctx.closePath();
  ctx.fill();
}

const METEORS_CFG = [
  { delay: 300,  angle: -28, sy: 0.30, speed: 900  },
  { delay: 1400, angle: -20, sy: 0.52, speed: 800  },
  { delay: 2700, angle: -34, sy: 0.22, speed: 1000 },
];

function ShootingStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const sparkles: Sparkle[] = [];
    const meteors: MeteorState[] = METEORS_CFG.map(() => ({
      x: 0, y: 0, dx: 0, dy: 0, active: false, done: false,
    }));

    const spawn = (x: number, y: number, speed: number) => {
      const count = Math.floor(Math.random() * 4) + 3;
      for (let i = 0; i < count; i++) {
        const spd = Math.random() * 1.8 + 0.4;
        const a   = Math.random() * Math.PI * 2;
        sparkles.push({
          x, y,
          vx: Math.cos(a) * spd * 0.6,
          vy: Math.sin(a) * spd - 0.5,
          life: 0, maxLife: Math.random() * 55 + 35,
          size: Math.random() * 4.5 + 1.5,
          color: SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)],
          rot: Math.random() * Math.PI * 2,
          rotV: (Math.random() - 0.5) * 0.18,
          shape: Math.random() > 0.35 ? "star4" : "dot",
        });
      }
    };

    const drawStar = (m: MeteorState, trailLen: number) => {
      const tx = m.x - m.dx * trailLen;
      const ty = m.y - m.dy * trailLen;
      const grad = ctx.createLinearGradient(tx, ty, m.x, m.y);
      grad.addColorStop(0, "rgba(255,235,100,0)");
      grad.addColorStop(0.6, "rgba(255,245,180,0.5)");
      grad.addColorStop(1, "rgba(255,255,255,0.95)");
      ctx.beginPath();
      ctx.moveTo(tx, ty);
      ctx.lineTo(m.x, m.y);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 2.5;
      ctx.shadowColor = "#FFD700";
      ctx.shadowBlur = 12;
      ctx.stroke();
      ctx.shadowBlur = 0;

      const gr = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, 14);
      gr.addColorStop(0, "rgba(255,255,255,1)");
      gr.addColorStop(0.35, "rgba(255,245,160,0.9)");
      gr.addColorStop(1, "rgba(255,200,80,0)");
      ctx.fillStyle = gr;
      ctx.beginPath();
      ctx.arc(m.x, m.y, 14, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#FFFFFF";
      ctx.shadowColor = "#FFE87C";
      ctx.shadowBlur = 20;
      draw4Star(ctx, m.x, m.y, 7, performance.now() * 0.003);
      ctx.shadowBlur = 0;
    };

    const timers = METEORS_CFG.map((cfg, i) =>
      setTimeout(() => {
        const w = canvas.width, h = canvas.height;
        const rad = (cfg.angle * Math.PI) / 180;
        const spd = cfg.speed / 60;
        meteors[i].x  = w * -0.05;
        meteors[i].y  = h * cfg.sy;
        meteors[i].dx = Math.cos(rad) * spd;
        meteors[i].dy = Math.sin(rad) * spd;
        meteors[i].active = true;
      }, cfg.delay)
    );

    let raf: number;
    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      meteors.forEach((m, i) => {
        if (!m.active || m.done) return;
        m.x += m.dx;
        m.y += m.dy;
        const trailLen = Math.sqrt(m.dx ** 2 + m.dy ** 2) * 28;
        drawStar(m, trailLen);
        if (Math.random() > 0.25) spawn(
          m.x + (Math.random() - 0.5) * 6,
          m.y + (Math.random() - 0.5) * 6,
          METEORS_CFG[i].speed,
        );
        if (m.x > canvas.width * 1.1 || m.y > canvas.height * 1.2) m.done = true;
      });

      for (let i = sparkles.length - 1; i >= 0; i--) {
        const s = sparkles[i];
        s.x  += s.vx;
        s.y  += s.vy;
        s.vy += 0.055;
        s.vx *= 0.97;
        s.rot += s.rotV;
        s.life++;
        if (s.life >= s.maxLife) { sparkles.splice(i, 1); continue; }
        const alpha = 1 - s.life / s.maxLife;
        ctx.globalAlpha = alpha;
        ctx.fillStyle = s.color;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = s.size * 3;
        if (s.shape === "star4") {
          draw4Star(ctx, s.x, s.y, s.size, s.rot);
        } else {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size * 0.6, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      }

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 5 }}
    />
  );
}

function GraffitiHero() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 200);
    const t2 = setTimeout(() => setPhase(2), 850);
    const t3 = setTimeout(() => setPhase(3), 1600);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  const particles = useMemo(() =>
    Array.from({ length: 32 }, (_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 420,
      y: (Math.random() - 0.5) * 110,
      size: Math.random() * 6 + 2,
      delay: Math.floor(Math.random() * 350),
      dur: Math.floor(Math.random() * 350 + 450),
    })), []
  );

  return (
    <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-none mb-6">
      <span
        className="block"
        style={{
          opacity: 0,
          animation: phase >= 1 ? "heroLineIn 0.55s ease-out 0s forwards" : "none",
        }}
      >
        BUILD RIGHT.
      </span>
      <span
        className="block"
        style={{
          opacity: 0,
          animation: phase >= 2 ? "heroLineIn 0.55s ease-out 0s forwards" : "none",
        }}
      >
        HIRE RIGHT.
      </span>
      <span className="block relative" style={{ minHeight: "1.2em" }}>
        {phase >= 3 && (
          <>
            {particles.map((p) => (
              <span
                key={p.id}
                className="absolute rounded-full pointer-events-none"
                style={{
                  left: `calc(50% + ${p.x}px)`,
                  top: `calc(50% + ${p.y}px)`,
                  width: p.size,
                  height: p.size,
                  background: Math.random() > 0.3 ? "#DC2626" : "#b91c1c",
                  opacity: 0,
                  animation: `sprayDot ${p.dur}ms ${p.delay}ms ease-out forwards`,
                }}
              />
            ))}
            <span
              style={{
                display: "inline-block",
                fontFamily: '"Permanent Marker", cursive',
                color: "#DC2626",
                fontSize: "inherit",
                lineHeight: "inherit",
                textTransform: "uppercase",
                opacity: 0,
                animation: "sprayReveal 0.75s ease-out 0s forwards",
                textShadow: "0 0 30px rgba(220,38,38,0.5), 2px 2px 0px rgba(0,0,0,0.8)",
              }}
            >
              REBEL FOREVER.
            </span>
          </>
        )}
      </span>
    </h1>
  );
}

export default function Home() {
  return (
    <PageLayout>
      <section
        data-testid="section-hero"
        className="relative py-20 sm:py-28 overflow-hidden"
        style={{
          backgroundImage: "url('/hero-banner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/50 to-rebel-space pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none" />
        <ShootingStars />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="relative mx-auto mb-8 w-64 h-64 sm:w-[352px] sm:h-[352px]">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                borderRadius: "50%",
                boxShadow: "0 0 60px 20px rgba(220,38,38,0.12), 0 0 120px 40px rgba(234,88,12,0.08)",
                animation: "logoGlow 3.5s ease-in-out infinite alternate",
              }}
            />
            <img
              src="/logo.png"
              alt="Rebel Talent"
              data-testid="img-hero-logo"
              className="w-full h-full relative z-10"
              style={{
                filter: "drop-shadow(0 0 16px rgba(220,38,38,0.55)) drop-shadow(0 0 36px rgba(234,88,12,0.30)) drop-shadow(0 0 70px rgba(200,215,255,0.15)) brightness(1.25) contrast(1.05)",
                animation: "logoFloat 3.5s ease-in-out infinite alternate",
              }}
            />
          </div>

          <div className="font-mono text-rebel-red text-xs sm:text-sm tracking-[0.3em] uppercase mb-4">
            FRACTIONAL RECRUITING LEADERSHIP
          </div>

          <GraffitiHero />

          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Fractional Head of Talent for Series A-C startups and defense contractors. I build recruiting infrastructure and close critical hires in under 30 days.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/richielam"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-book-call"
            >
              <Button size="lg" className="w-full sm:w-auto font-display tracking-wider uppercase text-sm px-8">
                Book Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <Link href="/services" data-testid="link-view-services">
              <Button variant="outline" size="lg" className="w-full sm:w-auto font-display tracking-wider uppercase text-sm px-8 border-zinc-700 text-zinc-300">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section data-testid="section-stats" className="py-16 border-y border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "350%+", label: "ROI Proven" },
              { value: "<30", label: "Days to Hire" },
              { value: "14+", label: "Years Experience" },
              { value: "90%", label: "Retention Rate" },
            ].map((stat) => (
              <div key={stat.label} className="text-center" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="font-display text-3xl sm:text-4xl font-bold text-rebel-red mb-1">
                  {stat.value}
                </div>
                <div className="text-zinc-500 text-xs tracking-widest uppercase font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="section-services" className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">
              TWO WAYS TO ENGAGE
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight">
              Two Ways to Work Together
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-zinc-800 bg-zinc-900/50 p-8 group transition-colors hover:border-rebel-red/30" data-testid="card-fractional">
              <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-3">
                OPTION 01
              </div>
              <h3 className="font-display text-xl font-bold text-white uppercase mb-2">
                Fractional Head of Talent
              </h3>
              <p className="text-rebel-red font-mono text-sm mb-4">$12K - $30K/month</p>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Embedded leadership that owns your entire recruiting function. Strategy, execution, and systems -- all in one.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Strategic hiring roadmap & prioritization",
                  "End-to-end recruiting execution",
                  "ATS setup, optimization & migration",
                  "Interview process design & training",
                  "Hiring manager coaching",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                    <ArrowRight className="w-3 h-3 text-rebel-red mt-1 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-zinc-800 bg-zinc-900/50 p-8 group transition-colors hover:border-rebel-red/30" data-testid="card-critical-hire">
              <div className="font-mono text-rebel-red text-xs tracking-[0.2em] uppercase mb-3">
                OPTION 02
              </div>
              <h3 className="font-display text-xl font-bold text-white uppercase mb-2">
                Critical Hire Execution
              </h3>
              <p className="text-rebel-red font-mono text-sm mb-4">Project-Based Pricing</p>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Surgical execution for must-fill roles. I close hard-to-find talent in weeks, not months.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Executive & leadership searches",
                  "Cleared roles (Secret, TS, TS/SCI)",
                  "Specialized technical talent",
                  "Embedded into your workflows",
                  "Documented repeatable process left with you",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                    <ArrowRight className="w-3 h-3 text-rebel-red mt-1 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-zinc-500 text-sm mb-4">Not sure which option fits? Let's talk through your situation.</p>
            <a href="https://calendly.com/richielam" target="_blank" rel="noopener noreferrer" data-testid="button-book-call-2">
              <Button className="font-display tracking-wider uppercase text-sm">
                Book Your Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section data-testid="section-who" className="py-20 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">
              IDEAL CLIENTS
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight">
              Who This Is For
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap className="w-5 h-5" />,
                title: "Series A-C Startups",
                items: [
                  "Scaling fast but can't hire fast enough",
                  "No internal recruiting function yet",
                  "Bleeding money on agency fees",
                ],
              },
              {
                icon: <Shield className="w-5 h-5" />,
                title: "Defense Contractors",
                items: [
                  "Need cleared talent (Secret, TS, TS/SCI)",
                  "CMMC compliance requirements",
                  "Federal contract deadlines looming",
                ],
              },
              {
                icon: <TrendingUp className="w-5 h-5" />,
                title: "Growth Companies",
                items: [
                  "Hiring has become a bottleneck",
                  "Tired of agency fees and bad fits",
                  "Need ownership and accountability",
                ],
              },
            ].map((cat) => (
              <div key={cat.title} className="border border-zinc-800 bg-zinc-900/30 p-6" data-testid={`card-who-${cat.title.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="w-10 h-10 border border-rebel-red/30 bg-rebel-red/10 flex items-center justify-center text-rebel-red mb-4">
                  {cat.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-white uppercase mb-4">
                  {cat.title}
                </h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-zinc-400">
                      <span className="text-rebel-red font-mono text-xs mt-0.5">&gt;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-zinc-500 text-sm mb-4">If any of these sound like your company, we should talk.</p>
            <a href="https://calendly.com/richielam" target="_blank" rel="noopener noreferrer" data-testid="button-book-call-3">
              <Button className="font-display tracking-wider uppercase text-sm">
                Book Your Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section data-testid="section-newsletter-shop" className="py-16 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <a
              href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7412825035092045824"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-newsletter-cta"
              className="group border border-zinc-800 bg-zinc-900/30 p-8 text-center no-underline hover:border-rebel-red/50 transition-colors"
            >
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">NEWSLETTER</div>
              <h3 className="font-display text-xl font-bold text-white uppercase tracking-tight mb-3">
                Rebel Built
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Recruiting strategies, hiring frameworks, and unfiltered takes on talent. Subscribe on LinkedIn.
              </p>
              <span className="inline-flex items-center font-display text-sm tracking-wider uppercase text-rebel-red group-hover:text-white transition-colors">
                Subscribe Now <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </a>

            <a
              href="https://rebel-talent-shop.fourthwall.com/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-shop-cta"
              className="group border border-zinc-800 bg-zinc-900/30 p-8 text-center no-underline hover:border-rebel-red/50 transition-colors"
            >
              <div className="font-mono text-rebel-red text-xs tracking-[0.3em] uppercase mb-3">MERCH</div>
              <h3 className="font-display text-xl font-bold text-white uppercase tracking-tight mb-3">
                Rebel Talent Shop
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Gear for people who build right, hire right, and rebel forever.
              </p>
              <span className="inline-flex items-center font-display text-sm tracking-wider uppercase text-rebel-red group-hover:text-white transition-colors">
                Shop Now <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      </section>

      <section data-testid="section-cta" className="py-20 border-t border-zinc-800/50 bg-gradient-to-b from-rebel-red/5 to-transparent">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <img src="/logo.png" alt="Rebel Talent" className="w-16 h-16 mx-auto mb-6" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight mb-4">
            Ready to Fix Your Hiring?
          </h2>
          <p className="text-zinc-400 text-base mb-8 max-w-xl mx-auto">
            Stop losing talent to broken processes. Book a strategy call and let's build something that actually works.
          </p>
          <a href="https://calendly.com/richielam" target="_blank" rel="noopener noreferrer" data-testid="button-book-call-4">
            <Button size="lg" className="font-display tracking-wider uppercase text-sm px-10">
              Book Your Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
