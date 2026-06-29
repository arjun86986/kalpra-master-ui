import { Directive, ElementRef, Input, OnInit, OnDestroy, effect } from '@angular/core';
import { watchBreakpoints } from '../utils/responsive.utils';

/**
 * Responsive Visibility Directive
 * Usage: <div appResponsiveHide="mobile,tablet"></div>
 * Will hide element on mobile and tablet screens
 * SOLID: Single Responsibility - Only handles responsive visibility
 */
@Directive({
  selector: '[appResponsiveHide]',
  standalone: true,
})
export class ResponsiveHideDirective implements OnInit, OnDestroy {
  @Input() appResponsiveHide: string = ''; // comma-separated breakpoints
  private unsubscribe?: () => void;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const breakpoints = this.appResponsiveHide.split(',').map(b => b.trim());

    this.unsubscribe = watchBreakpoints(currentBreakpoint => {
      const isHidden = breakpoints.includes(currentBreakpoint);
      this.el.nativeElement.style.display = isHidden ? 'none' : '';
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe?.();
  }
}
