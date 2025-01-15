import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Box } from '@radix-ui/themes';
import { Input, Button, Text } from '@/components/common';
import { ShowPasswordIcon, HidePasswordIcon } from '@/components/common/Icons';
import { useSignupStore } from '@/stores';
import { REGEX, MESSAGE_ERROR } from '@/constants';

interface SignupFormInputs {
  name: string;
  email: string;
  password: string;
}

const SignupForm = () => {
  const { setName, setEmail, setPassword } = useSignupStore();

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<SignupFormInputs>();
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleFieldBlur =
    (
      fieldName: keyof SignupFormInputs,
      trigger: (fieldName: keyof SignupFormInputs) => void,
    ) =>
    () =>
      trigger(fieldName);

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
        <Input
          {...register('name', {
            required: MESSAGE_ERROR.REQUIRED_ERROR('Name'),
            pattern: {
              value: REGEX.NAME,
              message: MESSAGE_ERROR.INVALID_NAME,
            },
          })}
          name="name"
          placeholder="Your full name"
          type="text"
          errorMessage={errors.name?.message}
          onBlur={handleFieldBlur('name', trigger)}
        />
        {errors.name && <p className="text-danger mt-1 text-sm">{errors.name.message}</p>}
      </Box>

      {/* Email Input */}
      <Box className="flex flex-col mb-6 gap-[5px]">
        <Text content="Email" />
        <Input
          {...register('email', {
            required: MESSAGE_ERROR.REQUIRED_ERROR('Email'),
            pattern: {
              value: REGEX.EMAIL,
              message: MESSAGE_ERROR.INVALID_EMAIL,
            },
          })}
          name="email"
          placeholder="Your email address"
          type="email"
          errorMessage={errors.email?.message}
          onBlur={handleFieldBlur('email', trigger)}
        />
        {errors.email && (
          <p className="text-danger mt-1 text-sm">{errors.email.message}</p>
        )}
      </Box>

      {/* Password Input */}
      <Box className="flex flex-col gap-[5px]">
        <Text content="Password" />
        <Input
          {...register('password', {
            required: MESSAGE_ERROR.REQUIRED_ERROR('Password'),
            pattern: {
              value: REGEX.PASSWORD,
              message: MESSAGE_ERROR.INVALID_PASSWORD,
            },
          })}
          name="password"
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
