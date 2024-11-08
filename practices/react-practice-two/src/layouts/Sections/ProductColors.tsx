import { useState } from 'react';

// import constants
import { PRODUCT_COLORS_LIST } from '@/constants';

// import components
import { ChooseItem } from '@/components/common';

const ProductColorsSection = () => {
  const [selectedImage, setSelectedImage] = useState(PRODUCT_COLORS_LIST[0].imageUrl);

  const handleImageClick = (imageUrl: string) => setSelectedImage(imageUrl);

  // Create function render Product colors list
  const renderProductColorsList = () =>
    PRODUCT_COLORS_LIST.map((item) => (
      <ChooseItem
        key={item.id}
        imageUrl={item.imageUrl}
        label={item.label}
        onClick={handleImageClick}
      />
    ));

  return (
    <section className="relative">
      <img className="w-full h-[837px]" src={selectedImage} alt="Selected" />
      <div className="flex justify-center gap-[95px] absolute right-0 left-0 top-[80%]">
        {renderProductColorsList()}
      </div>
    </section>
  );
};

export default ProductColorsSection;
