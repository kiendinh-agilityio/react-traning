import { Button as ButtonBase } from '@radix-ui/themes';

// Import types
import { ButtonVariant } from '@/types';

interface ButtonProps {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  isDisabled?: boolean;
  className?: string;
  onClick: () => void;
}

const Button = ({
  children,
  variant = ButtonVariant.Primary,
  isDisabled,
  className,
  onClick,
}: ButtonProps) => {
  const baseClass = ` 
    px-[22px] py-2.5 font-bold rounded-xl cursor-pointer ${isDisabled ? 'primary opacity-50 cursor-not-allowed' : variant}
  `;

  return (
    <ButtonBase
      className={`${baseClass} ${className}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </ButtonBase>
  );
};

export default Button;
