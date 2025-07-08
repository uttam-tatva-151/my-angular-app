import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModernCardComponent } from '../../../shared/components/modern-card/modern-card.component';
import { InfoPanelComponent } from '../info-panel/info-panel.component';
import { AnimatedCirclesComponent } from '../../../shared/components/animated-circles/animated-circles.component';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../core/services/API/api.service';
import { EmailManagerService } from '../../../core/services/EmailManagerService/EmailManager.service';
import { PasswordManagerService } from '../../../core/services/PasswordManagerService/PasswordManager.service';
import { SubmitComponent } from "../../../shared/components/Buttons/submit/submit.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ModernCardComponent,
    InfoPanelComponent,
    AnimatedCirclesComponent,
    SubmitComponent
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  showPassword = false;
  registerLoading = false;

  // Password error tracking
  showPasswordErrorPopup = false;
  passwordErrors: string[] = [];
  passwordTouched = false; // To track if user has made an error at least once

  registerForm: FormGroup;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private emailService: EmailManagerService,
    private passwordManager: PasswordManagerService,
    private fb: FormBuilder
  ) {
    this.registerForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      termsAccepted: [false, Validators.requiredTrue]
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onPasswordInput() {
    const password = this.registerForm.get('password')?.value || '';
    this.passwordErrors = this.passwordManager.getPasswordErrors(password);
    if (!this.passwordTouched && this.passwordErrors.length > 0) {
      this.passwordTouched = true;
      this.showPasswordErrorPopup = true;
    }
    if (this.passwordTouched && this.passwordErrors.length === 0) {
      this.passwordTouched = false;
      this.showPasswordErrorPopup = false;
    }
  }

  showPasswordErrorsPopupBtn() {
    const password = this.registerForm.get('password')?.value || '';
    this.passwordErrors = this.passwordManager.getPasswordErrors(password);
    this.showPasswordErrorPopup = true;
  }

  closePasswordErrorPopup() {
    this.showPasswordErrorPopup = false;
  }

  onSubmit() {
    // Manual validation for custom services
    const email = this.registerForm.get('email')?.value;
    const password = this.registerForm.get('password')?.value;
    const userName = this.registerForm.get('userName')?.value;

    // Set errors if services fail validation
    if (!this.emailService.isValid(email)) {
      this.registerForm.get('email')?.setErrors({ invalidEmail: true });
    }
    if (!this.passwordManager.isValid(password)) {
      this.registerForm.get('password')?.setErrors({ invalidPassword: true });
      if (!this.passwordTouched) {
        this.passwordTouched = true;
        this.passwordErrors = this.passwordManager.getPasswordErrors(password);
        this.showPasswordErrorPopup = true;
      }
    }

    if (this.registerForm.invalid) {
      // Mark all controls as touched to show errors
      this.registerForm.markAllAsTouched();
      return;
    }

    const user = {
      emailId: email,
      userName: userName,
      password: password,
    };

    this.registerLoading = true;
    this.apiService.registerUser(user).subscribe({
      next: (res) => {
        this.registerLoading = false;
        alert('Registration successful!' + res);
      },
      error: (err) => {
        this.registerLoading = false;
        alert('Registration failed!');
      },
    });
  }

  toLogin() {
    this.router.navigate(['/auth/login']);
  }
  toForgotPassword() {
    this.router.navigate(['/auth/forgot-password']);
  }
}