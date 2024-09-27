type OptionType = { name: string; value: string }[];

interface SelectItemProps {
  value?: string;
  name?: string;
  optionList: OptionType;
}

const SelectItem = ({ value, name, optionList }: SelectItemProps) => (
  <select
    className="px-5 py-[15px] border border-input w-full rounded-[15px] focus:outline-none"
    value={value}
    name={name}
    id={name}
  >
    {optionList.map((option) => (
      <option key={option.value} value={option.value}>
        {option.name}
      </option>
    ))}
  </select>
);

export default SelectItem;
