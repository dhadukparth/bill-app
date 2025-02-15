import StickyTopHeader from '@/components/common/StickyTopHeader';
import BackWithTitle from '@/components/ui/Button/BackWithTitle';
import Container from '@/components/ui/Container';
import { Title } from '@/components/ui/HeadText';
import InputBox from '@/components/ui/Input/InputBox';
import { filterStatementButtonList } from '@/constant';
import { useGlobalStore } from '@/store/global';
import { billType } from '@/types';
import { cn, conditionCheck } from '@/utils';
import globalStyle from '@/utils/globalStyle';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

type transactionListType = {
  label: string;
  type: billType;
  date: string;
  amount: number;
  icon: React.ReactNode;
};

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

const StatementList = () => {
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

  const transactionList: transactionListType[] = [
    {
      label: 'Walmart Superstore',
      date: 'Feb 12, 2024',
      amount: 40.8,
      type: 'credit',
      icon: <Ionicons name="bag-outline" size={globalStyle.icon.size} color={iconColor} />,
    },
    {
      label: "McDonald's",
      date: 'Feb 11, 2024',
      amount: 180.8,
      type: 'debit',
      icon: <Ionicons name="fast-food-outline" size={globalStyle.icon.size} color={iconColor} />,
    },
    {
      label: 'Shell Gas Station',
      date: 'Feb 10, 2024',
      amount: 45.8,
      type: 'debit',
      icon: <Ionicons name="car-outline" size={globalStyle.icon.size} color={iconColor} />,
    },
    {
      label: 'Rent Payment',
      date: 'Feb 9, 2024',
      amount: 1800.8,
      type: 'debit',
      icon: <Ionicons name="home-outline" size={globalStyle.icon.size} color={iconColor} />,
    },
    {
      label: 'Salary Deposit',
      date: 'Feb 5, 2024',
      amount: 18000.8,
      type: 'credit',
      icon: <Ionicons name="wallet-outline" size={globalStyle.icon.size} color={iconColor} />,
    },
    {
      label: 'Walmart Superstore',
      date: 'Feb 12, 2024',
      amount: 40.8,
      type: 'credit',
      icon: <Ionicons name="bag-outline" size={globalStyle.icon.size} color={iconColor} />,
    },
    {
      label: "McDonald's",
      date: 'Feb 11, 2024',
      amount: 180.8,
      type: 'debit',
      icon: <Ionicons name="fast-food-outline" size={globalStyle.icon.size} color={iconColor} />,
    },
    {
      label: 'Shell Gas Station',
      date: 'Feb 10, 2024',
      amount: 45.8,
      type: 'debit',
      icon: <Ionicons name="car-outline" size={globalStyle.icon.size} color={iconColor} />,
    },
    {
      label: 'Rent Payment',
      date: 'Feb 9, 2024',
      amount: 1800.8,
      type: 'debit',
      icon: <Ionicons name="home-outline" size={globalStyle.icon.size} color={iconColor} />,
    },
    {
      label: 'Salary Deposit',
      date: 'Feb 5, 2024',
      amount: 18000.8,
      type: 'credit',
      icon: <Ionicons name="wallet-outline" size={globalStyle.icon.size} color={iconColor} />,
    },
    {
      label: 'Walmart Superstore',
      date: 'Feb 12, 2024',
      amount: 40.8,
      type: 'credit',
      icon: <Ionicons name="bag-outline" size={globalStyle.icon.size} color={iconColor} />,
    },
    {
      label: "McDonald's",
      date: 'Feb 11, 2024',
      amount: 180.8,
      type: 'debit',
      icon: <Ionicons name="fast-food-outline" size={globalStyle.icon.size} color={iconColor} />,
    },
    {
      label: 'Shell Gas Station',
      date: 'Feb 10, 2024',
      amount: 45.8,
      type: 'debit',
      icon: <Ionicons name="car-outline" size={globalStyle.icon.size} color={iconColor} />,
    },
    {
      label: 'Rent Payment',
      date: 'Feb 9, 2024',
      amount: 1800.8,
      type: 'debit',
      icon: <Ionicons name="home-outline" size={globalStyle.icon.size} color={iconColor} />,
    },
    {
      label: 'Salary Deposit',
      date: 'Feb 5, 2024',
      amount: 18000.8,
      type: 'credit',
      icon: <Ionicons name="wallet-outline" size={globalStyle.icon.size} color={iconColor} />,
    },
    {
      label: 'Walmart Superstore',
      date: 'Feb 12, 2024',
      amount: 40.8,
      type: 'credit',
      icon: <Ionicons name="bag-outline" size={globalStyle.icon.size} color={iconColor} />,
    },
    {
      label: "McDonald's",
      date: 'Feb 11, 2024',
      amount: 180.8,
      type: 'debit',
      icon: <Ionicons name="fast-food-outline" size={globalStyle.icon.size} color={iconColor} />,
    },
    {
      label: 'Shell Gas Station',
      date: 'Feb 10, 2024',
      amount: 45.8,
      type: 'debit',
      icon: <Ionicons name="car-outline" size={globalStyle.icon.size} color={iconColor} />,
    },
    {
      label: 'Rent Payment',
      date: 'Feb 9, 2024',
      amount: 1800.8,
      type: 'debit',
      icon: <Ionicons name="home-outline" size={globalStyle.icon.size} color={iconColor} />,
    },
    {
      label: 'Salary Deposit',
      date: 'Feb 5, 2024',
      amount: 18000.8,
      type: 'credit',
      icon: <Ionicons name="wallet-outline" size={globalStyle.icon.size} color={iconColor} />,
    },
    {
      label: 'Walmart Superstore',
      date: 'Feb 12, 2024',
      amount: 40.8,
      type: 'credit',
      icon: <Ionicons name="bag-outline" size={globalStyle.icon.size} color={iconColor} />,
    },
    {
      label: "McDonald's",
      date: 'Feb 11, 2024',
      amount: 180.8,
      type: 'debit',
      icon: <Ionicons name="fast-food-outline" size={globalStyle.icon.size} color={iconColor} />,
    },
    {
      label: 'Shell Gas Station',
      date: 'Feb 10, 2024',
      amount: 45.8,
      type: 'debit',
      icon: <Ionicons name="car-outline" size={globalStyle.icon.size} color={iconColor} />,
    },
    {
      label: 'Rent Payment',
      date: 'Feb 9, 2024',
      amount: 1800.8,
      type: 'debit',
      icon: <Ionicons name="home-outline" size={globalStyle.icon.size} color={iconColor} />,
    },
    {
      label: 'Salary Deposit',
      date: 'Feb 5, 2024',
      amount: 18000.8,
      type: 'credit',
      icon: <Ionicons name="wallet-outline" size={globalStyle.icon.size} color={iconColor} />,
    },
    {
      label: 'Walmart Superstore',
      date: 'Feb 12, 2024',
      amount: 40.8,
      type: 'credit',
      icon: <Ionicons name="bag-outline" size={globalStyle.icon.size} color={iconColor} />,
    },
    {
      label: "McDonald's",
      date: 'Feb 11, 2024',
      amount: 180.8,
      type: 'debit',
      icon: <Ionicons name="fast-food-outline" size={globalStyle.icon.size} color={iconColor} />,
    },
    {
      label: 'Shell Gas Station',
      date: 'Feb 10, 2024',
      amount: 45.8,
      type: 'debit',
      icon: <Ionicons name="car-outline" size={globalStyle.icon.size} color={iconColor} />,
    },
    {
      label: 'Rent Payment',
      date: 'Feb 9, 2024',
      amount: 1800.8,
      type: 'debit',
      icon: <Ionicons name="home-outline" size={globalStyle.icon.size} color={iconColor} />,
    },
    {
      label: 'Salary Deposit',
      date: 'Feb 5, 2024',
      amount: 18000.8,
      type: 'credit',
      icon: <Ionicons name="wallet-outline" size={globalStyle.icon.size} color={iconColor} />,
    },
  ];

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
          <BackWithTitle onBackClick={() => router.push('/bills')} title="Statements" />
        </View>

        {/* card */}
        <View className="my-4 bg-blue-600 py-8 px-6 flex flex-row justify-between items-center">
          <View>
            <Title size="large" fonts="poppins-semibold" className="text-white">
              Balance
            </Title>
            <Title size="3xl" fonts="inter-bold" className="text-white">
              ₹ 24,345.00
            </Title>
          </View>
          <View>
            <AntDesign
              name="arrowdown"
              size={globalStyle.icon.size + 6}
              color={globalStyle.colors.white}
            />
          </View>
        </View>

        {/* header */}
        <StickyHeader iconColor={iconColor} />

        {/* statement list */}
        <View>
          {transactionList.map((item, index) => {
            const { icon, ...filterItem } = item;
            return (
              <Pressable
                key={index}
                className="p-4 border-b border-b-gray-200 dark:border-b-gray-800"
                onPress={() =>
                  router.push({
                    pathname: '/statement-info',
                    params: filterItem,
                  })
                }
              >
                <View className="flex flex-row justify-between items-center gap-3">
                  <View className="flex flex-row justify-start items-center gap-3">
                    <View className="bg-gray-100 dark:bg-gray-800 rounded-full p-1.5">{icon}</View>
                    <View>
                      <Title>{item.label}</Title>
                      <Title>{item.date}</Title>
                    </View>
                  </View>
                  <View>
                    <Title
                      fonts="poppins-medium"
                      className={cn({
                        'text-red-500 dark:text-red-500': item.type === 'debit',
                        'text-green-500 dark:text-green-500': item.type === 'credit',
                      })}
                    >{`₹ ${item.amount}`}</Title>
                  </View>
                </View>
              </Pressable>
            );
          })}
        </View>
      </Container>
    </StickyTopHeader>
  );
};

export default StatementList;
