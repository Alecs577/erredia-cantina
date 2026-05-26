import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { OrganolepticProfile } from './OrganolepticProfile';
import { PairingIcons } from './PairingIcons';
import { cn } from '../utils/cn';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { getTechnicalFields } from '../utils/localizeWine';

export function TechnicalSheetModal({ wine, onClose }) {
  const { locale } = useLanguage();
  const t = translations[locale];
  const technicalFields = getTechnicalFields(locale);

  useEffect(() => {
    if (!wine) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [wine, onClose]);

  return (
    <AnimatePresence>
      {wine && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label={t.modal.closeAria}
            className="absolute inset-0 bg-deep-black/85 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="wine-sheet-title"
            className={cn(
              'relative z-10 flex max-h-[94vh] w-full max-w-6xl flex-col overflow-hidden',
              'border border-cream/10 bg-surface shadow-2xl sm:max-h-[90vh]',
            )}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <header className="flex items-start justify-between gap-4 border-b border-cream/10 px-6 py-5 lg:px-10">
              <div>
                <p className="text-[0.6rem] uppercase tracking-[0.3em] text-gold">
                  {t.modal.technicalSheet} · {wine.denomination}
                </p>
                <h2
                  id="wine-sheet-title"
                  className="mt-1 font-serif text-2xl text-cream md:text-3xl"
                >
                  {wine.name}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="shrink-0 border border-cream/20 px-3 py-2 text-[0.6rem] uppercase tracking-[0.25em] text-cream-muted hover:border-gold hover:text-cream"
              >
                {t.modal.close}
              </button>
            </header>

            <div className="overflow-y-auto">
              <div className="grid lg:grid-cols-2">
                <div className="border-b border-cream/10 bg-deep-black/50 p-6 lg:border-b-0 lg:border-r lg:p-10">
                  <div className="flex min-h-[280px] items-center justify-center bg-deep-black/30 p-4 sm:min-h-[320px]">
                    <img
                      src={wine.image}
                      alt={wine.name}
                      loading="lazy"
                      decoding="async"
                      className="max-h-[min(380px,52vh)] w-full max-w-md object-contain"
                    />
                  </div>
                  <OrganolepticProfile profile={wine.organoleptic} title={t.modal.organoleptic} />
                </div>

                <div className="p-6 lg:p-10">
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-burgundy">
                    {t.modal.analysis}
                  </p>
                  <table className="mt-6 w-full text-left text-sm">
                    <tbody>
                      {technicalFields.map(({ key, label }) => (
                        <tr
                          key={key}
                          className="border-b border-cream/5 align-top transition-colors hover:bg-cream/[0.02]"
                        >
                          <th className="w-[42%] py-3 pr-4 text-[0.65rem] font-medium uppercase tracking-wider text-cream-muted">
                            {label}
                          </th>
                          <td className="py-3 leading-relaxed text-cream/90">
                            {wine.technicalSheet[key]}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <PairingIcons icons={wine.pairing.icons} title={t.modal.pairings} />
                  <p className="mt-4 text-sm italic text-cream-muted">{wine.pairing.text}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
