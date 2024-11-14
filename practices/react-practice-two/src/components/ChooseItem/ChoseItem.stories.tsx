import ChoseItem from '.';

// import images
import { ProductRed } from '@/assets/images';

export default {
  component: ChoseItem,
  title: 'ChoseItem',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const ProductRedColor = {
  args: {
    imageUrl: ProductRed,
    label: '03',
  },
};
