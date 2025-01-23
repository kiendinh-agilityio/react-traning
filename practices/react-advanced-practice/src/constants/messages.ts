export const MESSAGE_ERROR = {
  REQUIRED_ERROR: (field: string) => `${field} is required`,
  INVALID_EMAIL: 'Email is invalid',
  INVALID_PASSWORD:
    'Password must have at least 8 characters, 1 special character and 1 number. Example@123',
  INVALID_NAME: 'Name must start with a capital letter, have no special characters',
  INVALID_SIGNIN:
    "The email ord password that you've entered is incorrect. Please try again.",
  INVALID_AVATAR_URL: 'Avatar URL must be a valid URL',
  INVALID_DATE: 'Date is invalid',
  SIGNIN_FAILED: 'An error occurred while signing in. Please try again later.',
  SIGNUP_FAILED: 'Something went wrong. Please try again.',
  ADD_AUTHOR: 'Can not add new author',
  EDIT_AUTHOR: 'Can not update author',
  DELETE_AUTHOR: 'Can not delete author',
  GET_ALL_AUTHOR: 'Can not get all authors information',
};

export const MESSAGE_SUCCESS = {
  GET_ALL_AUTHORS: 'Get all authors successfully',
  ADD_AUTHOR: 'New author has been added successfully',
  EDIT_AUTHOR: 'Author has been updated successfully',
  DELETE_AUTHOR: 'Author has been deleted successfully',
};
