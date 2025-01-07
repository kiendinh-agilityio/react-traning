import { render, fireEvent } from '@testing-library/react';

import Input from '.';

import { SearchIcon, HidePasswordIcon } from '@/components/common/Icons';

// Mock Icons for testing
const LeftIcon = <SearchIcon />;

const RightIcon = <HidePasswordIcon />;

describe('Input Component', () => {
  it('renders correctly with default props and matches snapshot', () => {
    const { asFragment } = render(<Input name="test" placeholder="Enter text" />);

    // Check the snapshot
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with left and right icons', () => {
    const { asFragment } = render(
      <Input
        name="test"
        placeholder="Enter text"
        leftIcon={LeftIcon}
        rightIcon={RightIcon}
      />,
    );

    // Check the snapshot after rendering with icons
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with error message', () => {
    const { asFragment } = render(
      <Input
        name="test"
        placeholder="Enter text"
        errorMessage="This field is required"
      />,
    );

    // Check the snapshot with error message
    expect(asFragment()).toMatchSnapshot();
  });

  it('handles value change on typing', () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(
      <Input name="test" placeholder="Enter text" value="" onChange={handleChange} />,
    );

    const inputElement = getByPlaceholderText('Enter text');

    // Simulate typing
    fireEvent.change(inputElement, { target: { value: 'Hello' } });

    // Verify the onChange callback is triggered
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('focuses on input and triggers blur event', () => {
    const handleBlur = jest.fn();
    const { getByPlaceholderText } = render(
      <Input name="test" placeholder="Enter text" onBlur={handleBlur} />,
    );

    const inputElement = getByPlaceholderText('Enter text');

    // Simulate focus and blur
    fireEvent.focus(inputElement);
    fireEvent.blur(inputElement);

    // Verify the onBlur callback is triggered
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });
});
