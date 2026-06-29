import { AfterViewInit, Component, ElementRef, inject, PLATFORM_ID, signal, ViewChild } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ScrollRevealDirective } from '../../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  animations: [
    trigger('heroReveal', [
      state('hidden', style({ opacity: 0, transform: 'translateY(24px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('900ms cubic-bezier(0.22, 1, 0.36, 1)')),
    ]),
    trigger('heroParallax', [
      state('idle', style({ transform: 'translateY(0px)' })),
      state('active', style({ transform: 'translateY(-8px)' })),
      transition('idle <=> active', animate('900ms ease-in-out')),
    ]),
    trigger('counterFade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms 250ms ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class HeroSectionComponent implements AfterViewInit {
  @ViewChild('heroSection', { static: true }) private heroSection!: ElementRef<HTMLElement>;

  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  readonly reveal = signal(false);
  readonly drift = signal<'idle' | 'active'>('idle');
  readonly deliveryScore = signal(0);
  readonly deliveryTarget = 97.4;

  ngAfterViewInit(): void {
    if (!this.isBrowser) {
      this.reveal.set(true);
      this.drift.set('active');
      this.deliveryScore.set(this.deliveryTarget);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          this.reveal.set(true);
          this.drift.set('active');
          this.animateScore();
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(this.heroSection.nativeElement);
  }

  private animateScore(): void {
    const start = performance.now();
    const duration = 1400;

    const tick = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      this.deliveryScore.set(Number((this.deliveryTarget * progress).toFixed(1)));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }
}
