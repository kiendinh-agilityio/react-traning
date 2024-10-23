import Paragraph from '.';

export default {
  component: Paragraph,
  title: 'Paragraph',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Bold = {
  args: {
    text: 'Esthera Jackson',
  },
};

export const Regular = {
  args: {
    variant: 'regular',
    size: 'xs',
    text: 'Organization',
  },
};
