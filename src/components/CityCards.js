import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGetAllCitiesQuery } from '../../features/citiesAPI';

const CityCards = ({navigation}) => {

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
        const backgroundColor = item._id === selectedId ? "#ccc" : "#fff";
        const color = item._id === selectedId ? 'white' : 'black';
    
        return (
          <Item
            item={item}
            onPress={() => navigation.navigate('Details', {itemId: item._id})}
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
            <View>
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
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'c49',
  },
  inputSearch:{
    borderColor: '#c49',
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 30,
    fontSize: 24,
    width: '80%',
    backgroundColor: '#fff'
  },
  item: {
    padding: 20,
    borderRadius: 30,
    marginVertical: 12,
    marginHorizontal: 16,
    alignItems: 'center'
  },
  cityName: {
    fontSize: 32,
  },
  cityImage: {
    height: 150,
    width: 150,
    borderRadius: 30,
  }
});

export default CityCards;