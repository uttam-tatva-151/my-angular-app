export interface GenericInputOption {
  label: string;
  value: any;
  disabled?: boolean;
  icon?: string; // optional icon for option
}

export interface GenericInputEventHandlers {
  input?: (value: any) => void;
  change?: (value: any) => void;
  focus?: (event: FocusEvent) => void;
  blur?: (event: FocusEvent) => void;
  enter?: (value: any) => void;
  fileChange?: (files: FileList) => void;
  iconClick?: (side: 'left' | 'right', event: MouseEvent) => void;
  optionSelect?: (option: GenericInputOption) => void;
  custom?: (type: string, event: any) => void;
}

export interface GenericInputValidation {
  type: 'required' | 'min' | 'max' | 'minlength' | 'maxlength' | 'pattern' | 'custom';
  value?: any;
  message?: string;
}

export interface GenericInputModel {
  id?: string;
  name?: string;
  type?:
    | 'text' | 'search' | 'email' | 'password' | 'number' | 'tel' | 'url'
    | 'textarea' | 'checkbox' | 'switch' | 'radio' | 'date' | 'time'
    | 'color' | 'file' | 'select' | 'range' | 'hidden' | 'image'
    | 'button' | 'submit' | 'reset' | 'datetime-local' | 'month' | 'week';
  value?: any;
  label?: string;
  placeholder?: string;
  helpText?: string;
  tooltip?: string;
  errorText?: string;
  customError?: string;
  validations?: GenericInputValidation[]; // array of validations
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  min?: number | string;
  max?: number | string;
  minlength?: number;
  maxlength?: number;
  pattern?: string;
  step?: number | string;
  accept?: string;
  multiple?: boolean;
  options?: GenericInputOption[]; // for radio, select, checkbox group
  groupOrientation?: 'row' | 'column';
  iconLeft?: string;
  iconRight?: string;
  showPasswordToggle?: boolean;
  autoFocus?: boolean;
  autoComplete?: string;
  spellCheck?: boolean;
  tabIndex?: number;
  className?: string;
  style?: { [key: string]: string };
  animation?: 'ripple' | 'bounce' | 'fade' | 'none' | string;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  ariaInvalid?: boolean;
  ariaRequired?: boolean;
  ariaDisabled?: boolean;
  inputMode?: 'text' | 'numeric' | 'decimal' | 'tel' | 'search' | 'email' | 'url';
  formControl?: any; // Reactive Forms
  ngModel?: any; // Template-driven Forms
  events?: GenericInputEventHandlers;
  prefixText?: string;
  suffixText?: string;
  prefixIcon?: string;
  suffixIcon?: string;
  loading?: boolean;
  spinner?: boolean;
  errorState?: boolean;
  filePreviewUrl?: string;
  customAttributes?: { [key: string]: any };
  templateRef?: any; // for advanced custom templates
  format?: (value: any) => string; // custom formatter
  parse?: (value: string) => any; // custom parser
}