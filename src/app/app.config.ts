import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { provideClientHydration } from '@angular/platform-browser';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'lamentis-584565',
        appId: '1:730338121574:web:49eed75009652a5a811aa7',
        storageBucket: 'lamentis-584565.appspot.com',
        apiKey: 'AIzaSyAajuwg7Oo3sbNQxYhgtYkvf1wlBVOGV3M',
        authDomain: 'lamentis-584565.firebaseapp.com',
        messagingSenderId: '730338121574',
      }),
    ),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    ScreenTrackingService,
    UserTrackingService,
    provideDatabase(() => getDatabase()),
  ],
};
