// Import types
import { ButtonVariant } from '@/types';

interface ButtonProps {
  variant?: ButtonVariant;
  isDisabled?: boolean;
  onClick: () => void;
  label?: string;
  icon?: React.ReactNode;
  className?: string;
}

const Button = ({
  variant = ButtonVariant.Primary,
  isDisabled = false,
  onClick,
  label,
  icon,
  className = '',
}: ButtonProps) => {
  const baseClass = ` 
    px-md py-base font-regular text-xs rounded ${isDisabled ? 'cursor-not-allowed' : ''} ${variant}
  `;

  return (
    <button
      className={`${baseClass} ${className && className}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {icon && icon}
      {label && label}
    </button>
  );
};

export default Button;
