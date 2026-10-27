/**
 * Orbital diagram for the split hero.
 * Earth limb is NASA public-domain astronaut photo ISS064-E-005209
 * (Johnson Space Center), 20 Nov 2020, Western Australia.
 * Diagram lines are SVG. No stock illustration, no glow.
 */
export default function OrbitPanel({ className = "", compact = false }: { className?: string; compact?: boolean }) {
  const marks = [
    { rx: 268, ry: 102, deg: -28 },
    { rx: 268, ry: 102, deg: 36 },
    { rx: 268, ry: 102, deg: 158 },
    { rx: 168, ry: 62, deg: 12 },
    { rx: 168, ry: 62, deg: 198 },
  ];

  return (
    <div className={`orbit-panel mi-band relative overflow-hidden bg-[#001028] ${className}`}>
      <img
        src="/earth-limb.jpg"
        alt=""
        className="orbit-earth"
      />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 800 860"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        focusable="false"
      >
        <g stroke="#8FDBEF" strokeWidth="1" fill="none">
          <line x1="418" y1="36" x2="418" y2="620" strokeDasharray="1.5 7" />
          <line x1="48" y1="292" x2="760" y2="292" strokeDasharray="1.5 7" />
          {Array.from({ length: 13 }, (_, i) => {
            const y = 80 + i * 40;
            const long = i % 2 === 0;
            return <line key={`vx${y}`} x1={long ? 408 : 412} y1={y} x2={long ? 428 : 424} y2={y} />;
          })}
          {Array.from({ length: 15 }, (_, i) => {
            const x = 80 + i * 44;
            const long = i % 2 === 0;
            return <line key={`hx${x}`} x1={x} y1={long ? 282 : 286} x2={x} y2={long ? 302 : 298} />;
          })}
          <circle cx="418" cy="292" r="3.2" fill="#8FDBEF" stroke="none" />
          <circle cx="418" cy="292" r="11" />
        </g>

        <g transform="translate(418 292) rotate(-18)">
          <ellipse rx="268" ry="102" fill="none" stroke="rgba(255,255,255,0.95)" strokeWidth="1.6" />
          <ellipse rx="168" ry="62" fill="none" stroke="rgba(255,255,255,0.82)" strokeWidth="1.25" />
          {marks.map((mark) => {
            const rad = (mark.deg * Math.PI) / 180;
            const cx = Math.cos(rad) * mark.rx;
            const cy = Math.sin(rad) * mark.ry;
            return (
              <g key={`${mark.rx}-${mark.deg}`}>
                <circle cx={cx} cy={cy} r="8" fill="none" stroke="#C8102E" strokeWidth="1.1" />
                <circle cx={cx} cy={cy} r="4.2" fill="#C8102E" />
              </g>
            );
          })}
        </g>

        <g stroke="rgba(255,255,255,0.55)" strokeWidth="1" fill="none">
          <line x1="168" y1="168" x2="250" y2="230" />
          <line x1="640" y1="150" x2="560" y2="220" />
          <line x1="630" y1="470" x2="548" y2="390" />
        </g>
      </svg>

      {!compact && (
        <>
          <div className="orbit-label absolute left-[7%] top-[12%] max-w-[11rem]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em]">Contingent</p>
            <p className="mt-1 text-[13px] text-white/70">One role</p>
          </div>
          <div className="orbit-label absolute right-[7%] top-[16%] max-w-[11rem] text-right">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em]">Embedded</p>
            <p className="mt-1 text-[13px] text-white/70">The desk</p>
          </div>
          <div className="orbit-label absolute bottom-[34%] right-[8%] max-w-[12rem] text-right">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em]">Cleared</p>
            <p className="mt-1 text-[13px] text-white/70">Secret, TS, TS/SCI</p>
          </div>
        </>
      )}
    </div>
  );
}
