import BackWithTitle from '@/components/ui/Button/BackWithTitle';
import Container from '@/components/ui/Container';
import { Title } from '@/components/ui/HeadText';
import { useGlobalStore } from '@/store/global';
import globalStyle from '@/utils/globalStyle';
import Feather from '@expo/vector-icons/Feather';
import { router } from 'expo-router';
import React from 'react';
import { ScrollView, View } from 'react-native';

const LanguageScreen = () => {
  const getCurrentTheme = useGlobalStore((state) => state.global.theme);
  const iconColor =
    getCurrentTheme === 'dark' ? globalStyle.colors.white : globalStyle.colors.black;

  const languagesList = [
    {
      label: 'English',
      value: 'english',
      isActive: false,
    },
    {
      label: 'Hindi',
      value: 'hindi',
      isActive: false,
    },
    {
      label: 'Gujarati',
      value: 'gujarati',
      isActive: false,
    },
    {
      label: 'English',
      value: 'english',
      isActive: true,
    },
    {
      label: 'Hindi',
      value: 'hindi',
      isActive: false,
    },
    {
      label: 'Gujarati',
      value: 'gujarati',
      isActive: false,
    },
    {
      label: 'English',
      value: 'english',
      isActive: false,
    },
    {
      label: 'Hindi',
      value: 'hindi',
      isActive: false,
    },
    {
      label: 'Gujarati',
      value: 'gujarati',
      isActive: false,
    },
    {
      label: 'English',
      value: 'english',
      isActive: false,
    },
    {
      label: 'Hindi',
      value: 'hindi',
      isActive: false,
    },
    {
      label: 'Gujarati',
      value: 'gujarati',
      isActive: false,
    },
  ];

  return (
    <ScrollView className="bg-white dark:bg-black" showsVerticalScrollIndicator={false}>
      <Container className="px-0 h-full">
        <View className="py-4">
          <View className="px-4">
            <BackWithTitle title="Language" onBackClick={() => router.push('/setting')} />
          </View>
          <View>
            {languagesList.map((item, index) => (
              <View
                key={index}
                className="py-4 px-6 border-b border-b-gray-800 flex flex-row justify-between items-center"
              >
                <View>
                  <Title>{item.label}</Title>
                </View>
                {item.isActive ? (
                  <View>
                    <Feather name="check" size={globalStyle.icon.size} color={iconColor} />
                  </View>
                ) : null}
              </View>
            ))}
          </View>
        </View>
      </Container>
    </ScrollView>
  );
};

export default LanguageScreen;
