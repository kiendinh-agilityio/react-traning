// Import components
import { Button } from '@/components/common/';

interface ConfirmModalProps {
  onSubmit: () => void;
  onClose: () => void;
}

const ConfirmModal = ({ onSubmit, onClose }: ConfirmModalProps) => (
  <div className="flex flex-col gap-10 justify-center items-center p-6">
    <h2 className="font-helveticaBold text-3xl font-bold text-center text-[#a0aec0]">
      Are you sure you want to delete this author?
    </h2>
    <div className="flex justify-center items-center gap-6">
      <Button variant="primary" label="Confirm" onClick={onSubmit} />
      <Button variant="secondary" label="Cancel" onClick={onClose} />
    </div>
  </div>
);

export default ConfirmModal;
