import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import CitiesScreen from '../Screens/Cities';

const DrawerNav = createDrawerNavigator();

const Drawer = () => {
    return (  
        <DrawerNav.Navigator>
            <DrawerNav.Screen name='Home' component={HomeScreen}/>
            <DrawerNav.Screen name='Cities' component={CitiesScreen}/>
        </DrawerNav.Navigator>
    );
}
 
export default Drawer;