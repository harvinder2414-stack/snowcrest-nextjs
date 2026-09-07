export default function WhatsAppFloat({ message = "Hi Snow Crest, I'd like to enquire about a stay." }) {
  const waNumber = "917018512267";
  const href = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
  return (
    <a className="wa-float" href={href} target="_blank" rel="noreferrer" aria-label="Message Snow Crest on WhatsApp">
      <span className="pulse"></span>
      <svg viewBox="0 0 32 32" fill="#fff" aria-hidden="true">
        <path d="M16 3C9 3 3.3 8.6 3.3 15.6c0 2.6.7 5 2 7.1L3 29l6.5-2.2c2 1.1 4.2 1.7 6.5 1.7 7 0 12.7-5.6 12.7-12.6C28.7 8.6 23 3 16 3zm0 23c-2.1 0-4.1-.6-5.8-1.6l-.4-.2-4 1.3 1.3-3.9-.3-.4c-1.2-1.8-1.8-3.9-1.8-6.1 0-6 4.9-10.9 11-10.9s11 4.9 11 10.9S22.1 26 16 26zm6-8.2c-.3-.2-1.9-1-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-2-1.8-2.3-.2-.3 0-.5.1-.6.1-.1.3-.4.5-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.7-.9-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.1.2 2.2 3.4 5.4 4.7.7.3 1.3.5 1.8.7.7.2 1.4.2 1.9.1.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.2-.6-.4z"/>
      </svg>
      <span className="wa-tip">Message us on WhatsApp</span>
    </a>
  );
}
