import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { wines, WINE_TYPE_IDS } from '../data/winesData';
import { ScrollReveal } from './ScrollReveal';
import { TechnicalSheetModal } from './TechnicalSheetModal';
import { cn } from '../utils/cn';
import { staggerContainer, revealUp } from '../utils/motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { localizeWine } from '../utils/localizeWine';

export function WineCatalogue() {
  const [filter, setFilter] = useState('tutti');
  const [selectedId, setSelectedId] = useState(null);
  const { locale } = useLanguage();
  const t = translations[locale];

  const filtered = useMemo(() => {
    if (filter === 'tutti') return wines;
    return wines.filter((w) => w.type === filter);
  }, [filter]);

  const localizedWines = useMemo(
    () => filtered.map((w) => localizeWine(w, locale)),
    [filtered, locale],
  );

  const selectedWine = useMemo(() => {
    if (!selectedId) return null;
    const raw = wines.find((w) => w.id === selectedId);
    return raw ? localizeWine(raw, locale) : null;
  }, [selectedId, locale]);

  const filterTypes = WINE_TYPE_IDS.map((id) => ({
    id,
    label: t.catalogue.filters[id],
  }));

  return (
    <section id="catalogo" className="border-t border-cream/5 py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal className="max-w-2xl">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-gold">
            {t.catalogue.eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-3xl text-cream md:text-5xl">{t.catalogue.title}</h2>
          <p className="mt-6 text-sm leading-relaxed text-cream-muted">{t.catalogue.description}</p>
        </ScrollReveal>

        <ScrollReveal className="mt-12" delay={0.1}>
          <div className="flex flex-wrap gap-3">
            {filterTypes.map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => setFilter(type.id)}
                className={cn(
                  'border px-5 py-2.5 text-[0.65rem] uppercase tracking-[0.22em] transition-all',
                  filter === type.id
                    ? 'border-gold bg-gold/10 text-cream'
                    : 'border-cream/15 text-cream-muted hover:border-cream/30 hover:text-cream',
                )}
              >
                {type.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <motion.ul
          key={`${filter}-${locale}`}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mt-16 grid grid-cols-2 justify-items-center gap-x-4 gap-y-12 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-6"
        >
          {localizedWines.map((wine) => (
            <motion.li key={wine.id} variants={revealUp} className="w-full max-w-[220px]">
              <button
                type="button"
                onClick={() => setSelectedId(wine.id)}
                className="group flex w-full flex-col items-center"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-deep-black/40">
                  <img
                    src={wine.image}
                    alt={wine.shortName}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-contain p-1 transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <span className="absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <h3 className="mt-5 text-center font-serif text-base leading-snug text-cream md:text-lg">
                  {wine.shortName}
                </h3>
                <p className="mt-1 text-center text-[0.6rem] uppercase tracking-[0.2em] text-cream-muted">
                  {wine.denomination}
                </p>
              </button>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <TechnicalSheetModal wine={selectedWine} onClose={() => setSelectedId(null)} />
    </section>
  );
}
