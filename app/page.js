import Link from "next/link";
import RoomVisual from "@/components/RoomVisual";
import RidgeDivider from "@/components/RidgeDivider";
import AmenityIcon from "@/components/AmenityIcon";
import HeroBookBar from "@/components/HeroBookBar";
import FAQAccordion from "@/components/FAQAccordion";
import StarRating from "@/components/StarRating";
import { rooms } from "@/lib/rooms";
import { getAllPosts } from "@/lib/posts";
import { faqs } from "@/lib/faqs";
import { BOOKING_ENGINE_URL } from "@/lib/config";

export const metadata = {
  title: { absolute: "Hotel in Dalhousie | Mountain View Hotel in Banikhet | Luxe Vista" },
  alternates: { canonical: "/" },
};

// FAQPage structured data — lets search engines and AI assistants surface
// these Q&As directly (rich results, "People also ask", AI Overviews).
// Sourced from the same faqs array the visible accordion renders, so the
// two can never drift out of sync.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function HomePage() {
  const featuredRooms = rooms.slice(0, 3);
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ---------- HERO ---------- */}
      <section className="hero hero--photo hero--bookbar">
        <div className="container hero-content">
          <div className="hero-grid hero-grid--single">
            <div>
              <p className="hero-eyebrow">Luxe Vista by Snow Crest</p>
              <h1>Mountain View Hotel in Dalhousie, Himachal Pradesh</h1>
              <p className="hero-sub">
                A peaceful mountain view stay in Banikhet, about 7 km from
                Dalhousie Mall Road.
              </p>
              <ul className="hero-highlights">
                <li>Mountain views</li>
                <li>Private balconies</li>
                <li>27 rooms</li>
              </ul>
            </div>
          </div>
        </div>

        <HeroBookBar />
      </section>

      {/* ---------- STAT STRIP ---------- */}
      <section className="stat-strip">
        <div className="container">
          <div className="stat-strip-inner">
            <div className="stat-item">
              <strong>27</strong>
              <span>Rooms</span>
            </div>
            <div className="stat-item">
              <strong>4.5★</strong>
              <span>Google rating</span>
            </div>
            <div className="stat-item">
              <strong>~6,000ft</strong>
              <span>Elevation</span>
            </div>
            <div className="stat-item">
              <strong>7km</strong>
              <span>To Mall Road</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WHY BOOK DIRECT ---------- */}
      <section className="section section--linen-soft">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Direct booking</p>
            <h2>Why book direct with Luxe Vista?</h2>
            <p>No listing fees, no middleman markup — just the hotel, the room, and the rate.</p>
          </div>

          <div className="amenity-grid">
            <div className="amenity">
              <AmenityIcon name="receipt" />
              <h3>Best available direct rates</h3>
              <p>See our current rates when you book directly, with nothing added for a third-party platform.</p>
            </div>
            <div className="amenity">
              <AmenityIcon name="calendar" />
              <h3>Real-time availability</h3>
              <p>Check availability for your exact dates on our own booking engine, live.</p>
            </div>
            <div className="amenity">
              <AmenityIcon name="person" />
              <h3>No OTA middleman</h3>
              <p>You book and communicate directly with the hotel — no third party in between.</p>
            </div>
            <div className="amenity">
              <AmenityIcon name="chat" />
              <h3>Direct assistance</h3>
              <p>Get help with room selection, stay planning, and special requests from someone who knows the property.</p>
            </div>
            <div className="amenity">
              <AmenityIcon name="badge" />
              <h3>Secure direct booking</h3>
              <p>Complete your reservation securely through our own booking engine.</p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <a href={BOOKING_ENGINE_URL} target="_blank" rel="noopener noreferrer" className="btn btn--copper">
              Check Availability
            </a>
          </div>
        </div>
      </section>

      {/* ---------- WHO WE ARE ---------- */}
      <section className="section section--linen">
        <div className="container">
          <div className="split">
            <div className="split-copy">
              <p className="eyebrow">Who we are</p>
              <h2>A mountain view hotel in Dalhousie, run by people who live here</h2>
              <p>
                Snow Crest is a small hill-hospitality group. Luxe Vista is
                its flagship property — a mountain view hotel in Banikhet,
                near Dalhousie, Himachal Pradesh, offering thoughtfully
                designed rooms, scenic surroundings and a comfortable base
                for exploring Dalhousie and nearby Khajjiar.
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
              <div className="hero-actions" style={{ marginTop: "1.75rem" }}>
                <Link href="/luxe-vista" className="text-link">
                  About Luxe Vista →
                </Link>
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
      <section className="section section--linen">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Why choose us</p>
            <h2>Chosen for the view first</h2>
            <p>A peaceful hillside location in Banikhet, roughly 7 km from Dalhousie Mall Road.</p>
          </div>

          <div className="amenity-grid">
            <div className="amenity">
              <AmenityIcon name="heating" />
              <h3>Comfortable, all winter</h3>
              <p>Heated rooms, real mattresses, and hot water that actually stays hot in winter.</p>
            </div>
            <div className="amenity">
              <AmenityIcon name="person" />
              <h3>Handled by a person</h3>
              <p>Room requests, dietary notes, and travel plans — handled by a person, not a ticket queue.</p>
            </div>
            <div className="amenity">
              <AmenityIcon name="mountain" />
              <h3>Mountain-facing by design</h3>
              <p>Marble bathrooms, mountain-facing balconies, and heating designed for comfortable stays through the hill winters.</p>
            </div>
            <div className="amenity">
              <AmenityIcon name="receipt" />
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
            <div className="rating-row">
              <StarRating rating={4.5} />
              <span>4.5 on Google (93 reviews)</span>
            </div>
            <div className="rating-row">
              <StarRating rating={4.9} />
              <span>4.9/5 on Tripadvisor (20 reviews)</span>
            </div>
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

      {/* ---------- REVIEWS -> BOOKING CTA ---------- */}
      <section className="section section--night" style={{ paddingTop: 0, textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)", maxWidth: "32rem", margin: "0 auto 1rem" }}>
            Loved by guests. Ready for your stay?
          </h2>
          <p style={{ color: "var(--mist-soft)", maxWidth: "30rem", margin: "0 auto 2rem" }}>
            See what guests have experienced at Luxe Vista, then check
            availability for your dates.
          </p>
          <a href={BOOKING_ENGINE_URL} target="_blank" rel="noopener noreferrer" className="btn btn--copper">
            Check Availability
          </a>
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

      {/* ---------- FAQ ---------- */}
      <section className="section section--linen-soft">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Questions</p>
            <h2>Frequently asked questions</h2>
            <p>Straight answers about location, rooms, rates, and getting here.</p>
          </div>
          <FAQAccordion />
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
            The rooms, the photos, the location and the experience. Check
            availability online, or send us your dates on WhatsApp and
            we&apos;ll confirm the same day.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <a href={BOOKING_ENGINE_URL} target="_blank" rel="noopener noreferrer" className="btn btn--copper">
              Check Availability
            </a>
            <Link href="/contact" className="btn btn--outline-night">
              Book on WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
