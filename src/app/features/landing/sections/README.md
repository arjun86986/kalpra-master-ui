/**
 * LANDING PAGE SECTIONS
 * 
 * These are page-level section components that combine organisms and molecules
 * Each section handles a specific part of the landing page
 * 
 * Examples:
 * - hero-section.component.ts      (Hero/Banner)
 * - features-section.component.ts  (Features Grid)
 * - cta-section.component.ts       (Call to Action)
 * - testimonials-section.component.ts
 * - pricing-section.component.ts
 * - faq-section.component.ts
 * - footer-section.component.ts
 * 
 * Each section should:
 * 1. Be a standalone component
 * 2. Use Signals for state management
 * 3. Use new control flow (@if, @for)
 * 4. Be fully responsive
 * 5. Include accessibility attributes
 * 6. Import reusable components (organisms, molecules, atoms)
 */

export const LANDING_SECTIONS = {
  Hero: 'app-hero-section',
  Features: 'app-features-section',
  CTA: 'app-cta-section',
  Testimonials: 'app-testimonials-section',
  Pricing: 'app-pricing-section',
  FAQ: 'app-faq-section',
  Footer: 'app-footer-section',
} as const;

/**
 * SECTION COMPONENT TEMPLATE PATTERN
 * 
 * @Component({
 *   selector: 'app-hero-section',
 *   standalone: true,
 *   imports: [CommonModule, LazyLoadDirective, HeroComponent],
 *   template: `
 *     <section class="hero-section" [attr.aria-label]="'Hero section'">
 *       <div class="container">
 *         <!-- Section content -->
 *       </div>
 *     </section>
 *   `,
 *   styles: [/* component styles */],
 * })
 * export class HeroSectionComponent implements OnInit {
 *   private landingService = inject(LandingDataService);
 *   private seoService = inject(SeoService);
 *   private analyticsService = inject(AnalyticsService);
 *
 *   content = signal<HeroContent | null>(null);
 *   isLoading = signal(false);
 *
 *   ngOnInit(): void {
 *     this.loadContent();
 *     this.setSEO();
 *     this.trackPage();
 *   }
 *
 *   private loadContent(): void {
 *     this.isLoading.set(true);
 *     // Load content
 *     this.isLoading.set(false);
 *   }
 *
 *   private setSEO(): void {
 *     this.seoService.setMeta({
 *       title: 'Kalpra - Landing Page',
 *       description: 'Modern landing page',
 *     });
 *   }
 *
 *   private trackPage(): void {
 *     this.analyticsService.trackPageView('/landing', 'Landing Page');
 *   }
 * }
 */
