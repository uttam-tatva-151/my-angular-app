import { Component, Input, Output, EventEmitter, forwardRef, ViewChild, ElementRef, OnInit } from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  NG_VALIDATORS,
  Validator,
  AbstractControl,
  ValidationErrors,
  ReactiveFormsModule,
  FormsModule
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GenericInputModel } from '../../../core/models/GenericInputModel';

@Component({
  selector: 'lib-generic-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './generic-input.component.html',
  styleUrls: ['./generic-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GenericInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => GenericInputComponent),
      multi: true
    }
  ]
})
export class GenericInputComponent implements ControlValueAccessor, Validator, OnInit {
  @Input() config!: GenericInputModel;
  @Output() valueChange = new EventEmitter<any>();
  @ViewChild('inputEl', { static: false }) inputEl!: ElementRef;

  isFocused = false;
  showPassword = false;
  touched = false;
  internalError: string | null = null;

  ngOnInit() {
    if (!this.config || typeof this.config !== 'object') {
      throw new Error('GenericInputComponent: config input is missing or not an object');
    }
    if (!('value' in this.config)) {
      // Not a fatal error, but warn for debugging
      console.warn('GenericInputComponent: config missing value property', this.config);
    }
  }

  // NG_VALUE_ACCESSOR
  writeValue(obj: any): void {
    if (this.config) this.config.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    if (this.config) this.config.disabled = isDisabled;
  }

  // NG_VALIDATORS
  validate(control: AbstractControl): ValidationErrors | null {
    return this.getValidationErrors(this.config?.value);
  }

  onChange: any = (_: any) => {};
  onTouched: any = () => {};

  /**
   * Main handler for input/change events.
   * Defensive against missing config and value property.
   */
  handleInput(event: any, groupValue?: any) {
    if (!this.config || typeof this.config !== 'object') return;
    if (!('value' in this.config)) return;

    let value: any;
    const type = this.config.type;

    // Checkbox group (multiple)
    if (type === 'checkbox' && this.config.multiple && Array.isArray(this.config.value)) {
      const checked = event.target.checked;
      if (checked) value = [...this.config.value, groupValue];
      else value = this.config.value.filter((v: any) => v !== groupValue);
    }
    // Single checkbox or switch
    else if (type === 'checkbox' || type === 'switch') {
      value = event.target.checked;
    }
    // Radio group
    else if (type === 'radio') {
      value = groupValue;
    }
    // File input
    else if (type === 'file') {
      value = event.target.files;
      if (this.config.events?.fileChange) this.config.events.fileChange(value);
    }
    // Other input types
    else {
      value = event.target?.value ?? event;
    }

    this.config.value = value;
    this.valueChange.emit(value);

    if (this.config.events?.input) this.config.events.input(value);
    if (this.config.events?.change) this.config.events.change(value);
    this.onChange(value);
    this.internalError = null;
  }

  handleFocus(event: FocusEvent) {
    this.isFocused = true;
    if (this.config.events?.focus) this.config.events.focus(event);
    this.touched = true;
    this.onTouched();
  }

  handleBlur(event: FocusEvent) {
    this.isFocused = false;
    if (this.config.events?.blur) this.config.events.blur(event);
    this.touched = true;
    this.onTouched();
  }

  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      if (this.config.events?.enter) this.config.events.enter(this.config.value);
    }
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  handleIconClick(side: 'left' | 'right', event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    if (this.config.events?.iconClick) this.config.events.iconClick(side, event);
  }

  isChecked(optionValue: any): boolean {
    if (this.config.type === 'checkbox' && this.config.multiple && Array.isArray(this.config.value)) {
      return this.config.value.includes(optionValue);
    }
    return this.config.value === optionValue;
  }

  // Validation logic for all edge cases
  getValidationErrors(value: any): ValidationErrors | null {
    // Required
    if (this.config.required && (value === null || value === undefined || value === '' || (Array.isArray(value) && value.length === 0))) {
      this.internalError = 'This field is required.';
      return { required: true };
    }

    // Min/Max (number, date, range, etc.)
    if (this.config.min !== undefined && value !== undefined && value !== null && value !== '') {
      if (['number', 'range'].includes(this.config.type || '') && Number(value) < Number(this.config.min)) {
        this.internalError = `Minimum value is ${this.config.min}.`;
        return { min: true };
      }
      if (['date', 'datetime-local', 'time', 'month', 'week'].includes(this.config.type || '') && value < this.config.min) {
        this.internalError = `Earliest date/time is ${this.config.min}.`;
        return { min: true };
      }
    }
    if (this.config.max !== undefined && value !== undefined && value !== null && value !== '') {
      if (['number', 'range'].includes(this.config.type || '') && Number(value) > Number(this.config.max)) {
        this.internalError = `Maximum value is ${this.config.max}.`;
        return { max: true };
      }
      if (['date', 'datetime-local', 'time', 'month', 'week'].includes(this.config.type || '') && value > this.config.max) {
        this.internalError = `Latest date/time is ${this.config.max}.`;
        return { max: true };
      }
    }

    // Minlength/Maxlength
    if (this.config.minlength && value && value.length < this.config.minlength) {
      this.internalError = `Minimum length is ${this.config.minlength}.`;
      return { minlength: true };
    }
    if (this.config.maxlength && value && value.length > this.config.maxlength) {
      this.internalError = `Maximum length is ${this.config.maxlength}.`;
      return { maxlength: true };
    }

    // Pattern
    if (this.config.pattern && value && !new RegExp(this.config.pattern).test(value)) {
      this.internalError = `Value does not match required pattern.`;
      return { pattern: true };
    }

    // Custom validations array
    if (this.config.validations && Array.isArray(this.config.validations)) {
      for (const v of this.config.validations) {
        if (v.type === 'custom' && v.value && typeof v.value === 'function') {
          const valid = v.value(value, this.config);
          if (!valid) {
            this.internalError = v.message || 'Invalid value.';
            return { custom: true };
          }
        }
      }
    }

    // Custom error from parent
    if (this.config.customError) {
      this.internalError = this.config.customError;
      return { customError: true };
    }

    // Error text from parent
    if (this.config.errorText) {
      this.internalError = this.config.errorText;
      return { errorText: true };
    }

    this.internalError = null;
    return null;
  }

  get errorMessage(): string | null {
    return this.internalError;
  }
}