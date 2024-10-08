// Import components
import { Button } from '@/components/common/';
import { TrashIcon, CloseIcon } from '@/components/common/Icons';

interface ConfirmModalProps {
  onSubmit: () => void;
  onClose: () => void;
}

const ConfirmModal = ({ onSubmit, onClose }: ConfirmModalProps) => (
  <div className="flex flex-col gap-8 justify-center items-center py-4 relative">
    <TrashIcon />
    <button className="absolute right-0 top-0" onClick={onClose}>
      <CloseIcon />
    </button>
    <h2 className="font-helveticaRegular text-2xl font-regular text-center text-dark">
      Are you sure you want to delete this author?
    </h2>
    <div className="flex justify-center items-center gap-6">
      <Button variant="danger" label="Yes, I'm sure" onClick={onSubmit} />
      <Button variant="tertiary" label="No, Cancel" onClick={onClose} />
    </div>
  </div>
);

export default ConfirmModal;
