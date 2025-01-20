import { Meta, StoryObj } from '@storybook/react';
import LoadingSpinner from '.';

// Define metadata for the story
const meta: Meta<typeof LoadingSpinner> = {
  title: 'LoadingSpinner',
  component: LoadingSpinner,
  decorators: [
    (Story) => (
      <div className="relative w-full h-screen flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

// Story type definition
type Story = StoryObj<typeof LoadingSpinner>;

export const Loading: Story = {
  render: () => <LoadingSpinner />,
};
