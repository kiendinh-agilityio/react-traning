import { useForm, useController } from 'react-hook-form';
import * as Slider from '@radix-ui/react-slider';
import * as Select from '@radix-ui/react-select';
import './slider.css';

type FormData = {
  volume: string;
  selectedValue: string;
};

const FormWithSlider: React.FC = () => {
  const { control, handleSubmit, setValue } = useForm<FormData>({
    defaultValues: {
      volume: '50',
      selectedValue: '0',
    },
  });

  const {
    field: { onChange, value },
  } = useController({
    name: 'volume',
    control,
    defaultValue: '50',
  });

  const handleSelectChange = (value: string) => {
    setValue('selectedValue', value);
  };

  const onSubmit = (data: FormData) => {
    alert(`Selected value: ${data.selectedValue}, Volume: ${data.volume}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form-container'>
      <div className='select-container'>
        <label htmlFor='selectedValue' className='select-label'>
          Select Value:
        </label>
        <Select.Root value={value} onValueChange={handleSelectChange}>
          <Select.Trigger aria-label='Select value' className='select-trigger'>
            <Select.Value placeholder='Select a value' />
          </Select.Trigger>
          <Select.Content className='select-content'>
            <Select.Item value='0' className='select-item'>
              0
            </Select.Item>
            <Select.Item value='10' className='select-item'>
              10
            </Select.Item>
            <Select.Item value='20' className='select-item'>
              20
            </Select.Item>
            <Select.Item value='30' className='select-item'>
              30
            </Select.Item>
            <Select.Item value='50' className='select-item'>
              50
            </Select.Item>
          </Select.Content>
        </Select.Root>
      </div>

      <div className='slider-container'>
        <label htmlFor='volume' className='slider-label'>
          Volume: {value}
        </label>
        <Slider.Root
          id='volume'
          value={[parseInt(value)]}
          max={100}
          step={1}
          onValueChange={(values) => onChange(values[0].toString())}
          className='slider'
        >
          <Slider.Track className='slider-track'>
            <Slider.Range className='slider-range' />
          </Slider.Track>
          <Slider.Thumb className='slider-thumb' />
        </Slider.Root>
      </div>

      <button type='submit' className='submit-button'>
        Submit
      </button>
    </form>
  );
};

export default FormWithSlider;
