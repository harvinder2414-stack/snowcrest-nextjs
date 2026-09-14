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
