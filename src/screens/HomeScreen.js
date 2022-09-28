import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
    return (  
            <SafeAreaView style={styles.container}>
                <Text style={styles.text}>Hi World</Text>
                <Text style={styles.text}>MyTinerary</Text>
                <Button
                    title="See more"
                    color="#c49"
                    style={styles.btnSeeMore}
                    accessibilityLabel='Learn more about this button'
                />
                <StatusBar style="auto"/>
                <Text>Home Screen 1</Text>
                <Text>Home Screen 2</Text>
                <Text>Home Screen 3</Text>
                <Text>Home Screen 4</Text>
                <Text>Home Screen 5</Text>
                <Text>Home Screen 6</Text>
                <Text>Home Screen 7</Text>
                <Text>Home Screen 8</Text>
                <Text>Home Screen 9</Text>
            </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      fontSize: 50,
      color: '#777'
    },
    btnSeeMore:{
      color: '#c49'
    }
  });  

export default HomeScreen;