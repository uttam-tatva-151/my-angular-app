import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModernCardComponent } from '../../../shared/components/modern-card/modern-card.component';
import { InfoPanelComponent } from '../info-panel/info-panel.component';
import { AnimatedCirclesComponent } from '../../../shared/components/animated-circles/animated-circles.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, FormsModule, ModernCardComponent, InfoPanelComponent, AnimatedCirclesComponent],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent {
  showPassword = false;
  showConfirmPassword = false;
  password = '';
  confirmPassword = '';
  passwordInvalid = false;
  confirmPasswordInvalid = false;
  submitted = false;

  constructor(private router: Router) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  onSubmit() {
    this.passwordInvalid = !this.password || this.password.length < 6;
    this.confirmPasswordInvalid = this.password !== this.confirmPassword;
    if (!this.passwordInvalid && !this.confirmPasswordInvalid) {
      this.submitted = true;
      setTimeout(() => {
        alert('Your password has been reset! (Demo)');
        this.router.navigate(['/auth/login']);
      }, 600);
    }
  }

  toLogin() {
    this.router.navigate(['/auth/login']);
  }
}
