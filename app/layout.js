import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";

export const metadata = {
  title: "Snow Crest Hotels | Luxe Vista, Dalhousie",
  description: "Snow Crest Hotels — Luxe Vista, a boutique mountain-view property in Banikhet, Dalhousie. Verified rooms, real photos, direct WhatsApp booking.",
  icons: { icon: "/favicon.ico" },
};

export const viewport = { themeColor: "#2b2823" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <div className="sticky-book">
          <a className="btn btn-dark" target="_blank" rel="noreferrer"
             href="https://wa.me/917018512267?text=Hi%20Snow%20Crest%2C%20I%27d%20like%20to%20book%20a%20stay%20at%20Luxe%20Vista.">
            Book Now on WhatsApp
          </a>
        </div>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
