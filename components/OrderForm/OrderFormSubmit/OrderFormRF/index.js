import { reduxForm } from 'redux-form';
import OrderFormView from './OrderFormView';

const FORM = 'Order';
const validate = ({ customerName, lastName, phone }) => {
  const errors = {};
  if (customerName === undefined) {
    errors.customerName = 'Required';
  } else if (customerName.trim() === '') {
    errors.customerName = 'Must not be blank';
  }
  if (lastName === undefined) {
    errors.lastName = 'Required';
  } else if (lastName.trim() === '') {
    errors.lastName = 'Must not be blank';
  }
  if (phone === undefined) {
    errors.phone = 'Required';
  } else if (phone.trim() === '') {
    errors.phone = 'Must not be blank';
  }
  return errors;
};

const OrderFormRF = reduxForm({
  form: FORM,
  validate,
})(OrderFormView);

export default OrderFormRF;
// The middle component is responsible for supplying the Redux Form  
// form management features (via properties supplied to OrderFormView);  
// we will define things like validation rules here
//The validate function is called on every interaction with the form, e.g., as one enters information into a field
//The validate function’s return object indicates which errors exist; keys are the field names and the values are the error message