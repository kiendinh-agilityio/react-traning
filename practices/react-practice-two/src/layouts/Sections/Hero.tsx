// import components
import { Heading, Button, Paragraph } from '@/components/common';

// import types
import { TextSize, ButtonVariant, ParagraphVariant } from '@/types';

// import common icons
import {
  LinkIcon,
  PlayIcon,
  PrevSecondaryIcon,
  NextSecondaryIcon,
} from '@/components/common/Icons';

// import image
import { HeroImage, NumberImage } from '@/assets/images';

const HeroSection = () => {
  const handleButtonLink = () => {
    // TODO: Add button click handling logic here when buttons are enabled
  };

  const handleButtonPlay = () => {
    // TODO: Add button click handling logic here when buttons are enabled
  };

  const handleButtonPrev = () => {
    // TODO: Add button click handling logic here when buttons are enabled
  };

  const handleButtonNext = () => {
    // TODO: Add button click handling logic here when buttons are enabled
  };

  return (
    <section className="pt-[87px] pb-52 relative">
      <div className="container flex">
        <div className="text-primary max-w-[586px]">
          <Heading level={1} size={TextSize.ExtraLarge}>
            <span className="font-light">LET'S RIDE</span> THE FUTURE.
          </Heading>
          <Paragraph
            size={TextSize.Medium}
            text="Simple and sleek design with users in mind."
            className="max-w-[353px] mt-[93px] border-t-4 border-primary pt-[62px]"
          />
          <div className="flex flex-row mt-[50px]">
            <div className="flex flex-row items-center gap-[22px] mr-20">
              <Button
                variant={ButtonVariant.Link}
                onClick={handleButtonLink}
                className="w-[58px] h-[58px]"
              >
                <LinkIcon />
              </Button>
              <Paragraph
                variant={ParagraphVariant.Medium}
                size={TextSize.Base}
                text="Buy now"
                className="leading-[32px]"
              />
            </div>
            <div className="flex flex-row items-center gap-[3px]">
              <Paragraph
                variant={ParagraphVariant.Medium}
                text="Watch our video how it works"
                className="text-[18px] leading-[25px] max-w-[110px]"
              />
              <Button variant={ButtonVariant.Transparent} onClick={handleButtonPlay}>
                <PlayIcon />
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-[30px]">
          <img src={HeroImage} alt="Hero Banner" />
          <div className="flex justify-end items-center pr-[50px]">
            <img src={NumberImage} alt="Number 01" />
            <div className="flex w-[104px] h-[46px] border border-primary rounded-[23px] ml-[37px]">
              <Button
                variant={ButtonVariant.CarouselSecondary}
                onClick={handleButtonPrev}
                className="btn-prev-secondary"
              >
                <PrevSecondaryIcon />
              </Button>
              <Button variant={ButtonVariant.CarouselSecondary} onClick={handleButtonNext}>
                <NextSecondaryIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
