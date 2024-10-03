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
import { AuthorsTable, AuthorsForm } from '@/components';

// Import services
import { getAllAuthors, addNewAuthor, editAuthor } from '@/services';

// Import layouts
import { Header, Footer } from '@/layouts';

// Import types
import { Author } from '@/types';

// Import constants
import { MESSAGE_SUCCESS } from '@/constants';

const Home = () => {
  // State to store the list of authors
  const [authors, setAuthors] = useState<Author[]>([]);

  // State to handle loading spinner visibility
  const [loading, setLoading] = useState(false);

  // State to manage the visibility of the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State to differentiate between adding a new author or updating an existing one
  const [isUpdate, setIsUpdate] = useState(false);

  // State to handle the form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);

  // State to store the selected author data for editing or adding
  const [selectedAuthor, setSelectedAuthor] = useState<Author>({
    id: '',
    name: '',
    email: '',
    avatarUrl: '',
    position: '',
    roles: '',
    status: '',
    date: '',
  });

  // State to manage the toast notification message
  const [toastMessage, setToastMessage] = useState('');

  // State to manage the type of toast ('success' or 'failed')
  const [toastType, setToastType] = useState<'success' | 'failed'>('success');

  // State to handle the visibility of the toast notification
  const [isToastOpen, setIsToastOpen] = useState(false);

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

      // Hide loading spinner once data is fetched
      setLoading(false);
    };
    fetchAuthors();
  }, []);

  /**
   * handleAddNewAuthor Function
   * Prepares the state for adding a new author and opens the modal.
   */
  const handleAddNewAuthor = () => {
    // Set to false because we are adding a new author
    setIsUpdate(false);

    // Clear selectedAuthor state
    setSelectedAuthor({
      id: '',
      name: '',
      email: '',
      avatarUrl: '',
      position: '',
      roles: '',
      status: '',
      date: '',
    });

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
    // Disable form submission while processing
    setIsSubmitting(true);

    // Close the modal after submission
    setIsModalOpen(false);

    if (isUpdate) {
      // Edit author if we are in update mode
      await editAuthor(selectedAuthor.id, selectedAuthor);

      // Set success message for editing
      setToastMessage(MESSAGE_SUCCESS.EDIT_AUTHOR);
    } else {
      // Add new author
      await addNewAuthor(selectedAuthor);

      // Set success message for adding
      setToastMessage(MESSAGE_SUCCESS.ADD_AUTHOR);
    }

    // Set toast type to success
    setToastType('success');

    // Show the toast notification
    setIsToastOpen(true);

    // Fetch updated list of authors and update state
    const updatedAuthors = await getAllAuthors();
    setAuthors(updatedAuthors);

    // Re-enable form submission
    setIsSubmitting(false);
  };

  /**
   * closeModal Function
   * Closes the modal without making any changes.
   */
  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
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
          <div className="bg-white min-h-[88vh] mb-7 rounded-[15px] px-[21px] py-7">
            <div className="flex justify-between items-center mb-7">
              {/* Render the heading and search bar */}
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
                <Button variant="secondary" label="Add New Author" onClick={handleAddNewAuthor} />
              </div>
            </div>
            {/* Show loading spinner while data is being fetched or submitted */}
            {loading || isSubmitting ? (
              <LoadingSpinner />
            ) : (
              // Render the table with authors' data
              <AuthorsTable authors={authors} onEditAuthor={handleEditAuthor} />
            )}
          </div>
          {/* Render the toast notification */}
          <Toast
            type={toastType}
            message={toastMessage}
            isOpen={isToastOpen}
            onClose={() => setIsToastOpen(false)}
          />
          {/* Render the footer */}
          <Footer />
        </div>
      </div>
      {/* Show the modal if it is open */}
      {isModalOpen && (
        <Modal>
          <AuthorsForm
            isUpdate={isUpdate}
            selectedAuthor={selectedAuthor}
            closeModal={closeModal}
            onChange={setSelectedAuthor}
            onSubmit={handleSubmit}
          />
        </Modal>
      )}
    </>
  );
};

export default Home;
