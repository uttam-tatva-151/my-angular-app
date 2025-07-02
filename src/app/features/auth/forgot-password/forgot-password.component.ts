import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModernCardComponent } from '../../../shared/components/modern-card/modern-card.component';
import { InfoPanelComponent } from '../info-panel/info-panel.component';
import { AnimatedCirclesComponent } from '../../../shared/components/animated-circles/animated-circles.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmailManagerService } from '../../../core/services/EmailManagerService/EmailManager.service';

@Component({
  selector: 'app-forgot',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ModernCardComponent,
    InfoPanelComponent,
    AnimatedCirclesComponent,
  ],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotComponent {
  email = '';
  emailInvalid = false;
  submitted = false;

  constructor(
    private router: Router,
    private emailService: EmailManagerService
  ) {}

  ngOnInit() {
    this.email = this.emailService.getEmail();
    this.emailService.clear();
  }
  onSubmit() {
    this.emailInvalid = !this.emailService.isValid(this.email);
    if (!this.emailInvalid) {
      this.submitted = true;
      setTimeout(() => {
        alert('If this email exists, a reset link was sent.');
      }, 500);
    }
  }

  toLogin() {
    if (this.emailService.isValid(this.email)) {
      this.emailService.setEmail(this.emailService.normalize(this.email));
    }
    this.router.navigate(['/auth/login']);
  }
}
