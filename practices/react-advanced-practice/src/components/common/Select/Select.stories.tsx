import Select from '.';
import { ROLES } from '@/constants';

export default {
  component: Select,
  title: 'Select',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const SelectRoles = {
  args: {
    label: 'Roles',
    name: 'roles',
    value: 'roles',
    optionsList: ROLES,
  },
};
