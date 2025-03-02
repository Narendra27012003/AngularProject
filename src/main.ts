import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';
import { CollectionsComponent } from './app/collections/collections.component';
import { MainContentComponent } from './app/main-content/main-content.component';


const routes: Routes = [
  { path: '', component: MainContentComponent }, // Default Home
  { path: 'collections', component: CollectionsComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), 
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
