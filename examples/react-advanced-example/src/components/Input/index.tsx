import { ChangeEvent, forwardRef } from 'react';

import './input.css';

interface InputProps {
  name: string;
  type: 'text' | 'email' | 'number';
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { value, defaultValue, name, type = 'text', placeholder, onChange },
    ref
  ) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
      onChange?.(e.target.value);

    return (
      <input
        className='input'
        type={type}
        value={value}
        ref={ref}
        defaultValue={defaultValue}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
      />
    );
  }
);

export default Input;
