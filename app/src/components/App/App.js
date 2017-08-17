import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Cart from '../Cart/CartContainer';
import Checkout from '../Checkout/CheckoutContainer';

import '../../styles/styles.scss';

const App = () => {

  return (
    <div>
    	<main className="main main--inactive">Main Content</main>
      <Cart />
      <Checkout />
    </div>
  )
}

export default App;
