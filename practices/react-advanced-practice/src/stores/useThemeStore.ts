import { create } from 'zustand';

// Import types
import { ThemeMode } from '@/types';

interface ThemeStore {
  theme: string;
  setTheme: (theme: string) => void;
}

export const useThemeStore = create<ThemeStore>((set) => {
  const savedTheme = localStorage.getItem('theme') || ThemeMode.Light;

  return {
    theme: savedTheme,
    setTheme: (theme) => {
      localStorage.setItem('theme', theme);

      set({ theme });
    },
  };
});
