import React from 'react';
import { connect } from 'react-redux';
import { FlatList, Button, Text, View, StyleSheet } from 'react-native';
import {  List, ListItem } from "react-native-elements";
class OrderList extends React.Component {
  static navigationOptions = {
    title: 'OrderList',
  };
  render() {
    const { navigate } = this.props.navigation;
    const subsList = [];
    console.log('this.props.orders', this.props.orders); 

    return (
      <View>
        <List>
        <FlatList
        data={this.props.orders}
        renderItem={({ item }) => (
          <ListItem
            title={item.fullName}
            subtitle={item.email}
            phone={item.phone}
            description={item.description}
            message={item.message}
            price={item.price} 
            />
          )}
        />
          <Button title="New Order" onPress={() => navigate('OrderForm')}/>     
          <Button title="Home" onPress={() => navigate('Home')}/>     

        </List>
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
const mapStateToProps = state => { 
  return ({
    orders: state.order.orders
  });
}


export default connect(mapStateToProps)(OrderList);
