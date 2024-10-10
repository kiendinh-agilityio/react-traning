// Import dayjs
import dayjs from 'dayjs';

// Import types for Author
import { Author } from '@/types';

// Get the current year
export const currentYear = new Date().getFullYear();

// Function format date
export const formatDate = (date: string, dateFormat: string): string =>
  dayjs(date).format(dateFormat);

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

// Get today's date in the required format (YYYY-MM-DD)
export const today = formatDate(new Date().toISOString(), 'YYYY-MM-DD');
