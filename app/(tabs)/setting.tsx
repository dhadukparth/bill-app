import Container from '@/components/ui/Container';
import { Title } from '@/components/ui/HeadText';
import { cn } from '@/utils';
import globalStyle from '@/utils/globalStyle';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link, router } from 'expo-router';
import React from 'react';
import { Image, Pressable, ScrollView, View } from 'react-native';

type SettingMenuListType = {
  sectionTitle: string;
  sectionMenus: {
    title: string;
    icon: React.ReactNode;
    link: any;
  }[];
};

const Setting = () => {
  const settingMenuList: SettingMenuListType[] = [
    {
      sectionTitle: 'Account & Security',
      sectionMenus: [
        {
          title: 'Profile',
          link: '/profile',
          icon: <Feather name="user" size={globalStyle.icon.size} color={globalStyle.icon.color} />,
        },
        {
          title: 'Change Password',
          link: '/changepassword',
          icon: <Feather name="lock" size={globalStyle.icon.size} color={globalStyle.icon.color} />,
        },
      ],
    },
    {
      sectionTitle: 'Preferences',
      sectionMenus: [
        {
          title: 'Language',
          link: '/language',
          icon: (
            <Ionicons name="language" size={globalStyle.icon.size} color={globalStyle.icon.color} />
          ),
        },
        {
          title: 'Dark Mode',
          link: '/theme',
          icon: <Feather name="moon" size={globalStyle.icon.size} color={globalStyle.icon.color} />,
        },
      ],
    },
    {
      sectionTitle: 'Support & Legal',
      sectionMenus: [
        {
          title: 'Terms & Conditions',
          link: '/terms-condition',
          icon: (
            <Ionicons
              name="document-text"
              size={globalStyle.icon.size}
              color={globalStyle.icon.color}
            />
          ),
        },
        {
          title: 'Help Center',
          link: '/helpcenter',
          icon: (
            <FontAwesome6
              name="question-circle"
              size={globalStyle.icon.size}
              color={globalStyle.icon.color}
            />
          ),
        },
      ],
    },
    {
      sectionTitle: 'Logout',
      sectionMenus: [
        {
          title: 'Logout',
          icon: (
            <MaterialIcons
              name="logout"
              size={globalStyle.icon.size}
              color={globalStyle.icon.color}
            />
          ),
          link: '/',
        },
      ],
    },
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <View className="mt-4">
          <View>
            <Title size="3xl" fonts="inter-bold">
              Settings
            </Title>
          </View>
          <Link href="/profile" className="my-8">
            <View className="flex flex-row justify-start items-center gap-4">
              <View className="size-20">
                <Image
                  source={{
                    uri: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg',
                  }}
                  alt="not found"
                  className="size-full rounded-full"
                />
              </View>
              <View>
                <Title size="xl" fonts="inter-bold">
                  Parth Dhaduk
                </Title>
                <Title size="default" fonts="poppins-regular">
                  Parth@gmail.com
                </Title>
              </View>
            </View>
          </Link>
          <View className="mb-6">
            {settingMenuList.map((item, index) => (
              <View
                key={index}
                className="bg-white dark:bg-gray-800 mb-6 rounded-md border border-gray-200"
              >
                <Title fonts="inter-semibold" className="p-4">
                  {item.sectionTitle}
                </Title>
                <View>
                  {item.sectionMenus.map((subMenu, subMenuIndex) => (
                    <Pressable
                      key={subMenuIndex}
                      className={cn(
                        'flex flex-row justify-between items-center py-3 px-4 border-b border-b-gray-200 dark:border-b-gray-950',
                        {
                          'border-b-0': subMenuIndex === item.sectionMenus.length - 1,
                        }
                      )}
                      onPress={() =>
                        router.push({
                          pathname: subMenu.link,
                        })
                      }
                    >
                      <View className="flex flex-row justify-start items-center gap-3">
                        <View className="p-2 bg-green-300/50 rounded-full">{subMenu.icon}</View>
                        <Title fonts="poppins-medium">{subMenu.title}</Title>
                      </View>
                      <View>
                        <Entypo
                          name="chevron-small-right"
                          size={globalStyle.icon.size}
                          color={globalStyle.icon.color}
                        />
                      </View>
                    </Pressable>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>
      </Container>
    </ScrollView>
  );
};

export default Setting;
