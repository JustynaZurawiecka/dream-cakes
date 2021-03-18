import { connect } from 'react-redux';
import { addOrderRequest, getRequests } from '../../../redux/ordersRedux';
import { getCart } from '../../../redux/productsRedux';
import OrderForm from './OrderForm';

const mapStateToProps = state => ({
  requests: getRequests(state),
  cart: getCart(state),
});

const mapDispatchToProps = dispatch => ({
  addOrder: (order) => dispatch(addOrderRequest(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);