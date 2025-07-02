import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailManagerService {
  private email: string = '';

  constructor() {}

  // Set email for transfer
  setEmail(email: string) {
    this.email = email;
  }

  // Get stored email
  getEmail(): string {
    return this.email;
  }

  // Clear stored email
  clear() {
    this.email = '';
  }

  // Validate email format
  isValid(email: string): boolean {
    return !!email && /^\S+@\S+\.\S+$/.test(email);
  }

  // Mask email for display
  maskEmail(email: string): string {
    if (!this.isValid(email)) return email;
    const [name, domain] = email.split('@');
    if (name.length < 3) return `***@${domain}`;
    return `${name.slice(0, 2)}***@${domain}`;
  }

  // Normalize email (lowercase, trim)
  normalize(email: string): string {
    return email.trim().toLowerCase();
  }
}