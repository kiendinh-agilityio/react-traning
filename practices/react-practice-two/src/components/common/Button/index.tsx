import { Variant } from '@/types';

interface ButtonProps {
  variant?: Variant;
  isDisabled?: boolean;
  onClick: () => void;
  value?: string;
  icon?: React.ReactNode;
  className?: string;
}

const Button = ({
  variant = Variant.Primary,
  isDisabled = false,
  onClick,
  value,
  icon,
  className,
}: ButtonProps) => {
  const baseClass = ` 
    px-md py-base font-regular text-xs rounded ${isDisabled ? 'cursor-not-allowed' : ''} ${variant}
  `;

  return (
    <button className={`${baseClass} ${className}`} onClick={onClick} disabled={isDisabled}>
      {icon && icon}
      {value && value}
    </button>
  );
};

export default Button;
