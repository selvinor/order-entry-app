// import React from 'react';
// import { connect } from 'react-redux';
// import OrderFormSubmit from './OrderFormSubmit';
// //import store from '../../store';
// class OrderForm extends React.Component {
//   static navigationOptions = {
//     title: 'New Order',
//   };
//   render() {
//     console.log('this.props.navigation: ', this.props.navigation);
//     const { navigate } = this.props.navigation;
//     return (
//       <View style={styles.container}>
//         <Button title="Order" onPress={() => navigate('OrderForm')}/>     
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// export default connect(OrderFormSubmit);

import React from 'react';
// import { connect } from 'react-redux';
import { Button, Text, View, StyleSheet } from 'react-native';
class OrderScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    console.log('this.props.navigation: ', this.props.navigation);
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <Text> Order Page</Text>
        <Button title="Home" onPress={() => navigate('Home')}/>     
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
export default OrderScreen;
