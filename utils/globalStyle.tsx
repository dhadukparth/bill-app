import { colorScheme } from 'nativewind';

export const getCurrentTheme = colorScheme.get();

const WHITE = '#FFFFFF';
const BLACK = '#000000';
const GRAY = {
  100: '#f3f4f6',
  200: '#e5e7eb',
  400: '#9ca3af',
  500: '#6b7280',
  800: '#1f2937',
  900: '#111827',
};

export default {
  icon: {
    size: 20,
    color: getCurrentTheme === 'dark' ? WHITE : BLACK,
  },
  colors: {
    white: WHITE,
    black: BLACK,
    dark: '#1f2937',
    light: '#f3f4f6',
    gray: GRAY,
  },
};
