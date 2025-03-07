import { analyticsConfig } from './config';

export function initGoogleAds(): void {
  const { conversionId } = analyticsConfig.googleAds;
  
  if (!conversionId) {
    console.warn('Google Ads Conversion ID is not configured');
    return;
  }

  // Initialize Google Ads
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=AW-${conversionId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
// Dans ga4.ts et google-ads.ts
window.gtag = function(...args: unknown[]) {
  window.dataLayer.push(args);
};
  window.gtag('js', new Date());
  window.gtag('config', `AW-${conversionId}`);
}

export function trackConversion(conversionLabel: string, value?: number): void {
  const { conversionId } = analyticsConfig.googleAds;
  
  if (!window.gtag) {
    console.warn('Google Ads not initialized');
    return;
  }

  window.gtag('event', 'conversion', {
    send_to: `AW-${conversionId}/${conversionLabel}`,
    value: value,
    currency: 'CAD',
  });
}