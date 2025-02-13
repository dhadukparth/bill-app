import FormikWrapper from '@/components/formik/FormikWrapper';
import ProfileForm from '@/components/forms/Profile';
import Button from '@/components/ui/Button';
import BackWithTitle from '@/components/ui/Button/BackWithTitle';
import Container from '@/components/ui/Container';

import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

const EditCustomerScreen = () => {
  const params = useLocalSearchParams();

  return (
    <Container>
      <View className="pt-10 p-4">
        <BackWithTitle title="Edit Customer" onBackClick={() => router.push('/customer')} />

        <View>
          <FormikWrapper
            initialValues={{
              firstName: params?.firstName ?? '',
              lastName: params?.lastName ?? '',
              email: params?.email ?? '',
              description: params?.description ?? '',
              profile: params?.profile ?? null,
            }}
            validationSchema={null}
            onSubmit={() => {}}
            submitBtn={false}
          >
            <ProfileForm />
            <Button isLoading={false}>Save Change</Button>
          </FormikWrapper>
        </View>
      </View>
    </Container>
  );
};

export default EditCustomerScreen;
