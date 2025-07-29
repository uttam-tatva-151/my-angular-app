export class GenericButtonModel {
}
export interface GenericButtonModel {
  label?: string;
  ariaLabel?: string;
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'gradient' | string;
  size?: 'small' | 'medium' | 'large' | string;
  rounded?: boolean;
  outlined?: boolean;
  gradient?: boolean;
  customClass?: string;
  disabled?: boolean;
  loading?: boolean;
  ripple?: boolean;
  icon?: string; // SVG string or icon font name
  iconPosition?: 'left' | 'right' | 'top' | 'bottom';
  tabIndex?: number;
  type?: 'button' | 'submit' | 'reset';
  autofocus?: boolean;
  tooltip?: string;
  tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
  block?: boolean;
  shadow?: boolean;
  elevation?: number; // 0-5
  width?: string;
  height?: string;
  minWidth?: string;
  minHeight?: string;
  maxWidth?: string;
  maxHeight?: string;
  fontFamily?: string;
  fontWeight?: string | number;
  fontSize?: string;
  borderColor?: string;
  borderWidth?: string;
  backgroundColor?: string;
  textColor?: string;
  animation?: 'ripple' | 'bounce' | 'pulse' | 'none' | string;
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
  role?: string;
  id?: string;
  name?: string;
  value?: string;
  dataAttributes?: { [key: string]: string | number | boolean };
  style?: { [key: string]: string };
  ariaPressed?: boolean;
  ariaExpanded?: boolean;
  ariaControls?: string;
  ariaDescribedBy?: string;
  onClick?: (event: Event) => void;
  onFocus?: (event: Event) => void;
  onBlur?: (event: Event) => void;
  onMouseEnter?: (event: Event) => void;
  onMouseLeave?: (event: Event) => void;
}