import { Routes } from '@angular/router';
import { authRoutes } from './features/auth/auth-routing.module';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    children: authRoutes
  },
];
