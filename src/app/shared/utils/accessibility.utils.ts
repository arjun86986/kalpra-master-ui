/**
 * Accessibility Utilities
 * SOLID: Single Responsibility - Provides accessibility helper functions
 */

/**
 * Generate unique ID for accessibility attributes
 */
export function generateId(prefix: string = 'id'): string {
  return `${prefix}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Check if element is visible to screen readers
 */
export function isAriaVisible(element: HTMLElement): boolean {
  return element.getAttribute('aria-hidden') !== 'true';
}

/**
 * Set focus-visible outline
 */
export function setFocusStyle(element: HTMLElement, color: string, width: number): void {
  element.style.outline = `${width}px solid ${color}`;
  element.style.outlineOffset = '2px';
}

/**
 * Announce message to screen readers
 */
export function announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', priority);
  announcement.className = 'sr-only'; // visually hidden but accessible
  announcement.textContent = message;
  document.body.appendChild(announcement);

  // Remove after announcement
  setTimeout(() => announcement.remove(), 1000);
}

/**
 * Skip to main content link handler
 */
export function initializeSkipLink(): void {
  const skipLink = document.querySelector('a.skip-to-main');
  if (skipLink) {
    skipLink.addEventListener('click', (e: Event) => {
      e.preventDefault();
      const mainContent = document.querySelector('main');
      if (mainContent) {
        mainContent.focus();
        mainContent.scrollIntoView();
      }
    });
  }
}
