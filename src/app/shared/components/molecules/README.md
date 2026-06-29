/**
 * MOLECULE COMPONENTS
 * 
 * Atomic Design Level 2: Combination of atoms
 * Examples: Card, Header, Navigation, Search Bar
 * 
 * File Structure for each molecule:
 * - card/
 *   ├── card.component.ts
 *   ├── card.component.scss
 *   ├── card.component.spec.ts
 *   └── card.model.ts               (Type definitions)
 */

export const MOLECULES_COMPONENTS = {
  Card: 'app-card',
  Header: 'app-header',
  Navigation: 'app-navigation',
  SearchBar: 'app-search-bar',
  FormGroup: 'app-form-group',
  Modal: 'app-modal',
} as const;

/**
 * MOLECULE COMPONENT TEMPLATE STRUCTURE
 * 
 * @Component({
 *   selector: 'app-card',
 *   standalone: true,
 *   imports: [CommonModule],
 *   template: `
 *     <article class="card">
 *       <header *ngIf="title()" class="card__header">
 *         <h3>{{ title() }}</h3>
 *       </header>
 *       <div class="card__content">
 *         <ng-content></ng-content>
 *       </div>
 *       <footer *ngIf="actionText()" class="card__footer">
 *         <button (click)="onAction.emit()">{{ actionText() }}</button>
 *       </footer>
 *     </article>
 *   `,
 *   styles: [/* styles */],
 * })
 * export class CardComponent {
 *   title = input<string>('');
 *   actionText = input<string>('');
 *   onAction = output<void>();
 * }
 */
