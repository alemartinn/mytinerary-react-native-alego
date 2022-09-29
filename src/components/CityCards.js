import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGetAllCitiesQuery } from '../../features/citiesAPI';

const CityCards = () => {

  const [textInput, setTextInput] = React.useState('');
  const [selectedId, setSelectedId] = useState(null);

    const { data: cities } = useGetAllCitiesQuery(textInput);

    const Item = ({ item, onPress, backgroundColor, textColor }) => (
        <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
          <Text style={[styles.cityName, textColor]}>{item.city}</Text>
          <Image style={styles.cityImage} source={{uri: item.photo}}/>
        </TouchableOpacity>
      );

    const renderItem = ({ item }) => {
        const backgroundColor = item._id === selectedId ? "#ccc" : "#00000094";
        const color = item._id === selectedId ? 'black' : 'white';
    
        return (
          <Item
            item={item}
            onPress={() => setSelectedId(item._id)}
            backgroundColor={{ backgroundColor }}
            textColor={{ color }}
          />
        );
      };

    return (  
          <>
          {
            cities
            ?
            <View style={styles.container}>
              <TextInput
                style={styles.inputSearch}
                onChangeText={setTextInput}
                value={textInput}
                placeholder={'Search a city: '}
              />
              <FlatList
              data={cities.response}
              renderItem={renderItem}
              keyExtractor={(item) => item._id}
              style={styles.Flat}
              />
            </View> 
            :
            <Text>Loading</Text>
          }
          </>
    );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    width: '100%',
    flex:1,
    justifyContent:'flex-start'
  },
  inputSearch:{
    borderColor: '#000',
    marginHorizontal:30,
    marginVertical: 10,
    borderWidth: 1,
    paddingHorizontal:15,
    borderRadius: 30,
    fontSize: 25,
    width: '80%',
    backgroundColor: '#fff',
    width: 300
  },
  item: {
    padding: 6,
    borderRadius: 30,
    marginVertical: 12,
    marginHorizontal: 212,
    alignItems: 'center',
    width:245
  },
  cityName: {
    fontSize: 32,
  },
  cityImage: {
    height: 150,
    width: 230,
    borderRadius: 30,
  }
});

export default CityCards;