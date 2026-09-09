// Real room categories at Luxe Vista by Snow Crest, Banikhet, Dalhousie.
// Sourced from the property's own site — update copy/pricing here any time
// rates change; every page on the site reads from this one file.

export const rooms = [
  {
    slug: "king-mountain-view",
    name: "King Mountain View",
    tagline: "No balcony, just an uninterrupted ridge view",
    view: "Full mountain-facing window",
    occupancy: "2 guests",
    priceLabel: "From ₹2,300 / night",
    blurb:
      "A king bed facing a full mountain-facing window — no balcony, just an uninterrupted ridge view.",
    features: [
      "King bed",
      "Full mountain-facing window",
      "In-room heating",
      "Marble bathroom",
    ],
    photos: [
      "/images/king-mountain-view-1.avif",
      "/images/king-mountain-view-2.avif",
      "/images/king-mountain-view-3.avif",
      "/images/washroom.avif",
    ],
  },
  {
    slug: "king-room-balcony",
    name: "King Room with Balcony",
    tagline: "Step outside without leaving the room",
    view: "Private balcony, mountain view",
    occupancy: "2 guests",
    priceLabel: "Contact for current rate",
    blurb:
      "The King Mountain View room's layout, with a private balcony added — step outside for the same view without leaving the room.",
    features: [
      "King bed",
      "Private balcony",
      "In-room heating",
      "Marble bathroom",
    ],
    photos: [
      "/images/king-room-balcony-1.avif",
      "/images/king-room-balcony-2.avif",
      "/images/king-room-balcony-3.avif",
      "/images/washroom.avif",
    ],
  },
  {
    slug: "family-suite",
    name: "Family Suite",
    tagline: "Space for a family or group, booked as a single room",
    view: "Panoramic balcony",
    occupancy: "4+ guests",
    priceLabel: "Contact for current rate",
    blurb:
      "Two double beds and a panoramic balcony — space for a family or group, booked as a single room.",
    features: [
      "Two double beds",
      "Panoramic balcony",
      "In-room heating",
      "Marble bathroom",
    ],
    photos: [
      "/images/family-suite-1.jpg",
      "/images/family-suite-2.jpg",
      "/images/family-suite-3.jpg",
      "/images/washroom.avif",
    ],
  },
  {
    slug: "duplex-room",
    name: "Duplex Room",
    tagline: "A two-level room for groups who want a little separation",
    view: "Mountain view across two floors",
    occupancy: "4+ guests",
    priceLabel: "Contact for current rate",
    blurb:
      "Split across two floors, so a group or family gets separate sleeping areas without booking two rooms.",
    features: [
      "Two-level layout",
      "Multiple beds across floors",
      "In-room heating",
      "Marble bathroom",
    ],
    photos: [
      "/images/duplex-room-1.jpg",
      "/images/washroom.avif",
    ],
  },
];

export function getRoomBySlug(slug) {
  return rooms.find((room) => room.slug === slug);
}
