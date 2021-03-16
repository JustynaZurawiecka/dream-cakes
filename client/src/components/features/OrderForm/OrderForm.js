import React from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col, Alert, Progress } from 'reactstrap';

import './OrderForm.scss';

class OrderForm extends React.Component {

  state = {
    order: {
      title: '',
      price: '',
      count: null,
      inscription: '',
      client: '',
      email: '',
    },
    isError: false,
  }

  updateTextField = ({ target }) => {
    const { order } = this.state;
    const { value, name } = target;

    this.setState({ order: { ...order, [name]: value } });
  }

  submitForm = async (e) => {
    const { order } = this.state;
    const { addOrder } = this.props;

    e.preventDefault();

    if (order.client && order.email && order.inscription && order.count && order.price && order.title) {
      addOrder(order);
      this.setState({
        order: {
          title: '',
          price: '',
          count: null,
          inscription: '',
          client: '',
          email: '',
        },
        isError: false,
      });
    } else {
      this.setState({ isError: true });
    }
  }

  render() {

    {
      Object.entries(localStorage).map(([key, valueJSON]) => {
        const value = JSON.parse(valueJSON);

        const { updateTextField, submitForm } = this;
        const { requests } = this.props;
        const { order, isError } = this.state;



        return (
          <Form className="order-ticket-form" onSubmit={submitForm}>
            <Row>
              <Col xs="12" md="6">
              </Col>
              <Col xs="12" md="6">
                {(isError) && <Alert color="warning">Nie udało się złożyć zamówienia. Upewnij się, że wszystkie pola zostały wypełnione. </Alert>}
                {(requests['ADD_ORDER'] && requests['ADD_ORDER'].error && !isError) && <Alert color="danger">{requests['ADD_ORDER'].error}</Alert>}
                {(requests['ADD_ORDER'] && requests['ADD_ORDER'].success && !isError) && <Alert color="success">Super! Zamówienie zostało złożone pomyślnie.</Alert>}
                {(requests['ADD_ORDER'] && requests['ADD_ORDER'].pending) && <Progress animated className="mb-5" color="primary" value={75} />}
                <FormGroup>
                  <Label for="clientEmail">Imię i nazwisko</Label>
                  <Input type="text" value={order.client} name="client" onChange={updateTextField} id="clientName" />
                </FormGroup>
                <FormGroup>
                  <Label for="clientEmail">Email</Label>
                  <Input type="email" value={order.email} name="email" onChange={updateTextField} id="clientEmail" />
                </FormGroup>
                <Button color="primary" className="mt-3">Finalizuj zamówienie</Button>
              </Col>
            </Row>
          </Form>
        )
      })
    }
  };
}

export default OrderForm;