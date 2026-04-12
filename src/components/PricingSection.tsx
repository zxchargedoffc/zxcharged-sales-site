import { pricing } from '../content';
import { buyLink } from '../lib/purchase';

export function PricingSection() {
  return (
    <section className="section pricing-section" id="pricing">
      <div className="section-heading compact">
        <span className="section-kicker">Тарифы</span>
        <h2>Выберите срок доступа</h2>
        <p>
          Все ключи подходят для offline-активации клиента на устройстве
          покупателя.
        </p>
      </div>
      <div className="pricing-grid">
        {pricing.map((plan) => (
          <article
            className={`price-card ${plan.popular ? 'popular' : ''}`}
            key={plan.name}
          >
            <div className="plan-label">{plan.label}</div>
            <h3>Ключ на {plan.name}</h3>
            <div className="price">{plan.price}</div>
            <p>{plan.description}</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <a
              className="button button-plan"
              href={buyLink(plan.name)}
              target="_blank"
              rel="noreferrer"
            >
              Купить
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
