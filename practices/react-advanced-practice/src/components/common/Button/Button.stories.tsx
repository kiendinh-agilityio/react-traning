import Button from '.';

// Import icons
import { EditIcon } from '@/components/common/Icons';

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
    children: 'Submit',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Add New Author',
  },
};

export const Tertiary = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
};

export const Link = {
  args: {
    variant: 'link',
    children: 'DOCUMENTATION',
  },
};

export const Danger = {
  args: {
    variant: 'danger',
    children: 'Yes, Im sure',
  },
};

export const Transparent = {
  args: {
    variant: 'transparent',
    children: (
      <>
        {' '}
        <EditIcon /> Edit{' '}
      </>
    ),
  },
};
