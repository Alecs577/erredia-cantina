import { ScrollReveal } from './ScrollReveal';
import { WINERY } from '../data/winesData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

const PHONE_HREF = `tel:+39${WINERY.phone.replace(/\D/g, '')}`;
const MAPS_HREF = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(WINERY.mapQuery)}`;

function ContactRow({ label, children }) {
  return (
    <div className="border-b border-cream/10 py-5">
      <p className="text-[0.6rem] font-medium uppercase tracking-[0.3em] text-gold">{label}</p>
      <div className="mt-2 text-sm leading-relaxed text-cream md:text-base">{children}</div>
    </div>
  );
}

export function ContactSection() {
  const { locale } = useLanguage();
  const t = translations[locale];
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(WINERY.mapQuery)}&output=embed`;

  return (
    <section id="contatti" className="border-t border-cream/5 bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal className="max-w-2xl">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-gold">
            {t.contact.eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-3xl text-cream md:text-5xl">{t.contact.title}</h2>
          <p className="mt-6 text-sm leading-relaxed text-cream-muted md:text-base">
            {t.contact.description}
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <ScrollReveal className="lg:col-span-5">
            <div className="border-t border-cream/10">
              <ContactRow label={t.contact.addressLabel}>{WINERY.address}</ContactRow>
              <ContactRow label={t.contact.phoneLabel}>
                <a href={PHONE_HREF} className="transition-colors hover:text-gold">
                  {WINERY.phone}
                </a>
              </ContactRow>
              <ContactRow label={t.contact.websiteLabel}>
                <a
                  href={WINERY.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uppercase tracking-wider transition-colors hover:text-gold"
                >
                  errediaorganicwines.it
                </a>
              </ContactRow>
              <ContactRow label={t.contact.visitsLabel}>{t.contact.visitsText}</ContactRow>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={PHONE_HREF}
                className="inline-flex justify-center border border-gold/60 bg-gold/10 px-8 py-3.5 text-center text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-cream transition-all hover:border-gold hover:bg-gold/20"
              >
                {t.contact.callCta}
              </a>
              <a
                href={MAPS_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center border border-cream/20 px-8 py-3.5 text-center text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-cream-muted transition-all hover:border-cream/40 hover:text-cream"
              >
                {t.contact.directionsCta}
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-7" delay={0.12}>
            <div className="overflow-hidden border border-cream/10">
              <iframe
                title={t.contact.mapTitle}
                src={mapSrc}
                className="aspect-[4/3] w-full grayscale contrast-[0.9] opacity-85 lg:aspect-[16/10]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-4 text-right text-[0.6rem] uppercase tracking-[0.2em] text-cream-muted">
              {WINERY.name} · Manoppello Scalo (PE)
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-16 border-t border-cream/5 pt-10">
          <p className="max-w-3xl text-[0.6rem] leading-relaxed text-cream-muted/60">
            {t.contact.legal}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
