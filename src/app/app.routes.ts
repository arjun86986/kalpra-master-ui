import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/landing/pages/landing.page').then(m => m.LandingPageComponent),
  },
  {
    path: 'landing',
    loadComponent: () =>
      import('./features/landing/pages/landing.page').then(m => m.LandingPageComponent),
  },
  // Lazy load other feature routes as needed
  // Wildcard route - must be last
  {
    path: '**',
    redirectTo: '/',
  },
];
