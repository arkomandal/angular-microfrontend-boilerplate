import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

const shouldEnableHydration = () => {
  if (typeof window === 'undefined') {
    return true;
  }

  return !window.location.hostname.endsWith('github.io');
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    ...(shouldEnableHydration() ? [provideClientHydration(withEventReplay())] : [])
  ]
};
