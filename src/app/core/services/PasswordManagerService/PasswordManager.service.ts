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
    if (typeof password !== 'string') return false;

    const trimmed = password.trim();
    if (!trimmed || trimmed.length < 8) return false;
    if (/\s/.test(trimmed)) return false;

    const hasUpper = /[A-Z]/.test(trimmed);
    const hasLower = /[a-z]/.test(trimmed);
    const hasDigit = /\d/.test(trimmed);
    const hasSpecial = /[@!#&*\$]/.test(trimmed);

    return hasUpper && hasLower && hasDigit && hasSpecial;
  }
}
