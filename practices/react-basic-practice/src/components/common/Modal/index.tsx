import React from 'react';

interface ModalProps {
  children: React.ReactNode;
  className?: string;
  onClose: () => void;
}

const Modal = ({ children, className, onClose }: ModalProps) => {
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    onClose();
  };

  const stopPropagation = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
    event.stopPropagation();

  return (
    <div
      className="modal bg-overlay fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center"
      onClick={handleOverlayClick}
    >
      <div
        className={`flex flex-col gap-8 rounded-2xl bg-white shadow z-10 ${className}`}
        onClick={stopPropagation}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
