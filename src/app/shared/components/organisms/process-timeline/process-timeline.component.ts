import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../../directives/scroll-reveal.directive';

interface ProcessStep {
  title: string;
  description: string;
  accent: string;
}

@Component({
  selector: 'app-process-timeline',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './process-timeline.component.html',
  styleUrls: ['./process-timeline.component.scss'],
})
export class ProcessTimelineComponent {
  readonly steps: ProcessStep[] = [
    { title: 'Connect', description: 'Unify GitHub, Jira, Storybook, and CI/CD into one workspace.', accent: 'cyan' },
    { title: 'Analyze', description: 'Surface delivery health, blockers, and risks with AI context.', accent: 'violet' },
    { title: 'Generate', description: 'Create reports, action plans, and follow-ups automatically.', accent: 'blue' },
    { title: 'Improve', description: 'Turn insights into measurable improvements across teams.', accent: 'teal' },
  ];
}
