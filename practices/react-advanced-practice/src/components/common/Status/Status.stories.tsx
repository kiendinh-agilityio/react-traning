import Status from '.';

export default {
  component: Status,
  title: 'Status',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Active = {
  args: {
    value: 'Active',
  },
};

export const Inactive = {
  args: {
    value: 'Inactive',
  },
};
