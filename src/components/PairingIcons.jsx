import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

const PAIRING_KEYS = {
  beef: 'beef',
  grill: 'grill',
  fish: 'fish',
  poultry: 'poultry',
  pasta: 'pasta',
  shellfish: 'shellfish',
  glass: 'glass',
};

const SYMBOLS = {
  beef: '🥩',
  grill: '🔥',
  fish: '🐟',
  poultry: '🍗',
  pasta: '🍝',
  shellfish: '🦐',
  glass: '🥂',
};

export function PairingIcons({ icons, title }) {
  const { locale } = useLanguage();
  const labels = translations[locale].pairing;

  return (
    <div className="mt-8 border-t border-cream/10 pt-6">
      <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-gold">{title}</p>
      <ul className="mt-4 flex flex-wrap gap-4">
        {icons.map((key) => {
          const labelKey = PAIRING_KEYS[key];
          const label = labels[labelKey];
          if (!label) return null;
          return (
            <li
              key={key}
              className="flex items-center gap-2 border border-cream/10 px-3 py-2 text-xs text-cream-muted"
            >
              <span aria-hidden className="text-base">
                {SYMBOLS[key]}
              </span>
              <span className="uppercase tracking-wider">{label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
