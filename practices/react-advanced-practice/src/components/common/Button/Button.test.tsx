import { render, fireEvent } from '@testing-library/react';
import Button from '.';
import { ButtonVariant } from '@/types';

describe('Button Component', () => {
  const mockOnClick = jest.fn();

  it('renders correctly with default props', () => {
    const { getByText, container } = render(
      <Button onClick={mockOnClick}>Click Me</Button>,
    );

    expect(getByText('Click Me')).toBeInTheDocument();

    // Snapshot test
    expect(container).toMatchSnapshot();
  });

  it('renders with the correct variant class', () => {
    const { container } = render(
      <Button variant={ButtonVariant.Secondary} onClick={mockOnClick}>
        Secondary Button
      </Button>,
    );

    expect(container.firstChild).toHaveClass(ButtonVariant.Secondary);

    // Snapshot test
    expect(container).toMatchSnapshot();
  });

  it('handles click events', () => {
    const { getByText } = render(<Button onClick={mockOnClick}>Click Me</Button>);

    fireEvent.click(getByText('Click Me'));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('applies custom class names', () => {
    const { container } = render(
      <Button onClick={mockOnClick} className="custom-class">
        Custom Button
      </Button>,
    );

    expect(container.firstChild).toHaveClass('custom-class');

    // Snapshot test
    expect(container).toMatchSnapshot();
  });
});
