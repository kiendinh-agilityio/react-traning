import { ChangeEvent } from 'react';

type OptionsType = { text: string; value: string }[];

interface SelectProps {
  label?: string;
  name: string;
  optionsList: OptionsType;
  value?: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: () => void;
  errorMessage?: string;
}

const Select = ({
  name,
  optionsList,
  label,
  value,
  onChange,
  errorMessage,
  onBlur,
}: SelectProps) => {
  return (
    <div className="flex flex-col gap-1.5 font-helveticaRegular text-dark font-regular">
      {label && <label>{label}</label>}
      <select
        className={`px-5 py-[15px] border border-input w-full rounded-[15px] focus:outline-none mb-1.5 ${errorMessage ? 'border-danger' : ''}`}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        {optionsList.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
