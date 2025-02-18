import FormikInput from '@/components/formik/FormikInput';
import FormikWrapper from '@/components/formik/FormikWrapper';
import Container from '@/components/ui/Container';
import globalStyle from '@/utils/globalStyle';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';
import { router } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

const FPSendEmail = () => {
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
            Forgot Password
          </Text>
          <Text className="text-base font-poppins-regular font-normal text-gray-950 dark:text-gray-300 mb-2">
            Enter your email to receive a verification code
          </Text>
        </View>
        <View className="mt-4">
          <FormikWrapper
            initialValues={{ email: '' }}
            validationSchema={null}
            onSubmit={() => router.push('/verifyemail')}
            submitBtn={{
              loading: false,
              title: 'Send Code',
              className: 'mt-4',
            }}
          >
            <FormikInput
              name="email"
              label="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              placeholder="Email"
              icon={
                <Fontisto
                  name="email"
                  size={globalStyle.icon.size}
                  color={globalStyle.icon.color}
                />
              }
            />
          </FormikWrapper>
        </View>
        <View className="mx-auto w-1/2 bg-gray-400 h-1 mt-10 rounded-lg"></View>
      </View>
    </Container>
  );
};

export default FPSendEmail;
