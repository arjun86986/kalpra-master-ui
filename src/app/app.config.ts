/**
 * Application Configuration
 * Main application setup and providers
 */

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

import { APP_ROUTES } from './app.routes';

/**
 * Core application providers
 * Configure all application-level services and settings
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(APP_ROUTES),
    provideClientHydration(),
    provideAnimations(),
    // Add other providers as needed
    // provideHttpClient(),
  ],
};
