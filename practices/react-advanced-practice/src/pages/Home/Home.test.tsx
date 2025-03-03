import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeMode } from '@/types';
import Home from '.';

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

// Mock lazy loaded components
jest.mock('@/components/common/Modal', () => ({
  __esModule: true,
  default: ({
    children,
    onClose,
  }: {
    children: React.ReactNode;
    onClose: () => void;
  }) => (
    <div data-testid="modal" onClick={onClose}>
      {children}
    </div>
  ),
}));

jest.mock('@/components/AuthorForm', () => ({
  __esModule: true,
  default: ({ onSubmit, onClose }: { onSubmit: () => void; onClose: () => void }) => (
    <div data-testid="author-form">
      <button onClick={onSubmit}>Submit</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  ),
}));

jest.mock('@/components/ConfirmModal', () => ({
  __esModule: true,
  default: ({ onSubmit, onClose }: { onSubmit: () => void; onClose: () => void }) => (
    <div data-testid="confirm-modal">
      <button onClick={onSubmit}>Confirm</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  ),
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

    await waitFor(() => {
      expect(screen.queryByTestId('modal')).toBeInTheDocument();
    });

    const cancelButton = screen.getByText('Cancel');
    fireEvent.click(cancelButton);

    await waitFor(() => {
      expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
    });
  });
});
