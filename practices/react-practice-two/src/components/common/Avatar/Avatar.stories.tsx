import Avatar from '.';

// import images
import { SerhiyHipskyy } from '@/assets/images';

export default {
  component: Avatar,
  title: 'Avatar',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const AvatarProfile = {
  args: {
    url: SerhiyHipskyy,
    alt: 'Serhiy Hipskyy',
  },
};
