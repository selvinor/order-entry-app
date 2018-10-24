import { PropTypes } from 'prop-types';
import React from 'react';
import { Button, Text, View } from 'react-native';

import { connect } from 'react-redux';
import { Field, reset } from 'redux-form';
import RFTextView from '../../../../RFTextInput';
import styles from './styles';

const OrderFormView = ({ 
  handleSubmit,   
  submitFailed,
  submitSucceeded,
  submitting,
  valid 
}) => (
  <View>
    <Field
      name="firstName"
      component={RFTextView}
      disabled={submitting}
      placeHolder="First Name"
    />
    <Field
      name="lastName"
      component={RFTextView}
      placeHolder="Last Name"
    />
    <Field
      name="email"
      component={RFTextView}
      placeHolder="Last Name"
      type="email"
    />
    <Field
      name="phone"
      component={RFTextView}
      placeHolder="phone"
    />
    <Field
      name="description"
      component={RFTextView}
      placeHolder="description"
      multiline = {true}
      numberOfLines = {4}
    />
    {!submitting && submitFailed && <Text style={styles.rootFailed}>Submit Failed</Text>}
    {!submitting && submitSucceeded && <Text style={styles.rootSucceeded}>Submit Succeeded</Text>}
    <Button
      disabled={!valid || submitting}
      onPress={handleSubmit}
      title="Submit Order"
    />
  </View>    
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
const mapDispatchToProps = {
  reset: () => reset('reset'),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderFormView);
//this inner component is responsible for the form’s view
//this component is used with Redux Form and requires a handleSubmit function property
// Redux Form provides the submitFailed, submitSucceeded, and submitting properties; based on the result of your submit handler (below)
// Apparently, submitting is optional (feels like a bug to me); so we have to set a default value of it to false
