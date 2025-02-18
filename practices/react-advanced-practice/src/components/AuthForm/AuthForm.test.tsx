import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AuthForm from '.';
import { MESSAGE_ERROR } from '@/constants';

jest.mock('@/stores', () => ({
  useAuthStore: jest.fn(() => ({
    showPassword: false,
    togglePasswordVisibility: jest.fn(),
    setName: jest.fn(),
    setEmail: jest.fn(),
    setPassword: jest.fn(),
  })),
}));

describe('AuthForm Component', () => {
  const mockOnSubmit = jest.fn();

  const renderComponent = (type: 'signin' | 'signup' = 'signin') =>
    render(
      <BrowserRouter>
        <AuthForm
          type={type}
          onSubmit={mockOnSubmit}
          bottomText="Don't have an account?"
          bottomLink="/signup"
          bottomLinkText="Sign up"
        />
      </BrowserRouter>,
    );

  it('matches the snapshot for signin', () => {
    const { asFragment } = renderComponent('signin');
    expect(asFragment()).toMatchSnapshot();
  });

  it('matches the snapshot for signup', () => {
    const { asFragment } = renderComponent('signup');
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders email and password fields', () => {
    renderComponent();
    expect(screen.getByPlaceholderText('Your email address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your password')).toBeInTheDocument();
  });

  it('renders name field for signup', () => {
    renderComponent('signup');
    expect(screen.getByPlaceholderText('Your full name')).toBeInTheDocument();
  });

  it('shows an error when submitting an empty form', async () => {
    renderComponent();
    fireEvent.click(screen.getByRole('button', { name: /sign in/i }));
    await waitFor(() => {
      expect(screen.getByText(MESSAGE_ERROR.REQUIRED_ERROR('Email'))).toBeInTheDocument();
      expect(
        screen.getByText(MESSAGE_ERROR.REQUIRED_ERROR('Password')),
      ).toBeInTheDocument();
    });
  });

  it('validates email format', async () => {
    renderComponent();
    const emailInput = screen.getByPlaceholderText('Your email address');
    fireEvent.change(emailInput, { target: { value: 'invalid email' } });
    fireEvent.blur(emailInput);
    await waitFor(() => {
      expect(screen.getByText(MESSAGE_ERROR.INVALID_EMAIL)).toBeInTheDocument();
    });
  });

  it('validates password format', async () => {
    renderComponent();
    const passwordInput = screen.getByPlaceholderText('Your password');
    fireEvent.change(passwordInput, { target: { value: '123' } });
    fireEvent.blur(passwordInput);
    await waitFor(() => {
      expect(screen.getByText(MESSAGE_ERROR.INVALID_PASSWORD)).toBeInTheDocument();
    });
  });

  it('calls onSubmit with valid data on signin', async () => {
    renderComponent();

    fireEvent.input(screen.getByPlaceholderText('Your email address'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.input(screen.getByPlaceholderText('Your password'), {
      target: { value: 'Password@123' },
    });
    fireEvent.click(screen.getByRole('button', { name: /sign in/i }));

    // Use waitFor to wait for async actions to complete
    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith(
        expect.objectContaining({
          email: 'test@example.com',
          password: 'Password@123',
        }),
      );
    });
  });

  it('submits the form with correct data', async () => {
    renderComponent('signup');

    fireEvent.input(screen.getByPlaceholderText('Your full name'), {
      target: { value: 'Test User' },
    });
    fireEvent.input(screen.getByPlaceholderText('Your email address'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.input(screen.getByPlaceholderText('Your password'), {
      target: { value: 'Password@123' },
    });

    fireEvent.click(screen.getByRole('button', { name: /sign up/i }));

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith({
        name: 'Test User',
        email: 'test@example.com',
        password: 'Password@123',
      });
    });
  });
});
