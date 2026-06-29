import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../../directives/scroll-reveal.directive';

interface FeatureCard {
  icon: string;
  title: string;
  description: string;
  accent: string;
}

@Component({
  selector: 'app-feature-cards',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './feature-cards.component.html',
  styleUrls: ['./feature-cards.component.scss'],
})
export class FeatureCardsComponent {
  readonly cards: FeatureCard[] = [
    { icon: '✦', title: 'AI Insights', description: 'Proactive recommendations from engineering signals.', accent: 'cyan' },
    { icon: '◧', title: 'Architecture', description: 'System health, dependencies, and reliability in one view.', accent: 'violet' },
    { icon: '⚡', title: 'Engineering Health', description: 'Delivery confidence, risk, and change momentum.', accent: 'blue' },
    { icon: '◌', title: 'Storybook', description: 'Component adoption and visual consistency.', accent: 'purple' },
    { icon: '⬢', title: 'Design Systems', description: 'Usage, maturity, and contribution velocity.', accent: 'teal' },
    { icon: '♿', title: 'Accessibility', description: 'Compliance signals before every release.', accent: 'pink' },
    { icon: '⌘', title: 'GitHub', description: 'Pull requests, code quality, and release context.', accent: 'green' },
    { icon: '✓', title: 'Jira', description: 'Roadmap delivery, risk, and execution alignment.', accent: 'orange' },
    { icon: '◍', title: 'Figma', description: 'Design intent to engineering effort, real time.', accent: 'cyan' },
    { icon: '⟲', title: 'CI/CD', description: 'Build health, deployment impact, and recovery.', accent: 'violet' },
  ];
}
