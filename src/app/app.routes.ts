import { Routes } from '@angular/router';
import { authRoutes } from './features/auth/auth-routing.module';
import { LandingPageComponent } from './features/landing-page/landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  {
    path: 'auth',
    children: authRoutes
  },
  {
    path: 'landing-page',
    component: LandingPageComponent
  },
];
