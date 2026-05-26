import { translations, TECHNICAL_FIELD_KEYS } from '../i18n/translations';

/** Restituisce il vino con testi risolti per la lingua corrente */
export function localizeWine(wine, locale) {
  const sheet = wine.technicalSheet[locale];
  const t = translations[locale].organoleptic;

  const organoleptic = {
    color: {
      label: t.color,
      value: wine.organoleptic.color.value[locale],
      intensity: wine.organoleptic.color.intensity,
    },
    scent: {
      label: t.scent,
      value: wine.organoleptic.scent.value[locale],
      intensity: wine.organoleptic.scent.intensity,
    },
    flavor: {
      label: t.flavor,
      value: wine.organoleptic.flavor.value[locale],
      intensity: wine.organoleptic.flavor.intensity,
    },
  };

  return {
    id: wine.id,
    type: wine.type,
    image: wine.image,
    denomination: wine.denomination,
    name: wine.name,
    shortName: wine.shortName[locale],
    technicalSheet: sheet,
    organoleptic,
    pairing: {
      text: wine.pairing[locale],
      icons: wine.pairing.icons,
    },
  };
}

export function getTechnicalFields(locale) {
  const labels = translations[locale].technicalFields;
  return TECHNICAL_FIELD_KEYS.map((key) => ({ key, label: labels[key] }));
}
