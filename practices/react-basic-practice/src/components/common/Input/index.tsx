import { ReactNode, ChangeEvent } from 'react';

interface InputProps {
  value?: string;
  name: string;
  type: string;
  placeholder?: string;
  leftIcon?: ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
}

const Input = ({
  value,
  name,
  placeholder,
  type,
  leftIcon,
  onChange,
  onBlur,
  errorMessage,
}: InputProps) => {
  const className = `flex justify-center items-center px-5 py-[15px] border gap-3 w-full rounded-[15px] ${errorMessage ? 'border-danger' : 'border-input'}`;

  return (
    <div className={className}>
      {leftIcon && <div>{leftIcon}</div>}
      <input
        type={type}
        value={value}
        name={name}
        className="w-full focus:outline-none text-dark"
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
