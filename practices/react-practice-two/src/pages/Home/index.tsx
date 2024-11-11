// import layouts
import { Header } from '@/layouts/';

// import sections
import {
  HeroSection,
  FeaturesSection,
  ProductInfoSection,
  HighEfficiencySection,
  MultipleAccessoriesSection,
} from '@/layouts/Sections';

const Home = () => (
  <>
    <Header />
    <HeroSection />
    <FeaturesSection />
    <ProductInfoSection />
    <HighEfficiencySection />
    <MultipleAccessoriesSection />
  </>
);

export default Home;
