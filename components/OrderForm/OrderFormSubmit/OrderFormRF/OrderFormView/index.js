import { PropTypes } from 'prop-types';
import React from 'react';
import {TextInput, Image, SafeAreaView, ScrollView, Button, Text, View, KeyboardAvoidingView } from 'react-native';

import { connect } from 'react-redux';
import { Field, reset } from 'redux-form';
import styles from './styles';
import RFTextInput from '../../../../RFTextInput';

const OrderFormView = ({ 
  handleSubmit,   
  submitFailed,
  submitSucceeded,
  submitting,
  valid 
}) => (



    
<SafeAreaView style={styles.container}>
   <KeyboardAvoidingView style={styles.keyboardAvoidContainer} behavior="padding">
     <ScrollView style={{flex: 1}}>
     <View style={{height: 625,   alignItems: 'center', justifyContent: 'center'}} >
     <Image style={{width:160, height:160, marginLeft:10}} source={require('../../../../../assets/tulip.png')} />  
    <Field
      name="customerName"
      component={RFTextInput}
      disabled={submitting}
      placeholder="Customer Name"
      style={styles.input}
    />

    <Field
      name="email"
      component={RFTextInput}
      placeholder="email"
      type="email"
      style={styles.input}
    />
    <Field
      name="phone"
      component={RFTextInput}
      placeholder="phone"
      style={styles.input}
    />
    <Field
      name="description"
      component={RFTextInput}
      placeholder="description"
      multiline = {true}
      numberOfLines = {4}
      style={styles.input}
      type="textarea"
    />
      <Field
      name="message"
      component={RFTextInput}
      placeholder="Gift Message"
      multiline = {true}
      numberOfLines = {4}
      style={styles.input}
    />
      <Field
      name="price"
      component={RFTextInput}
      placeholder="price"
      multiline = {true}
      numberOfLines = {4}
      style={styles.input}
    />
    {!submitting && submitFailed && <Text style={styles.rootFailed}>Submit Failed</Text>}
    {!submitting && submitSucceeded && <Text style={styles.rootSucceeded}>Submit Succeeded</Text>}
    <Button
      disabled={!valid || submitting}
      onPress={handleSubmit}
      title="Submit Order"
    />        
  </View>
      </ScrollView>

    </KeyboardAvoidingView>
 </SafeAreaView>


); 

OrderFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitFailed: PropTypes.bool.isRequired,
  submitSucceeded: PropTypes.bool.isRequired,
  submitting: PropTypes.bool,
  valid: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
};

OrderFormView.defaultProps = {
  submitting: false,
};

const mapStateToProps = () => ({});
// const mapDispatchToProps = {
//   reset: () => reset('reset'),
// };

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(OrderFormView);
//this inner component is responsible for the form’s view
//this component is used with Redux Form and requires a handleSubmit function property
// Redux Form provides the submitFailed, submitSucceeded, and submitting properties; based on the result of your submit handler (below)
// Apparently, submitting is optional (feels like a bug to me); so we have to set a default value of it to false
