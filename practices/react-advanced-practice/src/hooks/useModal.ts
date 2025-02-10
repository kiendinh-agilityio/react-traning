import { useState } from 'react';

// Import types
import { Author } from '@/types';

// Import utils
import { profileAuthor } from '@/utils';

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [selectedAuthor, setSelectedAuthor] = useState<Author>(profileAuthor);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false);

  // Handle click to show add modal
  const handleShowAddModal = () => {
    setIsUpdate(false);
    setSelectedAuthor(profileAuthor);
    setIsModalOpen(true);
  };

  // Handle click to show edit modal
  const handleShowEditModal = (author: Author) => {
    setIsUpdate(true);
    setSelectedAuthor(author);
    setIsModalOpen(true);
  };

  // Handle click to show confirm modal
  const handleShowConfirmModal = (authorId: string) => {
    setSelectedAuthor((prev) => ({ ...prev, id: authorId }));
    setIsConfirmModalOpen(true);
  };

  // Handle click close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsConfirmModalOpen(false);
  };

  return {
    isModalOpen,
    setIsModalOpen,
    isUpdate,
    isConfirmModalOpen,
    setIsConfirmModalOpen,
    selectedAuthor,
    setSelectedAuthor,
    handleShowAddModal,
    handleShowEditModal,
    handleShowConfirmModal,
    handleCloseModal,
  };
};
