import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import {StatusBar} from 'expo-status-bar'
import Slider from '@/components/Slider'

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style='light'  />
      {/* <Slider>
        <View>Welcome</View>
        <View></View>
      </Slider> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
})

export default WelcomeScreen
