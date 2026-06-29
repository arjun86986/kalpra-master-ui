import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService, AnalyticsService } from '../../../core/services';
import { LandingDataService } from '../services/landing-data.service';
import { NavbarComponent } from '../../../shared/components/organisms/navbar/navbar.component';
import { HeroSectionComponent } from '../../../shared/components/organisms/hero-section/hero-section.component';
import { DashboardCardsComponent } from '../../../shared/components/organisms/dashboard-cards/dashboard-cards.component';
import { FeatureCardsComponent } from '../../../shared/components/organisms/feature-cards/feature-cards.component';
import { ProcessTimelineComponent } from '../../../shared/components/organisms/process-timeline/process-timeline.component';

/**
 * Landing Page Component
 * 
 * Main page component that combines all landing page sections
 * - Manages SEO metadata
 * - Tracks page views
 * - Loads landing page data
 * 
 * Sections to be added:
 * - Hero Section
 * - Features Section
 * - CTA Section
 * - Testimonials Section
 * - Footer Section
 */
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent, HeroSectionComponent, DashboardCardsComponent, FeatureCardsComponent, ProcessTimelineComponent],
  template: `
    <app-navbar></app-navbar>
    
    <main class="landing-page" id="main-content" role="main">
      <app-hero-section></app-hero-section>
      <app-dashboard-cards></app-dashboard-cards>
      <app-feature-cards></app-feature-cards>
      <app-process-timeline></app-process-timeline>

      <!-- Features Section -->
      <!-- <app-features-section></app-features-section> -->

      <!-- CTA Section -->
      <!-- <app-cta-section></app-cta-section> -->

      <!-- Footer Section -->
      <!-- <app-footer-section></app-footer-section> -->

    </main>
  `,
  styleUrls: ['./landing.page.scss'],
})
export class LandingPageComponent implements OnInit {
  private readonly seoService = inject(SeoService);
  private readonly analyticsService = inject(AnalyticsService);
  private readonly landingDataService = inject(LandingDataService);

  ngOnInit(): void {
    this.initializePage();
  }

  private initializePage(): void {
    this.setSEO();
    this.trackPageView();
    this.loadData();
  }

  private setSEO(): void {
    this.seoService.setMeta({
      title: 'Kalpra - Production Ready Landing Page',
      description: 'Modern, scalable Angular 21 landing page with Signals, Standalone Components, and best practices',
      keywords: ['angular', 'landing', 'responsive', 'seo', 'production'],
      ogTitle: 'Kalpra - Angular 21 Landing Page',
      ogDescription: 'Production-ready landing page built with Angular 21',
      ogImage: 'assets/images/og-image.png',
      author: 'Kalpra Team',
      twitterCard: 'summary_large_image',
      twitterSite: '@kalpra',
    });

    // Set JSON-LD structured data
    this.seoService.setStructuredData({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Kalpra Landing Page',
      description: 'Modern, scalable Angular 21 landing page',
      url: 'https://kalpra.com',
    });
  }

  private trackPageView(): void {
    this.analyticsService.trackPageView('/landing', 'Kalpra Landing Page');
  }

  private loadData(): void {
    this.landingDataService.loadFeatures();
  }
}
