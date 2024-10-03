// Import types for Author
import { Author } from '@/types';

// Get the current year
export const currentYear = new Date().getFullYear();

// Format date
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  return date.toLocaleDateString();
};

// Define default author object for reuse
export const profileAuthor: Author = {
  id: '',
  name: '',
  email: '',
  avatarUrl: '',
  position: '',
  roles: '',
  status: '',
  date: '',
};
