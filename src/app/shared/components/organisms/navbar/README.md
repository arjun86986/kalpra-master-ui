# 🍔 Kalpra - Premium Sticky Navbar

## Overview

A modern, responsive, sticky navigation bar component built with Angular 21 Standalone Components and featuring glassmorphism design effects.

## Features

✨ **Glassmorphism Design**
- Backdrop blur effect with transparency
- Smooth glass-like appearance
- Enhanced blur on scroll

🎯 **Responsive Design**
- Mobile-first approach
- Hamburger menu on mobile/tablet
- Desktop navigation menu
- Touch-friendly interactive elements

📌 **Sticky Positioning**
- Stays at top while scrolling
- Scroll state detection for dynamic styling
- Fixed z-index for overlay management

🎨 **Premium Styling**
- Gradient logo with glow effect
- Smooth link animations with underline
- Animated hamburger menu icon
- Accent color highlights

⚡ **Angular 21 Features**
- Standalone component (no NgModule required)
- Signals for reactive state management
- Computed signals for responsive breakpoints
- Event listener cleanup on destroy

♿ **Accessibility**
- ARIA labels for screen readers
- Keyboard navigation support
- Focus-visible states on all interactive elements
- Semantic HTML structure
- Reduced motion support for animations

## Component Structure

```
navbar/
├── navbar.component.ts       # Standalone component with Signals
├── navbar.component.html     # Template with responsive structure
├── navbar.component.scss     # Glassmorphic styles
└── README.md                 # This file
```

## Usage

### Import in Your Component

```typescript
import { NavbarComponent } from '@shared/components/organisms/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <main>Your content here</main>
  `
})
export class AppComponent {}
```

### HTML Usage

```html
<app-navbar></app-navbar>
```

## Component API

### Signals

| Signal | Type | Description |
|--------|------|-------------|
| `isMenuOpen` | `Signal<boolean>` | Mobile menu open state |
| `isScrolled` | `Signal<boolean>` | Scroll position (10px+) |
| `windowWidth` | `Signal<number>` | Current window width |

### Computed Signals

| Computed | Type | Description |
|----------|------|-------------|
| `isMobile` | `Computed<boolean>` | Width < 768px |
| `isTablet` | `Computed<boolean>` | Width 768px-1024px |
| `isDesktop` | `Computed<boolean>` | Width >= 1024px |

### Methods

| Method | Parameters | Description |
|--------|-----------|-------------|
| `toggleMenu()` | - | Toggle mobile menu |
| `closeMenu()` | - | Close mobile menu |
| `onNavLinkClick()` | - | Handle nav link clicks |

## Navigation Configuration

Edit nav links in the component:

```typescript
navLinks: NavLink[] = [
  { label: 'Products', href: '#products' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Resources', href: '#resources' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];
```

## Styling & Customization

### Glassmorphism Effect

The navbar uses backdrop blur for modern glass effect:

```scss
background: rgba(15, 20, 34, 0.7);
backdrop-filter: blur(12px);
border-bottom: 1px solid rgba(42, 48, 72, 0.3);
```

### Scroll Enhancement

When scrolled > 10px:

```scss
background: rgba(15, 20, 34, 0.85);
backdrop-filter: blur(16px);
border-bottom-color: rgba(42, 48, 72, 0.5);
box-shadow: var(--shadow-md);
```

### Responsive Breakpoints

- **Mobile:** < 768px (hamburger menu, full-width buttons)
- **Tablet:** 768px - 1024px (horizontal menu)
- **Desktop:** >= 1024px (full navigation with spacing)

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support (backdrop-filter support)
- Safari: Full support
- Mobile browsers: Full support (iOS 9+, Android 5+)

## Animation Details

### Link Underline Animation
- Slides from left to right on hover
- Duration: 200ms with ease-in-out timing

### Hamburger Menu Icon
- Lines rotate and translate on click
- Smooth 200ms transitions
- Center line fades out when open

### Mobile Menu
- Slides down with smooth height transition
- 300ms (slower) animation duration
- Staggered link animations (50ms delay between items)

## Accessibility Features

### ARIA Attributes
```html
<!-- Hamburger button -->
<button aria-label="Open menu" aria-expanded="false">
  <span class="hamburger"></span>
</button>
```

### Keyboard Navigation
- Tab through all interactive elements
- Enter/Space to activate buttons
- Escape could close mobile menu (future enhancement)

### Motion Preferences
Respects `prefers-reduced-motion` media query:
```scss
@media (prefers-reduced-motion: reduce) {
  /* All transitions and animations disabled */
}
```

### High Contrast Mode
Supports `prefers-contrast` media query for enhanced visibility

## Performance Considerations

✅ **Optimized for Performance**
- Event listeners throttled with Signals
- CSS transitions hardware-accelerated (transform, opacity)
- No unnecessary re-renders (standalone + signals)
- Minimal DOM nodes

🎯 **Best Practices Implemented**
- Lazy event listeners (added only after init)
- Event delegation for link clicks
- CSS containment for isolated rendering
- Optimized media queries

## Common Customizations

### Change Logo Text

```typescript
// In navbar.component.html
<span class="logo-text">YOUR_BRAND</span>
```

### Customize Colors

Update SCSS variables in `kalpra-brand.scss`:

```scss
$color-primary: #6C5CE7;
$color-secondary: #7C4DFF;
$color-accent: #00D4FF;
```

### Add More Navigation Links

```typescript
navLinks: NavLink[] = [
  // Existing links...
  { label: 'Blog', href: '#blog' },
  { label: 'Careers', href: '#careers' },
];
```

### Adjust Sticky Position

```scss
.navbar {
  top: 0; // Change this value
}
```

## Related Components

- **Button Component** - Used for Login and Book Demo buttons
- **Design System** - See `DESIGN_SYSTEM.md` for token reference
- **Kalpra Tokens** - TypeScript design tokens in `kalpra-tokens.ts`

## Future Enhancements

- [ ] Search functionality
- [ ] User profile dropdown menu
- [ ] Dark/Light theme toggle
- [ ] Notification badge
- [ ] Multi-language support
- [ ] Analytics tracking for link clicks

## Troubleshooting

### Menu doesn't close on mobile
Check that `onNavLinkClick()` is properly bound to all nav links.

### Blur effect not visible
Verify browser support for `backdrop-filter` CSS property.

### Z-index conflicts
Ensure navbar z-index value is higher than other sticky elements.

---

**Created:** June 2026  
**Version:** 1.0.0  
**Status:** Production Ready ✅
