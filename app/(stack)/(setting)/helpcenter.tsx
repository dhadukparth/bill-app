import BackWithTitle from '@/components/ui/Button/BackWithTitle';
import Container from '@/components/ui/Container';
import { Title } from '@/components/ui/HeadText';
import InputBox from '@/components/ui/Input/InputBox';
import { useGlobalStore } from '@/store/global';
import globalStyle from '@/utils/globalStyle';
import { AntDesign } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Fontisto from '@expo/vector-icons/Fontisto';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import React from 'react';
import { ScrollView, View } from 'react-native';

const HelpCenterScreen = () => {
  const getCurrentTheme = useGlobalStore((state) => state.global.theme);
  const iconColor =
    getCurrentTheme === 'dark' ? globalStyle.colors.white : globalStyle.colors.black;

  const iconSize = globalStyle.icon.size + 8;

  const popularTopicsList = [
    {
      title: 'Account',
      link: '',
      icon: <Feather name="user" size={iconSize} color={iconColor} />,
    },
    {
      title: 'Privacy',
      link: '',
      icon: <Ionicons name="shield-checkmark-outline" size={iconSize} color={iconColor} />,
    },
    {
      title: 'Security',
      link: '',
      icon: <Feather name="lock" size={iconSize} color={iconColor} />,
    },
    {
      title: 'Settings',
      link: '',
      icon: <Feather name="settings" size={iconSize} color={iconColor} />,
    },
  ];

  const helpCategoryList = [
    {
      title: 'Getting Started',
      description: 'Learn the basics and get started quickly',
      link: '',
      icon: <FontAwesome6 name="question-circle" size={iconSize - 4} color={iconColor} />,
    },
    {
      title: 'Account & Security',
      description: 'Manage your account settings and security',
      link: '',
      icon: <Ionicons name="shield-checkmark-outline" size={iconSize - 4} color={iconColor} />,
    },
    {
      title: 'Payments & Billing',
      description: 'Payment methods, refunds, and billing issues',
      link: '',
      icon: <Ionicons name="wallet-outline" size={iconSize - 4} color={iconColor} />,
    },
    {
      title: 'Privacy & Data',
      description: 'How we handle your data and privacy settings',
      link: '',
      icon: <Ionicons name="shield-checkmark-outline" size={iconSize - 4} color={iconColor} />,
    },
  ];

  const needHelpList = [
    {
      title: 'Chat',
      icon: <Ionicons name="chatbubble-outline" size={iconSize} color={iconColor} />,
    },
    {
      title: 'Email',
      icon: <Fontisto name="email" size={iconSize} color={iconColor} />,
    },
    {
      title: 'Call',
      icon: <Feather name="phone" size={iconSize} color={iconColor} />,
    },
  ];

  return (
    <ScrollView>
      <Container className="p-0">
        <View className="pt-20 p-4">
          <BackWithTitle title="Help Center" onBackClick={() => router.push('/setting')} />

          <View>
            <InputBox
              placeholder="Search for help"
              icon={<Feather name="search" size={globalStyle.icon.size} color={iconColor} />}
              extraIcon={<AntDesign name="close" size={globalStyle.icon.size} color={iconColor} />}
            />
          </View>

          {/* Popular topics section */}
          <View className="mt-4">
            <Title size="xl" fonts="inter-medium">
              Popular Topics
            </Title>
            <ScrollView horizontal={true}>
              <View className="mt-4 flex flex-row justify-start items-center gap-6">
                {popularTopicsList.map((item, index) => (
                  <View key={index} className="flex flex-col justify-center items-start gap-2">
                    <View className="bg-gray-100 dark:bg-gray-800 size-16 rounded-md flex justify-center items-center">
                      {item.icon}
                    </View>
                    <Title className="text-center">{item.title}</Title>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>

          {/* Help category list */}
          <View className="mt-4">
            <Title size="xl" fonts="inter-medium">
              Help Category
            </Title>
            <View className="mt-4">
              {helpCategoryList.map((item, index) => (
                <View key={index} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-3">
                  <View className="flex flex-row justify-start items-center gap-2">
                    <View className="flex flex-row justify-start items-center gap-3 w-11/12">
                      <View>{item.icon}</View>
                      <View>
                        <Title fonts="inter-medium">{item.title}</Title>
                        <Title
                          size="small"
                          fonts="poppins-regular"
                          className="dark:text-gray-400 w-11/12"
                        >
                          {item.description}
                        </Title>
                      </View>
                    </View>
                    <View>
                      <Entypo
                        name="chevron-small-right"
                        size={globalStyle.icon.size}
                        color={iconColor}
                      />
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>

          {/* still need help section */}
          <View className="mt-4">
            <Title size="xl" fonts="inter-medium">
              Still Need Help?
            </Title>
            <View className="mt-4 flex flex-row justify-between items-center gap-6">
              {needHelpList.map((item, index) => (
                <View key={index} className="flex flex-col justify-center items-center gap-2">
                  <View className="bg-gray-100 dark:bg-gray-800 size-24 rounded-md flex justify-center items-center">
                    {item.icon}
                  </View>
                  <Title className="text-center">{item.title}</Title>
                </View>
              ))}
            </View>
          </View>
        </View>
        <View className="bg-gray-100 dark:bg-gray-800 p-4 mt-4">
          <Title size="default" fonts="inter-medium" className="text-center">
            © 2024 Company Name. All rights reserved.
          </Title>
          <Title size="default" fonts="poppins-medium" className="text-center">
            Version 1.0.0
          </Title>
        </View>
      </Container>
    </ScrollView>
  );
};

export default HelpCenterScreen;
