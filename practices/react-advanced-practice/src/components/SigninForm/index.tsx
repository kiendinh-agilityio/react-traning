// Import axios for API calls
import axios from 'axios';

// import react router dom
import { useNavigate } from 'react-router-dom';

// Import state
import { useState } from 'react';

// Import react hook form
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

// Import radix ui
import { Flex } from '@radix-ui/themes';

// Import common components
import { Input, Button, Text, Link } from '@/components/common';

// Import constants
import { REGEX, MESSAGE_ERROR, API_AUTH_URL } from '@/constants';

// Import icons
import {
  ShowPasswordIcon,
  HidePasswordIcon,
  LoadingIcon,
} from '@/components/common/Icons';

// Import stores
import { useSigninStore } from '@/stores';

// Define form input types
interface SigninFormInputs {
  email: string;
  password: string;
}

const SigninForm = () => {
  const { showPassword, togglePasswordVisibility } = useSigninStore();

  const navigate = useNavigate();

  // State to handle loading
  const [isLoading, setIsLoading] = useState(false);

  // State to handle error message
  const [errorMessage, setErrorMessage] = useState('');

  const {
    control,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormInputs>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<SigninFormInputs> = async (data) => {
    // Set loading to true
    setIsLoading(true);

    // Set error
    setErrorMessage('');

    try {
      // Simulate API call
      const response = await axios.get(`${API_AUTH_URL}`);
      const users = response.data;

      // Check if a user with the provided email and password exists
      const user = users.find(
        (u: { email: string; password: string }) =>
          u.email === data.email && u.password === data.password,
      );

      if (user) {
        // Simulate a delay before navigating
        setTimeout(() => {
          navigate('/home');
        }, 1500);
      } else {
        setErrorMessage(MESSAGE_ERROR.INVALID_SIGNIN);
        setIsLoading(false);
      }
    } catch (error) {
      setErrorMessage(MESSAGE_ERROR.SIGNIN_FAILED);
    } finally {
      // Ensure the loading state is turned off after the process
      setIsLoading(false);
    }
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
      <Flex direction="column" className="mb-6 gap-[5px]">
        <Text>Email</Text>
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
      </Flex>

      {/* Password Input */}
      <Flex direction="column" className="gap-[5px]">
        <Text>Password</Text>
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
      </Flex>

      {/* Error Message */}
      {errorMessage && <Text className="text-danger mt-3 text-sm">{errorMessage}</Text>}

      {/* Submit Button */}
      <Button
        onClick={handleSubmit(onSubmit)}
        className="mt-9 w-[350px]"
        isDisabled={isLoading}
      >
        {isLoading ? <LoadingIcon /> : 'Sign In'}
      </Button>
      <Text as="div" className="font-regular text-base text-center mt-[22px]">
        Don't have an account?{' '}
        <Link href="/signup" className="text-primary">
          Sign up
        </Link>
      </Text>
    </form>
  );
};

export default SigninForm;
