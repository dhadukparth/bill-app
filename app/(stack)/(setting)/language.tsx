import BackWithTitle from '@/components/ui/Button/BackWithTitle';
import Container from '@/components/ui/Container';
import { Title } from '@/components/ui/HeadText';
import globalStyle from '@/utils/globalStyle';
import Feather from '@expo/vector-icons/Feather';
import { router } from 'expo-router';
import React from 'react';
import { FlatList, ScrollView, View } from 'react-native';

const LanguageScreen = () => {
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
    <Container className="p-0 h-full">
      <View className="pt-20 py-4">
        <View className="px-4">
          <BackWithTitle title="Language" onBackClick={() => router.push('/setting')} />
        </View>
        <ScrollView>
          <View>
            <FlatList
              data={languagesList}
              renderItem={({ item, index }) => (
                <View
                  key={index}
                  className="py-4 px-6 border-b border-b-gray-800 flex flex-row justify-between items-center"
                >
                  <View>
                    <Title>{item.label}</Title>
                  </View>
                  {item.isActive ? (
                    <View>
                      <Feather
                        name="check"
                        size={globalStyle.icon.size}
                        color={globalStyle.icon.color}
                      />
                    </View>
                  ) : null}
                </View>
              )}
            />
          </View>
        </ScrollView>
      </View>
    </Container>
  );
};

export default LanguageScreen;
