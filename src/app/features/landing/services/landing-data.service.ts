import { Injectable, inject } from '@angular/core';
import { signal } from '@angular/core';
import { FeatureSection } from '../../../core/models/feature.model';

/**
 * Landing Data Service
 * Feature-specific service for landing page data management
 * SOLID: Single Responsibility - Only handles landing page data
 */
@Injectable({
  providedIn: 'root',
})
export class LandingDataService {
  private readonly featuresSignal = signal<FeatureSection | null>(null);
  
  readonly features$ = this.featuresSignal.asReadonly();

  loadFeatures(): void {
    // Mock data - Replace with actual API call
    const mockFeatures: FeatureSection = {
      title: 'Powerful Features',
      subtitle: 'Everything you need for success',
      features: [
        {
          id: '1',
          title: 'Responsive Design',
          description: 'Perfect on all devices',
          icon: 'icon-responsive',
          order: 1,
        },
        {
          id: '2',
          title: 'SEO Optimized',
          description: 'Built for search engines',
          icon: 'icon-seo',
          order: 2,
        },
        {
          id: '3',
          title: 'Performance',
          description: 'Lightning fast loading',
          icon: 'icon-lightning',
          order: 3,
        },
      ],
    };

    this.featuresSignal.set(mockFeatures);
  }
}
