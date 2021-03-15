import { connect } from 'react-redux';
import { getProduct, removeProduct } from '../../../redux/productsRedux';
import Cart from './CartPage';

const mapStateToProps = state => ({
    singleProduct: getProduct(state),
});

const mapDispatchToProps = dispatch => ({
    removeProduct: (product) => dispatch(removeProduct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);