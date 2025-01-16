// Import react hook form
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

// Import radix ui
import { Box } from '@radix-ui/themes';

// Import common components
import { Input, Button, Text } from '@/components/common';

// Import constants
import { REGEX, MESSAGE_ERROR } from '@/constants';

// Import icons
import { ShowPasswordIcon, HidePasswordIcon } from '@/components/common/Icons';

// Import stores
import { useSigninStore } from '@/stores';

// Define form input types
interface SigninFormInputs {
  email: string;
  password: string;
}

const SigninForm = () => {
  const { showPassword, togglePasswordVisibility, setEmail, setPassword } =
    useSigninStore();

  const {
    control,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormInputs>();

  const onSubmit: SubmitHandler<SigninFormInputs> = (data) => {
    setEmail(data.email);
    setPassword(data.password);
  };

  /**
   * Creates an event handler for the blur event to validate a specific field.
   * @param fieldName - The name of the field to validate.
   * @param trigger - The react-hook-form trigger function.
   * @returns A function that triggers validation for the specified field.
   */
  const handleFieldBlur =
    (
      fieldName: keyof SigninFormInputs,
      trigger: (fieldName: keyof SigninFormInputs) => void,
    ) =>
    () =>
      trigger(fieldName);

  /**
   * Handles the onChange event for form inputs and triggers validation.
   * @param fieldName - The name of the field to validate.
   * @param fieldOnChange - The react-hook-form onChange handler for the field.
   * @returns A function that handles the input's onChange event.
   */
  const handleFieldChange =
    (fieldName: keyof SigninFormInputs, fieldOnChange: (value: string) => void) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      fieldOnChange(e.target.value);
      trigger(fieldName);
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col max-w-[350px]">
      {/* Email Input */}
      <Box className="flex flex-col mb-6 gap-[5px]">
        <Text content="Email" />
        <Controller
          name="email"
          control={control}
          rules={{
            required: MESSAGE_ERROR.REQUIRED_ERROR('Email'),
            pattern: {
              value: REGEX.EMAIL,
              message: MESSAGE_ERROR.INVALID_EMAIL,
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Your email address"
              type="email"
              errorMessage={errors.email?.message}
              onChange={handleFieldChange('email', field.onChange)}
              onBlur={handleFieldBlur('email', trigger)}
            />
          )}
        />
      </Box>

      {/* Password Input */}
      <Box className="flex flex-col gap-[5px]">
        <Text content="Password" />
        <Controller
          name="password"
          control={control}
          rules={{
            required: MESSAGE_ERROR.REQUIRED_ERROR('Password'),
            pattern: {
              value: REGEX.PASSWORD,
              message: MESSAGE_ERROR.INVALID_PASSWORD,
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Your password"
              type={showPassword ? 'text' : 'password'}
              errorMessage={errors.password?.message}
              onChange={handleFieldChange('password', field.onChange)}
              onBlur={handleFieldBlur('password', trigger)}
              rightIcon={
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <ShowPasswordIcon /> : <HidePasswordIcon />}
                </button>
              }
            />
          )}
        />
      </Box>

      {/* Submit Button */}
      <Button onClick={handleSubmit(onSubmit)} className="mt-9 w-[350px]">
        Sign In
      </Button>
    </form>
  );
};

export default SigninForm;
