import React from 'react';

import { Variant } from '@/types';

interface ButtonProps {
  variant?: Variant;
  isDisabled?: boolean;
  onClick: () => void;
  label?: string;
  icon?: React.ReactNode;
  className?: string;
}

const Button = ({
  variant = Variant.Primary,
  isDisabled,
  onClick,
  label,
  icon,
  className,
}: ButtonProps) => {
  const baseClass = ` 
    w-40 px-[22px] py-2.5 
    font-helveticaBold font-bold rounded-xl ${isDisabled ? 'primary opacity-50 cursor-not-allowed' : variant}
  `;

  return (
    <button className={`${baseClass} ${className}`} onClick={onClick} disabled={isDisabled}>
      {icon && icon}
      {label && label}
    </button>
  );
};

export default Button;
