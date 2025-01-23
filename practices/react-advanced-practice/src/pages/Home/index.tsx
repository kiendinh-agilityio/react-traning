import { useEffect, useState } from 'react';

// Import useMutation
import { useMutation } from '@tanstack/react-query';

// Import radix ui
import { Box, Flex } from '@radix-ui/themes';

// Import icons
import { SearchIcon } from '@/components/common/Icons';

// import common components
import {
  Logo,
  Heading,
  Input,
  Button,
  LoadingSpinner,
  Text,
  Modal,
  Toast,
} from '@/components/common';

// Import components
import { Sidebar, AuthorTable, AuthorForm, ConfirmModal } from '@/components';

// Import header for home page
import Header from './Header';

// Import layouts
import { Footer } from '@/layouts';

// Import types
import { ButtonVariant, TextSize, Author, Notification } from '@/types';

// Import services
import {
  getAllAuthors,
  addNewAuthor,
  editAuthorById,
  deleteAuthorById,
} from '@/services';

// Import Zustand store
import { useAuthorStore } from '@/stores';

// Import hooks
import { useDebounce, useToast } from '@/hooks';

// Import utils
import { profileAuthor } from '@/utils';

// Import constants
import { MESSAGE_SUCCESS, MESSAGE_ERROR } from '@/constants';

const Home = () => {
  // Zustand store for authors
  const {
    authors,
    filteredAuthors,
    setAuthors,
    searchQuery,
    setSearchQuery,
    filterAuthors,
    setFiltering,
  } = useAuthorStore();

  // State to control whether the modal is open
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // State to track whether the modal is in 'update' mode
  const [isUpdate, setIsUpdate] = useState<boolean>(false);

  // State for the selected author (for add or edit operations)
  const [selectedAuthor, setSelectedAuthor] = useState<Author>(profileAuthor);

  // useDebounce
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  // State to control whether the confirm modal is open
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false);

  // Destructure values from custom hook for toast management
  const { toastMessage, toastType, isToastOpen, handleShowToast, handleCloseToast } =
    useToast();

  // Use mutation for fetching authors
  const { mutate: fetchAuthors, isPending: isFetching } = useMutation({
    mutationFn: getAllAuthors,
    onSuccess: (data) => {
      setAuthors(data);
    },
  });

  // Use mutation for adding a new author
  const { mutate: addAuthor, isPending: isAdding } = useMutation({
    mutationFn: addNewAuthor,
    onSuccess: (newAuthor) => {
      setAuthors([...authors, newAuthor]);

      // Show success toast
      handleShowToast(MESSAGE_SUCCESS.ADD_AUTHOR, Notification.Success);
    },
  });

  // Use mutation for editing an author
  const { mutate: editAuthor, isPending: isEditing } = useMutation<
    Author,
    Error,
    { id: string; author: Author }
  >({
    mutationFn: ({ id, author }) => editAuthorById(id, author),
    onSuccess: (updatedAuthor) => {
      // Update authors in the state
      setAuthors(
        authors.map((author) =>
          author.id === updatedAuthor.id ? updatedAuthor : author,
        ),
      );

      // Show success toast
      handleShowToast(MESSAGE_SUCCESS.EDIT_AUTHOR, Notification.Success);
    },
  });

  // Use mutation for delete an author
  const { mutate: deleteAuthor, isPending: isDeleting } = useMutation({
    mutationFn: deleteAuthorById,
    onSuccess: (_, id) => {
      setAuthors(authors.filter((author) => author.id !== id));

      // Show success toast
      handleShowToast(MESSAGE_SUCCESS.DELETE_AUTHOR, Notification.Success);
    },
    onError: () => {
      // Show error toast or perform other error handling actions
      handleShowToast(MESSAGE_ERROR.DELETE_AUTHOR, Notification.Failed);
    },
  });

  // Trigger the mutation to fetch authors
  useEffect(() => {
    fetchAuthors();
  }, [fetchAuthors]);

  // Handle search query changes
  useEffect(() => {
    setFiltering(!!debouncedSearchQuery);
    debouncedSearchQuery ? filterAuthors(debouncedSearchQuery) : setAuthors(authors);
  }, [debouncedSearchQuery, filterAuthors, setFiltering, setAuthors, authors]);

  // Handle click to show add modal
  const handleShowAddModal = () => {
    setIsUpdate(false);
    setSelectedAuthor(profileAuthor);
    setIsModalOpen(true);
  };

  // Handle form submission for adding or editing an author
  const handleSubmitAuthor = () => {
    setIsModalOpen(false);

    isUpdate
      ? editAuthor({ id: selectedAuthor.id, author: selectedAuthor })
      : addAuthor(selectedAuthor);
  };

  // Function to show the 'Edit' modal for a specific author
  const handleShowEditModal = (author: Author) => {
    setIsUpdate(true);
    setSelectedAuthor(author);
    setIsModalOpen(true);
  };

  // Function to show the confirm modal for a specific author ID
  const handleShowConfirmModal = (authorId: string) => {
    setSelectedAuthor({ ...selectedAuthor, id: authorId });
    setIsConfirmModalOpen(true);
  };

  // Handle close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsConfirmModalOpen(false);
  };

  // Handle search change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchQuery(e.target.value);

  // Handle delete author
  const handleDeleteAuthor = () => {
    setIsConfirmModalOpen(false);

    deleteAuthor(selectedAuthor.id);
  };

  // Determine if the operation is loading by checking if any of the async actions are in progress
  const isLoading = isFetching || isAdding || isEditing || isDeleting;

  return (
    <Box className="bg-tertiary">
      <Flex className="min-h-screen pt-[30px] pr-[22px] pb-[23px]">
        <Box>
          {/* Render the sidebar with logo */}
          <Flex
            justify="center"
            align="center"
            className="mb-[22px] gap-12 gradient-border pb-7"
          >
            <Logo href="/home" />
          </Flex>
          <Sidebar />
        </Box>
        <Flex direction="column" justify="between" className="w-full">
          {/* Render the header */}
          <Header currentPage="Tables" />
          <Box className="bg-white min-h-[88vh] mb-7 rounded-[15px] px-[21px] py-7 relative">
            <Box className="flex justify-between items-center mb-7">
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
            </Box>

            {/* Render AuthorTable */}
            <AuthorTable
              authors={filteredAuthors}
              onEditAuthor={handleShowEditModal}
              onDeleteAuthor={handleShowConfirmModal}
            />
            {isLoading && (
              <Flex justify="center" align="center" className="py-10">
                <LoadingSpinner />
              </Flex>
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

            {/* Render the toast notification */}
            <Toast
              type={toastType}
              message={toastMessage}
              isOpen={isToastOpen}
              onClose={handleCloseToast}
            />
          </Box>
          {/* Render the footer */}
          <Footer />

          {/* Modal for adding a new author */}
          {isModalOpen && (
            <Modal className="w-2/4 px-9 py-9" onClose={handleCloseModal}>
              <AuthorForm
                isUpdate={isUpdate}
                selectedAuthor={selectedAuthor}
                closeModal={handleCloseModal}
                onChange={setSelectedAuthor}
                onSubmit={handleSubmitAuthor}
              />
            </Modal>
          )}

          {/* Show the modal confirm when delete Author*/}
          {isConfirmModalOpen && (
            <Modal className="w-[580px] p-5" onClose={handleCloseModal}>
              <ConfirmModal onSubmit={handleDeleteAuthor} onClose={handleCloseModal} />
            </Modal>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
