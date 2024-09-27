type OptionsType = { text: string; value: string }[];

interface SelectProps {
  label?: string;
  name: string;
  optionsList: OptionsType;
}

const Select = ({ name, optionsList, label }: SelectProps) => {
  return (
    <div className="flex flex-col gap-1.5 font-helveticaRegular text-dark font-regular">
      {label && <label className="font-helveticaBold font-bold">{label}</label>}
      <select
        className="px-5 py-[15px] border border-input w-full rounded-[15px] focus:outline-none"
        name={name}
        id={name}
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
