/**
 * ATOM COMPONENTS
 * 
 * Atomic Design Level 1: Smallest, most basic components
 * Examples: Button, Input, Label, Icon
 * 
 * File Structure for each atom:
 * - button/
 *   ├── button.component.ts          (Standalone Component with Signals)
 *   ├── button.component.scss        (Component styles)
 *   └── button.component.spec.ts     (Tests)
 */

export const ATOMS_COMPONENTS = {
  Button: 'app-button',
  Input: 'app-input',
  Label: 'app-label',
  Icon: 'app-icon',
  Badge: 'app-badge',
  Spinner: 'app-spinner',
} as const;

/**
 * ATOM COMPONENT TEMPLATE STRUCTURE
 * 
 * @Component({
 *   selector: 'app-button',
 *   standalone: true,
 *   imports: [],
 *   template: `
 *     <button 
 *       [class]="'btn btn-' + variant()"
 *       [disabled]="disabled()"
 *       (click)="onClick.emit()"
 *       type="button"
 *     >
 *       <ng-content></ng-content>
 *     </button>
 *   `,
 *   styles: [/* styles */],
 * })
 * export class ButtonComponent {
 *   variant = input<'primary' | 'secondary'>('primary');
 *   disabled = input<boolean>(false);
 *   onClick = output<void>();
 * }
 */
