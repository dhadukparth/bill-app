import BackWithTitle from '@/components/ui/Button/BackWithTitle';
import Container from '@/components/ui/Container';
import { Title } from '@/components/ui/HeadText';
import { getData, storeData } from '@/lib/localstorage';
import globalStyle from '@/utils/globalStyle';
import Feather from '@expo/vector-icons/Feather';
import { router } from 'expo-router';
import { colorScheme } from 'nativewind';
import React from 'react';
import { Pressable, View } from 'react-native';

export type themeType = 'light' | 'dark' | 'system';
type themeListType = {
  label: string;
  value: themeType;
  icon: React.ReactNode;
};

const ThemeScreen = () => {
  const [currentTheme, setCurrentTheme] = React.useState<themeType>('system');

  const handleChangeTheme = (value: themeType) => {
    setCurrentTheme(value);
    colorScheme.set(value);
    storeData('theme', value);
  };

  const fetchTheme = async () => {
    try {
      const getTheme = await getData('theme');
      if (getTheme) {
        setCurrentTheme(getTheme);
      }
    } catch (err) {
      console.error('Error loading theme:', err);
    }
  };

  React.useEffect(() => {
    fetchTheme();
  }, []);

  const themesList: themeListType[] = [
    {
      label: 'Dark',
      value: 'dark',
      icon: (
        <Feather name="moon" size={globalStyle.icon.size + 20} color={globalStyle.icon.color} />
      ),
    },
    {
      label: 'Light',
      value: 'light',
      icon: <Feather name="sun" size={globalStyle.icon.size + 20} color={globalStyle.icon.color} />,
    },
    {
      label: 'System',
      value: 'system',
      icon: (
        <Feather name="monitor" size={globalStyle.icon.size + 20} color={globalStyle.icon.color} />
      ),
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
              onPress={() => handleChangeTheme(item.value)}
            >
              <View className="flex justify-center items-center gap-3">
                <View className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-700  size-24 flex justify-center items-center rounded-lg">
                  {item.icon}
                </View>
                <View>
                  <Title>{item.label}</Title>
                </View>
              </View>
              {currentTheme === item.value ? (
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
