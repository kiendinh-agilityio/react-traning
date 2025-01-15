import { create } from 'zustand';

interface SignupState {
  name: string;
  email: string;
  password: string;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
}

export const useSignupStore = create<SignupState>((set) => ({
  name: '',
  email: '',
  password: '',
  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
}));
