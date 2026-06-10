import { WINERY } from '../data/winesData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

export function Footer() {
  const { locale } = useLanguage();
  const t = translations[locale];

  return (
    <footer className="border-t border-cream/5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left lg:px-10">
        <p className="text-[0.65rem] uppercase tracking-[0.2em] text-cream-muted">
          © {new Date().getFullYear()} {WINERY.name} — {t.footer.rights}
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-8">
          <p className="text-[0.65rem] tracking-[0.08em] text-cream-muted normal-case">
            {t.footer.brandPrefix}{' '}
            <a
              href={WINERY.parentBrandUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase tracking-[0.2em] transition-colors hover:text-gold"
            >
              {t.footer.brandLink}
            </a>
          </p>
          <a
            href="#privacy"
            className="text-[0.65rem] uppercase tracking-[0.2em] text-cream-muted transition-colors hover:text-gold"
          >
            {t.footer.privacy}
          </a>
          <p className="text-[0.65rem] uppercase tracking-[0.2em] text-cream-muted">
            {WINERY.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
