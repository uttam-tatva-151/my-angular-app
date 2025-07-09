import { Routes } from '@angular/router';
import { authRoutes } from './features/auth/auth-routing.module';
import { LandingPageComponent } from './features/landing-page/landing-page/landing-page.component';
import { practiceAreaRoutes } from './features/Practice/practice-area-routing.module';

export const routes: Routes = [
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  {
    path: 'landing-page',
    component: LandingPageComponent
  },
  {
    path: 'auth',
    children: authRoutes
  },
  {
    path: 'practice-area',
    children: practiceAreaRoutes
  },
];
