// Get the current year
export const currentYear = new Date().getFullYear();

// Format date
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  return date.toLocaleDateString();
};
