import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

import translationInEng from "../locales/en/translation.json";
import translationInHindi from "../locales/hi/translation.json";
import translateInItalian from '../locales/it/translation.json'

const resources = {
    en: {
        translation: translationInEng
    },
    hi: {
        translation: translationInHindi
    },
    it:{
        translation: translateInItalian
    }
};

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        lng: 'en',
        fallback: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources,
    });

export default i18n;