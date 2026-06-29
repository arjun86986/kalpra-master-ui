import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface DashboardCard {
  title: string;
  value: string;
  detail: string;
  progress: number;
  accent: string;
  chart: number[];
}

@Component({
  selector: 'app-dashboard-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-cards.component.html',
  styleUrls: ['./dashboard-cards.component.scss'],
})
export class DashboardCardsComponent {
  readonly cards: DashboardCard[] = [
    {
      title: 'Engineering Health',
      value: '97.4%',
      detail: 'Stable delivery velocity',
      progress: 94,
      accent: 'cyan',
      chart: [48, 72, 56, 82, 76, 94],
    },
    {
      title: 'Sprint Risk',
      value: 'Low',
      detail: '2 blockers remaining',
      progress: 72,
      accent: 'purple',
      chart: [32, 46, 54, 49, 68, 72],
    },
    {
      title: 'AI Insights',
      value: '24 new',
      detail: 'Actionable recommendations',
      progress: 88,
      accent: 'violet',
      chart: [28, 40, 52, 64, 76, 88],
    },
    {
      title: 'Tech Debt',
      value: '12.3%',
      detail: 'Improving month over month',
      progress: 64,
      accent: 'teal',
      chart: [20, 24, 34, 38, 42, 64],
    },
    {
      title: 'PR Analytics',
      value: '184',
      detail: 'Merged this sprint',
      progress: 81,
      accent: 'blue',
      chart: [44, 58, 62, 70, 74, 81],
    },
    {
      title: 'Developer Productivity',
      value: '+18%',
      detail: 'Higher throughput',
      progress: 90,
      accent: 'green',
      chart: [52, 56, 68, 74, 82, 90],
    },
    {
      title: 'Component Reuse',
      value: '68%',
      detail: 'Shared across teams',
      progress: 68,
      accent: 'orange',
      chart: [24, 35, 46, 54, 61, 68],
    },
    {
      title: 'Architecture Health',
      value: 'A',
      detail: 'Modernized core services',
      progress: 86,
      accent: 'pink',
      chart: [38, 56, 63, 72, 80, 86],
    },
  ];
}
