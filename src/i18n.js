import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// We will create these files in the next step
import enTranslation from './locales/en/translation.json';
import myTranslation from './locales/my/translation.json';

i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      my: {
        translation: myTranslation,
      },
    },
    fallbackLng: 'en', // if language is not available, use English
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;