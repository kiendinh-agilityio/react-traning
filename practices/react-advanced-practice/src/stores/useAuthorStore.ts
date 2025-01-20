import { create } from 'zustand';
import { Author } from '@/types';

interface AuthorState {
  authors: Author[];
  setAuthors: (authors: Author[]) => void;
}

export const useAuthorStore = create<AuthorState>((set) => ({
  authors: [],
  setAuthors: (authors: Author[]) => set({ authors }),
}));
