import { ChangeEvent } from 'react';

interface InputProps {
  value?: string;
  name: string;
  type: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, name, placeholder, type, onChange }: InputProps) => (
  <div className="max-w-[400px] rounded-base bg-secondary text-base">
    <input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      className="px-lg py-md w-full bg-transparent w-full focus:outline-none text-primary placeholder:text-primary placeholder:font-regular placeholder:text-base"
    />
  </div>
);

export default Input;
