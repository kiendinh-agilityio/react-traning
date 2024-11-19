import { useState } from 'react';

// import common components
import { Button, Input } from '@/components/common';

// import components
import { Intro } from '@/components';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleButtonSubmit = () => {
    // TODO: Add button click handling logic here when buttons are enabled
  };

  return (
    <section className="container flex flex-col justify-center pt-32 pb-24">
      <Intro
        title="Subscribe To Newsletter"
        description="Subscribe to our newsletter to get amazing offers in future."
      />
      <div className="flex justify-center gap-5 mt-[59px]">
        <Input
          value={email}
          name="email"
          type="email"
          placeholder="Enter your email."
          onChange={setEmail}
        />
        <Button onClick={handleButtonSubmit} className="w-[196px] text-base rounded-base">
          Get start
        </Button>
      </div>
    </section>
  );
};

export default NewsletterSection;
