import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Dialog, Button, Flex } from '@radix-ui/themes'; // Ensure this import is correct

type FormData = {
  firstName: string;
  lastName: string;
};

const MyForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>(); // Specify the form data type

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // Show alert with the input values
    alert(`First Name: ${data.firstName}, Last Name: ${data.lastName}`);
  };

  return (
    <Dialog.Root>
      {/* Button to open the Dialog */}
      <Dialog.Trigger>
        <Button type='button'>Open Form</Button>
      </Dialog.Trigger>

      {/* Dialog - Modal for form */}
      <Dialog.Content>
        <Dialog.Close>
          <Button style={{ position: 'absolute', top: 10, right: 10 }}>
            X
          </Button>
        </Dialog.Close>

        <form
          style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Uncontrolled component */}
          <Flex direction='column' gap='3'>
            <label>First name</label>
            <input
              {...register('firstName', {
                required: 'First name is required', // Custom error message
                minLength: {
                  value: 6,
                  message: 'First name must be at least 6 characters',
                },
              })}
            />
            {/* ErrorMessage from react-hook-form */}
            <ErrorMessage
              errors={errors}
              name='firstName'
              render={({ message }) => (
                <p style={{ color: 'red' }}>{message}</p>
              )}
            />
          </Flex>

          {/* Controlled component */}
          <Flex direction='column' gap='3'>
            <label>Last name</label>
            <Controller
              name='lastName'
              control={control}
              defaultValue=''
              rules={{
                required: 'Last name is required', // Custom error message
                minLength: {
                  value: 6,
                  message: 'Last name must be at least 6 characters',
                },
              }}
              render={({ field }) => <input {...field} />}
            />
            {/* ErrorMessage from react-hook-form */}
            <ErrorMessage
              errors={errors}
              name='lastName'
              render={({ message }) => (
                <p style={{ color: 'red' }}>{message}</p>
              )}
            />
          </Flex>

          <Button type='submit'>Submit</Button>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default MyForm;
