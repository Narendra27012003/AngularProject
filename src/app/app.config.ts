import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';

import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { MainContentComponent } from './main-content/main-content.component';
import { CollectionsComponent } from './collections/collections.component';

const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'collections', component: CollectionsComponent },
];
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()),provideHttpClient()]}
