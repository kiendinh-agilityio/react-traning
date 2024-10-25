import IconWrapper from '.';

// Import components icon
import { HomeIcon, ChartIcon } from '@/components/common/Icons';

export default {
  component: IconWrapper,
  title: 'IconWrapper',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Active = {
  args: {
    active: true,
    icon: <HomeIcon />,
  },
};

export const Inactive = {
  args: {
    active: false,
    icon: <ChartIcon />,
  },
};
