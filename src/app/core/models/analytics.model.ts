/**
 * Analytics Model - Handles event tracking data
 * SOLID: Single Responsibility - Only handles analytics data structure
 */
export interface AnalyticsEvent {
  eventName: string;
  eventCategory: string;
  eventLabel?: string;
  eventValue?: number;
  timestamp: Date;
  userId?: string;
  sessionId?: string;
}

export interface PageViewEvent extends AnalyticsEvent {
  pagePath: string;
  pageTitle: string;
  referrer?: string;
}
