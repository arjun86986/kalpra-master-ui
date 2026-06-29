/**
 * Kalpra - Premium Navbar Component
 *
 * Sticky glass nav with section scroll-spy and smooth anchor navigation.
 */

import {
  Component,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  computed,
  inject,
  signal,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface NavLink {
  label: string;
  href: string;
  sectionId: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  private sectionObserver?: IntersectionObserver;
  private readonly resizeHandler = () => this.windowWidth.set(window.innerWidth);
  private readonly scrollHandler = () => this.isScrolled.set(window.scrollY > 10);

  isMenuOpen = signal(false);
  isScrolled = signal(false);
  windowWidth = signal(0);
  activeSection = signal('hero');

  isMobile = computed(() => this.windowWidth() < 768);

  readonly navLinks: NavLink[] = [
    { label: 'Platform', href: '#platform', sectionId: 'platform' },
    { label: 'Intelligence', href: '#metrics', sectionId: 'metrics' },
    { label: 'Process', href: '#process', sectionId: 'process' },
    { label: 'Enterprise', href: '#enterprise', sectionId: 'enterprise' },
    { label: 'Pricing', href: '#pricing', sectionId: 'pricing' },
    { label: 'Customers', href: '#testimonials', sectionId: 'testimonials' },
  ];

  ngOnInit(): void {
    if (!this.isBrowser) {
      return;
    }

    this.windowWidth.set(window.innerWidth);
    window.addEventListener('resize', this.resizeHandler);
    window.addEventListener('scroll', this.scrollHandler);
    this.initSectionObserver();
  }

  ngOnDestroy(): void {
    if (!this.isBrowser) {
      return;
    }

    window.removeEventListener('resize', this.resizeHandler);
    window.removeEventListener('scroll', this.scrollHandler);
    this.sectionObserver?.disconnect();
  }

  toggleMenu(): void {
    this.isMenuOpen.update((value) => !value);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  isActive(sectionId: string): boolean {
    return this.activeSection() === sectionId;
  }

  onNavClick(event: Event, link: NavLink): void {
    event.preventDefault();
    const target = document.getElementById(link.sectionId);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', link.href);
      this.activeSection.set(link.sectionId);
    }

    if (this.isMobile()) {
      this.closeMenu();
    }
  }

  scrollToTop(event: Event): void {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.replaceState(null, '', '#hero');
    this.activeSection.set('hero');
    this.closeMenu();
  }

  private initSectionObserver(): void {
    const sectionIds = [
      'hero',
      'metrics',
      'platform',
      'process',
      'enterprise',
      'pricing',
      'testimonials',
      'contact',
    ];

    this.sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          this.activeSection.set(visible[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.25, 0.5] },
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) {
        this.sectionObserver.observe(el);
      }
    }
  }
}
