import RefreshButton from '@/components/ui/Button/RefreshButton';
import Container from '@/components/ui/Container';
import { Title } from '@/components/ui/HeadText';
import InputBox from '@/components/ui/Input/InputBox';
import Loader from '@/components/ui/Loader';
import { readCustomers } from '@/lib/filesystem/customer';
import globalStyle from '@/utils/globalStyle';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { Link, router } from 'expo-router';
import React from 'react';
import { Image, Pressable, ScrollView, View } from 'react-native';

const Customer = () => {
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
    <Container className="p-0">
      <View className="pt-10">
        <View className="p-4">
          <View className="flex flex-row justify-between items-center gap-4">
            <Title size="2xl" fonts="inter-semibold">
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
              <RefreshButton onClick={fetchCustomerList} />
            </View>
          </View>
          <View className="mt-4">
            <InputBox
              placeholder="Search customer"
              value={searchText}
              onChangeText={handleOnchange}
              icon={
                <Feather
                  name="search"
                  size={globalStyle.icon.size}
                  color={globalStyle.icon.color}
                />
              }
              extraIcon={
                searchText.length ? (
                  <AntDesign
                    name="close"
                    size={globalStyle.icon.size}
                    color={globalStyle.icon.color}
                    onPress={() => setSearchText('')}
                  />
                ) : null
              }
            />
          </View>
        </View>
        {loading ? (
          <View className="my-4">
            <Loader />
          </View>
        ) : (
          <View>
            {filterCustomerList?.length ? (
              <ScrollView>
                <View className="mb-12">
                  {filterCustomerList?.map((item: any, index) => (
                    <Link
                      key={index}
                      href={{
                        pathname: '/edit-customer',
                        params: item,
                      }}
                    >
                      <View className="flex flex-row  items-center p-4 border-b border-gray-700">
                        <View className="flex flex-row justify-start items-center gap-4">
                          <View className="size-14 bg-gray-700 border border-white rounded-full">
                            <Image
                              source={{
                                uri:
                                  item?.image ??
                                  'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg',
                              }}
                              alt="not found"
                              className="size-full rounded-full"
                            />
                          </View>
                          <View className="w-11/12">
                            <Title size="large" fonts="inter-medium">
                              {item?.firstName + ' ' + item?.lastName}
                            </Title>
                            <Title size="small" fonts="poppins-regular">
                              {item?.email}
                            </Title>
                          </View>
                        </View>
                      </View>
                    </Link>
                  ))}
                </View>
              </ScrollView>
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
