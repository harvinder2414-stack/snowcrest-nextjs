// The brand's recurring divider: a thin gold line tracing a mountain skyline,
// used between sections instead of a generic hairline rule.

export default function RidgeDivider({ tone = "night" }) {
  const stroke = tone === "night" ? "#dcae5c" : "#c17f35";
  return (
    <svg
      className="ridge-divider"
      viewBox="0 0 1200 40"
      preserveAspectRatio="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline
        points="0,32 120,14 220,28 340,6 460,24 600,10 740,30 860,16 980,26 1100,8 1200,20"
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
        opacity="0.6"
      />
    </svg>
  );
}
