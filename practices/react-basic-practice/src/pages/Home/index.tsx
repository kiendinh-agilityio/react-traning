// Import icons
import { SearchIcon } from '@/components/common/Icons';

// Import components
import { Logo, Heading, Input, Button, Sidebar } from '@/components/common';

// Import layouts
import { Header, Footer } from '@/layouts';

const Home = () => {
  return (
    <>
      <div className="min-h-screen flex pt-[30px] pr-[22px] pb-[23px]">
        <div>
          <Logo />
          <Sidebar />
        </div>
        <div className="flex flex-col justify-between w-full">
          <Header currentPage="Tables" />
          <div className="bg-white min-h-screen mb-7 rounded-[15px] px-[21px] py-7">
            <div className="flex justify-between items-center">
              <Heading text="Authors Table" />
              <div className="flex gap-5">
                <div className="w-96">
                  <Input
                    name="authorName"
                    type="search"
                    placeholder="Type here..."
                    leftIcon={<SearchIcon />}
                  />
                </div>
                <Button variant="secondary" label="Add New Author" />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
