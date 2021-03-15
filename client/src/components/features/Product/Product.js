import React from 'react';
import { Row, Col, NavLink, NavItem } from 'reactstrap';

import './Product.scss';

const Product = ({ title, minPrice, image, _id }) => (
  <article className="product">
    <Row noGutters>
      <Col xs="6">
        <div className="product__image-container">
          <NavItem>
            <NavLink href={"/product/" + _id}><img className="product__image-container__img" src={image} alt={title} /></NavLink>
          </NavItem>
        </div>
      </Col>
      <Col xs="6">
        <div className="product__info">
          <img className="product__info__back" src={image} alt={title} />
          <h2 className="product__info__title">{title}</h2>
          <p className="product__info__price">Cena: {minPrice}</p>
        </div>
      </Col>
    </Row>
  </article>
);

export default Product;