import { useState } from 'react';

// Import hook useDebounce
import { useDebounce } from '@/hooks';

// Import types
import { Author } from '@/types';

export const useSearch = (authors: Author[]) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Debounced value of the search term
  const debouncedSearchQuery = useDebounce(searchTerm);

  const filteredAuthors = authors.filter(
    (author) =>
      author.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
      author.email.toLowerCase().includes(debouncedSearchQuery.toLowerCase()),
  );

  return {
    searchTerm,
    setSearchTerm,
    filteredAuthors,
    debouncedSearchQuery,
  };
};
