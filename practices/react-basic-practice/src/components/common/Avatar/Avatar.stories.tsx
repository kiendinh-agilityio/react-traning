import Avatar from '.';

export default {
  component: Avatar,
  title: 'Avatar',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const User = {
  args: {
    src: 'https://phimtat.vn/wp-content/uploads/2023/11/avt-3d.jpg',
    alt: 'Esthera Jackson',
    width: '60px',
    height: '60px',
  },
};
