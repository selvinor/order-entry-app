import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import OrderForm from './OrderForm';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  OrderForm: {screen: OrderForm},
});

export default AppNavigator;