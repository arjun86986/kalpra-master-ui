## 🚀 Quick Start Guide

### Prerequisites
- ✅ Angular 21 already installed
- ✅ Node.js 18+
- ✅ npm or yarn

### Step 1: Install Dependencies
```bash
cd kalpra-master
npm install
```

### Step 2: Start Development Server
```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/`

---

## 📁 Folder Structure Overview

```
kalpra-master/
│
├── 📄 ARCHITECTURE.md              ← Start here (complete guide)
├── 📄 DEVELOPMENT.md               ← Development guidelines
├── 📄 COMPONENT_BLUEPRINT.md        ← Copy to create components
├── 📄 SETUP_COMPLETE.md            ← This file
├── 📄 QUICK_START.md               ← Quick commands
│
├── src/
│   ├── app/
│   │   ├── 🎯 core/                ← Core application layer
│   │   │   ├── config/
│   │   │   │   └── app.config.ts    (Configuration constants)
│   │   │   ├── models/
│   │   │   │   ├── seo.model.ts
│   │   │   │   ├── analytics.model.ts
│   │   │   │   ├── hero.model.ts
│   │   │   │   ├── feature.model.ts
│   │   │   │   └── index.ts
│   │   │   ├── services/
│   │   │   │   ├── seo.service.ts              (✓ Created)
│   │   │   │   ├── analytics.service.ts        (✓ Created)
│   │   │   │   ├── lazy-load-image.service.ts  (✓ Created)
│   │   │   │   └── index.ts
│   │   │   ├── guards/              (Ready for expansion)
│   │   │   └── interceptors/        (Ready for expansion)
│   │   │
│   │   ├── 🎨 shared/               ← Shared across entire app
│   │   │   ├── components/
│   │   │   │   ├── atoms/           (START HERE: Button, Input, etc.)
│   │   │   │   │   └── README.md    (Component structure guide)
│   │   │   │   ├── molecules/       (Card, Header, SearchBar)
│   │   │   │   │   └── README.md    (Component structure guide)
│   │   │   │   └── organisms/       (Hero, FeatureGrid, Footer)
│   │   │   │       └── README.md    (Component structure guide)
│   │   │   │
│   │   │   ├── directives/
│   │   │   │   ├── lazy-load.directive.ts      (✓ Created)
│   │   │   │   ├── responsive-hide.directive.ts (✓ Created)
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── pipes/
│   │   │   │   ├── safe-html.pipe.ts           (✓ Created)
│   │   │   │   ├── truncate.pipe.ts            (✓ Created)
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── styles/
│   │   │   │   ├── variables.scss              (✓ Design system tokens)
│   │   │   │   ├── mixins.scss                 (✓ SCSS utilities)
│   │   │   │   └── global.scss                 (✓ Global resets)
│   │   │   │
│   │   │   └── utils/
│   │   │       ├── accessibility.utils.ts      (✓ A11y helpers)
│   │   │       ├── responsive.utils.ts         (✓ Responsive helpers)
│   │   │       └── index.ts
│   │   │
│   │   ├── 📄 features/landing/     ← Landing page feature
│   │   │   ├── pages/
│   │   │   │   └── README.md        (Landing page structure)
│   │   │   ├── sections/
│   │   │   │   └── README.md        (Sections template)
│   │   │   └── services/
│   │   │       └── landing-data.service.ts (✓ Feature service)
│   │   │
│   │   ├── 🔧 app.routes.ts         (✓ Routes configuration)
│   │   ├── ⚙️ app.config.ts         (✓ Application config)
│   │   └── 🏠 app.component.ts      (✓ Root component)
│   │
│   ├── 🎨 styles.scss               (✓ Global imports)
│   ├── 📄 index.html                (✓ Enhanced with SEO)
│   └── 🚀 main.ts                   (✓ Bootstrap)
│
├── package.json
└── tsconfig.json                    (✓ Path aliases configured)
```

---

## 🎯 Creating Your First Component

### 1. Copy the Blueprint
Copy content from `COMPONENT_BLUEPRINT.md`

### 2. Create Component Files
```bash
mkdir -p src/app/shared/components/atoms/button
touch src/app/shared/components/atoms/button/button.component.ts
touch src/app/shared/components/atoms/button/button.component.scss
touch src/app/shared/components/atoms/button/button.component.spec.ts
```

### 3. Implement Component
Modify the blueprint template with your specific needs

### 4. Add to Barrel Export
Update `src/app/shared/components/atoms/index.ts`

### 5. Use in Other Components
```typescript
import { ButtonComponent } from '@shared/components/atoms';

@Component({
  imports: [ButtonComponent],
})
```

---

## 📝 Common Commands

### Development
```bash
# Start dev server
npm start

# Build for development
npm run build

# Build for production
npm run build -- --configuration production

# Run tests
npm test

# Run tests with coverage
npm test -- --code-coverage

# Run linter
npm run lint

# Format code with Prettier
npm run format
```

### Component Generation (Manual)
```bash
# Since we're not using schematics, create manually:
# 1. Create folder
# 2. Copy COMPONENT_BLUEPRINT.md
# 3. Modify as needed
```

---

## 🔑 Key Files to Understand

### Design System
- **variables.scss** - All design tokens (colors, fonts, spacing)
- **mixins.scss** - Reusable SCSS patterns
- **global.scss** - Global base styles

### Services
- **seo.service.ts** - Meta tags & structured data
- **analytics.service.ts** - Event tracking
- **lazy-load-image.service.ts** - Image optimization

### Utilities
- **accessibility.utils.ts** - A11y helpers
- **responsive.utils.ts** - Breakpoint utilities

### Configuration
- **app.config.ts** - Application providers
- **app.routes.ts** - Route definitions
- **tsconfig.json** - TypeScript & path aliases

---

## 🎨 Using the Design System

### CSS Variables
```html
<button style="color: var(--color-primary)">
  Click me
</button>
```

### SCSS Mixins
```scss
@import 'path/to/variables';
@import 'path/to/mixins';

.my-component {
  @include flex-center;
  padding: $space-4;
  
  @include respond-to('mobile') {
    padding: $space-2;
  }
}
```

### Typography
```scss
h1 { @include heading-1; }
h2 { @include heading-2; }
p { @include body-text; }
```

### Buttons
```scss
.btn-primary { @include btn-primary; }
.btn-secondary { @include btn-secondary; }
```

---

## ✨ Using Services

### SEO Service
```typescript
import { SeoService } from '@core/services';

export class MyComponent {
  private seoService = inject(SeoService);

  ngOnInit() {
    this.seoService.setMeta({
      title: 'My Page Title',
      description: 'Page description',
      keywords: ['angular', 'landing'],
    });
  }
}
```

### Analytics Service
```typescript
import { AnalyticsService } from '@core/services';

export class MyComponent {
  private analyticsService = inject(AnalyticsService);

  trackClick() {
    this.analyticsService.trackEvent({
      eventName: 'button_click',
      eventCategory: 'engagement',
    });
  }
}
```

### Lazy Load Directive
```html
<img 
  appLazyLoad
  src="placeholder.jpg"
  [data-src]="actualImage"
  alt="Description"
>
```

---

## 📱 Responsive Design Example

```typescript
import { getCurrentBreakpoint, watchBreakpoints } from '@shared/utils';

export class MyComponent implements OnInit, OnDestroy {
  private unsubscribe?: () => void;

  ngOnInit() {
    // Watch for changes
    this.unsubscribe = watchBreakpoints(breakpoint => {
      console.log('Current breakpoint:', breakpoint);
    });

    // Get current breakpoint
    const current = getCurrentBreakpoint();
  }

  ngOnDestroy() {
    this.unsubscribe?.();
  }
}
```

---

## ♿ Accessibility Example

```typescript
import { generateId, announceToScreenReader } from '@shared/utils';

export class MyComponent {
  private labelId = generateId('label');

  onLoadComplete() {
    announceToScreenReader('Content loaded successfully');
  }
}
```

---

## 🧪 Testing

### Component Test Template
```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit onClick when button clicked', () => {
    spyOn(component.onClick, 'emit');
    fixture.nativeElement.querySelector('button').click();
    expect(component.onClick.emit).toHaveBeenCalled();
  });
});
```

---

## 🐛 Debugging Tips

### Inspect Signals
```typescript
// In Chrome DevTools console
ng.getComponent($0).title()  // Get signal value
ng.getComponent($0).title.set('new')  // Set signal value
```

### Debug Change Detection
```typescript
// In main.ts
import { enableDebugTools } from '@angular/platform-browser';

bootstrapApplication(AppComponent, appConfig).then(moduleRef => {
  enableDebugTools(moduleRef);
});
```

---

## 📚 Documentation Structure

1. **ARCHITECTURE.md** ← Comprehensive guide (read first)
2. **DEVELOPMENT.md** ← Guidelines & patterns
3. **COMPONENT_BLUEPRINT.md** ← Template for new components
4. **SETUP_COMPLETE.md** ← Architecture summary
5. **QUICK_START.md** ← This file

---

## 🎯 Next Steps

1. ✅ Read ARCHITECTURE.md
2. ✅ Read DEVELOPMENT.md
3. ✅ Create first ATOM component (Button)
4. ✅ Create first MOLECULE component (Card)
5. ✅ Create first ORGANISM component (HeroSection)
6. ✅ Build landing page sections
7. ✅ Add navigation
8. ✅ Test & optimize
9. ✅ Deploy

---

## 🔗 Useful Resources

### Angular 21 Features
- [Signals](https://angular.io/guide/signals)
- [Standalone Components](https://angular.io/guide/standalone-components)
- [New Control Flow](https://angular.io/guide/built-in-control-flow)
- [Dependency Injection](https://angular.io/guide/dependency-injection)

### Web Standards
- [WCAG 2.1 Accessibility](https://www.w3.org/WAI/WCAG21/quickref/)
- [Schema.org](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)

### Performance
- [Web Vitals](https://web.dev/vitals/)
- [Lazy Loading Images](https://web.dev/lazy-loading-images/)

---

## 💡 Pro Tips

1. Always import from barrel exports (`index.ts`)
2. Use CSS variables for theming
3. Test accessibility with [WAVE](https://wave.webaim.org/)
4. Monitor performance with [Lighthouse](https://developers.google.com/web/tools/lighthouse)
5. Keep components small and focused
6. Use Signals for state management
7. Implement OnPush change detection
8. Write tests alongside components
9. Document complex logic
10. Follow SOLID principles

---

## 🚀 Ready to Code!

Your architecture is set up and ready. Start by creating your first atom component using COMPONENT_BLUEPRINT.md as your template.

Good luck! 🎉
