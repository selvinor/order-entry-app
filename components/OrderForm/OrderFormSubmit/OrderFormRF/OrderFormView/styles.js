import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  rootFailed: {
    color: 'red',
    textAlign: 'center',
  },
  rootSucceeded: {
    color: 'green',
    textAlign: 'center',
  },
  rootInput: {
    height: 40,
    width:250,
    borderColor: '#7a42f4',
    borderWidth: 1
 },
 submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
 },
 submitButtonText:{
    color: 'white'
 },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    
},
  text: {
    textAlign: 'center',
    fontSize: 30,
    padding: 40,
},
  keyboardAvoidContainer: {
    flex: 1,
},

header: {
  fontSize: 30,
}

});

export default styles;