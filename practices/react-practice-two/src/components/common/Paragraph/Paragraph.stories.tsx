import Paragraph from '.';

export default {
  component: Paragraph,
  title: 'Paragraph',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const TextBold = {
  args: {
    variant: 'font-bold',
    text: 'Parts',
  },
};

export const TextMedium = {
  args: {
    variant: 'font-medium',
    text: 'Serhiy Hipskyy',
  },
};

export const TextRegular = {
  args: {
    variant: 'font-regular',
    text: 'CEO Universal',
  },
};
