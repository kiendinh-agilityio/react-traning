// import common components
import { Button } from '@/components/common';

// import types
import { ButtonVariant } from '@/types';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) =>
  isOpen && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-light p-9 rounded-md shadow-md relative w-[600px]">
        <Button
          variant={ButtonVariant.Transparent}
          onClick={onClose}
          className="absolute top-2 right-4 text-md p-4"
        >
          X
        </Button>
        {children}
      </div>
    </div>
  );

export default Modal;
