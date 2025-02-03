import { render, fireEvent } from '@testing-library/react';
import ConfirmModal from '.';

describe('ConfirmModal Component', () => {
  const mockOnSubmit = jest.fn();
  const mockOnClose = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render modal content correctly', () => {
    const { getByText } = render(
      <ConfirmModal onSubmit={mockOnSubmit} onClose={mockOnClose} />,
    );

    // Check if the heading text is rendered
    expect(getByText('Are you sure you want to delete this author?')).toBeInTheDocument();

    // Check if the buttons are rendered
    expect(getByText("Yes, I'm sure")).toBeInTheDocument();
    expect(getByText('No, Cancel')).toBeInTheDocument();
  });

  it('should call onSubmit when "Yes, I\'m sure" button is clicked', () => {
    const { getByText } = render(
      <ConfirmModal onSubmit={mockOnSubmit} onClose={mockOnClose} />,
    );

    const yesButton = getByText("Yes, I'm sure");

    // Simulate click on the "Yes, I'm sure" button
    fireEvent.click(yesButton);

    // Verify if onSubmit was called
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  });

  it('should call onClose when "No, Cancel" button is clicked', () => {
    const { getByText } = render(
      <ConfirmModal onSubmit={mockOnSubmit} onClose={mockOnClose} />,
    );

    const noButton = getByText('No, Cancel');

    // Simulate click on the "No, Cancel" button
    fireEvent.click(noButton);

    // Verify if onClose was called
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('should call onClose when the close icon button is clicked', () => {
    const { container } = render(
      <ConfirmModal onSubmit={mockOnSubmit} onClose={mockOnClose} />,
    );

    const closeIconButton = container.querySelector(
      '.absolute.right-0.top-0',
    ) as HTMLElement;

    // Simulate click on the close icon button
    fireEvent.click(closeIconButton);

    // Verify if onClose was called once
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(
      <ConfirmModal onSubmit={mockOnSubmit} onClose={mockOnClose} />,
    );

    // Match the snapshot
    expect(asFragment()).toMatchSnapshot();
  });
});
