import { Stack } from 'expo-router';
import React from 'react';

const StackLayout = () => {
  return (
    <Stack>
      {/* Main Screen */}
      <Stack.Screen name="index" options={{ title: 'Welcome', headerShown: false }} />

      {/* Authentication Screens - Prefix with (auth)/ */}
      <Stack.Screen name="(auth)/login" options={{ title: 'Login', headerShown: false }} />
      <Stack.Screen
        name="(auth)/forgotpassword"
        options={{ title: 'Forgot Password', headerShown: false }}
      />
      <Stack.Screen
        name="(auth)/verifyemail"
        options={{ title: 'Verify Email', headerShown: false }}
      />
      <Stack.Screen
        name="(auth)/resetpassword"
        options={{ title: 'Reset Password', headerShown: false }}
      />

      {/* Settings Screens - Prefix with (setting)/ */}
      <Stack.Screen name="(setting)/profile" options={{ title: 'Profile', headerShown: false }} />
      <Stack.Screen
        name="(setting)/changepassword"
        options={{ title: 'Change Password', headerShown: false }}
      />
      <Stack.Screen name="(setting)/language" options={{ title: 'Language', headerShown: false }} />
      <Stack.Screen name="(setting)/theme" options={{ title: 'Theme', headerShown: false }} />
      <Stack.Screen
        name="(setting)/terms-condition"
        options={{ title: 'Terms & Condition', headerShown: false }}
      />
      <Stack.Screen
        name="(setting)/helpcenter"
        options={{ title: 'Help Center', headerShown: false }}
      />
    </Stack>
  );
};

export default StackLayout;
