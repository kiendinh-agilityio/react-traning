import { useEffect } from 'react';

// Import useMutation
import { useMutation } from '@tanstack/react-query';

// Import radix ui
import { Box, Flex } from '@radix-ui/themes';

// Import icons
import { SearchIcon } from '@/components/common/Icons';

// import common components
import { Logo, Heading, Input, Button, LoadingSpinner, Text } from '@/components/common';

// Import components
import { Sidebar, AuthorTable } from '@/components';

// Import header for home page
import Header from './Header';

// Import layouts
import { Footer } from '@/layouts';

// Import types
import { ButtonVariant, TextSize } from '@/types';

// Import services
import { getAllAuthors } from '@/services';

// Import Zustand store
import { useAuthorStore } from '@/stores';

// Import hooks
import { useDebounce } from '@/hooks';

const Home = () => {
  // Zustand store for authors
  const {
    authors,
    filteredAuthors,
    setAuthors,
    searchQuery,
    setSearchQuery,
    filterAuthors,
    isLoading,
    setLoading,
    setFiltering,
  } = useAuthorStore();

  // useDebounce
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  // Use mutation for fetching authors
  const { mutate } = useMutation({
    mutationFn: getAllAuthors,
    onSuccess: (data) => {
      setAuthors(data);

      // Set loading state to false when data is loaded
      setLoading(false);
    },
  });

  // Trigger the mutation to fetch authors
  useEffect(() => {
    // Set loading to true before the fetch
    setLoading(true);

    mutate();
  }, [mutate, setLoading]);

  // Handle search query changes
  useEffect(() => {
    setFiltering(!!debouncedSearchQuery);
    debouncedSearchQuery ? filterAuthors(debouncedSearchQuery) : setAuthors(authors);
  }, [debouncedSearchQuery, filterAuthors, setFiltering, setAuthors, authors]);

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

  // Handle search change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchQuery(e.target.value);

  return (
    <Box className="bg-tertiary">
      <Box className="min-h-screen flex pt-[30px] pr-[22px] pb-[23px]">
        <Box>
          {/* Render the sidebar with logo */}
          <Flex
            justify="center"
            align="center"
            className=" mb-[22px] gap-12 gradient-border pb-7"
          >
            <Logo href="/home" />
          </Flex>
          <Sidebar />
        </Box>
        <Flex direction="column" justify="between" className="w-full">
          {/* Render the header */}
          <Header currentPage="Tables" />
          <Box className="bg-white min-h-[88vh] mb-7 rounded-[15px] px-[21px] py-7 relative">
            <Flex justify="between" align="center" className="mb-7">
              {/* Render the heading and search bar */}
              <Heading text="Authors Table" />
              <Flex className="gap-5">
                <Box className="w-96">
                  <Input
                    name="authorSearch"
                    type="search"
                    placeholder="Search by name or email..."
                    leftIcon={<SearchIcon className="cursor-pointer" />}
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </Box>
                <Button variant={ButtonVariant.Secondary} onClick={handleShowAddModal}>
                  Add New Author
                </Button>
              </Flex>
            </Flex>

            {/* Render AuthorTable with authors from Zustand store */}
            {isLoading ? (
              <Flex justify="center" align="center" className="py-10">
                <LoadingSpinner />
              </Flex>
            ) : (
              // Render AuthorTable once the authors data is loaded
              <AuthorTable
                authors={filteredAuthors}
                onEditAuthor={handleShowEditModal}
                onDeleteAuthor={handleShowConfirmModal}
              />
            )}

            {/* Show message if no search results, otherwise render the table */}
            {filteredAuthors.length === 0 && debouncedSearchQuery && !isLoading && (
              <Flex justify="center" align="center" className="mb-5">
                <Text
                  className="font-bold text-center text-[#a0aec0] py-14"
                  size={TextSize.Huge}
                >
                  No search results found.
                </Text>
              </Flex>
            )}
          </Box>
          {/* Render the footer */}
          <Footer />
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
