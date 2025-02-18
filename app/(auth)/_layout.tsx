import { Stack } from 'expo-router';
import React from 'react';
import { useAuth } from '../../providers/AuthProvider';

const AuthRouters = () => {
  const { user } = useAuth();
  console.log('USER', user);
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {!user ? (
        <>
          <Stack.Screen name="(stack)" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </>
      ) : (
        <>
          <Stack.Screen name="/welcome" options={{ headerShown: false }} />
          <Stack.Screen name="/index" options={{ headerShown: false }} />
          <Stack.Screen
            name="/forgot-password"
            options={{ title: 'Forgot Password', headerShown: false }}
          />
          <Stack.Screen
            name="/verifyemail"
            options={{ title: 'Verify Email', headerShown: false }}
          />
          <Stack.Screen
            name="/resetpassword"
            options={{ title: 'Reset Password', headerShown: false }}
          />
        </>
      )}
    </Stack>
  );
};

export default AuthRouters;
