import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen'
import OrderForm from './components/OrderForm'
import OrderList from './components/OrderList'
import store from './store';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    OrderForm: OrderForm,
    OrderList: OrderList
  },
  {
    initialRouteName: 'Home',
  }
);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fc0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App; 
