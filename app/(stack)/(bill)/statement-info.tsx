import BackWithTitle from '@/components/ui/Button/BackWithTitle';
import Container from '@/components/ui/Container';
import { Title } from '@/components/ui/HeadText';
import { router } from 'expo-router';
import React from 'react';
import { Image, ScrollView, View } from 'react-native';

const StatementInformation = () => {
  return (
    <ScrollView className="bg-white dark:bg-gray-950 flex-1">
      <Container>
        <View className="py-4">
          <BackWithTitle title="Statement Information" onBackClick={() => router.back()} />

          <View className="mt-6">
            <View className="size-24 my-4 mx-auto">
              <Image
                source={{
                  uri: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg',
                }}
                alt="not found"
                className="size-full rounded-full"
              />
            </View>
            <View className="flex flex-col justify-center items-center">
              <Title size="large" fonts="inter-medium">
                To Parth Patel
              </Title>

              <Title fonts="inter-regular">parth@gmail.com</Title>
              <Title fonts="inter-bold" className="my-6 text-4xl">
                ₹520
              </Title>
            </View>
            <View className="flex flex-col justify-center items-center gap-y-6 ">
              <View className="bg-gray-100 dark:bg-gray-800 max-w-80 py-3 px-5 rounded-xl">
                <Title fonts="poppins-regular" className="text-center">
                  Walmart Superstore
                </Title>
              </View>
              <Title size="large" fonts="inter-medium">
                Friday, 26 March 2025 08:50 PM
              </Title>
            </View>
            <View className="bg-gray-100 dark:bg-gray-800 border border-gray-100 dark:border-gray-800 px-4 py-6 mt-6 rounded-lg">
              <View className="flex flex-col justify-center items-start gap-y-4">
                <Title fonts="poppins-regular">Date: 26 March 2025 08:50 PM</Title>
                <Title fonts="poppins-regular">To: Parth Patel</Title>
                <Title fonts="poppins-regular">From: Raj Patel</Title>
                <Title fonts="poppins-regular">Type: Credit</Title>
                <Title fonts="poppins-regular">Transaction Type: Cash</Title>
              </View>
            </View>
          </View>
        </View>
      </Container>
    </ScrollView>
  );
};

export default StatementInformation;
