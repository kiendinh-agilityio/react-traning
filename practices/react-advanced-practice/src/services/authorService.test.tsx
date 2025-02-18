import axios, { AxiosResponse } from 'axios';
import {
  getAllAuthors,
  addNewAuthor,
  editAuthorById,
  deleteAuthorById,
} from '@/services';
import { MESSAGE_ERROR } from '@/constants';
import { Author } from '@/types';
import { PROFILE_AUTHORS } from '@/mocks';

jest.mock('axios');

describe('Author Service API', () => {
  const mockAuthors: Author[] = [PROFILE_AUTHORS];

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getAllAuthors', () => {
    it('should return list of authors when API call is successful', async () => {
      (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({
        data: mockAuthors,
      } as AxiosResponse<Author[]>);

      const result = await getAllAuthors();
      expect(result).toEqual(mockAuthors);
      expect(axios.get).toHaveBeenCalledWith(expect.stringContaining('/author'));
    });

    it('should throw error when API call fails', async () => {
      (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValue(new Error());

      await expect(getAllAuthors()).rejects.toThrow(MESSAGE_ERROR.GET_ALL_AUTHOR);
    });
  });

  describe('addNewAuthor', () => {
    it('should send data and return new author when API call is successful', async () => {
      (axios.post as jest.MockedFunction<typeof axios.post>).mockResolvedValue({
        data: PROFILE_AUTHORS,
      } as AxiosResponse<Author>);

      const result = await addNewAuthor(PROFILE_AUTHORS);
      expect(result).toEqual(PROFILE_AUTHORS);
      expect(axios.post).toHaveBeenCalledWith(
        expect.stringContaining('/author'),
        PROFILE_AUTHORS,
        {
          headers: { 'Content-Type': 'application/json' },
        },
      );
    });

    it('should throw error when API call fails', async () => {
      (axios.post as jest.MockedFunction<typeof axios.post>).mockRejectedValue(
        new Error(),
      );

      await expect(addNewAuthor(PROFILE_AUTHORS)).rejects.toThrow(
        MESSAGE_ERROR.ADD_AUTHOR,
      );
    });
  });

  describe('editAuthorById', () => {
    it('should send updated data and return updated author when API call is successful', async () => {
      (axios.put as jest.MockedFunction<typeof axios.put>).mockResolvedValue({
        data: PROFILE_AUTHORS,
      } as AxiosResponse<Author>);

      const result = await editAuthorById(PROFILE_AUTHORS.id, PROFILE_AUTHORS);
      expect(result).toEqual(PROFILE_AUTHORS);
      expect(axios.put).toHaveBeenCalledWith(
        expect.stringContaining(`/author/${PROFILE_AUTHORS.id}`),
        PROFILE_AUTHORS,
        {
          headers: { 'Content-Type': 'application/json' },
        },
      );
    });

    it('should throw error when API call fails', async () => {
      (axios.put as jest.MockedFunction<typeof axios.put>).mockRejectedValue(new Error());

      await expect(editAuthorById(PROFILE_AUTHORS.id, PROFILE_AUTHORS)).rejects.toThrow(
        MESSAGE_ERROR.EDIT_AUTHOR,
      );
    });
  });

  describe('deleteAuthorById', () => {
    it('should send request and return deleted author when API call is successful', async () => {
      (axios.delete as jest.MockedFunction<typeof axios.delete>).mockResolvedValue({
        data: PROFILE_AUTHORS,
      } as AxiosResponse<Author>);

      const result = await deleteAuthorById(PROFILE_AUTHORS.id);
      expect(result).toEqual(PROFILE_AUTHORS);
      expect(axios.delete).toHaveBeenCalledWith(
        expect.stringContaining(`/author/${PROFILE_AUTHORS.id}`),
      );
    });

    it('should throw error when API call fails', async () => {
      (axios.delete as jest.MockedFunction<typeof axios.delete>).mockRejectedValue(
        new Error(),
      );

      await expect(deleteAuthorById(PROFILE_AUTHORS.id)).rejects.toThrow(
        MESSAGE_ERROR.DELETE_AUTHOR,
      );
    });
  });
});
