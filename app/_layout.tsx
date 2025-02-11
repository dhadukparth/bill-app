import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import '../global.css';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [loaded, error] = useFonts({
    'Inter-Regular': require('../assets/fonts/Inter/Inter-Regular.ttf'), // 400
    'Inter-Medium': require('../assets/fonts/Inter/Inter-Medium.ttf'), // 500
    'Inter-SemiBold': require('../assets/fonts/Inter/Inter-SemiBold.ttf'), // 600
    'Inter-Bold': require('../assets/fonts/Inter/Inter-Bold.ttf'), // 700
    'Poppins-Bold': require('../assets/fonts/Poppins/Poppins-Bold.ttf'), // 400
    'Poppins-Medium': require('../assets/fonts/Poppins/Poppins-Medium.ttf'), // 500
    'Poppins-Regular': require('../assets/fonts/Poppins/Poppins-Regular.ttf'), // 600
    'Poppins-SemiBold': require('../assets/fonts/Poppins/Poppins-SemiBold.ttf'), // 700
  });

  React.useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(stack)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
