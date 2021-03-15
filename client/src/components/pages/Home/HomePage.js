import React from 'react';
import { Container } from 'reactstrap';

import PromoCarousel from './../../features/PromoCarousel/PromoCarousel';
import Lineup from './../../features/Lineup/LineupContainer';

const HomePage = () => (
  <div>
    <PromoCarousel />
    <Container>
      <h1>Oferta ciast i tortów</h1>
      <Lineup />
    </Container>
  </div>
);

export default HomePage;
