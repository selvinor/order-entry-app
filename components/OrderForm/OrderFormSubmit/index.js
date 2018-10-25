import React, { Component } from 'react';
import OrderFormRF from './OrderFormRF';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import { addOrderSuccess } from '../../../actions';
//import * as actions from '../../../actions';

const wait = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 3000);
});

class OrderForm extends Component {
  handleSubmit = async ({ fullName, lastName, email, phone, product, description, message, price }) => {

    await wait();

    // throw new Error(); // TEST SUBMISSION ERROR
    //console.log('form reducer state this.props.form: ', this.props.form.Order.values);
    // console.log(`firstname: ${fullName}`);
    // console.log(`lastName: ${lastName}`);
    // console.log(`email: ${email}`);
    // console.log(`phone: ${phone}`);
    // console.log(`product: ${product}`);
    // console.log(`description: ${description}`);
    // console.log(`message: ${message}`);
    // console.log(`price: ${price}` + '\n');


    //console.log('this.props.dispatch: ',this.props.dispatch);
    this.props.dispatch(addOrderSuccess(this.props.form.Order.values));
   // console.log('*** this.props.form ***: ', this.props.form);
    //console.log('*** this.props ***: ', this.props );


  () => reset();
  }

  render() {
    return <OrderFormRF onSubmit={this.handleSubmit} />;
  }
}

const mapStateToProps = state => { 
  return ({
    form: state.form,
    order: state.order
  });
}
const mapDispatchToProps = {
   addOrderSuccess
   //actions
//
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderForm);

// This outer-most component is responsible for supplying a function 
// (via an onSubmit property) to handle the submission of the form
//For asynchronous behavior, Redux Form expects the return value of the submit handler 
//to be a promise; thus can detect that it is pending, succeeded, or failed
//By the way, async functions return promises
//In order to demonstrate the failure situation, simple uncomment the line 
//throwing an error; in this case the async function will return a rejected promise