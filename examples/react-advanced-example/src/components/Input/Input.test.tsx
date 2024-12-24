import { render, screen, fireEvent } from '@testing-library/react';
import Input from './index';

describe('Input Component', () => {
  const setup = (props: Partial<React.ComponentProps<typeof Input>>) => {
    render(
      <Input
        name='test-input'
        type='text'
        placeholder='Enter text'
        {...props}
      />
    );
    return screen.getByPlaceholderText<HTMLInputElement>(/Enter text/i);
  };

  it('renders correctly with provided props', () => {
    const inputElement = setup({ value: 'Test Value' });

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('name', 'test-input');
    expect(inputElement.value).toBe('Test Value');
  });

  it('calls onChange when the user types', () => {
    const handleChange = jest.fn();
    const inputElement = setup({ onChange: handleChange });

    fireEvent.change(inputElement, { target: { value: 'Hello' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith('Hello');
  });

  it('renders with defaultValue and updates correctly', () => {
    const inputElement = setup({ defaultValue: 'Default Value' });

    expect(inputElement.value).toBe('Default Value');
    fireEvent.change(inputElement, { target: { value: 'New Value' } });
    expect(inputElement.value).toBe('New Value');
  });

  it('supports controlled value updates', () => {
    const handleChange = jest.fn();
    let controlledValue = 'Initial Value';

    const { rerender } = render(
      <Input
        name='controlled-input'
        type='text'
        placeholder='Controlled input'
        value={controlledValue}
        onChange={(value) => {
          controlledValue = value;
          handleChange(value);
          rerender(
            <Input
              name='controlled-input'
              type='text'
              placeholder='Controlled input'
              value={controlledValue}
              onChange={handleChange}
            />
          );
        }}
      />
    );

    const inputElement =
      screen.getByPlaceholderText<HTMLInputElement>(/Controlled input/i);

    expect(inputElement.value).toBe('Initial Value');

    fireEvent.change(inputElement, { target: { value: 'Initial ValueN' } });
    fireEvent.change(inputElement, { target: { value: 'Initial ValueNe' } });
    fireEvent.change(inputElement, { target: { value: 'Initial ValueNew' } });

    expect(handleChange).toHaveBeenCalledTimes(3);
    expect(handleChange).toHaveBeenNthCalledWith(1, 'Initial ValueN');
    expect(handleChange).toHaveBeenNthCalledWith(2, 'Initial ValueNe');
    expect(handleChange).toHaveBeenNthCalledWith(3, 'Initial ValueNew');
  });
});
