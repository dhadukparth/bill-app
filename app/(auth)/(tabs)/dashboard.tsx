import HistorySection from '@/components/screen/Home/HistorySection';
import OverviewCard from '@/components/screen/Home/OverviewCard';
import Container from '@/components/ui/Container';
import { Title } from '@/components/ui/HeadText';
import { useGlobalStore } from '@/store/global';
import { conditionCheck } from '@/utils';
import globalStyle from '@/utils/globalStyle';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Link, useFocusEffect } from 'expo-router';
import React from 'react';
import { Image, RefreshControl, ScrollView, View } from 'react-native';

type buttonsListType = {
  label: string;
  url: any;
  icon: React.ReactNode;
};

const HomePage = () => {
  const scrollViewRef = React.useRef<ScrollView>(null);

  const getCurrentTheme = useGlobalStore((state) => state.global.theme);
  const [loading, setLoading] = React.useState(false);

  const iconColor = conditionCheck(
    getCurrentTheme === 'dark',
    globalStyle.colors.white,
    globalStyle.colors.black
  );

  const buttonsList: buttonsListType[] = [
    {
      label: 'New Bill',
      url: '/new-statement',
      icon: <FontAwesome6 name="credit-card" size={globalStyle.icon.size} color={iconColor} />,
    },
    {
      label: 'New Customer',
      url: '/new-customer',
      icon: <Feather name="users" size={globalStyle.icon.size} color={iconColor} />,
    },
  ];

  useFocusEffect(() => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  });

  return (
    <ScrollView
      ref={scrollViewRef}
      className="bg-white dark:bg-gray-950"
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={() => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
            }, 1000);
          }}
        />
      }
    >
      <Container>
        <View className="py-6">
          {/* Heading section */}
          <View className="flex flex-row justify-between items-center">
            <View>
              <Title size="3xl" fonts="inter-bold">
                Dashboard
              </Title>
              <Title size="large" fonts="poppins-medium">
                Welcome back, Parth
              </Title>
            </View>
            <View className="mr-8">
              <View className="size-12 rounded-full">
                <Image
                  source={{
                    uri: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg',
                  }}
                  alt="not found"
                  className="size-full rounded-full"
                />
              </View>
            </View>
          </View>

          {/* card */}
          <OverviewCard refresh={loading} />

          {/* Action Card */}
          <View>
            <View className="flex flex-row justify-between items-center gap-3">
              {buttonsList.map((item, index) => (
                <Link href={item.url} key={index}>
                  <View className="border border-gray-800 dark:border-white rounded-lg flex flex-row justify-center items-center gap-4 h-20 px-6">
                    <View>{item.icon}</View>
                    <View>
                      <Title>{item.label}</Title>
                    </View>
                  </View>
                </Link>
              ))}
            </View>
          </View>

          {/* Recent Transaction list */}
          <View className="mt-8">
            <View>
              <Title size="2xl" fonts="inter-bold">
                Recent Transactions
              </Title>
            </View>
            <HistorySection maxLength={4} />
          </View>
        </View>
      </Container>
    </ScrollView>
  );
};

export default HomePage;
