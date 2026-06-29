/**
 * ORGANISM COMPONENTS
 * 
 * Atomic Design Level 3: Complex combinations of molecules
 * Examples: Hero Section, Feature Grid, Footer, Testimonials
 * 
 * File Structure for each organism:
 * - hero-section/
 *   ├── hero-section.component.ts
 *   ├── hero-section.component.scss
 *   ├── hero-section.component.spec.ts
 *   └── hero-section.model.ts
 */

export const ORGANISMS_COMPONENTS = {
  HeroSection: 'app-hero-section',
  FeatureGrid: 'app-feature-grid',
  Footer: 'app-footer',
  Testimonials: 'app-testimonials',
  Navbar: 'app-navbar',
  CTA: 'app-cta',
} as const;

/**
 * ORGANISM COMPONENT TEMPLATE STRUCTURE
 * 
 * @Component({
 *   selector: 'app-hero-section',
 *   standalone: true,
 *   imports: [CommonModule, LazyLoadDirective],
 *   template: `
 *     <section class="hero" [attr.aria-label]="'Hero section'">
 *       <div class="hero__container">
 *         <div class="hero__content">
 *           <h1>{{ title() }}</h1>
 *           <p>{{ subtitle() }}</p>
 *         </div>
 *         <img 
 *           appLazyLoad
 *           [src]="placeholderImage()"
 *           [data-src]="heroImage()"
 *           [alt]="imageAlt()"
 *           class="hero__image"
 *         />
 *       </div>
 *     </section>
 *   `,
 *   styles: [/* styles */],
 * })
 * export class HeroSectionComponent {
 *   title = input<string>('');
 *   subtitle = input<string>('');
 *   heroImage = input<string>('');
 *   imageAlt = input<string>('');
 *   placeholderImage = input<string>('');
 * }
 */
