// import common components
import { Button } from '@/components/common';

// import types
import { ButtonVariant } from '@/types';

// import images
import { Scooter, BuiltQuality, Parts } from '@/assets/images';

// import components
import { GalleryItem, Intro } from '@/components';

const GallerySection = () => {
  const handleButtonClick = () => {
    // TODO: Add button click handling logic here when buttons are enabled
  };

  return (
    <section className="container py-16">
      <Intro
        title="Gallery"
        description="View gallery of our products and make yourself satisfied with our creation."
      />
      <div className="flex justify-between mt-28">
        <div className="flex flex-col pt-48">
          <GalleryItem label="Scooter" url={Scooter} />
          <div className="flex flex-col gap-[27px] mt-[55px]">
            <Button
              variant={ButtonVariant.Tertiary}
              label="Battery Images"
              onClick={handleButtonClick}
              isDisabled={true}
            />
            <Button
              variant={ButtonVariant.Tertiary}
              label="Spare Parts Images"
              onClick={handleButtonClick}
              isDisabled={true}
            />
            <Button
              variant={ButtonVariant.Tertiary}
              label="Charging Cable Images"
              onClick={handleButtonClick}
              isDisabled={true}
            />
          </div>
        </div>
        <div className="flex flex-col gap-24">
          <GalleryItem label="Built Quality" url={BuiltQuality} />
          <GalleryItem label="Parts" url={Parts} />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
