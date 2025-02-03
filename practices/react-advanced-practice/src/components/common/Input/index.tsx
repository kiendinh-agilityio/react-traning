import { ReactNode, ChangeEvent, forwardRef, memo } from 'react';

// Import radix ui
import { Flex, Text, Box } from '@radix-ui/themes';

interface InputProps {
  name: string;
  placeholder: string;
  value?: string;
  type?: 'search' | 'text' | 'email' | 'password' | 'date';
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  errorMessage?: string;
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  className?: string; // Thêm props className
}

const Input = memo(
  forwardRef<HTMLInputElement, InputProps>(
    (
      {
        value,
        name,
        placeholder,
        type = 'text',
        leftIcon,
        rightIcon,
        onChange,
        onBlur,
        errorMessage,
        defaultValue,
        className = '',
      },
      ref,
    ) => {
      const baseClassName = `flex justify-center items-center px-5 py-[15px] border gap-3 w-full rounded-[15px] ${
        errorMessage ? 'border-danger' : 'border-input'
      } ${className}`;

      return (
        <Box className="w-full">
          <Flex justify="center" align="center" className={baseClassName}>
            {leftIcon && leftIcon}
            <input
              ref={ref}
              type={type}
              value={value}
              defaultValue={defaultValue}
              name={name}
              placeholder={placeholder}
              onChange={onChange}
              onBlur={onBlur}
              className={`w-full text-regular focus:outline-none text-dark placeholder:text-base dark:bg-dark ${className}`}
            />
            {rightIcon && rightIcon}
          </Flex>
          {errorMessage && (
            <Text className="text-regular text-danger mt-1 text-sm">{errorMessage}</Text>
          )}
        </Box>
      );
    },
  ),
);

export default Input;
