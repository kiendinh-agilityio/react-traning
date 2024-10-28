// Import components
import { Button, Heading } from '@/components/common/';
import { TrashIcon, CloseIcon } from '@/components/common/Icons';

// Import types
import { Variant } from '@/types';

interface ConfirmModalProps {
  onSubmit: () => void;
  onClose: () => void;
}

const ConfirmModal = ({ onSubmit, onClose }: ConfirmModalProps) => (
  <div className="flex flex-col gap-8 justify-center items-center py-4 relative">
    <TrashIcon />
    <Button
      variant={Variant.Transparent}
      className="absolute right-0 top-0 hover:tertiary hover:rounded-full justify-center w-[20px] h-[20px]"
      icon={<CloseIcon />}
      onClick={onClose}
    />
    <Heading
      level={2}
      value="Are you sure you want to delete this author?"
      className="font-helveticaRegular font-regular text-center text-dark"
    />
    <div className="flex justify-center items-center gap-6">
      <Button variant={Variant.Danger} label="Yes, I'm sure" onClick={onSubmit} />
      <Button variant={Variant.Tertiary} label="No, Cancel" onClick={onClose} />
    </div>
  </div>
);

export default ConfirmModal;
