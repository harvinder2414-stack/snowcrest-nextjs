// Luxe Vista doesn't use stock photography anywhere on the site — every
// "image" slot is one of these generated ridge-line illustrations instead.
// Swap any of them out for a real photo later by replacing the <ScenicArt />
// call with a plain <img src="/images/whatever.jpg" alt="..." />.

const PALETTES = {
  dusk: { sky: ["#4a3524", "#2b2018"], far: "#3a2818", near: "#2b2018", sun: "#e7c88a" },
  dawn: { sky: ["#e9dfc6", "#cfd8c3"], far: "#a9b79f", near: "#7c8f7a", sun: "#e7c88a" },
  copper: { sky: ["#3a2c22", "#2b2018"], far: "#5a4330", near: "#2b2018", sun: "#dcae5c" },
  spruce: { sky: ["#243b2e", "#2b2018"], far: "#33513e", near: "#1a2a20", sun: "#e7c88a" },
  linen: { sky: ["#f6f2e9", "#e3dbc7"], far: "#c9bfa0", near: "#9aa48f", sun: "#c17f35" },
};

function ridgePath(seed, amplitude, baseline, width, height) {
  // deterministic pseudo-random ridge line so server + client render identically
  let points = [`M0,${height}`];
  const steps = 7;
  let rand = seed;
  const next = () => {
    rand = (rand * 9301 + 49297) % 233280;
    return rand / 233280;
  };
  for (let i = 0; i <= steps; i++) {
    const x = (width / steps) * i;
    const y = baseline - next() * amplitude;
    points.push(`L${x.toFixed(1)},${y.toFixed(1)}`);
  }
  points.push(`L${width},${height}`, "Z");
  return points.join(" ");
}

export default function ScenicArt({ tone = "dusk", seed = 1, showSun = true, className = "" }) {
  const p = PALETTES[tone] || PALETTES.dusk;
  const w = 640;
  const h = 480;
  const gradId = `sky-${tone}-${seed}`;

  return (
    <svg
      className={className}
      viewBox={`0 0 ${w} ${h}`}
      role="img"
      aria-label="Illustrated mountain view"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={p.sky[0]} />
          <stop offset="100%" stopColor={p.sky[1]} />
        </linearGradient>
      </defs>
      <rect width={w} height={h} fill={`url(#${gradId})`} />
      {showSun && <circle cx={w * 0.78} cy={h * 0.28} r={34} fill={p.sun} opacity="0.9" />}
      <path d={ridgePath(seed * 13 + 1, 120, h * 0.62, w, h)} fill={p.far} opacity="0.85" />
      <path d={ridgePath(seed * 31 + 7, 160, h * 0.8, w, h)} fill={p.near} />
    </svg>
  );
}
