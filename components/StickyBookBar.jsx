"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { BOOKING_ENGINE_URL } from "@/lib/config";

// Two behaviours in one component:
//  - Homepage: a two-button mobile bar ("View Rooms | Book Direct"), which is
//    the pattern that converts on a phone — one browse action, one book action.
//  - Everywhere else: the single "Book Direct" bar the interior pages already
//    used, so nothing on those pages changes.
// Both appear only after the hero has scrolled past, so the hero photo is
// never covered on first load.
export default function StickyBookBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  // Tolerate trailing slashes and static-export paths ("/index.html") so the
  // homepage bar doesn't silently fall back to the interior-page one.
  const route = (pathname || "/").replace(/index\.html$/, "").replace(/\/+$/, "");
  const isHome = route === "";

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > (isHome ? window.innerHeight * 0.65 : 320));
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname, isHome]);

  if (isHome) {
    return (
      <div
        className={`lv-sticky ${visible ? "lv-sticky--visible" : ""}`}
        aria-hidden={!visible}
      >
        <Link href="/rooms" className="lv-sticky-rooms" tabIndex={visible ? 0 : -1}>
          View Rooms
        </Link>
        <a
          href={BOOKING_ENGINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="lv-sticky-book"
          tabIndex={visible ? 0 : -1}
        >
          Book Direct
        </a>
      </div>
    );
  }

  return (
    <div className={`sticky-book ${visible ? "sticky-book--visible" : ""}`} aria-hidden={!visible}>
      <a
        href={BOOKING_ENGINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="sticky-book-link"
        tabIndex={visible ? 0 : -1}
      >
        <span className="sticky-book-desktop">Book Direct</span>
        <span className="sticky-book-mobile">Book Now</span>
      </a>
    </div>
  );
}
