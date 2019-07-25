import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';
import preval from 'preval.macro';

i18n
  .use(XHR)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    load: 'currentOnly',
    //debug: true,
    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: `${process.env.PUBLIC_URL}/locale/{{lng}}.json`,
      queryStringParams: {
        v: preval`module.exports = Date.now();` // add a build time querystring for cache busting
      }
    }
  });

export default i18n;
