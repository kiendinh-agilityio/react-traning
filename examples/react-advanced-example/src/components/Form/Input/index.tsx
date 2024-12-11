import {
  useForm,
  FormProvider,
  useFormState,
  Controller,
} from 'react-hook-form';

import { ErrorMessage } from '@hookform/error-message';

import { Button } from '@radix-ui/themes';

const FormWithInput = () => {
  const methods = useForm({
    defaultValues: {
      textInput: '',
    },
  });

  const { errors } = useFormState({
    control: methods.control,
  });

  const onSubmit = (data: { textInput: string }) => {
    if (data.textInput.length >= 4) {
      alert(`Text entered: ${data.textInput}`);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        style={{
          margin: '25px auto',
        }}
      >
        <div style={{ marginBottom: '15px' }}>
          <label
            htmlFor='textInput'
            style={{
              display: 'block',
              marginBottom: '5px',
              fontWeight: 'bold',
            }}
          >
            Text Input:
          </label>
          <Controller
            name='textInput'
            control={methods.control}
            rules={{
              required: 'This field is required',
              minLength: {
                value: 4,
                message: 'Text must be at least 4 characters long',
              },
            }}
            render={({ field }) => (
              <input
                {...field}
                id='textInput'
                style={{
                  width: '150px',
                  padding: '10px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  fontSize: '16px',
                }}
              />
            )}
          />
        </div>

        <div style={{ marginBottom: '15px', color: 'red', fontSize: '14px' }}>
          <ErrorMessage
            errors={errors}
            name='textInput'
            render={({ message }) => <p>{message}</p>}
          />
        </div>

        <Button type='submit'>Submit</Button>
      </form>
    </FormProvider>
  );
};

export default FormWithInput;
