import FormSignUp from '../components/FormSignUp'
import { ImageBackground, StyleSheet } from 'react-native';

function SignUpScreen() {
    const image = require('../../assets//backgroundHero.png')
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.container}>
        <FormSignUp />
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default  SignUpScreen
