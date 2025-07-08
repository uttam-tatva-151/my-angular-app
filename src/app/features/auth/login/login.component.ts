import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordManagerService } from './../../../core/services/PasswordManagerService/PasswordManager.service';
import { ModernCardComponent } from '../../../shared/components/modern-card/modern-card.component';
import { InfoPanelComponent } from '../info-panel/info-panel.component';
import { AnimatedCirclesComponent } from '../../../shared/components/animated-circles/animated-circles.component';
import { EmailManagerService } from '../../../core/services/EmailManagerService/EmailManager.service';
import { SubmitComponent } from "../../../shared/components/Buttons/submit/submit.component";
import { ApiService } from '../../../core/services/API/api.service';
import { GlobalToastService } from '../../../core/services/Toster/GlobalToaster.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ModernCardComponent, InfoPanelComponent, AnimatedCirclesComponent, SubmitComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  showPassword = false;
  loginForm: FormGroup;
  loginLoading = false;
  circlesConfig = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiSerivce: ApiService,
    private toast: GlobalToastService,
    private emailService: EmailManagerService,
    private passwordManager: PasswordManagerService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rememberMe: [false]
    });
  }

  ngOnInit() {
    const savedEmail = this.emailService.getEmail();
    if (savedEmail) {
      this.loginForm.patchValue({ email: savedEmail });
      this.emailService.clear();
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get rememberMe() {
    return this.loginForm.get('rememberMe');
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onLogin() {
    // Custom validation using services
    if (!this.emailService.isValid(this.email?.value)) {
      this.email?.setErrors({ invalidEmail: true });
    }
    if (!this.passwordManager.isValid(this.password?.value)) {
      this.password?.setErrors({ invalidPassword: true });
    }

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
   const user = {
    email: this.email?.value,
    password: this.password?.value,
    isRememberMe: this.rememberMe?.value
   };

   this.loginLoading = true;
   this.apiSerivce.login(user).subscribe({
    next: (responce) => {
      this.loginLoading = false;
      this.toast.show({
        title: 'During Login Process',
        message: responce.message,
        status: responce.status.toLowerCase(),
        progressBar: true
      });
    },error: () => {
      this.loginLoading = false;
      this.toast.show({
        title: 'Error',
        message: 'Failed to Login User. Please try again later.',
        status: 'error',
        progressBar: true
      });
    }
   })
  }

  toForgotPassword() {
    if (this.email && this.emailService.isValid(this.email.value)) {
      this.emailService.setEmail(this.emailService.normalize(this.email.value));
    } else {
      this.emailService.clear();
    }
    this.router.navigate(['/auth/forgot-password']);
  }

  toRegister() {
    this.router.navigate(['/auth/register']);
  }
}