export const MESSAGE_ERROR = {
  REQUIRED_ERROR: (field: string) => `${field} is required`,
  INVALID_EMAIL: 'Email is invalid',
  INVALID_PASSWORD:
    'Password must have at least 8 characters, 1 special character and 1 number. Example@123',
  INVALID_NAME: 'Name must start with a capital letter, have no special characters',
  INVALID_SIGNIN:
    "The email ord password that you've entered is incorrect. Please try again.",
  SIGNIN_FAILED: 'An error occurred while signing in. Please try again later.',
  SIGNUP_FAILED: 'Something went wrong. Please try again.',
};
