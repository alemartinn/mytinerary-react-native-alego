import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Drawer from './src/navigationSrc/Drawer';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer/>
      </NavigationContainer>
    </Provider>
  );
}