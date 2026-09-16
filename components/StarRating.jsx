// Renders a row of 5 stars for a given rating (supports halves, e.g. 4.5).

function Star({ fill }) {
  // fill: 0 (empty), 0.5 (half), or 1 (full)
  const id = `star-clip-${Math.random().toString(36).slice(2)}`;
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
      <defs>
        <clipPath id={id}>
          <rect x="0" y="0" width={20 * fill} height="20" />
        </clipPath>
      </defs>
      <path
        d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.8l-5.2 2.8 1-5.8L1.5 7.7l5.9-.9z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.8l-5.2 2.8 1-5.8L1.5 7.7l5.9-.9z"
        fill="currentColor"
        clipPath={`url(#${id})`}
      />
    </svg>
  );
}

export default function StarRating({ rating = 5, max = 5 }) {
  const stars = [];
  for (let i = 1; i <= max; i++) {
    const fill = Math.max(0, Math.min(1, rating - (i - 1)));
    stars.push(<Star key={i} fill={fill} />);
  }
  return <span className="star-rating">{stars}</span>;
}
