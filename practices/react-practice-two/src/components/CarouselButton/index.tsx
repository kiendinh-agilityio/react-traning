// Import types
import { CarouselButtonVariant } from '@/types';

interface CarouselButtonProps {
  icon: React.ReactNode;
  variant?: CarouselButtonVariant;
  isDisabled?: boolean;
  className?: string;
  onClick: () => void;
}

const CarouselButton = ({
  icon,
  variant = CarouselButtonVariant.Primary,
  isDisabled = false,
  onClick,
  className = '',
}: CarouselButtonProps) => {
  const baseClass = `${isDisabled ? 'cursor-not-allowed' : ''} ${variant}`;

  return (
    <button
      className={`${baseClass} ${className && className}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {icon}
    </button>
  );
};

export default CarouselButton;
