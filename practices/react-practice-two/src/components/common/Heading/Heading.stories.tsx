import { StoryFn, Meta } from '@storybook/react';
import Heading from '.';

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    level: {
      control: { type: 'select', options: [1, 2, 3] },
    },
    spanContent: {
      control: 'text',
    },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta;

type HeadingStoryProps = {
  children: React.ReactNode;
  level: 1 | 2 | 3;
};

const Template: StoryFn<HeadingStoryProps> = (args: HeadingStoryProps) => <Heading {...args} />;

// H1 Story
export const H1 = Template.bind({});
H1.args = {
  level: 1,
  children: 'THE FUTURE.',
};

// H2 Story
export const H2 = Template.bind({});
H2.args = {
  children: 'Product Information',
  level: 2,
};
