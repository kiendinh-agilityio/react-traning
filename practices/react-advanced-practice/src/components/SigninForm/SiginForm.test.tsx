import axios from 'axios';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SigninForm from '.';
import { MESSAGE_ERROR } from '@/constants';
import { useNavigate, MemoryRouter } from 'react-router-dom';

// Mock axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Mock useNavigate
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

// Mock useAuthStore
const mockUseAuthStore = {
  showPassword: false,
  togglePasswordVisibility: jest.fn(),
};

jest.mock('@/stores', () => ({
  useAuthStore: jest.fn(() => mockUseAuthStore),
}));

describe('SigninForm', () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <SigninForm />
      </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays validation errors when submitting empty form', async () => {
    render(<SigninForm />);
    fireEvent.click(screen.getByText('Sign In'));

    await waitFor(() => {
      expect(screen.getByText(MESSAGE_ERROR.REQUIRED_ERROR('Email'))).toBeInTheDocument();
      expect(
        screen.getByText(MESSAGE_ERROR.REQUIRED_ERROR('Password')),
      ).toBeInTheDocument();
    });
  });

  it('validates email format correctly', async () => {
    render(<SigninForm />);
    fireEvent.input(screen.getByPlaceholderText('Your email address'), {
      target: { value: 'invalid-email' },
    });
    fireEvent.blur(screen.getByPlaceholderText('Your email address'));

    await waitFor(() => {
      expect(screen.getByText(MESSAGE_ERROR.INVALID_EMAIL)).toBeInTheDocument();
    });
  });

  it('displays an error message for invalid credentials', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: [] });
    render(<SigninForm />);

    fireEvent.input(screen.getByPlaceholderText('Your email address'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.input(screen.getByPlaceholderText('Your password'), {
      target: { value: 'Password@123' },
    });
    fireEvent.click(screen.getByText('Sign In'));

    await waitFor(() => {
      expect(screen.getByText(MESSAGE_ERROR.INVALID_SIGNIN)).toBeInTheDocument();
    });
  });

  it('submits the form successfully and navigates', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: [{ email: 'test@example.com', password: 'Password@123' }],
    });

    render(<SigninForm />);

    fireEvent.input(screen.getByPlaceholderText('Your email address'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.input(screen.getByPlaceholderText('Your password'), {
      target: { value: 'Password@123' },
    });
    fireEvent.click(screen.getByText('Sign In'));

    await waitFor(
      () => {
        expect(mockNavigate).toHaveBeenCalledWith('/home');
      },
      { timeout: 5000 },
    );
  });

  it('handles API call failure', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('Network error'));
    render(<SigninForm />);

    fireEvent.input(screen.getByPlaceholderText('Your email address'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.input(screen.getByPlaceholderText('Your password'), {
      target: { value: 'Password@123' },
    });
    fireEvent.click(screen.getByText('Sign In'));

    await waitFor(() => {
      expect(screen.getByText(MESSAGE_ERROR.SIGNIN_FAILED)).toBeInTheDocument();
    });
  });

  it('toggles password visibility', async () => {
    render(<SigninForm />);
    fireEvent.click(screen.getByRole('button', { name: 'Show password' }));
    expect(mockUseAuthStore.togglePasswordVisibility).toHaveBeenCalled();
  });
});
