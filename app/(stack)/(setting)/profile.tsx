import FormikInput from '@/components/formik/FormikInput';
import FormikTextarea from '@/components/formik/FormikTextarea';
import FormikWrapper from '@/components/formik/FormikWrapper';
import BackWithTitle from '@/components/ui/Button/BackWithTitle';
import Container from '@/components/ui/Container';
import globalStyle from '@/utils/globalStyle';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import Fontisto from '@expo/vector-icons/Fontisto';
import { router } from 'expo-router';
import React from 'react';
import { Image, View } from 'react-native';

const UserProfile = () => {
  return (
    <Container>
      <View className="pt-6">
        <BackWithTitle title="Profile" onBackClick={() => router.push('/setting')} />
        <View>
          <View>
            <FormikWrapper
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                description: '',
                profile: null,
              }}
              validationSchema={null}
              onSubmit={() => {}}
              submitBtn={{
                title: 'Save Change',
                loading: false,
                className: 'mt-4',
              }}
            >
              <View className="size-32 relative mx-auto mb-10">
                <Image
                  source={{
                    uri: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg',
                  }}
                  alt="not found"
                  className="size-full rounded-full"
                />
                <View className="absolute -bottom-1 -right-1 bg-blue-600 p-2 rounded-full">
                  <Entypo
                    name="camera"
                    size={globalStyle.icon.size}
                    color={globalStyle.icon.color}
                  />
                </View>
              </View>
              <View>
                <View className="mb-3">
                  <FormikInput
                    name="firstName"
                    placeholder="FirstName"
                    icon={
                      <Feather
                        name="user"
                        size={globalStyle.icon.size}
                        color={globalStyle.icon.color}
                      />
                    }
                  />
                </View>
                <View className="mb-3">
                  <FormikInput
                    name="lastName"
                    placeholder="LastName"
                    icon={
                      <Feather
                        name="user"
                        size={globalStyle.icon.size}
                        color={globalStyle.icon.color}
                      />
                    }
                  />
                </View>
              </View>
              <View className="mb-3">
                <FormikInput
                  name="Email"
                  placeholder="Email"
                  icon={
                    <Fontisto
                      name="email"
                      size={globalStyle.icon.size}
                      color={globalStyle.icon.color}
                    />
                  }
                />
              </View>
              <View className="mb-3">
                <FormikTextarea name="description" placeholder="Description" />
              </View>
            </FormikWrapper>
          </View>
          <View className="mx-auto w-1/2 bg-gray-400 h-1 mt-10 rounded-lg"></View>
        </View>
      </View>
    </Container>
  );
};

export default UserProfile;
