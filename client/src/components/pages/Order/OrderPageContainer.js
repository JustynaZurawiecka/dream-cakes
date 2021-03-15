import { connect } from 'react-redux';
import { getProduct } from '../../../redux/ordersRedux';
import OrderPage from './OrderPage';

const mapStateToProps = state => ({
    requests: getRequests(state),
    chosenProduct: getProduct(state),
});

export default connect(mapStateToProps)(OrderPage);

//zastanowic sie czy potrzebuje tego kontenera chce pobrac dane z cart i przekazac do orderPage