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
  container: {
    paddingTop: 23
 },
 input: {
    margin: 15,
    height: 40,
    width:150,
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
 }
});

export default styles;