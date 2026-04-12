import { faqs } from '../content';

export function FaqSection() {
  return (
    <section className="section faq-section" id="faq">
      <div className="section-heading compact">
        <span className="section-kicker">FAQ</span>
        <h2>Вопросы перед покупкой</h2>
      </div>
      <div className="faq-list">
        {faqs.map((item) => (
          <details className="faq-item" key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
