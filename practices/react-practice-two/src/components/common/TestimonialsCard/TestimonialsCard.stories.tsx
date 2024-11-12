import { v4 as uuidv4 } from 'uuid';

import TestimonialsCard from '.';

// import images
import { BritainEriksen, SerhiyHipskyy } from '@/assets/images/';

export default {
  title: 'TestimonialsCard',
  component: TestimonialsCard,
  parameters: {
    layout: 'centered',
  },
};

export const TestimonialsCardActive = {
  args: {
    id: uuidv4(),
    rating: 5,
    description:
      'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.',
    profile: {
      fullName: 'Serhiy Hipskyy',
      position: 'CEO Universal',
      avatarUrl: SerhiyHipskyy,
    },
    isActive: true,
  },
};

export const TestimonialsCardInactive = {
  args: {
    id: uuidv4(),
    rating: 3,
    description:
      'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
    profile: {
      fullName: 'Justus Menkey',
      position: 'CEO Eronaman',
      avatarUrl: BritainEriksen,
    },
    isActive: false,
  },
};
