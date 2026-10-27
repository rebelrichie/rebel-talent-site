const GRID = 80;

export function BlueprintField() {
  const vertical = Array.from({ length: 16 }, (_, i) => i * GRID);
  const horizontal = Array.from({ length: 9 }, (_, i) => i * GRID);
  const ticks = Array.from({ length: 25 }, (_, i) => i * 48);
  return (
    <svg className="bp-field" viewBox="0 0 1200 640" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <g className="bp-grid" fill="none" stroke="#8FD4EA" strokeWidth="0.7">
        {vertical.map((x) => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="640" />
        ))}
        {horizontal.map((y) => (
          <line key={`h${y}`} x1="0" y1={y} x2="1200" y2={y} />
        ))}
      </g>
      <g className="bp-ticks" fill="none" stroke="#8FD4EA" strokeWidth="1">
        {ticks.map((x, i) => (
          <line key={`t${x}`} x1={x} y1="0" x2={x} y2={i % 4 === 0 ? 16 : 8} />
        ))}
        {ticks.slice(0, 14).map((y, i) => (
          <line key={`l${y}`} x1="0" y1={y} x2={i % 4 === 0 ? 16 : 8} y2={y} />
        ))}
      </g>
      <ellipse className="bp-orbit" cx="930" cy="310" rx="320" ry="138" fill="none" stroke="#8FD4EA" strokeWidth="1.2" strokeDasharray="8 10" />
      <ellipse cx="930" cy="310" rx="190" ry="82" fill="none" stroke="#8FD4EA" strokeWidth="1" />
      <ellipse cx="250" cy="500" rx="150" ry="58" fill="none" stroke="#8FD4EA" strokeWidth="1" strokeDasharray="2 7" />
      <line x1="140" y1="540" x2="720" y2="150" stroke="#8FD4EA" strokeWidth="1" strokeDasharray="5 8" />
      <g className="bp-points" fill="#8FD4EA">
        <circle cx="930" cy="172" r="2.4" />
        <circle cx="1108" cy="310" r="2.4" />
        <circle cx="740" cy="250" r="2" />
        <circle cx="400" cy="500" r="2" />
        <circle cx="720" cy="150" r="2.6" />
      </g>
    </svg>
  );
}

export function BlueprintRule() {
  const ticks = [0, 80, 160, 240, 320, 400, 480, 560, 640, 720, 800, 880, 960, 1040, 1140];
  return (
    <div className="max-w-[1140px] mx-auto px-5" aria-hidden="true">
      <svg className="bp-rule" viewBox="0 0 1140 18" width="100%" height="18" preserveAspectRatio="none" focusable="false">
        <line x1="0" y1="9" x2="1140" y2="9" stroke="#6BB8D4" strokeWidth="1" />
        {ticks.map((x, i) => (
          <line key={x} x1={x} y1={i % 2 === 0 ? 3 : 6} x2={x} y2={i % 2 === 0 ? 15 : 12} stroke="#6BB8D4" strokeWidth="1" />
        ))}
        <line x1="720" y1="9" x2="980" y2="9" stroke="#6BB8D4" strokeWidth="1.5" strokeDasharray="4 5" />
      </svg>
    </div>
  );
}
