import HistorySection from '@/components/screen/Home/HistorySection';
import BackWithTitle from '@/components/ui/Button/BackWithTitle';
import Container from '@/components/ui/Container';
import InputBox from '@/components/ui/Input/InputBox';
import { useGlobalStore } from '@/store/global';
import { conditionCheck } from '@/utils';
import globalStyle from '@/utils/globalStyle';
import { AntDesign, Feather } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, View } from 'react-native';

const HistoryScreen = () => {
  const getCurrentTheme = useGlobalStore((state) => state.global.theme);
  const iconColor = conditionCheck(
    getCurrentTheme === 'dark',
    globalStyle.colors.white,
    globalStyle.colors.black
  );

  return (
    <ScrollView className="bg-white dark:bg-gray-950">
      <Container>
        <View className="pt-6">
          <BackWithTitle title="History" />
        </View>
        <View>
          <View className="mt-4">
            <InputBox
              placeholder="Search..."
              // value={searchText}
              // onChangeText={handleOnchange}
              icon={<Feather name="search" size={globalStyle.icon.size} color={iconColor} />}
              extraIcon={
                // searchText.length ? (
                <AntDesign
                  name="close"
                  size={globalStyle.icon.size}
                  color={iconColor}
                  // onPress={() => setSearchText('')}
                />
                // ) : null
              }
            />
          </View>
          <HistorySection />
        </View>
      </Container>
    </ScrollView>
  );
};

export default HistoryScreen;
