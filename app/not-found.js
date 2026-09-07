import Link from "next/link";

export const metadata = {
  title: "Page Not Found | Snow Crest Hotels",
};

export default function NotFound() {
  return (
    <section style={{ padding: "140px 32px 120px", textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
      <div className="eyebrow" style={{ justifyContent: "center", display: "flex" }}>404</div>
      <h1 style={{ fontSize: "32px", marginBottom: "16px" }}>This page took a wrong turn on the hill road.</h1>
      <p style={{ color: "var(--charcoal-soft)", marginBottom: "30px" }}>
        The page you're looking for doesn't exist — but here's how to get back on track.
      </p>
      <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
        <Link className="btn btn-dark" href="/">Back to Home</Link>
        <Link className="btn btn-outline" href="/contact#contact">Contact Us</Link>
      </div>
    </section>
  );
}
