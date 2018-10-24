
import { connect } from 'react-redux';
import { Order } from 'redux-form';
import OrderFormSubmit from './OrderFormSubmit';

const mapStateToProps = () => ({});
const mapDispatchToProps = {
  Order: () => Order('Order'),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderFormSubmit);