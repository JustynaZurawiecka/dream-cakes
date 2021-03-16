import React, { useEffect } from 'react';
import { Container, NavLink, Button } from 'reactstrap';
import { removeProduct } from '../../../redux/productsRedux';
import CartProduct from '../../features/CartProduct/CartProduct';

import './CartPage.scss';

const Cart = ({ singleProduct, history }) => {
    //useEffect has preventDefault 
    useEffect(function () {
        if (!singleProduct) {
            history.push("/");
        }
    }, [])
    if (singleProduct) {
        // localStorage.setItem('singleProduct', JSON.stringify(singleProduct));
        // var retrievedObject = localStorage.getItem('singleProduct');

        // console.log('retrievedObject: ', JSON.parse(retrievedObject));
        return (
            <Container>
                <h1>Koszyk</h1>
                <CartProduct chosenProduct={singleProduct} removeProduct={removeProduct} />
                <div className="cart__info">
                    <NavLink href="/order-a-product">
                        <Button className="cart__info__order-button" outline color="primary">Dalej</Button>
                    </NavLink>
                </div>
            </Container>
        )
    } else { return null }

};

export default Cart;