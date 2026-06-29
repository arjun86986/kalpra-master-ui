import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

interface ProcessStep {
  title: string;
  description: string;
  accent: string;
}

@Component({
  selector: 'app-process-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process-timeline.component.html',
  styleUrls: ['./process-timeline.component.scss'],
  animations: [
    trigger('fadeSlideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(18px)' }),
        animate('700ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class ProcessTimelineComponent {
  readonly steps: ProcessStep[] = [
    { title: 'Connect', description: 'Unify GitHub, Jira, Storybook, and CI/CD signals into one intelligent workspace.', accent: 'cyan' },
    { title: 'Analyze', description: 'Surface delivery health, blockers, and architectural risks with AI-powered context.', accent: 'violet' },
    { title: 'Generate', description: 'Create reports, action plans, and follow-ups automatically for your team.', accent: 'blue' },
    { title: 'Improve', description: 'Turn insights into measurable improvements across product and engineering.', accent: 'teal' },
  ];
}
