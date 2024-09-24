import { Logo } from '@/components/common';

const Home = () => {
  return (
    <>
      <Logo />
      <h1>Authors Table</h1>
      <button className="bg-primary border-2 border-primary">Add new author</button>
    </>
  );
};

export default Home;
