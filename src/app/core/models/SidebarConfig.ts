export interface SidebarConfig {
  collapsed: boolean;
  width: string;
  position: 'left' | 'right' | 'top' | 'bottom';
  fixed: boolean;
  theme: 'light' | 'dark' | 'auto' | string;
  colorScheme?: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    hover: string;
    active: string;
  };
  responsive: boolean;
  overlay: boolean;
  animation?: {
    type: string;
    duration: number;
    easing: string;
  };
  header?: {
    logoUrl?: string;
    title?: string;
    user?: {
      name: string;
      avatarUrl: string;
      role?: string;
    };
    customTemplate?: any; // Angular TemplateRef or string
  };
  footer?: {
    content?: string;
    customTemplate?: any;
  };
  ariaLabel?: string;
  keyboardNavigation?: boolean;
  focusTrap?: boolean;
  skipLinks?: Array<{ label: string; target: string }>;
  menuLoader?: () => Promise<SidebarMenuItem[]>;
  roleBasedMenu?: (role: string) => SidebarMenuItem[];
  multiLanguage?: boolean;
  customRenderer?: (item: SidebarMenuItem) => any;
  dragAndDrop?: boolean;
  editable?: boolean;
  rememberState?: boolean;
  testingId?: string;
}

// Sidebar menu item interface
export interface SidebarMenuItem {
  type: 'link' | 'dropdown' | 'divider' | 'heading' | 'section' | 'custom';
  label?: string;
  i18nKey?: string;
  route?: string;
  externalUrl?: string;
  icon?: string;
  active?: boolean;
  disabled?: boolean;
  children?: SidebarMenuItem[];
  expanded?: boolean;
  badge?: string | number;
  badgeColor?: string;
  avatar?: string;
  image?: string;
  tooltip?: string;
  show?: boolean | ((user: any) => boolean);
  dividerAfter?: boolean;
  dividerBefore?: boolean;
  customClass?: string;
  customStyle?: any;
  target?: string;
  tabIndex?: number;
  ariaLabel?: string;
  onClick?: (item: SidebarMenuItem) => void;
  loading?: boolean;
  submenuDirection?: 'left' | 'right' | 'auto';
  role?: string[]; // roles that can view this item
  customTemplate?: any;
  testingId?: string;
  dynamicProps?: any;
}
