/**
 * Root Component
 * Main application shell component
 * 
 * - Loads global styles
 * - Provides layout structure
 * - Initializes core services
 */

import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SeoService, AnalyticsService } from './core/services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <!-- Skip to main content link (Accessibility) -->
    <a href="#main-content" class="skip-to-main">Skip to main content</a>

    <!-- Main router outlet -->
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  private readonly seoService = inject(SeoService);
  private readonly analyticsService = inject(AnalyticsService);

  ngOnInit(): void {
    this.initializeApp();
  }

  private initializeApp(): void {
    // Initialize core services
    // Additional setup can be done here
  }
}
