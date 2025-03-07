export interface AnalyticsConfig {
  googleAnalytics: {
    measurementId: string;
  };
  googleAds: {
    conversionId: string;
  };
  googleTagManager: {
    containerId: string;
  };
}

export interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
}