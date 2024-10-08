// Import dayjs
import dayjs from 'dayjs';

// Import types for Author
import { Author } from '@/types';

// Get the current year
export const currentYear = new Date().getFullYear();

export const formatDate = (date: string): string => dayjs(date).format('DD/MM/YY');

// Define default author object for reuse
export const profileAuthor: Author = {
  id: '',
  name: '',
  email: '',
  avatarUrl: '',
  position: 'Organization',
  roles: 'Manager',
  status: 'Active',
  date: '',
};
