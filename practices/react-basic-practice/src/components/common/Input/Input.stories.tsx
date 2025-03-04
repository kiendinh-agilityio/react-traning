import Input from '.';
import { SearchIcon } from '@/components/common/Icons';

export default {
  component: Input,
  title: 'Input',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const InputSearch = {
  args: {
    type: 'search',
    name: 'search',
    placeholder: 'Type here...',
    leftIcon: <SearchIcon />,
  },
};
