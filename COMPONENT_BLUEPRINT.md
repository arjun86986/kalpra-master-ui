/**
 * COMPONENT BLUEPRINT
 * 
 * Use this as a template when creating new components
 * Follow this structure for consistency
 */

import { Component, OnInit, input, output, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Blueprint Component
 * 
 * @description
 * This is a template component demonstrating best practices:
 * - Standalone component
 * - Signals for state management
 * - Input/Output signals
 * - Responsive design
 * - Accessibility
 * 
 * @example
 * <app-blueprint 
 *   title="Hello World"
 *   (actionClick)="onAction()"
 * ></app-blueprint>
 */
@Component({
  selector: 'app-blueprint',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      class="blueprint"
      role="presentation"
      [attr.aria-label]="ariaLabel()"
    >
      <!-- Content goes here -->
      <h2>{{ title() }}</h2>
      
      <button 
        type="button"
        [disabled]="isLoading()"
        (click)="handleAction()"
        aria-label="Perform action"
      >
        {{ actionLabel() }}
      </button>
    </div>
  `,
  styles: [
    `
      @import 'path/to/variables';
      @import 'path/to/mixins';

      .blueprint {
        @include flex-center;
        padding: var(--space-4);
        border-radius: var(--radius-md);
        background-color: var(--color-bg-primary);

        @include respond-to('mobile') {
          padding: var(--space-2);
        }

        button {
          @include btn-primary;
        }
      }
    `,
  ],
})
export class BlueprintComponent implements OnInit {
  // Inputs
  title = input<string>('Default Title');
  actionLabel = input<string>('Action');
  ariaLabel = input<string>('Blueprint component');

  // Outputs
  actionClick = output<void>();

  // State
  isLoading = signal(false);
  
  // Computed
  isDisabled = computed(() => this.isLoading());

  ngOnInit(): void {
    // Component initialization
  }

  // Methods
  handleAction(): void {
    this.isLoading.set(true);
    
    // Perform action
    this.actionClick.emit();

    // Reset state
    setTimeout(() => {
      this.isLoading.set(false);
    }, 1000);
  }
}
