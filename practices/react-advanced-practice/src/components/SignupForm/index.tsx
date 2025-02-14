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

// Import icons
import {
  ShowPasswordIcon,
  HidePasswordIcon,
  LoadingIcon,
} from '@/components/common/Icons';

// Import stores
import { useAuthStore } from '@/stores';

// Import constants
import { REGEX, MESSAGE_ERROR, API_AUTH_URL } from '@/constants';

interface SignupFormInputs {
  name: string;
  email: string;
  password: string;
}

const SignupForm = () => {
  const { showPassword, togglePasswordVisibility, setName, setEmail, setPassword } =
    useAuthStore();

  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    trigger,
    setError,
    formState: { errors },
  } = useForm<SignupFormInputs>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  // State to handle loading
  const [isLoading, setIsLoading] = useState(false);

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
  const onSubmit: SubmitHandler<SignupFormInputs> = async (data) => {
    // Set loading to true
    setIsLoading(true);

    try {
      setName(data.name);
      setEmail(data.email);
      setPassword(data.password);

      await axios.post(`${API_AUTH_URL}`, {
        name: data.name,
        email: data.email,
        password: data.password,
      });

      setTimeout(() => {
        navigate('/home');
      }, 1500);
    } catch (error) {
      setIsLoading(false);
      setError('email', {
        type: 'manual',
        message: MESSAGE_ERROR.SIGNUP_FAILED,
      });
    }
  };

  /**
   * Handles the onChange event for form inputs and triggers validation.
   * @param fieldName - The name of the field to validate.
   * @param fieldOnChange - The react-hook-form onChange handler for the field.
   * @returns A function that handles the input's onChange event.
   */
  const handleFieldChange =
    (fieldName: keyof SignupFormInputs, fieldOnChange: (value: string) => void) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      fieldOnChange(e.target.value);
      trigger(fieldName);
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full">
      {/* Name Input */}
      <Flex direction="column" className="mb-6 gap-[5px]">
        <Text>Name</Text>
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
              onChange={handleFieldChange('name', field.onChange)}
              onBlur={handleFieldBlur('name', trigger)}
            />
          )}
        />
      </Flex>

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

      {/* Submit Button */}
      <Button onClick={handleSubmit(onSubmit)} className="mt-9" isDisabled={isLoading}>
        {isLoading ? <LoadingIcon /> : 'Sign Up'}
      </Button>
      <Text as="div" className="font-regular text-base text-center mt-[22px]">
        Already have an account?{' '}
        <Link href="/signin" className="text-primary">
          Sign in
        </Link>
      </Text>
    </form>
  );
};

export default SignupForm;
