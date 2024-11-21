import SocialItem from '.';

// import common icons
import { FacebookIcon } from '@/components/common/Icons';

export default {
  component: SocialItem,
  title: 'SocialItem',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Social = {
  args: {
    href: 'https://facebook.com',
    icon: <FacebookIcon />,
  },
};
