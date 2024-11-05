import FeatureItem from '.';

export default {
  component: FeatureItem,
  title: 'FeatureItem',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const FeatureSpeed = {
  args: {
    value: '26',
    unit: 'mph',
    description: 'Top Speed',
  },
};
