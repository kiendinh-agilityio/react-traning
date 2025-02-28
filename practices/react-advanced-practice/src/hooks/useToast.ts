import { useState } from 'react';

// Import types
import { Notification } from '@/types';

export const useToast = () => {
  const [toastMessage, setToastMessage] = useState<string>('');
  const [toastType, setToastType] = useState<Notification>(Notification.Success);
  const [isToastOpen, setIsToastOpen] = useState<boolean>(false);

  const handleShowToast = (message: string, type: Notification) => {
    setToastMessage(message);
    setToastType(type);
    setIsToastOpen(true);
  };

  const handleCloseToast = () => setIsToastOpen(false);

  return { toastMessage, toastType, isToastOpen, handleShowToast, handleCloseToast };
};
