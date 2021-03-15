import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './PromoCarousel.scss';

const items = [
  {
    src: '/img/promo/promo1.jpeg',
    header: 'TORTY WESELNE',
    caption: 'Tutaj kupisz swój wymarzony tort',
    alt: 'torty weselne',
  },
  {
    src: '/img/promo/promo6.jpeg',
    header: 'TORTY URODZINOWE',
    caption: 'Pieczemy na zamówienie',
    altText: 'torty urodzinowe',
  },
  {
    src: '/img/promo/gofry.jpeg',
    header: 'INNE SŁODKOŚCI',
    caption: 'Zapraszamy do zakupu ciast i ciasteczek na każdą okazję',
    altText: 'slodkosci',
  }
];

const PromoCarousel = () => <UncontrolledCarousel className="promoCarousel" items={items} />;

export default PromoCarousel;