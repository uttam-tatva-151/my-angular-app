import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordManagerService {
  constructor() {}

   /**
   * Validate a password for minimum security requirements:
   * - Minimum 8 characters (after trimming)
   * - At least one uppercase letter
   * - At least one lowercase letter
   * - At least one digit
   * - At least one special character from [@!#&*$]
   * - No spaces allowed anywhere in the password
   * Returns false for empty, null, non-string, or whitespace-only values.
   */
   isValid(password: string): boolean {
    return this.getPasswordErrors(password).length === 0;
  }
  getPasswordErrors(password: string): string[] {
    const errors: string[] = [];
    if (typeof password !== 'string' || !password.trim()) {
      errors.push('Password is required.');
      return errors;
    }
    const trimmed = password.trim();
    if (trimmed.length < 8) errors.push('At least 8 characters required.');
    if (/\s/.test(trimmed)) errors.push('No spaces allowed.');
    if (!/[A-Z]/.test(trimmed)) errors.push('At least one uppercase letter required.');
    if (!/[a-z]/.test(trimmed)) errors.push('At least one lowercase letter required.');
    if (!/\d/.test(trimmed)) errors.push('At least one digit required.');
    if (!/[@!#&*\$]/.test(trimmed)) errors.push('At least one special character (@!#&*$) required.');

    // Check for disallowed special characters
      const allowedSpecials = '@!#&*$';
      const specialCharRegex = /[^A-Za-z0-9@!#&*\$]/g;
      const found = trimmed.match(specialCharRegex);
      if (found) {
        const unique = Array.from(new Set(found));
        unique.forEach(char => {
          errors.push(`The character "${char}" is not allowed.`);
        });
      }
          return errors;
        }
}
