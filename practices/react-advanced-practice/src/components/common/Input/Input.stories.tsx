// Import common icons
import { SearchIcon, HidePasswordIcon } from '@/components/common/Icons';

// Import components
import Input from '.';

export default {
  component: Input,
  title: 'Input',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Search = {
  args: {
    type: 'search',
    name: 'search',
    placeholder: 'Type here...',
    leftIcon: <SearchIcon />,
  },
};

export const Password = {
  args: {
    type: 'password',
    name: 'password',
    placeholder: 'Password...',
    rightIcon: <HidePasswordIcon />,
  },
};
