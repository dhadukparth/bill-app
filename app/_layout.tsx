import { localstorage_keys } from '@/constant';
import { getData } from '@/lib/localstorage';
import { useGlobalStore } from '@/store/global';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { colorScheme } from 'nativewind';
import React from 'react';
import '../global.css';
import { AuthProvider } from '../providers/AuthProvider';

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: 'welcome',
};

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
        if (getTheme) {
          changeTheme(getTheme);
          colorScheme.set(getTheme);
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
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
};

export default RootLayout;
