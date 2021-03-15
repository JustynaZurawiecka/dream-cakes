import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Table } from 'reactstrap';

import './CartProduct.scss'

const CartProduct = ({ chosenProduct, removeProduct }) => {
    const [count, setCount] = useState(localStorage.getItem("count"));
    return (
        <div className="single__product__info">
            <Table>
                <thead>
                    <tr>
                        <th>Produkt</th>
                        <th>Opis</th>
                        <th>Cena jednostkowa</th>
                        <th>Ilość*</th>
                        <th>Suma</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img className="product__image-container__img" src={chosenProduct.image} alt={chosenProduct.title} /></td>
                        <td className="cart__info__product-title">{chosenProduct.title}</td>
                        <td className="cart__info__product-price">{chosenProduct.price} zł</td>
                        <td className="cart__info__product-count">
                            <select onChange={(e) => { localStorage.removeItem("count"); setCount(e.target.value) }} name="count" id="count" value={localStorage.getItem("count")}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </td>
                        <td className="cart__info__total-price">{count > 0 ? chosenProduct.price * count : chosenProduct.price} zł</td>
                        <td><Button className="single__product__info_remove" onClick={(e) => removeProduct(e, chosenProduct)}>x</Button></td>
                    </tr>
                </tbody>
            </Table>
            <p className="cart__info__product-count_max">*Maksymalna ilość zamawianych tortów to 5. Sprzedajemy torty klientom biznesowym jak i indywidualnym.</p>

        </div>



    );
};

CartProduct.propTypes = {
    product: PropTypes.array
};

export default CartProduct;