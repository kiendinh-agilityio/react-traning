import Button from '.';

export default {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    variant: 'primary',
    label: 'Submit',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    label: 'Add New Author',
  },
};
