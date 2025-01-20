import { create } from 'zustand';

// Define Zustand store for sign-in state
interface SigninState {
  email: string;
  password: string;
  showPassword: boolean;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  togglePasswordVisibility: () => void;
}

export const useSigninStore = create<SigninState>((set) => ({
  email: '',
  password: '',
  showPassword: false,
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  togglePasswordVisibility: () => set((state) => ({ showPassword: !state.showPassword })),
}));
