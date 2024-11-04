import Link from '.';

// import common icons
import { TwitterIcon } from '@/components/common/Icons';

export default {
  component: Link,
  title: 'Link',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const ContactLink = {
  args: {
    href: '/contact',
    text: 'Contact',
  },
};

export const SocialLink = {
  args: {
    href: 'https://twitter.com',
    icon: <TwitterIcon />,
  },
};
