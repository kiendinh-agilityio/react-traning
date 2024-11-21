import ChooseItem from '.';

// import images
import { ProductRed } from '@/assets/images';

export default {
  component: ChooseItem,
  title: 'ChooseItem',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const ProductRedColor = {
  args: {
    image: ProductRed,
    label: '03',
  },
};
