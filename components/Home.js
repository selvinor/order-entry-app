import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text> Home Page</Text>
        <Button title="Add some orders!" onPress={() => this.props.navigation.navigate('OrderForm')}/>
      
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
export default Home;