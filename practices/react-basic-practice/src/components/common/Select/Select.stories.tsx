import SelectForm from './index';
import { POSITIONS } from '@/constants';

export default {
  component: SelectForm,
  title: 'Select',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const SelectLayout = {
  args: {
    label: 'Position',
    name: 'position',
    value: 'position',
    optionsList: POSITIONS,
  },
};
