import axios from 'axios';
import { authenticateUser, registerUser } from '@/services';
import { API_AUTH_URL, MESSAGE_ERROR } from '@/constants';
import { AuthData, SignupData } from '@/types';

// Mock axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('authenticateUser', () => {
  it('should authenticate user successfully', async () => {
    // Mock data
    const mockUser: AuthData = { email: 'test@example.com', password: 'password123' };
    const mockResponse = {
      data: [mockUser],
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    };

    // Mock axios.get to return the mock response
    mockedAxios.get.mockResolvedValueOnce(mockResponse);

    // Call the function and assert
    await expect(authenticateUser(mockUser)).resolves.toBeUndefined();
    expect(mockedAxios.get).toHaveBeenCalledWith(API_AUTH_URL);
  });

  it('should throw error when user is not found', async () => {
    // Mock data
    const mockUser: AuthData = { email: 'test@example.com', password: 'password123' };
    const mockResponse = {
      data: [],
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    };

    // Mock axios.get to return the mock response
    mockedAxios.get.mockResolvedValueOnce(mockResponse);

    // Call the function and assert
    await expect(authenticateUser(mockUser)).rejects.toThrow(MESSAGE_ERROR.SIGNIN_FAILED);
    expect(mockedAxios.get).toHaveBeenCalledWith(API_AUTH_URL);
  });

  it('should throw error when API request fails', async () => {
    // Mock data
    const mockUser: AuthData = { email: 'test@example.com', password: 'password123' };

    // Mock axios.get to throw an error
    mockedAxios.get.mockRejectedValueOnce(new Error('Network Error'));

    // Call the function and assert
    await expect(authenticateUser(mockUser)).rejects.toThrow(MESSAGE_ERROR.SIGNIN_FAILED);
    expect(mockedAxios.get).toHaveBeenCalledWith(API_AUTH_URL);
  });
});

describe('registerUser', () => {
  it('should register user successfully', async () => {
    // Mock data
    const mockUser: SignupData = {
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123',
    };
    const mockResponse = {
      data: {},
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    };

    // Mock axios.post to return the mock response
    mockedAxios.post.mockResolvedValueOnce(mockResponse);

    // Call the function and assert
    await expect(registerUser(mockUser)).resolves.toBeUndefined();
    expect(mockedAxios.post).toHaveBeenCalledWith(API_AUTH_URL, {
      name: mockUser.name,
      email: mockUser.email,
      password: mockUser.password,
    });
  });

  it('should throw error when API request fails', async () => {
    // Mock data
    const mockUser: SignupData = {
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123',
    };

    // Mock axios.post to throw an error
    mockedAxios.post.mockRejectedValueOnce(new Error('Network Error'));

    // Call the function and assert
    await expect(registerUser(mockUser)).rejects.toThrow(MESSAGE_ERROR.SIGNUP_FAILED);
    expect(mockedAxios.post).toHaveBeenCalledWith(API_AUTH_URL, {
      name: mockUser.name,
      email: mockUser.email,
      password: mockUser.password,
    });
  });
});
