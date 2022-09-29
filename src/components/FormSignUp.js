import {useState} from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useSignUpMutation } from '../../features/authAPi';
import Button from './Button';

const FormSignUp = (props) => {
    const [user, setUser] = useState({
        name: "", lastName: "", email: "", password: "", 
        country:"", role: props.role, from: "form"
    })
    const [signUp] = useSignUpMutation()

    const handleSubmit = async () => {
        //signUp(user)
        Alert.alert(
            `Welcome to MyTineraries ${user.name}`,
            "Now you can sign in with your account.",
            [
              { text: "Thanks", onPress: () => console.log(user) }
            ]
        );
    };

  return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainHeader}>Register Form</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}> Enter your name </Text>
                <TextInput style={styles.inputStyle} onChangeText={e => {setUser({...user,name:e })}}/>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}> Enter your lastname </Text>
                <TextInput style={styles.inputStyle} onChangeText={e => {setUser({...user,lastName:e })}}/>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}> Enter your photo </Text>
                <TextInput style={styles.inputStyle} keyboardType='url' onChangeText={e => {setUser({...user,photo:e })}} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}> Enter your country </Text>
                <TextInput style={styles.inputStyle} onChangeText={e => {setUser({...user,country:e })}} />
            </View>
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
    )
}
const styles = StyleSheet.create({
    mainContainer:{
        paddingHorizontal: 30,
        paddingTop: 10,
        marginBottom:100,
        marginTop: 70,
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
        width: 500
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
        color: "#fff"
    },
    btnForm: {
        marginTop:60,
        width:200,
    }
})

export default FormSignUp;
