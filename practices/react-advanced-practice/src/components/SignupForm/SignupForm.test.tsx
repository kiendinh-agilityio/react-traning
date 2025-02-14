import axios from 'axios';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SignupForm from '.';
import { MESSAGE_ERROR } from '@/constants';
import { useNavigate } from 'react-router-dom';

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
  setName: jest.fn(),
  setEmail: jest.fn(),
  setPassword: jest.fn(),
};

jest.mock('@/stores', () => ({
  useAuthStore: jest.fn(() => mockUseAuthStore),
}));

describe('SignupForm', () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const { asFragment } = render(<SignupForm />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays validation errors when submitting empty form', async () => {
    render(<SignupForm />);
    fireEvent.click(screen.getByText('Sign Up'));

    await waitFor(() => {
      expect(screen.getByText(MESSAGE_ERROR.REQUIRED_ERROR('Name'))).toBeInTheDocument();
      expect(screen.getByText(MESSAGE_ERROR.REQUIRED_ERROR('Email'))).toBeInTheDocument();
      expect(
        screen.getByText(MESSAGE_ERROR.REQUIRED_ERROR('Password')),
      ).toBeInTheDocument();
    });
  });

  it('validates email format correctly', async () => {
    render(<SignupForm />);
    fireEvent.input(screen.getByPlaceholderText('Your email address'), {
      target: { value: 'invalid-email' },
    });
    fireEvent.blur(screen.getByPlaceholderText('Your email address'));

    await waitFor(() => {
      expect(screen.getByText(MESSAGE_ERROR.INVALID_EMAIL)).toBeInTheDocument();
    });
  });

  it('submits the form successfully', async () => {
    mockedAxios.post.mockResolvedValueOnce({});
    render(<SignupForm />);

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

    await waitFor(
      () => {
        expect(mockNavigate).toHaveBeenCalledWith('/home');
      },
      { timeout: 5000 },
    );
  });

  it('handles signup failure', async () => {
    mockedAxios.post.mockRejectedValueOnce(new Error('Signup failed'));
    render(<SignupForm />);

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

    await waitFor(() => {
      expect(mockedAxios.post).toHaveBeenCalled();
    });
  });

  it('toggles password visibility', async () => {
    render(<SignupForm />);
    fireEvent.click(screen.getByRole('button', { name: 'Show password' }));
    expect(mockUseAuthStore.togglePasswordVisibility).toHaveBeenCalled();
  });
});
