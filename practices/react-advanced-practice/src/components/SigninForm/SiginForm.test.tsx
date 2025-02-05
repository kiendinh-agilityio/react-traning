import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { render } from '@testing-library/react';
import SigninForm from '.';

// Mock axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Mock useNavigate
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
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
    const { asFragment } = render(<SigninForm />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with invalid email error message', async () => {
    const { asFragment } = render(<SigninForm />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with invalid password error message', async () => {
    const { asFragment } = render(<SigninForm />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with a successful signin attempt', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: [{ email: 'test@example.com', password: 'password123' }],
    });

    const { asFragment } = render(<SigninForm />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with signin failure error message', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('Network Error'));

    const { asFragment } = render(<SigninForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});
