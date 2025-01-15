import { useState } from 'react';

// Import react hook form
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

// Import radix ui
import { Box } from '@radix-ui/themes';

// Import common components
import { Input, Button, Text } from '@/components/common';

// Import icons
import { ShowPasswordIcon, HidePasswordIcon } from '@/components/common/Icons';

// Import stores
import { useSignupStore } from '@/stores';

// Import constants
import { REGEX, MESSAGE_ERROR } from '@/constants';

interface SignupFormInputs {
  name: string;
  email: string;
  password: string;
}

const SignupForm = () => {
  const { setName, setEmail, setPassword } = useSignupStore();

  const {
    control,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<SignupFormInputs>();

  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Toggles the visibility of the password field between text and password.
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  /**
   * Creates an event handler for the blur event to validate a specific field.
   * @param fieldName - The name of the field to validate.
   * @param trigger - The react-hook-form trigger function.
   * @returns A function that triggers validation for the specified field.
   */
  const handleFieldBlur =
    (
      fieldName: keyof SignupFormInputs,
      trigger: (fieldName: keyof SignupFormInputs) => void,
    ) =>
    () =>
      trigger(fieldName);

  /**
   * Handles form submission by updating the signup store with user input values.
   * @param data - The form input values.
   */
  const onSubmit: SubmitHandler<SignupFormInputs> = (data) => {
    setName(data.name);
    setEmail(data.email);
    setPassword(data.password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full">
      {/* Name Input */}
      <Box className="flex flex-col mb-6 gap-[5px]">
        <Text content="Name" />
        <Controller
          name="name"
          control={control}
          rules={{
            required: MESSAGE_ERROR.REQUIRED_ERROR('Name'),
            pattern: {
              value: REGEX.NAME,
              message: MESSAGE_ERROR.INVALID_NAME,
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Your full name"
              type="text"
              errorMessage={errors.name?.message}
              onBlur={handleFieldBlur('name', trigger)}
            />
          )}
        />
        {errors.name && <p className="text-danger mt-1 text-sm">{errors.name.message}</p>}
      </Box>

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
              onBlur={handleFieldBlur('email', trigger)}
            />
          )}
        />
        {errors.email && (
          <p className="text-danger mt-1 text-sm">{errors.email.message}</p>
        )}
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
        {errors.password && (
          <p className="text-danger mt-1 text-sm">{errors.password.message}</p>
        )}
      </Box>

      {/* Submit Button */}
      <Button onClick={handleSubmit(onSubmit)} className="mt-9">
        Sign Up
      </Button>
    </form>
  );
};

export default SignupForm;
