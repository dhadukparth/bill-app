import StickyTopHeader from '@/components/common/StickyTopHeader';
import BackWithTitle from '@/components/ui/Button/BackWithTitle';
import Container from '@/components/ui/Container';
import { Title } from '@/components/ui/HeadText';
import InputBox from '@/components/ui/Input/InputBox';
import Loader from '@/components/ui/Loader';
import { filterStatementButtonList } from '@/constant';
import statementActivityType from '@/constant/statementActivityType';
import { readBills } from '@/lib/filesystem/bills';
import { ConvertToUTC } from '@/lib/moment';
import { useGlobalStore } from '@/store/global';
import { cn, conditionCheck, mergeString } from '@/utils';
import globalStyle from '@/utils/globalStyle';
import { AntDesign, Feather } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

const StatementList = () => {
  const params: any = useLocalSearchParams();

  const getCurrentTheme = useGlobalStore((state) => state.global.theme);
  const themeBackground = conditionCheck(
    getCurrentTheme === 'light',
    globalStyle.colors.white,
    globalStyle.colors.black
  );
  const iconColor = conditionCheck(
    getCurrentTheme === 'dark',
    globalStyle.colors.white,
    globalStyle.colors.black
  );

  const [loading, setLoading] = React.useState(false);
  const [customerInfo, setCustomerInfo] = React.useState<any>(null);
  const [transactionList, setTransactionList] = React.useState([]);
  const [totalAmount, setTotalAmount] = React.useState<any>(null);

  const fetchAllStatementList = async () => {
    try {
      setLoading(true);
      const result = await readBills(params?.id);
      setCustomerInfo(result?.customer);
      setTransactionList(result?.statementList);
      const totalAmountsList = result?.statementList?.map((item: any) => ({
        amount: item?.amount,
        type: item?.billType,
      }));

      const totalAmount = totalAmountsList?.reduce(
        (acc: any, item: any) => {
          if (item?.type === 'debit') acc.debitAmount += item?.amount;
          else if (item?.type === 'credit') acc.creditAmount += item?.amount;
          return acc;
        },
        {
          creditAmount: 0,
          debitAmount: 0,
        }
      );
      setTotalAmount(totalAmount);
    } catch (error) {
      console.log(error);
      setTransactionList([]);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchAllStatementList();
  }, []);

  const handleActivityTypeIcon = (value: string) => {
    return statementActivityType(iconColor).find((item) => item.value === value);
  };

  return (
    <StickyTopHeader
      headerChildren={<StickyHeader iconColor={iconColor} />}
      stickyHeaderStyle={{
        paddingTop: 30,
        paddingBottom: 6,
        backgroundColor: themeBackground,
        borderBottomWidth: 1,
        borderBottomColor: conditionCheck(
          getCurrentTheme === 'light',
          globalStyle.colors.gray[200],
          globalStyle.colors.gray[800]
        ),
      }}
    >
      <Container className="px-0">
        <View className="mt-4 px-4">
          <BackWithTitle
            onBackClick={() => router.push('/bills')}
            title={mergeString([customerInfo?.firstName, customerInfo?.lastName])}
            rightIcon={
              <Pressable
                className="bg-blue-500 p-2 rounded-lg w-fit"
                onPress={() =>
                  router.push({
                    pathname: '/new-statement',
                    params: {
                      customerId: params?.id,
                      firstName: params?.firstName,
                      lastName: params?.lastName,
                    },
                  })
                }
              >
                <Feather
                  name="plus"
                  size={globalStyle.icon.size}
                  color={globalStyle.colors.white}
                />
              </Pressable>
            }
          />
        </View>

        {/* card */}
        <View className="my-4 bg-blue-600 py-8 px-5">
          <View className="flex flex-row justify-between items-center">
            <View className="w-[45%]">
              <Title size="large" fonts="poppins-semibold" className="text-white">
                Credit Balance
              </Title>
              <View className="flex flex-row justify-between items-center">
                <Title size="3xl" fonts="inter-bold" className="text-white">
                  {`₹ ${totalAmount?.creditAmount}`}
                </Title>
                <AntDesign
                  name="arrowup"
                  size={globalStyle.icon.size + 6}
                  color={globalStyle.colors.white}
                />
              </View>
            </View>
            <View className="w-[45%]">
              <Title size="large" fonts="poppins-semibold" className="text-white">
                Debit Balance
              </Title>
              <View className="flex flex-row justify-between items-center">
                <Title size="3xl" fonts="inter-bold" className="text-white">
                  {`₹ ${totalAmount?.debitAmount}`}
                </Title>
                <AntDesign
                  name="arrowdown"
                  size={globalStyle.icon.size + 6}
                  color={globalStyle.colors.white}
                />
              </View>
            </View>
          </View>
        </View>

        {/* header */}
        <StickyHeader iconColor={iconColor} />

        {/* statement list */}
        <View>
          {loading ? (
            // Loading section
            <View>
              <Loader color={iconColor} />
            </View>
          ) : (
            // statement list section
            <>
              {transactionList?.length ? (
                <View>
                  {transactionList?.map((item: any, index) => {
                    return (
                      <Pressable
                        key={index}
                        className="p-4 border-b border-b-gray-200 dark:border-b-gray-800"
                        onPress={() =>
                          router.push({
                            pathname: '/statement-info',
                            params: {
                              customerId: item?.customerId,
                              statementId: item?.id,
                            },
                          })
                        }
                      >
                        <View className="flex flex-row justify-between items-center gap-3">
                          <View className="flex flex-row justify-start items-center gap-3">
                            <View className="bg-gray-100 dark:bg-gray-800 rounded-full p-1.5">
                              {handleActivityTypeIcon(item?.activityType)?.icon}
                            </View>
                            <View>
                              <Title>
                                {String(handleActivityTypeIcon(item?.activityType)?.label)}
                              </Title>
                              <Title>
                                {ConvertToUTC(item?.date, 'DateTime', 'dddd, DD MMM YYYY')}
                              </Title>
                            </View>
                          </View>
                          <View>
                            <Title
                              fonts="poppins-medium"
                              className={cn({
                                'text-red-500 dark:text-red-500': item?.billType === 'debit',
                                'text-green-500 dark:text-green-500': item?.billType === 'credit',
                              })}
                            >{`₹ ${item?.amount}`}</Title>
                          </View>
                        </View>
                      </Pressable>
                    );
                  })}
                </View>
              ) : (
                // not found section
                <View></View>
              )}
            </>
          )}
        </View>
      </Container>
    </StickyTopHeader>
  );
};

export default StatementList;

const StickyHeader = ({ iconColor }: { iconColor: string }) => {
  return (
    <View className="py-2">
      {/* filter */}
      <ScrollView horizontal={true}>
        <View className="flex flex-row justify-start items-center gap-4 px-4">
          {filterStatementButtonList.map((item, index) => (
            <Pressable
              key={index}
              className={cn('bg-gray-100 py-2 px-4 rounded-3xl', {
                'bg-blue-600 text-white': index === 2,
              })}
            >
              <Text
                className={cn('text-base font-poppins-regular', {
                  'text-white': index === 2,
                })}
              >
                {item.label}
              </Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      {/* search section */}
      <View className="mt-4 px-2">
        <InputBox
          placeholder="Search statement"
          // value={searchText}
          // onChangeText={handleOnchange}
          icon={<Feather name="search" size={globalStyle.icon.size} color={iconColor} />}
          extraIcon={
            // searchText.length ? (
            <AntDesign
              name="close"
              size={globalStyle.icon.size}
              color={iconColor}
              // onPress={() => setSearchText('')}
            />
            // ) : null
          }
        />
      </View>
    </View>
  );
};
