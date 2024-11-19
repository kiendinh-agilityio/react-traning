// import common components
import { List, Heading, Button } from '@/components/common';

// import components
import { Intro } from '@/components';

// import images
import { GolfBagRock, ShoppingRack } from '@/assets/images';

// import common icons
import { ProductIcon } from '@/components/common/Icons';

// import constants
import { ACCESSORIES_LIST } from '@/constants';

// import types
import { ButtonVariant } from '@/types';

const MultipleAccessoriesSection = () => {
  const handleButtonLearnMore = () => {
    // TODO: Add button click handling logic here when buttons are enabled
  };

  return (
    <section className="pt-10 pb-16 relative">
      <div className="container">
        <Intro
          title="Multiple Accessories"
          description="There are multiple modes for the scooter for your multiple needs."
        />
        <div className="flex justify-between my-28">
          <div className="flex flex-col gap-[33px] py-12">
            <Heading level={3}>Golf Bag Rock</Heading>
            <List icon={<ProductIcon />} items={ACCESSORIES_LIST} />
          </div>
          <img src={GolfBagRock} alt="Golf Bag Rock" className="absolute right-0" />
        </div>
        <div className="flex justify-end mb-16">
          <img src={ShoppingRack} alt="Shopping Rack" className="absolute left-0" />
          <div className="flex flex-col gap-[33px] py-[22px] px-28">
            <Heading level={3}>Shopping Rack</Heading>
            <List icon={<ProductIcon />} items={ACCESSORIES_LIST} />
          </div>
        </div>
        <Button
          variant={ButtonVariant.Tertiary}
          onClick={handleButtonLearnMore}
          className="flex mx-auto"
        >
          More Accessories Coming Soon
        </Button>
      </div>
    </section>
  );
};

export default MultipleAccessoriesSection;
