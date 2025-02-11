import { colorScheme } from 'nativewind';

export const getCurrentTheme = colorScheme.get();

export default {
  icon: {
    size: 20,
    color: getCurrentTheme === 'dark' ? '#FFFFFF' : '#000000',
  },
};
