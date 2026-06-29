/**
 * Responsive Design Utilities
 * SOLID: Single Responsibility - Provides responsive helper functions
 */

export const BREAKPOINTS = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
  wide: 1440,
  ultraWide: 1920,
} as const;

/**
 * Check if viewport matches breakpoint
 */
export function isMediaQuery(query: string): boolean {
  return window.matchMedia(query).matches;
}

/**
 * Get current breakpoint
 */
export function getCurrentBreakpoint(): keyof typeof BREAKPOINTS {
  const width = window.innerWidth;

  if (width >= BREAKPOINTS.ultraWide) return 'ultraWide';
  if (width >= BREAKPOINTS.wide) return 'wide';
  if (width >= BREAKPOINTS.desktop) return 'desktop';
  if (width >= BREAKPOINTS.tablet) return 'tablet';
  return 'mobile';
}

/**
 * Watch for breakpoint changes
 */
export function watchBreakpoints(callback: (breakpoint: keyof typeof BREAKPOINTS) => void): () => void {
  const mediaQueries = Object.entries(BREAKPOINTS).map(([key, value]) => ({
    key: key as keyof typeof BREAKPOINTS,
    mq: window.matchMedia(`(min-width: ${value}px)`),
  }));

  const handler = () => {
    callback(getCurrentBreakpoint());
  };

  mediaQueries.forEach(({ mq }) => {
    mq.addEventListener('change', handler);
  });

  // Return cleanup function
  return () => {
    mediaQueries.forEach(({ mq }) => {
      mq.removeEventListener('change', handler);
    });
  };
}
