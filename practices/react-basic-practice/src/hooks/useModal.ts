import { useState } from 'react';

// import types
import { Author } from '@/types';

// import utils
import { profileAuthor } from '@/utils';

// Custom hook for managing modal dialogs
export const useModal = () => {
  // State to control whether the modal is open
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // State to control whether the confirm modal is open
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false);

  // State for the currently selected author
  const [selectedAuthor, setSelectedAuthor] = useState<Author>(profileAuthor);

  // State to track whether the modal is in 'update' mode
  const [isUpdate, setIsUpdate] = useState<boolean>(false);

  // Function to show the 'Add' modal and reset selected author
  const handleShowAddModal = () => {
    setIsUpdate(false);
    setSelectedAuthor(profileAuthor);
    setIsModalOpen(true);
  };

  // Function to show the 'Edit' modal for a specific author
  const handleShowEditModal = (author: Author) => {
    setIsUpdate(true);
    setSelectedAuthor(author);
    setIsModalOpen(true);
  };

  // Function to close both the modal and confirm modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsConfirmModalOpen(false);
  };

  // Function to show the confirm modal for a specific author ID
  const handleShowConfirmModal = (authorId: string) => {
    setSelectedAuthor((prev) => ({ ...prev, id: authorId }));
    setIsConfirmModalOpen(true);
  };

  return {
    isModalOpen,
    isConfirmModalOpen,
    selectedAuthor,
    isUpdate,
    handleShowAddModal,
    handleShowEditModal,
    handleCloseModal,
    handleShowConfirmModal,
    setSelectedAuthor,
  };
};
