import Slider from '@/components/slider';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import imagePath from '@/utils/image-path';
import { Link, router } from 'expo-router';
import React from 'react';
import { Image, Text, View } from 'react-native';

const WelcomeScreen = () => {
  const welcomeData = [
    {
      title: 'Smart Billing Solutions',
      description:
        'Simplify your billing process with advanced and efficient tools for hassle-free transactions.',
      image: imagePath.WELCOME_SCREEN.IMAGE_WELCOME_SMART_BILL,
    },
    {
      title: 'Easy Invoice Generation',
      description: 'Create and send professional invoices in seconds with just a few taps.',
      image: imagePath.WELCOME_SCREEN.IMAGE_WELCOME_EASY_INVOICE,
    },
    {
      title: 'Manage Your Bills',
      description:
        'Keep track of all your bills in one place, ensuring timely payments and better financial control.',
      image: imagePath.WELCOME_SCREEN.IMAGE_WELCOME_MANAGE_BILL,
    },
  ];

  return (
    <Container>
      <Slider dotColor="#E5E7EB" activeDotColor="#3B82F6" loop autoplay>
        {welcomeData.map((item, index) => (
          <View key={index}>
            <View className="max-h-96">
              <Image source={item.image} alt="not found" className="w-full h-full rounded-lg" />
            </View>
            <View className="mt-10">
              <Text className="text-3xl text-gray-900 dark:text-white font-medium font-inter-medium">
                {item.title}
              </Text>
              <Text className="text-base text-gray-500 mt-2 dark:text-gray-200 font-poppins-regular font-normal">
                {item.description}
              </Text>
            </View>
          </View>
        ))}
      </Slider>
      <View className="px-6 mt-6">
        {/* Get Started Button */}
        <Button
          className="mt-6 bg-blue-600 py-3 rounded-lg items-center"
          onPress={() => router.push('/login')}
        >
          Get Started
        </Button>

        {/* Sign In Link */}
        <Text className="text-center text-gray-500 dark:text-white mt-4 font-poppins-regular">
          Already have an account?{' '}
          <Link href="/(stack)/(auth)/login">
            <Text className="text-blue-600 font-semibold font-inter-semibold">Sign In</Text>
          </Link>
        </Text>
      </View>
    </Container>
  );
};

export default WelcomeScreen;
