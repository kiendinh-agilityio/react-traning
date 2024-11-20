import { ChangeEvent, useRef } from 'react';

interface InputProps {
  name: string;
  type: 'email' | 'password';
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const Input = ({
  value,
  defaultValue,
  name,
  type,
  placeholder,
  onChange,
  className,
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange?.(e.target.value);

  return (
    <input
      type={type}
      value={value}
      ref={inputRef}
      defaultValue={defaultValue}
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
      className={`px-lg py-md rounded-base bg-secondary text-base border-[1.5px] border-input focus:outline-none text-primary placeholder:text-primary placeholder:font-regular placeholder:text-base ${className && className}`}
    />
  );
};

export default Input;
