import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModernCardComponent } from '../../../shared/components/modern-card/modern-card.component';
import { InfoPanelComponent } from '../info-panel/info-panel.component';
import { AnimatedCirclesComponent } from '../../../shared/components/animated-circles/animated-circles.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../core/services/API/api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ModernCardComponent, InfoPanelComponent, AnimatedCirclesComponent, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  showPassword = false;
  email = '';
  password = '';
  userName = '';
  termsAccepted = false;

  emailInvalid = false;
  passwordInvalid = false;
  userNameInvalid = false;
  termsInvalid = false;

  constructor(private router: Router, private apiService: ApiService) {}
  user = {
    emailId: '',
    userName: '',
    password: ''
  };

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    this.userNameInvalid = !this.userName || this.userName.trim().length < 3;
    this.emailInvalid = !this.email || !/^\S+@\S+\.\S+$/.test(this.email);
    this.passwordInvalid = !this.password || this.password.length < 8;
    this.termsInvalid = !this.termsAccepted;

    if (this.userNameInvalid || this.emailInvalid || this.passwordInvalid || this.termsInvalid) {
      return;
    }
    this.user.emailId = this.email;
    this.user.userName = this.userName;
    this.user.password = this.password;

    this.apiService.registerUser(this.user).subscribe({
      next: (res) => {
        // handle success
        alert('Registration successful!' + res);
      },
      error: (err) => {
        // handle error
        alert('Registration failed!');
      }
    });

    // Place your registration logic here
  }

  toLogin() {
    this.router.navigate(['/auth/login']);
  }
  toForgotPassword() {
    this.router.navigate(['/auth/forgot-password']);
  }
}