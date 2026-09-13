import BookingWidget from "./BookingWidget";

// A lightweight modal that needs no client-side open/close state: it's
// shown whenever the URL fragment is #book-now (via the :target CSS
// pseudo-class), so any link on the site — the navbar's "Book Now" button,
// a hero CTA, anywhere — can open it with a plain href="#book-now".
// The close button/backdrop link back to "#" to un-target it.

export default function BookingModal() {
  return (
    <div id="book-now" className="modal-overlay">
      <a href="#" className="modal-backdrop" aria-label="Close"></a>
      <div className="modal-card" role="dialog" aria-modal="true" aria-label="Check availability">
        <a href="#" className="modal-close" aria-label="Close">
          ✕
        </a>
        <BookingWidget />
      </div>
    </div>
  );
}
