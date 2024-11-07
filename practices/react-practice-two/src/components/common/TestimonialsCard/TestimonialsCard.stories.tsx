import TestimonialsCard from '.';

export default {
  title: 'TestimonialsCard',
  component: TestimonialsCard,
  parameters: {
    layout: 'centered',
  },
};

export const TestimonialsCardActive = {
  args: {
    id: 1,
    rating: 1,
    description:
      'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.',
    profile: {
      fullName: 'Serhiy Hipskyy',
      position: 'CEO Universal',
      avatarUrl: 'images/SerhiyHipskyy.png',
    },
    isActive: true,
  },
};

export const TestimonialsCardInactive = {
  args: {
    id: 2,
    rating: 3,
    description:
      'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
    profile: {
      fullName: 'Justus Menkey',
      position: 'CEO Eronaman',
      avatarUrl: 'images/JustusMenke.png',
    },
    isActive: false,
  },
};
