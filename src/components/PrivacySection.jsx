import { ScrollReveal } from './ScrollReveal';
import { WINERY } from '../data/winesData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

export function PrivacySection() {
  const { locale } = useLanguage();
  const t = translations[locale].privacy;
  const footer = translations[locale].footer;

  return (
    <section id="privacy" className="border-t border-cream/5 bg-deep-black py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <ScrollReveal>
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-gold">
            {t.eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-2xl text-cream md:text-3xl">{t.title}</h2>
          <p className="mt-2 text-xs text-cream-muted">{t.updated}</p>
          <p className="mt-6 text-sm leading-relaxed text-cream-muted">
            {footer.brandPrefix}{' '}
            <a
              href={WINERY.parentBrandUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream transition-colors hover:text-gold"
            >
              {footer.brandLink}
            </a>
            .
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-10 space-y-8" delay={0.08}>
          {t.sections.map((section) => (
            <article key={section.title}>
              <h3 className="font-serif text-lg text-cream">{section.title}</h3>
              <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-cream-muted">
                {section.body}
              </p>
            </article>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
