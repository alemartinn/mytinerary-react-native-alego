import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react';

export default function App() {
  return (
    <Provider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Hi World</Text>
        <Text style={styles.text}>MyTinerary</Text>
        <Button
          title="See more"
          color="#c49"
          style={styles.btnSeeMore}
          accessibilityLabel='Learn more about this button'
        />
        <StatusBar style="auto" />
    </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 50,
    color: '#777'
  },
  btnSeeMore:{
    color: '#c49'
  }
});
