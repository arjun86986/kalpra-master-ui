/**
 * Kalpra - Premium Navbar Component
 * 
 * Features:
 * - Sticky positioning
 * - Glassmorphism effect
 * - Responsive design (mobile & desktop)
 * - Angular 21 Standalone Component
 * - Signals for state management
 */

import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface NavLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  // ============================================================
  // Signals & State Management
  // ============================================================

  isMenuOpen = signal(false);
  isScrolled = signal(false);
  windowWidth = signal(0);

  // Computed signals
  isMobile = computed(() => this.windowWidth() < 768);
  isTablet = computed(() => this.windowWidth() >= 768 && this.windowWidth() < 1024);
  isDesktop = computed(() => this.windowWidth() >= 1024);

  // ============================================================
  // Navigation Links
  // ============================================================

  navLinks: NavLink[] = [
    { label: 'Products', href: '#products' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Resources', href: '#resources' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  ngOnInit(): void {
    // Set initial window width
    this.windowWidth.set(window.innerWidth);

    // Listen for window resize
    window.addEventListener('resize', () => {
      this.windowWidth.set(window.innerWidth);
    });

    // Listen for scroll events
    window.addEventListener('scroll', () => {
      this.isScrolled.set(window.scrollY > 10);
    });
  }

  // ============================================================
  // Methods
  // ============================================================

  toggleMenu(): void {
    this.isMenuOpen.update((value) => !value);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  onNavLinkClick(): void {
    if (this.isMobile()) {
      this.closeMenu();
    }
  }
}
