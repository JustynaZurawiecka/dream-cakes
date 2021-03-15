import { connect } from 'react-redux';
import { getProduct, loadProductRequest, getRequest } from '../../../redux/productsRedux';
import ProductPage from './ProductPage';

const mapStateToProps = state => ({
    product: getProduct(state),
    request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
    loadProduct: (id) => dispatch(loadProductRequest(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);