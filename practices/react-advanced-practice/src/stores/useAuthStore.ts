import { create } from 'zustand';

interface AuthState {
  name: string;
  email: string;
  password: string;
  showPassword: boolean;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  togglePasswordVisibility: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  name: '',
  email: '',
  password: '',
  showPassword: false,
  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  togglePasswordVisibility: () => set((state) => ({ showPassword: !state.showPassword })),
}));
