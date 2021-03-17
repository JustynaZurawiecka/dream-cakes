import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Table } from 'reactstrap';

import './CartProduct.scss'

const CartProduct = ({ chosenProduct, removeProduct }) => {
    const [count, setCount] = useState(localStorage.getItem("count"));
    const [inscription, setInscription] = useState('');
    const sum = count > 0 ? chosenProduct.price * count : chosenProduct.price;

    const selectedProduct = {
        title: chosenProduct.title,
        count: count,
        sum: sum,
        image: chosenProduct.image
    }
    console.log(selectedProduct, 'selectedProduct');

    // const order = function orderProduct() {
    //     localStorage.setItem('title', chosenProduct.title);
    // }

    // console.log(order, 'orderProduct');

    // localStorage.setItem('title', chosenProduct.title);

    function saveSelectedProduct() {
        localStorage.setItem('title', chosenProduct.title);
        localStorage.setItem('count', count);
        localStorage.setItem('sum', sum);
        localStorage.setItem('image', chosenProduct.image);
    }

    saveSelectedProduct();

    //UWAGA klikajac w przycisk Dalej powinno byc ruchomiona funcja ktora wstawia do localeStorage title, count, sum i inscription i uzywane jest to w komponencie orderform ktory jest renderowany przez orderPage
    //Dac jakis form zby moc wstawic tekst i przy zapisywaniu dajemy setInscription i dodajemy do storage

    // localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));

    // localStorage.setItem('selectedProduct1', JSON.stringify({
    //     title: chosenProduct.title,
    //     count: count,
    //     sum: sum,
    //     image: chosenProduct.image
    // }));

    // var selectedProduct1 = JSON.parse(localStorage.getItem('selectedProduct1'));

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
                        <td><Button className="single__product__info_remove" onClick={localStorage.removeItem('chosenProduct')}>x</Button></td>
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