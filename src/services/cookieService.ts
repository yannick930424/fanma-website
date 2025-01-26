// services/cookieService.ts

export interface CookieSettings {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
  }
  
  export const getCookieConsent = (): CookieSettings | null => {
    const consent = localStorage.getItem('cookieConsent');
    return consent ? JSON.parse(consent) : null;
  };
  
  export const setCookieConsent = (settings: CookieSettings): void => {
    localStorage.setItem('cookieConsent', JSON.stringify(settings));
    
    // Appliquer les paramètres
    if (settings.analytics) {
      enableAnalytics();
    } else {
      disableAnalytics();
    }
    
    if (settings.marketing) {
      enableMarketing();
    } else {
      disableMarketing();
    }
  };
  
  const enableAnalytics = () => {
    // Activer Google Analytics, etc.
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  };
  
  const disableAnalytics = () => {
    // Désactiver Google Analytics, etc.
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
  };
  
  const enableMarketing = () => {
    // Activer les cookies marketing
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'ad_storage': 'granted'
      });
    }
  };
  
  const disableMarketing = () => {
    // Désactiver les cookies marketing
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'ad_storage': 'denied'
      });
    }
  };
  
  export const resetCookieConsent = (): void => {
    localStorage.removeItem('cookieConsent');
  };