import { render, fireEvent, screen, act } from '@testing-library/react';
import AuthorForm from '.';
import { PROFILE_AUTHORS } from '@/mocks';
import { Author } from '@/types';

const mockProps = {
  isUpdate: false,
  selectedAuthor: PROFILE_AUTHORS,
  closeModal: jest.fn(),
  onChange: jest.fn(),
  onSubmit: jest.fn(),
};

describe('AuthorForm', () => {
  it('should render correctly with default props', () => {
    const { container } = render(<AuthorForm {...mockProps} />);
    expect(container).toMatchSnapshot();
  });

  it('should render correctly in update mode', () => {
    const updateProps = { ...mockProps, isUpdate: true };
    render(<AuthorForm {...updateProps} />);
    expect(screen.getByText('EDIT AUTHOR')).toBeInTheDocument();
  });

  it('should render correctly with empty selectedAuthor', () => {
    const emptyAuthorProps = { ...mockProps, selectedAuthor: {} as Author };
    render(<AuthorForm {...emptyAuthorProps} />);
    expect(screen.getByPlaceholderText('Please enter name')).toBeInTheDocument();
  });

  it('should handle field changes correctly', async () => {
    render(<AuthorForm {...mockProps} />);
    const nameInput = screen.getByPlaceholderText('Please enter name');

    await act(async () => {
      fireEvent.change(nameInput, { target: { value: 'New Author Name' } });
    });

    expect(mockProps.onChange).toHaveBeenCalled();
  });

  it('should validate date correctly', async () => {
    render(<AuthorForm {...mockProps} />);
    const dateInput = screen.getByPlaceholderText('');

    await act(async () => {
      fireEvent.change(dateInput, { target: { value: 'invalid-date' } });
    });

    expect(mockProps.onChange).toHaveBeenCalled();
  });

  it('should disable submit button correctly when not dirty in update mode', () => {
    const updateProps = { ...mockProps, isUpdate: true };
    render(<AuthorForm {...updateProps} />);
    const submitButton = screen.getByText('Save');
    expect(submitButton).toBeDisabled();
  });

  it('should call closeModal when cancel button is clicked', async () => {
    render(<AuthorForm {...mockProps} />);
    const cancelButton = screen.getByText('Cancel');

    await act(async () => {
      fireEvent.click(cancelButton);
    });

    expect(mockProps.closeModal).toHaveBeenCalled();
  });
});
