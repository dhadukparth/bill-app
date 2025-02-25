import BackWithTitle from '@/components/ui/Button/BackWithTitle';
import Container from '@/components/ui/Container';
import { Title } from '@/components/ui/HeadText';
import InputBox from '@/components/ui/Input/InputBox';
import LetterAvater from '@/components/ui/LetterAvater';
import { createBillWithCustomer } from '@/lib/filesystem/bills';
import { useGlobalStore } from '@/store/global';
import { conditionCheck } from '@/utils';
import globalStyle from '@/utils/globalStyle';
import { AntDesign, Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { FlatList, Image, Pressable, RefreshControl, View } from 'react-native';

const HistoryScreen = () => {
  const getCurrentTheme = useGlobalStore((state) => state.global.theme);
  const iconColor = conditionCheck(
    getCurrentTheme === 'dark',
    globalStyle.colors.white,
    globalStyle.colors.black
  );

  const [loading, setLoading] = React.useState(false);
  const [historyList, setHistoryList] = React.useState([]);

  async function fetchAllHistory() {
    try {
      setLoading(true);
      const result = await createBillWithCustomer();
      if (result) {
        setHistoryList(result);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    fetchAllHistory();
  }, []);

  return (
    <Container>
      <View className="pt-6">
        <BackWithTitle title="History" />
      </View>
      <View>
        <View className="mt-4">
          <InputBox
            placeholder="Search..."
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

        <FlatList
          data={historyList}
          refreshControl={<RefreshControl refreshing={loading} onRefresh={fetchAllHistory} />}
          keyExtractor={(item, index) => index.toString()}
          className="mb-[135px]"
          showsVerticalScrollIndicator={false}
          renderItem={({ item }: any) => {
            return (
              <HistoryCard
                amount={item?.amount}
                billType={item?.billType}
                date={item?.date}
                firstName={item?.customer?.firstName}
                image={item?.customer?.image}
                lastName={item?.customer?.lastName}
                onPress={() => {
                  router.push({
                    pathname: '/statement-info',
                    params: {
                      customerId: item?.customer?.id,
                      statementId: item?.id,
                    },
                  });
                }}
              />
            );
          }}
          ListEmptyComponent={<Title>No history available.</Title>}
        />
      </View>
    </Container>
  );
};

export default HistoryScreen;

const HistoryCard = (props: {
  image: string;
  firstName: string;
  lastName: string;
  date: string;
  billType: string;
  amount: number;
  onPress: () => void;
}) => {
  return (
    <Pressable
      onPress={props.onPress}
      className="flex flex-row justify-between items-center px-4 py-3 border border-gray-200 dark:border-gray-800 rounded-xl my-2"
    >
      <View className="flex flex-row justify-start items-center gap-3">
        <View className="size-14 rounded-full overflow-hidden">
          {props?.image ? (
            <Image
              source={{
                uri: props?.image,
              }}
              alt="not found"
              className="size-full rounded-full"
            />
          ) : (
            <LetterAvater name={props?.firstName ?? ''} />
          )}
        </View>
        <View>
          <Title size="large" fonts="inter-semibold">
            {`${props?.firstName} ${props?.lastName}`}
          </Title>
          <Title size="default" fonts="poppins-regular">
            {props?.date}
          </Title>
        </View>
      </View>
      <View>
        <Title
          size="large"
          fonts="inter-bold"
          style={{
            color: props?.billType === 'credit' ? 'green' : 'red',
          }}
        >
          {`₹ ${props?.amount}`}
        </Title>
      </View>
    </Pressable>
  );
};
