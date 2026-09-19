import Link from "next/link";
import AmenityIcon from "@/components/AmenityIcon";
import FAQAccordion from "@/components/FAQAccordion";
import StarRating from "@/components/StarRating";
import { rooms } from "@/lib/rooms";
import { faqs } from "@/lib/faqs";
import { BOOKING_ENGINE_URL, HOTEL_WHATSAPP, HOTEL_PHONE_DISPLAY } from "@/lib/config";

export const metadata = {
  title: {
    absolute:
      "Hotel in Dalhousie | Mountain View Hotel in Banikhet Near Khajjiar | Hotel Luxe Vista",
  },
  description:
    "Hotel Luxe Vista by Snow Crest is a mountain view hotel in Banikhet, about 7 km from Dalhousie and 22 km from Khajjiar, Himachal Pradesh. 27 rooms across 4 categories with private balconies, from ₹2,300 a night. Book direct.",
  alternates: { canonical: "/" },
};

const MAPS_DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=Hotel+Luxe+Vista+by+Snow+Crest%2C+Banikhet%2C+Dalhousie%2C+Himachal+Pradesh";
const MAPS_EMBED =
  "https://www.google.com/maps?q=Banikhet%2C+Dalhousie%2C+Himachal+Pradesh&z=12&output=embed";
const GOOGLE_REVIEWS =
  "https://www.google.com/search?q=Hotel+Luxe+Vista+by+Snow+Crest+Banikhet+Dalhousie+reviews";
const WHATSAPP_URL = `https://wa.me/${HOTEL_WHATSAPP}?text=${encodeURIComponent(
  "Hi, I'd like to check availability at Hotel Luxe Vista, Banikhet."
)}`;

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
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

// An explicit, machine-readable inventory of what's bookable here. This is
// what supports "hotels in Dalhousie" comparison surfaces and AI answers
// that need to know the room categories without parsing the layout.
const roomListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Room categories at Hotel Luxe Vista by Snow Crest, Banikhet, Dalhousie",
  itemListElement: rooms.map((room, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "HotelRoom",
      name: room.name,
      description: room.blurb,
      url: `https://www.snowcresthotels.com/rooms/${room.slug}`,
      occupancy: { "@type": "QuantitativeValue", name: room.occupancy },
      amenityFeature: room.features.map((f) => ({
        "@type": "LocationFeatureSpecification",
        name: f,
      })),
    },
  })),
};

const HIGHLIGHTS = [
  { icon: "bed", value: "27", label: "Rooms" },
  { icon: "layers", value: "4", label: "Room categories" },
  { icon: "mountain", value: "~6,000 ft", label: "Elevation, Banikhet" },
  { icon: "route", value: "~7 km", label: "From Dalhousie" },
];

const REASONS = [
  {
    icon: "view",
    title: "Mountain views",
    copy: "Every room faces the hills — a full mountain-facing window as standard, not an upgrade.",
  },
  {
    icon: "balcony",
    title: "Private balconies",
    copy: "Balcony rooms, the Family Suite and the Duplex Room each open onto your own stretch of the valley view.",
  },
  {
    icon: "leaf",
    title: "Peaceful location",
    copy: "Banikhet sits away from Dalhousie's Mall Road crowds, so evenings stay quiet — and town is still 20 minutes off.",
  },
  {
    icon: "person",
    title: "Personal hospitality",
    copy: "A small, owner-run property. Room requests, taxis and Khajjiar day plans are handled by someone who knows the roads.",
  },
];

// Only places we hold genuine photography of get a picture card. Banikhet,
// Kalatop, Dainkund and Chamba are covered by the text panel beside them —
// they keep their internal links and keyword presence without a stand-in
// image standing in for somewhere it isn't.
const DESTINATIONS = [
  {
    name: "Dalhousie",
    image: "/images/dalhousie-town.webp",
    alt: "Dalhousie town in Himachal Pradesh — colonial-era rooftops on the forested hillside below the Subhash Chowk flagpole",
    distance: "~7 km \u00b7 20\u201325 min by road",
    copy: "Colonial churches, Mall Road, Panchpula and Dainkund Peak \u2014 close enough for an easy morning out, far enough that you sleep in quiet.",
    href: "/blog/places-to-visit-in-dalhousie",
    linkLabel: "Places to visit in Dalhousie",
  },
  {
    name: "Khajjiar",
    image: "/images/khajjiar-lake.webp",
    alt: "Khajjiar lake and meadow ringed by deodar forest, Himachal Pradesh",
    distance: "~22 km \u00b7 45\u201360 min by road",
    copy: "The saucer-shaped meadow and small lake ringed by deodar forest, often called India's Switzerland. A standard half-day trip for guests staying with us.",
    href: "/blog/khajjiar-day-trip-guide",
    linkLabel: "Plan a Khajjiar day trip",
  },
];

const NEARBY = [
  { name: "Banikhet", note: "Where the hotel is \u2014 the junction for Chamba, Dalhousie and Khajjiar.", href: "/luxe-vista" },
  { name: "Kalatop Wildlife Sanctuary", note: "Deodar forest walks, about 15 km on the Dalhousie side.", href: "/blog/places-to-visit-near-dalhousie" },
  { name: "Dainkund Peak", note: "The highest point around, with a short ridge walk to the temple.", href: "/blog/places-to-visit-in-dalhousie" },
  { name: "Chamba", note: "Old temple town roughly 45 km on, an easy full-day trip.", href: "/blog/places-to-visit-near-dalhousie" },
];

const REVIEWS = [
  {
    quote:
      "Clean, tidy, and a beautiful view of snow-laden mountains — the food was excellent too.",
    source: "Google review",
  },
  {
    quote:
      "Staff were courteous and helpful, and the location was genuinely peaceful.",
    source: "Tripadvisor review",
  },
  {
    quote: "A memorable stay — we'd come back for the view alone.",
    source: "Google review",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(roomListSchema) }}
      />

      {/* ===================== 1. HERO ===================== */}
      <section className="lv-hero">
        <img
          className="lv-hero-img"
          src="/images/hotel-exterior.webp"
          alt="Hotel Luxe Vista by Snow Crest, a mountain view hotel in Banikhet near Dalhousie, Himachal Pradesh"
          fetchPriority="high"
        />
        <div className="lv-hero-veil" />
        <div className="container lv-hero-inner">
          <p className="lv-hero-kicker">Banikhet, near Dalhousie, Himachal Pradesh</p>
          <h1>Mountain View Hotel in Dalhousie, Himachal Pradesh</h1>
          <p className="lv-hero-sub">
            Hotel Luxe Vista by Snow Crest is a mountain view hotel in
            Banikhet, about 7 km from Dalhousie — 27 rooms facing the hills,
            private balconies, and a comfortable, unhurried stay.
          </p>
          <div className="lv-hero-actions">
            <Link href="/rooms" className="btn btn--copper">
              Explore Rooms
            </Link>
            <a
              href={BOOKING_ENGINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--glass"
            >
              Book Direct
            </a>
          </div>
        </div>
      </section>

      {/* ===================== 2. PROPERTY HIGHLIGHTS ===================== */}
      <section className="lv-highlights" aria-label="Property at a glance">
        <div className="container lv-highlights-row">
          {HIGHLIGHTS.map((h) => (
            <div key={h.label} className="lv-highlight">
              <AmenityIcon name={h.icon} />
              <strong>{h.value}</strong>
              <span>{h.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== 3. ABOUT / INTRODUCTION ===================== */}
      <section className="lv-section lv-section--cream">
        <div className="container lv-two-col">
          <div className="lv-two-col-media">
            <img
              src="/images/balcony-view.webp"
              alt="Private balcony with mountain views at Hotel Luxe Vista, Banikhet near Dalhousie"
              loading="lazy"
            />
          </div>
          <div className="lv-two-col-copy">
            <h2>A Mountain View Hotel Near Dalhousie</h2>
            <p>
              Hotel Luxe Vista by Snow Crest sits on a quiet hillside in
              Banikhet, roughly 7 km from Dalhousie Mall Road and around
              6,000 feet above sea level. It is a mountain view hotel in the
              literal sense: the building is turned towards the ridge, and
              every one of its 27 rooms looks out at it.
            </p>
            <p>
              The property runs to four room categories — King Mountain View,
              King Room with Balcony, Family Suite and Duplex Room — each
              with in-room heating, a marble bathroom and a mountain-facing
              window. Balcony rooms and suites add private outdoor space,
              which is where most guests end up spending their mornings.
            </p>
            <p>
              Banikhet makes a practical base for the whole area. Dalhousie
              is a 20–25 minute drive, Khajjiar about an hour, and Chamba,
              Kalatop and Dainkund all sit within a comfortable day trip. It
              suits couples, families and small groups who want the hills
              without the noise of a hill-station high street.
            </p>
            <Link href="/luxe-vista" className="text-link lv-arrow">
              Discover Luxe Vista
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== 4. ROOMS ===================== */}
      <section className="lv-section lv-section--linen" id="rooms">
        <div className="container">
          <div className="lv-head">
            <h2>Rooms at Hotel Luxe Vista, Dalhousie</h2>
            <p>
              27 rooms across four categories, starting from ₹2,300 a night.
              Every room has a mountain-facing window, in-room heating and a
              marble bathroom; balcony rooms, the Family Suite and the Duplex
              Room add private outdoor space.
            </p>
          </div>
        </div>

        <div className="lv-rail-wrap">
          <div className="container lv-rail">
            {rooms.map((room) => (
              <article key={room.slug} className="lv-room">
                <Link href={`/rooms/${room.slug}`} className="lv-room-media">
                  <img
                    src={room.photos[0]}
                    alt={`${room.name} at Hotel Luxe Vista, Banikhet near Dalhousie`}
                    loading="lazy"
                  />
                </Link>
                <div className="lv-room-body">
                  <h3>
                    <Link href={`/rooms/${room.slug}`}>{room.name}</Link>
                  </h3>
                  <p className="lv-room-blurb">{room.blurb}</p>
                  <ul className="lv-room-features">
                    {room.features.slice(0, 3).map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <div className="lv-room-foot">
                    <span className="lv-room-price">{room.priceLabel}</span>
                    <Link href={`/rooms/${room.slug}`} className="text-link lv-arrow">
                      View Room
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="container lv-center">
          <Link href="/rooms" className="btn btn--outline-ink">
            See all rooms &amp; rates
          </Link>
        </div>
      </section>

      {/* ===================== 5. MOUNTAIN VIEW EXPERIENCE ===================== */}
      <section className="lv-feature" aria-labelledby="lv-views-heading">
        <img
          className="lv-feature-img"
          src="/images/valley-views-wide.webp"
          alt="Morning mountain and valley views from Hotel Luxe Vista in Banikhet, Dalhousie"
          loading="lazy"
        />
        <div className="lv-feature-veil" />
        <div className="container lv-feature-inner">
          <h2 id="lv-views-heading">Wake Up to Mountain Views</h2>
          <p>
            Rooms at Luxe Vista face the hills, and private balconies open
            straight onto the valley. Banikhet is quiet enough that mornings
            arrive with birdsong rather than traffic — and Dalhousie is still
            only a short drive down the road.
          </p>
        </div>
      </section>

      {/* ===================== 6. WHY CHOOSE LUXE VISTA ===================== */}
      <section className="lv-section lv-section--cream">
        <div className="container">
          <div className="lv-head">
            <h2>Why Choose Luxe Vista</h2>
          </div>
          <div className="lv-reasons">
            {REASONS.map((r) => (
              <div key={r.title} className="lv-reason">
                <AmenityIcon name={r.icon} />
                <h3>{r.title}</h3>
                <p>{r.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== 7. LOCATION ===================== */}
      <section className="lv-section lv-section--linen">
        <div className="container lv-two-col lv-two-col--map">
          <div className="lv-two-col-copy">
            <h2>Stay Near Dalhousie, Himachal Pradesh</h2>
            <p>
              The hotel is in Banikhet, a hillside town about 7 km below
              Dalhousie on the Pathankot road. That puts Mall Road, St
              John&apos;s Church and Panchpula roughly 20–25 minutes away by
              car, while leaving you on a quieter stretch of hillside for the
              evening.
            </p>
            <p>
              Khajjiar is around 22 km on — 45 minutes to an hour, depending
              on the road — and works well as a half-day trip. Kalatop
              Wildlife Sanctuary, Dainkund Peak and the old temple town of
              Chamba are all within reach of a single day out from here.
            </p>
            <ul className="lv-distances">
              <li>
                <span>Dalhousie Mall Road</span>
                <strong>~7 km</strong>
              </li>
              <li>
                <span>Khajjiar</span>
                <strong>~22 km</strong>
              </li>
              <li>
                <span>Chamba</span>
                <strong>~45 km</strong>
              </li>
              <li>
                <span>Pathankot railway station</span>
                <strong>~80 km</strong>
              </li>
            </ul>
            <div className="lv-inline-links">
              <a
                href={MAPS_DIRECTIONS}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link lv-arrow"
              >
                Get Directions
              </a>
              <Link href="/blog/how-to-reach-dalhousie" className="text-link">
                How to reach Dalhousie
              </Link>
              <Link href="/blog/places-to-visit-near-dalhousie" className="text-link">
                Places near Dalhousie
              </Link>
            </div>
          </div>
          <div className="lv-map-stack">
            <div className="lv-map">
              <iframe
                src={MAPS_EMBED}
                title="Map showing Banikhet, near Dalhousie, where Hotel Luxe Vista is located"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <img
              className="lv-map-photo"
              src="/images/lobby.avif"
              alt="Reception and lobby at Hotel Luxe Vista, Banikhet"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ===================== 8. GUEST REVIEWS ===================== */}
      <section className="lv-section lv-section--night">
        <div className="container">
          <div className="lv-head lv-head--center">
            <h2>Loved by Our Guests</h2>
          </div>

          <div className="lv-ratings">
            <div className="lv-rating">
              <StarRating rating={4.5} />
              <strong>4.5 / 5</strong>
              <span>Google · 93 reviews</span>
            </div>
            <div className="lv-rating">
              <StarRating rating={4.9} />
              <strong>4.9 / 5</strong>
              <span>Tripadvisor · 20 reviews</span>
            </div>
          </div>
        </div>

        <div className="lv-rail-wrap">
          <div className="container lv-rail lv-rail--reviews">
            {REVIEWS.map((r) => (
              <figure key={r.quote} className="lv-review">
                <blockquote>{r.quote}</blockquote>
                <figcaption>{r.source}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="container lv-review-actions">
          <a
            href={GOOGLE_REVIEWS}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link lv-arrow"
          >
            See All Reviews
          </a>
          <a
            href={BOOKING_ENGINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--copper"
          >
            Check Rooms &amp; Direct Rates
          </a>
        </div>
      </section>

      {/* ===================== 9. DALHOUSIE & KHAJJIAR ===================== */}
      <section className="lv-section lv-section--cream">
        <div className="container">
          <div className="lv-head">
            <h2>Dalhousie, Khajjiar &amp; Banikhet</h2>
            <p>
              What sits within reach of the hotel, and roughly how far each
              one is by road.
            </p>
          </div>
        </div>

        <div className="lv-rail-wrap">
          <div className="container lv-rail lv-rail--dest">
            {DESTINATIONS.map((d) => (
              <article key={d.name} className="lv-dest">
                <Link href={d.href} className="lv-dest-media">
                  <img src={d.image} alt={d.alt} loading="lazy" />
                  <span className="lv-dest-name">{d.name}</span>
                </Link>
                <div className="lv-dest-body">
                  <p className="lv-dest-distance">{d.distance}</p>
                  <p>{d.copy}</p>
                  <Link href={d.href} className="text-link lv-arrow">
                    {d.linkLabel}
                  </Link>
                </div>
              </article>
            ))}

            <aside className="lv-nearby">
              <h3>Also within reach</h3>
              <ul>
                {NEARBY.map((n) => (
                  <li key={n.name}>
                    <Link href={n.href}>{n.name}</Link>
                    <span>{n.note}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* ===================== 10. DETAILED SEO CONTENT ===================== */}
      <section className="lv-section lv-section--linen">
        <div className="container">
          <div className="lv-head">
            <h2>Hotel Luxe Vista by Snow Crest — A Complete Guide</h2>
          </div>

          <div className="lv-prose-grid">
            <div className="lv-prose-col">
              <h3>A hotel in Dalhousie, in the quieter part of it</h3>
              <p>
                Most searches for a hotel in Dalhousie land you on Mall Road,
                which is lively, central and rarely quiet. Luxe Vista takes
                the other approach. The property is in Banikhet, about 7 km
                below town, on a hillside that faces open valley rather than
                another building. Guests get Dalhousie&apos;s sights within a
                20-minute drive and a genuinely peaceful night at the end of
                it.
              </p>
              <p>
                The hotel sits at roughly 6,000 feet. Summers are mild enough
                that a light jacket does the job in the evenings; winters
                bring snow, and rooms are heated for it. Every category has
                in-room heating and hot water that holds up in January.
              </p>
            </div>

            <div className="lv-prose-col">
              <h3>Mountain-view accommodation and private balconies</h3>
              <p>
                The phrase &ldquo;mountain view hotel in Dalhousie&rdquo; gets
                used loosely. At Luxe Vista it describes the building&apos;s
                orientation: rooms face the ridge, and the window is
                full-height rather than a slot above the headboard. The King
                Mountain View category is built around exactly this — no
                balcony, just an uninterrupted view from the bed.
              </p>
              <p>
                If you would rather step outside, the King Room with Balcony
                adds a private balcony to the same layout. The Family Suite
                has a panoramic balcony and two double beds, and the Duplex
                Room splits across two floors so a group gets separate
                sleeping areas without booking two rooms.
              </p>
            </div>

            <div className="lv-prose-col">
              <h3>Hotels near Khajjiar, from a practical base</h3>
              <p>
                Khajjiar is about 22 km away, a 45-minute to one-hour drive
                on hill roads. Guests looking for hotels near Khajjiar often
                find that staying in Banikhet works better than staying at
                the meadow itself: there is more to eat, taxis are easier to
                arrange, and you are still close enough to arrive before the
                day-trip crowds.
              </p>
              <p>
                The same is true of Kalatop Wildlife Sanctuary and Dainkund
                Peak, both on the Dalhousie side, and Chamba, roughly 45 km
                on. A three-night stay here comfortably covers all of them.
              </p>
            </div>

            <div className="lv-prose-col">
              <h3>Family stays and stays for couples</h3>
              <p>
                Families tend to book the Family Suite or the Duplex Room,
                both of which sleep four or more as a single booking. Couples
                usually take a King Room with Balcony. Free parking is
                available on site, which matters if you are driving up from
                Pathankot or Amritsar.
              </p>
              <p>
                Check-in is from 12:00 PM and check-out by 11:00 AM. Early
                check-in and late check-out can be requested and are subject
                to availability on the day — worth asking over WhatsApp
                before you arrive.
              </p>
            </div>

            <div className="lv-prose-col">
              <h3>Getting to Banikhet and Dalhousie</h3>
              <p>
                The nearest railway station is Pathankot, roughly 80 km away,
                or about two and a half to three hours by road. Buses and
                taxis run the route regularly, and the road passes through
                Banikhet before it climbs to Dalhousie — so the hotel is
                reached before town rather than beyond it.
              </p>
              <p>
                Our journal covers the practical side in more depth:{" "}
                <Link href="/blog/how-to-reach-dalhousie">
                  how to reach Dalhousie
                </Link>
                ,{" "}
                <Link href="/blog/best-time-to-visit-dalhousie">
                  the best time to visit
                </Link>
                , and a{" "}
                <Link href="/blog/first-timers-guide-to-dalhousie">
                  first-timer&apos;s guide
                </Link>
                .
              </p>
            </div>

            <div className="lv-prose-col">
              <h3>Booking direct with the hotel</h3>
              <p>
                Rates start from ₹2,300 a night for the King Mountain View
                category, with other categories confirmed directly since they
                move with the season. Booking through our own engine means
                you deal with the hotel rather than a listing platform, on
                one live calendar — so an open date is genuinely open.
              </p>
              <p>
                If you would rather talk it through, WhatsApp us your dates
                and group size and we will confirm the same day, at the same
                rates. See <Link href="/offers">current offers</Link> or{" "}
                <Link href="/contact">get in touch</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 11. FAQ ===================== */}
      <section className="lv-section lv-section--cream" id="faq">
        <div className="container lv-faq-wrap">
          <div className="lv-head">
            <h2>Frequently Asked Questions</h2>
            <p>
              Location, distances, room types, rates and direct booking —
              answered plainly.
            </p>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* ===================== 12. DIRECT BOOKING ===================== */}
      <section className="lv-section lv-section--linen">
        <div className="container lv-direct">
          <div className="lv-direct-copy">
            <h2>Book Direct With Luxe Vista</h2>
            <p>
              Booking on our own engine means no listing-platform markup, one
              live calendar, and a person at the other end of the message if
              something needs changing.
            </p>
            <ul className="lv-ticks">
              <li>Direct rates</li>
              <li>Real-time availability</li>
              <li>Direct assistance</li>
              <li>Secure booking</li>
            </ul>
          </div>
          <div className="lv-direct-actions">
            <a
              href={BOOKING_ENGINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--copper"
            >
              Check Rooms &amp; Rates
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline-ink"
            >
              WhatsApp Us
            </a>
            <p className="lv-direct-phone">
              Or call{" "}
              <a href={`tel:${HOTEL_PHONE_DISPLAY.replace(/\s/g, "")}`}>
                {HOTEL_PHONE_DISPLAY}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ===================== 13. FINAL IMAGE CTA ===================== */}
      <section className="lv-closing" aria-labelledby="lv-closing-heading">
        <img
          className="lv-closing-img"
          src="/images/king-room-balcony-1.avif"
          alt="Mountain-facing room with private balcony at Hotel Luxe Vista, Banikhet near Dalhousie"
          loading="lazy"
        />
        <div className="lv-closing-veil" />
        <div className="container lv-closing-inner">
          <h2 id="lv-closing-heading">Your Mountain Stay Awaits</h2>
          <a
            href={BOOKING_ENGINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--copper lv-arrow"
          >
            Book Your Stay
          </a>
        </div>
      </section>
    </>
  );
}
