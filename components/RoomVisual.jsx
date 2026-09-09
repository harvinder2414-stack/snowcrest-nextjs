import ScenicArt from "./ScenicArt";
import DuplexArt from "./DuplexArt";

// Renders the first real photo for a room if one exists; falls back to a
// generated illustration for room types that don't have photos yet.
// Drop real photos into public/images and add them to the room's `photos`
// array in lib/rooms.js — the real photo takes over automatically and this
// component's fallback branch is simply never reached for that room again.

export default function RoomVisual({ room, tone = "dusk", seed = 1 }) {
  if (room.photos && room.photos.length > 0) {
    return (
      <img
        className="photo"
        src={room.photos[0]}
        alt={`${room.name} at Luxe Vista by Snow Crest`}
        loading="lazy"
      />
    );
  }

  // Duplex Room gets a dedicated wood-toned loft illustration matching the
  // reference photo the property sent; any other future no-photo room falls
  // back to the generic mountain illustration.
  if (room.slug === "duplex-room") {
    return <DuplexArt />;
  }

  return <ScenicArt tone={tone} seed={seed} />;
}
