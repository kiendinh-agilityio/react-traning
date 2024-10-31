import Button from '.';

export default {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    label: 'SIGN UP',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    label: 'SIGN IN',
  },
};

export const Tertiary = {
  args: {
    variant: 'tertiary',
    label: 'More Accessories Coming Soon',
  },
};

export const Link = {
  args: {
    variant: 'link',
    label: 'Link',
  },
};
