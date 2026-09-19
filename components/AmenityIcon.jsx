// A tiny set of hand-drawn line icons used in "amenity" blocks across the
// site (Home's "Why choose us", Luxe Vista's "What to expect", About's "In
// practice"). One shared component keeps the visual language consistent —
// add a new `case` here rather than inlining a one-off SVG somewhere.

const ICONS = {
  heating: (
    <path d="M8 4c0 3-3 3-3 6s3 3 3 6-3 3-3 6M14 4c0 3-3 3-3 6s3 3 3 6-3 3-3 6M20 4c0 3-3 3-3 6s3 3 3 6-3 3-3 6" />
  ),
  person: (
    <>
      <circle cx="14" cy="9" r="4" />
      <path d="M5 25c0-5 4-9 9-9s9 4 9 9" />
    </>
  ),
  mountain: (
    <path d="M3 22 L10 10 L14 16 L18 6 L25 22 Z" />
  ),
  receipt: (
    <>
      <path d="M7 3h14v22l-3-2-3 2-3-2-3 2-3-2-2 2V3z" />
      <path d="M10 9h8M10 13h8M10 17h5" />
    </>
  ),
  camera: (
    <>
      <rect x="3" y="8" width="22" height="15" rx="2" />
      <circle cx="14" cy="15.5" r="4.5" />
      <path d="M10 8l2-3h4l2 3" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="22" height="19" rx="2" />
      <path d="M3 11h22M9 3v4M19 3v4" />
    </>
  ),
  chat: (
    <path d="M4 6h20v13H11l-5 5v-5H4z" />
  ),
  badge: (
    <>
      <circle cx="14" cy="12" r="8" />
      <path d="M10 22l-2 5 6-3 6 3-2-5" />
    </>
  ),
  bed: (
    <>
      <path d="M3 21V9M3 15h22v6M25 21v-6a4 4 0 0 0-4-4h-8v4" />
      <circle cx="8" cy="12" r="2.4" />
    </>
  ),
  layers: (
    <>
      <path d="M14 3 3 9l11 6 11-6-11-6z" />
      <path d="M3 15l11 6 11-6M3 20l11 5 11-5" />
    </>
  ),
  route: (
    <>
      <path d="M8 3c2.5 0 4.5 2 4.5 4.5C12.5 11 8 16 8 16S3.5 11 3.5 7.5C3.5 5 5.5 3 8 3z" />
      <circle cx="8" cy="7.3" r="1.6" />
      <path d="M12 21h6a3 3 0 0 0 0-6h-4" />
      <path d="M6 18h2M11 24h11" />
    </>
  ),
  view: (
    <>
      <path d="M2 19l7-9 4 5 4-7 9 11z" />
      <circle cx="8" cy="5.5" r="2.5" />
    </>
  ),
  balcony: (
    <>
      <path d="M4 12h20v12H4z" />
      <path d="M4 17h20M9 12v12M14 12v12M19 12v12" />
      <path d="M8 12V8a6 6 0 0 1 12 0v4" />
    </>
  ),
  leaf: (
    <>
      <path d="M23 5c0 9-5.5 15-12 15a7 7 0 0 1-7-7C4 7.5 12 5 23 5z" />
      <path d="M17 10C12 13 9 17 7.5 24" />
    </>
  ),
};

export default function AmenityIcon({ name }) {
  return (
    <svg
      className="amenity-icon"
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      {ICONS[name] || ICONS.badge}
    </svg>
  );
}
