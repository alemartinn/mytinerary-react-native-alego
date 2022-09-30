import { ImageBackground, StyleSheet, View, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSignInMutation } from '../../features/authAPi';
import { TextInput } from 'react-native-gesture-handler';
import Button from '../components/Button';
import {useState} from 'react';

function SignInScreen({navigation}) {
    const image = require('../../assets//backgroundHero.png')
    const [signIn] = useSignInMutation()
    const [user, setUser] = useState({
        email: "", password: "", from: "form"
    });
    const [userLog, setUserLog] = useState({})
    const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('user', jsonValue)
        } catch (error) {
          console.log(error);
        }
    }
    const getData = async () => {
        try {
          await AsyncStorage.getItem('user').then(value => setUserLog(value))
        } catch(error) {
          console.log(error);
        }
    }
    const handleSubmit = async () => {
        let {data, error} = await signIn(user)
        if(error) {
            Alert.alert(
                "Oops... Try again",
                `${error.data.message}`,
                [{ text: "Ok"}]
            )
        } else {
            storeData(data.response.user);
            await getData()
            //AsyncStorage.clear()
            Alert.alert(
                "You are logged in",
                "Enjoy the trip",
                [
                  { text: "Ok", onPress: () => navigation.goBack()}
                ]
            );
        }
    };
  return (
        <ImageBackground source={image} resizeMode="cover" style={styles.container}>
            <View style={styles.mainContainer}>
                <Text style={styles.mainHeader}>Log in</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.labels}> Enter your email </Text>
                    <TextInput style={styles.inputStyle} keyboardType='email-address' onChangeText={e => {setUser({...user,email:e })}} />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.labels}> Enter your password </Text>
                    <TextInput style={styles.inputStyle} secureTextEntry={true} onChangeText={e => {setUser({...user,password:e })}}/>
                </View>
                <View style={styles.btnForm}>
                <Button title="SEND" onPress={handleSubmit} />
                </View>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 20
    },
    mainContainer: {
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
    inputContainer: {
        marginTop:30,
    },
    labels: {
        fontSize:20,
        color: "#fff",
        marginTop: 10,
        marginBottom: 5,
        lineHeight: 25,
    },
    inputStyle: {
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
    },
})

export default SignInScreen