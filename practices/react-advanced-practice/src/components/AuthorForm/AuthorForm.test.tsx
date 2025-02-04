import { render } from '@testing-library/react';

// Import components AuthorForm
import AuthorForm from '.';

// Import data mock
import { PROFILE_AUTHORS } from '@/mocks';

// Import types
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
    const updateProps = {
      ...mockProps,
      isUpdate: true,
    };
    const { container } = render(<AuthorForm {...updateProps} />);
    expect(container).toMatchSnapshot();
  });

  it('should render correctly with empty selectedAuthor', () => {
    const emptyAuthorProps = {
      ...mockProps,
      selectedAuthor: {} as Author,
    };
    const { container } = render(<AuthorForm {...emptyAuthorProps} />);
    expect(container).toMatchSnapshot();
  });

  it('should render correctly with errors', () => {
    const errorAuthor: Author = {
      ...PROFILE_AUTHORS,
      name: 'invalid name',
      email: 'invalid email',
      avatarUrl: 'invalid avatarUrl',
      date: 'invalid date',
    };

    const errorProps = {
      ...mockProps,
      selectedAuthor: errorAuthor,
    };

    const { container } = render(<AuthorForm {...errorProps} />);
    expect(container).toMatchSnapshot();
  });
});
