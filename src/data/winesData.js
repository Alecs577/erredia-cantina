/**
 * Catalogo ERREDIA — dati dal PDF ufficiale.
 * Immagini: foto ufficiali prodotto in /public/images/wines/.
 */

export const WINERY = {
  name: 'ERREDIA',
  tagline: 'RDA — Radica Domenico Angelo',
  address: 'Via dei Vigneti n. 4, 65024 Manoppello Scalo (PE), Italia',
  phone: '085.8561902',
  website: 'https://www.errediaorganicwines.it',
  mapQuery: 'Via dei Vigneti 4, Manoppello Scalo PE',
};

export const WINE_TYPE_IDS = ['tutti', 'rosso', 'rosato', 'bianco'];

export const wines = [
  {
    id: 'montepulciano-doc',
    name: "Montepulciano d'Abruzzo DOC",
    shortName: { it: 'Montepulciano DOC', en: 'Montepulciano DOC' },
    denomination: 'DOC',
    type: 'rosso',
    image: '/images/wines/montepulciano.webp',
    pairing: {
      it: 'Carni rosse e grigliate miste',
      en: 'Red meats and mixed grilled meats',
      icons: ['beef', 'grill'],
    },
    organoleptic: {
      color: {
        value: {
          it: 'Rosso rubino tendente al violaceo',
          en: 'Ruby red tending towards violet',
        },
        intensity: 85,
      },
      scent: {
        value: { it: 'Intenso, vinoso', en: 'Intense, vinous' },
        intensity: 80,
      },
      flavor: {
        value: { it: 'Giustamente tannico', en: 'Rightly tannic' },
        intensity: 72,
      },
    },
    technicalSheet: {
      it: {
        tipologia: 'Rosso',
        vitigno: 'Montepulciano 100%',
        vinificazione:
          'Fermentazione con macerazione delle vinacce a temperatura controllata',
        affinamento: 'Acciaio',
        colore: 'Rosso rubino tendente al violaceo',
        profumo: 'Intenso, vinoso',
        sapore: 'Giustamente tannico',
        gradazione: '12/13% vol',
        temperatura: '18 °C',
        terreno: 'Argilloso-calcareo sciolto e profondo',
        esposizione: 'Sud / Sud-Est',
        altitudine: '170 mt slm',
        allevamento: 'Filare a doppia cortina',
        potatura: 'Cordone speronato a 2 gemme',
        densita: '2.500 piante/ha',
        produzione: '140 Qli/ha',
        raccolta: 'A mano; settembre/ottobre',
      },
      en: {
        tipologia: 'Red',
        vitigno: 'Montepulciano 100%',
        vinificazione:
          'Fermentation at controlled temperature with maceration of the marc',
        affinamento: 'Steel',
        colore: 'Ruby red tending towards violet',
        profumo: 'Intense, vinous',
        sapore: 'Rightly tannic',
        gradazione: '12/13% vol',
        temperatura: '18 °C',
        terreno: 'Clayey-calcareous, loose and deep',
        esposizione: 'South / South-East',
        altitudine: '170 m a.s.l.',
        allevamento: 'Double curtain row',
        potatura: 'Two-bud spur-pruned cordon',
        densita: '2,500 plants/ha',
        produzione: '140 quintals/ha',
        raccolta: 'Hand-picked; September/October',
      },
    },
  },
  {
    id: 'cerasuolo-doc',
    name: "Cerasuolo d'Abruzzo DOC",
    shortName: { it: 'Cerasuolo DOC', en: 'Cerasuolo DOC' },
    denomination: 'DOC',
    type: 'rosato',
    image: '/images/wines/cerasuolo.webp',
    pairing: {
      it: 'Primi piatti saporiti di pesce, carne bianca',
      en: 'Savory fish first courses, white meat',
      icons: ['fish', 'poultry'],
    },
    organoleptic: {
      color: {
        value: { it: 'Rosso ciliegia vivo', en: 'Vivid cherry-red' },
        intensity: 78,
      },
      scent: {
        value: {
          it: 'Frutti di bosco, rosa canina',
          en: 'Red berry fruits, dog rose',
        },
        intensity: 75,
      },
      flavor: {
        value: { it: 'Fresco, fruttato', en: 'Fresh, fruity' },
        intensity: 68,
      },
    },
    technicalSheet: {
      it: {
        tipologia: 'Rosato',
        vitigno: 'Montepulciano 100%',
        vinificazione:
          'Fermentazione a temperatura controllata in assenza di vinacce',
        affinamento: 'Acciaio',
        colore: 'Rosso ciliegia vivo',
        profumo: 'Frutti di bosco a bacca rossa e rosa canina',
        sapore: 'Fresco, fruttato',
        gradazione: '12,5/13% vol',
        temperatura: '14/16 °C',
        terreno: 'Argilloso-calcareo sciolto e profondo',
        esposizione: 'Sud',
        altitudine: '120 mt slm',
        allevamento: 'Filare a doppia cortina',
        potatura: 'Cordone speronato a 2 gemme',
        densita: '2.500 piante/ha',
        produzione: '120 Qli/ha',
        raccolta: 'A mano; settembre',
      },
      en: {
        tipologia: 'Rosé',
        vitigno: 'Montepulciano 100%',
        vinificazione: 'Fermentation at controlled temperature without marc',
        affinamento: 'Steel',
        colore: 'Vivid cherry-red',
        profumo: 'Red berry fruits, elegant',
        sapore: 'Fresh, fruity',
        gradazione: '12.5/13% vol',
        temperatura: '14/16 °C',
        terreno: 'Clayey-calcareous, loose and deep',
        esposizione: 'South',
        altitudine: '120 m a.s.l.',
        allevamento: 'Double curtain row',
        potatura: 'Two-bud spur-pruned cordon',
        densita: '2,500 plants/ha',
        produzione: '120 quintals/ha',
        raccolta: 'Hand-picked; September',
      },
    },
  },
  {
    id: 'trebbiano-doc',
    name: "Trebbiano d'Abruzzo DOC",
    shortName: { it: 'Trebbiano DOC', en: 'Trebbiano DOC' },
    denomination: 'DOC',
    type: 'bianco',
    image: '/images/wines/trebbiano.webp',
    pairing: {
      it: 'Primi piatti leggeri e di pesce',
      en: 'Light and fish first courses',
      icons: ['fish', 'pasta'],
    },
    organoleptic: {
      color: {
        value: {
          it: 'Giallo paglierino, riflessi verdolini',
          en: 'Straw yellow, greenish reflections',
        },
        intensity: 70,
      },
      scent: {
        value: {
          it: 'Frutta gialla, fiori di campo',
          en: 'Yellow fruits, wild flowers',
        },
        intensity: 72,
      },
      flavor: {
        value: { it: 'Fresco, fruttato', en: 'Fresh, fruity' },
        intensity: 65,
      },
    },
    technicalSheet: {
      it: {
        tipologia: 'Bianco',
        vitigno: 'Trebbiano 100%',
        vinificazione:
          'Fermentazione a temperatura controllata in assenza di vinacce',
        affinamento: 'Acciaio',
        colore: 'Giallo paglierino, riflessi verdolini',
        profumo: 'Frutta gialla, fiori di campo',
        sapore: 'Fresco, fruttato',
        gradazione: '11,5/12,5% vol',
        temperatura: '8/10 °C',
        terreno: 'Argilloso-calcareo sciolto e profondo',
        esposizione: 'Sud / Sud-Est',
        altitudine: '140 mt slm',
        allevamento: 'Filare a doppia cortina',
        potatura: 'Cordone speronato a 2 gemme',
        densita: '2.500 piante/ha',
        produzione: '140 Qli/ha',
        raccolta: 'A mano; settembre',
      },
      en: {
        tipologia: 'White',
        vitigno: 'Trebbiano 100%',
        vinificazione: 'Fermentation at controlled temperature without marc',
        affinamento: 'Steel',
        colore: 'Straw yellow, greenish reflections',
        profumo: 'Yellow fruits, wild flowers',
        sapore: 'Fresh, fruity',
        gradazione: '11.5/12.5% vol',
        temperatura: '8/10 °C',
        terreno: 'Clayey-calcareous, loose and deep',
        esposizione: 'South / South-East',
        altitudine: '140 m a.s.l.',
        allevamento: 'Double curtain row',
        potatura: 'Two-bud spur-pruned cordon',
        densita: '2,500 plants/ha',
        produzione: '140 quintals/ha',
        raccolta: 'Hand-picked; September',
      },
    },
  },
  {
    id: 'pecorino-igt',
    name: 'Pecorino IGT Colline Pescaresi',
    shortName: { it: 'Pecorino IGT', en: 'Pecorino IGT' },
    denomination: 'IGT Colline Pescaresi',
    type: 'bianco',
    image: '/images/wines/pecorino.webp',
    pairing: {
      it: 'Primi di pesce, crostacei in salse, aperitivo',
      en: 'Fish first courses, crustaceans with sauces, aperitif',
      icons: ['fish', 'shellfish', 'glass'],
    },
    organoleptic: {
      color: {
        value: {
          it: 'Giallo con venature verdi',
          en: 'Yellow with green veins',
        },
        intensity: 74,
      },
      scent: {
        value: {
          it: 'Fruttato, note agrumate, finale balsamico',
          en: 'Fruity, citrus notes, slight balsamic finish',
        },
        intensity: 82,
      },
      flavor: {
        value: {
          it: 'Fresco, fruttato, sapido',
          en: 'Fresh, fruity, sapid',
        },
        intensity: 76,
      },
    },
    technicalSheet: {
      it: {
        tipologia: 'Bianco',
        vitigno: 'Pecorino 100%',
        vinificazione:
          'Fermentazione a temperatura controllata in assenza di vinacce',
        affinamento: 'Acciaio',
        colore: 'Giallo con venature verdi',
        profumo: 'Fruttato, con note agrumate e finale balsamico',
        sapore: 'Fresco, fruttato, sapido',
        gradazione: '12/12,5% vol',
        temperatura: '8/12 °C',
        terreno: 'Calcareo con venature di argilla e sabbia',
        esposizione: 'Sud-Ovest',
        altitudine: '180 mt slm',
        allevamento: 'Filare a doppia cortina',
        potatura: 'Cordone speronato a 2 gemme',
        densita: '2.500 piante/ha',
        produzione: '120 Qli/ha',
        raccolta: 'A mano; prima settimana di settembre',
      },
      en: {
        tipologia: 'White',
        vitigno: 'Pecorino 100%',
        vinificazione: 'Fermentation at controlled temperature without marc',
        affinamento: 'Steel',
        colore: 'Yellow with green veins',
        profumo: 'Fruity with citrus notes and slight balsamic finish',
        sapore: 'Fresh, fruity, sapid',
        gradazione: '12/12.5% vol',
        temperatura: '8/12 °C',
        terreno: 'Calcareous with veins of clay and sand',
        esposizione: 'South-West',
        altitudine: '180 m a.s.l.',
        allevamento: 'Double curtain row',
        potatura: 'Two-bud spur-pruned cordon',
        densita: '2,500 plants/ha',
        produzione: '120 quintals/ha',
        raccolta: 'Hand-picked; first week of September',
      },
    },
  },
  {
    id: 'passerina-igt',
    name: 'Passerina IGT Colline Pescaresi',
    shortName: { it: 'Passerina IGT', en: 'Passerina IGT' },
    denomination: 'IGT Colline Pescaresi',
    type: 'bianco',
    image: '/images/wines/passerina.webp',
    pairing: {
      it: 'Primi piatti di pesce, crostacei, ottimo aperitivo',
      en: 'Fish first courses, crustaceans, excellent as aperitif',
      icons: ['fish', 'shellfish', 'glass'],
    },
    organoleptic: {
      color: {
        value: {
          it: 'Giallo tenue, riflessi verdolini',
          en: 'Light yellow, greenish reflections',
        },
        intensity: 68,
      },
      scent: {
        value: {
          it: 'Frutta bianca e note di frutta esotica',
          en: 'White fruit with exotic fruit notes',
        },
        intensity: 78,
      },
      flavor: {
        value: {
          it: 'Fresco, secco, sapido',
          en: 'Fresh, dry, sapid',
        },
        intensity: 70,
      },
    },
    technicalSheet: {
      it: {
        tipologia: 'Bianco',
        vitigno: 'Passerina 100%',
        vinificazione:
          'Fermentazione a temperatura controllata in assenza di vinacce',
        affinamento: 'Acciaio',
        colore: 'Giallo tenue, riflessi verdolini',
        profumo: 'Frutta bianca e note di frutta esotica',
        sapore: 'Fresco, secco, sapido',
        gradazione: '11,5/12% vol',
        temperatura: '8/12 °C',
        terreno: 'Argilloso-calcareo sciolto e profondo',
        esposizione: 'Sud / Sud-Est',
        altitudine: '180 mt slm',
        allevamento: 'Filare a doppia cortina',
        potatura: 'Cordone speronato a 2/3 gemme',
        densita: '2.500 piante/ha',
        produzione: '130 Qli/ha',
        raccolta: 'A mano; fine settembre',
      },
      en: {
        tipologia: 'White',
        vitigno: 'Passerina 100%',
        vinificazione: 'Fermentation at controlled temperature without marc',
        affinamento: 'Steel',
        colore: 'Light yellow, greenish reflections',
        profumo: 'White fruit with exotic fruit notes',
        sapore: 'Fresh, dry, sapid',
        gradazione: '11.5/12% vol',
        temperatura: '8/12 °C',
        terreno: 'Clayey-calcareous, loose and deep',
        esposizione: 'South / South-East',
        altitudine: '180 m a.s.l.',
        allevamento: 'Double curtain row',
        potatura: 'Two/three-bud spur-pruned cordon',
        densita: '2,500 plants/ha',
        produzione: '130 quintals/ha',
        raccolta: 'Hand-picked; end of September',
      },
    },
  },
];

export const PRODUCTION_STEPS = [
  {
    id: 'vigna',
    icon: 'grape',
    title: {
      it: 'Vigna',
      en: 'Vineyard',
    },
    description: {
      it: 'Coltivazioni bio certificate dal 1991. Uve autoctone — Montepulciano, Trebbiano, Pecorino, Passerina — su terreni argilloso-calcarei tra Majella e Gran Sasso.',
      en: 'Organic certified farming since 1991. Native grapes — Montepulciano, Trebbiano, Pecorino, Passerina — on clay-limestone soils between the Majella and Gran Sasso.',
    },
  },
  {
    id: 'cantina',
    icon: 'barrel',
    title: {
      it: 'Cantina',
      en: 'Winery',
    },
    description: {
      it: 'Vinificazione naturale in purezza, fermentazioni a temperatura controllata e affinamento in acciaio per preservare freschezza e territorialità.',
      en: 'Natural vinification in purity, controlled-temperature fermentations and ageing in steel to preserve freshness and terroir.',
    },
  },
  {
    id: 'bottiglia',
    icon: 'bottle',
    title: {
      it: 'Bottiglia',
      en: 'Bottle',
    },
    description: {
      it: 'Vini giovani e profumati, a bassissimo contenuto in solfiti. Ogni etichetta ERREDIA racconta l’Abruzzo attraverso il linguaggio del territorio.',
      en: 'Young, aromatic wines with very low sulphite content. Every ERREDIA label tells Abruzzo through the language of its land.',
    },
  },
];

export const STORY_CONTENT = {
  heritage: {
    title: { it: 'La Nostra Eredità', en: 'Our Heritage' },
    body: {
      it: `Domenico Radica — vignaiolo naturale, radicato nella terra abruzzese — porta con sé due generazioni di viticoltura e una formazione in agraria ed enologia. Dal 1987 introduce metodi eco-sostenibili; nel 1991 la cantina diventa la seconda in Abruzzo certificata biologica secondo il regolamento CE 2092/91.

Oggi ERREDIA è espressione di semplice naturalità e forte territorialità: vini da uve autoctone, vinificati con rispetto dell'ambiente e delle mani che li custodiscono.`,
      en: `Domenico Radica — a natural winegrower rooted in Abruzzo — carries two generations of viticulture and training in agriculture and oenology. Since 1987 he has introduced eco-sustainable methods; in 1991 the estate became the second in Abruzzo certified organic under EC Regulation 2092/91.

Today ERREDIA expresses simple naturalness and strong terroir: wines from native grapes, made with respect for the environment and the hands that tend them.`,
    },
  },
  innovation: {
    title: { it: "L'Innovazione", en: 'Innovation' },
    innovationTitle: {
      it: 'Etichetta & Territorio',
      en: 'Label & Territory',
    },
    body: {
      it: `L'etichetta ERREDIA — disegnata da Stefano Schiazza — traduce in segno grafico Majella, Gran Sasso, il fiume Pescara e le colline pescaresi. Innovazione qui significa continuità consapevole: bassissimi solfiti, purezza varietale, trasparenza analitica.

La nuova generazione — Giada e Samuele Radica — prosegue il dialogo tra tradizione contadina e rigore enologico contemporaneo.`,
      en: `The ERREDIA label — designed by Stefano Schiazza — translates the Majella, Gran Sasso, the Pescara river and the hills of Pescara into graphic form. Innovation here means conscious continuity: very low sulphites, varietal purity, analytical transparency.

The new generation — Giada and Samuele Radica — continues the dialogue between farming tradition and contemporary winemaking rigour.`,
    },
    image: '/images/label-story.webp',
  },
};
