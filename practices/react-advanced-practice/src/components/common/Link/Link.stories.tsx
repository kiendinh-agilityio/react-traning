import Link from '.';

export default {
  component: Link,
  title: 'Link',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const NavbarItem = {
  args: {
    href: '/Blog',
    children: 'Blog',
  },
};
