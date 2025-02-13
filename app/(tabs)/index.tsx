import RecentTransaction from '@/components/screen/Home/RecentTransaction';
import Container from '@/components/ui/Container';
import { Title } from '@/components/ui/HeadText';
import globalStyle from '@/utils/globalStyle';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Link } from 'expo-router';
import React from 'react';
import { Image, ScrollView, View } from 'react-native';

type buttonsListType = {
  label: string;
  url: any;
  icon: React.ReactNode;
};

const HomePage = () => {
  const buttonsList: buttonsListType[] = [
    {
      label: 'New Bill',
      url: '/',
      icon: (
        <FontAwesome6
          name="credit-card"
          size={globalStyle.icon.size}
          color={globalStyle.icon.color}
        />
      ),
    },
    {
      label: 'New Customer',
      url: '/new-customer',
      icon: <Feather name="users" size={globalStyle.icon.size} color={globalStyle.icon.color} />,
    },
  ];

  return (
    <ScrollView className="bg-white dark:bg-gray-950">
      <Container>
        <View className="py-8">
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
          <View className="my-8 bg-blue-600 py-8 px-6 rounded-3xl">
            <View className="mb-6">
              <Title size="xl" fonts="poppins-regular" className="mb-2 text-white">
                Total Revenue
              </Title>
              <Title size="3xl" fonts="inter-bold" className="text-white">
                ₹ 24,345.00
              </Title>
            </View>
            <View className="flex flex-row justify-between items-center">
              <View>
                <Title size="large" fonts="poppins-regular" className="text-white">
                  This Month
                </Title>
                <Title size="xl" fonts="inter-bold" className="text-white">
                  ₹ 12,800.00
                </Title>
              </View>
              <View>
                <Title size="large" fonts="poppins-regular" className="text-white">
                  Last Month
                </Title>
                <Title size="xl" fonts="inter-bold" className="text-white">
                  ₹ 11,545.00
                </Title>
              </View>
            </View>
          </View>

          {/* Action Card */}
          <View>
            <View className="flex flex-row justify-between items-center gap-3">
              {buttonsList.map((item, index) => (
                <Link href={item.url} key={index}>
                  <View className="border border-gray-800 dark:border-white rounded-lg flex flex-row justify-center items-center gap-4 h-20 px-6">
                    <View>
                      <FontAwesome6
                        name="credit-card"
                        size={globalStyle.icon.size}
                        color={globalStyle.icon.color}
                      />
                    </View>
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
            <RecentTransaction maxLength={4} />
          </View>
        </View>
      </Container>
    </ScrollView>
  );
};

export default HomePage;
