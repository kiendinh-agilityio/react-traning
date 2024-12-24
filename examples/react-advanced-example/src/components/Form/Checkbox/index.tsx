import { useForm } from 'react-hook-form';
import * as Checkbox from '@radix-ui/react-checkbox';
import './styles.css';

type FormData = {
  agreeToTerms: boolean;
};

const FormWithCheckbox = () => {
  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form-container'>
      <div className='checkbox-container'>
        <label htmlFor='agreeToTerms' className='checkbox-label'>
          <Checkbox.Root
            id='agreeToTerms'
            className='checkbox-root'
            onCheckedChange={(checked) =>
              setValue('agreeToTerms', checked === true)
            }
          >
            <Checkbox.Indicator className='checkbox-indicator'>
              ✔
            </Checkbox.Indicator>
          </Checkbox.Root>
          Agree to terms
        </label>
        {errors.agreeToTerms && (
          <p className='error-message'>{errors.agreeToTerms.message}</p>
        )}
      </div>

      <button type='submit' className='submit-button'>
        Submit
      </button>
    </form>
  );
};

export default FormWithCheckbox;
