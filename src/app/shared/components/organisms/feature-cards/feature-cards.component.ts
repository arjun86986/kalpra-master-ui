import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FeatureCard {
  icon: string;
  title: string;
  description: string;
  accent: string;
}

@Component({
  selector: 'app-feature-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-cards.component.html',
  styleUrls: ['./feature-cards.component.scss'],
})
export class FeatureCardsComponent {
  readonly cards: FeatureCard[] = [
    { icon: '✦', title: 'AI Insights', description: 'Turn engineering signals into proactive recommendations with AI guidance.', accent: 'cyan' },
    { icon: '◧', title: 'Architecture', description: 'Model system health, dependencies, and reliability in one view.', accent: 'violet' },
    { icon: '⚡', title: 'Engineering Health', description: 'Measure delivery confidence, risk, and change momentum instantly.', accent: 'blue' },
    { icon: '◌', title: 'Storybook', description: 'Monitor component adoption and visual consistency across teams.', accent: 'purple' },
    { icon: '⬢', title: 'Design Systems', description: 'Track design system usage, maturity, and contribution velocity.', accent: 'teal' },
    { icon: '♿', title: 'Accessibility', description: 'Surface accessibility gaps and compliance signals before release.', accent: 'pink' },
    { icon: '⌘', title: 'GitHub', description: 'Connect pull requests, code quality, and release context seamlessly.', accent: 'green' },
    { icon: '✓', title: 'Jira', description: 'Align roadmap delivery, risk, and execution across the org.', accent: 'orange' },
    { icon: '◍', title: 'Figma', description: 'Bridge design intent to engineering effort in real time.', accent: 'cyan' },
    { icon: '⟲', title: 'CI/CD', description: 'Unify build health, deployment impact, and recovery insights.', accent: 'violet' },
  ];
}
