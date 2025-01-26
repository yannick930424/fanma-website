import { commonTranslations } from './common';
import { homeTranslations } from './pages/home';
import { aboutTranslations } from './pages/about';
import { contactTranslations } from './pages/contact';
import { historyTranslations } from './pages/history';
import { servicesTranslations } from './services';
import { codesTranslations } from './services/codes';
import { managementTranslations } from './services/management';
import { mechanicalTranslations } from './services/mechanical';
import { cookieTranslations } from './cookies';

export const translations = {
  fr: {
    ...commonTranslations.fr,
    cookies: cookieTranslations.fr,
    home: homeTranslations.fr,
    about: aboutTranslations.fr,
    contact: contactTranslations.fr,
    history: historyTranslations.fr,
    services: {
      ...servicesTranslations.fr,
      codes: codesTranslations.fr,
      management: managementTranslations.fr,
      mechanical: mechanicalTranslations.fr
    }
  },
  en: {
    ...commonTranslations.en,
    cookies: cookieTranslations.en,
    home: homeTranslations.en,
    about: aboutTranslations.en,
    contact: contactTranslations.en,
    history: historyTranslations.en,
    services: {
      ...servicesTranslations.en,
      codes: codesTranslations.en,
      management: managementTranslations.en,
      mechanical: mechanicalTranslations.en
    }
  }
};