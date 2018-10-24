import React from 'react';
import {  StyleSheet,  View } from 'react-native';
import { Provider } from 'react-redux';
import OrderForm from './components/OrderForm';
import store from './store';

class App extends React.Component {
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
export default App;
