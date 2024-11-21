import List from './index';

// import constants
import { PRODUCT_INFO_LIST } from '@/constants';

// import common icons
import { ProductIcon } from '@/components/common/Icons';

export default {
  title: 'List',
  component: List,
  parameters: {
    layout: 'centered',
  },
};

export const ProductInfoList = {
  args: {
    items: PRODUCT_INFO_LIST,
    icon: <ProductIcon />,
  },
};
