import React from 'react';
import { Row, Col, Container, Alert, Progress, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import './ProductPage.scss';

class ProductPage extends React.Component {

  state = {
    count: '',
  }

  handleChange = event => {
    console.log(event);
    this.setState({
      count: event.target.value,
    })
  }

  addToCart = () => {
    const { count } = this.state;
    localStorage.setItem('count', count);
  }

  componentDidMount() {
    const { loadProduct } = this.props;
    loadProduct(this.props.match.params.id);

    const count = localStorage.getItem('count') || '';
    this.setState({ count });
  }

  render() {

    const { request, product } = this.props;

    if (request.pending) return <Progress animated color="primary" value={50} />;
    else if (request.error) return <Alert color="warning">{request.error}</Alert>;
    else if (!request.success || !product) return <Alert color="info">No Data</Alert>;
    else if (request.success) return (
      <Container>
        <Row noGutters>
          <Col xs="6">
            <div className="product__image-container">
              <img className="product__image-container__img" src={product.image} alt={product.title} />
            </div>
          </Col>
          <Col xs="6">
            <div className="product__info">
              <h1 className="product__info__title">{product.title}</h1>
              <p className="product__info__price">Cena: {product.minPrice}</p>
              <div className="product__info__count">
                <select name="count" id="count" value={this.state.count} onChange={this.handleChange}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <Link to="/go-to-cart">
                <Button className="product__add-button" outline color="primary" onClick={this.addToCart}>Dodaj do koszyka</Button>
              </Link>
            </div>
          </Col>
        </Row>
        <h2>Opis produktu</h2>
        <p>{product.description}</p>
      </Container>
    )
  };
}

export default ProductPage;