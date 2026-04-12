import { BenefitsSection } from './components/BenefitsSection';
import { Footer } from './components/Footer';
import { FaqSection } from './components/FaqSection';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PricingSection } from './components/PricingSection';

function App() {
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
