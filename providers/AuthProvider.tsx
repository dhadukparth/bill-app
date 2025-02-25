import Container from '@/components/ui/Container';
import Loader from '@/components/ui/Loader';
import { localstorage_keys } from '@/constant';
import { getData } from '@/lib/localstorage';
import { useGlobalStore } from '@/store/global';
import { conditionCheck } from '@/utils';
import globalStyle from '@/utils/globalStyle';
import { usePathname, useRouter } from 'expo-router';
import React, { createContext, ReactNode, useContext, useState } from 'react';
import { View } from 'react-native';

interface AuthContextType {
  user: any;
  login: (userData: any) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const pathName = usePathname();
  const [loading, setLoading] = useState(false);
  const getCurrentTheme = useGlobalStore((state) => state.global.theme);
  const iconColor = conditionCheck(
    getCurrentTheme === 'dark',
    globalStyle.colors.white,
    globalStyle.colors.black
  );

  const handleLoginCheck = async () => {
    const getWelcome = await getData(localstorage_keys.welcome);
    if (getWelcome) {
      if (!user) {
        router.replace('/');
      }
    } else {
      router.replace('/welcome');
    }
  };

  React.useLayoutEffect(() => {
    setLoading(true);
    try {
      handleLoginCheck();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [pathName]);

  const login = (userData: any) => {
    setUser(userData);
    router.replace('/(auth)/(tabs)/dashboard');
  };

  const logout = () => {
    setUser(null);
    router.replace('/');
  };

  if (loading) {
    return (
      <Container>
        <View className="flex-1 flex justify-center items-center">
          <Loader size="large" color={iconColor} />
        </View>
      </Container>
    );
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
