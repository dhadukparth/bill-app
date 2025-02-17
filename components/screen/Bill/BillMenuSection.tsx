import { Title } from '@/components/ui/HeadText';
import appRouter from '@/router/appRouter';
import { useGlobalStore } from '@/store/global';
import { conditionCheck } from '@/utils';
import globalStyle from '@/utils/globalStyle';
import { Feather, FontAwesome6, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Pressable, View } from 'react-native';

type buttonsListType = {
  label: string;
  url: any;
  icon: React.ReactNode;
};

const BillMenuSection = () => {
  const getCurrentTheme = useGlobalStore((state) => state.global.theme);

  const iconColor = conditionCheck(
    getCurrentTheme === 'dark',
    globalStyle.colors.white,
    globalStyle.colors.black
  );

  const buttonIconSize = globalStyle.icon.size + 5;

  const buttonsList: buttonsListType[] = [
    {
      label: 'New Bill',
      url: appRouter.stack.newStatement,
      icon: <FontAwesome6 name="credit-card" size={buttonIconSize} color={iconColor} />,
    },
    {
      label: 'Customer',
      url: appRouter.stack.newCustomer,
      icon: <Feather name="users" size={buttonIconSize} color={iconColor} />,
    },
    {
      label: 'History',
      url: appRouter.stack.history,
      icon: <MaterialIcons name="history" size={buttonIconSize} color={iconColor} />,
    },
  ];
  return (
    <View className="py-4 flex flex-row flex-wrap gap-4">
      {buttonsList.map((item, index) => (
        <Pressable
          key={index}
          className="size-28 bg-gray-200 dark:bg-gray-800 rounded-lg flex justify-center items-center"
          onPress={() => router.push(item.url)}
        >
          <View className="flex justify-center items-center gap-4">
            <View>{item.icon}</View>
            <Title className="w-28 text-center">{item.label}</Title>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default React.memo(BillMenuSection);
