// import layouts
import { Header } from '@/layouts/';

// import sections
import {
  HeroSection,
  FeaturesSection,
  ProductInfoSection,
  HighEfficiencySection,
  MultipleAccessoriesSection,
  GallerySection,
} from '@/layouts/Sections';

const Home = () => (
  <>
    <Header />
    <HeroSection />
    <FeaturesSection />
    <ProductInfoSection />
    <HighEfficiencySection />
    <MultipleAccessoriesSection />
    <GallerySection />
  </>
);

export default Home;
