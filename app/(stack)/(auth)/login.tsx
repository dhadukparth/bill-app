import FormikCheckbox from '@/components/formik/FormikCheckbox';
import FormikInput from '@/components/formik/FormikInput';
import FormikPassword from '@/components/formik/FormikPassword';
import FormikWrapper from '@/components/formik/FormikWrapper';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import globalStyle from '@/utils/globalStyle';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link, router } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const LoginScreen = () => {
  return (
    <Container>
      <View className="pt-6">
        <View className="mb-10">
          <Text className="text-3xl font-semibold font-inter-semibold text-black dark:text-white">
            Welcome Back{' '}
          </Text>
        </View>
        <FormikWrapper
          initialValues={{ email: '', password: '', rememberMe: [] }}
          validationSchema={null}
          onSubmit={() => router.push('/(tabs)')}
          submitBtn={{
            title: 'Login',
            loading: false,
            className: 'mt-4',
            icon: (
              <MaterialIcons
                name="login"
                size={globalStyle.icon.size}
                color={globalStyle.icon.color}
              />
            ),
          }}
        >
          <FormikInput
            name="email"
            label="Email"
            keyboardType="email-address"
            placeholder="Email"
            icon={
              <Fontisto name="email" size={globalStyle.icon.size} color={globalStyle.icon.color} />
            }
          />
          <FormikPassword
            name="password"
            label="Password"
            placeholder="Password"
            icon={
              <Feather name="lock" size={globalStyle.icon.size} color={globalStyle.icon.color} />
            }
          />
          <View className="flex flex-row justify-between items-center mt-2">
            <FormikCheckbox
              name="rememberMe"
              optionList={[{ label: 'Remember Me', value: true }]}
            />
            <Link href="/forgotpassword">
              <Text className="text-blue-600 text-base font-normal font-poppins-regular">
                Forgot Password?
              </Text>
            </Link>
          </View>
        </FormikWrapper>
        <View className="relative my-10">
          <View className="w-full h-1 bg-gray-400 rounded-lg"></View>
          <Text className="text-black dark:text-white font-inter-regular font-normal py-1 px-3 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white dark:bg-gray-950">
            Or Continue with
          </Text>
        </View>
        <View className="flex flex-row gap-8 justify-between items-center">
          <Button
            className="w-40"
            varient="outline"
            icon={
              <AntDesign
                name="google"
                size={globalStyle.icon.size}
                color={globalStyle.icon.color}
              />
            }
          >
            Google
          </Button>
          <Button
            varient="outline"
            className="w-40"
            icon={
              <FontAwesome
                name="apple"
                size={globalStyle.icon.size}
                color={globalStyle.icon.color}
              />
            }
          >
            Apple
          </Button>
        </View>
      </View>
    </Container>
  );
};

export default LoginScreen;
