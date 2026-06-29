import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type ScrollRevealVariant = 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right' | 'scale';

/**
 * IntersectionObserver-based scroll reveal with reduced-motion support.
 */
@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
  host: {
    class: 'scroll-reveal',
    '[class.scroll-reveal--revealed]': 'revealed()',
    '[class.scroll-reveal--fade-up]': 'variant === "fade-up"',
    '[class.scroll-reveal--fade-in]': 'variant === "fade-in"',
    '[class.scroll-reveal--fade-left]': 'variant === "fade-left"',
    '[class.scroll-reveal--fade-right]': 'variant === "fade-right"',
    '[class.scroll-reveal--scale]': 'variant === "scale"',
    '[style.--reveal-delay]': 'revealDelay + "ms"',
  },
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);

  @Input('appScrollReveal') variant: ScrollRevealVariant = 'fade-up';
  @Input() revealDelay = 0;

  readonly revealed = signal(false);

  private observer?: IntersectionObserver;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.revealed.set(true);
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.revealed.set(true);
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          this.revealed.set(true);
          this.observer?.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' },
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
