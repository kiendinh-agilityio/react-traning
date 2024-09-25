import Input from '.';
import { SearchIcon } from '@/components/common/Icons';

export default {
  component: Input,
  title: 'Input',
  tags: ['autodocs'],
};

export const InputName = {
  args: {
    type: 'text',
    name: 'name',
    value: 'Esthera Jackson',
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
