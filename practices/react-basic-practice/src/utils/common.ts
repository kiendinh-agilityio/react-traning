// Import types for Author
import { Author } from '@/types';

// Get the current year
export const currentYear = new Date().getFullYear();

// Helper function to pad numbers to two digits
const formatToTwoDigits = (num: number): string => String(num).padStart(2, '0');

// Format date
export const formatDate = (date: string): string => {
  const parsedDate = new Date(date);

  // Make sure there are 2 digits for the date
  const day = formatToTwoDigits(parsedDate.getDate());

  // Month starts at 0, add 1
  const month = formatToTwoDigits(parsedDate.getMonth() + 1);

  // Get the last 2 digits of the year
  const year = String(parsedDate.getFullYear()).slice(-2);

  // Returns the format dd/mm/yy
  return `${day}/${month}/${year}`;
};

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
