// Import components icon
import {
  DashboardIcon,
  UserIcon,
  LoginIcon,
  RegisterIcon,
} from '@/components/common/Icons';

// Create data for header navbar
export const HEADER_NAVBAR = [
  { label: 'DASHBOARD', href: '/dashboard', icon: <DashboardIcon /> },
  { label: 'PROFILE', href: '/profile', icon: <UserIcon /> },
  { label: 'SIGN UP', href: '/signup', icon: <LoginIcon /> },
  { label: 'SIGN IN', href: '/signin', icon: <RegisterIcon /> },
];

// Create data for footer navbar
export const FOOTER_NAVBAR = [
  { label: 'Creative Tim', href: 'https://www.creative-tim.com' },
  { label: 'Simmmple', href: 'https://www.simmmple.com' },
  { label: 'Blog', href: '/blog' },
  { label: 'License', href: '/license' },
];
