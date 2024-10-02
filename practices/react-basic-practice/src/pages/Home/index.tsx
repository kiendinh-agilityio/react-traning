import { useEffect, useState } from 'react';

// Import icons
import { SearchIcon } from '@/components/common/Icons';

// Import components
import { Logo, Heading, Input, Button, Sidebar, LoadingSpinner } from '@/components/common';

// Import components
import { AuthorsTable } from '@/components';

// Import layouts
import { Header, Footer } from '@/layouts';

// Import services
import { getAllAuthors } from '@/services';

// Import types
import { Author } from '@/types';

const Home = () => {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch authors on component mount
  useEffect(() => {
    const fetchAuthors = async () => {
      setLoading(true);
      try {
        const authorsData = await getAllAuthors();
        setAuthors(authorsData);
      } finally {
        setLoading(false);
      }
    };
    fetchAuthors();
  }, []);

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
            <div className="flex justify-between items-center mb-7">
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
            {loading ? (
              <div className="flex justify-center">
                <LoadingSpinner />
              </div>
            ) : (
              <AuthorsTable authors={authors} />
            )}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
