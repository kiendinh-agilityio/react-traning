import { useEffect, useState } from 'react';

// Import for common component icon
import { CloseIcon, FailedIcon, SuccessIcon } from '@/components/common/Icons';

// Import styles animation for toast
import './Toast.css';

interface ToastProps {
  type: string;
  message: string;
}

const Toast = ({ type, message }: ToastProps) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsOpen(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  const handleCloseToast = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div
          className={`toast ${type} flex items-center justify-between w-[400px] p-4 bg-white rounded shadow-md m-auto`}
        >
          <div className="flex items-center gap-4">
            {type === 'success' ? <SuccessIcon /> : <FailedIcon />}
            <span className="font-helveticaRegular font-regular text-base">{message}</span>
          </div>
          <button className="bg-transparent" onClick={handleCloseToast}>
            <CloseIcon />
          </button>
        </div>
      )}
    </>
  );
};

export default Toast;
