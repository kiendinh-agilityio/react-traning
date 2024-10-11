import { useEffect, useState } from 'react';

// Import icons
import { SearchIcon } from '@/components/common/Icons';

// Import common components
import {
  Logo,
  Heading,
  Input,
  Button,
  Sidebar,
  LoadingSpinner,
  Modal,
  Toast,
} from '@/components/common';

// Import components
import { AuthorsTable, AuthorsForm, ConfirmModal } from '@/components';

// Import services
import { getAllAuthors, addNewAuthor, editAuthor, deleteAuthor } from '@/services';

// Import layouts
import { Header, Footer } from '@/layouts';

// Import types
import { Author } from '@/types';

// Import constants
import { MESSAGE_SUCCESS, AUTHOR_MESSAGES } from '@/constants';

// Import utils
import { profileAuthor } from '@/utils';

// Import custom hooks
import { useDebounce } from '@/hooks';

const Home = () => {
  // State to store the list of authors
  const [authors, setAuthors] = useState<Author[]>([]);

  // State to handle loading spinner visibility
  const [loading, setLoading] = useState(false);

  // State to manage the visibility of the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State to differentiate between adding a new author or updating an existing one
  const [isUpdate, setIsUpdate] = useState(false);

  // State to store the selected author data for editing or adding
  const [selectedAuthor, setSelectedAuthor] = useState<Author>(profileAuthor);

  // State to manage the toast notification message
  const [toastMessage, setToastMessage] = useState('');

  // State to manage the type of toast ('success' or 'failed')
  const [toastType, setToastType] = useState<'success' | 'failed'>('success');

  // State to handle the visibility of the toast notification
  const [isToastOpen, setIsToastOpen] = useState(false);

  // Declare a state variable 'filteredAuthors' to store the list of authors
  const [filteredAuthors, setFilteredAuthors] = useState<Author[]>([]);

  // State variable 'searchTerm' to store the current search input
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Debounced value of the search term
  const debouncedSearchTerm = useDebounce(searchTerm);

  // State for modal confirm
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  // State for author ID to delete
  const [authorIdToDelete, setAuthorToDelete] = useState<string | null>(null);

  /**
   * useEffect Hook
   * Fetches the list of authors when the component is mounted.
   * Updates the authors state and manages the loading spinner.
   */
  useEffect(() => {
    const fetchAuthors = async () => {
      // Show loading spinner while fetching authors
      setLoading(true);

      // Fetch authors from the API
      const authorsData = await getAllAuthors();

      // Set authors state with fetched data
      setAuthors(authorsData);

      // Set filtered authors initially
      setFilteredAuthors(authorsData);

      // Hide loading spinner once data is fetched
      setLoading(false);
    };
    fetchAuthors();
  }, []);

  /**
   * useEffect hook that triggers whenever 'debouncedSearchTerm' or 'authors' changes.
   * Filter authors based on the debounced search term.
   */
  useEffect(() => {
    if (debouncedSearchTerm) {
      const filtered = authors.filter(
        (author) =>
          author.name.toLowerCase().includes(debouncedSearchTerm) ||
          author.email.includes(debouncedSearchTerm),
      );

      // Update filteredAuthors with the filtered list of authors
      setFilteredAuthors(filtered);
    } else {
      // If no search term, show all authors
      setFilteredAuthors(authors);
    }
  }, [debouncedSearchTerm, authors]);

  /**
   * handleAddNewAuthor Function
   * Prepares the state for adding a new author and opens the modal.
   */
  const handleAddNewAuthor = () => {
    // Set to false because we are adding a new author
    setIsUpdate(false);

    // Clear selectedAuthor state
    setSelectedAuthor(profileAuthor);

    // Open the modal
    setIsModalOpen(true);
  };

  /**
   * handleEditAuthor Function
   * Prepares the state for editing an existing author and opens the modal.
   * @param {Author} author - The author object to be edited.
   */
  const handleEditAuthor = (author: Author) => {
    // Set to true because we are editing an author
    setIsUpdate(true);

    // Set the selectedAuthor state with the author to be edited
    setSelectedAuthor(author);

    // Open the modal
    setIsModalOpen(true);
  };

  /**
   * handleSubmit Function
   * Submits the form to add or edit an author, shows the toast notification,
   * and updates the authors list by fetching the latest data.
   */
  const handleSubmit = async () => {
    // Close the modal after submission
    setIsModalOpen(false);

    // Show Loading Spinner
    setLoading(true);

    // Function to update authors in state
    const updateAuthors = (prevAuthors: Author[]): Author[] =>
      prevAuthors.map((author: Author) =>
        author.id === selectedAuthor.id ? selectedAuthor : author,
      );

    if (isUpdate) {
      // Edit author if we are in update mode
      await editAuthor(selectedAuthor.id, selectedAuthor);

      // Update the authors list in state without making an API call
      setAuthors(updateAuthors);
      setFilteredAuthors(updateAuthors);

      // Set success message for editing
      setToastMessage(MESSAGE_SUCCESS.EDIT_AUTHOR);
    } else {
      // Add new author
      const newAuthor = await addNewAuthor(selectedAuthor);

      // Prepend the newly added author to the authors array
      setAuthors((prevAuthors) => [newAuthor, ...prevAuthors]);

      // Update filtered authors as well
      setFilteredAuthors((prevAuthors) => [newAuthor, ...prevAuthors]);

      // Set success message for adding
      setToastMessage(MESSAGE_SUCCESS.ADD_AUTHOR);
    }

    // Set toast type to success
    setToastType('success');

    // Hide the loading spinner after the process is complete
    setLoading(false);

    // Show the toast notification
    setIsToastOpen(true);
  };

  /**
   * closeModal Function
   * Closes the modal without making any changes.
   */
  const closeModal = () => setIsModalOpen(false);

  /**
   * closeToast Function
   * Closes the toast notification.
   */
  const closeToast = () => setIsToastOpen(false);

  /**
   * Handle function delete author
   * This function is triggered when the user confirms the deletion of an author.
   */
  const handleDeleteAuthor = async () => {
    if (authorIdToDelete) {
      // Close modal confirm
      setIsConfirmModalOpen(false);

      // Show Loading Spinner
      setLoading(true);

      // Delete Author
      await deleteAuthor(authorIdToDelete);

      // Show Toast
      setToastMessage(MESSAGE_SUCCESS.DELETE_AUTHOR);
      setToastType('success');

      // Fetch the updated list of authors to reflect the deletion in the UI
      const updatedAuthors = await getAllAuthors();
      setAuthors(updatedAuthors);
      setFilteredAuthors(updatedAuthors);

      // Hide the loading spinner after the process is complete
      setLoading(false);

      // Open the toast notification to inform the user about the success
      setIsToastOpen(true);
    }
  };

  /**
   *Function show modal confirm
   */
  const openConfirmModal = (id: string) => {
    setAuthorToDelete(id);
    setIsConfirmModalOpen(true);
  };

  /**
   *  Function cancel modal confirm
   */
  const handleCancelConfirmModal = () => setIsConfirmModalOpen(false);

  /**
   *  Function for handling search term change
   */
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="min-h-screen flex pt-[30px] pr-[22px] pb-[23px]">
        <div>
          {/* Render the sidebar with logo */}
          <Logo />
          <Sidebar />
        </div>
        <div className="flex flex-col justify-between w-full">
          {/* Render the header */}
          <Header currentPage="Tables" />
          <div className="bg-white min-h-[88vh] mb-7 rounded-[15px] px-[21px] py-7 relative">
            <div className="flex justify-between items-center mb-7">
              {/* Render the heading and search bar */}
              <Heading text="Authors Table" />
              <div className="flex gap-5">
                <div className="w-96">
                  <Input
                    name="authorName"
                    type="search"
                    placeholder="Type here..."
                    leftIcon={<SearchIcon className="cursor-pointer" />}
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </div>
                <Button variant="secondary" label="Add New Author" onClick={handleAddNewAuthor} />
              </div>
            </div>
            {/* Table wrapper with loading spinner overlay */}
            <div className="relative">
              {/* Keep the table visible while loading */}
              <AuthorsTable
                authors={filteredAuthors}
                onEditAuthor={handleEditAuthor}
                onDeleteAuthor={openConfirmModal}
              />
              {/* Display loading spinner on top of the table */}
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/50 z-10">
                  <LoadingSpinner />
                </div>
              )}
            </div>
            {/* Show appropriate message based on search results or empty table */}
            {!loading && (
              <>
                {authors.length === 0 ? (
                  // Display message when no authors exist at all
                  <div className="flex flex-col justify-center font-helveticaBold font-bold text-center text-[#a0aec0] text-2xl py-14 h-96">
                    <p>{AUTHOR_MESSAGES.NO_AUTHORS}</p>
                    <p className="font-helveticaRegular font-regular text-xl">
                      {AUTHOR_MESSAGES.AUTHOR_ADDITION_INFO}
                    </p>
                  </div>
                ) : (
                  // Display message when search yields no results
                  filteredAuthors.length === 0 && (
                    <p className="font-helveticaBold font-bold text-center text-[#a0aec0] text-2xl py-14">
                      {AUTHOR_MESSAGES.NO_SEARCH_RESULTS}
                    </p>
                  )
                )}
              </>
            )}
          </div>
          {/* Render the toast notification */}
          <Toast
            type={toastType}
            message={toastMessage}
            isOpen={isToastOpen}
            onClose={closeToast}
          />
          {/* Render the footer */}
          <Footer />
        </div>
      </div>
      {/* Show the modal if it is open */}
      {isModalOpen && (
        <Modal className="w-2/4 px-9 py-9" onClose={closeModal}>
          <AuthorsForm
            isUpdate={isUpdate}
            selectedAuthor={selectedAuthor}
            closeModal={closeModal}
            onChange={setSelectedAuthor}
            onSubmit={handleSubmit}
          />
        </Modal>
      )}
      {/* Show the modal confirm when delete Author*/}
      {isConfirmModalOpen && (
        <Modal className="w-[580px] p-5" onClose={handleCancelConfirmModal}>
          <ConfirmModal onSubmit={handleDeleteAuthor} onClose={handleCancelConfirmModal} />
        </Modal>
      )}
    </>
  );
};

export default Home;
