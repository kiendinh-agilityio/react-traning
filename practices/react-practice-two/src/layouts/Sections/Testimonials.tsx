import { useState } from 'react';

// Import common components
import { Heading } from '@/components/common';

// Import constants
import { TESTIMONIALS_LIST, HOVER_BUTTON_CAROUSEL, DISABLED_BUTTON_CAROUSEL } from '@/constants';

// Import common icons
import { PrevPrimaryIcon, NextPrimaryIcon } from '@/components/common/Icons';

// Import components
import { TestimonialsCard, CarouselButton } from '@/components';

// import types
import { CarouselButtonVariant } from '@/types';

const TestimonialsSection = () => {
  // Set the initial activeId to the id of the first testimonial
  const [activeId, setActiveId] = useState<string>(TESTIMONIALS_LIST[0].id);

  const currentTestimonialsCard = TESTIMONIALS_LIST.findIndex((item) => item.id === activeId);

  const isPrevDisabled = currentTestimonialsCard === 0;
  const isNextDisabled = currentTestimonialsCard === TESTIMONIALS_LIST.length - 1;

  // Helper function to update the active testimonial based on an index offset
  const setActiveTestimonialsCard = (items: number) => {
    const TestimonialsCard =
      (currentTestimonialsCard + items + TESTIMONIALS_LIST.length) % TESTIMONIALS_LIST.length;

    setActiveId(TESTIMONIALS_LIST[TestimonialsCard].id);
  };

  // Function move to the next testimonial
  const handleButtonNext = () => setActiveTestimonialsCard(1);

  // Function move to the previous testimonial
  const handleButtonPrev = () => setActiveTestimonialsCard(-1);

  // Function to render testimonials card
  const renderTestimonialsCard = (activeId: string) =>
    TESTIMONIALS_LIST.map((testimonial) => (
      <TestimonialsCard
        key={testimonial.id}
        rating={testimonial.rating}
        description={testimonial.description}
        profile={testimonial.profile}
        isActive={activeId === testimonial.id}
      />
    ));

  return (
    <section className="bg-secondary pb-[82px] pt-[78px]">
      <div className="container text-center">
        <Heading>Testimonials</Heading>
        <div className="flex justify-center gap-9 mt-[41px]">
          {renderTestimonialsCard(activeId)}
        </div>
        <div className="flex justify-center gap-6 mt-[43px]">
          <CarouselButton
            variant={CarouselButtonVariant.Primary}
            onClick={handleButtonPrev}
            className={isPrevDisabled ? DISABLED_BUTTON_CAROUSEL : HOVER_BUTTON_CAROUSEL}
            isDisabled={isPrevDisabled}
            icon={<PrevPrimaryIcon />}
          />
          <CarouselButton
            variant={CarouselButtonVariant.Primary}
            onClick={handleButtonNext}
            className={`btn-carousel-primary ${isNextDisabled ? DISABLED_BUTTON_CAROUSEL : HOVER_BUTTON_CAROUSEL}`}
            isDisabled={isNextDisabled}
            icon={<NextPrimaryIcon />}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
