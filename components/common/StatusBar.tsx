import { useGlobalStore } from '@/store/global';
import { StatusBar } from 'expo-status-bar';

import React from 'react';

const CStatusBar = () => {
  const getTheme = useGlobalStore((state) => state.global.theme);

  return (
    <StatusBar style={getTheme === 'dark' ? 'light' : getTheme === 'light' ? 'dark' : 'auto'} />
  );
};

export default React.memo(CStatusBar);
