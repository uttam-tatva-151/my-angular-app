import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PasswordManagerService } from './../../../core/services/PasswordManagerService/PasswordManager.service';
import { ModernCardComponent } from '../../../shared/components/modern-card/modern-card.component';
import { InfoPanelComponent } from '../info-panel/info-panel.component';
import { AnimatedCirclesComponent } from '../../../shared/components/animated-circles/animated-circles.component';
import { EmailManagerService } from '../../../core/services/EmailManagerService/EmailManager.service';

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
  constructor(private router: Router, private emailService: EmailManagerService,private passwordManager : PasswordManagerService) {}

  ngOnInit(){
    this.email = this.emailService.getEmail();
    this.emailService.clear();
  }
  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    this.emailInvalid = !this.emailService.isValid(this.email);
    this.passwordInvalid = !this.passwordManager.isValid(this.password);
    if (!this.emailInvalid && !this.passwordInvalid) {
      alert('Login successful! (Demo)');
    }
  }

  toForgotPassword() {
    if (this.emailService.isValid(this.email)) {
      this.emailService.setEmail(this.emailService.normalize(this.email));
    } else {
      this.emailService.clear();
    }
    this.router.navigate(['/auth/forgot-password']);
  }

  toRegister() {
    this.router.navigate(['/auth/register']);
  }
}
