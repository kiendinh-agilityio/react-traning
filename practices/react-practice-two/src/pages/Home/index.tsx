// import layouts
import { Header } from '@/layouts/';

// import sections
import {
  HeroSection,
  FeaturesSection,
  ProductInfoSection,
  HighEfficiencySection,
} from '@/layouts/Sections';

const Home = () => (
  <>
    <Header />
    <HeroSection />
    <FeaturesSection />
    <ProductInfoSection />
    <HighEfficiencySection />
  </>
);

export default Home;
