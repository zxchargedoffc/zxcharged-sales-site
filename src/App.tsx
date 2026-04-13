import { useEffect } from 'react';
import { BenefitsSection } from './components/BenefitsSection';
import { Footer } from './components/Footer';
import { FaqSection } from './components/FaqSection';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PricingSection } from './components/PricingSection';
import { scrollToCurrentHash } from './lib/hashScroll';
import { OfferPage } from './pages/OfferPage';

function isOfferRoute() {
  return window.location.pathname.replace(/\/+$/, '') === '/offer';
}

function App() {
  const offerRoute = isOfferRoute();

  useEffect(() => {
    document.title = offerRoute
      ? 'Публичная оферта — ZXCHARGED CLIENT'
      : 'ZXCHARGED CLIENT — Premium PvP Client';

    if (offerRoute) {
      return;
    }

    scrollToCurrentHash('auto');

    const handleHashChange = () => {
      scrollToCurrentHash('smooth');
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [offerRoute]);

  return (
    <main className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <Header />
      {offerRoute ? (
        <OfferPage />
      ) : (
        <>
          <HeroSection />
          <BenefitsSection />
          <PricingSection />
          <FaqSection />
        </>
      )}
      <Footer />
    </main>
  );
}

export default App;
