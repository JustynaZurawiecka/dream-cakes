import React from 'react';
import { Link } from 'react-router-dom';

const EmptyCart = () => (
    <div>
        <h1>Koszyk jest pusty</h1>
        <Link to="/" >Wróć do strony głównej</Link>
    </div>


);

export default EmptyCart;
