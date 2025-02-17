import FormikCheckbox from '@/components/formik/FormikCheckbox';
import FormikInput from '@/components/formik/FormikInput';
import FormikPassword from '@/components/formik/FormikPassword';
import FormikWrapper from '@/components/formik/FormikWrapper';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { adminUser, localstorage_keys } from '@/constant';
import { storeData } from '@/lib/localstorage';
import { useGlobalStore } from '@/store/global';
import globalStyle from '@/utils/globalStyle';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link, router } from 'expo-router';
import React from 'react';
import { Text, ToastAndroid, View } from 'react-native';

const LoginScreen = () => {
  const getCurrentTheme = useGlobalStore((state) => state.global.theme);
  const loginStorageFn = useGlobalStore((state) => state.change.login);
  const loginUser = useGlobalStore((state) => state.user);

  const iconColor =
    getCurrentTheme === 'dark' ? globalStyle.colors.white : globalStyle.colors.black;

  const initialValues = { email: '', password: '', rememberMe: [] };

  const handleOnSubmit = async (value: typeof initialValues, { resetForm }: any) => {
    if (value.email === adminUser.email && value.password === adminUser.password) {
      ToastAndroid.show('Login Successfully', ToastAndroid.SHORT);
      if (value.rememberMe.length) {
        storeData(localstorage_keys.remember, true);
      }

      loginStorageFn(adminUser);
      router.push('/(tabs)');
    } else {
      ToastAndroid.show('Invalid Credentials', ToastAndroid.SHORT);
    }
  };

  const handleCheckUserLogin = () => {
    console.log(loginUser);
    if (loginUser) {
      router.push('/(tabs)');
    }
  };

  return (
    <Container>
      <View className="pt-6">
        <View className="mb-10">
          <Text className="text-3xl font-semibold font-inter-semibold text-black dark:text-white">
            Welcome Back{' '}
          </Text>
        </View>
        <FormikWrapper
          initialValues={initialValues}
          validationSchema={null}
          onSubmit={handleOnSubmit}
          submitBtn={{
            title: 'Login',
            loading: false,
            className: 'mt-4',
            icon: (
              <MaterialIcons
                name="login"
                size={globalStyle.icon.size}
                color={globalStyle.colors.white}
              />
            ),
          }}
        >
          <FormikInput
            name="email"
            label="Email"
            keyboardType="email-address"
            placeholder="Email"
            autoCapitalize="none"
            icon={<Fontisto name="email" size={globalStyle.icon.size} color={iconColor} />}
          />
          <FormikPassword
            name="password"
            label="Password"
            placeholder="Password"
            icon={<Feather name="lock" size={globalStyle.icon.size} color={iconColor} />}
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
            icon={<AntDesign name="google" size={globalStyle.icon.size} color={iconColor} />}
          >
            Google
          </Button>
          <Button
            varient="outline"
            className="w-40"
            icon={<FontAwesome name="apple" size={globalStyle.icon.size} color={iconColor} />}
          >
            Apple
          </Button>
        </View>
      </View>
    </Container>
  );
};

export default LoginScreen;
