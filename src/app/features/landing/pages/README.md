/**
 * LANDING PAGE ROUTES
 * 
 * Landing page will be accessed at /landing or /
 * The landing page component combines all sections
 * 
 * @Component({
 *   selector: 'app-landing-page',
 *   standalone: true,
 *   imports: [
 *     CommonModule,
 *     HeroSectionComponent,
 *     FeaturesSectionComponent,
 *     CTASectionComponent,
 *     FooterSectionComponent,
 *   ],
 *   template: `
 *     <main class="landing-page">
 *       <app-hero-section></app-hero-section>
 *       <app-features-section></app-features-section>
 *       <app-cta-section></app-cta-section>
 *       <app-footer-section></app-footer-section>
 *     </main>
 *   `,
 * })
 * export class LandingPageComponent {}
 */

export const LANDING_ROUTES = {
  landing: 'landing',
  landingRoot: '/',
} as const;
