"use client";

import { useState } from "react";
import Link from "next/link";

const LINKS = [
  { href: "/luxe-vista", label: "Luxe Vista" },
  { href: "/rooms", label: "Rooms" },
  { href: "/offers", label: "Offers" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container">
        <Link href="/" className="nav-mark">
          Luxe Vista
          <span className="nav-mark-byline">by Snow Crest</span>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <Link href="/contact" className="btn btn--copper">
            Book Now
          </Link>
          <button
            className="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav className="nav-mobile" aria-label="Mobile">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
