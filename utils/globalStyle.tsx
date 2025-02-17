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

const BLUE = {
  500: '#3b82f6',
  600: '#2563eb',
};

export default {
  icon: {
    size: 20,
    color: getCurrentTheme === 'dark' ? WHITE : BLACK,
  },
  colors: {
    white: WHITE,
    black: BLACK,
    gray: GRAY,
    blue: BLUE,
  },
};
