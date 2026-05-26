import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { translations } from './i18n/translations';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StorytellingSection } from './components/StorytellingSection';
import { ProductionProcess } from './components/ProductionProcess';
import { WineCatalogue } from './components/WineCatalogue';
import { ContactSection } from './components/ContactSection';
import { PrivacySection } from './components/PrivacySection';
import { Footer } from './components/Footer';

function AppShell() {
  const { locale } = useLanguage();
  const t = translations[locale];

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:border focus:border-gold focus:bg-deep-black focus:px-4 focus:py-2 focus:text-cream"
      >
        {t.a11y.skip}
      </a>
      <Navbar />
      <main id="main">
        <HeroSection />
        <StorytellingSection />
        <ProductionProcess />
        <WineCatalogue />
        <ContactSection />
        <PrivacySection />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppShell />
    </LanguageProvider>
  );
}
