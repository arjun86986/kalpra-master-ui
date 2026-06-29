/**
 * KALPRA - Design Tokens
 * 
 * Centralized design system tokens for consistency
 * Follows the Kalpra brand guidelines
 */

export const KalpraBrandTokens = {
  // ============================================================
  // Brand Colors
  // ============================================================
  colors: {
    primary: {
      base: '#6C5CE7',
      light: '#8B7FE8',
      lighter: '#A9A4ED',
      dark: '#4D3FA8',
      darker: '#2E2360',
    },
    secondary: {
      base: '#7C4DFF',
      light: '#9970FF',
      lighter: '#B393FF',
      dark: '#5C2EBF',
      darker: '#3D1A80',
    },
    accent: {
      base: '#00D4FF',
      light: '#33DCFF',
      lighter: '#66E5FF',
      dark: '#00A8CC',
      darker: '#008099',
    },
    background: {
      primary: '#050816',
      secondary: '#0F1422',
      tertiary: '#1A1F35',
      hover: '#242B45',
      active: '#2E3652',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B8BDD1',
      tertiary: '#8A8F9E',
      muted: '#5E6477',
    },
    border: {
      base: '#2A3048',
      light: '#383E52',
      lighter: '#474E66',
      dark: '#1F2434',
    },
    semantic: {
      success: '#00D97E',
      warning: '#FFB224',
      error: '#FF4757',
      info: '#00D4FF',
    },
  },

  // ============================================================
  // Typography
  // ============================================================
  typography: {
    fontFamily: {
      base: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto'",
      mono: "'JetBrains Mono', 'SFMono-Regular', 'Consolas'",
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '44px',
      '6xl': '56px',
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extraBold: 800,
    },
    lineHeight: {
      tight: 1.2,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
    letterSpacing: {
      tight: '-0.02em',
      normal: '0',
      wide: '0.02em',
      wider: '0.05em',
    },
  },

  // ============================================================
  // Spacing
  // ============================================================
  spacing: {
    0: '0',
    1: '8px',
    2: '16px',
    3: '24px',
    4: '32px',
    5: '40px',
    6: '48px',
    7: '56px',
    8: '64px',
    9: '72px',
    10: '80px',
    12: '96px',
    16: '128px',
    20: '160px',
  },

  // ============================================================
  // Border Radius
  // ============================================================
  borderRadius: {
    none: '0',
    sm: '8px',
    md: '16px',
    lg: '18px', // Primary
    xl: '24px',
    '2xl': '32px',
    '3xl': '40px',
    full: '9999px',
  },

  // ============================================================
  // Shadows
  // ============================================================
  shadows: {
    none: 'none',
    xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
    sm: '0 2px 4px rgba(0, 0, 0, 0.08)',
    base: '0 4px 6px rgba(0, 0, 0, 0.12)',
    md: '0 8px 12px rgba(0, 0, 0, 0.16)',
    lg: '0 12px 20px rgba(0, 0, 0, 0.2)',
    xl: '0 16px 32px rgba(0, 0, 0, 0.24)',
    '2xl': '0 24px 48px rgba(0, 0, 0, 0.32)',
    glowPrimary: '0 0 20px rgba(108, 92, 231, 0.3)',
    glowSecondary: '0 0 20px rgba(124, 77, 255, 0.3)',
    glowAccent: '0 0 20px rgba(0, 212, 255, 0.3)',
  },

  // ============================================================
  // Transitions
  // ============================================================
  transitions: {
    duration: {
      fast: '100ms',
      base: '200ms',
      slow: '300ms',
      slower: '500ms',
    },
    easing: {
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      elastic: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    },
  },

  // ============================================================
  // Breakpoints
  // ============================================================
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px',
    ultraWide: '1920px',
  },

  // ============================================================
  // Component Sizes
  // ============================================================
  components: {
    button: {
      sizes: {
        sm: { padding: '0.5rem 1rem', fontSize: '12px' },
        base: { padding: '0.75rem 1.5rem', fontSize: '14px' },
        lg: { padding: '1rem 2rem', fontSize: '16px' },
      },
      borderRadius: '18px',
    },
    card: {
      borderRadius: '18px',
      padding: '16px',
    },
    input: {
      borderRadius: '16px',
      padding: '0.75rem 1rem',
      fontSize: '14px',
    },
  },

  // ============================================================
  // Z-Index Scale
  // ============================================================
  zIndex: {
    hide: '-1',
    base: '0',
    dropdown: '1000',
    sticky: '1010',
    fixed: '1020',
    modalBackdrop: '1030',
    modal: '1040',
    popover: '1050',
    tooltip: '1060',
  },
};

// ============================================================
// Typography Presets
// ============================================================
export const TypographyPresets = {
  h1: {
    fontSize: '56px',
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
  },
  h2: {
    fontSize: '44px',
    fontWeight: 700,
    lineHeight: 1.2,
  },
  h3: {
    fontSize: '36px',
    fontWeight: 700,
    lineHeight: 1.2,
  },
  h4: {
    fontSize: '30px',
    fontWeight: 700,
    lineHeight: 1.375,
  },
  h5: {
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: 1.375,
  },
  h6: {
    fontSize: '20px',
    fontWeight: 600,
    lineHeight: 1.5,
  },
  body: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 1.5,
  },
  bodySmall: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 1.5,
  },
  caption: {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: 1.5,
    color: '#B8BDD1',
  },
  code: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '14px',
    fontWeight: 400,
  },
};

// ============================================================
// Component Presets
// ============================================================
export const ComponentPresets = {
  button: {
    primary: {
      background: 'linear-gradient(135deg, #6C5CE7 0%, #7C4DFF 100%)',
      color: '#FFFFFF',
      borderRadius: '18px',
      fontSize: '14px',
      fontWeight: 500,
      padding: '0.75rem 1.5rem',
      boxShadow: 'var(--shadow-md), var(--shadow-glow-primary)',
    },
    secondary: {
      background: '#1A1F35',
      color: '#FFFFFF',
      border: '1px solid #383E52',
      borderRadius: '18px',
      fontSize: '14px',
      fontWeight: 500,
      padding: '0.75rem 1.5rem',
    },
    accent: {
      background: '#00D4FF',
      color: '#050816',
      borderRadius: '18px',
      fontSize: '14px',
      fontWeight: 600,
      padding: '0.75rem 1.5rem',
      boxShadow: 'var(--shadow-md), var(--shadow-glow-accent)',
    },
  },
  card: {
    default: {
      background: '#1A1F35',
      border: '1px solid #2A3048',
      borderRadius: '18px',
      padding: '16px',
      boxShadow: 'var(--shadow-sm)',
    },
    elevated: {
      background: '#1A1F35',
      border: '1px solid #383E52',
      borderRadius: '18px',
      padding: '16px',
      boxShadow: 'var(--shadow-md)',
    },
  },
  input: {
    default: {
      background: '#0F1422',
      color: '#FFFFFF',
      border: '1px solid #2A3048',
      borderRadius: '16px',
      fontSize: '14px',
      padding: '0.75rem 1rem',
    },
  },
};
