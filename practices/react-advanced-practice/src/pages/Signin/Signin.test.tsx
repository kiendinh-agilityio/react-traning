import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';
import Signin from '.';
import { authenticateUser } from '@/services';

// Mock the authenticateUser service
jest.mock('@/services', () => ({
  authenticateUser: jest.fn(),
}));

// Create a test QueryClient
const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  });

describe('Signin Component', () => {
  it('renders without crashing', () => {
    const queryClient = createTestQueryClient();
    const { container, asFragment } = render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <Signin />
        </QueryClientProvider>
      </MemoryRouter>,
    );

    expect(container).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls handleDownload when the download button is clicked', () => {
    const queryClient = createTestQueryClient();
    const { asFragment } = render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <Signin />
        </QueryClientProvider>
      </MemoryRouter>,
    );

    const downloadButton = screen.getByText('Free Download');
    fireEvent.click(downloadButton);

    // Snapshot after clicking the button
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls handleSigninSubmit with the correct data when the form is submitted', async () => {
    const queryClient = createTestQueryClient();
    const { asFragment } = render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <Signin />
        </QueryClientProvider>
      </MemoryRouter>,
    );

    // Mock the authenticateUser function to resolve successfully
    (authenticateUser as jest.Mock).mockResolvedValueOnce({});

    fireEvent.input(screen.getByPlaceholderText('Your email address'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.input(screen.getByPlaceholderText('Your password'), {
      target: { value: 'Password@123' },
    });
    fireEvent.click(screen.getByText('Sign In'));

    // Wait for the authenticateUser function to be called
    await waitFor(() => {
      expect(authenticateUser).toHaveBeenCalledWith(
        expect.objectContaining({
          email: 'test@example.com',
          password: 'Password@123',
        }),
      );
    });

    expect(asFragment()).toMatchSnapshot();
  });
});
