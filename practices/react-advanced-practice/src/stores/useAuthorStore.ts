import { create } from 'zustand';
import { Author } from '@/types';

interface AuthorState {
  authors: Author[];
  filteredAuthors: Author[];
  searchQuery: string;
  isLoading: boolean;
  isFiltering: boolean;
  setAuthors: (authors: Author[]) => void;
  setSearchQuery: (query: string) => void;
  filterAuthors: (query: string) => void;
  setLoading: (isLoading: boolean) => void;
  setFiltering: (isFiltering: boolean) => void;
}

export const useAuthorStore = create<AuthorState>((set) => ({
  authors: [],
  filteredAuthors: [],
  searchQuery: '',
  isLoading: false,
  isFiltering: false,
  setAuthors: (authors: Author[]) => set({ authors, filteredAuthors: authors }),
  setSearchQuery: (query: string) => set({ searchQuery: query }),
  filterAuthors: (query: string) =>
    set((state) => ({
      filteredAuthors: state.authors.filter(
        (author) =>
          author.name.toLowerCase().includes(query.toLowerCase()) ||
          author.email.toLowerCase().includes(query.toLowerCase()),
      ),
    })),
  setLoading: (isLoading: boolean) => set({ isLoading }),
  setFiltering: (isFiltering: boolean) => set({ isFiltering }),
}));
