import FormikPassword from '@/components/formik/FormikPassword';
import FormikWrapper from '@/components/formik/FormikWrapper';
import Container from '@/components/ui/Container';
import globalStyle from '@/utils/globalStyle';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { router } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

const FPResetPassword = () => {
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
            Reset Password
          </Text>
          <Text className="text-base font-poppins-regular font-normal text-gray-950 dark:text-gray-300 mb-2">
            Create a new password
          </Text>
        </View>
        <View className="mt-4">
          <FormikWrapper
            initialValues={{ email: '', newPassword: '', confirmPassword: '' }}
            validationSchema={null}
            onSubmit={() => router.push('/verifyemail')}
            submitBtn={{
              loading: false,
              title: 'Reset Password',
              className: 'mt-4',
            }}
          >
            <FormikPassword
              name="newPassword"
              placeholder="New Password"
              icon={
                <Feather name="lock" size={globalStyle.icon.size} color={globalStyle.icon.color} />
              }
            />
            <FormikPassword
              name="confirmPassword"
              placeholder="Confirm New Password"
              icon={
                <Feather name="lock" size={globalStyle.icon.size} color={globalStyle.icon.color} />
              }
            />
          </FormikWrapper>
        </View>
        <View className="mx-auto w-1/2 bg-gray-400 h-1 mt-10 rounded-lg"></View>
      </View>
    </Container>
  );
};

export default FPResetPassword;
