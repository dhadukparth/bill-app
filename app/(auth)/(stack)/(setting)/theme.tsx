import BackWithTitle from '@/components/ui/Button/BackWithTitle';
import Container from '@/components/ui/Container';
import { Title } from '@/components/ui/HeadText';
import { localstorage_keys } from '@/constant';
import { storeData } from '@/lib/localstorage';
import { useGlobalStore } from '@/store/global';
import { themeType } from '@/types';
import globalStyle from '@/utils/globalStyle';
import Feather from '@expo/vector-icons/Feather';
import { router } from 'expo-router';
import { colorScheme } from 'nativewind';
import React from 'react';
import { Pressable, View } from 'react-native';

type themeListType = {
  label: string;
  value: themeType;
  icon: React.ReactNode;
};

const ThemeScreen = () => {
  const storeGetTheme = useGlobalStore((state) => state.global.theme);
  const storeChangeTheme = useGlobalStore((state) => state.change.theme);

  const iconColor = storeGetTheme === 'dark' ? globalStyle.colors.white : globalStyle.colors.black;

  const themesList: themeListType[] = [
    {
      label: 'Dark',
      value: 'dark',
      icon: <Feather name="moon" size={globalStyle.icon.size + 20} color={iconColor} />,
    },
    {
      label: 'Light',
      value: 'light',
      icon: <Feather name="sun" size={globalStyle.icon.size + 20} color={iconColor} />,
    },
    {
      label: 'System',
      value: 'system',
      icon: <Feather name="monitor" size={globalStyle.icon.size + 20} color={iconColor} />,
    },
  ];

  return (
    <Container>
      <View className="pt-10 p-4">
        <BackWithTitle title="Themes" onBackClick={() => router.push('/setting')} />

        <View className="flex flex-row  justify-between items-center mt-10 mb-6">
          {themesList.map((item, index) => (
            <Pressable
              key={index}
              className="relative"
              onPress={() => {
                colorScheme.set(item.value);
                storeData(localstorage_keys.theme, item.value);
                storeChangeTheme(item.value);
              }}
            >
              <View className="flex justify-center items-center gap-3">
                <View className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-700  size-24 flex justify-center items-center rounded-lg">
                  {item.icon}
                </View>
                <View>
                  <Title>{item.label}</Title>
                </View>
              </View>
              {storeGetTheme === item.value ? (
                <View className="bg-blue-500 p-1 w-fit absolute rounded-full -top-3 -right-3">
                  <Feather
                    name="check"
                    size={globalStyle.icon.size}
                    color={globalStyle.colors.white}
                  />
                </View>
              ) : null}
            </Pressable>
          ))}
        </View>

        <View className="mx-auto w-1/2 bg-gray-400 h-1 mt-10 rounded-lg"></View>
      </View>
    </Container>
  );
};

export default ThemeScreen;
