import Button from '.';

// import icons
import { LinkIcon, PlayIcon } from '@/components/common/Icons';

export default {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const ButtonPrimary = {
  args: {
    variant: 'primary',
    label: 'SIGN UP',
  },
};

export const ButtonSecondary = {
  args: {
    variant: 'secondary',
    label: 'SIGN IN',
  },
};

export const ButtonTertiary = {
  args: {
    variant: 'tertiary',
    label: 'More Accessories Coming Soon',
  },
};

export const ButtonLink = {
  args: {
    variant: 'link',
    icon: <LinkIcon />,
  },
};

export const ButtonIcon = {
  args: {
    variant: 'transparent',
    icon: <PlayIcon />,
  },
};
