// import component
import { FeatureItem } from '@/components';

// import constants
import { FEATURES_LIST } from '@/constants';

const FeaturesSection = () => {
  const renderFeaturesList = FEATURES_LIST.map((feature) => (
    <FeatureItem
      key={feature.id}
      value={feature.value}
      unit={feature.unit}
      description={feature.description}
    />
  ));

  return (
    <section className="pb-16">
      <div className="container flex justify-between">{renderFeaturesList}</div>
    </section>
  );
};

export default FeaturesSection;
