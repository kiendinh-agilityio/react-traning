import { useEffect, useState } from 'react';

// Import useMutation
import { useMutation } from '@tanstack/react-query';

// Import radix ui
import { Box } from '@radix-ui/themes';

// Import icons
import { SearchIcon } from '@/components/common/Icons';

// import common components
import { Logo, Heading, Input, Button, LoadingSpinner } from '@/components/common';

// Import components
import { Sidebar, AuthorTable } from '@/components';

// Import header for home page
import Header from './Header';

// Import layouts
import { Footer } from '@/layouts';

// Import types
import { ButtonVariant } from '@/types';

// Import services
import { getAllAuthors } from '@/services';

// Import Zustand store
import { useAuthorStore } from '@/stores';

const Home = () => {
  // Zustand store for authors
  const { authors, setAuthors } = useAuthorStore();

  // Local state for loading authors
  const [isLoading, setIsLoading] = useState(true);

  // Use mutation for fetching authors
  const { mutate } = useMutation({
    mutationFn: getAllAuthors,
    onSuccess: (data) => {
      setAuthors(data);

      // Set loading state to false when data is loaded
      setIsLoading(false);
    },
  });

  // Trigger the mutation to fetch authors
  useEffect(() => {
    mutate();
  }, [mutate]);

  const handleShowAddModal = () => {
    // TODO: Add modal display logic
  };

  // Function to show the 'Edit' modal for a specific author
  const handleShowEditModal = () => {
    // TODO: Add modal display logic
  };

  // Function to show the confirm modal for a specific author ID
  const handleShowConfirmModal = () => {
    // TODO: Add modal display logic
  };

  return (
    <Box className="bg-tertiary">
      <Box className="min-h-screen flex pt-[30px] pr-[22px] pb-[23px]">
        <Box>
          {/* Render the sidebar with logo */}
          <Box className="flex justify-center mb-[22px] items-center gap-12 gradient-border pb-7">
            <Logo href="/home" />
          </Box>
          <Sidebar />
        </Box>
        <Box className="flex-col justify-between w-full">
          {/* Render the header */}
          <Header currentPage="Tables" />
          <Box className="bg-white min-h-[88vh] mb-7 rounded-[15px] px-[21px] py-7 relative">
            <Box className="flex justify-between items-center mb-7">
              {/* Render the heading and search bar */}
              <Heading text="Authors Table" />
              <Box className="flex gap-5">
                <Box className="w-96">
                  <Input
                    name="authorName"
                    type="search"
                    placeholder="Type here..."
                    leftIcon={<SearchIcon className="cursor-pointer" />}
                  />
                </Box>
                <Button variant={ButtonVariant.Secondary} onClick={handleShowAddModal}>
                  Add New Author
                </Button>
              </Box>
            </Box>
            {/* Render AuthorTable with authors from Zustand store */}
            {isLoading ? (
              <Box className="flex justify-center items-center py-10">
                <LoadingSpinner />
              </Box>
            ) : (
              // Render AuthorTable once the authors data is loaded
              <AuthorTable
                authors={authors}
                onEditAuthor={handleShowEditModal}
                onDeleteAuthor={handleShowConfirmModal}
              />
            )}
          </Box>
          {/* Render the footer */}
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
