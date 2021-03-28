import React from 'react';

import Product from '../Product/Product';

const Products = ({ products }) => (
  <section>
    {products.map(pro => <Product key={pro._id} {...pro} />)}
  </section>
)

export default Products;