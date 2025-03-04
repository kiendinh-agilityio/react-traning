import { lazy, Suspense } from 'react';

// Import useMutation
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// Import components from Radix UI
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
  Toast,
} from '@/components/common';

// Import components
import { Sidebar, AuthorTable } from '@/components';

// Import header for home page
import Header from './Header';

// Import layouts
import { Footer } from '@/layouts';

// Import types
import {
  ButtonVariant,
  TextSize,
  Author,
  Notification,
  QueryKey,
  ThemeMode,
} from '@/types';

// Import services
import {
  getAllAuthors,
  addNewAuthor,
  editAuthorById,
  deleteAuthorById,
} from '@/services';

// Lazy load components
const Modal = lazy(() => import('@/components/common/Modal'));
const AuthorForm = lazy(() => import('@/components/AuthorForm'));
const ConfirmModal = lazy(() => import('@/components/ConfirmModal'));

// Import Zustand store
import { useThemeStore } from '@/stores';

// Import hooks
import { useToast, useSearch, useModal } from '@/hooks';

// Import constants
import { MESSAGE_SUCCESS, MESSAGE_ERROR } from '@/constants';

const Home = () => {
  const queryClient = useQueryClient();

  const { theme } = useThemeStore();

  const { toastMessage, toastType, isToastOpen, handleShowToast, handleCloseToast } =
    useToast();

  const {
    isUpdate,
    isModalOpen,
    setIsModalOpen,
    isConfirmModalOpen,
    setIsConfirmModalOpen,
    selectedAuthor,
    handleShowAddModal,
    handleShowEditModal,
    handleCloseModal,
    handleShowConfirmModal,
    setSelectedAuthor,
  } = useModal();

  // Query to fetch all authors from the API
  const { data: authors = [], isLoading } = useQuery<Author[], Error>({
    queryKey: [QueryKey.Authors],
    queryFn: getAllAuthors,
  });

  const { searchTerm, setSearchTerm, filteredAuthors, debouncedSearchQuery } =
    useSearch(authors);

  // Use mutation for adding a new author
  const { mutate: addAuthor, isPending: isAdding } = useMutation({
    mutationFn: addNewAuthor,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [QueryKey.Authors] });

      handleShowToast(MESSAGE_SUCCESS.ADD_AUTHOR, Notification.Success);
    },
    onError: () => {
      handleShowToast(MESSAGE_ERROR.ADD_AUTHOR, Notification.Failed);
    },
  });

  // Use mutation for editing an author
  const { mutate: editAuthor, isPending: isEditing } = useMutation<
    Author,
    Error,
    { id: string; author: Author }
  >({
    mutationFn: ({ id, author }) => editAuthorById(id, author),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [QueryKey.Authors] });

      handleShowToast(MESSAGE_SUCCESS.EDIT_AUTHOR, Notification.Success);
    },
    onError: () => {
      handleShowToast(MESSAGE_ERROR.EDIT_AUTHOR, Notification.Failed);
    },
  });

  // Use mutation for delete an author
  const { mutate: deleteAuthor, isPending: isDeleting } = useMutation({
    mutationFn: deleteAuthorById,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [QueryKey.Authors] });

      handleShowToast(MESSAGE_SUCCESS.DELETE_AUTHOR, Notification.Success);
    },
    onError: () => {
      handleShowToast(MESSAGE_ERROR.DELETE_AUTHOR, Notification.Failed);
    },
  });

  const handleSubmitAuthor = () => {
    setIsModalOpen(false);

    isUpdate
      ? editAuthor({ id: selectedAuthor.id, author: selectedAuthor })
      : addAuthor(selectedAuthor);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  const handleDeleteAuthor = () => {
    setIsConfirmModalOpen(false);

    deleteAuthor(selectedAuthor.id);
  };

  // Check if any mutation is currently loading
  const isLoadingMutation = isAdding || isEditing || isDeleting;

  return (
    <Box className="bg-tertiary dark:bg-dark">
      <Flex className="min-h-screen pt-[30px] pr-[22px] pb-[23px]">
        <Box>
          <Flex
            justify="center"
            align="center"
            className="mb-[22px] gap-12 gradient-border pb-7"
          >
            <Logo
              color={theme === ThemeMode.Dark ? 'secondary' : 'primary'}
              href="/home"
            />
          </Flex>
          <Sidebar />
        </Box>
        <Flex direction="column" justify="between" className="w-full">
          <Header currentPage="Tables" />
          <Box className="bg-white dark:bg-dark min-h-[88vh] mb-7 rounded-[15px] px-[21px] py-7 relative dark:border dark:border-light">
            <Box className="flex justify-between items-center mb-7">
              <Heading text="Authors Table" className="dark:text-light" />
              <Flex className="gap-5">
                <Box className="w-96 relative">
                  <Input
                    name="authorSearch"
                    type="search"
                    placeholder="Search by name or email..."
                    leftIcon={<SearchIcon className="cursor-pointer" />}
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="dark:placeholder:bg-dark dark:text-light"
                  />
                </Box>
                <Button variant={ButtonVariant.Secondary} onClick={handleShowAddModal}>
                  Add New Author
                </Button>
              </Flex>
            </Box>
            <AuthorTable
              authors={filteredAuthors}
              onEditAuthor={handleShowEditModal}
              onDeleteAuthor={handleShowConfirmModal}
            />
            {(isLoading || isLoadingMutation) && (
              <Flex justify="center" align="center" className="py-10">
                <LoadingSpinner />
              </Flex>
            )}
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
            <Toast
              type={toastType}
              message={toastMessage}
              isOpen={isToastOpen}
              onClose={handleCloseToast}
            />
          </Box>
          <Footer />
          <Suspense fallback={<LoadingSpinner />}>
            {isModalOpen && (
              <Modal className="w-[900px] w-2/4 px-9 py-9" onClose={handleCloseModal}>
                <AuthorForm
                  isUpdate={isUpdate}
                  selectedAuthor={selectedAuthor}
                  closeModal={handleCloseModal}
                  onChange={setSelectedAuthor}
                  onSubmit={handleSubmitAuthor}
                />
              </Modal>
            )}
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            {isConfirmModalOpen && (
              <Modal className="w-[580px] p-5" onClose={handleCloseModal}>
                <ConfirmModal onSubmit={handleDeleteAuthor} onClose={handleCloseModal} />
              </Modal>
            )}
          </Suspense>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
