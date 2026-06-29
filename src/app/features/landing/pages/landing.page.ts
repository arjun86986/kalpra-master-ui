import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService, AnalyticsService } from '../../../core/services';
import { LandingDataService } from '../services/landing-data.service';
import { NavbarComponent } from '../../../shared/components/organisms/navbar/navbar.component';
import { HeroSectionComponent } from '../../../shared/components/organisms/hero-section/hero-section.component';
import { DashboardCardsComponent } from '../../../shared/components/organisms/dashboard-cards/dashboard-cards.component';
import { FeatureCardsComponent } from '../../../shared/components/organisms/feature-cards/feature-cards.component';
import { ProcessTimelineComponent } from '../../../shared/components/organisms/process-timeline/process-timeline.component';
import { EnterpriseCardsComponent } from '../../../shared/components/organisms/enterprise-cards/enterprise-cards.component';
import { PricingCardsComponent } from '../../../shared/components/organisms/pricing-cards/pricing-cards.component';
import { TestimonialsSliderComponent } from '../../../shared/components/organisms/testimonials-slider/testimonials-slider.component';
import { PremiumFooterComponent } from '../../../shared/components/organisms/premium-footer/premium-footer.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroSectionComponent,
    DashboardCardsComponent,
    FeatureCardsComponent,
    ProcessTimelineComponent,
    EnterpriseCardsComponent,
    PricingCardsComponent,
    TestimonialsSliderComponent,
    PremiumFooterComponent,
  ],
  template: `
    <a class="skip-to-main" href="#main-content">Skip to main content</a>
    <app-navbar />

    <main class="landing-page" id="main-content" role="main">
      <app-hero-section />
      <app-dashboard-cards />
      <app-feature-cards />
      <app-process-timeline />
      <app-enterprise-cards />
      <app-pricing-cards />
      <app-testimonials-slider />
      <app-premium-footer />
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
      title: 'Kalpra — Engineering Intelligence, Powered by AI',
      description:
        'AI-driven engineering intelligence across GitHub, Jira, Storybook, CI/CD, and Design Systems. Built for teams that ship with clarity.',
      keywords: [
        'engineering intelligence',
        'AI',
        'developer productivity',
        'design systems',
        'enterprise SaaS',
      ],
      ogTitle: 'Kalpra — Engineering Intelligence',
      ogDescription:
        'Make better engineering decisions with AI-driven insights across your entire delivery stack.',
      ogImage: 'assets/images/og-image.png',
      author: 'Kalpra',
      twitterCard: 'summary_large_image',
      twitterSite: '@kalpra',
    });

    this.seoService.setStructuredData({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Kalpra — Engineering Intelligence',
      description: 'AI-driven engineering intelligence for modern teams',
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
