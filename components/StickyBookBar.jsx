"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { BOOKING_ENGINE_URL } from "@/lib/config";

export default function StickyBookBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroBar = document.getElementById("hero-book-bar");

    if (heroBar) {
      // Homepage: show once the hero's own booking bar scrolls out of view.
      const observer = new IntersectionObserver(
        ([entry]) => setVisible(!entry.isIntersecting),
        { threshold: 0 }
      );
      observer.observe(heroBar);
      return () => observer.disconnect();
    }

    // Other pages: no hero booking bar to watch, so show after a short scroll.
    function onScroll() {
      setVisible(window.scrollY > 320);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <div className={`sticky-book ${visible ? "sticky-book--visible" : ""}`} aria-hidden={!visible}>
      <a
        href={BOOKING_ENGINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="sticky-book-link"
        tabIndex={visible ? 0 : -1}
      >
        <span className="sticky-book-desktop">Check Availability</span>
        <span className="sticky-book-mobile">Book Direct</span>
      </a>
    </div>
  );
}
