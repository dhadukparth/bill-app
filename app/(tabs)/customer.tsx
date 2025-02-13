import Container from '@/components/ui/Container';
import { Title } from '@/components/ui/HeadText';
import InputBox from '@/components/ui/Input/InputBox';
import globalStyle from '@/utils/globalStyle';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { Link, router } from 'expo-router';
import React from 'react';
import { Image, Pressable, ScrollView, View } from 'react-native';

const Customer = () => {
  const customerList = [
    {
      id: 1,
      firstName: 'Cullen',
      lastName: 'Corrado',
      email: 'ccorrado0@wordpress.org',
      image:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg',
    },
    {
      id: 2,
      firstName: 'Benedikta',
      lastName: 'Orteu',
      email: 'borteu1@usa.gov',
      image:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg',
    },
    {
      id: 3,
      firstName: 'Welsh',
      lastName: 'Spottiswood',
      email: 'wspottiswood2@blogtalkradio.com',
      image:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg',
    },
    {
      id: 4,
      firstName: 'Adolpho',
      lastName: 'Pilbury',
      email: 'apilbury3@usda.gov',
      image:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg',
    },
    {
      id: 5,
      firstName: 'Carce',
      lastName: 'Picheford',
      email: 'cpicheford4@cam.ac.uk',
      image:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg',
    },
    {
      id: 6,
      firstName: 'Giorgi',
      lastName: 'Jacox',
      email: 'gjacox5@fda.gov',
      image:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg',
    },
    {
      id: 7,
      firstName: 'Aryn',
      lastName: 'Brilleman',
      email: 'abrilleman6@ibm.com',
      image:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg',
    },
    {
      id: 8,
      firstName: 'Brook',
      lastName: 'Brandom',
      email: 'bbrandom7@irs.gov',
      image:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg',
    },
    {
      id: 9,
      firstName: 'Ferdinande',
      lastName: 'Klemmt',
      email: 'fklemmt8@wired.com',
      image:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg',
    },
    {
      id: 10,
      firstName: 'Ronda',
      lastName: 'Kopman',
      email: 'rkopman9@yahoo.co.jp',
      image:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg',
    },
    {
      id: 11,
      firstName: 'Redd',
      lastName: 'Goldsmith',
      email: 'rgoldsmitha@hc360.com',
      image:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg',
    },
    {
      id: 12,
      firstName: 'Consolata',
      lastName: 'Ludgate',
      email: 'cludgateb@vinaora.com',
      image:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg',
    },
    {
      id: 13,
      firstName: 'Roby',
      lastName: 'Grocott',
      email: 'rgrocottc@zdnet.com',
      image:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg',
    },
    {
      id: 14,
      firstName: 'Fernando',
      lastName: 'Beert',
      email: 'fbeertd@ucla.edu',
      image:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg',
    },
    {
      id: 15,
      firstName: 'Liv',
      lastName: 'McGreary',
      email: 'lmcgrearye@moonfruit.com',
      image:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg',
    },
  ];

  const [searchText, setSearchText] = React.useState('');

  const handleOnchange = React.useCallback((changeText: string) => {
    setSearchText(changeText);
  }, []);

  return (
    <Container className="p-0">
      <View className="pt-20">
        <View>
          <Pressable
            className="absolute bottom-0 right-0 bg-blue-500"
            onPress={() => router.push('/new-customer')}
          >
            <Feather name="plus" size={globalStyle.icon.size} color={globalStyle.icon.color} />
          </Pressable>
        </View>
        <View className="p-4">
          <View>
            <Title size="2xl" fonts="inter-semibold">
              Customers
            </Title>
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
        <ScrollView>
          <View className="mb-12">
            {customerList.map((item, index) => (
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
                          uri: item.image,
                        }}
                        alt="not found"
                        className="size-full rounded-full"
                      />
                    </View>
                    <View className="w-11/12">
                      <Title size="large" fonts="inter-medium">
                        {item.firstName + ' ' + item.lastName}
                      </Title>
                      <Title size="small" fonts="poppins-regular">
                        {item.email}
                      </Title>
                    </View>
                  </View>
                </View>
              </Link>
            ))}
          </View>
        </ScrollView>
      </View>
    </Container>
  );
};

export default React.memo(Customer);
