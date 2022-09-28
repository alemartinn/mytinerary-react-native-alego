import React from 'react';
import { ImageBackground, View, Text, StyleSheet } from 'react-native'

const CitiesScreen = () => {
    const image = require('../../assets//backgroundHero.png')
    return (  
        <ImageBackground source={image} resizeMode="cover" style={styles.container}>
            <View>
                <Text>
                Cities Screen
                </Text>
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