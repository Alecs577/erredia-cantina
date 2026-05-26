import { useLanguage } from '../context/LanguageContext';
import { cn } from '../utils/cn';

export function LanguageToggle({ className }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={cn(
        'inline-flex items-center border border-cream/20 text-[0.6rem] uppercase tracking-[0.2em]',
        className,
      )}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLocale('it')}
        className={cn(
          'px-3 py-2 transition-colors',
          locale === 'it' ? 'bg-gold/15 text-cream' : 'text-cream-muted hover:text-cream',
        )}
        aria-pressed={locale === 'it'}
      >
        IT
      </button>
      <span className="h-4 w-px bg-cream/20" aria-hidden />
      <button
        type="button"
        onClick={() => setLocale('en')}
        className={cn(
          'px-3 py-2 transition-colors',
          locale === 'en' ? 'bg-gold/15 text-cream' : 'text-cream-muted hover:text-cream',
        )}
        aria-pressed={locale === 'en'}
      >
        EN
      </button>
    </div>
  );
}
