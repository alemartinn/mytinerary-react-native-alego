import FormSignUp from '../components/FormSignUp'
import { ImageBackground, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

function SignUpScreen({navigation}) {
    const image = require('../../assets//backgroundHero.png')
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.container}>
      <ScrollView>
        <FormSignUp role={'user'} navigation={navigation}/>
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
