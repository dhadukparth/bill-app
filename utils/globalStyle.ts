import { colorScheme } from 'nativewind';

export const getCurrentTheme = colorScheme.get();

console.log(getCurrentTheme);

const WHITE = '#FFFFFF';
const BLACK = '#000000';

export default {
  icon: {
    size: 20,
    color: getCurrentTheme === 'dark' ? WHITE : BLACK,
  },
  colors: {
    white: WHITE,
    black: BLACK,
  },
};
