import { Stack } from 'expo-router'
import React from 'react'
import { StatusBar } from 'react-native'

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(stack)" options={{ headerShown: false }} />
    </Stack>
  )
}

export default RootLayout
