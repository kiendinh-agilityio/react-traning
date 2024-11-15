import { useState } from 'react';

// import constants
import { PRODUCT_COLORS_LIST } from '@/constants';

// import common components
import { Intro } from '@/components';

// import components
import { ChooseItem } from '@/components';

const ProductColorsSection = () => {
  const [selectedImage, setSelectedImage] = useState(PRODUCT_COLORS_LIST[0].image);

  const handleChooseImage = (imageUrl: string) => setSelectedImage(imageUrl);

  // Create function render Product colors list
  const renderProductColorsList = () =>
    PRODUCT_COLORS_LIST.map((item) => (
      <ChooseItem key={item.id} image={item.image} label={item.label} onClick={handleChooseImage} />
    ));

  return (
    <section className="container pt-16 pb-64">
      <Intro title="Colors" description="Checkout our products colors." />
      <div className="relative">
        <img className="w-full h-[873px] mt-28" src={selectedImage} alt="Product Colors Selected" />
        <div className="flex justify-center gap-[95px] absolute right-0 left-0 top-[88%]">
          {renderProductColorsList()}
        </div>
      </div>
    </section>
  );
};

export default ProductColorsSection;
