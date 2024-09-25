import { Logo, Heading, Input } from '@/components/common';

const Home = () => {
  return (
    <>
      <Logo />
      <Heading text="Authors Table" />
      <Input name="authorName" type="search" placeholder="Type here..." hasIcon={true} />
      <button className="bg-primary border-2 border-primary">Add new author</button>
    </>
  );
};

export default Home;
