import FormSignUp from '../components/FormSignUp'
import { ImageBackground, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SignUpScreen({navigation}) {
  const [userLog, setUserLog] = useState({})
  AsyncStorage.getItem('user').then(value => setUserLog(value))
  console.log(userLog);
  const image = require('../../assets//backgroundHero.png')
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.container}>
      <ScrollView>
        <FormSignUp role={userLog.role} navigation={navigation}/>
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
});

export default  SignUpScreen
