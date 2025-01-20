import axios from 'axios';

// Import types
import { Author } from '@/types';

// Import constants
import { BASE_API, MESSAGE_ERROR } from '@/constants';

const authorUrl = `${BASE_API}/author`;

// API method for get all authors
export const getAllAuthors = async (): Promise<Author[]> => {
  try {
    const response = await axios.get<Author[]>(authorUrl);
    return response.data;
  } catch (error) {
    throw new Error(MESSAGE_ERROR.GET_ALL_AUTHOR);
  }
};

// API method for add new Author
export const addNewAuthor = async (author: Author): Promise<Author> => {
  try {
    const response = await axios.post<Author>(authorUrl, author, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(MESSAGE_ERROR.ADD_AUTHOR);
  }
};

// API method for edit existing Author
export const editAuthor = async (id: string, author: Author): Promise<Author> => {
  try {
    const response = await axios.put<Author>(`${authorUrl}/${id}`, author, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(MESSAGE_ERROR.EDIT_AUTHOR);
  }
};

// API method for delete Author
export const deleteAuthor = async (id: string): Promise<Author> => {
  try {
    const response = await axios.delete<Author>(`${authorUrl}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(MESSAGE_ERROR.DELETE_AUTHOR);
  }
};
