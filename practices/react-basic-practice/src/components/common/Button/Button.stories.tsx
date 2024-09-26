import { BUTTON_STYLE } from '@/constants';
import Button from '.';

export default {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    textColor: BUTTON_STYLE.TEXT_COLOR.LIGHT,
    backgroundColor: BUTTON_STYLE.BACKGROUND_COLOR.PRIMARY,
    label: 'Submit',
  },
};

export const Secondary = {
  args: {
    textColor: BUTTON_STYLE.TEXT_COLOR.PRIMARY,
    backgroundColor: BUTTON_STYLE.BACKGROUND_COLOR.SECONDARY,
    label: 'Add New Author',
  },
};
