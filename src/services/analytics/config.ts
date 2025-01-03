import { AnalyticsConfig } from './types';

export const analyticsConfig: AnalyticsConfig = {
  googleAnalytics: {
    measurementId: import.meta.env.VITE_GA_MEASUREMENT_ID,
  },
  googleAds: {
    conversionId: import.meta.env.VITE_GOOGLE_ADS_CONVERSION_ID,
  },
  googleTagManager: {
    containerId: import.meta.env.VITE_GTM_CONTAINER_ID,
  },
};