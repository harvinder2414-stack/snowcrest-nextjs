import Link from "next/link";
import RoomVisual from "@/components/RoomVisual";
import { rooms } from "@/lib/rooms";

export const metadata = {
  title: "Rooms & Rates — Luxe Vista by Snow Crest",
  description: "27 rooms across four categories at Luxe Vista by Snow Crest, Banikhet, Dalhousie — starting from ₹2,300 a night.",
};

export default function RoomsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Stay</p>
          <h1>Rooms &amp; rates</h1>
          <p>
            27 rooms across four categories, starting from ₹2,300 a night.
            Every room is verified in person and every photo shows the
            actual room.
          </p>
        </div>
      </section>

      <section className="section section--linen-soft">
        <div className="container">
          {rooms.map((room, i) => (
            <div key={room.slug} className={`room-row ${i % 2 === 1 ? "room-row--reverse" : ""}`}>
              <div className="room-art">
                <RoomVisual room={room} tone={["dusk", "copper", "spruce", "dawn"][i % 4]} seed={i + 10} />
              </div>
              <div className="room-info">
                <p className="tagline">{room.tagline}</p>
                <h3>{room.name}</h3>
                <div className="room-meta">
                  <span>{room.view}</span>
                  <span>{room.occupancy}</span>
                </div>
                <p>{room.blurb}</p>
                <p className="room-price" style={{ marginTop: "1rem" }}>{room.priceLabel}</p>
                <div className="room-actions">
                  <Link href={`/rooms/${room.slug}`} className="btn btn--outline-ink">
                    Room details
                  </Link>
                  <Link href={`/contact?room=${room.slug}`} className="text-link">
                    Check availability →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
