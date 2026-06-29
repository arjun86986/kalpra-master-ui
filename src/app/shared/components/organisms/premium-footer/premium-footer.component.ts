import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-premium-footer',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './premium-footer.component.html',
  styleUrls: ['./premium-footer.component.scss'],
})
export class PremiumFooterComponent {}
