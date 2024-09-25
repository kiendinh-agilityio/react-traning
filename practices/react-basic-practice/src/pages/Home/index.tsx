import { Logo, Heading, SearchInput } from '@/components/common';

const Home = () => {
  return (
    <>
      <Logo />
      <Heading text="Authors Table" />
      <SearchInput />
      <button className="bg-primary border-2 border-primary">Add new author</button>
    </>
  );
};

export default Home;
