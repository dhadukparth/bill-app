import { themeType } from '@/types';
import { create } from 'zustand';

// Define the global store interface
export interface GlobalStore {
  global: { theme: themeType; lan: string };
  change: {
    theme: (newTheme: themeType) => void;
    language: (newLang: string) => void;
  };
  default: {
    theme: () => void;
    language: () => void;
  };
}

// Zustand store
export const useGlobalStore = create<GlobalStore>((set) => ({
  global: {
    theme: 'dark',
    lan: 'en',
  },
  change: {
    theme: (newTheme: themeType) =>
      set((state) => ({
        global: { ...state.global, theme: newTheme },
      })),
    language: (newLang: string) =>
      set((state) => ({
        global: { ...state.global, lan: newLang },
      })),
  },
  default: {
    theme: () =>
      set(() => ({
        global: { theme: 'dark', lan: '' },
      })),
    language: () =>
      set((state) => ({
        global: { ...state.global, lan: 'en' },
      })),
  },
}));
