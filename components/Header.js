"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/luxe-vista", label: "Luxe Vista" },
  { href: "/rooms", label: "Rooms" },
  { href: "/offers", label: "Offers" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header id="siteHeader" className={solid ? "solid" : ""}>
        <nav className="wrap">
          <Link href="/" className="brand" style={{ cursor: "pointer" }}>
            <span className="badge">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
                <path d="M3 18L9 8L12.5 13.5L15 10L21 18H3Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
              </svg>
            </span>
            Snow Crest
          </Link>
          <div className="navlinks">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={pathname === item.href ? { opacity: 1, borderBottom: "1.5px solid var(--olive)" } : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <Link className="btn btn-dark" href="/contact#contact">Book Now</Link>
          </div>
          <button
            className={"hamburger" + (menuOpen ? " open" : "")}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span></span><span></span><span></span>
          </button>
        </nav>
      </header>

      <div className={"mobile-menu" + (menuOpen ? " open" : "")}>
        {NAV_ITEMS.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
}
