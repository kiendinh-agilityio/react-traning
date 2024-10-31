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
    value: 'SIGN UP',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    value: 'SIGN IN',
  },
};

export const Tertiary = {
  args: {
    variant: 'tertiary',
    value: 'More Accessories Coming Soon',
  },
};

export const Link = {
  args: {
    variant: 'link',
    value: 'Link',
  },
};
