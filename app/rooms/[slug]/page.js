import Link from "next/link";
import { notFound } from "next/navigation";
import RoomVisual from "@/components/RoomVisual";
import { rooms, getRoomBySlug } from "@/lib/rooms";

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export function generateMetadata({ params }) {
  const room = getRoomBySlug(params.slug);
  if (!room) return {};
  return {
    title: `${room.name} — Luxe Vista by Snow Crest`,
    description: room.blurb,
  };
}

export default function RoomDetailPage({ params }) {
  const room = getRoomBySlug(params.slug);
  if (!room) notFound();

  const hasPhotos = room.photos && room.photos.length > 0;
  const thumbPhotos = hasPhotos ? room.photos.slice(1) : [];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{room.tagline}</p>
          <h1>{room.name}</h1>
          <p>{room.blurb}</p>
        </div>
      </section>

      <section className="section section--linen-soft">
        <div className="container">
          <div className="split">
            <div className="split-media">
              <div className="split-art">
                <RoomVisual room={room} tone="dusk" seed={room.slug.length + 5} />
              </div>
              {thumbPhotos.length > 0 && (
                <div className="photo-strip">
                  {thumbPhotos.map((src) => (
                    <img key={src} className="photo" src={src} alt={`${room.name} detail`} loading="lazy" />
                  ))}
                </div>
              )}
            </div>
            <div className="split-copy">
              <div className="room-meta" style={{ marginBottom: "1.25rem" }}>
                <span>{room.view}</span>
                <span>{room.occupancy}</span>
              </div>
              <p className="room-price">{room.priceLabel}</p>
              <ul className="feature-list">
                {room.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="room-actions" style={{ marginTop: "2rem" }}>
                <Link href={`/contact?room=${room.slug}`} className="btn btn--copper">
                  Check availability
                </Link>
                <Link href="/rooms" className="text-link">
                  ← Back to all rooms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
