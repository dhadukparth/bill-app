import Container from '@/components/ui/Container';
import { Title } from '@/components/ui/HeadText';
import InputBox from '@/components/ui/Input/InputBox';
import Loader from '@/components/ui/Loader';
import { readCustomers } from '@/lib/filesystem/customer';
import { useGlobalStore } from '@/store/global';
import { mergeString } from '@/utils';
import globalStyle from '@/utils/globalStyle';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { router } from 'expo-router';
import React from 'react';
import { FlatList, Image, Pressable, RefreshControl, View } from 'react-native';

const Customer = () => {
  const getCurrentTheme = useGlobalStore((state) => state.global.theme);
  const iconColor =
    getCurrentTheme === 'dark' ? globalStyle.colors.white : globalStyle.colors.black;

  const [searchText, setSearchText] = React.useState('');
  const [customerList, setCustomerList] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const searchUsers = (searchTerm: string) => {
    if (!searchTerm?.length) return customerList;

    return customerList
      .map((user: any) => ({
        fullName: `${user.firstName}${user.lastName}`,
        withSpaceFullName: `${user.firstName} ${user.lastName}`,
        ...user,
      }))
      .filter((user: any) =>
        Object.values(user).some((value: any) =>
          value.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
  };

  const handleOnchange = React.useCallback((changeText: string) => {
    setSearchText(changeText);
  }, []);

  const filterCustomerList = React.useMemo(() => {
    return searchUsers(searchText);
  }, [customerList, searchText]);

  const fetchCustomerList = async () => {
    setLoading(true);
    const result = await readCustomers();
    setCustomerList(result);
    setLoading(false);
  };

  React.useEffect(() => {
    fetchCustomerList();
  }, []);

  return (
    <Container className="px-0">
      <View className="py-4">
        <View className="p-4">
          <View className="flex flex-row justify-between items-center gap-4">
            <Title size="3xl" fonts="inter-bold">
              Customers
            </Title>
            <View className="flex flex-row justify-end items-center gap-4">
              <Pressable
                className="bg-blue-500 p-2 rounded-lg"
                onPress={() => router.push('/new-customer')}
              >
                <Feather
                  name="plus"
                  size={globalStyle.icon.size}
                  color={globalStyle.colors.white}
                />
              </Pressable>
            </View>
          </View>
          <View className="mt-4">
            <InputBox
              placeholder="Search customer"
              value={searchText}
              onChangeText={handleOnchange}
              icon={<Feather name="search" size={globalStyle.icon.size} color={iconColor} />}
              extraIcon={
                searchText.length ? (
                  <AntDesign
                    name="close"
                    size={globalStyle.icon.size}
                    color={iconColor}
                    onPress={() => setSearchText('')}
                  />
                ) : null
              }
            />
          </View>
        </View>
        {loading ? (
          <View className="my-4">
            <Loader color={iconColor} />
          </View>
        ) : (
          <View>
            {filterCustomerList?.length ? (
              <FlatList
                data={filterCustomerList}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                refreshControl={
                  <RefreshControl refreshing={loading} onRefresh={fetchCustomerList} />
                }
                renderItem={({ item }) => {
                  return (
                    <CustomerCard
                      imageUrl={item.image}
                      firstName={item.firstName}
                      lastName={item.lastName}
                      email={item.email}
                      onPress={() => {
                        router.push({
                          pathname: '/edit-customer',
                          params: item,
                        });
                      }}
                    />
                  );
                }}
              />
            ) : (
              <View className="flex flex-row justify-center items-center mt-8">
                <Title size="xl" fonts="poppins-semibold" className="text-gray-400">
                  Sorry! customer not found.
                </Title>
              </View>
            )}
          </View>
        )}
      </View>
    </Container>
  );
};

export default React.memo(Customer);

const CustomerCard = (props: {
  imageUrl: string;
  firstName: string;
  lastName: string;
  email: string;
  onPress?: () => void;
}) => {
  return (
    <Pressable onPress={props.onPress}>
      <View className="flex flex-row  items-center p-4 border-b border-b-gray-200 dark:border-b-gray-800">
        <View className="flex flex-row justify-start items-center gap-4">
          <View className="size-14 bg-gray-700 border border-white rounded-full">
            <Image
              source={{
                uri:
                  props?.imageUrl ??
                  'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg',
              }}
              alt="not found"
              className="size-full rounded-full"
            />
          </View>
          <View className="w-11/12">
            <Title size="large" fonts="inter-medium">
              {mergeString([props.firstName, props.lastName])}
            </Title>
            <Title size="small" fonts="poppins-regular">
              {props?.email}
            </Title>
          </View>
        </View>
      </View>
    </Pressable>
  );
};
