import Paragraph from '.';

export default {
  component: Paragraph,
  title: 'Paragraph',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Name = {
  args: {
    variant: 'bold',
    size: 'sm',
    text: 'Esthera Jackson',
  },
};

export const Positions = {
  args: {
    variant: 'regular',
    size: 'xs',
    text: 'Organization',
  },
};
