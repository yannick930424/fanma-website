import { useCallback } from 'react';
import { trackEvent, trackConversion } from '../services/analytics';
import type { AnalyticsEvent } from '../services/analytics';

export function useAnalytics() {
  const logEvent = useCallback((event: AnalyticsEvent) => {
    trackEvent(event);
  }, []);

  const logConversion = useCallback((label: string, value?: number) => {
    trackConversion(label, value);
  }, []);

  return {
    logEvent,
    logConversion,
  };
}