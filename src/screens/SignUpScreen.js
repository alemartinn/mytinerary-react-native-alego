import FormSignUp from '../components/FormSignUp'
import { ImageBackground, StyleSheet } from 'react-native';

export default function SignUpScreen() {
    const image = require('../../assets//backgroundHero.png')
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        },
        text:{
            height:140,
            fontSize: 80,
            fontFamily: 'KaushanScript_400Regular',
            color: '#fff',
            textShadowOffset:{height:7, width:2},
            textShadowRadius:5,
            textShadowColor: 'black'
        },
        btnSeeMore:{
          color: '#c49'
        }
      });
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.container}>
        <FormSignUp />
    </ImageBackground>
  )
}
