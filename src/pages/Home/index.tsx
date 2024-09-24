import { Logo, Heading } from '@/components/common';

const Home = () => {
  return (
    <>
      <Logo />
      <Heading text="Authors Table" />
      <button className="bg-primary border-2 border-primary">Add new author</button>
    </>
  );
};

export default Home;
