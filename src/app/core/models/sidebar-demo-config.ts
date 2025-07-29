import { SidebarConfig, SidebarMenuItem } from "./SidebarConfig";

export const CURRENT_USER = {
  name: 'Uttam',
  role: 'admin',
  avatarUrl: '/assets/logo/Logo_for_Blog_Nest.png'
};

export const SIDEBAR_CONFIG: SidebarConfig = {
  collapsed: false,
  width: '260px',
  position: 'left',
  fixed: true,
  theme: 'auto',
  colorScheme: {
    primary: '#1976d2',
    secondary: '#424242',
    background: '#fff',
    text: '#222',
    hover: '#f5f5f5',
    active: '#e3f2fd',
  },
  responsive: true,
  overlay: true,
  animation: {
    type: 'slide',
    duration: 250,
    easing: 'ease-in-out'
  },
  header: {
    logoUrl: '/assets/logo/Logo_for_Blog_Nest.png',
    title: 'Cash Canvas',
    user: CURRENT_USER
  },
  footer: {
    content: '© 2025 Cash Canvas',
  },
  ariaLabel: 'Main sidebar navigation',
  keyboardNavigation: true,
  focusTrap: true,
  skipLinks: [
    { label: 'Skip to Dashboard', target: '#dashboard' },
    { label: 'Skip to Content', target: '#main-content' }
  ],
  multiLanguage: true,
  dragAndDrop: true,
  editable: true,
  rememberState: true,
  testingId: 'main-sidebar'
};

export const SIDEBAR_MENU: SidebarMenuItem[] = [
  {
    type: 'heading',
    label: 'Main',
    customClass: 'sidebar-heading'
  },
  {
    type: 'link',
    label: 'Dashboard',
    route: '/dashboard',
    icon: 'Logo_for_Blog_Nest.png',
    active: true,
    badge: 4,
    badgeColor: 'primary',
    tooltip: 'Go to Dashboard',
    ariaLabel: 'Dashboard Page',
    testingId: 'dashboard-link'
  },
  {
    type: 'dropdown',
    label: 'Transactions',
    icon: 'account_balance',
    expanded: false,
    badge: 2,
    badgeColor: 'danger',
    tooltip: 'View transactions',
    ariaLabel: 'Transactions dropdown',
    testingId: 'transactions-dropdown',
    children: [
      {
        type: 'link',
        label: 'All Transactions',
        route: '/transactions/all',
        icon: 'list',
        badge: 12,
        badgeColor: 'secondary',
        tooltip: 'All transactions'
      },
      {
        type: 'link',
        label: 'Scheduled',
        route: '/transactions/scheduled',
        icon: 'calendar_today',
        disabled: false
      },
      {
        type: 'divider'
      },
      {
        type: 'link',
        label: 'Failed',
        route: '/transactions/failed',
        icon: 'error',
        badge: 1,
        badgeColor: 'danger',
        disabled: true,
        tooltip: 'Failed transactions'
      }
    ]
  },
  {
    type: 'divider'
  },
  {
    type: 'dropdown',
    label: 'Bills',
    icon: 'receipt',
    expanded: false,
    children: [
      {
        type: 'link',
        label: 'Upcoming Bills',
        route: '/bills/upcoming',
        badge: 2,
        badgeColor: 'warning'
      },
      {
        type: 'link',
        label: 'Overdue Bills',
        route: '/bills/overdue',
        badge: 1,
        badgeColor: 'danger'
      },
      {
        type: 'link',
        label: 'Paid Bills',
        route: '/bills/paid',
        icon: 'done_all'
      }
    ]
  },
  {
    type: 'link',
    label: 'Budget',
    route: '/budget',
    icon: 'pie_chart',
    disabled: false
  },
  {
    type: 'divider'
  },
  {
    type: 'custom',
    customTemplate: '<app-custom-sidebar-widget></app-custom-sidebar-widget>',
    show: (user) => user.role === 'admin'
  },
  {
    type: 'link',
    label: 'Settings',
    route: '/settings',
    icon: 'settings',
    role: ['admin', 'manager'],
    tooltip: 'App settings'
  },
  {
    type: 'link',
    label: 'External Docs',
    externalUrl: 'https://docs.cashcanvas.com',
    icon: 'help_outline',
    target: '_blank',
    tooltip: 'Open documentation'
  },
  {
    type: 'heading',
    label: 'User',
    customClass: 'sidebar-heading'
  },
  {
    type: 'link',
    label: 'Profile',
    route: '/profile',
    icon: 'person',
    avatar: '/assets/avatar.png'
  },
  {
    type: 'link',
    label: 'Logout',
    route: '/logout',
    icon: 'logout',
    onClick: () => window.alert('Logging out!'),
    customClass: 'logout-link'
  }
];