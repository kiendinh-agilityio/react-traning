// Import icon
import { SearchIcon } from '@/components/common/Icons';

// Import components
import { Logo, Heading, Input, Button } from '@/components/common';

const Home = () => {
  return (
    <>
      <Logo />
      <Heading text="Authors Table" />
      <Input name="authorName" type="search" placeholder="Type here..." leftIcon={<SearchIcon />} />
      <Button variant="secondary" label="Add New Author" />
    </>
  );
};

export default Home;
