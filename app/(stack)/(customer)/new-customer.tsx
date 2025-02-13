import FormikWrapper from '@/components/formik/FormikWrapper';
import ProfileForm from '@/components/forms/Profile';
import Button from '@/components/ui/Button';
import BackWithTitle from '@/components/ui/Button/BackWithTitle';
import Container from '@/components/ui/Container';
import { router } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

const NewCustomerScreen = () => {
  return (
    <Container>
      <View className="pt-10 p-4">
        <BackWithTitle title="New Customer" onBackClick={() => router.push('/customer')} />

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
            submitBtn={false}
          >
            <ProfileForm />
            <Button isLoading={false}>Save</Button>
          </FormikWrapper>
        </View>
      </View>
    </Container>
  );
};

export default NewCustomerScreen;
