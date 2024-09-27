import SelectItem from './SelectItem';

type OptionType = { name: string; value: string }[];

interface SelectProps {
  value?: string;
  name?: string;
  label?: string;
  optionList: OptionType;
}

const SelectForm = ({ value, name, optionList, label }: SelectProps) => {
  return (
    <div className="flex flex-col gap-1.5 font-helveticaRegular text-dark font-regular">
      <label className="font-helveticaBold font-bold">{label}</label>
      <SelectItem name={name} optionList={optionList} value={value} />
    </div>
  );
};

export default SelectForm;
