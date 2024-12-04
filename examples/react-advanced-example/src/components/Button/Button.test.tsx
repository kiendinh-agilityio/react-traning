import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './index';

describe('Button Component', () => {
  test('renders the button with the correct label', () => {
    render(<Button label='Click Me' onClick={() => {}} />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  test('calls the onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label='Click Me' onClick={handleClick} />);

    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('disables the button when disabled prop is true', () => {
    render(<Button label='Click Me' onClick={() => {}} disabled />);
    const button = screen.getByText('Click Me');
    expect(button).toBeDisabled();
  });

  test('applies correct styles when disabled', () => {
    render(<Button label='Click Me' onClick={() => {}} disabled />);
    const button = screen.getByText('Click Me');
    expect(button).toHaveStyle('cursor: not-allowed');
    expect(button).toHaveStyle('background-color: #ccc');
  });
});
