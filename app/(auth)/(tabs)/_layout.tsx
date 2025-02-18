import { useGlobalStore } from '@/store/global';
import { conditionCheck } from '@/utils';
import globalStyle from '@/utils/globalStyle';
import { AntDesign } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Tabs } from 'expo-router';
import React from 'react';

const TabsLayout = () => {
  const getCurrentTheme = useGlobalStore((state) => state.global.theme);

  const iconSize = globalStyle.icon.size + 5;
  const iconColor = conditionCheck(
    getCurrentTheme === 'light',
    globalStyle.colors.black,
    globalStyle.colors.white
  );

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: getCurrentTheme === 'light' ? '#FFFFFF' : '#000000',
          height: 50,
        },
        tabBarItemStyle: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          fontFamily: 'Inter-SemiBold',
          display: 'none',
        },
        tabBarIconStyle: {
          width: '100%',
          height: '100%',
        },
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="home" size={iconSize} color={focused ? '#3b82f6' : iconColor} />
          ),
        }}
      />
      <Tabs.Screen
        name="bills"
        options={{
          headerShown: false,
          title: 'Bills',
          tabBarIcon: ({ focused }) => (
            <AntDesign name="copy1" size={iconSize} color={focused ? '#3b82f6' : iconColor} />
          ),
        }}
      />
      <Tabs.Screen
        name="customer"
        options={{
          headerShown: false,
          title: 'Customer',
          tabBarIcon: ({ focused }) => (
            <FontAwesome5 name="users" size={iconSize} color={focused ? '#3b82f6' : iconColor} />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          headerShown: false,
          title: 'Settings',
          tabBarIcon: ({ focused }) => (
            <Feather name="settings" size={iconSize} color={focused ? '#3b82f6' : iconColor} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
