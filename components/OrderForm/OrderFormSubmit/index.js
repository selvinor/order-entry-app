import React, { Component } from 'react';
import OrderFormRF from './OrderFormRF';
import { connect } from 'react-redux';
import { reset, SubmissionError } from 'redux-form';
import { addOrder } from '../../../actions';
import {REACT_APP_BASE_URL} from '../../../config';


// const wait = () => new Promise((resolve) => {
//   setTimeout(() => {
//     resolve();
//   }, 2000);
// });

class OrderForm extends Component {
//  handleSubmit = async ({ customerName, lastName, email, phone, product, description, message, price }) => {

//    await wait();
handleSubmit(values) {
  console.log('Here are the values: ', values);
    // values['productCode'] = this.props.currentProductCode;
    // if (this.props.currentProductCode === '1') {
    //   values['productName'] = "Designer's Bouquet";
    // } else {
    //   if (this.props.currentProductCode === '2') {
    //     values['productName'] = "Designer's Choice Arrangement";
    //   } else {
    //     if (this.props.currentProductCode === '3') {
    //       values['productName'] = "Designer's Lobby Arrangement";
    //     }
    //   }
    // }
    return fetch('http:192.168.1.5:19000/api/orders', {
      method:'POST',
      body: JSON.stringify(values),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
  })
    .then(res => {
      console.log('REACHED HERE. res: ', res);
      if (!res.ok) {
        if (
          res.headers.has('content-type') &&
          res.headers
            .get('content-type')
            .startsWith('application/json')
        ) {
            // It's a nice JSON error returned by us, so decode it
            return res.json().then(err => Promise.reject(err));
        }
        // It's a less informative error returned by express
        return Promise.reject({
          code: res.status,
          message: res.statusText
        });
      }      
        // console.log('*** this.props.form ***: ', this.props.form);
      this.props.dispatch(addOrder(this.props.form.Order.values));
      console.log('*** this.props.order.orders***: ', this.props.order.orders );
      return res.json();
    })
    .then((values) => {
      console.log('values: ', values)})
    .catch(err => {
      const {reason, message, location} = err;
      if (reason === 'ValidationError') {
        // Convert ValidationErrors into SubmissionErrors for Redux Form
        return Promise.reject(
            new SubmissionError({
                [location]: message
            })
        );
      }
      return Promise.reject(
        new SubmissionError({
            _error: 'Error submitting message'
        })
      );
    });
  

    // throw new Error(); // TEST SUBMISSION ERROR
    // console.log('form reducer state this.props.form: ', this.props.form);
    // console.log(`firstname: ${customerName}`);
    // console.log(`lastName: ${lastName}`);
    // console.log(`email: ${email}`);
    // console.log(`phone: ${phone}`);
    // console.log(`product: ${product}`);
    // console.log(`description: ${description}`);
    // console.log(`message: ${message}`);
    // console.log(`price: ${price}` + '\n');


    // console.log('Order Form Submit:this.props: ',this.props);
    // console.log('Order Form Submit:this.props.dispatch: ',this.props.dispatch);



//  () => reset();
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
// const mapDispatchToProps = dispatch => {
//    addOrderSuccess
//    //actions
// //
// };

export default connect(
  mapStateToProps
  //mapDispatchToProps
)(OrderForm);

// This outer-most component is responsible for supplying a function 
// (via an onSubmit property) to handle the submission of the form
//For asynchronous behavior, Redux Form expects the return value of the submit handler 
//to be a promise; thus can detect that it is pending, succeeded, or failed
//By the way, async functions return promises
//In order to demonstrate the failure situation, simple uncomment the line 
//throwing an error; in this case the async function will return a rejected promise