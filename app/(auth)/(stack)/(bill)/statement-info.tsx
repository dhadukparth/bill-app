import Button from '@/components/ui/Button';
import BackWithTitle from '@/components/ui/Button/BackWithTitle';
import Container from '@/components/ui/Container';
import { Title } from '@/components/ui/HeadText';
import Loader from '@/components/ui/Loader';
import statementActivityType from '@/constant/statementActivityType';
import { readBills } from '@/lib/filesystem/bills';
import { ConvertToUTC } from '@/lib/moment';
import { useGlobalStore } from '@/store/global';
import { conditionCheck, margeString } from '@/utils';
import globalStyle from '@/utils/globalStyle';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Image, ScrollView, View } from 'react-native';

const StatementInformation = () => {
  const params: any = useLocalSearchParams();

  const loginUser = useGlobalStore((state) => state.user);
  const getCurrentTheme = useGlobalStore((state) => state.global.theme);
  const iconColor = conditionCheck(
    getCurrentTheme === 'dark',
    globalStyle.colors.white,
    globalStyle.colors.black
  );

  const [loading, setLoading] = React.useState(false);
  const [statementDetails, setStatementDetails] = React.useState<any>(null);

  const fetchAllStatementList = async () => {
    try {
      setLoading(true);
      const result = await readBills(params?.customerId, params?.statementId);
      setStatementDetails(result);
    } catch (error) {
      console.log(error);
      setStatementDetails([]);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchAllStatementList();
  }, []);

  const handleActivityTypeIcon = (value: string): React.ReactNode => {
    return statementActivityType(iconColor).find((item) => item.value === value)?.icon;
  };

  if (loading) {
    return (
      <View>
        <Loader color={iconColor} />
      </View>
    );
  }

  const handleCheckPayment = (statement: any) => {
    const customerFullName = margeString([
      statementDetails?.customer?.firstName,
      statementDetails?.customer?.firstName,
    ]);
    const loginUserFullName =
      typeof loginUser === 'object' ? margeString([loginUser?.firstName, loginUser?.lastName]) : '';

    if (statement?.billType === 'credit') return { to: customerFullName, from: loginUserFullName };
    if (statement?.billType === 'debit') return { to: loginUserFullName, from: customerFullName };
  };

  console.log(params);

  return (
    <ScrollView className="bg-white dark:bg-gray-950 flex-1">
      <Container>
        <View className="py-4">
          <BackWithTitle title="Statement Information" onBackClick={() => router.back()} />

          <View className="mt-6">
            <View className="size-24 my-4 mx-auto">
              <Image
                source={{
                  uri: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg',
                }}
                alt="not found"
                className="size-full rounded-full"
              />
            </View>
            <View className="flex flex-col justify-center items-center">
              <Title size="large" fonts="inter-medium">
                {`To ${handleCheckPayment(statementDetails?.statement)?.from}`}
              </Title>

              <Title fonts="inter-regular">parth@gmail.com</Title>
              <Title fonts="inter-bold" className="my-6 text-4xl">
                {`₹${statementDetails?.statement?.amount}`}
              </Title>
            </View>
            <View className="flex flex-col justify-center items-center gap-y-6 ">
              {statementDetails?.message ? (
                <View className="bg-gray-100 dark:bg-gray-800 max-w-80 py-3 px-5 rounded-xl">
                  <Title fonts="poppins-regular" className="text-center">
                    {statementDetails?.statement?.message}
                  </Title>
                </View>
              ) : null}
              <Title size="large" fonts="inter-medium">
                {ConvertToUTC(statementDetails?.statement?.date, 'DateTime', 'dddd, DD MMMM YYYY')}
              </Title>
            </View>
            <View className="bg-gray-100 dark:bg-gray-800 border border-gray-100 dark:border-gray-800 px-4 py-6 mt-6 rounded-lg">
              <View className="flex flex-col justify-center items-start gap-y-4">
                <Title fonts="poppins-regular">
                  {`Date: ${ConvertToUTC(statementDetails?.statement?.date, 'DateTime', 'dddd, DD MMMM YYYY')}`}
                </Title>
                <Title fonts="poppins-regular">{`To: ${handleCheckPayment(statementDetails?.statement)?.to}`}</Title>
                <Title fonts="poppins-regular">{`From: ${handleCheckPayment(statementDetails?.statement)?.from}`}</Title>
                <Title fonts="poppins-regular">{`Type: ${statementDetails?.statement?.billType?.charAt(0).toUpperCase() + statementDetails?.statement?.billType.slice(1)}`}</Title>
                <Title fonts="poppins-regular">{`Transaction Type: ${statementDetails?.statement?.transactionType}`}</Title>
              </View>
            </View>
          </View>

          {params?.newBill === '1' ? (
            <View className="mt-4">
              <Button
                varient="outline"
                onPress={() =>
                  router.push({ pathname: '/statement-list', params: { id: params?.customerId } })
                }
              >
                View Statements
              </Button>
            </View>
          ) : null}
        </View>
      </Container>
    </ScrollView>
  );
};

export default StatementInformation;
