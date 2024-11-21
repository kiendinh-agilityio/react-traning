// Import types
import { ButtonVariant } from '@/types';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  isDisabled?: boolean;
  className?: string;
  onClick: () => void;
}

const Button = ({
  children,
  variant = ButtonVariant.Primary,
  isDisabled = false,
  onClick,
  className = '',
}: ButtonProps) => {
  const baseClass = ` 
    px-md py-base font-regular rounded ${isDisabled ? 'cursor-not-allowed' : ''} ${variant}
  `;

  return (
    <button
      className={`${baseClass} ${className && className}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
