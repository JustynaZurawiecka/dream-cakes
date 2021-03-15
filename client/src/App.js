import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';

// import routes
import Home from './components/pages/Home/HomePage';
import NotFound from './components/pages/NotFound/NotFoundPage';
import ProductPage from './components/pages/ProductPage/ProductPageContainer';
import Cart from './components/pages/CartPage/CartPageContainer.js';
import Order from './components/pages/Order/OrderPage.js';

class App extends React.Component {

  render() {
    return (
      <MainLayout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product/:id" exact component={ProductPage} />
          <Route path="/go-to-cart" exact component={Cart} />
          <Route path="/order-a-product" exact component={Order} />
          <Route component={NotFound} />
        </Switch>
      </MainLayout>
    );
  }

}

export default App;
