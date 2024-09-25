// Create input props
interface InputFieldProps {
  value: string | number;
  name: string;
  type: string;
  placeholder: string;
}

const InputField = ({ value, name, placeholder, type }: InputFieldProps) => {
  const className = `flex justify-center items-center px-5 py-[15px] border border-input gap-3 w-full rounded-[15px]`;
  return (
    <input type={type} value={value} name={name} className={className} placeholder={placeholder} />
  );
};

export default InputField;
