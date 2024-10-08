// Import dayjs
import dayjs from 'dayjs';

// Import types for Author
import { Author } from '@/types';

// Import constants
import { DATE_FORMAT } from '@/constants';

// Get the current year
export const currentYear = new Date().getFullYear();

// Function format date
export const formatDate = (date: string, dateFormat: string = DATE_FORMAT): string =>
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
