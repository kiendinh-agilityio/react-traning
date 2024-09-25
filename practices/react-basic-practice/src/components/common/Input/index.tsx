// Import components
import { SearchIcon } from '@/components/common/Icons';

// Create input props
interface InputProps {
  value?: string;
  name: string;
  type: string;
  placeholder: string;
  hasIcon?: boolean;
}

const Input = ({ value, name, placeholder, type, hasIcon = false }: InputProps) => {
  const className = `flex justify-center items-center px-5 py-[15px] border border-input gap-3 w-full rounded-[15px]`;

  return (
    <div className={className}>
      {hasIcon && <SearchIcon />}
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
