import { ImageBackground, View, Text, StyleSheet, Alert } from 'react-native';
import { useAddNewCityMutation } from '../../features/citiesAPI';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Button from '../components/Button';
import{ useState } from 'react'

function NewCityScreen() {
    const image = require('../../assets//backgroundHero.png')
    const [city, setCity] = useState(
        {
            city: "",
            country: "",
            photo: "",
            population: 1000,
            foundation: 1000,
        }
    )
    const [addCity] = useAddNewCityMutation()
    const handleSubmit = async () => {
        addCity(city)
        Alert.alert(
            "You created a new city!",
            "Now you can see it in City Pages.",
            [
              { text: "Ok", onPress: () => console.log(city) }
            ]
        );
    };

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.container}>
        <ScrollView>
            <View style={styles.mainContainer}>
                <Text style={styles.mainHeader}> New City Form </Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.labels}> Enter city name </Text>
                    <TextInput style={styles.inputStyle} onChangeText={e => {setCity({...city,city:e })}}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.labels}> Enter the country of the city </Text>
                    <TextInput style={styles.inputStyle} onChangeText={e => {setCity({...city,country:e })}}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.labels}> Enter a photo </Text>
                    <TextInput style={styles.inputStyle} keyboardType='url' onChangeText={e => {setCity({...city,photo:e })}} />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.labels}> Enter population </Text>
                    <TextInput style={styles.inputStyle} keyboardType='numeric' onChangeText={e => {setCity({...city,population:e })}} />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.labels}> Enter foundation </Text>
                    <TextInput style={styles.inputStyle} keyboardType='numeric' onChangeText={e => {setCity({...city,foundation:e })}} />
                </View>
                <View style={styles.btnForm}>
                    <Button title="SEND" onPress={handleSubmit} />
                </View>
            </View>
        </ScrollView>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 30,
      paddingVertical: 20
    },
    mainContainer:{
        paddingTop: 10,
        backgroundColor: "#00000094",
        flex:1,
        alignItems:'center',
        borderRadius:30,
    },
    mainHeader: {
        fontSize: 40,
        color: "#fff",
        fontWeight: "bold",
        paddingTop: 20,
        paddingBottom: 15,
    },
    inputContainer:{
        marginTop:30,
    },
    labels:{
        fontSize:20,
        color: "#fff",
        marginTop: 10,
        marginBottom: 5,
        lineHeight: 25,
    },
    inputStyle:{
        borderWidth: 1,
        borderColor: "#fff",
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 30,
        fontSize: 30,
        color: "#fff",
        width: 250,
    },
    btnForm: {
        paddingVertical: 50,
        width:250,
    }
});

export default NewCityScreen