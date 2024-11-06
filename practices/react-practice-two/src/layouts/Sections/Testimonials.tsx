import { useState } from 'react';

// Import components
import { TestimonialsCard, Heading, Button } from '@/components/common';

// Import constants
import { TESTIMONIALS_LIST } from '@/constants';

// Import common icons
import { PrevPrimaryIcon, NextPrimaryIcon } from '@/components/common/Icons';

const TestimonialsSection = () => {
  const [activeId, setActiveId] = useState<number>(1);

  const handleButtonNext = () =>
    setActiveId((prevId) => (prevId === TESTIMONIALS_LIST.length ? 1 : prevId + 1));

  const handleButtonPrev = () =>
    setActiveId((prevId) => (prevId === 1 ? TESTIMONIALS_LIST.length : prevId - 1));

  return (
    <section className="bg-secondary pt-[82px] pb-[78px] text-center">
      <Heading text="Testimonials" />
      <div className="flex justify-center gap-9 mt-[41px]">
        {TESTIMONIALS_LIST.map((testimonial) => (
          <TestimonialsCard
            key={testimonial.id}
            id={testimonial.id}
            rating={testimonial.rating}
            text={testimonial.text}
            profile={testimonial.profile}
            isActive={activeId === testimonial.id}
          />
        ))}
      </div>

      <div className="flex justify-center gap-6 mt-[43px]">
        <Button
          onClick={handleButtonPrev}
          icon={<PrevPrimaryIcon />}
          className="btn-prev-primary"
        />
        <Button
          onClick={handleButtonNext}
          icon={<NextPrimaryIcon />}
          className="btn-next-primary"
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
