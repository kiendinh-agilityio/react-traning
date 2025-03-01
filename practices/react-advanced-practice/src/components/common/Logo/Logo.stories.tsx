import { Meta, StoryObj } from '@storybook/react';
import Logo from '.';

export default {
  title: 'Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const LogoPurityPrimary: StoryObj = {
  args: {
    color: 'primary',
    href: '/',
  },
};

export const LogoPuritySecondary: StoryObj = {
  args: {
    color: 'secondary',
    href: '/',
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: 'black', padding: '20px', display: 'inline-block' }}>
        <Story />
      </div>
    ),
  ],
};
