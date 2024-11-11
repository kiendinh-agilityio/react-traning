// import components
import { Intro, List } from '@/components/common';

// import common icons
import { ProductIcon } from '@/components/common/Icons';

// import constants
import { PRODUCT_INFO_LIST } from '@/constants';

// import image
import { ProductInfo } from '@/assets/images';

const ProductInfoSection = () => (
  <section className="container py-16">
    <Intro
      title="Product Information"
      description="Our Scooter has following unique design and technology features:"
    />
    <div className="flex items-center justify-between mt-[22px]">
      <img src={ProductInfo} alt="Product Info" />
      <List icon={<ProductIcon />} items={PRODUCT_INFO_LIST} />
    </div>
  </section>
);

export default ProductInfoSection;
