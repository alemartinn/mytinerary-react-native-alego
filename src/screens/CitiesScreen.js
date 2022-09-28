import React from 'react';
import { ImageBackground, View, StyleSheet } from 'react-native'
import CityCards from '../components/CityCards'

const CitiesScreen = () => {
    const image = require('../../assets//backgroundHero.png')
    return (  
        <ImageBackground source={image} resizeMode="cover" style={styles.container}>
            <View>
                <CityCards/>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      justifyContent: 'center',
    }
})
 
export default CitiesScreen;