import React from 'react'
import { ImageBackground, Text, StyleSheet } from 'react-native'

export default function MyTineraryScreen() {
    const image = require('../../assets//backgroundHero.png')
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.container}>
            <Text>My Itinerary</Text>
        </ImageBackground>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      justifyContent: 'center',
    }
})
