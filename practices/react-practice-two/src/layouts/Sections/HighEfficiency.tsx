// import components
import { Intro } from '@/components';

// import image
import { HighEfficiency } from '@/assets/images';

const HighEfficiencySection = () => (
  <section className="pt-[56px] pb-16">
    <div className="container">
      <Intro
        title="High Efficiency Motor"
        description="More torque for powerful riding with 22% maximum hill climbing capability."
      />
      <img src={HighEfficiency} alt="Product Info" />
    </div>
  </section>
);

export default HighEfficiencySection;
