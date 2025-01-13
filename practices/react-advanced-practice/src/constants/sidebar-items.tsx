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
  },
  {
    icon: <ChartIcon />,
    label: 'Tables',
    active: false,
  },
  {
    icon: <BillingIcon />,
    label: 'Billing',
    active: false,
  },
  {
    icon: <SettingIcon />,
    label: 'RTL',
    active: false,
  },
  {
    icon: <ProfileIcon />,
    label: 'Profile',
    active: false,
    group: 'ACCOUNT PAGES',
  },
  {
    icon: <SigninIcon />,
    label: 'Sign In',
    active: false,
    group: 'ACCOUNT PAGES',
  },
  {
    icon: <SignupIcon />,
    label: 'Sign Up',
    active: false,
    group: 'ACCOUNT PAGES',
  },
];
