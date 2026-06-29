/**
 * Application Configuration
 * SOLID: Single Responsibility - Centralized configuration
 */
export const APP_CONFIG = {
  appName: 'Kalpra',
  appVersion: '1.0.0',
  environment: 'production',
  analyticsId: 'YOUR_ANALYTICS_ID',
  siteUrl: 'https://kalpra.com',
};

export const SEO_CONFIG = {
  defaultTitle: 'Kalpra - Production Ready Landing Page',
  defaultDescription: 'Modern, scalable Angular 21 landing page with Signals and Standalone Components',
  defaultAuthor: 'Kalpra Team',
  defaultKeywords: ['angular', 'landing', 'responsive', 'seo'],
};

export const IMAGE_CONFIG = {
  lazyLoadThreshold: 0.1,
  placeholderColor: '#f0f0f0',
  supportedFormats: ['webp', 'jpg', 'png'],
};

export const ACCESSIBILITY_CONFIG = {
  focusOutlineColor: '#4A90E2',
  focusOutlineWidth: 2,
  minContrastRatio: 4.5,
};
