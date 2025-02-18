import axios from 'axios';

// Import constants
import { API_AUTH_URL, MESSAGE_ERROR } from '@/constants';

// Import types
import { AuthData, SignupData } from '@/types';

export const authenticateUser = async (data: AuthData): Promise<void> => {
  try {
    const response = await axios.get(`${API_AUTH_URL}`);
    const users = response.data;
    const user = users.find(
      (u: AuthData) => u.email === data.email && u.password === data.password,
    );

    if (!user) {
      throw new Error(MESSAGE_ERROR.INVALID_SIGNIN);
    }
  } catch (error) {
    throw new Error(MESSAGE_ERROR.SIGNIN_FAILED);
  }
};

export const registerUser = async (data: SignupData): Promise<void> => {
  try {
    await axios.post(`${API_AUTH_URL}`, {
      name: data.name,
      email: data.email,
      password: data.password,
    });
  } catch (error) {
    throw new Error(MESSAGE_ERROR.SIGNUP_FAILED);
  }
};
