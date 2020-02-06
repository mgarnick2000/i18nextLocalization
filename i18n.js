import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as Localization from 'expo-localization';
import en from './translations/en.json';
import ar from './translations/ar.json';
import fr from './translations/fr.json';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: cb => cb(Localization.locale),
  init: () => {},
  cacheUserLanguage: () => {},
};
i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en,
      ar,
      fr,
    },
    interpolation: {
      escapeValue: false, // not needed for react as it does escape per default to prevent xss!
    },
  });

export default i18next;
