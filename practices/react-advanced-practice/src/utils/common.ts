// Import dayjs
import dayjs from 'dayjs';

// Function format date
export const formatDate = (date: string, dateFormat: string): string =>
  dayjs(date).format(dateFormat);

// Get the current year
export const currentYear = new Date().getFullYear();
