import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Alert, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useSignOutMutation } from '../../features/authAPi';
import Button from '../components/Button';
import { removeUser } from '../../features/userSlice';

const SignOut = ({navigation}) => {
    
    const image = require('../../assets//backgroundHero.png')

    // const getUser = async () => {
    //     const userStorage = await AsyncStorage.getItem('user')
    //     return userStorage
    // }
    // let userStorage = getUser();

    // const userRedux = useSelector(state => state.user.u);
    // console.log(userRedux)

    const userRedux = useSelector(state => state.user.u);
    const dispatch = useDispatch()

    const [signOut] = useSignOutMutation();

    const AlertSignOut = () => {
        Alert.alert(
            'Are you sure?',
            'Confirm to sign out',
            [
                {
                    text: "No",
                },
                {
                    text: "Yes",
                    onPress: async () => {
                        let {error} = await signOut({email: userRedux.email});
                        if(!error){
                            dispatch(removeUser())
                            await AsyncStorage.removeItem('user')
                            navigation.navigate('Home');
                        }
                    }
                }
            ]
        );
    }
    
    return (  
        <ImageBackground source={image} resizeMode="cover" style={styles.container}>
            <Button onPress={AlertSignOut} title="Sign out"/>
        </ImageBackground>
    );
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default SignOut;