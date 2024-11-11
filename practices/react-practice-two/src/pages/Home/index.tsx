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
  ProductColorsSection,
  TestimonialsSection,
  NewsletterSection,
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
    <ProductColorsSection />
    <TestimonialsSection />
    <NewsletterSection />
  </>
);

export default Home;
