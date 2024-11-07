import { useState } from 'react';

// Import components
import { TestimonialsCard, Heading, Button } from '@/components/common';

// Import constants
import { TESTIMONIALS_LIST } from '@/constants';

// Import common icons
import { PrevPrimaryIcon, NextPrimaryIcon } from '@/components/common/Icons';

// Import types
import { ButtonVariant } from '@/types';

const TestimonialsSection = () => {
  const [activeId, setActiveId] = useState<number>(1);

  const handleButtonNext = () =>
    setActiveId((prevId) => (prevId === TESTIMONIALS_LIST.length ? 1 : prevId + 1));

  const handleButtonPrev = () =>
    setActiveId((prevId) => (prevId === 1 ? TESTIMONIALS_LIST.length : prevId - 1));

  // Function render testimonials card
  const renderTestimonialsCard = (activeId: number) =>
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
    <section className="bg-secondary pt-[82px] pb-[78px] text-center">
      <Heading text="Testimonials" />
      <div className="flex justify-center gap-9 mt-[41px]">{renderTestimonialsCard(activeId)}</div>

      <div className="flex justify-center gap-6 mt-[43px]">
        <Button
          variant={ButtonVariant.CarouselPrimary}
          onClick={handleButtonPrev}
          icon={<PrevPrimaryIcon />}
          className="btn-prev-primary"
        />
        <Button
          variant={ButtonVariant.CarouselPrimary}
          onClick={handleButtonNext}
          icon={<NextPrimaryIcon />}
          className="btn-next-primary"
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
