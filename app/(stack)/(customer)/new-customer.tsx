import FormikWrapper from '@/components/formik/FormikWrapper';
import ProfileForm from '@/components/forms/Profile';
import BackWithTitle from '@/components/ui/Button/BackWithTitle';
import Container from '@/components/ui/Container';
import { createCustomer } from '@/lib/filesystem/customer';
import { router } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

const NewCustomerScreen = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    description: '',
    profile: null,
  };

  const [loading, setLoading] = React.useState(false);

  const handleOnSubmit = async (value: typeof initialValues, { resetForm }: any) => {
    const data = {
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
      description: value.description,
    };

    setLoading(true);
    const result = await createCustomer(data);
    if (result) {
      router.push('/customer');
      resetForm();
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  return (
    <Container>
      <View className="pt-8 p-4">
        <BackWithTitle title="New Customer" onBackClick={() => router.push('/customer')} />

        <View>
          <FormikWrapper
            initialValues={initialValues}
            validationSchema={null}
            onSubmit={handleOnSubmit}
            submitBtn={{
              loading: loading,
              title: 'Save',
            }}
          >
            <ProfileForm />
          </FormikWrapper>
        </View>
      </View>
    </Container>
  );
};

export default NewCustomerScreen;
