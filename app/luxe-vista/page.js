import Link from "next/link";
import RidgeDivider from "@/components/RidgeDivider";

export const metadata = {
  title: "Mountain View Hotel in Dalhousie",
  description: "Luxe Vista by Snow Crest is a mountain view hotel in Dalhousie, Himachal Pradesh — located in Banikhet, roughly 6,000 ft up and 7 km from Dalhousie Mall Road.",
  alternates: { canonical: "/luxe-vista" },
};

export default function LuxeVistaPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Snow Crest&apos;s flagship property</p>
          <h1>Luxe Vista — a mountain view hotel in Dalhousie</h1>
          <p>
            A mountain view stay in Banikhet, near Dalhousie. Everything you
            see here is real — the rooms, the photos, the location and the
            experience.
          </p>
        </div>
      </section>

      <section className="section section--linen-soft">
        <div className="container">
          <div className="split">
            <div className="split-copy">
              <p className="eyebrow">Location</p>
              <h2>A hotel in Banikhet, near Dalhousie — chosen for the view first</h2>
              <p>
                Luxe Vista sits in Banikhet, a peaceful hillside area
                approximately 7 km from Dalhousie Mall Road and roughly
                6,000 ft above sea level — about ten kilometres above the
                Dalhousie highway. It&apos;s an easy drive from Dalhousie Bus
                Stand and Subhash Chowk, close enough for a day in town and
                far enough to stay quiet at night.
              </p>
              <p>
                Verified in person and photographed as-is: mountain views
                from every room, balconies from most. It&apos;s also a
                convenient hotel near Khajjiar for guests who&apos;d rather
                stay somewhere quieter than the town centre and drive in
                for the day.
              </p>
              <div className="split-facts">
                <div className="split-fact">
                  <strong>27</strong>
                  <span>Rooms, 4 categories</span>
                </div>
                <div className="split-fact">
                  <strong>~6,000ft</strong>
                  <span>Above sea level</span>
                </div>
                <div className="split-fact">
                  <strong>~7km</strong>
                  <span>To Dalhousie Mall Road</span>
                </div>
              </div>
            </div>
            <div className="split-art">
              <img className="photo" src="/images/balcony-view.webp" alt="Mountain view from a room at Luxe Vista, a hotel in Dalhousie" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--night">
        <div className="container">
          <RidgeDivider tone="night" />
          <div className="section-head" style={{ marginTop: "2.5rem" }}>
            <p className="eyebrow">What to expect</p>
            <h2>Real, verified, and on one calendar</h2>
          </div>
          <div className="amenity-grid">
            <div className="amenity">
              <h3>Verified rooms</h3>
              <p>Every room is verified in person, and every photo shows the actual room — not a stock image.</p>
            </div>
            <div className="amenity">
              <h3>One calendar</h3>
              <p>Every booking sits on one calendar, so an open date is genuinely open.</p>
            </div>
            <div className="amenity">
              <h3>Winter-ready</h3>
              <p>Heated rooms, real mattresses, and hot water that actually stays hot through the hill winters.</p>
            </div>
            <div className="amenity">
              <h3>A person, not a queue</h3>
              <p>Room requests, dietary notes, and travel plans are handled directly by staff who know the property.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--linen" style={{ textAlign: "center" }}>
        <div className="container">
          <h2 style={{ maxWidth: "28rem", margin: "0 auto 1.5rem" }}>See the rooms</h2>
          <Link href="/rooms" className="btn btn--copper">
            View rooms &amp; rates
          </Link>
        </div>
      </section>
    </>
  );
}
