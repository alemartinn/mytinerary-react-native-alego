import React, { useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useGetAllActivitiesQuery } from '../../features/activitiesAPI';

const Activities = ({itemId}) => {
    
    const { data : dataActivities, isSuccess } = useGetAllActivitiesQuery(itemId);

    const renderItem = ({ item }) => {
        return (
            <View style={[styles.containerActivity]}>
                <Text style={[styles.nameActivity]}>{JSON.stringify(item.name)}</Text>
                <Image style={[styles.imgActivity]} source={{uri: item.photo}}/>
            </View>
        );
      };

    return (  
        <>
            {
                dataActivities
                ?
                <FlatList
                    data={dataActivities.response}
                    renderItem={renderItem}
                    keyExtractor={(item) => item._id}
                />
                :
                <Text>No activities</Text>
            }
        </>
    );
}

const styles = StyleSheet.create({
    containerActivity:{
        borderWidth: 2,
        borderColor: '#49e',
        borderRadius: 20
    },
    nameActivity: {
        fontSize: 22,
        color: '#c49',
    },
    imgActivity: {
        width: 100,
        height: 100,
    }
}

)
 
export default Activities;