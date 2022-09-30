import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CitiesScreen from '../screens/CitiesScreen';
import HomeScreen from '../screens/HomeScreen';
import SignInScreen from '../screens/SignInScreen';
import MyTineraryScreen from '../screens/MyTineraryScreen';
import SignUpScreen from '../screens/SignUpScreen';
import NewCityScreen from '../screens/NewCityScreen';
import { useSelector } from 'react-redux';
import SignOut from '../screens/SignOutScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DrawerNav = createDrawerNavigator();

const Drawer = () => {

    // const userRedux = useSelector(state => state.user.u);

    // const getUser = async () => {
    //     const userRedux = await AsyncStorage.getItem('user')
    //     return userRedux
    // }
    // let userRedux = getUser();
    // console.log(userRedux)
    
    const userRedux = useSelector(state => state.user.u);

    return (  
        <DrawerNav.Navigator initialRouteName='Home'>
            <DrawerNav.Screen name='Home' component={HomeScreen}/>
            <DrawerNav.Screen name='Cities' component={CitiesScreen}/>
            {
                userRedux
                ?
                <>
                    <DrawerNav.Screen name='MyTinerary' component={MyTineraryScreen}/>
                    <DrawerNav.Screen name='New City' component={NewCityScreen}/>
                    <DrawerNav.Screen name='Sign Out' component={SignOut}/>
                </>
                :
                <>
                    <DrawerNav.Screen name='Sign In' component={SignInScreen}/>
                    <DrawerNav.Screen name='Sign Up' component={SignUpScreen}/>
                </>
            }
        </DrawerNav.Navigator>
    );
}
 
export default Drawer;