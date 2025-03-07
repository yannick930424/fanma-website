import { analyticsConfig } from './config';
import type { AnalyticsEvent } from './types';

export function initGA4(): void {
  const { measurementId } = analyticsConfig.googleAnalytics;
  
  if (!measurementId) {
    console.warn('GA4 Measurement ID is not configured');
    return;
  }

  // Initialize Google Analytics 4
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
// Dans ga4.ts et google-ads.ts
window.gtag = function(...args: unknown[]) {
  window.dataLayer.push(arguments);
};
  window.gtag('js', new Date());
  window.gtag('config', measurementId);
}

export function trackEvent(event: AnalyticsEvent): void {
  if (!window.gtag) {
    console.warn('Google Analytics not initialized');
    return;
  }

  window.gtag('event', event.action, {
    event_category: event.category,
    event_label: event.label,
    value: event.value,
  });
}