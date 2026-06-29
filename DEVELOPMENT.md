/**
 * DEVELOPMENT GUIDELINES
 * 
 * Follow these guidelines when developing components and features
 */

## 🎯 Component Development Checklist

### 1. Setup
- [ ] Create folder: `src/app/[path]/[component-name]/`
- [ ] Create `.component.ts` file
- [ ] Make it standalone: `standalone: true`
- [ ] Add appropriate imports

### 2. State Management (Signals)
- [ ] Use `signal()` for state
- [ ] Use `input()` for inputs
- [ ] Use `output()` for events
- [ ] Use `computed()` for derived state
- [ ] Use `effect()` for side effects

### 3. Styling
- [ ] Create `.component.scss` file
- [ ] Use SCSS variables from `variables.scss`
- [ ] Use mixins from `mixins.scss`
- [ ] Implement responsive design
- [ ] Use CSS custom properties

### 4. Accessibility
- [ ] Add `role` attributes where needed
- [ ] Add `aria-*` attributes for screen readers
- [ ] Use semantic HTML
- [ ] Implement keyboard navigation
- [ ] Ensure focus management
- [ ] Test with WAVE or Axe DevTools

### 5. Responsiveness
- [ ] Mobile-first approach
- [ ] Test on multiple breakpoints
- [ ] Use responsive mixins
- [ ] Test touch interactions
- [ ] Verify text readability

### 6. Performance
- [ ] Use lazy loading for images
- [ ] Optimize bundle size
- [ ] Use OnPush change detection where applicable
- [ ] Avoid memory leaks
- [ ] Unsubscribe from observables

### 7. Testing
- [ ] Create `.component.spec.ts` file
- [ ] Write unit tests
- [ ] Test user interactions
- [ ] Test accessibility features
- [ ] Aim for >80% coverage

### 8. Documentation
- [ ] Add JSDoc comments
- [ ] Document component inputs/outputs
- [ ] Provide usage examples
- [ ] Document any special behavior
- [ ] Add comments for complex logic

## 📝 Code Style Guide

### Naming Conventions
```typescript
// Components
export class HeroSectionComponent { }

// Services
export class SeoService { }

// Signals
readonly isLoading = signal(false);

// Inputs/Outputs
title = input<string>('');
onClick = output<void>();

// Private fields
private unsubscribe$ = new Subject<void>();
```

### File Naming
```
component.component.ts       // Component
component.component.scss     // Styles
component.component.spec.ts  // Tests
component.model.ts           // Type definitions
component.service.ts         // Service
```

### Import Order
```typescript
// 1. Angular core
import { Component, inject, signal } from '@angular/core';

// 2. Angular platform
import { CommonModule } from '@angular/common';

// 3. RxJS
import { Subject } from 'rxjs';

// 4. App imports (absolute paths)
import { SeoService } from '@core/services';

// 5. Local imports (relative)
import { CardComponent } from '../card/card.component';
```

## 🔍 Signal Patterns

### Input Signal
```typescript
title = input<string>('default');
disabled = input<boolean>(false);
```

### Computed Signal
```typescript
readonly isVisible = computed(() => !this.disabled());
```

### Effect
```typescript
effect(() => {
  if (this.isLoading()) {
    console.log('Loading started');
  }
});
```

### Output Signal
```typescript
onClick = output<void>();

// Emit event
onButtonClick(): void {
  this.onClick.emit();
}
```

## 🎨 Styling Patterns

### Component SCSS
```scss
@import 'path/to/variables';
@import 'path/to/mixins';

.component {
  @include flex-center;
  padding: $space-4;
  
  @include respond-to('mobile') {
    padding: $space-2;
  }

  &:focus-visible {
    @include focus-ring;
  }
}
```

### CSS Custom Properties
```typescript
style="color: var(--color-primary)"
```

## ♿ Accessibility Patterns

### Semantic HTML
```html
<header>Navigation</header>
<nav></nav>
<main id="main-content"></main>
<section aria-label="Features"></section>
<article role="doc-chapter"></article>
<footer></footer>
```

### Interactive Elements
```html
<button 
  type="button"
  aria-label="Close dialog"
  (click)="onClose()"
>
  ✕
</button>

<input 
  type="text"
  aria-label="Search"
  aria-describedby="search-hint"
>
```

### Screen Readers
```typescript
import { announceToScreenReader } from '@shared/utils';

// Announce loading state
announceToScreenReader('Loading content...');
```

## 📱 Responsive Patterns

### Mobile-First
```scss
// Base styles (mobile)
.component {
  font-size: $font-size-base;
  padding: $space-2;
}

// Tablet and up
@include min-width($tablet) {
  font-size: $font-size-lg;
  padding: $space-4;
}
```

### Using Utilities
```typescript
import { getCurrentBreakpoint } from '@shared/utils';

const breakpoint = getCurrentBreakpoint(); // 'mobile' | 'tablet' | 'desktop' | 'wide'
```

## 🚀 Performance Patterns

### OnPush Change Detection
```typescript
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
})
```

### Lazy Load Images
```html
<img 
  appLazyLoad
  src="placeholder.jpg"
  [data-src]="actualImage"
  alt="Description"
>
```

### Unsubscribe
```typescript
private destroy$ = new Subject<void>();

ngOnInit(): void {
  this.service.data$
    .pipe(takeUntil(this.destroy$))
    .subscribe(data => { /* ... */ });
}

ngOnDestroy(): void {
  this.destroy$.next();
  this.destroy$.complete();
}
```

## 🧪 Testing Patterns

### Component Test Template
```typescript
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

  it('should emit onClick when clicked', () => {
    spyOn(component.onClick, 'emit');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.onClick.emit).toHaveBeenCalled();
  });
});
```

## 🐛 Debugging

### Enable Debug Mode
```typescript
import { enableDebugTools } from '@angular/platform-browser';

// In main.ts (development only)
bootstrapApplication(AppComponent, appConfig).then(moduleRef => {
  enableDebugTools(moduleRef);
});
```

### Inspect Signals
```typescript
// In console
ng.getComponent($0).title() // Get signal value
ng.getComponent($0).title.set('new value') // Set signal value
```
