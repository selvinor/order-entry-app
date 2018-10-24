import React, { Component } from 'react';
import OrderFormRF from './OrderFormRF';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

const wait = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 3000);
});

class OrderForm extends Component {
  handleSubmit = async ({ firstName, lastName, email, phone, description }) => {
//    const { reset } = this.props;
    await wait();

    // throw new Error(); // TEST SUBMISSION ERROR

    console.log(`firstname: ${firstName}`);
    console.log(`lastName: ${lastName}`);
    console.log(`email: ${email}`);
    console.log(`phone: ${phone}`);
    console.log(`description: ${description}`);
  reset();
  }

  render() {
    return <OrderFormRF onSubmit={this.handleSubmit} />;
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = {
  reset: () => reset('reset'),
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