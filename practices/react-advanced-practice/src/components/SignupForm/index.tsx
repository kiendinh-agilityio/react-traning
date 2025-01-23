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
import { Input, Button, Text } from '@/components/common';

// Import icons
import {
  ShowPasswordIcon,
  HidePasswordIcon,
  LoadingIcon,
} from '@/components/common/Icons';

// Import stores
import { useSignupStore } from '@/stores';

// Import constants
import { REGEX, MESSAGE_ERROR, API_AUTH_URL, END_POINTS } from '@/constants';

interface SignupFormInputs {
  name: string;
  email: string;
  password: string;
}

const SignupForm = () => {
  const { setName, setEmail, setPassword } = useSignupStore();

  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<SignupFormInputs>();

  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  // State to handle loading
  const [isLoading, setIsLoading] = useState(false);

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
  const onSubmit: SubmitHandler<SignupFormInputs> = async (data) => {
    // Set loading to true
    setIsLoading(true);

    try {
      setName(data.name);
      setEmail(data.email);
      setPassword(data.password);

      await axios.post(`${API_AUTH_URL}/${END_POINTS.USERS}`, {
        name: data.name,
        email: data.email,
        password: data.password,
      });

      setTimeout(() => {
        navigate('/home');
      }, 1500);
    } catch (error) {
      setIsLoading(false);
      throw new Error(MESSAGE_ERROR.SIGNUP_FAILED);
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
      <Flex direction="column" className=" mb-6 gap-[5px]">
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
      <Flex direction="column" className=" mb-6 gap-[5px]">
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
    </form>
  );
};

export default SignupForm;
