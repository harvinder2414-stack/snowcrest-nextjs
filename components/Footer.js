"use client";
import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  function subscribe(e) {
    e.preventDefault();
    if (!email.includes("@")) {
      setMsg("Please enter a valid email address.");
      return;
    }
    setMsg("Thanks — newsletter signup needs an email service (e.g. Resend, Mailchimp) connected before this goes live.");
  }

  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <div className="brand">Snow Crest</div>
            <p>A small hill-hospitality group running boutique stays across Himachal Pradesh.</p>
            <div className="foot-social">
              <a href="https://www.instagram.com/hotelsnowcrest" target="_blank" rel="noreferrer" aria-label="Snow Crest on Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 2 .25 2.4.42.6.24 1 .53 1.5 1s.76.9 1 1.5c.17.4.36 1.2.42 2.4.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 2-.42 2.4-.24.6-.53 1-1 1.5s-.9.76-1.5 1c-.4.17-1.2.36-2.4.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-2-.25-2.4-.42-.6-.24-1-.53-1.5-1s-.76-.9-1-1.5c-.17-.4-.36-1.2-.42-2.4C2.21 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-2 .42-2.4.24-.6.53-1 1-1.5s.9-.76 1.5-1c.4-.17 1.2-.36 2.4-.42C8.4 2.21 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.52 0-4.76.07-.97.04-1.5.2-1.85.34-.46.18-.8.4-1.15.75s-.57.69-.75 1.15c-.14.36-.3.88-.34 1.85C3.08 8.48 3.07 8.85 3.07 12s0 3.52.07 4.76c.04.97.2 1.5.34 1.85.18.46.4.8.75 1.15s.69.57 1.15.75c.36.14.88.3 1.85.34 1.24.06 1.6.07 4.76.07s3.52 0 4.76-.07c.97-.04 1.5-.2 1.85-.34.46-.18.8-.4 1.15-.75s.57-.69.75-1.15c.14-.36.3-.88.34-1.85.06-1.24.07-1.6.07-4.76s0-3.52-.07-4.76c-.04-.97-.2-1.5-.34-1.85a3.06 3.06 0 00-.75-1.15 3.06 3.06 0 00-1.15-.75c-.36-.14-.88-.3-1.85-.34C15.52 4 15.15 4 12 4zm0 3.4a4.6 4.6 0 110 9.2 4.6 4.6 0 010-9.2zm0 1.8a2.8 2.8 0 100 5.6 2.8 2.8 0 000-5.6zm4.8-2a1.08 1.08 0 110 2.15 1.08 1.08 0 010-2.15z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <h5>Property</h5>
            <ul><li><Link href="/luxe-vista">Luxe Vista</Link></li><li><Link href="/rooms">Room Categories</Link></li></ul>
          </div>
          <div>
            <h5>Company</h5>
            <ul><li><Link href="/about">About</Link></li><li><Link href="/offers">Offers</Link></li><li><Link href="/contact#contact">Contact</Link></li><li><Link href="/blog">Blog</Link></li></ul>
          </div>
          <div className="newsletter">
            <h5>Stay Updated</h5>
            <form onSubmit={subscribe}>
              <label htmlFor="newsEmail" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden" }}>Email address</label>
              <input type="email" id="newsEmail" placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
              <button type="submit" className="btn btn-olive" style={{ width: "100%", padding: "10px" }}>Subscribe</button>
            </form>
            {msg && <p style={{ fontSize: "11.5px", color: "rgba(250,246,238,0.6)", marginTop: "8px" }}>{msg}</p>}
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} Snow Crest. All rights reserved.</span>
          <span>Banikhet, Dalhousie, Himachal Pradesh · Call: 9317190212 · WhatsApp: 7018512267 · harvinder2414@gmail.com</span>
        </div>
      </div>
    </footer>
  );
}
