// import components
import { Intro } from '@/components/common';

// import image
import { HighEfficiency } from '@/assets/images';

const HighEfficiencySection = () => (
  <section className="container py-16">
    <Intro
      title="High Efficiency Motor"
      description="More torque for powerful riding with 22% maximum hill climbing capability."
    />
    <img src={HighEfficiency} alt="Product Info" />
  </section>
);

export default HighEfficiencySection;
