import { faqs } from "@/lib/faqs";

export default function FAQAccordion() {
  return (
    <div className="faq-list">
      {faqs.map((item, i) => (
        <details key={item.question} className="faq-item" {...(i === 0 ? { open: true } : {})}>
          <summary>
            <span>{item.question}</span>
            <span className="faq-icon" aria-hidden="true">
              +
            </span>
          </summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
