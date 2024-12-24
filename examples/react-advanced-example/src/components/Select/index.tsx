import React, { forwardRef } from 'react';

interface SelectProps {
  options: { value: string; label: string }[];
  value?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, value, defaultValue, onChange }, ref) => {
    return (
      <select
        ref={ref}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
);

export default Select;
