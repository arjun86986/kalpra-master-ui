import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../../directives/scroll-reveal.directive';

interface PricingTier {
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  description: string;
  features: string[];
  featured?: boolean;
  accent: string;
}

@Component({
  selector: 'app-pricing-cards',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './pricing-cards.component.html',
  styleUrls: ['./pricing-cards.component.scss'],
})
export class PricingCardsComponent {
  readonly billingMode = signal<'monthly' | 'annual'>('monthly');

  readonly tiers: PricingTier[] = [
    {
      name: 'Starter',
      monthlyPrice: '$29',
      annualPrice: '$24',
      description: 'Visibility without complexity.',
      features: ['Up to 3 integrations', 'Basic AI insights', 'Weekly reports'],
      accent: 'cyan',
    },
    {
      name: 'Growth',
      monthlyPrice: '$79',
      annualPrice: '$69',
      description: 'Deeper execution context for scaling teams.',
      features: ['Unlimited integrations', 'Advanced analytics', 'Priority support'],
      featured: true,
      accent: 'violet',
    },
    {
      name: 'Enterprise',
      monthlyPrice: '$199',
      annualPrice: '$159',
      description: 'Governance, customization, and security.',
      features: ['SSO & audit logs', 'Custom reports', 'Dedicated success manager'],
      accent: 'blue',
    },
  ];

  toggleBilling(mode: 'monthly' | 'annual'): void {
    this.billingMode.set(mode);
  }
}
