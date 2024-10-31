import Input from '.';

export default {
  component: Input,
  title: 'Input',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const InputEmail = {
  args: {
    type: 'email',
    name: 'email',
    placeholder: 'Enter your email.',
  },
};
