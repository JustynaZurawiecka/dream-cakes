import { connect } from 'react-redux';
import { addOrderRequest, getRequests } from '../../../redux/ordersRedux';
import OrderForm from './OrderForm';

const mapStateToProps = state => ({
  requests: getRequests(state),
});

const mapDispatchToProps = dispatch => ({
  addOrder: (order) => dispatch(addOrderRequest(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);