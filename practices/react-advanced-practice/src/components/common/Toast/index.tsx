import { useEffect, useRef } from 'react';

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
  onClose: () => void;
}

const Toast = ({ type, message, isOpen, onClose }: ToastProps) => {
  const countTime = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isOpen) {
      countTime.current = setTimeout(() => {
        onClose && onClose();
      }, 3000);
    }

    return () => {
      if (countTime.current) {
        clearTimeout(countTime.current);
      }
    };
  }, [isOpen, onClose]);

  return isOpen ? (
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
      <Button variant={ButtonVariant.Transparent} onClick={onClose}>
        <CloseIcon />
      </Button>
    </Flex>
  ) : null;
};

export default Toast;
