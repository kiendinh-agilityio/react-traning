import { Author } from '@/types';

export interface ErrorMessages extends Omit<Author, 'id'> {
  [key: string]: string;
}
