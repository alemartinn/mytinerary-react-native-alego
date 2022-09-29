import React from 'react';
import { View, Text } from 'react-native'
import { useGetAllItinerariesCityQuery } from '../../features/itinerariesAPI';
import DetailsCard from '../components/DetailsCard';
import Itineraries from '../components/Itineraries';

const DetailsScreen = ({ route, navigation }) => {
    
    const { itemId } = route.params;

    return (  
        <View>
            <DetailsCard itemId={itemId}/>
            <Itineraries useGetAllItinerariesQuery={useGetAllItinerariesCityQuery} itemId={itemId}/>
        </View>
    );
}
 
export default DetailsScreen;