import React from 'react';
import OrderFormSubmit from './OrderFormSubmit';
import { Button,  View, StyleSheet } from 'react-native';

class OrderForm extends React.Component {
  static navigationOptions = {
    title: 'New Order',
  };
  render() {
    console.log('this.props: ',this.props);
    console.log('this.props.NNavigation: ', this.props.navigation);
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <OrderFormSubmit />
          <Button  title="Home" onPress={() => navigate('Home')}/> 
          <Button  title="Order List" onPress={() => navigate('OrderList')} />    
      </View>
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

export default (OrderForm);
