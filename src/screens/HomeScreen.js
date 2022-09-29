import React from 'react';
import { ImageBackground, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useFonts, KaushanScript_400Regular } from '@expo-google-fonts/kaushan-script'
import Button from '../components/Button';


const HomeScreen = ({navigation}) => {
    let [fontsLoaded, error] = useFonts({KaushanScript_400Regular});
    if(!fontsLoaded) {
        return null
    }
    const image = require('../../assets//backgroundHero.png')
    return (  
        <ImageBackground source={image} resizeMode="cover" style={styles.container}>
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}> MyTinerary </Text>
            <Button 
            title="TRAVEL" 
            onPress={() => navigation.navigate('Cities')}
            />
            <StatusBar style="auto"/>
        </SafeAreaView>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
        height:140,
        fontSize: 80,
        fontFamily: 'KaushanScript_400Regular',
        color: '#fff',
        textShadowOffset:{height:7, width:2},
        textShadowRadius:5,
        textShadowColor: 'black'
    },
    btnSeeMore:{
      color: '#c49'
    }
  });
export default HomeScreen;