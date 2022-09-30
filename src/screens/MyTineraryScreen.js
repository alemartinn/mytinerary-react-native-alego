import React from 'react'
import { ImageBackground, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux';
import { useGetAllItinerariesUserQuery } from '../../features/itinerariesAPI';
import Itineraries from '../components/Itineraries';

function MyTineraryScreen() {
    const image = require('../../assets//backgroundHero.png')
    const userRedux = useSelector(state => state.user.u);

  
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.container}>
            <Itineraries useGetAllItinerariesQuery={useGetAllItinerariesUserQuery} itemId={userRedux.id}/>
        </ImageBackground>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
})

export default MyTineraryScreen
