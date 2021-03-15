import React from 'react';

import Product from '../Product/Product';

const Products = ({ products }) => (
  <section>
    {products.map(pro => <Product key={pro.id} {...pro} />)}
  </section>
)

export default Products;