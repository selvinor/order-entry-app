import React from 'react';
import { ImageBackground, Button, Text, View, StyleSheet } from 'react-native';
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Blooms App',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ImageBackground          style={{
            backgroundColor: '#ccc',
            flex: 1,
            position: 'absolute',
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }} source={require('../assets/splash.png')} >   
          <Text style={styles.text}>Welcome!</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex:1 , marginRight:10}} >
              <Button title="New Order" onPress={() => navigate('OrderForm')}></Button>
            </View>
            <View style={{flex:1}} >
              <Button title="Order List" onPress={() => navigate('OrderList')}></Button>
            </View>
          </View>              
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#d1ea09',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    padding: 40,
  }
});
export default HomeScreen;