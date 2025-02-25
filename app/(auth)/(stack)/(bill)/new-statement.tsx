import FormikWrapper from '@/components/formik/FormikWrapper';
import BillForm from '@/components/screen/Bill/BillForm';
import BackWithTitle from '@/components/ui/Button/BackWithTitle';
import Container from '@/components/ui/Container';
import { createBill } from '@/lib/filesystem/bills';
import { GetToday } from '@/lib/moment';
import { mergeString } from '@/utils';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView, View } from 'react-native';

const NewStatementScreen = () => {
  const params: any = useLocalSearchParams();
  const today = GetToday('YYYY-MM-DD');

  const initialValues = {
    type: {
      label: '',
      value: '',
    },
    customer: {
      label: mergeString([params?.firstName, params?.lastName]) ?? '',
      value: params?.customerId ?? '',
    },
    activityType: {
      label: '',
      value: '',
    },
    date: today,
    amount: '',
    transactionType: '',
    message: '',
  };

  const [loading, setLoading] = React.useState(false);

  const handleOnSubmit = async (value: typeof initialValues, { resetForm }: any) => {
    const data = {
      customerId: value?.customer?.value,
      amount: parseInt(value.amount),
      billType: value.type?.value,
      date: value.date,
      transactionType: value.transactionType,
      message: value.message ?? '',
      activityType: value.activityType.value,
    };

    const result = await createBill(data);

    if (typeof result === 'string') {
      console.log('===== result ====', result);
      router.push({
        pathname: '/statement-info',
        params: { customerId: data?.customerId, statementId: result, newBill: 1 },
      });
      resetForm();
      setLoading(false);
    } else {
      setLoading(false);
    }

    resetForm();
  };

  const handleHideField = (): string[] => {
    const fiels = [];
    if (params?.customerId) fiels.push('customer');
    return fiels;
  };

  return (
    <ScrollView className="bg-white dark:bg-gray-950">
      <Container>
        <View className="pt-8 p-4">
          <BackWithTitle title="New Payment" />
          <View>
            <FormikWrapper
              initialValues={initialValues}
              validationSchema={null}
              onSubmit={handleOnSubmit}
              submitBtn={{
                loading: loading,
                title: 'Save',
                className: 'mt-4',
              }}
            >
              <BillForm hiddenFieldName={handleHideField()} />
            </FormikWrapper>
          </View>
        </View>
      </Container>
    </ScrollView>
  );
};

export default NewStatementScreen;
