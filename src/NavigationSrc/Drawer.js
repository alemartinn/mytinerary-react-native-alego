import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CitiesScreen from '../screens/CitiesScreen';
import HomeScreen from '../screens/HomeScreen';

const DrawerNav = createDrawerNavigator();

const Drawer = () => {
    return (  
        <DrawerNav.Navigator initialRouteName='Home'>
            <DrawerNav.Screen name='Home' component={HomeScreen}/>
            <DrawerNav.Screen name='Cities' component={CitiesScreen}/>
        </DrawerNav.Navigator>
    );
}
 
export default Drawer;