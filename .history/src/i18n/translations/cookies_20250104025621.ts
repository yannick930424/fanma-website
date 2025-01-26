// i18n/translations/cookies.ts

export interface CookieCategory {
  title: string;
  description: string;
}

export interface CookieCategories {
  necessary: CookieCategory;
  analytics: CookieCategory;
  marketing: CookieCategory;
}

export interface CookieTranslations {
  title: string;
  description: string;
  learnMore: string;
  categories: CookieCategories;
  buttons: {
    acceptAll: string;
    acceptSelected: string;
    refuseAll: string;
    close: string;
    save: string;
  };
  moreInfo: {
    title: string;
    text: string;
    link: string;
  };
  footer: {
    text: string;
  };
}

export const cookiesTranslations = {
  fr: {
    title: 'Paramètres des cookies',
    description: 'Ce site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez personnaliser vos préférences pour chaque catégorie de cookies.',
    learnMore: 'Plus d\'informations',
    categories: {
      necessary: {
        title: 'Cookies nécessaires',
        description: 'Ces cookies sont essentiels au fonctionnement du site et ne peuvent pas être désactivés. Ils ne stockent aucune donnée personnelle.'
      },
      analytics: {
        title: 'Cookies analytiques',
        description: 'Ces cookies nous aident à améliorer notre site en collectant des informations sur son utilisation. Toutes les données sont anonymes.'
      },
      marketing: {
        title: 'Cookies marketing',
        description: 'Ces cookies nous aident à mesurer l\'efficacité de notre publicité et à vous proposer des offres plus pertinentes. Ils peuvent être utilisés par nos partenaires publicitaires.'
      }
    },
    buttons: {
      acceptAll: 'Tout accepter',
      acceptSelected: 'Accepter la sélection',
      refuseAll: 'Tout refuser',
      close: 'Fermer',
      save: 'Enregistrer mes préférences'
    },
    moreInfo: {
      title: 'Politique de cookies',
      text: 'Pour plus d\'informations sur l\'utilisation des cookies, veuillez consulter notre',
      link: 'politique de confidentialité'
    },
    footer: {
      text: 'Les cookies nous aident à fournir nos services. En utilisant nos services, vous acceptez notre utilisation des cookies.'
    }
  },
  en: {
    title: 'Cookie Settings',
    description: 'This site uses cookies to improve your browsing experience. You can customize your preferences for each cookie category.',
    learnMore: 'Learn more',
    categories: {
      necessary: {
        title: 'Necessary cookies',
        description: 'These cookies are essential for the website to function and cannot be disabled. They do not store any personal data.'
      },
      analytics: {
        title: 'Analytics cookies',
        description: 'These cookies help us improve our website by collecting information about its use. All data is anonymous.'
      },
      marketing: {
        title: 'Marketing cookies',
        description: 'These cookies help us measure the effectiveness of our advertising and offer you more relevant offers. They may be used by our advertising partners.'
      }
    },
    buttons: {
      acceptAll: 'Accept all',
      acceptSelected: 'Accept selected',
      refuseAll: 'Refuse all',
      close: 'Close',
      save: 'Save my preferences'
    },
    moreInfo: {
      title: 'Cookie Policy',
      text: 'For more information about the use of cookies, please see our',
      link: 'privacy policy'
    },
    footer: {
      text: 'Cookies help us deliver our services. By using our services, you agree to our use of cookies.'
    }
  }
};