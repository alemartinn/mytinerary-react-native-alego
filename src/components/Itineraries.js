import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Activities from './Activities';

const Itineraries = ({itemId, useGetAllItinerariesQuery}) => {
    
    const { data: dataItineraries, isSuccess } = useGetAllItinerariesQuery(itemId);
    
    
    const Item = ({ item, backgroundColor, textColor }) => (
        <TouchableOpacity style={[styles.item, backgroundColor]}>
          <Text style={[styles.itiName, textColor]}>{item.name}</Text>
          <Text style={[styles.userName, textColor]}>{item.user.name}</Text>
          <Image style={styles.userPhoto} source={{uri: item.user.photo}}/>
          <Activities itemId={item._id}/>
        </TouchableOpacity>
      );

    const renderItem = ({ item }) => {
        return (
          <Item
            item={item}
            backgroundColor={'black'}
            textColor={'white'}
          />
        );
      };

    return (  
        <View>
            {
                dataItineraries 
                ?
                <FlatList
                    data={dataItineraries.response}
                    renderItem={renderItem}
                    keyExtractor={(item) => item._id}
                    style={[styles.container]}
                />
                :
                <Text>Loading</Text>
            }
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        marginHorizontal: '5%',
        borderWidth: 2,
        borderColor: '#c49',
    },
    item: {
        padding: 20,
        borderRadius: 30,
        marginVertical: 12,
        marginHorizontal: 16,
        alignItems: 'center',
        marginHorizontal: '5%',
        borderWidth: 2,
        borderColor: '#c49',
    },
    userName: {
        fontSize: 22,
    },
    userPhoto: {
        height: 70,
        width: 70,
        borderRadius: 50,
    }
  });

export default Itineraries;