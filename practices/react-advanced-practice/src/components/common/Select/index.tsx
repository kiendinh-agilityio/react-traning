import { ChangeEvent, forwardRef, memo } from 'react';

// Import radix
import { Flex, Box } from '@radix-ui/themes';

// Import components
import { ArrowSelectIcon } from '@/components/common/Icons';

type OptionsType = { text: string; value: string }[];

interface SelectProps {
  label?: string;
  name: string;
  optionsList: OptionsType;
  value?: string;
  errorMessage?: string;
  onBlur?: (e: ChangeEvent<HTMLSelectElement>) => void;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Select = memo(
  forwardRef<HTMLSelectElement, SelectProps>(
    (
      { name, optionsList, label, value, onChange, errorMessage, onBlur }: SelectProps,
      ref,
    ) => {
      const renderOptions = (options: OptionsType) =>
        options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ));

      return (
        <Flex direction="column" className="gap-1.5 text-dark font-regular">
          {label && <label>{label}</label>}
          <Flex className="relative">
            <select
              className={`appearance-none px-5 py-[15px] border w-full rounded-[15px] focus:outline-none mb-1.5 ${errorMessage ? 'border-danger' : 'border-input'}`}
              name={name}
              id={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              ref={ref}
            >
              {renderOptions(optionsList)}
            </select>
            <Box as="span" className="absolute bottom-1/2 right-[20px]">
              <ArrowSelectIcon />
            </Box>
          </Flex>
        </Flex>
      );
    },
  ),
);

export default Select;
