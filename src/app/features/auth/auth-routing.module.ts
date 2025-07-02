import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot-password/forgot-password.component';

export const authRoutes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forgot-password', component: ForgotComponent },

      // Lazy Loading to reduce initial bundle size
      { path: 'reset-password', loadChildren: () => import('./reset-password/reset-password.component').then(m => m.ResetPasswordComponent)  },
      // ...other auth routes
      { path: '', redirectTo: 'login', pathMatch: 'full' } // redirect /auth to /auth/login
    ]
  }
];