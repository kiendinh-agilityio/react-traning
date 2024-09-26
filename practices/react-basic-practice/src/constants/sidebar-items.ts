import {
  HomeIcon,
  ChartIcon,
  BillingIcon,
  SettingIcon,
  ProfileIcon,
  SigninIcon,
  SignupIcon,
} from '@/components/common/Icons';

export const SIDEBAR_ITEMS = [
  {
    icon: HomeIcon,
    text: 'Dashboard',
    active: true,
  },
  {
    icon: ChartIcon,
    text: 'Tables',
    active: false,
  },
  {
    icon: BillingIcon,
    text: 'Billing',
    active: false,
  },
  {
    icon: SettingIcon,
    text: 'RTL',
    active: false,
  },
  {
    icon: ProfileIcon,
    text: 'Profile',
    active: false,
    group: 'ACCOUNT PAGES',
  },
  {
    icon: SigninIcon,
    text: 'Sign In',
    active: false,
    group: 'ACCOUNT PAGES',
  },
  {
    icon: SignupIcon,
    text: 'Sign Up',
    active: false,
    group: 'ACCOUNT PAGES',
  },
];
