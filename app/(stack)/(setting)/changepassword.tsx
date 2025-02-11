import FormikPassword from '@/components/formik/FormikPassword';
import FormikWrapper from '@/components/formik/FormikWrapper';
import BackWithTitle from '@/components/ui/Button/BackWithTitle';
import Container from '@/components/ui/Container';
import globalStyle from '@/utils/globalStyle';
import imagePath from '@/utils/image-path';
import Feather from '@expo/vector-icons/Feather';
import { router } from 'expo-router';
import React from 'react';
import { Image, View } from 'react-native';

const ChangePasswordScreen = () => {
  return (
    <Container>
      <View className="pt-6">
        <BackWithTitle title="Change Password" onBackClick={() => router.push('/setting')} />
        <View>
          <View className="size-32 relative mx-auto my-10">
            <Image
              source={imagePath.WELCOME_SCREEN.IMAGE_SECURITY}
              alt="not found"
              className="size-full rounded-full bg-transparent"
            />
          </View>
          <View>
            <FormikWrapper
              initialValues={{
                oldPassword: '',
                newPassword: '',
                confirmPassword: '',
              }}
              validationSchema={null}
              onSubmit={() => {}}
              submitBtn={{
                title: 'Save Change',
                loading: false,
                className: 'mt-4',
              }}
            >
              <View className="mb-3">
                <FormikPassword
                  name="oldPassword"
                  placeholder="Old Password"
                  icon={
                    <Feather
                      name="lock"
                      size={globalStyle.icon.size}
                      color={globalStyle.icon.color}
                    />
                  }
                />
              </View>
              <View className="mb-3">
                <FormikPassword
                  name="newPassword"
                  placeholder="New Password"
                  icon={
                    <Feather
                      name="lock"
                      size={globalStyle.icon.size}
                      color={globalStyle.icon.color}
                    />
                  }
                />
              </View>
              <View>
                <FormikPassword
                  name="confirmPassword"
                  placeholder="Confirm New Password"
                  icon={
                    <Feather
                      name="lock"
                      size={globalStyle.icon.size}
                      color={globalStyle.icon.color}
                    />
                  }
                />
              </View>
            </FormikWrapper>
          </View>
        </View>
        <View className="mx-auto w-1/2 bg-gray-400 h-1 mt-10 rounded-lg"></View>
      </View>
    </Container>
  );
};

export default ChangePasswordScreen;
