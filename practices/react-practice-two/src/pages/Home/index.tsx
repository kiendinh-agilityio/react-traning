// import layouts
import { Header, Footer } from '@/layouts/';

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
    <Footer />
  </>
);

export default Home;
