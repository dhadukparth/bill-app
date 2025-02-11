import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import OtpInput from '@/components/ui/Input/OtpInputBox';
import globalStyle from '@/utils/globalStyle';
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

const FPEmailVerify = () => {
  return (
    <Container>
      <View>
        <View className="mb-4">
          <Pressable onPress={() => router.push('/login')}>
            <AntDesign name="left" size={globalStyle.icon.size} color={globalStyle.icon.color} />
          </Pressable>
        </View>
        <View className="mt-4">
          <Text className="text-2xl font-inter-semibold font-semibold text-gray-950 dark:text-white mb-2">
            Verify Email
          </Text>
          <Text className="text-base font-poppins-regular font-normal text-gray-950 dark:text-gray-300 mb-2">
            Enter the code sent to your email
          </Text>
        </View>
        <View className="my-10">
          <OtpInput onChange={(value) => console.log(value)} />
        </View>
        <Button onPress={() => router.push('/resetpassword')}>Verify</Button>
        <View className="flex flex-row justify-center items-center mt-4">
          <Text className="text-center text-gray-500 dark:text-white font-poppins-regular mt-1">
            Didn't receive code?{' '}
          </Text>
          <Pressable>
            <Text className="text-blue-600 font-semibold font-inter-semibold">Resend (30s)</Text>
          </Pressable>
        </View>
        <View className="mx-auto w-1/2 bg-gray-400 h-1 mt-10 rounded-lg"></View>
      </View>
    </Container>
  );
};

export default FPEmailVerify;
