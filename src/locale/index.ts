import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en, ko } from './data';

export const resources = {
  ko: {
    translation: ko,
  },
  en: {
    translation: en,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ko',
  fallbackLng: 'ko',
});
