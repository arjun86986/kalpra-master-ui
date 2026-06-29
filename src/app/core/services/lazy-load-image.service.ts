import { Injectable } from '@angular/core';
import { IMAGE_CONFIG } from '../config/app.config';

/**
 * Lazy Load Image Service - Handles lazy loading of images
 * SOLID: Single Responsibility - Only handles image lazy loading
 */
@Injectable({
  providedIn: 'root',
})
export class LazyLoadImageService {
  private intersectionObserver: IntersectionObserver | null = null;

  /**
   * Initialize Intersection Observer for lazy loading
   */
  initializeLazyLoad(elements: HTMLImageElement[]): void {
    if (!this.intersectionObserver) {
      this.intersectionObserver = new IntersectionObserver(
        entries => this.onIntersection(entries),
        {
          threshold: IMAGE_CONFIG.lazyLoadThreshold,
          rootMargin: '50px',
        },
      );
    }

    elements.forEach(element => {
      this.intersectionObserver?.observe(element);
    });
  }

  /**
   * Stop lazy loading
   */
  destroy(): void {
    this.intersectionObserver?.disconnect();
    this.intersectionObserver = null;
  }

  private onIntersection(entries: IntersectionObserverEntry[]): void {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        const src = img.getAttribute('data-src');

        if (src) {
          img.src = src;
          img.removeAttribute('data-src');
          this.intersectionObserver?.unobserve(img);

          // Add loaded class for CSS transitions
          img.classList.add('loaded');
        }
      }
    });
  }
}
