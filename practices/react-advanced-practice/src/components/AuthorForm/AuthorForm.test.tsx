import { render } from '@testing-library/react';
import AuthorForm from '.';
import { PROFILE_AUTHORS } from '@/mocks';

describe('SignupForm Component', () => {
  const defaultProps = {
    isUpdate: false,
    selectedAuthor: PROFILE_AUTHORS,
    closeModal: jest.fn(),
    onChange: jest.fn(),
    onSubmit: jest.fn(),
  };

  it('should match snapshot in add mode', () => {
    const { asFragment } = render(<AuthorForm {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot in update mode', () => {
    const updateProps = {
      ...defaultProps,
      isUpdate: true,
    };
    const { asFragment } = render(<AuthorForm {...updateProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
