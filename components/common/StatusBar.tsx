import globalStyle from '@/utils/globalStyle';
import { StatusBar } from 'expo-status-bar';
import { colorScheme } from 'nativewind';
import React from 'react';

const CStatusBar = () => {
  const getTheme = colorScheme.get();

  return (
    <StatusBar
      style={getTheme === 'dark' ? 'light' : 'dark'}
      backgroundColor={getTheme === 'light' ? globalStyle.colors.white : globalStyle.colors.black}
    />
  );
};

export default React.memo(CStatusBar);
