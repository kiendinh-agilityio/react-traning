// import common components
import { Logo, Heading } from '@/components/common';

// Import components
import { Sidebar } from '@/components';

// Import layouts
import { Footer } from '@/layouts';

const Home = () => (
  <>
    <Logo href="/" />
    <Heading text="Authors Table" />
    <Sidebar />
    <Footer />
  </>
);

export default Home;
