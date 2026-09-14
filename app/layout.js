import { Fraunces, Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// TODO: once this site is live on its final domain, update this to match —
// it's what search engines and social platforms resolve every relative
// URL and OG image against. Currently pointed at the property's existing
// domain; change it the day you cut over.
const SITE_URL = "https://www.snowcresthotels.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Luxe Vista by Snow Crest | Mountain View Hotel in Dalhousie, Banikhet",
    template: "%s | Luxe Vista by Snow Crest",
  },
  description:
    "A mountain view hotel in Banikhet, near Dalhousie, Himachal Pradesh. 27 rooms across four categories, starting from ₹2,300 a night — book directly on WhatsApp.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    siteName: "Luxe Vista by Snow Crest",
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    title: "Luxe Vista by Snow Crest | Mountain View Hotel in Dalhousie, Banikhet",
    description:
      "A mountain view hotel in Banikhet, near Dalhousie, Himachal Pradesh. 27 rooms across four categories, starting from ₹2,300 a night.",
    images: [{ url: "/images/hotel-exterior.webp", width: 1360, height: 908, alt: "Luxe Vista by Snow Crest, a hotel in Banikhet near Dalhousie" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxe Vista by Snow Crest | Mountain View Hotel in Dalhousie, Banikhet",
    description:
      "A mountain view hotel in Banikhet, near Dalhousie, Himachal Pradesh. 27 rooms across four categories, starting from ₹2,300 a night.",
    images: ["/images/hotel-exterior.webp"],
  },
};

// Structured data (schema.org Hotel) — tells search engines this is a real,
// bookable hotel at a specific address, which is what supports local-search
// results ("hotel in Dalhousie", "hotel in Banikhet") and a rich map/knowledge
// panel listing rather than just a blue link.
//
// aggregateRating below is sourced from the property's own Google Business
// Profile (4.5, 93 reviews, confirmed by the owner) — Google's structured
// data policy requires this to be genuine and verifiable, so update these
// two numbers periodically as new reviews come in; don't let them go stale
// for too long or drift from what Google Maps actually shows.
//
// TODO: `geo` below uses Banikhet village's published coordinates (a
// reasonable locality-level signal) — swap in the property's exact pin
// from Google Business Profile / Google Maps once you have it, for a more
// precise map listing.
const hotelSchema = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: "Luxe Vista by Snow Crest",
  description:
    "A mountain view hotel in Banikhet, near Dalhousie, Himachal Pradesh, with 27 rooms across four categories.",
  url: SITE_URL,
  telephone: "+91-93171-90212",
  priceRange: "₹2,300+",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Banikhet",
    addressLocality: "Dalhousie",
    addressRegion: "Himachal Pradesh",
    postalCode: "176303",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.5456,
    longitude: 75.9437,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    reviewCount: "93",
    bestRating: "5",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Mountain-facing rooms" },
    { "@type": "LocationFeatureSpecification", name: "Private balconies (select rooms)" },
    { "@type": "LocationFeatureSpecification", name: "In-room heating" },
    { "@type": "LocationFeatureSpecification", name: "Marble bathrooms" },
    { "@type": "LocationFeatureSpecification", name: "Free parking" },
  ],
  sameAs: ["https://www.instagram.com/hotelsnowcrest"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
