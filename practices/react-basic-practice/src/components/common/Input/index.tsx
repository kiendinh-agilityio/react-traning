// Import necessary components
import { ReactNode } from 'react';

// Create input props
interface InputProps {
  value?: string;
  name: string;
  type: string;
  placeholder: string;
  leftIcon?: ReactNode;
}

const Input = ({ value, name, placeholder, type, leftIcon }: InputProps) => {
  const className = `flex justify-center items-center px-5 py-[15px] border border-input gap-3 w-full rounded-[15px]`;

  return (
    <div className={className}>
      {leftIcon && <div>{leftIcon}</div>}
      <input
        type={type}
        value={value}
        name={name}
        className="w-full focus:outline-none text-dark"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
