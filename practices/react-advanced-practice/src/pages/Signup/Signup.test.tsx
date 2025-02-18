import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';
import Signup from '.';
import { registerUser } from '@/services';

// Mock the registerUser service
jest.mock('@/services', () => ({
  registerUser: jest.fn(),
}));

// Create a test QueryClient
const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  });

describe('Signup Component', () => {
  it('renders without crashing', () => {
    const queryClient = createTestQueryClient();
    const { container, asFragment } = render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <Signup />
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
          <Signup />
        </QueryClientProvider>
      </MemoryRouter>,
    );

    const downloadButton = screen.getByText('Free Download');
    fireEvent.click(downloadButton);

    // Snapshot after clicking the button
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls handleSignupSubmit with the correct data when the form is submitted', async () => {
    const queryClient = createTestQueryClient();
    const { asFragment } = render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <Signup />
        </QueryClientProvider>
      </MemoryRouter>,
    );

    // Mock the registerUser function to resolve successfully
    (registerUser as jest.Mock).mockResolvedValueOnce({});

    fireEvent.input(screen.getByPlaceholderText('Your full name'), {
      target: { value: 'Test User' },
    });
    fireEvent.input(screen.getByPlaceholderText('Your email address'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.input(screen.getByPlaceholderText('Your password'), {
      target: { value: 'Password@123' },
    });
    fireEvent.click(screen.getByText('Sign Up'));

    // Wait for the registerUser function to be called
    await waitFor(() => {
      expect(registerUser).toHaveBeenCalledWith({
        name: 'Test User',
        email: 'test@example.com',
        password: 'Password@123',
      });
    });

    expect(asFragment()).toMatchSnapshot();
  });
});
