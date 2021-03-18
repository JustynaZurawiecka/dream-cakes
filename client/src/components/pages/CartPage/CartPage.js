import React, { useEffect } from 'react';
import { Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import CartProduct from '../../features/CartProduct/CartProduct';

import './CartPage.scss';

const Cart = ({ singleProduct, history, updateCart, clearCart }) => {

    //useEffect has preventDefault 
    useEffect(function () {
        if (!singleProduct) {
            history.push("/");
        }
    }, [])



    if (singleProduct) {
        return (
            <Container>
                <h1>Koszyk</h1>
                <CartProduct chosenProduct={singleProduct} updateCart={updateCart} clearCart={clearCart} />
                <div className="cart__info">
                    <Link to="/order-a-product">
                        <Button className="cart__info__order-button" outline color="primary">Dalej</Button>
                    </Link>
                </div>
            </Container>
        )
    } else { return null }

};

export default Cart;