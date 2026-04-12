export function HeroSection() {
  return (
    <section className="hero section" id="top">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="pulse-dot" />
          Premium PvP Client
        </div>
        <h1>ZXCHARGED CLIENT</h1>
        <p className="hero-lead">
          Чистый, быстрый и визуально дорогой PvP-клиент с продуманным HUD,
          offline-активацией ключей и стабильным runtime для ежедневной игры.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#pricing">
            Купить ключ
          </a>
          <a className="button button-secondary" href="#benefits">
            Смотреть преимущества
          </a>
        </div>
        <div className="hero-metrics" aria-label="Ключевые преимущества">
          <div>
            <strong>4</strong>
            <span>тарифа</span>
          </div>
          <div>
            <strong>Offline</strong>
            <span>активация</span>
          </div>
          <div>
            <strong>PvP</strong>
            <span>ориентир</span>
          </div>
        </div>
      </div>

      <div className="hero-card" aria-label="Витрина клиента">
        <div className="client-window">
          <div className="window-top">
            <span />
            <span />
            <span />
          </div>
          <div className="client-preview">
            <div className="hud-pill">ZXCHARGED / 1.16.5</div>
            <div className="target-card">
              <div className="avatar" />
              <div>
                <div className="target-name">Target HUD</div>
                <div className="target-line" />
                <div className="target-line small" />
              </div>
            </div>
            <div className="module-list">
              <span>KillAura</span>
              <span>Trails</span>
              <span>Threat Arc</span>
              <span>HUD</span>
            </div>
            <div className="sweep-line" />
          </div>
        </div>
      </div>
    </section>
  );
}
