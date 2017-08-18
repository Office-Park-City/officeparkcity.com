import React from 'react';
import Main from '../Main/MainContainer';
import Cart from '../Cart/CartContainer';
import Checkout from '../Checkout/CheckoutContainer';

import '../../styles/styles.scss';

const App = ({ history: { location: { pathname } }, history }) => {

  return (
    <div>
    	<Main pathname={pathname} history={history} />
      <Cart pathname={pathname} />
      <Checkout pathname={pathname} />
    </div>
  )
}

export default App;
