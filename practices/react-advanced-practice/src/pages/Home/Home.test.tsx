import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeMode } from '@/types';
import Home from '.';
import { PROFILE_AUTHORS } from '@/mocks';
import { today } from '@/utils';

// Mock Zustand store
jest.mock('@/stores', () => ({
  useThemeStore: jest.fn(() => ({
    theme: ThemeMode.Light,
    setTheme: jest.fn(),
  })),
}));

// Mock services
jest.mock('@/services', () => ({
  getAllAuthors: jest.fn(() => Promise.resolve([])),
  addNewAuthor: jest.fn(),
  editAuthorById: jest.fn(),
  deleteAuthorById: jest.fn(),
}));

describe('Home Component', () => {
  const createTestQueryClient = () =>
    new QueryClient({
      defaultOptions: {
        queries: { retry: false },
      },
    });

  it('renders without crashing', () => {
    const queryClient = createTestQueryClient();
    const { container, asFragment } = render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>
      </MemoryRouter>,
    );
    expect(container).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('filters authors based on search term', async () => {
    const mockAuthors = [
      { id: '1', name: 'Author One', email: 'one@example.com' },
      { id: '2', name: 'Author Two', email: 'two@example.com' },
    ];

    const { getAllAuthors } = await import('@/services');
    (getAllAuthors as jest.Mock).mockResolvedValue(mockAuthors);

    const queryClient = createTestQueryClient();
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>
      </MemoryRouter>,
    );

    const searchInput = screen.getByPlaceholderText('Search by name or email...');
    fireEvent.change(searchInput, { target: { value: 'One' } });

    await waitFor(() => {
      expect(screen.getByText('Author One')).toBeInTheDocument();
      expect(screen.queryByText('Author Two')).not.toBeInTheDocument();
    });
  });

  it('displays no search results message', async () => {
    const queryClient = createTestQueryClient();
    const mockAuthors = [
      { id: '1', name: 'Author One', email: 'one@example.com' },
      { id: '2', name: 'Author Two', email: 'two@example.com' },
    ];
    const { getAllAuthors } = await import('@/services');
    (getAllAuthors as jest.Mock).mockResolvedValue(mockAuthors);

    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>
      </MemoryRouter>,
    );

    const searchInput = screen.getByPlaceholderText('Search by name or email...');
    fireEvent.change(searchInput, { target: { value: 'NonExistentAuthor' } });

    await waitFor(() => {
      expect(screen.getByText('No search results found.')).toBeInTheDocument();
    });
  });

  it('handles adding a new author', async () => {
    const queryClient = createTestQueryClient();
    const mockAuthor = PROFILE_AUTHORS;
    const { addNewAuthor } = await import('@/services');
    (addNewAuthor as jest.Mock).mockResolvedValue(mockAuthor);

    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>
      </MemoryRouter>,
    );

    const addButton = screen.getByText('Add New Author');
    fireEvent.click(addButton);

    const nameInput = screen.getByPlaceholderText('Please enter name');
    const emailInput = screen.getByPlaceholderText('Please enter email address');
    const avatarInput = screen.getByPlaceholderText('Please enter link image');
    const submitButton = screen.getByText('Submit');

    fireEvent.change(nameInput, { target: { value: 'Joe' } });
    fireEvent.change(emailInput, { target: { value: 'three@example.com' } });
    fireEvent.change(avatarInput, {
      target: { value: 'https://phimtat.vn/wp-content/uploads/2023/11/avt-3d.jpg' },
    });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(addNewAuthor).toHaveBeenCalledWith(
        expect.objectContaining({
          name: 'Joe',
          email: 'three@example.com',
          avatarUrl: 'https://phimtat.vn/wp-content/uploads/2023/11/avt-3d.jpg',
          position: 'Organization',
          roles: 'Manager',
          status: 'Active',
          date: today,
        }),
      );
    });
  });

  it('opens and closes the add author modal', async () => {
    const queryClient = createTestQueryClient();
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>
      </MemoryRouter>,
    );

    const addButton = screen.getByText('Add New Author');
    fireEvent.click(addButton);

    expect(screen.getByText('ADD AUTHOR')).toBeInTheDocument();

    const cancelButton = screen.getByText('Cancel');
    fireEvent.click(cancelButton);

    await waitFor(() => {
      expect(screen.queryByText('ADD AUTHOR')).not.toBeInTheDocument();
    });
  });
});
