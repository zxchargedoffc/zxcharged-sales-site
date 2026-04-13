import { useEffect } from 'react';
import { BenefitsSection } from './components/BenefitsSection';
import { Footer } from './components/Footer';
import { FaqSection } from './components/FaqSection';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PricingSection } from './components/PricingSection';
import { scrollToCurrentHash } from './lib/hashScroll';

function App() {
  useEffect(() => {
    scrollToCurrentHash('auto');

    const handleHashChange = () => {
      scrollToCurrentHash('smooth');
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <main className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <Header />
      <HeroSection />
      <BenefitsSection />
      <PricingSection />
      <FaqSection />
      <Footer />
    </main>
  );
}

export default App;
