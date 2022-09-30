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
                    style={styles.container}
                />
                :
                <Text>No activities</Text>
            }
        </>
    );
}

const styles = StyleSheet.create({
    containerActivity:{
        flex: 1,
        backgroundColor: '#00000087',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 20,
        width: 250,
        alignItems: 'center',
        paddingVertical: 10,
        marginVertical: 10,
    },
    nameActivity: {
        fontSize: 22,
        color: '#fff',
        textAlign: 'center'
    },
    imgActivity: {
        borderRadius: 10,
        width: 150,
        height: 150,
    }
}

)
 
export default Activities;