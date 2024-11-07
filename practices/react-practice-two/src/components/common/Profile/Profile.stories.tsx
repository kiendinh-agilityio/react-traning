import Profile from '.';

// import images
import { SerhiyHipskyy } from '@/assets/images';

export default {
  title: 'Profile',
  component: Profile,
  parameters: {
    layout: 'centered',
  },
};

export const ProfileUser = {
  args: {
    avatarUrl: SerhiyHipskyy,
    fullName: 'Serhiy Hipskyy',
    position: 'CEO Universal',
  },
};

export const DefaultAvatar = {
  args: {
    fullName: 'Justus Menke',
    position: 'CEO Eronaman',
  },
};
