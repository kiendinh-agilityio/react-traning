import { useState } from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { Button, Flex, Text } from '@radix-ui/themes';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  country: string;
};

const ErrorMessage = ({ message }: { message?: string }) =>
  message ? (
    <Text color='red' size='2'>
      {message}
    </Text>
  ) : null;

const PersonalInfoForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();
  return (
    <Flex direction='column' gap='3' maxWidth='400px' mx='auto'>
      <label>
        First Name:
        <input
          {...register('firstName', { required: 'First name is required' })}
        />
      </label>
      <ErrorMessage message={errors.firstName?.message} />

      <label>
        Last Name:
        <input
          {...register('lastName', { required: 'Last name is required' })}
        />
      </label>
      <ErrorMessage message={errors.lastName?.message} />
    </Flex>
  );
};

const ContactInfoForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();
  return (
    <Flex direction='column' gap='3' maxWidth='400px' mx='auto'>
      <label>
        Email:
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email address',
            },
          })}
        />
      </label>
      <ErrorMessage message={errors.email?.message} />

      <label>
        Address:
        <input {...register('address', { required: 'Address is required' })} />
      </label>
      <ErrorMessage message={errors.address?.message} />
    </Flex>
  );
};

const LocationInfoForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();
  return (
    <Flex direction='column' gap='3' maxWidth='400px' mx='auto'>
      <label>
        City:
        <input {...register('city', { required: 'City is required' })} />
      </label>
      <ErrorMessage message={errors.city?.message} />

      <label>
        Country:
        <input {...register('country', { required: 'Country is required' })} />
      </label>
      <ErrorMessage message={errors.country?.message} />
    </Flex>
  );
};

const WizardForm: React.FC = () => {
  const methods = useForm<FormData>();
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const onSubmit = (data: FormData) => {
    console.log('Final Data:', data);
    alert('Form submitted successfully!');
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {step === 1 && <PersonalInfoForm />}
        {step === 2 && <ContactInfoForm />}
        {step === 3 && <LocationInfoForm />}

        <Flex justify='between' gap='3' mt='4'>
          {step > 1 && (
            <Button type='button' onClick={prevStep} variant='ghost'>
              Back
            </Button>
          )}
          {step < 3 ? (
            <Button type='button' onClick={nextStep} variant='solid'>
              Next
            </Button>
          ) : (
            <Button type='submit' variant='solid'>
              Submit
            </Button>
          )}
        </Flex>
      </form>
    </FormProvider>
  );
};

export default WizardForm;
