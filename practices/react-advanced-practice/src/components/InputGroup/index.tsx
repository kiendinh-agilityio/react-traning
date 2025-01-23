// Import radix ui
import { Flex } from '@radix-ui/themes';

// Import components
import { Input, Text } from '@/components/common';

// Import type
import { TextSize } from '@/types';

interface InputGroupProps {
  label?: string;
  name: string;
  type?: 'search' | 'text' | 'email' | 'password' | 'date';
  value: string;
  placeholder?: string;
  errorMessage?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const InputGroup = ({
  label,
  name,
  type = 'text',
  value,
  placeholder = '',
  errorMessage,
  onChange,
  onBlur,
}: InputGroupProps) => (
  <Flex direction="column" className="gap-1.5">
    <Text size={TextSize.Base} as="label" className="text-dark">
      {label}
    </Text>
    <Input
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      errorMessage={errorMessage}
    />
  </Flex>
);

export default InputGroup;
