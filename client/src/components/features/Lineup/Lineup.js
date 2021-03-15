import React from 'react';
import { Alert, Progress } from 'reactstrap';

import Products from './../Products/Products';

class Lineup extends React.Component {

  componentDidMount() {
    const { loadProducts } = this.props;
    loadProducts();
  }

  render() {

    const { request, products } = this.props;

    if (request.pending) return <Progress animated color="primary" value={50} />;
    else if (request.error) return <Alert color="warning">{request.error}</Alert>;
    else if (!request.success || !products.length) return <Alert color="info">No Data</Alert>;
    else if (request.success) return (
      <>
        <Products products={products} />
      </>
    )

  }
}

export default Lineup;