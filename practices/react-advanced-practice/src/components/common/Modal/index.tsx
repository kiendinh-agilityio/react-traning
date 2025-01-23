// Import radix ui
import { Flex } from '@radix-ui/themes';

interface ModalProps {
  children: React.ReactNode;
  className?: string;
  onClose: () => void;
}

const Modal = ({ children, className, onClose }: ModalProps) => {
  const handleOverlayClick = () => onClose();

  const handleStopPropagation = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
    event.stopPropagation();

  return (
    <Flex
      justify="center"
      align="center"
      className="bg-overlay fixed top-0 left-0 right-0 bottom-0"
      onClick={handleOverlayClick}
    >
      <Flex
        direction="column"
        className={`w-[900px] gap-8 rounded-2xl bg-white shadow z-10 py-8 px-10 ${className}`}
        onClick={handleStopPropagation}
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default Modal;
