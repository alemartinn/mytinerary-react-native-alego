import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CitiesScreen from '../screens/CitiesScreen';
import HomeScreen from '../screens/HomeScreen';
import MyTineraryScreen from '../screens/MyTineraryScreen';
import SignUpScreen from '../screens/SignUpScreen';
import NewCityScreen from '../screens/NewCityScreen';

const DrawerNav = createDrawerNavigator();

const Drawer = () => {
    return (  
        <DrawerNav.Navigator initialRouteName='Home'>
            <DrawerNav.Screen name='Home' component={HomeScreen}/>
            <DrawerNav.Screen name='Cities' component={CitiesScreen}/>
            <DrawerNav.Screen name='MyTinerary' component={MyTineraryScreen}/>
            <DrawerNav.Screen name='Sign Up' component={SignUpScreen}/>
            <DrawerNav.Screen name='New City' component={NewCityScreen}/>
        </DrawerNav.Navigator>
    );
}
 
export default Drawer;