import { adminUser, localstorage_keys } from '@/constant';
import { getData } from '@/lib/localstorage';
import { useGlobalStore } from '@/store/global';
import { useFonts } from 'expo-font';
import { router, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { colorScheme } from 'nativewind';
import React from 'react';
import '../global.css';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const changeTheme = useGlobalStore((state) => state.change.theme);
  const loginStorageFn = useGlobalStore((state) => state.change.login);

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

  const hideSplashScreen = async () => {
    if (loaded || error) {
      try {
        const getTheme = await getData(localstorage_keys.theme);
        const getWelcome = await getData(localstorage_keys.welcome);
        const getRemember = await getData(localstorage_keys.remember);

        if (getTheme) {
          changeTheme(getTheme);
          colorScheme.set(getTheme);
        }

        if (getWelcome) {
          if (getRemember) {
            loginStorageFn(adminUser);
            router.push('/(tabs)');
          } else {
            router.push('/login');
          }
        }
      } catch (err) {
        console.error('Error loading theme:', err);
      } finally {
        setTimeout(async () => {
          await SplashScreen.hideAsync();
        }, 2000);
      }
    }
  };

  React.useEffect(() => {
    hideSplashScreen();
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
