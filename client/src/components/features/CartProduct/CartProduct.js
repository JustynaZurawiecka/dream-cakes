import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

import './CartProduct.scss'

const CartProduct = ({ chosenProduct, updateCart, clearCart }) => {
    const [count, setCount] = useState(localStorage.getItem("count"));
    const [inscription, setInscription] = useState('');
    const sum = count > 0 ? chosenProduct.price * count : chosenProduct.price;

    useEffect(function () {
        updateCart({
            title: chosenProduct.title,
            inscription: inscription,
            count: count,
            sum: sum
        })
    }, [count, inscription]);

    const handleChange = e => {
        setInscription(e.target.value);
    }

    const handleSubmit = e => {
        // alert("Napis pomyslnie zapisany");
        e.preventDefault();
    }

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
                        <td className="cart__info__total-price">{sum} zł</td>
                        <td><Link to="/" className="single__product__info_remove" onClick={clearCart}>USUŃ PRODUKT</Link></td>
                    </tr>
                </tbody>
            </Table>
            <p className="cart__info__product-count_max">*Maksymalna ilość zamawianych tortów to 5. Sprzedajemy torty klientom biznesowym jak i indywidualnym.</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Napis na torcie
                    <input
                        type="textarea" rows="2" cols="20" onChange={handleChange}
                    // value="value"
                    />
                </label>
                {/* <div>
                    <Button type="submit">Zapisz</Button>
                </div> */}
            </form>
        </div >



    );
};

CartProduct.propTypes = {
    product: PropTypes.array
};

export default CartProduct;