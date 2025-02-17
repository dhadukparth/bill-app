import { themeType } from '@/types';
import { create } from 'zustand';

type loginUserType = {
  firstName: string;
  lastName: string;
  email: string;
  id: string;
};

// Define the global store interface
export interface GlobalStore {
  global: { theme: themeType; lan: string };
  user: loginUserType | false;
  change: {
    theme: (newTheme: themeType) => void;
    language: (newLang: string) => void;
    login: (user: loginUserType) => void;
    logout: () => void;
  };
}

// Zustand store
export const useGlobalStore = create<GlobalStore>((set) => ({
  global: {
    theme: 'dark',
    lan: 'en',
  },
  user: false,
  change: {
    theme: (newTheme: themeType) =>
      set((state) => ({
        global: { ...state.global, theme: newTheme },
      })),
    language: (newLang: string) =>
      set((state) => ({
        global: { ...state.global, lan: newLang },
      })),
    login: (user) => set({ user }),
    logout: () => set({ user: false }),
  },
}));
