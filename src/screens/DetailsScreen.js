import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { useGetAllItinerariesCityQuery } from '../../features/itinerariesAPI';
import DetailsCard from '../components/DetailsCard';
import Itineraries from '../components/Itineraries';

const DetailsScreen = ({ route, navigation }) => {
    
    const { itemId } = route.params;
    const image = require('../../assets//backgroundHero.png')

    return (  
        <ImageBackground source={image} resizeMode="cover" style={styles.container}>
                <DetailsCard itemId={itemId}/>
                <Itineraries useGetAllItinerariesQuery={useGetAllItinerariesCityQuery} itemId={itemId}/>
        </ImageBackground>
    );
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
})
export default DetailsScreen;