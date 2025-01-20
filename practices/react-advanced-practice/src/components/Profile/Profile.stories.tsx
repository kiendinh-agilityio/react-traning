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
    fullName: 'Esthera Jackson',
    email: 'esthera@simmmple.com',
    avatarUrl: 'https://phimtat.vn/wp-content/uploads/2023/11/avt-3d.jpg',
  },
};
