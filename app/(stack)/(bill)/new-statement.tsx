import FormikWrapper from '@/components/formik/FormikWrapper';
import BillForm from '@/components/screen/Bill/BillForm';
import BackWithTitle from '@/components/ui/Button/BackWithTitle';
import Container from '@/components/ui/Container';
import { Title } from '@/components/ui/HeadText';
import { router } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

const NewStatementScreen = () => {
  const initialValues = {};

  const handleOnSubmit = (value: typeof initialValues, { resetForm }: any) => {
    resetForm();
  };

  const iconColor = '#FFF';

  return (
    <Container>
      <View className="pt-8 p-4">
        <BackWithTitle title="New Bill" onBackClick={() => router.push('/bills')} />
        <View>
          <FormikWrapper
            initialValues={initialValues}
            validationSchema={null}
            onSubmit={handleOnSubmit}
            submitBtn={{
              loading: false,
              title: 'Save',
              className: 'mt-4',
            }}
          >
            <BillForm />
          </FormikWrapper>
        </View>
      </View>
      <View className="bg-gray-200 bottom-0 left-0 w-full">
        <Title>Date Sheet box</Title>
      </View>
    </Container>
  );
};

export default NewStatementScreen;
