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
    children: 'SIGN UP',
  },
};

export const ButtonSecondary = {
  args: {
    variant: 'secondary',
    children: 'SIGN IN',
  },
};

export const ButtonTertiary = {
  args: {
    variant: 'tertiary',
    children: 'More Accessories Coming Soon',
  },
};

export const ButtonLink = {
  args: {
    variant: 'link',
    children: <LinkIcon />,
  },
};

export const ButtonIcon = {
  args: {
    variant: 'transparent',
    children: <PlayIcon />,
  },
};
