import Link from "next/link";
import RoomVisual from "@/components/RoomVisual";
import RidgeDivider from "@/components/RidgeDivider";
import BookingWidget from "@/components/BookingWidget";
import { rooms } from "@/lib/rooms";
import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  const featuredRooms = rooms.slice(0, 3);
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero hero--photo">
        <div className="container">
          <div className="hero-grid" style={{ gridTemplateColumns: "1fr", display: "grid" }}>
            <div>
              <p className="hero-eyebrow">Banikhet, Dalhousie · Himachal Pradesh</p>
              <h1>Stay somewhere worth remembering.</h1>
              <p className="hero-sub">
                Luxe Vista by Snow Crest is a mountain-view hotel roughly
                6,000 ft up, about 7 km from Dalhousie Mall Road. Every room
                is verified in person, every photo shows the actual room,
                and every booking sits on one calendar — so an open date is
                genuinely open.
              </p>
              <div className="hero-actions">
                <Link href="/rooms" className="btn btn--copper">
                  View rooms &amp; rates
                </Link>
                <Link href="/luxe-vista" className="btn btn--outline-night">
                  About Luxe Vista
                </Link>
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem", position: "relative", zIndex: 3 }}>
            <div style={{ maxWidth: "26rem" }}>
              <BookingWidget />
            </div>
          </div>
        </div>

        <svg
          className="hero-ridge"
          viewBox="0 0 1200 260"
          preserveAspectRatio="none"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,260 L0,150 L90,110 L180,160 L280,90 L360,140 L470,70 L560,130 L660,60 L760,120 L870,80 L960,150 L1060,100 L1150,160 L1200,120 L1200,260 Z"
            fill="#42301f"
            opacity="0.75"
          />
          <path
            d="M0,260 L0,190 L140,150 L240,200 L340,140 L440,190 L560,130 L660,180 L780,140 L900,200 L1020,150 L1120,195 L1200,170 L1200,260 Z"
            fill="#2b2018"
          />
        </svg>
      </section>

      {/* ---------- WHO WE ARE ---------- */}
      <section className="section section--linen">
        <div className="container">
          <div className="split">
            <div className="split-copy">
              <p className="eyebrow">Who we are</p>
              <h2>A small hospitality group, focused on properties worth staying at</h2>
              <p>
                Snow Crest is a small hill-hospitality group. Luxe Vista is
                its flagship property — a mountain-view hotel in Banikhet,
                Dalhousie, offering thoughtfully designed rooms, scenic
                surroundings and a comfortable base for exploring Dalhousie
                and nearby Khajjiar.
              </p>
              <p>
                Every room is verified in person, every photo shows the
                actual room, and every booking sits on one calendar — so an
                open date is genuinely open. Small enough that the staff
                know your name by day two of your stay.
              </p>
              <div className="split-facts">
                <div className="split-fact">
                  <strong>27</strong>
                  <span>Rooms across 4 categories</span>
                </div>
                <div className="split-fact">
                  <strong>~6,000ft</strong>
                  <span>Elevation, Banikhet</span>
                </div>
                <div className="split-fact">
                  <strong>~7km</strong>
                  <span>From Dalhousie Mall Road</span>
                </div>
              </div>
            </div>
            <div className="split-art">
              <img className="photo" src="/images/valley-views.webp" alt="Valley views from Luxe Vista" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- ROOMS PREVIEW ---------- */}
      <section className="section section--linen-soft">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Stay</p>
            <h2>Rooms &amp; rates</h2>
            <p>27 rooms across four categories, starting from ₹2,300 a night.</p>
          </div>

          {featuredRooms.map((room, i) => (
            <div key={room.slug} className={`room-row ${i % 2 === 1 ? "room-row--reverse" : ""}`}>
              <div className="room-art">
                <RoomVisual room={room} tone={["dusk", "copper", "spruce"][i % 3]} seed={i + 3} />
              </div>
              <div className="room-info">
                <p className="tagline">{room.tagline}</p>
                <h3>{room.name}</h3>
                <div className="room-meta">
                  <span>{room.view}</span>
                  <span>{room.occupancy}</span>
                </div>
                <p className="room-price">{room.priceLabel}</p>
                <div className="room-actions">
                  <Link href={`/rooms/${room.slug}`} className="text-link">
                    View room →
                  </Link>
                </div>
              </div>
            </div>
          ))}

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/rooms" className="btn btn--outline-ink">
              See all rooms &amp; rates
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- WHY CHOOSE SNOW CREST ---------- */}
      <section className="section section--linen-soft">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Why choose us</p>
            <h2>Chosen for the view first</h2>
            <p>A peaceful hillside location in Banikhet, roughly 7 km from Dalhousie Mall Road.</p>
          </div>

          <div className="amenity-grid">
            <div className="amenity">
              <h3>Comfortable, all winter</h3>
              <p>Heated rooms, real mattresses, and hot water that actually stays hot in winter.</p>
            </div>
            <div className="amenity">
              <h3>Handled by a person</h3>
              <p>Room requests, dietary notes, and travel plans — handled by a person, not a ticket queue.</p>
            </div>
            <div className="amenity">
              <h3>Mountain-facing by design</h3>
              <p>Marble bathrooms, mountain-facing balconies, and heating designed for comfortable stays through the hill winters.</p>
            </div>
            <div className="amenity">
              <h3>No surprises at checkout</h3>
              <p>One calendar, one price, no surprise charge at checkout or at the front desk.</p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/luxe-vista" className="btn btn--outline-ink">
              Explore Luxe Vista
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <section className="section section--night">
        <div className="container">
          <RidgeDivider tone="night" />
          <div className="section-head" style={{ marginTop: "2.5rem" }}>
            <p className="eyebrow">Guests say</p>
            <h2 style={{ fontSize: "1.6rem" }}>Rated highly on Google &amp; Tripadvisor</h2>
          </div>
          <div className="testimonial-row">
            <div className="testimonial">
              <blockquote>
                &ldquo;Clean, tidy, and a beautiful view of snow-laden
                mountains — the food was excellent too.&rdquo;
              </blockquote>
              <cite>— Guest review, Google</cite>
            </div>
            <div className="testimonial">
              <blockquote>
                &ldquo;Staff were courteous and helpful, and the location
                was genuinely peaceful.&rdquo;
              </blockquote>
              <cite>— Guest review, Tripadvisor</cite>
            </div>
            <div className="testimonial">
              <blockquote>
                &ldquo;A memorable stay — we&apos;d come back for the view alone.&rdquo;
              </blockquote>
              <cite>— Guest review, Google</cite>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- BLOG TEASER ---------- */}
      <section className="section section--linen">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">From the hills</p>
            <h2>The journal</h2>
            <p>Travel notes on Dalhousie, Khajjiar, and the surrounding hills.</p>
          </div>

          {posts.map((post) => (
            <div key={post.slug} className="post-row">
              <div className="post-date">
                {post.date &&
                  new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
              </div>
              <div>
                <h3>
                  <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                    {post.title}
                  </Link>
                </h3>
                <p>{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-link" style={{ marginTop: "0.75rem", display: "inline-flex" }}>
                  Read more →
                </Link>
              </div>
            </div>
          ))}

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/blog" className="btn btn--outline-ink">
              Read the journal
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- CLOSING CTA ---------- */}
      <section className="section section--night" style={{ textAlign: "center" }}>
        <div className="container">
          <p className="eyebrow">Plan your stay</p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", maxWidth: "32rem", margin: "0 auto 1.5rem" }}>
            Everything you see is real
          </h2>
          <p style={{ color: "var(--mist-soft)", maxWidth: "30rem", margin: "0 auto 2rem" }}>
            The rooms, the photos, the location and the experience. Send us
            your dates on WhatsApp and we&apos;ll confirm the same day.
          </p>
          <Link href="/contact" className="btn btn--copper">
            Book on WhatsApp
          </Link>
        </div>
      </section>
    </>
  );
}
