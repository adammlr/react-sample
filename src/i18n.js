import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(XHR)
  .use(initReactI18next)
  .init({
    lng: 'en',
    load: 'currentOnly',
    //debug: true,
    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: `${process.env.PUBLIC_URL}/locale/{{lng}}.json`
    }
  });

export default i18n;
