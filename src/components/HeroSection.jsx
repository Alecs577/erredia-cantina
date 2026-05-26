import { motion } from 'framer-motion';
import { revealFade, revealUp } from '../utils/motion';
import { WINERY } from '../data/winesData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

export function HeroSection() {
  const { locale } = useLanguage();
  const t = translations[locale];

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero.webp"
          alt="ERREDIA vineyards"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full scale-105 object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black/50 via-deep-black/35 to-deep-black" />
        <div className="absolute inset-0 bg-burgundy/10 mix-blend-multiply" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-24 pt-32 lg:px-10 lg:pb-32">
        <motion.p
          variants={revealFade}
          initial="hidden"
          animate="visible"
          className="mb-4 text-[0.65rem] font-medium uppercase tracking-[0.35em] text-gold"
        >
          {WINERY.tagline} · {t.hero.eyebrow}
        </motion.p>

        <motion.h1
          variants={revealUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
          className="max-w-4xl font-serif text-4xl leading-[1.1] text-cream sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {t.hero.titleLine1}
          <br />
          <span className="italic text-cream/90">{t.hero.titleLine2}</span>
        </motion.h1>

        <motion.p
          variants={revealUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="mt-8 max-w-xl text-sm leading-relaxed text-cream-muted md:text-base"
        >
          {t.winery.description}
        </motion.p>

        <motion.div
          variants={revealUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.45 }}
          className="mt-12 flex flex-wrap items-center gap-6"
        >
          <a
            href="#catalogo"
            className="inline-flex items-center border border-gold/60 bg-gold/10 px-8 py-3.5 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-cream transition-all hover:border-gold hover:bg-gold/20"
          >
            {t.hero.ctaCatalogue}
          </a>
          <a
            href="#storia"
            className="text-[0.65rem] uppercase tracking-[0.28em] text-cream-muted transition-colors hover:text-cream"
          >
            {t.hero.ctaStory}
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <div className="h-14 w-px bg-gradient-to-b from-gold/80 to-transparent" />
      </motion.div>
    </section>
  );
}
