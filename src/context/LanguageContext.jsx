import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'erredia-locale';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState(() => {
    if (typeof window === 'undefined') return 'it';
    return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'it';
  });

  useEffect(() => {
    document.documentElement.lang = locale;
    localStorage.setItem(STORAGE_KEY, locale);
    document.title =
      locale === 'it'
        ? "ERREDIA | Vini Biologici d'Abruzzo"
        : 'ERREDIA | Organic Wines of Abruzzo';
  }, [locale]);

  const setLocale = useCallback((next) => {
    setLocaleState(next === 'en' ? 'en' : 'it');
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => (prev === 'it' ? 'en' : 'it'));
  }, []);

  const value = useMemo(
    () => ({ locale, setLocale, toggleLocale, isEn: locale === 'en' }),
    [locale, setLocale, toggleLocale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
