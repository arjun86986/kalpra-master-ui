import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule],
  templateUrl: './enterprise-cards.component.html',
  styleUrls: ['./enterprise-cards.component.scss'],
})
export class EnterpriseCardsComponent {
  readonly expandedId = signal<number | null>(null);

  readonly cards: EnterpriseCard[] = [
    {
      title: 'AI Engineering',
      description: 'Bring AI copilots and engineering intelligence into one operating layer for product and platform teams.',
      badge: 'AI Native',
      accent: 'cyan',
      metrics: ['Autonomous triage', 'Delivery forecasting', 'Cross-team orchestration'],
    },
    {
      title: 'Design Systems',
      description: 'Scale design consistency while keeping implementation quality and adoption visibility high.',
      badge: 'Design Ops',
      accent: 'violet',
      metrics: ['Component health', 'Usage coverage', 'Governance signals'],
    },
    {
      title: 'Architecture',
      description: 'Understand system dynamics, risk, and modernization opportunities before they become incidents.',
      badge: 'Platform',
      accent: 'blue',
      metrics: ['Dependency mapping', 'Reliability scoring', 'Modernization roadmap'],
    },
    {
      title: 'Sprint Health',
      description: 'Track delivery confidence, blockers, and throughput in a simple executive-ready view.',
      badge: 'Execution',
      accent: 'teal',
      metrics: ['Risk flags', 'Burndown clarity', 'Escalation alerts'],
    },
    {
      title: 'Developer Experience',
      description: 'Measure the friction that slows teams down and focus improvements where they matter most.',
      badge: 'DX',
      accent: 'green',
      metrics: ['Flow metrics', 'Tooling friction', 'Developer sentiment'],
    },
    {
      title: 'AI Executive Reports',
      description: 'Generate concise leadership reports with recommendations, trends, and next best actions.',
      badge: 'Executive',
      accent: 'pink',
      metrics: ['Board-ready summaries', 'Narrative insights', 'Actionable next steps'],
    },
  ];

  toggleCard(index: number): void {
    this.expandedId.set(this.expandedId() === index ? null : index);
  }
}
