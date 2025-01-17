// Import components icon
import {
  HomeIcon,
  ChartIcon,
  BillingIcon,
  SettingIcon,
  ProfileIcon,
  SigninIcon,
  SignupIcon,
} from '@/components/common/Icons';

// Create constants for Sidebar item
export const SIDEBAR_ITEMS = [
  {
    icon: <HomeIcon />,
    label: 'Dashboard',
    active: true,
    href: '#',
  },
  {
    icon: <ChartIcon />,
    label: 'Tables',
    active: false,
    href: '#',
  },
  {
    icon: <BillingIcon />,
    label: 'Billing',
    active: false,
    href: '#',
  },
  {
    icon: <SettingIcon />,
    label: 'RTL',
    active: false,
    href: '#',
  },
  {
    icon: <ProfileIcon />,
    label: 'Profile',
    active: false,
    group: 'ACCOUNT PAGES',
    href: '#',
  },
  {
    icon: <SigninIcon />,
    label: 'Sign In',
    active: false,
    group: 'ACCOUNT PAGES',
    href: '/signin',
  },
  {
    icon: <SignupIcon />,
    label: 'Sign Up',
    active: false,
    group: 'ACCOUNT PAGES',
    href: '/signup',
  },
];
