import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
})
export class ProcessTimelineComponent {
  readonly steps: ProcessStep[] = [
    { title: 'Connect', description: 'Unify GitHub, Jira, Storybook, and CI/CD signals into one intelligent workspace.', accent: 'cyan' },
    { title: 'Analyze', description: 'Surface delivery health, blockers, and architectural risks with AI-powered context.', accent: 'violet' },
    { title: 'Generate', description: 'Create reports, action plans, and follow-ups automatically for your team.', accent: 'blue' },
    { title: 'Improve', description: 'Turn insights into measurable improvements across product and engineering.', accent: 'teal' },
  ];
}
