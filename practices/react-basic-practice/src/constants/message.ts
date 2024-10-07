export const MESSAGE_SUCCESS = {
  GET_ALL_AUTHORS: 'Get all authors successfully',
  ADD_AUTHOR: 'New author has been added successfully',
  EDIT_AUTHOR: 'Author has been updated successfully',
  DELETE_AUTHOR: 'Author has been deleted successfully',
};

export const MESSAGE_ERROR = {
  ADD_AUTHOR: 'Can not add new author',
  EDIT_AUTHOR: 'Can not update author',
  DELETE_AUTHOR: 'Can not delete author',
  GET_ALL_AUTHOR: 'Can not get all authors information',
  REQUIRED_ERROR: (field: string) => `${field} is required`,
  INVALID_EMAIL: 'Email is invalid',
  INVALID_AVATAR_URL: 'Avatar URL must be a valid URL',
  INVALID_NAME: 'Name must only contain alphabet characters',
};
