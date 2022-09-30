import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Activities from './Activities';

const Itineraries = ({itemId, useGetAllItinerariesQuery}) => {
    
    const { data: dataItineraries, isSuccess } = useGetAllItinerariesQuery(itemId);
    
    
    const Item = ({ item, backgroundColor, textColor }) => (
        <View style={[styles.item, backgroundColor]}>
          <Text style={[styles.itineraryTitle, textColor]}>{item.name}</Text>
          <View style={[styles.headerItinerary]}>
            <View style={[styles.headerItineraryUser]}>
              <Image style={styles.userPhoto} source={{uri: item.user.photo}}/>
              <Text style={[styles.userName, textColor]}>{item.user.name}</Text>
            </View>
            <Text style={[styles.buttonDeleteItine]}>X</Text>
          </View>
          <Activities itemId={item._id}/>
        </View>
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
        // borderWidth: 1,
        // borderColor: '#c49',
    },
    item: {
      backgroundColor: "#00000094",
      borderRadius: 30,
        marginVertical: 15,
        alignItems: 'center',
        paddingVertical: 15,
    },
    headerItinerary:{
        // minWidth: 290,
        // width: '90%',
        // maxWidth: 500,
        // borderWidth: 1,
        width: 300,
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerItineraryUser:{
      flexDirection: 'row',
      alignItems: 'center',
      
    },
    userName: {
        fontSize: 17,
        color: '#fff',
        paddingHorizontal: 10,
    },
    userPhoto: {
        height: 50,
        width: 50,
        borderRadius: 50,
      },
    itineraryTitle: {
        fontSize: 22,
        color: '#fff',
    },
    buttonDeleteItine: {
      color: 'white'
    },
  });

export default Itineraries;