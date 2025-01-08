import { Meta, StoryObj } from '@storybook/react';
import Avatar from '.';

export default {
  title: 'Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const User: StoryObj = {
  args: {
    src: 'https://phimtat.vn/wp-content/uploads/2023/11/avt-3d.jpg',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '12px',
          overflow: 'hidden',
        }}
      >
        <Story />
      </div>
    ),
  ],
};
