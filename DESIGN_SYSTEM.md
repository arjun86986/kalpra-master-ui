## 🎨 KALPRA - Premium Design System

### Brand Identity

**Name:** Kalpra  
**Theme:** Dark Premium Modern  
**Inspiration:** Apple, Linear, Vercel, Datadog  
**Primary Font:** Inter  
**Grid System:** 8px  
**Border Radius:** 18px (Primary)

---

## 🎯 Color Palette

### Primary Colors
- **Primary:** #6C5CE7 (Kalpra Purple)
- **Primary Light:** #8B7FE8
- **Primary Dark:** #4D3FA8

### Secondary Colors
- **Secondary:** #7C4DFF (Vibrant Purple)
- **Secondary Light:** #9970FF
- **Secondary Dark:** #5C2EBF

### Accent Colors
- **Accent:** #00D4FF (Cyan)
- **Accent Light:** #33DCFF
- **Accent Dark:** #00A8CC

### Background Colors
- **Primary BG:** #050816 (Deep Navy)
- **Secondary BG:** #0F1422
- **Tertiary BG:** #1A1F35 (Card Background)
- **Hover BG:** #242B45
- **Active BG:** #2E3652

### Text Colors
- **Primary Text:** #FFFFFF
- **Secondary Text:** #B8BDD1
- **Tertiary Text:** #8A8F9E
- **Muted Text:** #5E6477

### Semantic Colors
- **Success:** #00D97E
- **Warning:** #FFB224
- **Error:** #FF4757
- **Info:** #00D4FF

---

## 📐 Typography

### Font Family
- **Base Font:** Inter
- **Mono Font:** JetBrains Mono (for code)

### Font Sizes (Modular Scale)
```
xs:   12px
sm:   14px
base: 16px
lg:   18px
xl:   20px
2xl:  24px
3xl:  30px
4xl:  36px
5xl:  44px
6xl:  56px
```

### Font Weights
```
Light:       300
Regular:     400
Medium:      500
Semibold:    600
Bold:        700
Extra Bold:  800
```

### Line Heights
```
Tight:       1.2
Snug:        1.375
Normal:      1.5
Relaxed:     1.625
Loose:       2
```

### Typography Presets
- **H1:** 56px, Bold (700), -0.02em letter spacing
- **H2:** 44px, Bold (700)
- **H3:** 36px, Bold (700)
- **H4:** 30px, Bold (700)
- **H5:** 24px, Semibold (600)
- **H6:** 20px, Semibold (600)
- **Body:** 16px, Regular (400)
- **Small:** 14px, Regular (400)
- **Caption:** 12px, Regular (400)

---

## 📏 Spacing System

**8px Grid**

```
1:   8px
2:   16px
3:   24px
4:   32px
5:   40px
6:   48px
7:   56px
8:   64px
9:   72px
10:  80px
12:  96px
16:  128px
20:  160px
```

---

## 🔘 Buttons

### Button Types

#### 1. Primary Button
- **Background:** Gradient (Primary → Secondary)
- **Color:** White
- **Shadow:** Medium + Glow
- **Radius:** 18px
- **Padding:** 0.75rem 1.5rem

```scss
.btn-primary {
  background: linear-gradient(135deg, #6C5CE7 0%, #7C4DFF 100%);
  color: #FFFFFF;
  box-shadow: 0 8px 12px rgba(0,0,0,0.16), 0 0 20px rgba(108,92,231,0.3);
  border-radius: 18px;
}
```

#### 2. Secondary Button
- **Background:** Tertiary BG
- **Color:** White
- **Border:** Light Border
- **Radius:** 18px
- **Shadow:** Small

```scss
.btn-secondary {
  background: #1A1F35;
  border: 1px solid #383E52;
  color: #FFFFFF;
  border-radius: 18px;
}
```

#### 3. Accent Button
- **Background:** Cyan (#00D4FF)
- **Color:** Deep Navy
- **Shadow:** Medium + Glow
- **Radius:** 18px

```scss
.btn-accent {
  background: #00D4FF;
  color: #050816;
  box-shadow: 0 8px 12px rgba(0,0,0,0.16), 0 0 20px rgba(0,212,255,0.3);
}
```

#### 4. Ghost Button
- **Background:** Transparent
- **Border:** None
- **Color:** White

```scss
.btn-ghost {
  background: transparent;
  color: #FFFFFF;
}
```

### Button Sizes
- **Small:** 0.5rem 1rem, 12px font
- **Base:** 0.75rem 1.5rem, 14px font
- **Large:** 1rem 2rem, 16px font

### Button States
- **Hover:** Translate Y(-2px), Elevated shadow
- **Active:** Translate Y(0), Normal shadow
- **Disabled:** Opacity 0.5, not-allowed cursor
- **Focus:** Cyan outline (2px), 2px offset

---

## 💳 Cards

### Default Card
- **Background:** #1A1F35
- **Border:** 1px solid #2A3048
- **Radius:** 18px
- **Padding:** 16px
- **Shadow:** Small

```scss
.card {
  background: #1A1F35;
  border: 1px solid #2A3048;
  border-radius: 18px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.08);
}
```

### Elevated Card
- **Shadow:** Medium (more prominent)

### Gradient Card
- **Background:** Gradient overlay
- **Border:** Gradient outline

### Card Sections
- **Header:** Border-bottom separator
- **Body:** Padding 16px
- **Footer:** Border-top separator, darker background

---

## 📝 Inputs

### Input Base
- **Background:** #0F1422
- **Border:** 1px solid #2A3048
- **Color:** White
- **Radius:** 16px
- **Padding:** 0.75rem 1rem

```scss
input {
  background: #0F1422;
  border: 1px solid #2A3048;
  border-radius: 16px;
  color: #FFFFFF;
  padding: 0.75rem 1rem;
}

input:focus {
  border-color: #6C5CE7;
  box-shadow: 0 0 0 3px rgba(108, 92, 231, 0.1);
}
```

### Input States
- **Hover:** Border becomes lighter
- **Focus:** Primary border + glow effect
- **Disabled:** Opacity 0.5

---

## 🏷️ Badges & Tags

### Badges
- **Small rounded elements**
- **Colored backgrounds with borders**
- **12px font size**

#### Types:
- Default: Dark background, white text
- Primary: Purple background, purple text
- Secondary: Purple background, purple text
- Accent: Cyan background, cyan text
- Success: Green background, green text

### Tags
- **Interactive elements**
- **Slightly larger than badges**
- **Hover effect with primary color**

---

## 🎭 Shadows (Depth System)

```
xs:    0 1px 2px rgba(0,0,0,0.05)
sm:    0 2px 4px rgba(0,0,0,0.08)
base:  0 4px 6px rgba(0,0,0,0.12)
md:    0 8px 12px rgba(0,0,0,0.16)
lg:    0 12px 20px rgba(0,0,0,0.2)
xl:    0 16px 32px rgba(0,0,0,0.24)
2xl:   0 24px 48px rgba(0,0,0,0.32)
```

### Glow Effects
- **Primary Glow:** 0 0 20px rgba(108, 92, 231, 0.3)
- **Secondary Glow:** 0 0 20px rgba(124, 77, 255, 0.3)
- **Accent Glow:** 0 0 20px rgba(0, 212, 255, 0.3)

---

## ✨ Animations

### Keyframe Animations
- **fadeIn:** Opacity 0 → 1
- **slideInUp:** Translate Y(10px) + fade
- **slideInDown:** Translate Y(-10px) + fade
- **slideInLeft:** Translate X(-10px) + fade
- **slideInRight:** Translate X(10px) + fade
- **pulse:** Opacity oscillation
- **shimmer:** Loading effect
- **glow:** Glowing effect

### Transition Durations
```
fast:   100ms
base:   200ms
slow:   300ms
slower: 500ms
```

### Easing Functions
```
linear:     linear
in:         cubic-bezier(0.4, 0, 1, 1)
out:        cubic-bezier(0, 0, 0.2, 1)
inOut:      cubic-bezier(0.4, 0, 0.2, 1)
elastic:    cubic-bezier(0.175, 0.885, 0.32, 1.275)
```

---

## 📱 Responsive Breakpoints

```
Mobile:    320px
Tablet:    768px
Desktop:   1024px
Wide:      1440px
UltraWide: 1920px
```

---

## 🔄 Border Radius

```
none:  0
sm:    8px
md:    16px
lg:    18px (Primary)
xl:    24px
2xl:   32px
3xl:   40px
full:  9999px
```

---

## 🎨 Usage Examples

### SCSS
```scss
@use 'app/shared/styles/kalpra-brand' as *;

.my-component {
  background: var(--color-bg-tertiary);
  color: var(--color-text-primary);
  border-radius: $radius-lg;
  padding: $space-2;
  box-shadow: var(--shadow-md);
  transition: all $duration-base $ease-in-out;

  &:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-2px);
  }
}
```

### TypeScript (Tokens)
```typescript
import { KalpraBrandTokens } from '@shared/styles/kalpra-tokens';

const primaryColor = KalpraBrandTokens.colors.primary.base;
const buttonPadding = KalpraBrandTokens.components.button.sizes.base.padding;
```

### HTML
```html
<!-- Primary Button -->
<button class="btn btn-primary">Click me</button>

<!-- Card -->
<div class="card">
  <div class="card-header">
    <h3>Card Title</h3>
  </div>
  <div class="card-body">
    Content goes here
  </div>
</div>

<!-- Badge -->
<span class="badge badge-primary">Premium</span>
```

---

## 📋 Design System Files

- **kalpra-brand.scss** - Brand colors, typography, spacing, shadows, animations
- **kalpra-components.scss** - Reusable component styles
- **kalpra-tokens.ts** - Design tokens in TypeScript
- **variables.scss** - Additional SCSS variables (legacy)
- **mixins.scss** - SCSS utility mixins
- **global.scss** - Global resets and base styles

---

## ✅ Best Practices

1. **Use CSS Variables** for dynamic theming
2. **Use SCSS Variables** for build-time compilation
3. **Follow the 8px Grid** for consistency
4. **Use 18px Radius** as primary border radius
5. **Maintain Shadow Hierarchy** (xs → 2xl)
6. **Respect Typography Scale** for readability
7. **Use Transition Durations** consistently
8. **Test Dark Mode** appearance
9. **Ensure Accessibility** (contrast, focus states)
10. **Use Animations Sparingly** for performance

---

## 🚀 Implementation

### Step 1: Import Brand System
```scss
@use 'app/shared/styles/kalpra-brand' as *;
```

### Step 2: Use Design Tokens
```scss
background: var(--color-bg-tertiary);
color: var(--color-text-primary);
border-radius: $radius-lg;
```

### Step 3: Apply Component Styles
```html
<button class="btn btn-primary">Primary</button>
<div class="card">...</div>
```

---

## 📞 Support

For design system updates or questions, refer to:
- kalpra-brand.scss - Color & token definitions
- kalpra-components.scss - Component implementation
- kalpra-tokens.ts - TypeScript tokens

**Premium design system by Kalpra** ✨
