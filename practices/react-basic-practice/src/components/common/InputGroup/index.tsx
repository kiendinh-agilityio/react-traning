// Import components
import { Input } from '@/components/common';

interface InputGroupProps {
  label?: string;
  name: string;
  type: string;
  value: string;
  placeholder?: string;
  errorMessage: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const InputGroup = ({
  label,
  name,
  type,
  value,
  placeholder,
  errorMessage,
  onChange,
  onBlur,
}: InputGroupProps) => (
  <div className="flex flex-col gap-1.5">
    <label>{label}</label>
    <Input
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      errorMessage={errorMessage}
    />
    {errorMessage && <p className="text-danger">{errorMessage}</p>}
  </div>
);

export default InputGroup;
