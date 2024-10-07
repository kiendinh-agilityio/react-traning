interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => (
  <div className="modal bg-overlay fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
    <div className="flex flex-col w-2/4 gap-8 px-[51px] py-11 rounded-2xl bg-white shadow z-10">
      {children}
    </div>
  </div>
);

export default Modal;
