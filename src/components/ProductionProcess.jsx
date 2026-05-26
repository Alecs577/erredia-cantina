import { motion } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';
import { PRODUCTION_STEPS } from '../data/winesData';
import { staggerContainer, revealUp } from '../utils/motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

const ICONS = {
  grape: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="h-8 w-8">
      <circle cx="8" cy="10" r="2.5" />
      <circle cx="14" cy="8" r="2.5" />
      <circle cx="16" cy="14" r="2.5" />
      <path d="M12 16v6" />
    </svg>
  ),
  barrel: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="h-8 w-8">
      <ellipse cx="12" cy="5" rx="7" ry="2.5" />
      <path d="M5 5v14c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V5" />
      <path d="M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" />
    </svg>
  ),
  bottle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="h-8 w-8">
      <path d="M9 3h6v3l2 4v11a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2V10l2-4V3z" />
      <path d="M9 7h6" />
    </svg>
  ),
};

export function ProductionProcess() {
  const { locale } = useLanguage();
  const t = translations[locale];

  return (
    <section id="processo" className="border-t border-cream/5 bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-gold">
            {t.process.eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-3xl text-cream md:text-4xl">{t.process.title}</h2>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8"
        >
          {PRODUCTION_STEPS.map((step, index) => (
            <motion.article
              key={step.id}
              variants={revealUp}
              className="group border-t border-cream/10 pt-8 text-center md:text-left"
            >
              <span className="font-serif text-sm text-gold/80">0{index + 1}</span>
              <div className="mx-auto mt-6 flex h-14 w-14 items-center justify-center text-gold md:mx-0">
                {ICONS[step.icon]}
              </div>
              <h3 className="mt-6 font-serif text-2xl text-cream">{step.title[locale]}</h3>
              <p className="mt-4 text-sm leading-relaxed text-cream-muted">
                {step.description[locale]}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
