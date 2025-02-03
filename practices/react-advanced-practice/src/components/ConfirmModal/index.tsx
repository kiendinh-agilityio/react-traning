// Import radix ui
import { Flex } from '@radix-ui/themes';

// Import components
import { Button, Heading } from '@/components/common/';

// Import common icons
import { TrashIcon, CloseIcon } from '@/components/common/Icons';

// Import types
import { ButtonVariant, TextSize } from '@/types';

interface ConfirmModalProps {
  onSubmit: () => void;
  onClose: () => void;
}

const ConfirmModal = ({ onSubmit, onClose }: ConfirmModalProps) => (
  <Flex
    direction="column"
    justify="center"
    align="center"
    className="gap-8 py-4 relative"
  >
    <TrashIcon />
    <Button
      variant={ButtonVariant.Transparent}
      className="absolute right-0 top-0 hover:tertiary hover:rounded-full justify-center w-[20px] h-[20px]"
      onClick={onClose}
    >
      {<CloseIcon />}
    </Button>
    <Heading
      as="h2"
      size={TextSize.ExtraLarge}
      text="Are you sure you want to delete this author?"
      className="font-bold text-center text-dark"
    />
    <Flex justify="center" align="center" className="gap-6">
      <Button variant={ButtonVariant.Danger} onClick={onSubmit}>
        Yes, I'm sure
      </Button>
      <Button variant={ButtonVariant.Tertiary} onClick={onClose}>
        No, Cancel
      </Button>
    </Flex>
  </Flex>
);

export default ConfirmModal;
