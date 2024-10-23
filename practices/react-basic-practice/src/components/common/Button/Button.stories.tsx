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
    label: 'Submit',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    label: 'Add New Author',
  },
};

export const Tertiary = {
  args: {
    variant: 'tertiary',
    label: 'Cancel',
  },
};

export const Link = {
  args: {
    variant: 'link',
    label: 'DOCUMENTATION',
  },
};

export const Danger = {
  args: {
    variant: 'danger',
    label: 'Yes, Im sure',
  },
};

export const Transparent = {
  args: {
    variant: 'transparent',
    icon: <EditIcon />,
    label: 'Edit',
  },
};
