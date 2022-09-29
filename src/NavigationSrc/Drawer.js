import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CitiesScreen from '../screens/CitiesScreen';
import HomeScreen from '../screens/HomeScreen';
import MyTineraryScreen from '../screens/MyTineraryScreen';

const DrawerNav = createDrawerNavigator();

const Drawer = () => {
    return (  
        <DrawerNav.Navigator>
            <DrawerNav.Screen name='Home' component={HomeScreen}/>
            <DrawerNav.Screen name='Cities' component={CitiesScreen}/>
            <DrawerNav.Screen name='MyTinerary' component={MyTineraryScreen}/>
        </DrawerNav.Navigator>
    );
}
 
export default Drawer;