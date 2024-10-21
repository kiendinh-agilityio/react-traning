import { useState } from 'react';

// Custom hook for managing toast notifications
export const useToast = () => {
  // State for toast message content
  const [toastMessage, setToastMessage] = useState<string>('');

  // State for toast type (success or failure)
  const [toastType, setToastType] = useState<'success' | 'failed'>('success');

  // State to control whether the toast is visible
  const [isToastOpen, setIsToastOpen] = useState<boolean>(false);

  // Function to display the toast with a message and type
  const handleShowToast = (message: string, type: 'success' | 'failed') => {
    setToastMessage(message);
    setToastType(type);
    setIsToastOpen(true);
  };

  // Function to close the toast
  const handleCloseToast = () => setIsToastOpen(false);

  return { toastMessage, toastType, isToastOpen, handleShowToast, handleCloseToast };
};
