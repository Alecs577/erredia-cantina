import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';
import { WINERY } from '../data/winesData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { LanguageToggle } from './LanguageToggle';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { locale } = useLanguage();
  const t = translations[locale];

  const links = useMemo(
    () => [
      { href: '#storia', label: t.nav.story },
      { href: '#processo', label: t.nav.process },
      { href: '#catalogo', label: t.nav.catalogue },
      { href: '#contatti', label: t.nav.contact },
    ],
    [t],
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-all duration-500',
        scrolled
          ? 'border-cream/10 bg-deep-black/55 backdrop-blur-xl'
          : 'border-transparent bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 lg:h-[4.5rem] lg:px-10">
        <a href="#" className="font-serif text-xl tracking-[0.2em] text-cream lg:text-2xl">
          {WINERY.name}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-10">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-cream-muted transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <LanguageToggle />
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <LanguageToggle />
          <button
            type="button"
            aria-label="Menu"
            className="flex flex-col gap-1.5"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={cn(
                'h-px w-6 bg-cream transition-transform',
                open && 'translate-y-[7px] rotate-45',
              )}
            />
            <span className={cn('h-px w-6 bg-cream transition-opacity', open && 'opacity-0')} />
            <span
              className={cn(
                'h-px w-6 bg-cream transition-transform',
                open && '-translate-y-[7px] -rotate-45',
              )}
            />
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="border-t border-cream/10 bg-deep-black/90 backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col gap-6 px-6 py-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-xs uppercase tracking-[0.25em] text-cream"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
