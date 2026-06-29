/**
 * LANDING PAGE ARCHITECTURE DOCUMENTATION
 * 
 * Project: Kalpra Landing Page
 * Framework: Angular 21 with Signals & Standalone Components
 * Design System: Atomic Design + SOLID Principles
 * Styling: Pure SCSS with CSS Variables
 */

## 📁 Folder Structure

```
src/
├── app/
│   ├── core/
│   │   ├── config/               # Centralized configuration
│   │   │   └── app.config.ts
│   │   ├── guards/               # Route guards (future use)
│   │   ├── interceptors/         # HTTP interceptors (future use)
│   │   ├── models/               # Shared data models & interfaces
│   │   │   ├── seo.model.ts
│   │   │   ├── analytics.model.ts
│   │   │   ├── hero.model.ts
│   │   │   ├── feature.model.ts
│   │   │   └── index.ts
│   │   └── services/             # Core application services
│   │       ├── seo.service.ts           # Meta tags & structured data
│   │       ├── analytics.service.ts     # Event tracking
│   │       ├── lazy-load-image.service.ts
│   │       └── index.ts
│   │
│   ├── shared/
│   │   ├── components/
│   │   │   ├── atoms/            # ATOMS: Button, Input, Label, Icon, Badge
│   │   │   │   └── README.md
│   │   │   ├── molecules/        # MOLECULES: Card, Header, SearchBar
│   │   │   │   └── README.md
│   │   │   └── organisms/        # ORGANISMS: Hero, FeatureGrid, Footer
│   │   │       └── README.md
│   │   ├── directives/           # Reusable directives
│   │   │   ├── lazy-load.directive.ts
│   │   │   ├── responsive-hide.directive.ts
│   │   │   └── index.ts
│   │   ├── pipes/                # Reusable pipes
│   │   │   ├── safe-html.pipe.ts
│   │   │   ├── truncate.pipe.ts
│   │   │   └── index.ts
│   │   ├── styles/               # Global styles & design tokens
│   │   │   ├── variables.scss    # SCSS + CSS Custom Properties
│   │   │   ├── mixins.scss       # Reusable SCSS mixins
│   │   │   └── global.scss       # Global CSS resets
│   │   └── utils/                # Utility functions
│   │       ├── accessibility.utils.ts
│   │       ├── responsive.utils.ts
│   │       └── index.ts
│   │
│   └── features/
│       └── landing/              # Landing page feature module
│           ├── pages/            # Page components
│           │   └── landing.page.ts
│           ├── sections/         # Page sections
│           │   ├── hero-section.component.ts
│           │   ├── features-section.component.ts
│           │   └── cta-section.component.ts
│           └── services/         # Feature-specific services
│               └── landing-data.service.ts
│
├── assets/
│   ├── images/
│   │   ├── landing/
│   │   │   ├── hero/
│   │   │   └── features/
│   │   └── icons/
│   └── styles/                   # Additional style assets
│
└── styles/                        # Entry point for global styles
    └── styles.scss
```

## 🎯 SOLID Principles Implementation

### Single Responsibility
- Each service handles one concern (SEO, Analytics, LazyLoad)
- Each component represents one UI element
- Models define clear data structures

### Open/Closed
- Services can be extended without modification
- Components accept inputs for customization
- Utilities are designed for extension

### Liskov Substitution
- All components follow the same interface pattern
- Services can be mocked/replaced for testing

### Interface Segregation
- Focused interfaces (SEOMeta, AnalyticsEvent, Feature)
- Components only depend on what they need

### Dependency Inversion
- Inject services via dependency injection
- Depend on abstractions, not concrete implementations

## 🔄 Atomic Design Implementation

### ATOMS
Smallest, fundamental components:
- Button
- Input
- Label
- Icon
- Badge
- Spinner

### MOLECULES
Combination of atoms:
- Card (Icon + Text)
- Header (Logo + Navigation)
- SearchBar (Input + Button)
- FormGroup (Label + Input)

### ORGANISMS
Complex combinations:
- Hero Section (Image + Text + CTA)
- Feature Grid (Multiple Cards)
- Navigation Bar (Logo + Menu + Auth)
- Footer (Links + Social + Newsletter)

## 🎨 Styling Architecture

### CSS Variables (Root)
All design tokens available as CSS custom properties:
```css
:root {
  --color-primary: #4A90E2;
  --font-size-base: 1rem;
  --space-4: 1rem;
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

### SCSS Mixins
Reusable style patterns:
- `@mixin flex()` - Flexbox layouts
- `@mixin grid()` - Grid layouts
- `@mixin respond-to()` - Responsive queries
- `@mixin heading-1()` - Typography styles
- `@mixin btn-primary()` - Button styles
- `@mixin focus-ring()` - Accessibility

### Responsive Breakpoints
```scss
Mobile:  320px
Tablet:  768px
Desktop: 1024px
Wide:    1440px
```

## ✨ Modern Angular Features

### Standalone Components
All components are standalone - no module declarations needed.

### Signals
Used for reactive state management:
```typescript
title = input<string>('');
disabled = input<boolean>(false);
onClick = output<void>();
```

### New Control Flow
Using new if/for syntax instead of directives.

### Dependency Injection
Simplified with `inject()` function:
```typescript
private router = inject(Router);
```

## ♿ Accessibility Features

### Built-in
- Semantic HTML
- ARIA labels on interactive elements
- Focus management
- Screen reader support
- Keyboard navigation

### Utilities
- `generateId()` - Generate accessible IDs
- `setFocusStyle()` - Custom focus styles
- `announceToScreenReader()` - Screen reader announcements
- `initializeSkipLink()` - Skip to main content
- `.sr-only` mixin - Visually hidden content

## 🖼️ Image Optimization

### Lazy Loading
- Intersection Observer API
- Placeholder images
- Progressive loading with CSS transitions
- Data attributes for image sources

### Format Support
- WebP (preferred)
- JPG (fallback)
- PNG (fallback)

## 📊 SEO Implementation

### Meta Tags
- Title, Description, Keywords
- Open Graph tags
- Twitter Card tags
- Canonical URLs
- Robots directives

### Structured Data
- Schema.org JSON-LD
- Automatic injection
- Page-specific structures

### Analytics
- Page view tracking
- Event tracking
- Session management
- Google Analytics compatible

## 📱 Responsive Design

### Mobile-First Approach
Base styles for mobile, enhanced for larger screens

### Responsive Mixins
```scss
@include respond-to('tablet') { }
@include min-width($tablet) { }
@include max-width($desktop) { }
```

### CSS Grid & Flexbox
Responsive layouts without Bootstrap/Tailwind

## 🚀 Performance Considerations

- Lazy loading for images
- Standalone components (smaller bundle)
- Tree-shaking friendly exports
- CSS variables (runtime customization)
- Minimal dependencies

## 📝 Component Creation Checklist

1. ✅ Create folder: `src/app/shared/components/[level]/[component-name]/`
2. ✅ Create `.component.ts` - Standalone component
3. ✅ Create `.component.scss` - Component styles
4. ✅ Create `.component.spec.ts` - Tests
5. ✅ Create `.model.ts` - Type definitions (if needed)
6. ✅ Add inputs/outputs with Signals
7. ✅ Import at `index.ts` for barrel export
8. ✅ Add accessibility attributes
9. ✅ Ensure responsive design
10. ✅ Add JSDoc comments

## 🔗 Import Patterns

### Barrel Exports
```typescript
// From shared
import { ButtonComponent, CardComponent } from '@app/shared/components/atoms';
import { HeroSectionComponent } from '@app/shared/components/organisms';

// From core
import { SeoService, AnalyticsService } from '@app/core/services';

// From utils
import { generateId, getCurrentBreakpoint } from '@app/shared/utils';
```

## ✅ Next Steps

1. Create individual ATOM components
2. Build MOLECULE components using atoms
3. Develop ORGANISM components
4. Create landing page sections
5. Implement feature services
6. Add analytics tracking
7. Configure SEO metadata
8. Write tests
9. Build and deploy
