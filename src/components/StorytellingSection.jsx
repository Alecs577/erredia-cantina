import { ScrollReveal } from './ScrollReveal';
import { STORY_CONTENT } from '../data/winesData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

export function StorytellingSection() {
  const { locale } = useLanguage();
  const t = translations[locale];
  const { heritage, innovation } = STORY_CONTENT;

  return (
    <section id="storia" className="border-t border-cream/5 bg-deep-black py-24 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-12 lg:gap-8 lg:px-10">
        <ScrollReveal className="lg:col-span-5">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-gold">
            {t.story.eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-3xl text-cream md:text-4xl lg:text-5xl">
            {heritage.title[locale]}
          </h2>
          <div className="mt-3 h-px w-16 bg-burgundy" />
          <p className="mt-8 whitespace-pre-line text-sm leading-[1.9] text-cream-muted md:text-base">
            {heritage.body[locale]}
          </p>
        </ScrollReveal>

        <ScrollReveal className="lg:col-span-7" delay={0.12}>
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-8">
            <div className="relative aspect-[4/5] overflow-hidden lg:col-span-3">
              <img
                src="/images/terroir.webp"
                alt="ERREDIA terroir"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover grayscale-[0.35] transition-all duration-700 hover:grayscale-0"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-cream/10" />
            </div>

            <div className="flex flex-col justify-center lg:col-span-2">
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-burgundy">
                {innovation.title[locale]}
              </p>
              <h3 className="mt-3 font-serif text-2xl text-cream">
                {innovation.innovationTitle[locale]}
              </h3>
              <p className="mt-6 text-sm leading-[1.85] text-cream-muted">
                {innovation.body[locale]}
              </p>
            </div>
          </div>

          <div className="relative mt-10 aspect-[21/9] overflow-hidden">
            <img
              src={innovation.image}
              alt="ERREDIA label"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-center opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-deep-black/80 via-transparent to-deep-black/40" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
