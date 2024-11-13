import GalleryItem from '.';

// import images
import { Scooter } from '@/assets/images';

export default {
  component: GalleryItem,
  title: 'GalleryItem',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const GalleryScooterItem = {
  args: {
    url: Scooter,
    label: 'Scooter',
  },
};
