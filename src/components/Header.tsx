export function Header() {
  return (
    <header className="nav">
      <a className="brand" href="#top" aria-label="ZXCHARGED CLIENT">
        <span className="brand-mark">ZX</span>
        <span>ZXCHARGED</span>
      </a>
      <nav className="nav-links" aria-label="Навигация">
        <a href="#benefits">Преимущества</a>
        <a href="#pricing">Тарифы</a>
        <a href="#faq">FAQ</a>
      </nav>
      <a className="nav-cta" href="#pricing">
        Купить
      </a>
    </header>
  );
}
