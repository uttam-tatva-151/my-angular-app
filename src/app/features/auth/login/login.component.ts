import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModernCardComponent } from '../../../shared/components/modern-card/modern-card.component';
import { InfoPanelComponent } from '../info-panel/info-panel.component';
import { AnimatedCirclesComponent } from '../../../core/components/animated-circles/animated-circles.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ModernCardComponent, InfoPanelComponent,AnimatedCirclesComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  showPassword = false;
  email = '';
  password = '';
  rememberMe = false;
  emailInvalid = false;
  passwordInvalid = false;

  circlesConfig = []
  constructor(private router: Router) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    this.emailInvalid = !this.email || !/^\S+@\S+\.\S+$/.test(this.email);
    this.passwordInvalid = !this.password;
    if (!this.emailInvalid && !this.passwordInvalid) {
      // Simulate login, real apps call service here
      alert('Login successful! (Demo)');
    }
  }

  toForgotPassword() {
    this.router.navigate(['/auth/forgot-password']);
  }

  toRegister() {
    this.router.navigate(['/auth/register']);
  }
}
