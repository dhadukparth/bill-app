import router from '@/router';
import { Stack } from 'expo-router';
import React from 'react';

const StackLayout = () => {
  return (
    <Stack>
      {/* Main Screen */}
      <Stack.Screen name={router.stack.home} options={{ title: 'Welcome', headerShown: false }} />

      {/* Authentication Screens - Prefix with (auth)/ */}
      <Stack.Screen name={router.stack.login} options={{ title: 'Login', headerShown: false }} />
      <Stack.Screen
        name={router.stack.forgotpassword}
        options={{ title: 'Forgot Password', headerShown: false }}
      />
      <Stack.Screen
        name={router.stack.verifyemail}
        options={{ title: 'Verify Email', headerShown: false }}
      />
      <Stack.Screen
        name={router.stack.resetpassword}
        options={{ title: 'Reset Password', headerShown: false }}
      />

      {/* Settings Screens - Prefix with (setting)/ */}
      <Stack.Screen name="(setting)/profile" options={{ title: 'Profile', headerShown: false }} />
      <Stack.Screen
        name={router.stack.changepassword}
        options={{ title: 'Change Password', headerShown: false }}
      />
      <Stack.Screen
        name={router.stack.language}
        options={{ title: 'Language', headerShown: false }}
      />
      <Stack.Screen name={router.stack.theme} options={{ title: 'Theme', headerShown: false }} />
      <Stack.Screen
        name={router.stack.termsCondition}
        options={{ title: 'Terms & Condition', headerShown: false }}
      />
      <Stack.Screen
        name={router.stack.helpCenter}
        options={{ title: 'Help Center', headerShown: false }}
      />

      {/* customer screen */}
      <Stack.Screen
        name={router.stack.newCustomer}
        options={{ title: 'New Customer', headerShown: false }}
      />
      <Stack.Screen
        name={router.stack.editCustomer}
        options={{ title: 'Edit Customer', headerShown: false }}
      />

      {/* bill screen */}
      <Stack.Screen
        name={router.stack.statementList}
        options={{ title: 'Statement List', headerShown: false }}
      />
      <Stack.Screen
        name={router.stack.statementInfo}
        options={{ title: 'Statement Information', headerShown: false }}
      />
      <Stack.Screen
        name={router.stack.newStatement}
        options={{ title: 'New Bill', headerShown: false }}
      />
      <Stack.Screen
        name={router.stack.editStatement}
        options={{ title: 'Edit Bill', headerShown: false }}
      />
    </Stack>
  );
};

export default StackLayout;
