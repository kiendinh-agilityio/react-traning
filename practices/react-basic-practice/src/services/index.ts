import { Author } from '@/types';
import { BASE_API, MESSAGE_ERROR } from '@/constants';

const authorUrl = `${BASE_API}/author`;

// API method for get all authors
export const getAllAuthors = async (): Promise<Author[]> => {
  try {
    const response = await fetch(authorUrl);
    return await response.json();
  } catch (error) {
    throw new Error(MESSAGE_ERROR.GET_ALL_AUTHOR);
  }
};

// API method for add new Author
export const addNewAuthor = async (author: Author): Promise<Author> => {
  try {
    const res = await fetch(authorUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(author),
    });
    return await res.json();
  } catch (error) {
    throw new Error(MESSAGE_ERROR.ADD_AUTHOR);
  }
};

// API method for edit exist Author
export const editAuthor = async (id: string, author: Author): Promise<Author> => {
  try {
    const res = await fetch(`${authorUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(author),
    });
    return await res.json();
  } catch (err) {
    throw new Error(MESSAGE_ERROR.EDIT_AUTHOR);
  }
};

// API method for delete Author
export const deleteAuthor = async (id: string): Promise<Author> => {
  try {
    const res = await fetch(`${authorUrl}/${id}`, {
      method: 'DELETE',
    });
    return await res.json();
  } catch (error) {
    throw new Error(MESSAGE_ERROR.DELETE_AUTHOR);
  }
};
