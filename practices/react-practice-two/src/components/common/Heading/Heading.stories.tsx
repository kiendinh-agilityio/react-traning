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
  text: string;
  level: 1 | 2 | 3;
  spanContent?: string;
};

const Template: StoryFn<HeadingStoryProps> = (args: HeadingStoryProps) => <Heading {...args} />;

// H1 Story
export const H1 = Template.bind({});
H1.args = {
  level: 1,
  text: 'THE FUTURE.',
  spanContent: "LET'S RIDE",
};

// H2 Story
export const H2 = Template.bind({});
H2.args = {
  text: 'Product Information',
  level: 2,
};
