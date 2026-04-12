import { benefits } from '../content';

export function BenefitsSection() {
  return (
    <section className="section benefits" id="benefits">
      <div className="section-heading">
        <span className="section-kicker">Почему выбирают</span>
        <h2>Сделано для PvP, а не для витрины</h2>
        <p>
          Сайт продаёт продукт, но сам клиент должен ощущаться уверенно в игре:
          быстро, читаемо, аккуратно и без визуальной каши.
        </p>
      </div>
      <div className="benefit-grid">
        {benefits.map((benefit) => (
          <article className="glass-card benefit-card" key={benefit.title}>
            <div className="card-index" />
            <h3>{benefit.title}</h3>
            <p>{benefit.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
