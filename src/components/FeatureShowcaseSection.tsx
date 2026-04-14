const showcaseCards = [
  {
    title: 'Стабильный runtime',
    text: 'Лёгкий запуск, аккуратные лимиты эффектов и спокойная работа интерфейса во время игры.'
  },
  {
    title: 'Offline-активация',
    text: 'Ключ активируется локально на устройстве, без постоянной зависимости от внешней панели.'
  },
  {
    title: 'Удобный HUD',
    text: 'Информация собрана в чистые glass-панели, чтобы не перегружать экран в PvP.'
  },
  {
    title: 'Быстрая загрузка',
    text: 'Loader подготавливает клиент без лишних действий со стороны пользователя.'
  },
  {
    title: 'Актуальные обновления',
    text: 'Версии можно выпускать через release-flow, сохраняя понятный путь обновления.'
  },
  {
    title: 'PvP-ориентированный UX',
    text: 'Визуальные акценты помогают лучше читать бой, не превращая интерфейс в шум.'
  }
];

const moduleRows = [
  { name: 'HUD', status: 'чистый слой' },
  { name: 'Trails', status: 'визуальный след' },
  { name: 'Target Info', status: 'инфо о цели' },
  { name: 'Threat Arc', status: 'боевой акцент' }
];

export function FeatureShowcaseSection() {
  return (
    <section className="section showcase-section" id="capabilities">
      <div className="section-heading showcase-heading">
        <span className="section-kicker">Возможности клиента</span>
        <h2>Премиальный слой для ежедневного PvP</h2>
        <p>
          ZXCHARGED CLIENT делает упор на удобство, визуальную чистоту и предсказуемый запуск: ключ, loader, HUD и
          игровые акценты собраны в один аккуратный поток.
        </p>
      </div>

      <div className="showcase-layout">
        <article className="glass-card showcase-main">
          <div className="showcase-main-copy">
            <div className="showcase-badge">готов к игре</div>
            <h3>Один клиент, понятный путь запуска</h3>
            <p>
              Пользователь получает ключ, активирует доступ и открывает клиент без лишних панелей. Внутри — спокойный
              runtime, читаемый HUD и визуальные элементы, которые поддерживают PvP-ритм.
            </p>
          </div>

          <div className="showcase-flow" aria-label="Путь пользователя">
            <span>Ключ</span>
            <i />
            <span>Loader</span>
            <i />
            <span>Клиент</span>
          </div>

          <div className="showcase-console" aria-hidden="true">
            <div className="console-top">
              <span />
              <span />
              <span />
              <strong>ZXCHARGED runtime</strong>
            </div>
            <div className="console-grid">
              <div className="console-card console-card-wide">
                <small>Статус</small>
                <strong>активирован</strong>
              </div>
              <div className="console-card">
                <small>HUD</small>
                <strong>glass</strong>
              </div>
              <div className="console-card">
                <small>Запуск</small>
                <strong>быстрый</strong>
              </div>
            </div>
          </div>
        </article>

        <aside className="glass-card showcase-side" aria-label="Демонстрационная панель клиента">
          <div className="showcase-avatar" aria-hidden="true">
            <svg viewBox="0 0 120 160" role="img" aria-label="Силуэт интерфейса клиента">
              <path d="M45 20h30v50H45z" />
              <path d="M24 72l21 8v54h30V80l21-8 12 40-24 6-7-24v48H43V94l-7 24-24-6 12-40z" />
            </svg>
          </div>

          <div className="showcase-module-list">
            {moduleRows.map((row) => (
              <div className="showcase-module-row" key={row.name}>
                <div>
                  <strong>{row.name}</strong>
                  <span>{row.status}</span>
                </div>
                <em>on</em>
              </div>
            ))}
          </div>

          <div className="showcase-side-footer">
            <strong>PvP UX</strong>
            <span>чистый интерфейс, мягкие акценты и минимум визуального шума</span>
          </div>
        </aside>
      </div>

      <div className="showcase-cards">
        {showcaseCards.map((card) => (
          <article className="glass-card showcase-mini-card" key={card.title}>
            <span className="showcase-dot" />
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
