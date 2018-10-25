import PropTypes from 'prop-types';
import React from 'react';
import { TextInput, Text, View  } from 'react-native';
import styles from './styles';

const RFTextInput = ({
  input: { onBlur, onChange, onFocus, value },
  meta: { error, touched, valid },
  disabled,
  placeholder,
  multiline,
  numberOfLines,
}) => ( 
  <View>
    <TextInput
      onBlur={onBlur}
      onChangeText={onChange}
      onFocus={onFocus}
      value={value}
      style={[styles.rootInput, { borderColor: !valid && touched ? 'red' : 'gray' }]}
      editable={!disabled}
      selectTextOnFocus={!disabled}
      placeholder={placeholder}
      multiline={multiline}
      numberOfLines={numberOfLines}
      underlineColorAndroid='transparent'
      autoCapitalize = "none"
      style={[
        styles.rootInput,
        {
          width: 250,
          margin: 3,
          color: disabled ? 'gray' : 'black',
          borderColor: !valid && touched ? 'red' : 'gray'
        },
      ]}
/>
    {!valid && touched && <Text style={styles.rootError}>{error}</Text>}
  </View>
);

RFTextInput.propTypes = {
  input: PropTypes.shape({
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
  }).isRequired,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool.isRequired,
    valid: PropTypes.bool.isRequired,
  }).isRequired,

}

RFTextInput.defaultProps = {
  disabled: false,
};


export default (RFTextInput);
// The RFTextInput component translates the supplied (by Redux Form)
// input.onChange and input.value properties to the onChangeText and 
// value properties used by the React Native TextInput component
//In order for Redux Forms to determine if a field has been interacted with (touched), we need to pass input.onBlur and input.onFocus to the TextInput
// meta.valid indicates if the field has an error or not
// meta.touched indicates if the field has been interacted with
// meta.error is the specific error message (if there is one)
//As we want to ensure this component works with the earlier example, we make disabled an optional property but set its default value to false.
// With React Native TextInput, we implement a disabled state with two properties: editable and selectTextOnFocus