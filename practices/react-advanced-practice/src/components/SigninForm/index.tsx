// Import react hook form
import { useForm, SubmitHandler } from 'react-hook-form';

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
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormInputs>();

  const onSubmit: SubmitHandler<SigninFormInputs> = (data) => {
    setEmail(data.email);
    setPassword(data.password);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-full max-w-md"
    >
      {/* Email Input */}
      <Box className="flex flex-col gap-[6px] mb-6 w-[350px]">
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
        />
        {errors.email && (
          <p className="text-danger mt-1 text-sm">{errors.email.message}</p>
        )}
      </Box>

      {/* Password Input */}
      <Box className="flex flex-col gap-[6px] w-[350px]">
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
      <Button onClick={handleSubmit(onSubmit)} className="mt-9 w-[350px]">
        Sign In
      </Button>
    </form>
  );
};

export default SigninForm;
