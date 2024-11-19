import { ChangeEvent, useRef } from 'react';

interface InputProps {
  name: string;
  type: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

const Input = ({ value, defaultValue, name, type, placeholder, onChange }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange?.(e.target.value);

  return (
    <input
      type={type}
      value={value && value}
      ref={value && inputRef}
      defaultValue={value && defaultValue}
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
      className="w-[400px] px-lg py-md rounded-base bg-secondary text-base border-[1.5px] border-input focus:outline-none text-primary placeholder:text-primary placeholder:font-regular placeholder:text-base"
    />
  );
};

export default Input;
