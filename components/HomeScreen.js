import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    console.log('this.props.navigation: ', this.props.navigation);
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <Text> Home Page</Text>
        <Button title="Add some orders!" onPress={() => navigate('OrderForm')}/>     
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
export default HomeScreen;