import React from 'react';
import {  StyleSheet,  View, Text } from 'react-native';
import { Provider } from 'react-redux';
import OrderForm from './components/OrderForm';
import Home from './components/Home';
import store from './store';
import AppNavigator from './components/AppNavigator';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
        <OrderForm />
        <Home />  
        
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App; 
