import { render, fireEvent } from '@testing-library/react';

// Import AuthorItem
import AuthorItem from '.';

// Import types
import { Author } from '@/types';

// Import utils
import { formatDate } from '@/utils';

// Import constants
import { DATE_FORMAT } from '@/constants';

describe('AuthorItem Component', () => {
  const mockAuthor: Author = {
    id: '1',
    avatarUrl: 'https://phimtat.vn/wp-content/uploads/2023/11/avt-3d.jpg',
    name: 'John Doe',
    email: 'john.doe@example.com',
    roles: 'Admin',
    position: 'Manager',
    status: 'Active',
    date: '2025-01-01',
  };

  const mockOnEdit = jest.fn();
  const mockOnDelete = jest.fn();

  it('renders correctly', () => {
    const { getByText } = render(
      <table>
        <tbody>
          <AuthorItem author={mockAuthor} onEdit={mockOnEdit} onDelete={mockOnDelete} />
        </tbody>
      </table>,
    );

    // Verify Profile is displayed correctly
    expect(getByText('John Doe')).toBeInTheDocument();
    expect(getByText('john.doe@example.com')).toBeInTheDocument();

    // Verify Roles and Position
    expect(getByText('Admin')).toBeInTheDocument();
    expect(getByText('Manager')).toBeInTheDocument();

    // Verify Status
    expect(getByText('Active')).toBeInTheDocument();

    // Verify Date
    expect(getByText(formatDate(mockAuthor.date, DATE_FORMAT))).toBeInTheDocument();

    // Verify Actions
    expect(getByText('Edit')).toBeInTheDocument();
    expect(getByText('Delete')).toBeInTheDocument();
  });

  it('calls onEdit when the Edit button is clicked', () => {
    const { getByText } = render(
      <table>
        <tbody>
          <AuthorItem author={mockAuthor} onEdit={mockOnEdit} onDelete={mockOnDelete} />
        </tbody>
      </table>,
    );

    const editButton = getByText('Edit');
    fireEvent.click(editButton);

    // Verify the onEdit function is called
    expect(mockOnEdit).toHaveBeenCalledTimes(1);
    expect(mockOnEdit).toHaveBeenCalledWith(mockAuthor);
  });

  it('calls onDelete when the Delete button is clicked', () => {
    const { getByText } = render(
      <table>
        <tbody>
          <AuthorItem author={mockAuthor} onEdit={mockOnEdit} onDelete={mockOnDelete} />
        </tbody>
      </table>,
    );

    const deleteButton = getByText('Delete');
    fireEvent.click(deleteButton);

    // Verify the onDelete function is called
    expect(mockOnDelete).toHaveBeenCalledTimes(1);
    expect(mockOnDelete).toHaveBeenCalledWith(mockAuthor.id);
  });

  it('matches snapshot', () => {
    const { container } = render(
      <table>
        <tbody>
          <AuthorItem author={mockAuthor} onEdit={mockOnEdit} onDelete={mockOnDelete} />
        </tbody>
      </table>,
    );

    expect(container).toMatchSnapshot();
  });
});
