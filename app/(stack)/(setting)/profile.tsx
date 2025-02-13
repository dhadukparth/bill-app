import FormikWrapper from '@/components/formik/FormikWrapper';
import ProfileForm from '@/components/forms/Profile';
import BackWithTitle from '@/components/ui/Button/BackWithTitle';
import Container from '@/components/ui/Container';
import { router } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

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
              <ProfileForm />
            </FormikWrapper>
          </View>
          <View className="mx-auto w-1/2 bg-gray-400 h-1 mt-10 rounded-lg"></View>
        </View>
      </View>
    </Container>
  );
};

export default UserProfile;
