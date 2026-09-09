// Placeholder illustration for the Duplex Room specifically — styled after
// the warm wood-toned, two-level loft look the property sent as a reference.
// This is a vector illustration, not a photo — swap it out the moment a real
// photo is available by adding a `photos` array to the duplex-room entry in
// lib/rooms.js (see components/RoomVisual.jsx for how that's picked up).

export default function DuplexArt({ className = "" }) {
  const w = 640;
  const h = 480;

  return (
    <svg
      className={className}
      viewBox={`0 0 ${w} ${h}`}
      role="img"
      aria-label="Illustrated view of a two-level duplex room"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      <defs>
        <linearGradient id="duplex-wood-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4a3324" />
          <stop offset="100%" stopColor="#2c1e15" />
        </linearGradient>
        <linearGradient id="duplex-wood-panel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5d4230" />
          <stop offset="100%" stopColor="#3a2818" />
        </linearGradient>
        <radialGradient id="duplex-glow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#e7c88a" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#e7c88a" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* base wall */}
      <rect width={w} height={h} fill="url(#duplex-wood-bg)" />

      {/* wood-grain panel lines */}
      {Array.from({ length: 14 }).map((_, i) => (
        <line
          key={i}
          x1="0"
          y1={22 + i * 32}
          x2={w}
          y2={18 + i * 32}
          stroke="#241812"
          strokeWidth="1"
          opacity="0.35"
        />
      ))}

      {/* warm glow, upper-mid */}
      <rect width={w} height={h} fill="url(#duplex-glow)" />

      {/* --- upper level: loft with railing --- */}
      <rect x="0" y="40" width={w} height="90" fill="url(#duplex-wood-panel)" opacity="0.6" />
      <line x1="30" y1="128" x2={w - 30} y2="128" stroke="#c7a467" strokeWidth="3" />
      {Array.from({ length: 16 }).map((_, i) => (
        <line
          key={i}
          x1={40 + i * 36}
          y1="90"
          x2={40 + i * 36}
          y2="128"
          stroke="#c7a467"
          strokeWidth="2.5"
          opacity="0.8"
        />
      ))}
      <text
        x="50%"
        y="80"
        textAnchor="middle"
        fill="#e7c88a"
        opacity="0.5"
        fontSize="13"
        fontFamily="Georgia, serif"
        fontStyle="italic"
      >
        loft level
      </text>

      {/* --- window with a small mountain view, right side --- */}
      <rect x="460" y="170" width="140" height="150" rx="4" fill="#1b3a4b" />
      <rect x="460" y="170" width="140" height="150" rx="4" fill="none" stroke="#c7a467" strokeWidth="3" />
      <polygon points="460,270 505,225 540,255 575,210 600,240 600,320 460,320" fill="#274f49" opacity="0.85" />
      <circle cx="560" cy="205" r="16" fill="#e7c88a" opacity="0.85" />
      <line x1="530" y1="170" x2="530" y2="320" stroke="#c7a467" strokeWidth="2" opacity="0.6" />

      {/* --- lower level: bed --- */}
      <rect x="60" y="300" width="330" height="110" rx="6" fill="#e8e2d4" opacity="0.92" />
      <rect x="60" y="300" width="330" height="26" rx="6" fill="#cfc6ac" />
      <rect x="80" y="270" width="70" height="55" rx="8" fill="#f6f2e9" />
      <rect x="160" y="270" width="70" height="55" rx="8" fill="#f6f2e9" />
      <rect x="40" y="292" width="20" height="120" rx="3" fill="#3a2818" />

      {/* small round stool / tub accent, foreground left */}
      <ellipse cx="470" cy="420" rx="70" ry="24" fill="#3a2818" />
      <ellipse cx="470" cy="408" rx="70" ry="24" fill="#5d4230" />
      <ellipse cx="470" cy="408" rx="52" ry="16" fill="#847259" opacity="0.7" />

      {/* floorboards */}
      <rect x="0" y="405" width={w} height={h - 405} fill="#4a3324" />
      {Array.from({ length: 10 }).map((_, i) => (
        <line key={i} x1={i * 70} y1="405" x2={i * 70 - 20} y2={h} stroke="#2c1e15" strokeWidth="1.5" opacity="0.5" />
      ))}
    </svg>
  );
}
