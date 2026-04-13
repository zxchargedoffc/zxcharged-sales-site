import type { MouseEvent } from 'react';
import { scrollToHash } from '../lib/hashScroll';

function handleAnchorClick(event: MouseEvent<HTMLAnchorElement>) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.altKey ||
    event.ctrlKey ||
    event.metaKey ||
    event.shiftKey
  ) {
    return;
  }

  const anchor = event.currentTarget;
  const hash = anchor.hash;
  const origin = anchor.origin;
  const pathname = anchor.pathname;

  if (origin !== window.location.origin || pathname !== window.location.pathname) {
    return;
  }

  if (scrollToHash(hash, { updateHistory: true })) {
    event.preventDefault();
  }
}

export function Header() {
  return (
    <header className="nav">
      <a className="brand" href="#top" aria-label="ZXCHARGED CLIENT" onClick={handleAnchorClick}>
        <span className="brand-mark">ZX</span>
        <span>ZXCHARGED</span>
      </a>
      <nav className="nav-links" aria-label="Навигация">
        <a href="#benefits" onClick={handleAnchorClick}>Преимущества</a>
        <a href="#pricing" onClick={handleAnchorClick}>Тарифы</a>
        <a href="#faq" onClick={handleAnchorClick}>FAQ</a>
      </nav>
      <a className="nav-cta" href="#pricing" onClick={handleAnchorClick}>
        Купить
      </a>
    </header>
  );
}
