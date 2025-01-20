// Import dayjs
import dayjs from 'dayjs';

// Function format date
export const formatDate = (date: string, dateFormat: string): string =>
  dayjs(date).format(dateFormat);
