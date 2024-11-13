import { ChangeEvent } from 'react';

interface InputProps {
  value: string;
  name: string;
  type: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

const Input = ({ value, name, placeholder, type, onChange }: InputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value);

  return (
    <input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
      className="w-[400px] px-lg py-md rounded-base bg-secondary text-base border-[1.5px] border-input focus:outline-none text-primary placeholder:text-primary placeholder:font-regular placeholder:text-base"
    />
  );
};

export default Input;
