import globalStyle, { getCurrentTheme } from '@/utils/globalStyle';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Tabs } from 'expo-router';
import React from 'react';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: getCurrentTheme === 'light' ? '#FFFFFF' : '#000000',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          fontFamily: 'Inter-SemiBold',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: () => (
            <FontAwesome
              name="home"
              size={globalStyle.icon.size}
              color={getCurrentTheme === 'light' ? '#000000' : '#FFFFFF'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="customer"
        options={{
          headerShown: false,
          title: 'Customer',
          tabBarIcon: () => (
            <FontAwesome5
              name="users"
              size={globalStyle.icon.size}
              color={getCurrentTheme === 'light' ? '#000000' : '#FFFFFF'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          headerShown: false,
          title: 'Settings',
          tabBarIcon: (focused) => (
            <Feather
              name="settings"
              size={globalStyle.icon.size}
              color={getCurrentTheme === 'light' ? '#000000' : '#FFFFFF'}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
