import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useGetOneCityQuery } from '../../features/citiesAPI';

const DetailsCard = ({itemId}) => {

    const {data: dataCity, isSuccess} = useGetOneCityQuery(itemId);

    return (
    <View>
        {
            isSuccess 
            ?
            <Text style={[styles.nameCity]}>{dataCity.response.city}</Text>
            :
            <Text>Waiting</Text>
        }
    </View>
    );
}

const styles = StyleSheet.create({
    nameCity: {
        textAlign: 'center',
        fontSize: 24,
        color: '#c49'
    }
})
 
export default DetailsCard;