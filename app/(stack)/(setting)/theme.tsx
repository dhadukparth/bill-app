import BackWithTitle from '@/components/ui/Button/BackWithTitle';
import Container from '@/components/ui/Container';
import { Title } from '@/components/ui/HeadText';
import globalStyle from '@/utils/globalStyle';
import Feather from '@expo/vector-icons/Feather';
import { router } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

const ThemeScreen = () => {
  const themesList = [
    {
      label: 'Dark',
      value: 'dark',
      isActive: true,
      icon: (
        <Feather name="moon" size={globalStyle.icon.size + 20} color={globalStyle.icon.color} />
      ),
    },
    {
      label: 'Light',
      value: 'light',
      isActive: false,
      icon: <Feather name="sun" size={globalStyle.icon.size + 20} color={globalStyle.icon.color} />,
    },
    {
      label: 'System',
      value: 'system',
      isActive: false,
      icon: (
        <Feather name="monitor" size={globalStyle.icon.size + 20} color={globalStyle.icon.color} />
      ),
    },
  ];

  return (
    <Container>
      <View className="pt-16 p-4">
        <BackWithTitle title="Themes" onBackClick={() => router.push('/setting')} />

        <View className="flex flex-row  justify-between items-center mt-10 mb-6">
          {themesList.map((item, index) => (
            <View key={index} className="relative">
              <View className="flex justify-center items-center gap-3">
                <View className="bg-gray-700 size-24 flex justify-center items-center rounded-lg">
                  {item.icon}
                </View>
                <View>
                  <Title>{item.label}</Title>
                </View>
              </View>
              {item.isActive ? (
                <View className="bg-blue-500 p-1 w-fit absolute rounded-full -top-3 -right-3">
                  <Feather
                    name="check"
                    size={globalStyle.icon.size}
                    color={globalStyle.icon.color}
                  />
                </View>
              ) : null}
            </View>
          ))}
        </View>

        <View className="mx-auto w-1/2 bg-gray-400 h-1 mt-10 rounded-lg"></View>
      </View>
    </Container>
  );
};

export default ThemeScreen;
