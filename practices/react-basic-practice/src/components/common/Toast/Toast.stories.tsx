import Toast from '.';

export default {
  component: Toast,
  title: 'Toast',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Success = {
  args: {
    type: 'success',
    message: 'Author has been add successfully',
  },
};

export const Failed = {
  args: {
    type: 'failed',
    message: 'Author has been add unsuccessfully',
  },
};
