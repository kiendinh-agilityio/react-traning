import { useEffect, useState, useRef } from 'react';

// Import radix ui
import { Box, Flex } from '@radix-ui/themes';

// Import for common component icon
import { CloseIcon, FailedIcon, SuccessIcon } from '@/components/common/Icons';

// Import common components
import { Button } from '@/components/common';

// Import types
import { ButtonVariant } from '@/types';

// Import styles animation for toast
import './toast.css';

interface ToastProps {
  type: string;
  message: string;
  isOpen: boolean;
  onClose?: () => void;
}

const Toast = ({ type, message, isOpen: initialIsOpen, onClose }: ToastProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialIsOpen);
  const countTime = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Update isOpen state when props initialIsOpen changes
    setIsOpen(initialIsOpen);
  }, [initialIsOpen]);

  useEffect(() => {
    // If isOpen is true, set timeout to automatically close Toast after 5 seconds
    if (isOpen) {
      countTime.current = setTimeout(() => {
        setIsOpen(false);

        // Call callback when Toast closes
        onClose && onClose();
      }, 3000);
    }

    // Clean up timeouts when component unmounts or when isOpen changes
    return () => {
      if (countTime.current) {
        clearTimeout(countTime.current);
      }
    };
  }, [isOpen, onClose]);

  const handleCloseToast = () => {
    // Cancel the timeout and close the Toast as soon as the user clicks the close button
    countTime.current && clearTimeout(countTime.current);

    setIsOpen(false);

    // Call callback when user closes Toast
    onClose && onClose();
  };

  return (
    <>
      {isOpen && (
        <Flex
          align="center"
          justify="between"
          className={`toast ${type} w-[400px] p-4 bg-white rounded shadow-md m-auto absolute left-0 right-0 bottom-8`}
        >
          <Flex align="center" className="gap-4">
            {type === 'success' ? <SuccessIcon /> : <FailedIcon />}
            <Box as="span" className="font-regular text-base">
              {message}
            </Box>
          </Flex>
          <Button variant={ButtonVariant.Transparent} onClick={handleCloseToast}>
            <CloseIcon />
          </Button>
        </Flex>
      )}
    </>
  );
};

export default Toast;
