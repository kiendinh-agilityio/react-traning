import Profile from '.';

export default {
  title: 'Profile',
  component: Profile,
  parameters: {
    layout: 'centered',
  },
};

export const ProfileUser = {
  args: {
    avatarUrl: 'images/SerhiyHipskyy.png',
    fullName: 'Serhiy Hipskyy',
    position: 'CEO Universal',
  },
};
