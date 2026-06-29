import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { AnalyticsEvent, PageViewEvent } from '../models/analytics.model';
import { APP_CONFIG } from '../config/app.config';

/**
 * Analytics Service - Manages event tracking
 * SOLID: Single Responsibility - Only handles analytics operations
 * Dependency Inversion: Depends on Router abstraction
 */
@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);
  private sessionId = this.generateSessionId();

  constructor() {
    if (this.isBrowser) {
      this.initializePageTracking();
    }
  }

  /**
   * Track custom event
   */
  trackEvent(event: AnalyticsEvent): void {
    const enrichedEvent = {
      ...event,
      sessionId: this.sessionId,
      timestamp: new Date(),
    };

    // Log to console in development
    if (APP_CONFIG.environment !== 'production') {
      console.log('Analytics Event:', enrichedEvent);
    }

    // Send to analytics platform (Google Analytics, Mixpanel, etc.)
    this.sendToAnalytics(enrichedEvent);
  }

  /**
   * Track page view
   */
  trackPageView(pagePath: string, pageTitle: string): void {
    const event: PageViewEvent = {
      eventName: 'page_view',
      eventCategory: 'engagement',
      pagePath,
      pageTitle,
      sessionId: this.sessionId,
      timestamp: new Date(),
    };

    this.trackEvent(event);
  }

  private initializePageTracking(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(event => event as NavigationEnd),
      )
      .subscribe(event => {
        this.trackPageView(event.urlAfterRedirects, document.title);
      });
  }

  private sendToAnalytics(event: AnalyticsEvent): void {
    // Implementation depends on your analytics provider
    // Examples:
    // - Google Analytics: gtag('event', event.eventName, {...})
    // - Mixpanel: mixpanel.track(event.eventName, {...})
    // - Custom API: this.http.post('/analytics', event)
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
}
