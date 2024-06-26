import {createI18n} from 'vue-i18n'
import {settings} from "@/stores/settings.js";

//Import locales
import trLocales from './locales/tr'
import enLocales from './locales/en'
import arLocales from './locales/ar'
import bnLocales from './locales/bn'
import cnLocales from './locales/cn'
import deLocales from './locales/de'
import esLocales from './locales/es'
import frLocales from './locales/fr'
import hiLocales from './locales/hi'
import jpLocales from './locales/jp'
import ptLocales from './locales/pt'
import ruLocales from './locales/ru'

const currentLanguage = settings.language.value;
const defaultLanguage = settings.defaultLanguage.value;

//Create i18n instance
const i18n = createI18n({
    legacy: false,
    locale: currentLanguage,
    fallbackLocale: defaultLanguage,
    messages: {
        tr: trLocales,
        en: enLocales,
        ar: arLocales,
        bn: bnLocales,
        cn: cnLocales,
        de: deLocales,
        es: esLocales,
        fr: frLocales,
        hi: hiLocales,
        jp: jpLocales,
        pt: ptLocales,
        ru: ruLocales,
    },
});

export default i18n;
