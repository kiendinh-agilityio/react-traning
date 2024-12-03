import { render, screen, fireEvent } from '@testing-library/react';
import BuggyCounter from './index';

test('should increase count when button is clicked', () => {
  render(<BuggyCounter />);

  // Check the initial value of count
  expect(screen.getByText('Count: 0')).toBeInTheDocument();

  // Trigger the click event to increase count
  fireEvent.click(screen.getByText('Increase')); // Click the button to increase count

  // Check that count is incremented
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
});

test('should show error message when count exceeds the limit', () => {
  render(<BuggyCounter />);

  // Click the button several times to exceed the count limit
  fireEvent.click(screen.getByText('Increase')); // count = 1
  fireEvent.click(screen.getByText('Increase')); // count = 2
  fireEvent.click(screen.getByText('Increase')); // count = 3

  // Now count = 4, check if error message is displayed
  fireEvent.click(screen.getByText('Increase')); // This should trigger the error message

  // Check that the error message is displayed when count exceeds 3
  expect(screen.getByText('Count exceeded the limit!')).toBeInTheDocument();
});
