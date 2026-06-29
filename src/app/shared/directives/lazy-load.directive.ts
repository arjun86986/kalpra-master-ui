import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { LazyLoadImageService } from '../../core/services/lazy-load-image.service';

/**
 * Lazy Load Directive
 * Usage: <img appLazyLoad [src]="placeholderImage" [data-src]="actualImage" alt="..." />
 * SOLID: Single Responsibility - Only handles lazy loading behavior
 */
@Directive({
  selector: '[appLazyLoad]',
  standalone: true,
})
export class LazyLoadDirective implements OnInit, OnDestroy {
  @Input() appLazyLoad: string = ''; // placeholder or lazy image

  constructor(
    private el: ElementRef<HTMLImageElement>,
    private lazyLoadService: LazyLoadImageService,
  ) {}

  ngOnInit(): void {
    this.el.nativeElement.classList.add('lazy');
    this.lazyLoadService.initializeLazyLoad([this.el.nativeElement]);
  }

  ngOnDestroy(): void {
    this.lazyLoadService.destroy();
  }
}
