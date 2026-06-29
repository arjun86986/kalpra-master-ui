import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../../directives/scroll-reveal.directive';

interface EnterpriseCard {
  title: string;
  description: string;
  badge: string;
  accent: string;
  metrics: string[];
}

@Component({
  selector: 'app-enterprise-cards',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './enterprise-cards.component.html',
  styleUrls: ['./enterprise-cards.component.scss'],
})
export class EnterpriseCardsComponent {
  readonly expandedId = signal<number | null>(null);

  readonly cards: EnterpriseCard[] = [
    {
      title: 'AI Engineering',
      description: 'AI copilots and engineering intelligence in one operating layer.',
      badge: 'AI Native',
      accent: 'cyan',
      metrics: ['Autonomous triage', 'Delivery forecasting', 'Cross-team orchestration'],
    },
    {
      title: 'Design Systems',
      description: 'Scale design consistency with adoption visibility.',
      badge: 'Design Ops',
      accent: 'violet',
      metrics: ['Component health', 'Usage coverage', 'Governance signals'],
    },
    {
      title: 'Architecture',
      description: 'Understand system dynamics before they become incidents.',
      badge: 'Platform',
      accent: 'blue',
      metrics: ['Dependency mapping', 'Reliability scoring', 'Modernization roadmap'],
    },
    {
      title: 'Sprint Health',
      description: 'Delivery confidence in an executive-ready view.',
      badge: 'Execution',
      accent: 'teal',
      metrics: ['Risk flags', 'Burndown clarity', 'Escalation alerts'],
    },
    {
      title: 'Developer Experience',
      description: 'Measure friction and focus improvements where they matter.',
      badge: 'DX',
      accent: 'green',
      metrics: ['Flow metrics', 'Tooling friction', 'Developer sentiment'],
    },
    {
      title: 'Executive Reports',
      description: 'Leadership reports with trends and next best actions.',
      badge: 'Executive',
      accent: 'pink',
      metrics: ['Board-ready summaries', 'Narrative insights', 'Actionable next steps'],
    },
  ];

  toggleCard(index: number): void {
    this.expandedId.set(this.expandedId() === index ? null : index);
  }
}
