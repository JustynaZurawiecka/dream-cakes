import React from 'react';

import { Container } from 'reactstrap';
import OrderForm from '../../features/OrderForm/OrderFormContainer';

const Order = () => (
  <Container>
    <h1>Podsumowanie zamówienia</h1>
    <OrderForm />
  </Container>
);

export default Order;