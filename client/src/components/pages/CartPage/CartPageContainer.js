import { connect } from 'react-redux';
import { getProduct, clearCart, updateCart } from '../../../redux/productsRedux';
import Cart from './CartPage';

const mapStateToProps = state => ({
    singleProduct: getProduct(state),
});

const mapDispatchToProps = dispatch => ({
    clearCart: (cart) => dispatch(clearCart(cart)),
    updateCart: (cart) => dispatch(updateCart(cart)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);