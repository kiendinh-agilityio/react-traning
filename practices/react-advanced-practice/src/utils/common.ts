// Import dayjs
import dayjs from 'dayjs';

// Import types for Author
import { Author } from '@/types';

// Import constants
import { DATE_FORMAT } from '@/constants';

// Function format date
export const formatDate = (date: string, dateFormat: string): string =>
  dayjs(date).format(dateFormat);

// Get the current year
export const currentYear = new Date().getFullYear();

// Define default author object for reuse
export const profileAuthor: Author = {
  id: '',
  name: '',
  email: '',
  avatarUrl: '',
  position: 'Organization',
  roles: 'Manager',
  status: 'Active',
  date: formatDate(new Date().toISOString(), DATE_FORMAT.SECONDARY),
};

// Get today's date in the required format (YYYY-MM-DD)
export const today = formatDate(new Date().toISOString(), DATE_FORMAT.SECONDARY);

// Create validate for date
export const validateDate = (date: string, format: string): boolean => {
  const parsedDate = dayjs(date, format);
  const year = parsedDate.year();

  // Check if the date is valid and the year is >= 1000
  return parsedDate.isValid() && year >= 1000 && parsedDate.format(format) === date;
};
