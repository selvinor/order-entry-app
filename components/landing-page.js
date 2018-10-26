import React from 'react';
import {  StyleSheet,  View, Text } from 'react-native';
import { Provider } from 'react-redux';
import OrderForm from './OrderForm';
import Home from './HomeScreen';
import store from '../store';

class LandingPage extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <OrderForm />
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
export default LandingPage; 
