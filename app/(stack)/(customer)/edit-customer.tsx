import FormikWrapper from '@/components/formik/FormikWrapper';
import ProfileForm from '@/components/forms/Profile';
import Button from '@/components/ui/Button';
import BackWithTitle from '@/components/ui/Button/BackWithTitle';
import Container from '@/components/ui/Container';
import { deleteCustomer, updateCustomer } from '@/lib/filesystem/customer';

import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

const EditCustomerScreen = () => {
  const params: any = useLocalSearchParams();

  const [loading, setLoading] = React.useState(false);
  const handleDeleteCustomer = async () => {
    const result = await deleteCustomer(params?.id);
    if (result) {
      router.push('/customer');
    }
  };

  const inirialValues = {
    firstName: params?.firstName ?? '',
    lastName: params?.lastName ?? '',
    email: params?.email ?? '',
    description: params?.description ?? '',
    profile: params?.profile ?? null,
  };

  const handleOnSubmit = async (value: typeof inirialValues, { resetForm }: any) => {
    const updateData = {
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
      description: value.description,
    };

    setLoading(true);
    const result = await updateCustomer(params?.id, updateData);
    if (result) {
      router.push('/customer');
      setLoading(false);
      resetForm();
    } else {
      setLoading(false);
    }
  };

  return (
    <Container>
      <View className="pt-10 p-4">
        <BackWithTitle title="Edit Customer" onBackClick={() => router.push('/customer')} />

        <View>
          <FormikWrapper
            initialValues={inirialValues}
            validationSchema={null}
            onSubmit={handleOnSubmit}
            submitBtn={{
              loading: loading,
              title: 'Save Change',
            }}
          >
            <ProfileForm />
          </FormikWrapper>
        </View>

        <View className="mt-4">
          <Button varient="danger-outline" onPress={handleDeleteCustomer}>
            Delete
          </Button>
        </View>
      </View>
    </Container>
  );
};

export default EditCustomerScreen;
